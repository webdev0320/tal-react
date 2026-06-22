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
                
                // Check if the path is trying to go to src
                if (importPath.includes('src')) {
                    const relativeToRoot = path.relative(projectRoot, filePath);
                    const depth = relativeToRoot.split(path.sep).length - 1;
                    let prefix = '../'.repeat(depth);
                    
                    // Extract the part after 'src/'
                    const srcIndex = importPath.indexOf('src/');
                    const cleanPath = importPath.substring(srcIndex + 4);
                    newPath = `${prefix}src/${cleanPath}`;
                }

                // Ensure extension is .jsx
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
    console.log('Successfully updated all imports in root app directory.');
} catch (err) {
    console.error('Error updating imports:', err);
    process.exit(1);
}
