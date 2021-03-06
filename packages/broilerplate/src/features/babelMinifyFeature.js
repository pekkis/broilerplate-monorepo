const { OrderedSet } = require("immutable");

module.exports = {
  name: () => "babelMinifyFeature",
  plugins: () => OrderedSet.of("babelMinifyPlugin"),
  loaders: () => OrderedSet.of(),
  overrideLoader: (values, env, target, paths, key) => values,
  overridePlugin: (values, env, target, paths, key) => values,
  overrideWebpackConfiguration: (values, env, target, paths) =>
    values.set("devtool", "none")
};
