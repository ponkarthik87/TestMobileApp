module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@features': './src/features',
          '@shared': './src/shared',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@store': './src/store',
          '@types': './src/types',
        },
      },
    ],
  ],
};
