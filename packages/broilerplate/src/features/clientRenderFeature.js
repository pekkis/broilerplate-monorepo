const { OrderedSet } = require("immutable");

module.exports = {
  name: () => "clientRenderFeature",
  plugins: () => OrderedSet.of("htmlPlugin"),
  loaders: () => OrderedSet.of(),
  overrideLoader: (values, env, target, paths, key) => values,
  overridePlugin: (values, env, target, paths, key) => values,
  overrideWebpackConfiguration: (values, env, target, paths) => values
};
