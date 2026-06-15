const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ================= CONFIGURATION =================
const REPORT_FILE = './audit_report.md';
const WP_DIR = './wp-extracted-pages';
const OUTPUT_REACT_DIR = './src/pages'; // Where you want the new files written
const GEN_PROMPT_FILE = './generation-prompt.txt';
const CLI_COMMAND = 'gemini'; // Adjust to 'gemini-cli' if needed
// =================================================

if (!fs.existsSync(OUTPUT_REACT_DIR)) {
    fs.mkdirSync(OUTPUT_REACT_DIR, { recursive: true });
}

console.log("🔍 Parsing audit report for missing pages...");
const report = fs.readFileSync(REPORT_FILE, 'utf8');

// Regex to capture pages flagged as SKIP
const skipRegex = /## Page:\s*\/([a-zA-Z0-9-_]+)[\s\S]*?STATUS:\s*SKIP/g;
let match;
const skippedSlugs = [];

while ((match = skipRegex.exec(report)) !== null) {
    skippedSlugs.push(match[1]);
}

if (skippedSlugs.length === 0) {
    console.log("🎉 No missing pages found in the audit report!");
    process.exit(0);
}

console.log(`🛠️ Found ${skippedSlugs.length} missing pages to generate:`, skippedSlugs);

const systemPromptBase = fs.readFileSync(GEN_PROMPT_FILE, 'utf8');

skippedSlugs.forEach((slug) => {
    const wpFilePath = path.join(WP_DIR, `${slug}.txt`);
    
    if (!fs.existsSync(wpFilePath)) {
        console.warn(`⚠️ Raw content file missing for /${slug}, skipping generation.`);
        return;
    }

    console.log(`\n🚀 Generating React component for: /${slug}...`);
    const wpContent = fs.readFileSync(wpFilePath, 'utf8');

    // PascalCase the filename for the component (e.g., about-us -> AboutUs)
    const componentName = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

    // Inject contextual variables into system prompt
    let dynamicPrompt = systemPromptBase
        .replace('{{SLUG_NAME}}', slug)
        .replace('{{WP_CONTENT}}', wpContent)
        .replace(/"/g, '\\"'); // Escape quotes for terminal transmission

    try {
        const runCmd = `${CLI_COMMAND} run --system "${dynamicPrompt}" --prompt "Generate the React component code matching the rules exactly."`;
        const codeOutput = execSync(runCmd, { encoding: 'utf8' });

        // Clean up markdown block styling ticks if the CLI returns them
        const cleanCode = codeOutput.replace(/```javascript|```jsx|```tsx|```/g, '').trim();

        // Write directly into your target directory
        const outputFilePath = path.join(OUTPUT_REACT_DIR, `${slug}.jsx`);
        fs.writeFileSync(outputFilePath, cleanCode);
        console.log(`✅ Successfully created: ${outputFilePath}`);
    } catch (err) {
        console.error(`❌ Generation failed for /${slug}:`, err.message);
    }
});

console.log("\n================ 🎉 Generation Complete! ================");