const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      reporter: 'mochawesome'

      // implement node event listeners here
    },
  },
});