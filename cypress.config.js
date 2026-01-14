const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: true,
    video: false,
    specPattern: 'cypress/e2e/**/*.cy.js',
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
    
    },
  },
});
