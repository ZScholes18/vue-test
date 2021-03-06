module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  "rules": {		
		"no-mixed-spaces-and-tabs": [2, false],
		"unicode-bom":0,
		"indent": [1, 4, { "SwitchCase": 1 }],
		"linebreak-style": [0, "windows"],
		"eol-last": ["error", "always"],
		"max-len": [1, 120],
		"semi": [2, "always"],
		"curly": [2, "all"],
		"no-use-before-define": ["error", { "functions": true, "classes": true }],
		"no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
		"no-loop-func": "error",
		"radix": "error",
		"quotes": [1, "single", "avoid-escape"],
		"no-multi-str": "error",
		"no-new-wrappers":2,
		"no-new-object": "error",
		"no-new-func": 1,
		"no-array-constructor":2,
		"guard-for-in": 1,
		"no-inner-declarations": [2, "functions"],
		"no-prototype-builtins":2,
		"no-extend-native": 2,
		"no-proto":2,
		"no-eval":2,
		"no-with":2,
		"no-delete-var": "error"
    }
}
