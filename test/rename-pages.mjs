import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');
const pagesDir = path.join(srcDir, 'pages');
const viewsDir = path.join(srcDir, 'views');

if (fs.existsSync(pagesDir)) {
  fs.renameSync(pagesDir, viewsDir);
}

function replaceInDir(directory) {
  if (!fs.existsSync(directory)) return;
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let newContent = content.replace(/['"](.*)\/pages\//g, "'$1/views/");
      newContent = newContent.replace(/['"]\.\/pages\//g, "'./views/");
      newContent = newContent.replace(/['"]\.\.\/pages\//g, "'../views/");
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent);
      }
    }
  }
}

replaceInDir(srcDir);
console.log('Renamed pages to views and updated imports.');
