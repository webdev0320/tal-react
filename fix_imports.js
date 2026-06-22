const fs = require('fs');
const filePath = 'D:\projects	al-react	est\app\[...slug]\page.jsx';
try {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(/\.\.\/\.\.\/test\/src\//g, '../../src/');
    fs.writeFileSync(filePath, updatedContent);
    console.log('Successfully updated imports in page.jsx');
} catch (err) {
    console.error('Error updating file:', err);
    process.exit(1);
}
