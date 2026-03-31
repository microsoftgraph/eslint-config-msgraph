const reactPlugin = require('eslint-plugin-react');
const core = require('./core.js');

module.exports = [
  ...core,
  reactPlugin.configs.flat['recommended'],
  {
    rules: {
      'react/no-unstable-nested-components': ['warn', { allowAsProps: true }]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
