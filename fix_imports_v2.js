const fs = require('fs');
const path = require('path');
const filePath = 'D:/projects/tal-react/test/app/[...slug]/page.jsx';
try {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(/\.\.\/\.\.\/test\/src\//g, '../src/');
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log('Successfully updated imports in page.jsx');
} catch (err) {
    console.error('Error updating file:', err);
    process.exit(1);
}
