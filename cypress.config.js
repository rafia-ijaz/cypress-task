const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    alertTextFile: "alert-text.txt",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
