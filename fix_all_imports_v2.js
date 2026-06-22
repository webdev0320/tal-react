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
                
                if (importPath.includes('test/src')) {
                    // Calculate distance from filePath to projectRoot
                    const relativeToRoot = path.relative(projectRoot, filePath);
                    const segments = relativeToRoot.split(path.sep);
                    // Depth is number of directories before the filename
                    const depth = segments.length - 1; 
                    
                    let prefix = '../'.repeat(depth);
                    const cleanPath = importPath.split('test/src').pop();
                    newPath = `${prefix}test/src${cleanPath}`;
                }

                if (!newPath.endsWith('.jsx') && !newPath.endsWith('.js') && !newPath.endsWith('.css')) {
                    newPath += '.jsx';
                }

                return `import ${component} from '${newPath}';`;
            });

            if (content !== updatedContent) {
                fs.writeFileSync(filePath, updatedContent, 'utf8');
                console.log(`Updated ${filePath} with depth ${path.relative(projectRoot, filePath).split(path.sep).length - 1}`);
            }
        }
    });
    console.log('Successfully updated all imports with corrected depth.');
} catch (err) {
    console.error('Error updating imports:', err);
    process.exit(1);
}
