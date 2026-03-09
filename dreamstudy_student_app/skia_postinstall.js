/**
 * Credit to https://github.com/kimchouard/rn-skia-metro-web-example/blob/main/path-fs-canvaskit-postinstall.js
 */
// "skia-postinstall": "npx setup-skia-web public && node skia_postinstall.js"

// This builds the wasm file that allows for Skia to render on web

const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, 'node_modules', 'canvaskit-wasm', 'package.json');
const packageJson = require(packageJsonPath);

packageJson.browser = {
    fs: false,
    path: false,
    os: false,
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));