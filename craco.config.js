module.exports = {
  style: {
    sass: {
      loaderOptions: {
        implementation: require('sass'),
        webpackImporter: false,
        additionalData: `
        @import "./src/assets/scss/fonts.scss";
        @import "./src/assets/scss/mixins.scss";
        @import "./src/assets/scss/variables.scss";
      `,
      },
    },
  },
};
