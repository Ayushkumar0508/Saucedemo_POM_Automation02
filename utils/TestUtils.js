// utils/TestUtils.js
// Logging, screenshot, retry, browser helpers; uses only context().browser()
const fs = require('fs');
function logStep(context, intent, action, observed) {
  const ts = new Date().toISOString();
  console.log(`[${ts}] [${context}] intent: ${intent}\n    action: ${action}\n    observed: ${observed}`);
}
async function takeScreenshot(page, name) {
  await page.screenshot({ path: name, fullPage: true });
  logStep(page.context().browser()._name || 'unknown', 'Capture screenshot', `Saved under ${name}`, 'Screenshot created successfully');
}
async function retryWith(fn, attempts, page, logContext) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try { return await fn(); }
    catch (err) {
      lastErr = err;
      logStep(logContext, `Retry #${i + 1}`, 'Function failed, retrying', err.message);
    }
  }
  throw lastErr;
}
async function resetBrowser(context) {
  await context.clearCookies();
  logStep(context.browser()._name || 'unknown', 'Reset browser state', 'Cookies cleared', 'Browser state clean');
}
module.exports = { logStep, takeScreenshot, retryWith, resetBrowser };
