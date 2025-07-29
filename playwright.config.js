// playwright.config.js
// https://playwright.dev/docs/test-configuration
const { devices } = require('@playwright/test');

/**
 * @type {import('@playwright/test').PlaywrightTestConfig}
 * Robust, deterministic, multi-browser, no deprecated API usage.
 */
const config = {
  testDir: './tests',
  timeout: 50000,
  expect: { timeout: 10000 },
  forbidOnly: true,
  fullyParallel: true,
  retries: 1,
  workers: 2,
  reporter: [['html', { open: 'always' }], ['list']],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure', // https://playwright.dev/docs/videos
    screenshot: 'only-on-failure',
    actionTimeout: 30000,
    navigationTimeout: 30000,
    launchOptions: { slowMo: 500 }
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } }
  ]
};
module.exports = config;
