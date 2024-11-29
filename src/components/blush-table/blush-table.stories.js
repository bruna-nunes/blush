import BlushTable from './blush-table.vue'

export default {
	title: 'BLUSH/blush-table',
	component: BlushTable,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'Componente de tabela com uma lista de opções de estilos e slots personalizados para cada item',
	},
	argTypes: {
		name: {
			name: 'name',
			control: {
				type: 'text'
			},
			description: 'Nome da tabela',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		columns: {
			type: {
				name: 'object',
				required: true
			},
			defaultValue: null,
			control: {
				type: 'object'
			},
			description: 'Array de objetos com colunas da tabela. Para cada coluna deve ser fornecido uma key (igual a chave do dado correspondente no objeto de items abaixo) e um title (que será usado no header da tabela para identificação da coluna.',
			table: {
				type: {
					summary: 'array of objects'
				},
				defaultValue: {
					summary: null
				}
			}
		},
		items: {
			type: {
				name: 'object',
				required: true
			},
			defaultValue: null,
			control: {
				type: 'object'
			},
			description: 'Array de objetos com items da tabela. Para cada linha da tabela deve ser fornecido um objeto com todos os dados para cada coluna. as chaves dos objetos devem seguir o mesmo nome fornecido em cada key do objeto de columns',
			table: {
				type: {
					summary: 'array of objects'
				},
				defaultValue: {
					summary: null
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
			description: 'Estilo da tabela',
			options: ['primary', 'primary-outline',
				'accent', 'accent-outline',
				'success', 'success-outline',
				'warning', 'warning-outline',
				'danger', 'danger-outline',
				'neutral', 'neutral-outline'],
		},
		linesStyle: {
			control: {
				type: 'select'
			},
			table: {
				type: {
					summary: 'string'
				}
			},
			description: 'Estilo de linha da tabela (normal ou stripped)',
			options: ['none', 'stripped'],
		},
		selectable: {
			name: 'selectable',
			control: {
				type: 'boolean'
			},
			description: 'Define se os items da tabela serão selecionáveis ou não',
			table: {
				type: {
					summary: 'boolean'
				},
				defaultValue: {
					summary: 'false'
				}
			}
		},
		selectedItemsChange: {
			name: '@selected-items-change',
			type: {
				name: 'function',
				required: false
			},
			defaultValue: null,
			control: {
				type: 'function'
			},
			description: 'Define a função que será executada quando houver mudanças em linhas selecionadas. O evento emite um array com todos os itens selecionados',
			table: {
				type: {
					summary: 'function'
				},
				defaultValue: {
					summary: null
				}
			},
			action: 'selectedItemsChange'
		},
		'`cell(${column.key})`': {
			name: '#cell(key)',
			description: 'Slots para cada TD/dado da tabela, personalizado e que possui acesso ao item da linha em questão e ao valor que seria renderizado na TD por padrão.',
			table: {
				category: 'Slots',
				type: {
					summary: 'html'
				},
			},
			control: {
				type: 'none'
			},
		}
	},
}

const generalArgs = {
	name: 'table',
	columns: [
		{
			key: 'name',
			title: 'Nome'
		},
		{
			key: 'age',
			title: 'Idade',
		},
		{
			key: 'color',
			title: 'Cor'
		}
	],
	items: [
		{
			name: 'Nome 1',
			age: '20',
			color: 'Amarelo',
		},
		{
			name: 'Nome 2',
			age: '30',
			color: 'Azul',
		},
		{
			name: 'Nome 2',
			age: '40',
			color: 'Vermelho',
		}
	],
	variant: 'neutral-outline',
	linesStyle: 'none',
	selectable: false,
	selectedItemsChange: (rowsSelected) => console.log(rowsSelected)
}

const Template = (args) => ({
	components: { BlushTable },
	setup: () => ({
		args
	}),
	template: `
    <blush-table
      :name="args.name"
      :columns="args.columns"
      :items="args.items"
      :variant="args.variant"
      :lines-style="args.linesStyle"
      :selectable="args.selectable"
      @selected-items-change="args.selectedItemsChange"
    >
      <template #cell(name)="{value, item}">
        Nome com template: {{ value }}
      </template>
    </blush-table>
  `
})

export const Example = Template.bind({})
Example.args = {
	...generalArgs, 
}

export const Stripped = Template.bind({})
Stripped.args = {
	...generalArgs,
	linesStyle: 'stripped'
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

export const Selectable = Template.bind({})
Selectable.args = {
	...generalArgs,
	selectable: 'true'
}