const { OrderedSet } = require("immutable");

module.exports = {
  name: () => "manifestFeature",
  plugins: () => OrderedSet.of("manifestPlugin"),
  loaders: () => OrderedSet.of(),
  overrideLoader: (values, env, target, paths, key) => values,
  overridePlugin: (values, env, target, paths, key) => values,
  overrideWebpackConfiguration: (values, env, target, paths) => values
};
