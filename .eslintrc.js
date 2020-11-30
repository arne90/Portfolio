module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true
  },
  parser: "babel-eslint",
  extends: ["airbnb", "prettier"],
  plugins: ["react", "jsx-a11y", "import", "react-hooks"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/forbid-prop-types": [0],
    "no-shadow": "off",
    "no-param-reassign": 0,
    "comma-dangle": ["error", "never"],
    "linebreak-style": ["error", "unix"],
    "max-len": [1, { code: 200 }],
    "jsx-a11y/label-has-for": [2, { required: { some: ["nesting", "id"] } }],
    "jsx-a11y/heading-has-content": [0],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: ["label"],
        labelAttributes: ["htmlFor"],
        controlComponents: ["input"]
      }
    ],
    "one-var-declaration-per-line": ["error", "initializations"],
    "one-var": ["error", { let: "never" }],
    "prefer-destructuring": ["error", { array: false, object: true }],
    "prefer-template": 0,
    "no-plusplus": [1, { allowForLoopAfterthoughts: true }]
  }
};
