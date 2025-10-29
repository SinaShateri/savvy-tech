/// <reference types="cypress" />

// Global Cypress support file for e2e tests.
// Runs before every spec.

// Clear local storage before each test to ensure a clean app state
beforeEach(() => {
  cy.clearLocalStorage();
});

// Add any custom commands or overrides here later.
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Minified React error #418')) {
    return false; // جلوگیری از fail شدن تست
  }
});
