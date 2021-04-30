module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          assets: './src/assets',
          components: './src/components',
          configs: './src/configs',
          locales: './src/locales',
          mock: './src/mock',
          'redux-core': './src/redux-core',
          routes: './src/routes',
          screens: './src/screens',
          services: './src/services',
          types: './src/types',
          utils: './src/utils',
        },
      },
    ],
  ],
}
