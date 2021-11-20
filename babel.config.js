/* eslint-disable no-undef */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', 'svg'],
        alias: {
          '*': ['./src/*'],
          tests: ['./__tests__/*'],
        },
      },
    ],
    ['babel-plugin-inline-import', {extensions: ['.svg']}],
    ['react-native-reanimated/plugin'],
  ],
};
