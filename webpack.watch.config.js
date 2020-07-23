let mainConfig = require('./webpack.config');

mainConfig = Object.assign(mainConfig, {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: ['src/pages/strategyEx/assets/*', '/node_modules/']
  }
});

module.exports = mainConfig;
