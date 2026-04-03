#!/bin/bash

# 1. Print a message to the console
echo "Starting the Automation Suite..."

# 2. Clean old results (Linux command)
rm -rf allure-results allure-report

# 3. Run Playwright tests
npx playwright test --grep selctorhub

# 4. Generate the Allure Report
allure generate allure-results --clean -o allure-report

echo "Test execution and report generation complete!"