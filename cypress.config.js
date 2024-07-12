const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },
});
