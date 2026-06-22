import fs from 'fs';
import path from 'path';

let fixCount = 0;

function processDirectory(directory) {
  if (!fs.existsSync(directory)) return;
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (/\.(jsx|js|tsx|ts)$/.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let changed = false;

      // Fix double semicolons in imports
      if (content.includes(';;')) {
        content = content.replace(/;;/g, ';');
        changed = true;
      }

      // Fix: const { pathname } = usePathname() → const pathname = usePathname()
      if (content.includes('const { pathname } = usePathname()')) {
        content = content.replace(/const\s*\{\s*pathname\s*\}\s*=\s*usePathname\(\)/g, 'const pathname = usePathname()');
        changed = true;
      }

      // Fix: const navigate = useRouter() → const router = useRouter()
      // and navigate( → router.push(
      if (content.includes('const navigate = useRouter()')) {
        content = content.replace(/const\s+navigate\s*=\s*useRouter\(\)/g, 'const router = useRouter()');
        content = content.replace(/\bnavigate\s*\(/g, 'router.push(');
        changed = true;
      }

      // Fix: useLocation() → usePathname() (if someone still uses old name)
      if (content.includes('useLocation()') && !content.includes('react-router')) {
        content = content.replace(/useLocation\(\)/g, 'usePathname()');
        content = content.replace(/const\s+location\s*=\s*usePathname\(\)/g, 'const pathname = usePathname()');
        content = content.replace(/location\.pathname/g, 'pathname');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        fixCount++;
        console.log('Sanitized: ' + fullPath);
      }
    }
  }
}

processDirectory(path.join(process.cwd(), 'src'));
console.log(`\nDone. Fixed ${fixCount} files.`);
