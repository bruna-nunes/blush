import BlushPagination from './blush-pagination.vue'

export default {
	title: 'BLUSH/blush-pagination',
	component: BlushPagination,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'Componente de paginação com  opções de estilos.',
	},
	argTypes: {
		vModel: {
			description: 'Define a variável que será ligada ao número da página atual.',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		variant: {
			control: {
				type: 'select'
			},
			table: {
				type: {
					summary: 'string'
				}
			},
			description: 'Estilo da paginação',
			options: ['primary', 'primary-outline',
				'accent', 'accent-outline',
				'success', 'success-outline',
				'warning', 'warning-outline',
				'danger', 'danger-outline',
				'neutral', 'neutral-outline'],
		},
		totalItems: {
			control: {
				type: 'number'
			},
			description: 'Total de itens presentes na lista ou item a ser paginado. É usado para calcular o número de páginas, junto com a propriedade `perPage`.',
			table: {
				type: {
					summary: 'number'
				}
			}
		},
		perPage: {
			control: {
				type: 'number'
			},
			description: 'Número de itens por página. É usado para calcular o número de páginas, junto com a propriedade `totalItems`.',
			table: {
				type: {
					summary: 'number'
				}
			}
		},
		prevNextStyle : {
			control: {
				type: 'select'
			},
			table: {
				type: {
					summary: 'string'
				}
			},
			description: 'Estilo dos botões de controle',
			options: ['arrow', 'text'],
		},
		prevText: {
			control: {
				type: 'text'
			},
			description: 'Define o texto do botão de controle de *anterior*, se `prevNextStyle` for definido como `text`',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		nextText: {
			control: {
				type: 'text'
			},
			description: 'Define o texto do botão de controle de *próximo*, se `prevNextStyle` for definido como `text`',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		onPageChange: {
			name: '@onPageChange',
			type: {
				name: 'function',
				required: false
			},
			defaultValue: null,
			control: {
				type: 'function'
			},
			description: 'Define a função que será executada quando a página mudar. A função tem acesso a página para qual foi feita a mudança.',
			table: {
				type: {
					summary: 'function'
				},
				defaultValue: {
					summary: null
				}
			},
			action: 'onPageChange'
		},
	},
}

const generalArgs = {
	variant: 'neutral-outline',
	totalItems: 101,
	prevNextStyle: 'arrow',
	perPage: 10,
	onPageChange: (page) => console.log('page: ', page),
}

const Template = (args) => ({
	components: { BlushPagination },
	setup: () => ({
		args
	}),
	template: `
    <blush-pagination
      :variant="args.variant"
      :total-items="args.totalItems"
      :prev-next-style="args.prevNextStyle"
      :prev-text="args.prevText"
      :next-text="args.nextText"
      @on-page-change="args.onPageChange"
    />
  `
})

export const Example = Template.bind({})
Example.args = {
	...generalArgs, 
}

export const Primary = Template.bind({})
Primary.args = {
	...generalArgs,
	variant: 'primary'
}

export const PrimaryOutline = Template.bind({})
PrimaryOutline.args = {
	...generalArgs,
	variant: 'primary-outline'
}

export const Accent = Template.bind({})
Accent.args = {
	...generalArgs,
	variant: 'accent'
}

export const WithPrevNextText = Template.bind({})
WithPrevNextText.args = {
	...generalArgs,
	prevNextStyle: 'text',
	prevText: 'Anterior',
	nextText: 'Próximo'
}