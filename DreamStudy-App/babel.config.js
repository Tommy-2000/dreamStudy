
// Configure module-resolver with Babel using these options
const moduleResolverPluginOptions = {
  root: ['./'],

  alias: {
    '@': './',
  },
}


// Configure Unistyles with Babel using these options
const unistylesPluginOptions = {
  root: './',
  debug: true,
}


module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ['babel-preset-expo'],
    ],

    plugins: [
      ['module-resolver', moduleResolverPluginOptions],
      ['react-native-unistyles/plugin', unistylesPluginOptions],
      'react-native-worklets/plugin', // This is needed for React-Native-Reanimated and Skia rendering
    ],
  };
};
