const { List } = require("immutable");
const webpack = require("webpack");
const Plugin = webpack.optimize.OccurrenceOrderPlugin;

module.exports = {
  name: () => "occurrenceOrderPlugin",
  isEnabled: (env, target) => true,
  defaults: (env, target, paths) => List.of(undefined),
  plugin: options => new Plugin(...options)
};
