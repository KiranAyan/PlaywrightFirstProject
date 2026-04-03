import {test, expect} from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

//dotenv.config({ path: path.resolve(__dirname, '../../envFiles/.env.dev') });
test('test UI of google',async({page})=>{
    await page.pause();
    await page.goto(process.env.GURL);

    await expect(page).toHaveScreenshot('googlehomepage.png');
})
test('test UI of selctorhub',async({page})=>{
    await page.pause();
    await page.goto(process.env.URL);

    await expect(page).toHaveScreenshot('Selectorhomepage.png');
})