// tests/product-listing-checkout.test.js
// Chain of Thought: intent, action, observed. Fully deterministic, robust, best-practice.
const { test, expect } = require('@playwright/test');
const TestData = require('../data/TestData');
const { ProductListingPage } = require('../pages/ProductListingPage');
const { logStep, takeScreenshot, resetBrowser } = require('../utils/TestUtils');

test.describe('Saucedemo Inventory to Checkout - Deterministic Chain-of-Thought', () => {
  for (const browserName of ['chromium', 'firefox']) {
    test(`End-to-end Product Checkout in ${browserName} (Chain of Thought)`, async ({ page, browserName }, testInfo) => {
      logStep(browserName, 'Setup', 'Start test setup, create Page Object', 'Setup begin');
      const invPage = new ProductListingPage(page);
      await invPage.goto();
      await invPage.login();
      await expect(page).toHaveURL(/inventory/);
      await expect(page.locator('.inventory_list')).toBeVisible();
      logStep(browserName, 'Inventory', 'Inventory page visible', 'True');
      const product = TestData.products[0];
      await invPage.addToCart(product.selector);
      await invPage.goToCart();
      await expect(page.locator('.cart_item')).toContainText(product.name);
      logStep(browserName, 'Cart', 'Backpack added', 'Cart contains product');
      await invPage.checkoutInfo(TestData.checkout);
      await invPage.finishCheckout();
      await takeScreenshot(page, TestData.screenshotPaths[browserName]);
      logStep(browserName, 'E2E', 'Full flow done', 'Screenshot and Thank you validated');
      await resetBrowser(await page.context());
    });
  }
});
