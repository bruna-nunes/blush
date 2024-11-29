export default {
	extends: [
		'stylelint-config-standard-scss',
	],
	overrides: [
		{
			files: ['**/*.scss'],
			customSyntax: 'postcss-scss' // Analisa estilos embutidos
		}
	],
	rules: {
		'no-descending-specificity': null,
		'media-feature-range-notation': null,
        'color-function-notation': 'legacy',
        'scss/no-global-function-names': null
	}
}