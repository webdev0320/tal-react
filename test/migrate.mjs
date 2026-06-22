import fs from 'fs';
import path from 'path';

const appJsx = fs.readFileSync(path.join(process.cwd(), 'src/App.jsx'), 'utf-8');

const routes = [...appJsx.matchAll(/<Route path="([^"]+)" element=\{<MainLayout><([^ ]+) \/><\/MainLayout>\}/g)];

// Special dynamic routes
// <Route path="/industries/:slug" element={<MainLayout><IndustryPage /></MainLayout>} />
// <Route path="/packages/:slug" element={<MainLayout><PackagePage /></MainLayout>} />
// <Route path="/taxation/:slug" element={<MainLayout><TaxationSubPage /></MainLayout>} />
// <Route path="/blog/:slug" element={<MainLayout><SingleBlog /></MainLayout>} />
// <Route path="*" element={<MainLayout><DynamicWpPage /></MainLayout>} />

const dynamicRoutes = [
  { path: '/industries/[slug]', component: 'IndustryPage' },
  { path: '/packages/[slug]', component: 'PackagePage' },
  { path: '/taxation/[slug]', component: 'TaxationSubPage' },
  { path: '/blog/[slug]', component: 'SingleBlog' },
];

const allRoutes = routes.map(match => ({ path: match[1], component: match[2] }));

const appDir = path.join(process.cwd(), 'src/app');

if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
}

function createPage(routePath, componentName) {
  if (routePath === '*' || routePath.includes(':')) return; // Ignore for now

  let routeFolder = routePath === '/' ? appDir : path.join(appDir, routePath.replace(/^\//, ''));
  if (!fs.existsSync(routeFolder)) {
    fs.mkdirSync(routeFolder, { recursive: true });
  }

  const pageContent = `import ${componentName} from '../../${routePath === '/' ? '' : '../'}pages/${componentName}';\n\nexport default function Page() {\n  return <${componentName} />;\n}\n`;
  // Fix imports based on depth
  const depth = routePath === '/' ? 1 : routePath.split('/').filter(Boolean).length + 1;
  const relativePrefix = '../'.repeat(depth);
  const correctImport = routePath === '/' 
    ? `import ${componentName} from '../Home';`
    : `import ${componentName} from '${relativePrefix}pages/${componentName}';`;

  const finalPageContent = `${correctImport}\n\nexport default function Page() {\n  return <${componentName} />;\n}\n`;

  fs.writeFileSync(path.join(routeFolder, 'page.jsx'), finalPageContent);
}

for (const route of allRoutes) {
  createPage(route.path, route.component);
}

for (const dynRoute of dynamicRoutes) {
  const routeFolder = path.join(appDir, dynRoute.path);
  if (!fs.existsSync(routeFolder)) {
    fs.mkdirSync(routeFolder, { recursive: true });
  }
  const depth = dynRoute.path.split('/').filter(Boolean).length + 1;
  const relativePrefix = '../'.repeat(depth);
  const correctImport = `import ${dynRoute.component} from '${relativePrefix}pages/${dynRoute.component}';`;
  
  const finalPageContent = `import ${dynRoute.component} from '${relativePrefix}pages/${dynRoute.component}';\n\nexport default function Page({ params }) {\n  return <${dynRoute.component} params={params} />;\n}\n`;
  fs.writeFileSync(path.join(routeFolder, 'page.jsx'), finalPageContent);
}

// Generate catch-all
const catchAllFolder = path.join(appDir, '[...slug]');
if (!fs.existsSync(catchAllFolder)) {
  fs.mkdirSync(catchAllFolder, { recursive: true });
}
const catchAllContent = `import DynamicWpPage from '../../pages/DynamicWpPage';\n\nexport default function Page() {\n  return <DynamicWpPage />;\n}\n`;
fs.writeFileSync(path.join(catchAllFolder, 'page.jsx'), catchAllContent);

console.log('Migration complete!');
