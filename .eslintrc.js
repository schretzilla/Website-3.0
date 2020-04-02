module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6
  },
  extends: ["airbnb", "plugin:prettier/recommended", "plugin:jest/recommended"],
  plugins: ["import", "jest", "prettier", "react-hooks"],
  env: {
    node: true,
    "jest/globals": true
  },
  rules: {
    "no-console": "off",
    "func-names": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-curly-newline": "off",
    "no-return-await": "off",
    "no-plusplus": "off"
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
    Image: true
  }
};
