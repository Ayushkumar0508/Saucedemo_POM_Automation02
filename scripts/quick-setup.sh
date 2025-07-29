#!/bin/bash
cd "$(dirname \"$0\")/.." || exit 1
set -e

printf '\n[SETUP] Installing dependencies and browsers...\n'
npm install
npx playwright install

printf '\n[VALIDATE] Checking framework setup...\n'
./scripts/validate-setup.sh

printf '\n[TEST] Running tests in parallel (chrome, firefox)...\n'
./scripts/run-parallel.sh

printf '\n[REPORT] Opening HTML report...\n'
npx playwright show-report

echo "[SUCCESS] Quick setup complete."
