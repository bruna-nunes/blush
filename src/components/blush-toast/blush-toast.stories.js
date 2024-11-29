import { fn } from '@storybook/test'
import BlushToast from './blush-toast.vue'

export default {
	title: 'BLUSH/blush-toast',
	component: BlushToast,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'Componente de Toast.',
		docs: {
			description: {
				component: 'Um exemplo de utilização do toast se encontra no `App.vue`, utilizando a estrutura de plugins do Vue e um `toast-container`'
			}
		}
	},
	argTypes: {
		title: {
			control: {
				type: 'text'
			},
			description: 'Título do toas',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		text: {
			control: {
				type: 'text'
			},
			description: 'Texto do toast',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		type: {
			control: {
				type: 'select'
			},
			table: {
				type: {
					summary: 'string'
				}
			},
			description: 'Tipo do toast. Define sua aparência',
			options: ['success', 'warning', 'error', 'informative'],
		},
		showDismiss: {
			control: {
				type: 'boolean'
			},
			description: 'Define se o toast mostrará o ícone/botão de dismiss',
			table: {
				type: {
					summary: 'boolean'
				}
			}
		},
		onDismiss: {
			control: {
				type: 'function'
			},
			description: 'Evento emitido ao clicar no ícone de dismiss',
			table: {
				category: 'Events',
				type: {
					summary: 'function'
				},
			}
		}
	}, 
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {
		onDismiss: fn()
	},
}

const generalArgs = {
	title: 'Título do Toast',
	text: 'Texto do toast',
	type: 'informative',
	showDismiss: false
}

export const Informative = {
	args: {
		...generalArgs,
	},
}

export const Success = {
	args: {
		...generalArgs,
		type: 'success'
	},
}

export const Warning = {
	args: {
		...generalArgs,
		type: 'warning',
	},
}

export const Error = {
	args: {
		...generalArgs,
		type: 'error',
	},
}

export const Dismissible = {
	args: {
		...generalArgs,
		showDismiss: true,
	},
}

