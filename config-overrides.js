const webpack = require('webpack');

module.exports = function override(config, env) {
  
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    })
  );

  return config;
};