import { type Locator, type FrameLocator, type Page, expect } from '@playwright/test';

export class firstPage {
    readonly page: Page;
    readonly svgIcon: Locator;
    readonly email: Locator;
    readonly pass: Locator;
    readonly tableElement: Locator;
    readonly submitButton: Locator;
    readonly frameLoc: FrameLocator;
    readonly frameElement: Locator;
    readonly downloadLink: Locator;
    readonly companyField: Locator;
    readonly shadoElement: Locator;


    constructor(page: Page) {
        this.page = page;
        this.svgIcon = page.locator('//*[local-name()="svg" and @class="e-font-icon-svg e-fas-search"]');
        this.email = page.getByPlaceholder('Enter email');
        this.pass = page.getByRole('textbox', { name: 'Password' });
        this.tableElement = page.locator("//tbody/tr/td[text()='Jasmine Morgan']/following-sibling::td");
        this.submitButton = page.getByRole('button').filter({ hasText: 'Submit' });
        this.frameLoc = page.frameLocator('.iframe-ads');
        this.companyField = page.locator("(//input[@placeholder='Enter your company'])[1]");
        this.frameElement = this.frameLoc.locator("//div[@class='ads__navigation__btn navigate__next__btn']");
        this.downloadLink = page.getByRole('link', { name: 'DownLoad Link' });
        this.shadoElement = page.locator("#kils");

    }

    async gotoURL(){
        const targetURL = process.env.URL;
    if (!targetURL) {
        throw new Error("ERROR: BASE_URL is not defined in your .env file!");
    }
    await this.page.goto(targetURL);
    }
    async isMenuIconVisible(): Promise<boolean> {
        // No manual 'WaitUtils' needed; 'isVisible' waits automatically
        return await this.svgIcon.isVisible();
    }

    async fillRegistrationForm(user: string, pass: string, company: string) {
        await this.email.click();
        await this.email.fill(user);
        await this.pass.fill(pass);
        try {
            // Standard action with 5s timeout instead of catching exception
            await this.companyField.fill(company, { timeout: 5000 });
        } catch (e) {
            console.log("Optional field 'Company' not found, skipping.");
        }
    }

    async fillShadowDomInput(value: string) {
        /**
         * No 'Thread.sleep' or 'SearchContext' needed. 
         * Playwright waits for the shadow element to be actionable.
         */
        await this.shadoElement.fill(value);
    }

    async getDownloadUrl(): Promise<string | null> {
        return await this.downloadLink.getAttribute('href');
    }

    async clickDownloadSafely() {
        // Built-in 'safe click': waits for visibility, stability, and enablement
        await this.downloadLink.click();
    }

    async openInNewTab() {
        /**
         * Selenium used 'Actions.keyDown'. 
         * Playwright uses 'modifiers' or specialized window handling.
         */
        await this.downloadLink.click({ modifiers: ['Control'] });
    }

    async rightClickDownload() {
        await this.downloadLink.click({ button: 'right' });
    }

    /**
     * WINDOW HANDLING: Playwright uses 'Contexts'. 
     * You don't need to manually iterate and switch titles.
     */
    async printAllWindowDetails() {
        const allPages = this.page.context().pages();
        for (const p of allPages) {
            console.log(`Window Title: ${await p.title()}`);
            console.log(`Window URL: ${p.url()}`);
        }
    }
}