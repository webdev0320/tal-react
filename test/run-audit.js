const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ================= CONFIGURATION =================
const WP_DIR = './wp-extracted-pages';
const REACT_DIR = './src/pages'; // <-- CHANGE THIS to your actual React components folder (e.g., './src/app', './app', etc.)
const REPORT_FILE = './audit_report.md';
const SYSTEM_PROMPT_FILE = './system-prompt.txt';
// =================================================

console.log("=== Starting Diagnostic Check ===");

// 1. Verify WordPress Extracted Directory
if (!fs.existsSync(WP_DIR)) {
    console.error(`❌ ERROR: Directory "${WP_DIR}" does not exist. Did you run "node extract-wp-pages.js" first?`);
    process.exit(1);
}

const wpFiles = fs.readdirSync(WP_DIR).filter(file => file.endsWith('.txt'));
console.log(`📂 Found ${wpFiles.length} extracted WordPress pages.`);

if (wpFiles.length === 0) {
    console.error(`❌ ERROR: No .txt files found in "${WP_DIR}". Check your pages.xml content.`);
    process.exit(1);
}

// 2. Verify System Prompt File
if (!fs.existsSync(SYSTEM_PROMPT_FILE)) {
    console.error(`❌ ERROR: System prompt file "${SYSTEM_PROMPT_FILE}" is missing. Please create it.`);
    process.exit(1);
}

// 3. Verify React Directory
if (!fs.existsSync(REACT_DIR)) {
    console.warn(`⚠️ WARNING: React directory "${REACT_DIR}" not found! Please open run-audit.js and correct the REACT_DIR path.`);
    process.exit(1);
}

// 4. Verify Gemini CLI Binary exists in terminal environment
let cliCommand = 'gemini'; 
try {
    execSync('gemini --version', { stdio: 'ignore' });
} catch (e) {
    try {
        execSync('gemini-cli --version', { stdio: 'ignore' });
        cliCommand = 'gemini-cli';
    } catch (err) {
        console.error("❌ ERROR: Neither 'gemini' nor 'gemini-cli' command was found in your terminal environment.");
        console.error("👉 Please type the exact command you use to run your Gemini CLI manually to verify it works.");
        process.exit(1);
    }
}
console.log(`🤖 Using Gemini CLI binary: "${cliCommand}"`);

// ================= START AUDIT =================
console.log(`\n📝 Initializing ${REPORT_FILE}...`);
let reportContent = `# Content Audit Report\nGenerated on: ${new Date().toLocaleString()}\n\n`;

wpFiles.forEach((file) => {
    const slug = path.basename(file, '.txt');
    const wpFilePath = path.join(WP_DIR, file);
    
    console.log(`\nProcessing page: /${slug}`);
    reportContent += `## Page: /${slug}\n`;

    // Look for matching React file extensions (.jsx, .tsx, .js) or directory-based routing (/about/index.jsx)
    const possiblePaths = [
        path.join(REACT_DIR, `${slug}.jsx`),
        path.join(REACT_DIR, `${slug}.tsx`),
        path.join(REACT_DIR, `${slug}.js`),
        path.join(REACT_DIR, slug, 'index.jsx'),
        path.join(REACT_DIR, slug, 'index.tsx'),
        path.join(REACT_DIR, slug, 'page.tsx'), // Next.js App router support
        path.join(REACT_DIR, slug, 'page.jsx')
    ];

    let reactFilePath = possiblePaths.find(p => fs.existsSync(p));

    if (reactFilePath) {
        console.log(`  └─ Found matching React file: ${reactFilePath}`);
        try {
            // Build the execution command safely handling file arguments
            const systemPrompt = fs.readFileSync(SYSTEM_PROMPT_FILE, 'utf8').replace(/"/g, '\\"');
            
            // Execute the CLI tool synchronously
            const runCmd = `${cliCommand} run --system "${systemPrompt}" --prompt "Compare content" --files "${wpFilePath}" "${reactFilePath}"`;
            const output = execSync(runCmd, { encoding: 'utf8' });
            
            reportContent += `${output}\n`;
            console.log(`  └─ Audit complete for /${slug}`);
        } catch (error) {
            console.error(`  ❌ Failed execution for /${slug}:`, error.message);
            reportContent += `- **STATUS: ERROR** (Failed to run audit CLI command)\n`;
        }
    } else {
        console.log(`  ⚠️ No matching React component found for /${slug}`);
        reportContent += `- **STATUS: SKIP** (No matching React component found)\n`;
    }
    reportContent += `\n---\n`;
});

fs.writeFileSync(REPORT_FILE, reportContent);
console.log(`\n======== 🎉 Audit Finished! Output saved to ${REPORT_FILE} ========`);