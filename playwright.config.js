import {defineConfig} from '@playwright/test';

export default defineConfig({
  testDir: './test/specs',
  testMatch: '**/*.spec.js',
  timeout: 60_000,
  expect: {timeout: 30_000},
  fullyParallel: false,
  retries: 0,
  workers: 2,
  reporter: process.env.CI
    ? [['list'], ['html', {open: 'never'}]]
    : 'list',
  use: {
    baseURL: 'http://localhost:3001',
    headless: true,
    ignoreHTTPSErrors: true,
  },
  webServer: {
    command: 'npm start -- -p 3001',
    port: 3001,
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
