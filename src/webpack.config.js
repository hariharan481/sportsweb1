// webpack.config.js
module.exports = {
    // ... other configurations
    module: {
      rules: [
        // ... other rules
        {
          test: /\.(scss|sass)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
  };
  