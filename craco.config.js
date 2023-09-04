module.exports = {
  style: {
    sass: {
      loaderOptions: {
        implementation: require('sass'),
        webpackImporter: false,
        additionalData: `
        @import "./src/shared/assets/scss/fonts.scss";
        @import "./src/shared/assets/scss/mixins.scss";
        @import "./src/shared/assets/scss/variables.scss";
      `,
      },
    },
  },
};
