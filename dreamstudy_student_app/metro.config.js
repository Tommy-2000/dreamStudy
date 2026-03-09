const {
  getSentryExpoConfig
} = require("@sentry/react-native/metro");

const expoConfig = getSentryExpoConfig(__dirname); // Returns the ExpoConfig with Sentry integrated

expoConfig.resolver.assetExts.push('wasm'); // Adds support for `.wasm` so Skia can render on Web

module.exports = expoConfig; // Export the expoConfig