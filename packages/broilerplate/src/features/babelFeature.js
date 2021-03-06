const { OrderedSet } = require("immutable");

module.exports = {
  name: () => "babelFeature",
  plugins: () => OrderedSet(),
  loaders: () => OrderedSet.of("babelLoader"),
  overrideLoader: (values, env, target, paths, key) => values,
  overridePlugin: (values, env, target, paths, key) => values,
  overrideWebpackConfiguration: (values, env, target, paths) => values
};
