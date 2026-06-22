const fs = require('fs');
const filePath = 'D:/projects/tal-react/test/app/[...slug]/page.jsx';
try {
    const content = fs.readFileSync(filePath, 'utf8');
    // We need to go up two levels from test/app/[...slug]/page.jsx to reach test/
    // Then into src/
    const updatedContent = content.replace(/import (.+?) from '(.+?)';/g, (match, component, path) => {
        // Remove any existing relative path and replace with ../../src/
        // Handle both .jsx and no extension
        let newPath = path;
        if (path.startsWith('../')) {
            // Replace any number of '../' with '../../' if it's pointing to src
            if (path.includes('src')) {
                newPath = path.replace(/^\.\.\.\/test\/src\//, '../../src/');
                newPath = newPath.replace(/^\.\.\/src\//, '../../src/');
                newPath = newPath.replace(/^\.\.\.\/src\//, '../../src/');
            }
        }
        
        // Ensure extension is .jsx
        if (!newPath.endsWith('.jsx')) {
            newPath += '.jsx';
        }

        return `import ${component} from '${newPath}';`;
    });
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log('Successfully updated imports to ../../src/ in page.jsx');
} catch (err) {
    console.error('Error updating file:', err);
    process.exit(1);
}
