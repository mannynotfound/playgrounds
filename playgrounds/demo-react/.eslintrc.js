module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  plugins: [
    'html',
    'react'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'react/jsx-no-undef': ['error'],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': ['error'],
    'react/jsx-no-comment-textnodes': ['error'],
    'react/jsx-wrap-multilines': ['error'],
    'react/jsx-no-duplicate-props': ['error', {'ignoreCase': false}],
    'react/jsx-pascal-case': ['error'],
    'react/jsx-no-target-blank': ['error'],
    'react/jsx-indent-props': ['error'],
    'react/no-did-mount-set-state': ['error'],
    'react/no-did-update-set-state': ['error'],
    'react/no-unknown-property': ['error'],
    'react/prop-types': ['error'],
    'object-curly-spacing': 0
  },
  'ecmaFeatures': {
    'jsx': true
  }
};
