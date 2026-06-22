const fs = require('fs');
const path = require('path');

const rootAppDir = 'D:/projects/tal-react/app';

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
            
            // Replace imports that point to test/src
            const updatedContent = content.replace(/import (.+?) from '(.+?)';/g, (match, component, importPath) => {
                let newPath = importPath;
                
                // If it's a relative path pointing to test/src
                if (importPath.includes('test/src')) {
                    // We need to determine the depth of the current file to create the correct relative path
                    const relativeFromRoot = path.relative('D:/projects/tal-react', filePath);
                    const depth = relativeFromRoot.split(path.sep).length - 2; // -1 for filename, -1 for root
                    
                    let prefix = '../'.repeat(depth);
                    // Remove the existing relative prefix and just use test/src
                    const cleanPath = importPath.split('test/src').pop();
                    newPath = `${prefix}test/src${cleanPath}`;
                }

                // Ensure .jsx extension
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
