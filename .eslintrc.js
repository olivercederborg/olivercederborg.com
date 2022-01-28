module.exports = {
	env: {
		browser: true,
		node: true
	},
	root: true,
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
	globals: {
		jsx: true,
		React: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'no-undef': 'off'
			}
		}
	]
}
