const { getSentryExpoConfig } = require('@sentry/react-native/metro');
const {
  wrapWithReanimatedMetroConfig
} = require('react-native-reanimated/metro-config');

// Returns the ExpoConfig with Sentry integrated
const expoConfig = getSentryExpoConfig(__dirname);

// expoConfig.resolver.unstable_enablePackageExports = true;

// Adds support for `.wasm` so Skia can render on Web
expoConfig.resolver.assetExts.push('wasm');

// Export the expoConfig wrapped with the ReanimatedMetroConfig for Reanimated Logging
module.exports = wrapWithReanimatedMetroConfig(expoConfig);
