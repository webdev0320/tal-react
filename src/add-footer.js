import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'pages');

function processFile(filePath, isHome = false) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if Footer is already imported
  let hasFooterImport = content.includes('import Footer');
  if (!hasFooterImport) {
    const importStatement = isHome 
      ? "import Footer from './components/Footer';\n"
      : "import Footer from '../components/Footer';\n";
    
    // Insert import after the last import statement or at the top
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfLastImport = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfLastImport + 1) + importStatement + content.slice(endOfLastImport + 1);
    } else {
      content = importStatement + content;
    }
  }

  // Check if <Footer /> is already rendered
  if (!content.includes('<Footer />')) {
    const returnMatch = content.lastIndexOf(');');
    if (returnMatch !== -1) {
      const lastClosingTagIndex = content.lastIndexOf('</', returnMatch);
      if (lastClosingTagIndex !== -1) {
         // Insert Footer right before the last closing tag
         content = content.slice(0, lastClosingTagIndex) + '  <Footer />\n      ' + content.slice(lastClosingTagIndex);
      }
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed: ${filePath}`);
}

const files = fs.readdirSync(pagesDir);
files.forEach(file => {
  if (file.endsWith('.jsx')) {
    processFile(path.join(pagesDir, file));
  }
});

const homePath = path.join(__dirname, 'Home.jsx');
if (fs.existsSync(homePath)) {
  processFile(homePath, true);
}
