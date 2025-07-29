// data/TestData.js
// Centralized test data and config (deterministic)

module.exports = {
  credentials: {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  checkout: {
    firstName: 'John',
    lastName: 'Doe',
    postalCode: '12345'
  },
  products: [
    {
      name: 'Sauce Labs Backpack',
      selector: '[data-test="add-to-cart-sauce-labs-backpack"]',
      inventorySelector: '.inventory_item:has-text("Sauce Labs Backpack")'
    }
  ],
  baseUrl: 'https://www.saucedemo.com',
  screenshotPaths: {
    chromium: 'logged-in-chromium.png',
    firefox: 'logged-in-firefox.png'
  }
};
