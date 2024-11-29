import BlushModal from './blush-modal.vue'

export default {
	title: 'BLUSH/blush-modal',
	component: BlushModal,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'Componente de modal com  opções de estilos e slots personalizados para header, conteúdo e footer.',
		docs: {
			story: {
				height: '300px',
			}
		}

	},
	argTypes: {
		isOpen: {
			name: 'isOpen',
			control: {
				type: 'boolean'
			},
			description: 'Define se o modal está aberto ou fechado',
			table: {
				type: {
					summary: 'boolean'
				},
				defaultValue: {
					summary: 'false'
				}
			}
		},
		showDismissButton: {
			name: 'showDismissButton',
			control: {
				type: 'boolean'
			},
			description: 'Define se o modal exibirá o botão de dismiss no canto superior direito',
			table: {
				type: {
					summary: 'boolean'
				},
				defaultValue: {
					summary: 'false'
				}
			}
		},
		closeOutside: {
			name: 'closeOutside',
			control: {
				type: 'boolean'
			},
			description: 'Define se o modal fechará ao clicar fora do mesmo.',
			table: {
				type: {
					summary: 'boolean'
				},
				defaultValue: {
					summary: 'false'
				}
			}
		},
		header: {
			control: {
				type: 'text'
			},
			description: 'Slot de Header do Modal. Aceite qualquer conteúdo desejado',
			table: {
				category: 'Slots',
				type: {
					summary: 'html'
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
			description: 'Estilo do modal',
			options: ['primary', 'primary-outline',
				'accent', 'accent-outline',
				'success', 'success-outline',
				'warning', 'warning-outline',
				'danger', 'danger-outline',
				'neutral', 'neutral-outline'],
		},
		footer: {
			control: {
				type: 'text'
			},
			description: 'Slot de Footer do Modal. Aceite qualquer conteúdo desejado',
			table: {
				category: 'Slots',
				type: {
					summary: 'html'
				}
			}
		},
		content: {
			control: {
				type: 'text'
			},
			description: 'Slot de Content do Modal. Aceite qualquer conteúdo desejado',
			table: {
				category: 'Slots',
				type: {
					summary: 'html'
				}
			}
		},
		onOpen: {
			name: '@onOpen',
			type: {
				name: 'function',
				required: false
			},
			defaultValue: null,
			control: {
				type: 'function'
			},
			description: 'Define a função que será executada quando o modal emitir o evento de open (mudar a variável passada para a propriedade isOpen, por exemplo!)',
			table: {
				type: {
					summary: 'function'
				},
				defaultValue: {
					summary: null
				}
			},
			action: 'onOpen'
		},
		onClose: {
			name: '@onClose',
			type: {
				name: 'function',
				required: false
			},
			defaultValue: null,
			control: {
				type: 'function'
			},
			description: 'Define a função que será executada quando o modal emitir o evento de close (mudar a variável passada para a propriedade isOpen, por exemplo!)',
			table: {
				type: {
					summary: 'function'
				},
				defaultValue: {
					summary: null
				}
			},
			action: 'onClose'
		},
	},
}

const generalArgs = {
	isOpen: true,
	showDismissButton: false,
	closeOutside: true,
	onOpen: () => console.log('modal open'),
	onClose: () => console.log('modal close'),
	variant: 'neutral-outline',
	header: 'Header',
	content: 'Content',
	footer: 'Footer'
}

const Template = (args) => ({
	components: { BlushModal },
	setup: () => ({
		args
	}),
	template: `
    <blush-modal
      :is-open="args.isOpen"
      :show-dismiss-button="args.showDismissButton"
      :close-outside="args.closeOutside"
      :variant="args.variant"
      @onClose="args.onClose"
      @onOpen="args.onOpen"
    >
      <template #header>
        ${args.header}
      </template>
      <template #content>
        ${args.content}
      </template>
      <template #footer>
        ${args.footer}
      </template>
    </blush-modal>
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

export const WithDismissButton = Template.bind({})
WithDismissButton.args = {
	...generalArgs,
	showDismissButton: true
}