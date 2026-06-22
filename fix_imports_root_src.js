const fs = require('fs');
const path = require('path');

const rootAppDir = 'D:/projects/tal-react/app';
const projectRoot = 'D:/projects/tal-react';

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f), f);
    });
}

try {
    walk(rootAppDir, (filePath, fileName) => {
        if (fileName.endsWith('.jsx') || fileName.endsWith('.js')) {
            const content = fs.readFileSync(filePath, 'utf8');
            
            const updatedContent = content.replace(/import (.+?) from '(.+?)';/g, (match, component, importPath) => {
                let newPath = importPath;
                
                // Now we move from test/src to just src
                if (importPath.includes('test/src')) {
                    const relativeToRoot = path.relative(projectRoot, filePath);
                    const depth = relativeToRoot.split(path.sep).length - 1;
                    let prefix = '../'.repeat(depth);
                    const cleanPath = importPath.split('test/src').pop();
                    newPath = `${prefix}src${cleanPath}`;
                } else if (importPath.includes('src')) {
                    // Ensure it's correctly relative to the current file depth
                    const relativeToRoot = path.relative(projectRoot, filePath);
                    const depth = relativeToRoot.split(path.sep).length - 1;
                    let prefix = '../'.repeat(depth);
                    const cleanPath = importPath.split('src').pop();
                    newPath = `${prefix}src${cleanPath}`;
                }

                if (!newPath.endsWith('.jsx') && !newPath.endsWith('.js') && !newPath.endsWith('.css')) {
                    newPath += '.jsx';
                }

                return `import ${component} from '${newPath}';`;
            });

            if (content !== updatedContent) {
                fs.writeFileSync(filePath, updatedContent, 'utf8');
                console.log(`Updated ${filePath}`);
            }
        }
    });
    console.log('Successfully updated all imports to use root src directory.');
} catch (err) {
    console.error('Error updating imports:', err);
    process.exit(1);
}
