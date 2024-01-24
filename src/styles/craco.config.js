const path = require('path');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `@import "~@import "bourbon";@import 'https://fonts.googleapis.com/css?family=Montserrat:400,700|Raleway:300,400';";`
      },
      implementation: require('sass'),
    },
  },
};
