module.exports = {

    "extends": "airbnb-base",
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "rules": {
      "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "max-len": ["error", 80]
      },
      "env": {
        "browser": true,
        "es6": true
      },
      "settings": {
        "import/resolver": {
          "webpack": {
            "config": "./webpack-config.js"
          }
        }
      }
};