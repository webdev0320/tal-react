import fs from 'fs';
import path from 'path';

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let changed = false;

      if (content.includes('react-router-dom')) {
        // Link replacement
        if (content.includes('import { Link } from \'react-router-dom\'') || content.includes('import {Link} from \'react-router-dom\'') || content.includes('import { Link, useLocation } from \'react-router-dom\'') || content.includes('import { Link, useParams } from \'react-router-dom\'')) {
          content = content.replace(/import\s*\{\s*([^}]*)\s*\}\s*from\s*['"]react-router-dom['"]/g, (match, imports) => {
            let newImports = '';
            let nextNavImports = [];
            if (imports.includes('Link')) newImports += `import Link from 'next/link';\n`;
            if (imports.includes('useLocation')) nextNavImports.push('usePathname');
            if (imports.includes('useNavigate')) nextNavImports.push('useRouter');
            if (imports.includes('useParams')) nextNavImports.push('useParams');
            
            if (nextNavImports.length > 0) {
              newImports += `import { ${nextNavImports.join(', ')} } from 'next/navigation';\n`;
            }
            return newImports.trim();
          });
          changed = true;
        }

        // Catch remaining generic react-router-dom imports just in case
        if (content.includes('react-router-dom')) {
           content = content.replace(/import\s*\{[^}]*\}\s*from\s*['"]react-router-dom['"];?/g, '// react-router-dom removed');
           changed = true;
        }
      }

      if (content.includes('<Link')) {
        content = content.replace(/<Link\s+to=/g, '<Link href=');
        changed = true;
      }
      
      if (content.includes('useLocation()')) {
        content = content.replace(/useLocation\(\)/g, 'usePathname()');
        content = content.replace(/const\s+location\s*=\s*usePathname\(\)/g, 'const pathname = usePathname()');
        content = content.replace(/location\.pathname/g, 'pathname');
        changed = true;
      }

      if (content.includes('useNavigate()')) {
        content = content.replace(/useNavigate\(\)/g, 'useRouter()');
        content = content.replace(/const\s+navigate\s*=\s*useRouter\(\)/g, 'const router = useRouter()');
        content = content.replace(/navigate\(/g, 'router.push(');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated: ' + fullPath);
      }
    }
  }
}

processDirectory(path.join(process.cwd(), 'src/pages'));
processDirectory(path.join(process.cwd(), 'src/components'));
processDirectory(path.join(process.cwd(), 'src/app'));
