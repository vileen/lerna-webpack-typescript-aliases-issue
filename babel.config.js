const base = require('./babel.config.base');

module.exports = {
  ...base,
  babelrcRoots: ['.', 'packages/*'],
};
