import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './config/playwright',
  timeout: 60000,
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.05 },
  },
  use: {
    baseURL: 'http://localhost:6006',
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
