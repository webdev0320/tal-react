import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';
import { execSync } from 'child_process'; // Allows us to run terminal commands

const parser = new xml2js.Parser();
const XML_FILE_PATH = './public/pages.xml'; 
const COMPONENTS_DIR = './src/pages'; 

async function generateMissingPages() {
  try {
    // 1. Get list of already existing pages
    const existingFiles = fs.readdirSync(COMPONENTS_DIR)
      .map(file => path.parse(file).name.toLowerCase());

    // 2. Read and parse WordPress XML
    const xmlData = fs.readFileSync(XML_FILE_PATH, 'utf-8');
    const result = await parser.parseStringPromise(xmlData);
    const items = result.rss.channel[0].item || [];

    console.log(`🔍 Found ${items.length} total entries in XML. Checking for missing pages...`);

    for (const item of items) {
      const title = item.title[0];
      const slug = item['wp:post_name'] ? item['wp:post_name'][0] : '';
      const postType = item['wp:post_type'] ? item['wp:post_type'][0] : '';
      const rawContent = item['content:encoded'] ? item['content:encoded'][0] : '';

      if (!slug || (postType !== 'page' && postType !== 'post')) continue;

      const componentName = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

      // Skip if already generated or created manually
      if (existingFiles.includes(componentName.toLowerCase()) || existingFiles.includes(slug.toLowerCase())) {
        continue; 
      }

      console.log(`🤖 Triggering local CLI for page: "${title}" (${componentName}.jsx)...`);

      // 3. Construct the prompt text
      const promptText = `
You are an expert React developer. Convert the following WordPress page content into a modern, clean React component.

Component Name: ${componentName}
Page Title: ${title}
Raw WordPress HTML Content:
${rawContent}

Requirements:
- Return ONLY valid React component code. Do not wrap it in markdown code blocks.
- Use modern functional components.
- Clean up standard WordPress clutter like shortcodes or inline styling.
- Use standard Tailwind CSS classes for basic spacing and alignment.
- Ensure all HTML tags are closed properly to be valid JSX.
`.trim();

      try {
        // Write the prompt to a temporary file to avoid shell command length limits
        const tempPromptPath = path.join(process.cwd(), 'temp_prompt.txt');
        fs.writeFileSync(tempPromptPath, promptText, 'utf-8');

        // 4. Run your gemini command using the temp file as input
        // Note: Update "gemini" to your exact global terminal command if it differs
        const componentCode = execSync(`gemini < "${tempPromptPath}"`, { encoding: 'utf-8' }).trim();

        // Clean up markdown fences if your CLI forces them into the output anyway
        const cleanCode = componentCode.replace(/^```jsx?|```$/gi, '').trim();

        // 5. Save the generated component
        const targetPath = path.join(COMPONENTS_DIR, `${componentName}.jsx`);
        fs.writeFileSync(targetPath, cleanCode, 'utf-8');
        console.log(`✅ Successfully created: ${targetPath}`);

        // Remove the temporary prompt file
        if (fs.existsSync(tempPromptPath)) fs.unlinkSync(tempPromptPath);

      } catch (cliError) {
        console.error(`❌ Local CLI failed on "${title}":`, cliError.message);
      }
    }

    console.log('🎉 Process complete!');
  } catch (error) {
    console.error('❌ Critical Error:', error);
  }
}

generateMissingPages();