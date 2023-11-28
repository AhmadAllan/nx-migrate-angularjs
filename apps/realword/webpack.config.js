// eslint-disable-next-line @typescript-eslint/no-unused-vars
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (config, context) => {
  return {
    ...config,
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.html$/,
          use: [{ loader: 'raw-loader' }],
        },
        // Load js files through Babel
        {
          test: /\.js$|jsx/,
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { "modules": false }]],
            plugins: ['angularjs-annotate'],
          },
        },
      ],
    },
  };
};