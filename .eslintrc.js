module.exports = {
  env: { es6: true },

  extends: ['airbnb-base', 'stylelint'],

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },


  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack-config.js'
      }
    }
  },
  rules: {
    "node/no-unsupported-features/es-syntax": ["warning", {
      "version": ">=8.0.0",
      "ignores": []
  }],
  'quotes': ['error', 'double', { allowTemplateLiterals: true }],
    'max-len': ['error', 80]
  },
};
