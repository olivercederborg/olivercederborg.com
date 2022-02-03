module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:jsx-a11y/recommended',
		'airbnb',
		'airbnb-typescript',
		'prettier'
	],
	globals: {
		jsx: true,
		React: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	settings: {
		'import/extensions': ['.ts', '.tsx'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
				project: 'tsconfig.json'
			},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				project: 'tsconfig.json'
			}
		},
		react: {
			version: 'detect'
		}
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'jsx-a11y', 'import'],
	rules: {
		'import/named': 2,
		'import/namespace': 2,
		'import/default': 2,
		'import/export': 2,
		'import/no-unresolved': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'import/prefer-default-export': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/function-component-definition': 'off',
		'react/require-default-props': 'off',
		'import/extensions': 'off'
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {}
		}
	]
}
