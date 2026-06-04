import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';
import { GoogleGenAI } from '@google/genai';

// Initialize the official Gemini SDK (2026 standard)
const MY_GEMINI_KEY = "AQ.Ab8RN6KWmQROPh7ti8VQrerIeia8Rwe9uDcyRSc0i5DHYwquVg";
const ai = new GoogleGenAI({ apiKey: MY_GEMINI_KEY });
const parser = new xml2js.Parser();

// Configuration
const XML_FILE_PATH = './public/pages.xml'; 
const COMPONENTS_DIR = './src/pages'; // Path to your React pages

async function generateMissingPages() {
  try {
    // 1. Get list of already existing pages (lowercase names without extensions)
    const existingFiles = fs.readdirSync(COMPONENTS_DIR)
      .map(file => path.parse(file).name.toLowerCase());

    // 2. Read and parse WordPress XML
    const xmlData = fs.readFileSync(XML_FILE_PATH, 'utf-8');
    const result = await parser.parseStringPromise(xmlData);
    
    // WordPress XML structures items inside channel -> item
    const items = result.rss.channel[0].item || [];

    console.log(`🔍 Found ${items.length} total entries in XML. Checking for missing pages...`);

    for (const item of items) {
      const title = item.title[0];
      // Extract post_name (slug) and post_type
      const slug = item['wp:post_name'] ? item['wp:post_name'][0] : '';
      const postType = item['wp:post_type'] ? item['wp:post_type'][0] : '';
      const rawContent = item['content:encoded'] ? item['content:encoded'][0] : '';

      // Only process actual pages or posts, and skip empty slugs
      if (!slug || (postType !== 'page' && postType !== 'post')) continue;

      // Safe component name (e.g., "about-us" -> "AboutUs")
      const componentName = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

      // Check if it already exists
      if (existingFiles.includes(componentName.toLowerCase()) || existingFiles.includes(slug.toLowerCase())) {
        console.log(`⏭️ Skipping "${title}" (Already exists as a component)`);
        continue;
      }

      console.log(`🤖 Generating component for missing page: "${title}" (${componentName}.jsx)...`);

      // 3. Ask Gemini to convert the raw WP content into a beautiful React component
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash', // Fast and highly capable for structured code generation
        contents: `
          You are an expert React developer. Convert the following WordPress page content into a modern, clean React component.
          
          Component Name: ${componentName}
          Page Title: ${title}
          Raw WordPress HTML Content:
          ${rawContent}

          Requirements:
          - Return ONLY valid React component code. Do not wrap it in markdown code blocks (\`\`\`).
          - Use modern functional components with hooks if needed.
          - Clean up standard WordPress clutter (like [caption] shortcodes or inline styling). Convert them to clean JSX elements.
          - Assume standard Tailwind CSS classes are available if you want to add basic structural styling (margins, padding, container, typography).
          - Ensure all HTML tags are closed properly to be valid JSX (e.g., <img />, <br />).
        `,
      });

      const componentCode = response.text.trim();

      // 4. Save the generated component
      const targetPath = path.join(COMPONENTS_DIR, `${componentName}.jsx`);
      fs.writeFileSync(targetPath, componentCode, 'utf-8');
      console.log(`✅ Successfully created: ${targetPath}`);
    }

    console.log('🎉 Automation complete!');
  } catch (error) {
    console.error('❌ Error during generation:', error);
  }
}

generateMissingPages();