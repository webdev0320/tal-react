import fs from 'fs';
import path from 'path';

function processDirectory(directory) {
  if (!fs.existsSync(directory)) return;
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      // Ensure "use client" is at the top
      if (!content.includes('"use client"') && !content.includes("'use client'")) {
        content = '"use client";\n' + content;
        fs.writeFileSync(fullPath, content);
        console.log('Added use client to: ' + fullPath);
      }
    }
  }
}

processDirectory(path.join(process.cwd(), 'src/pages'));
processDirectory(path.join(process.cwd(), 'src/components'));
processDirectory(path.join(process.cwd(), 'src/react-pages'));
