const core = require('./core.js');
core.extends = [...core.extends, 'plugin:react/recommended'];
core.plugins = [...core.plugins, 'react'];
core.rules = {
  'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
  ...core.rules
};
core.settings = {
  react: {
	version: 'detect'
  }
};
module.exports = core;