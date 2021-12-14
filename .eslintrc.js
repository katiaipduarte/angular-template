module.exports = {
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [{
    "files": ["*.ts"],
    "parserOptions": {
      "project": ["tsconfig.json"],
      "createDefaultProgram": true
    },
    "extends": ["plugin:@angular-eslint/recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    "rules": {
      "prettier/prettier": "error",
      "newline-before-return": "error",
      "max-len": ["error", {
        "code": 120,
        "tabWidth": 2,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }],
      "@typescript-eslint/no-empty-function": ["error", {
        "allow": ["constructors"]
      }],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@angular-eslint/component-class-suffix": ["error", {
        "suffixes": ["Component", "Page"]
      }],
      "@angular-eslint/directive-selector": ["error", {
        "type": "attribute",
        "prefix": "app",
        "style": "camelCase"
      }],
      "@angular-eslint/component-selector": ["error", {
        "type": "element",
        "prefix": "app",
        "style": "kebab-case"
      }]
    }
  }, {
    "files": ["*.html"],
    "extends": ["plugin:@angular-eslint/template/recommended"],
    "rules": {}
  }, {
    "files": ["*.component.ts"],
    "extends": ["plugin:@angular-eslint/template/process-inline-templates"],
    "rules": {}
  }],
  extends: ["plugin:storybook/recommended"]
};
