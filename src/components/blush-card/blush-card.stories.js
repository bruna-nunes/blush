import BlushCard from './blush-card.vue'
import BlushButton from '../blush-button/blush-button.vue'

export default {
	title: 'BLUSH/blush-card',
	component: BlushCard,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'Componente de card com uma lista de opções de estilos e slots de header, content e footer',
	},
	argTypes: {
		title: {
			control: {
				type: 'text'
			},
			description: 'Título do card',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		subtitle: {
			control: {
				type: 'text'
			},
			description: 'Subtítulo do card',
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
			description: 'Estilo do card',
			options: ['primary', 'primary-outline',
				'accent', 'accent-outline',
				'success', 'success-outline',
				'warning', 'warning-outline',
				'danger', 'danger-outline',
				'neutral', 'neutral-outline'],
		},
		imageSrc: {
			control: {
				type: 'text'
			},
			description: 'Source da imagem do card, se houver. Caso uma imagem seja definida, o atributo imageAlt se torna obrigatório',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		imageAlt: {
			control: {
				type: 'text'
			},
			description: 'Alt da imagem do card, setado quando imageSrc definido.',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		imagePlacement: {
			control: {
				type: 'select'
			},
			table: {
				type: {
					summary: 'string'
				}
			},
			description: 'Posicionamento da imagem do card',
			options: ['top', 'bottom'],
		},
		header: {
			control: {
				type: 'text'
			},
			description: 'Slot de Header do card. Aceita qualquer conteúdo desejado',
			table: {
				type: {
					summary: 'html'
				}
			}
		},
		content: {
			control: {
				type: 'text'
			},
			description: 'Slot de Content do card. Aceita qualquer conteúdo desejado',
			table: {
				type: {
					summary: 'html'
				}
			}
		},
		footer: {
			control: {
				type: 'text'
			},
			description: 'Slot de Footer do card. Aceita qualquer conteúdo desejado',
			table: {
				type: {
					summary: 'html'
				}
			}
		},
	},
}

const generalArgs = {
	title: 'Título do card',
	subtitle: 'Subtítulo do card',
	variant: 'neutral-outline',
	imageSrc: 'https://picsum.photos/600/300/?image=25',
	imageAlt: 'Alt da imagem',
	style: 'max-width: 20rem',
	content: 'Conteúdo do card'
}

export const NeutralOutline = {
	render: (args, {argTypes}) => ({
		components: { BlushCard, BlushButton },
		props: Object.keys(argTypes),
		setup: () => ({
			args
		}),
		template: `
      <blush-card
        :title="args.title"
        :subtitle="args.subtitle"
        :variant="args.variant"
        :imageSrc="args.imageSrc"
        :imageAlt="args.imageAlt"
        :imagePlacement="args.imagePlacement"
        style="max-width: 20rem;"
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
      </blush-card>`
	}),
	args: {
		title: 'Título do card',
		subtitle: 'Subtítulo do card',
		variant: 'neutral-outline',
		imageSrc: 'https://picsum.photos/600/300/?image=25',
		imageAlt: 'Alt da imagem',
		imagePlacement: 'top',
		style: 'max-width: 20rem',
		header: '<span>Header</span>',
		content: `Card content
      <blush-button
        id="button-card"
        name="nameButtonCard"
        type="button"
        label="Button card content"
        variant="primary"
        size="small"
      />
    `,
		footer: 'Footer'
	},
}

export const PrimaryVariationWithoutImageAndHeaderAndFooter = {
	args: {
		...generalArgs,
		variant: 'primary',
		imageSrc: '',
		style: 'width: 20rem',
	},
}

export const AccentVariationWithImage = {
	args: {
		...generalArgs,
		variant: 'accent',
	},
}

export const SuccessVariationWithHeader = {
	args: {
		...generalArgs,
		variant: 'success',
		header: 'Header'
	},
}

export const WarningVariationWithFooter = {
	args: {
		...generalArgs,
		variant: 'warning',
		footer: 'Footer'
	},
}

export const DangerVariationWithHeaderAndFooterAndWithoutImage = {
	args: {
		title: 'Título do card',
		subtitle: 'Subtítulo do card',
		content: 'Conteúdo do card',
		variant: 'danger',
		style: 'width: 20rem',
		header: 'Header',
		footer: 'Footer'
	},
}
