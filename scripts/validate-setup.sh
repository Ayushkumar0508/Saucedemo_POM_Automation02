#!/bin/bash
cd "$(dirname "$0")/.." || exit 1
set -e

printf '\n[VALIDATE] Confirming playwright, node, browsers, and test structure...\n'
echo "Node version: $(node -v)"
echo "Playwright version: $(npx playwright --version)"
npx playwright install --with-deps

echo 'Checking for package.json...'
[ -f package.json ] || { echo 'package.json missing!'; exit 1; }

echo 'Checking for Playwright config...'
[ -f playwright.config.js ] || { echo 'playwright.config.js missing!'; exit 1; }

echo 'Checking for tests...'
find ./tests -name '*.test.js' | grep . || { echo 'No test files found!'; exit 1; }

echo '[SUCCESS] Setup validated.'