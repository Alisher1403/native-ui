module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-transform-export-namespace-from',
    ['module-resolver', { alias: { '@src': './src' } }],
    ['react-native-unistyles/plugin', { root: 'src' }],
    'react-native-worklets/plugin',
  ],
};
