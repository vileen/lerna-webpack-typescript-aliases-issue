module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-proposal-export-default-from',
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: false,
      },
    ],
  ],
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        corejs: 2,
        useBuiltIns: 'usage',
      },
    ],
  ],
};
