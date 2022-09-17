module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset'],
    // ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": false }]],

};
