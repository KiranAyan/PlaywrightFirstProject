#!/bin/bash
# Exit on any error
set -e

echo "Starting the Automation Suite..."

# 1. CRITICAL: Install dependencies first
npm install

# 2. Install Playwright Browsers (only needed once, but safe to keep)
npx playwright install --with-deps

# 3. Clean old results
rm -rf allure-results allure-report

# 4. Run tests
npx playwright test --grep selctorhub

echo "Test execution complete!"