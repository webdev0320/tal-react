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
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let changed = false;

      // Fix: <Link ... to="..." or to={...} -> href="..." or href={...}
      // This catches ALL positions of `to=` within a Link tag, not just at the start
      if (content.includes(' to=') || content.includes('\tto=')) {
        const newContent = content.replace(/(<Link\b[^>]*?)\bto=/g, '$1href=');
        if (newContent !== content) {
          content = newContent;
          changed = true;
        }
      }

      // Fix remaining react-router useParams -> Next.js useParams 
      // (next/navigation useParams returns an object, compatible)
      if (content.includes("from 'react-router-dom'") || content.includes('from "react-router-dom"')) {
        content = content.replace(/import\s*\{([^}]*)\}\s*from\s*['"]react-router-dom['"]/g, (match, imports) => {
          const parts = imports.split(',').map(s => s.trim()).filter(Boolean);
          let nextLinkImport = '';
          let nextNavImports = [];

          for (const part of parts) {
            const clean = part.replace(/\s+as\s+\w+/, '').trim();
            if (clean === 'Link') nextLinkImport = `import Link from 'next/link';`;
            else if (clean === 'NavLink') nextLinkImport = `import Link from 'next/link';`;
            else if (clean === 'useNavigate') nextNavImports.push('useRouter');
            else if (clean === 'useLocation') nextNavImports.push('usePathname');
            else if (clean === 'useParams') nextNavImports.push('useParams');
            else if (clean === 'useSearchParams') nextNavImports.push('useSearchParams');
          }

          let result = '';
          if (nextLinkImport) result += nextLinkImport + '\n';
          if (nextNavImports.length > 0) result += `import { ${nextNavImports.join(', ')} } from 'next/navigation';`;
          return result.trim() || '// react-router-dom removed';
        });
        changed = true;
      }

      // Fix NavLink to= -> href=
      if (content.includes('<NavLink')) {
        content = content.replace(/<NavLink\b/g, '<Link');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed: ' + fullPath);
      }
    }
  }
}

processDirectory(path.join(process.cwd(), 'src'));
console.log('Done fixing Link props.');
