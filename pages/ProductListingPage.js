// pages/ProductListingPage.js
// Inventory/Cart/Checkout POM with inheritance (per Playwright POM docs)
const { expect } = require('@playwright/test');
const { logStep } = require('../utils/TestUtils');
const testData = require('../data/TestData');

class BasePage {
  constructor(page) {
    this.page = page;
  }
  async goto(relativeUrl = '/') {
    await this.page.goto(testData.baseUrl + relativeUrl, { waitUntil: 'networkidle' });
    logStep('Page', 'Navigate', `Go to ${testData.baseUrl + relativeUrl}`, 'Navigation complete');
  }
}

class ProductListingPage extends BasePage {
  async login() {
    const { username, password } = testData.credentials;
    logStep('Login', 'Begin login', `Fill username/password`, 'Starting');
    await this.page.fill('[data-test="username"]', username);
    await this.page.fill('[data-test="password"]', password);
    await this.page.click('[data-test="login-button"]');
    await expect(this.page.locator('.inventory_list')).toBeVisible({ timeout: 10000 });
    logStep('Login', 'Authentication', 'Wait for .inventory_list', 'Inventory visible');
  }
  async addToCart(productSelector) {
    logStep('AddCart', 'Add product to cart', `Use selector: ${productSelector}`, 'Starting');
    await this.page.click(productSelector);
    logStep('AddCart', 'Validate', 'Product add button clicked', 'Cart updated');
  }
  async goToCart() {
    await this.page.click('.shopping_cart_link');
    await expect(this.page.locator('.cart_list')).toBeVisible();
    logStep('Cart', 'Enter cart', 'Click cart link', 'Cart page open');
  }
  async checkoutInfo({ firstName, lastName, postalCode }) {
    await this.page.click('[data-test="checkout"]');
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', postalCode);
    await this.page.click('[data-test="continue"]');
    logStep('Checkout', 'Fill info and submit', 'User info entered', 'Continue to summary');
  }
  async finishCheckout() {
    await this.page.click('[data-test="finish"]');
    await expect(this.page.locator('.complete-header')).toContainText('Thank you', { timeout: 12000 });
    logStep('Checkout', 'Finish', 'Click finish and verify', 'Thank you page shown');
  }
}

module.exports = { ProductListingPage };
