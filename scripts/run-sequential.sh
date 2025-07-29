#!/bin/bash
cd "$(dirname \"$0\")/.." || exit 1
set -e

printf '\n[RUN] Running Playwright tests sequentially...\n'
denote="Detected Node version: $(node -v)"; echo "$denote"
npm ls @playwright/test > /dev/null 2>&1 || npm install
npx playwright test --workers=1
