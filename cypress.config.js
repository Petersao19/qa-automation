const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // eventos opcionales
    },
    specPattern: "cypress/e2e/**/*.cy.js",
  },
});
