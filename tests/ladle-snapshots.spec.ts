import { test, expect } from '@playwright/test';

test('Ladle Story Snapshots', async ({ page }) => {
    // Navigate to Ladle's meta.json to dynamically get all stories
    await page.goto('http://localhost:61000/meta.json');
    const content = await page.textContent('body');

    if (!content) {
        throw new Error('Could not fetch Ladle meta.json');
    }

    const meta = JSON.parse(content);
    const stories = Object.keys(meta.stories);

    // Iterate over each story and take a screenshot
    for (const storyKey of stories) {
        // Navigate to the isolated story view
        await page.goto(`http://localhost:61000/?story=${storyKey}&mode=preview`);

        // Wait for the main Ladle root element to be visible
        await page.waitForSelector('#ladle-root');

        // To ensure fonts and styles are loaded
        await page.evaluate(() => document.fonts.ready);

        // Take screenshot and compare
        // We replace characters that might be problematic in filenames
        const sanitizedName = storyKey.replace(/[^a-z0-9-]/gi, '_');
        await expect(page).toHaveScreenshot(`${sanitizedName}.png`, {
            fullPage: true,
            animations: 'disabled'
        });
    }
});
