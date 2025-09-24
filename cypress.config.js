const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "k93kiv",
  reporter: 'mochawesome',
  video: true, // <-- ativa a gravação de vídeo
  videosFolder: "cypress/videos", // pasta onde os vídeos ficam salvos
  screenshotOnRunFailure: true, // tira screenshot quando o teste falha
  e2e: {
    baseUrl: "https://automationpratice.com.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
