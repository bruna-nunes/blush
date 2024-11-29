import BlushList from './blush-list.vue'

export default {
	title: 'BLUSH/blush-list',
	component: BlushList,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'Componente de lista com  opções de estilos e slots personalizados para cada item fornecido.',
	},
	argTypes: {
		header: {
			control: {
				type: 'text'
			},
			description: 'Slot de Header da List. Aceite qualquer conteúdo desejado',
			table: {
				category: 'Slots',
				type: {
					summary: 'html'
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
			description: 'Array de objetos com items da lista. Para cada item da lista deve ser fornecido um objeto com key e text',
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
			description: 'Estilo da lista',
			options: ['primary', 'primary-outline',
				'accent', 'accent-outline',
				'success', 'success-outline',
				'warning', 'warning-outline',
				'danger', 'danger-outline',
				'neutral', 'neutral-outline'],
		},
		'`item(${item.key})`': {
			name: '#item(key)',
			description: 'Slots para cada item da lista, personalizado e que possui acesso ao item da linha em questão e ao valor que seria renderizado no item da lista por padrão.',
			table: {
				category: 'Slots',
				type: {
					summary: 'html'
				},
			},
			control: {
				type: 'none'
			},
		},
		footer: {
			control: {
				type: 'text'
			},
			description: 'Slot de Footer da List. Aceite qualquer conteúdo desejado',
			table: {
				category: 'Slots',
				type: {
					summary: 'html'
				}
			}
		},
	},
}

const generalArgs = {
	items: [
		{
			key: 'item1',
			text: 'Item 1'
		},
		{
			key: 'item2',
			text: 'Item 2'
		},
		{
			key: 'item3',
			text: 'Item 3'
		},
		{
			key: 'item4',
			text: 'Item 4'
		}
	],
	variant: 'neutral-outline',
	header: 'Header',
	footer: 'Footer'
}

const Template = (args) => ({
	components: { BlushList },
	setup: () => ({
		args
	}),
	template: `
    <blush-list
      :items="args.items"
      :variant="args.variant"
    >
      <template #header>
        ${args.header}
      </template>
      <template #item(item1)="{value, item}">
        Item com template: {{ value }}
      </template>
      <template #footer>
        ${args.footer}
      </template>
    </blush-list>
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