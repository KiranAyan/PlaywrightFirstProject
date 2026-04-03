import {test as base} from '@playwright/test';
import { firstPage } from '../pages/practice';

type MyFixtures = {
    allComponentPage : firstPage;
};
export const test = base.extend<MyFixtures>({
    allComponentPage: async ({ page }, use) => {
        const pPage = new firstPage(page);
        await pPage.gotoURL();
        await use(pPage);
    },
});
export { expect } from '@playwright/test';

