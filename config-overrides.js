/* config-overrides.js */

const rewireInlineImportGraphqlAst = require('react-app-rewire-inline-import-graphql-ast');

module.exports = function override(config, env) {
  return rewireInlineImportGraphqlAst(config, env);
};
