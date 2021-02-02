module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: [
		'airbnb-base',
		'plugin:@typescript-eslint/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		'linebreak-style': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				ts: 'never',
			},
		],
		'import/no-dynamic-require': 'off',
		indent: [
			'error',
			'tab',
		],
		'no-continue': 'off',
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'no-restricted-syntax': [
			'error',
			'WithStatement',
		],
		'no-tabs': 'off',
		'no-undef': 'off',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: [
					'.ts',
				],
			},
		},
	},
};
