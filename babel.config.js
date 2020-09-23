module.exports = {
  plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
  presets: [
    ['@babel/typescript', { onlyRemoveTypeImports: true }],
    ['@babel/preset-env', { targets: { node: true } }],
  ],
};
