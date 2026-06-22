const fs = require('fs');
const filePath = 'D:/projects/tal-react/app/[...slug]/page.jsx';
try {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(/import (.+?) from '(.+?)';/g, (match, component, path) => {
        let newPath = path;
        if (path.includes('test/src')) {
            // Correct relative path from D:\projects	al-react\app\[...slug]\page.jsx to D:\projects	al-react	est\src\...
            // .. -> app/
            // .. -> root/
            // test/src/ -> test/src/
            newPath = path.replace(/^\.\.\/\.\.\/test\/src\//, '../../test/src/');
        }
        
        // Ensure extension is .jsx
        if (!newPath.endsWith('.jsx') && !newPath.endsWith('.js')) {
            newPath += '.jsx';
        }

        return `import ${component} from '${newPath}';`;
    });
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log('Successfully updated imports in root app slug page');
} catch (err) {
    console.error('Error updating file:', err);
    process.exit(1);
}
