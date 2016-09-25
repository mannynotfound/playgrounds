module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'import/no-unresolved': 0,
    'object-curly-spacing': 0,
    'new-cap': 0,
    'one-var-declaration-per-line': 0,
    'one-var': 0,
    'no-use-before-define': ['error', {functions: false}],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals: {
    THREE: true,
    THREEx: true,
    Detector: true,
    Stats: true
  }
}
