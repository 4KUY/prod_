import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

interface Story {
  id: string;
  name: string;
  title: string;
}

const indexPath = path.resolve(__dirname, '../../storybook-static/index.json');
const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));

const stories: Story[] = Object.values(indexData.entries);

test.describe('Storybook visual tests - all stories', () => {
    for (const story of stories) {
        test(`${story.title} / ${story.name}`, async ({ page }) => {
            await page.goto(`http://localhost:6006/iframe.html?id=${story.id}`, 
                { waitUntil: 'domcontentloaded' });

            await page.waitForSelector('#storybook-root', { timeout: 5000 });
            await page.waitForTimeout(1000);
            await page.emulateMedia({ reducedMotion: 'reduce' });
            await page.addStyleTag({
                content: `
            .lds-ellipsis div {
            animation: none !important;
            }
        `
            });
  
            const screenshot = await page.screenshot();
            expect(screenshot).toMatchSnapshot(`${story.id}.png`, { maxDiffPixelRatio: 0.02 });
        });
    }
});
