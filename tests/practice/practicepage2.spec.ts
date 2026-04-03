import {test, expect} from '../../fixtures/pomFixtures';
import {firstPage} from '../../pages/practice';
import userData from '../../test-data/user.json';

test.describe.configure({ mode: 'serial' })
test('selctorhub Check User is on dashboard12',async({allComponentPage})=>{
    console.log("Is Logo Visible1: "+ await allComponentPage.isMenuIconVisible());
});


test('selctorhub Fill User details',async({allComponentPage})=>{
    for (const data of userData) {
    console.log(`Processing data for: ${data.username}`);
    await allComponentPage.fillRegistrationForm(data.username, data.password, data.company);
}
});

test('selctorhub Fill DoM',async({allComponentPage})=>{
    await allComponentPage.fillShadowDomInput("LastCase");
});

