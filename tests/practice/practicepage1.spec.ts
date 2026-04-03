import {test, expect} from '@playwright/test';
import {firstPage} from '../../pages/practice';
import userData from '../../test-data/user.json';

test.describe.configure({ mode: 'serial' })

test('Download Link text', async({page})=>{
    const firstpage = new firstPage(page);
    await firstpage.gotoURL();
    //console.log("Window href is printing ..."+ firstpage.getDownloadUrl());
})
test('count Windows', async({page})=>{
    const firstpage = new firstPage(page);
    await firstpage.gotoURL();
    await firstpage.clickDownloadSafely();
    await firstpage.openInNewTab();
    await firstpage.rightClickDownload();
    await firstpage.printAllWindowDetails();
});