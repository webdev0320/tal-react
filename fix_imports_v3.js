const fs = require('fs');
const filePath = 'D:/projects/tal-react/test/app/[...slug]/page.jsx';
try {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(/\.\.\/src\//g, '../src/');
    // The current imports are already '../src/', but maybe they need to be '../src/' if they were '../../test/src/' before.
    // Let's try to be absolutely sure. 
    // If the file is at test/app/[...slug]/page.jsx
    // src is at test/src
    // relative path is ../src
    
    // Let's re-verify the current content
    console.log('Current imports starting with:');
    console.log(content.split('
').slice(0, 5).join('
'));
    
    // Actually, let's just rewrite it with the definitely correct relative paths.
    const finalContent = content
        .replace(/import DynamicWpPage from '.*';/g, "import DynamicWpPage from '../src/pages/DynamicWpPage';")
        .replace(/import Home from '.*';/g, "import Home from '../src/Home';")
        .replace(/import AboutUs from '.*';/g, "import AboutUs from '../src/pages/AboutUs';")
        .replace(/import Blog from '.*';/g, "import Blog from '../src/pages/Blog';")
        .replace(/import SingleBlog from '.*';/g, "import SingleBlog from '../src/pages/SingleBlog';")
        .replace(/import PackagePage from '.*';/g, "import PackagePage from '../src/pages/PackagePage';")
        .replace(/import Taxation from '.*';/g, "import Taxation from '../src/pages/Taxation';")
        .replace(/import TaxationSubPage from '.*';/g, "import TaxationSubPage from '../src/pages/TaxationSubPage';")
        .replace(/import Accounts from '.*';/g, "import Accounts from '../src/pages/Accounts';")
        .replace(/import BookkeepingServices from '.*';/g, "import BookkeepingServices from '../src/pages/BookkeepingServices';")
        .replace(/import PayrollServices from '.*';/g, "import PayrollServices from '../src/pages/PayrollServices';")
        .replace(/import SelfAssessment from '.*';/g, "import SelfAssessment from '../src/pages/SelfAssessment';")
        .replace(/import Pensions from '.*';/g, "import Pensions from '../src/pages/Pensions';")
        .replace(/import IndustryPage from '.*';/g, "import IndustryPage from '../src/pages/IndustryPage';")
        .replace(/import ContactUs from '.*';/g, "import ContactUs from '../src/pages/ContactUs';")
        .replace(/import SwitchAccountant from '.*';/g, "import SwitchAccountant from '../src/pages/SwitchAccountant';")
        .replace(/import ReferAndEarn from '.*';/g, "import ReferAndEarn from '../src/pages/ReferAndEarn';");

    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log('Successfully updated imports in page.jsx');
} catch (err) {
    console.error('Error updating file:', err);
    process.exit(1);
}
