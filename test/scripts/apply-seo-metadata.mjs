import fs from 'fs';
import path from 'path';

const appDir = path.join(process.cwd(), 'src', 'app');

/** @type {Record<string, string>} */
const accountPages = {
  'accounts/bookkeeping-services': 'bookkeeping-services.js',
  'accounts/statutory-accounts': 'statutory-accounts.js',
  'accounts/management-accounts': 'management-accounts.js',
  'accounts/payroll-services': 'payroll-services.js',
  'accounts/hmrc-self-assessment-tax-returns-accountant': 'hmrc-self-assessment-tax-returns-accountant.js',
  'accounts/auto-enrolment-pension-contributions': 'auto-enrolment-pension-contributions.js',
  'accounts/consolidated-accounts': 'consolidated-accounts.js',
  'accounts/financial-forecasting': 'financial-forecasting.js',
  'accounts/cash-flow-forecasting': 'cash-flow-forecasting.js',
};

const skipPages = new Set([
  'page.jsx',
  'taxation/[slug]/page.jsx',
  'packages/[slug]/page.jsx',
  'industries/[slug]/page.jsx',
  'blog/[slug]/page.jsx',
  '[...slug]/page.jsx',
]);

function depthFromApp(relativePath) {
  return relativePath.split('/').slice(0, -1).length;
}

function relImport(depth, suffix) {
  return `${'../'.repeat(depth + 1)}${suffix}`;
}

function getComponentName(importLine) {
  const defaultMatch = importLine.match(/import\s+(\w+)\s+from/);
  return defaultMatch?.[1] || 'Page';
}

function buildPageContent(relativePath, viewImport, content) {
  const depth = depthFromApp(relativePath);
  const routeKey = relativePath.replace('/page.jsx', '');
  const routePath = `/${routeKey}`;
  const component = getComponentName(viewImport);
  const hasParams = /export default function Page\(\{\s*params\s*\}\)/.test(content);
  const paramsProp = hasParams ? ' params={params}' : '';
  const paramsArg = hasParams ? '{ params }' : '';

  const accountConfig = accountPages[routeKey];
  let header;

  if (accountConfig) {
    header = `import pageConfig from '${relImport(depth, `data/accountsPages/${accountConfig}`)}';
import { createAccountPageMetadata } from '${relImport(depth, 'lib/seo')}';
${viewImport}

export const metadata = createAccountPageMetadata(pageConfig);
`;
  } else {
    header = `import { metadataForPath } from '${relImport(depth, 'lib/seo')}';
${viewImport}

export const metadata = metadataForPath('${routePath}');
`;
  }

  return `${header}
export default function Page(${paramsArg}) {
  return <${component}${paramsProp} />;
}
`;
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
      continue;
    }
    if (entry.name === 'page.jsx') files.push(full);
  }
  return files;
}

let updated = 0;

for (const filePath of walk(appDir)) {
  const relative = path.relative(appDir, filePath).replace(/\\/g, '/');
  if (relative === 'page.jsx' || skipPages.has(relative)) continue;

  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('export const metadata') || content.includes('generateMetadata')) {
    console.log(`skip: ${relative}`);
    continue;
  }

  const importMatch = content.match(/^import .+ from .+;\n/m);
  if (!importMatch) {
    console.log(`no import: ${relative}`);
    continue;
  }

  fs.writeFileSync(filePath, buildPageContent(relative, importMatch[0].trim(), content), 'utf8');
  console.log(`updated: ${relative}`);
  updated += 1;
}

console.log(`Done. Updated ${updated} pages.`);
