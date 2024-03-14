const { expect, browser, $ } = require('@wdio/globals');

describe('My login application', () => {
    it('should log in with valid credentials', async () => {
        await browser.url('http:localhost:3000/#/login');
        await $('input[name="email"]').setValue('admin@test.com');
        await $('input[name="password"]').setValue('password123');
        await $('button').click();

        await expect($('Welcome to Timesheet manager').toBeVisible());
        const element = await $('.card-title');
        await expect(element).toHaveText('Projects');
    });
});
