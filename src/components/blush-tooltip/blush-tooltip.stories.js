import BlushTooltip from './blush-tooltip.vue'

export default {
	title: 'BLUSH/blush-tooltip',
	component: BlushTooltip,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'Componente de tooltip com opções de estilos',
		layout: 'centered',
	},
	argTypes: {
		variant: {
			control: {
				type: 'select'
			},
			table: {
				type: {
					summary: 'string'
				}
			},
			description: 'Estilo do tooltip',
			options: ['primary', 'accent', 'success', 'warning', 'danger', 'neutral'],
		},
		placement: {
			control: {
				type: 'select'
			},
			table: {
				type: {
					summary: 'string'
				}
			},
			description: 'Define onde o tooltip será exibido',
			options: ['top', 'bottom'],
		},
		title: {
			control: {
				type: 'text'
			},
			description: 'Título do tooltip',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		content: {
			control: {
				type: 'text'
			},
			description: 'Conteúdo do tooltip',
			table: {
				type: {
					summary: 'string, html'
				}
			}
		},
		show: {
			control: {
				type: 'select'
			},
			table: {
				type: {
					summary: 'string'
				}
			},
			description: 'Define quando o tooltip será exibido: sempre ou ao passar o mouse sobre o conteúdo.',
			options: ['hover', 'always'],
		},
		default: {
			control: {
				type: 'text'
			},
			description: 'Slot padrão que renderizará o conteúdo alvo/que dispara o tooltip.',
			table: {
				category: 'Slots',
				type: {
					summary: 'html'
				}
			}
		},
	},
	decorators: [
		() => ({
			template: `
        <div style="display: flex; justify-content: center; align-items: center; height: 150px;">
          <story />
        </div>
      `,
		}),
	]
}

const generalArgs = {
	variant: 'neutral',
	show: 'hover',
	placement: 'top',
	content: 'Conteúdo do tooltip'
}

const Template = (args) => ({
	components: { BlushTooltip },
	setup: () => ({
		args
	}),
	template: `
    <blush-tooltip
      :variant="args.variant"
      :show="args.show"
      :title="args.title"
      :content="args.content"
      :placement="args.placement"
    >
      <h1 style="margin: 0;">Tooltip</h1>
    </blush-tooltip>
  `,
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

export const Accent = Template.bind({})
Accent.args = {
	...generalArgs,
	variant: 'accent'
}

export const ShowAlways = Template.bind({})
ShowAlways.args = {
	...generalArgs,
	show: 'always'
}

export const WithTitle = Template.bind({})
WithTitle.args = {
	...generalArgs,
	title: 'Título'
}