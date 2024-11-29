import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
	{
		ignores: [
			'node_modules/*',
			'**/dist/',
			'**/vite.config.js'
		],
	},
	{
		files: ['**/*.{js,vue}'],
		rules: {
			semi: ['error', 'never'],
			'prefer-const': ['error'],
			'no-unused-vars': ['error'],

			'indent': ['error', 'tab'],
			'vue/html-indent':  ['error', 'tab'],
			'vue/script-indent':  ['error', 'tab'],
      
			'quotes': ['error', 'single'],

			'no-multiple-empty-lines': ['error', { max: 1 }],

			'vue/multi-word-component-names': ['error'],
			'vue/max-attributes-per-line': ['error', {
				'singleline': {
					'max': 1
				},      
				'multiline': {
					'max': 1
				}
			}],
			'vue/singleline-html-element-content-newline': ['error'],

			'vue/no-mutating-props': ['error']
		},
	},
	{
		files: ['**/*.cy.js'],
		rules: {
			'no-unused-vars': 'off',
		},
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				cy: true,
				it: true,
				describe: true,
				fn: true,
				Cypress: true
			}
		}
	},
	pluginJs.configs.recommended,
	...pluginVue.configs['flat/essential'],
	eslintConfigPrettier
]