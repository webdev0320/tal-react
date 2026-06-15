const fs = require('fs');
const xml2js = require('xml2js'); // Run: npm install xml2js

const xmlFile = 'public/pages.xml'; // Path to your WordPress XML file
const outputDir = './wp-extracted-pages';

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const parser = new xml2js.Parser();
fs.readFile(xmlFile, (err, data) => {
    if (err) throw err;
    
    parser.parseString(data, (err, result) => {
        if (err) throw err;
        
        const items = result.rss.channel[0].item;
        let pageCount = 0;

        items.forEach(item => {
            const postType = item['wp:post_type'] ? item['wp:post_type'][0] : '';
            const status = item['wp:status'] ? item['wp:status'][0] : '';
            
            // Only process published pages
            if (postType === 'page' && status === 'publish') {
                const title = item.title[0];
                const slug = item['wp:post_name'][0];
                const content = item['content:encoded'] ? item['content:encoded'][0] : '';

                // Clean up WordPress block comments if present
                const cleanContent = content.replace(/<!--[\s\S]*?-->/g, '').trim();

                if (slug) {
                    fs.writeFileSync(`${outputDir}/${slug}.txt`, `Title: ${title}\n\n${cleanContent}`);
                    pageCount++;
                }
            }
        });
        console.log(`Successfully extracted ${pageCount} pages to ${outputDir}/`);
    });
});