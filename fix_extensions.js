const fs = require('fs');
const filePath = 'D:/projects/tal-react/test/app/[...slug]/page.jsx';
try {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(/from '(.+?)';/g, (match, p1) => {
        return `from '${p1}.jsx';`;
    });
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log('Successfully added .jsx extensions to imports in page.jsx');
} catch (err) {
    console.error('Error updating file:', err);
    process.exit(1);
}
