const { getFeature } = require("../src/configure");

test("internal features match", () => {
  const internalFeatures = [
    "assetFeature",
    "babelFeature",
    "babelMinifyFeature",
    "basicDevelopmentFeature",
    "basicOptimizationFeature",
    "clientRenderFeature",
    "codeSplittingFeature",
    "manifestFeature",
    "pekkisHybridCssFeature",
    "serverRenderFeature",
    "uglifyMinifyFeature"
  ];

  internalFeatures.forEach(ip => {
    const feature = getFeature(ip);
    expect(typeof feature).toBe("object");
    expect(feature.name()).toEqual(ip);
  });

  // const bp = broilerplate("production", "client", paths, overrides);

  // console.log(bp);
});
