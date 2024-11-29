import { fn } from '@storybook/test'
import BlushCheckbox from './blush-checkbox.vue'

export default {
	title: 'BLUSH/blush-checkbox',
	component: BlushCheckbox,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'Componente de checkbox.',
	},
	argTypes: {
		id: {
			control: {
				type: 'text'
			},
			description: 'ID do checkbox',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		name: {
			control: {
				type: 'text'
			},
			description: 'Nome do checkbox',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		label: {
			control: {
				type: 'text'
			},
			description: 'Label do checkbox',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		value: {
			control: {
				type: 'text'
			},
			description: 'Valor do checkbox',
			table: {
				type: {
					summary: 'string, number, object'
				}
			}
		},
		state: {
			control: {
				type: 'select'
			},
			table: {
				type: {
					summary: 'string'
				}
			},
			description: 'Estado do checkbox',
			options: ['valid', 'invalid', 'normal'],
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
			description: 'Estilo do checkbox',
			options: [
				'primary',
				'accent', 
				'success', 
				'warning',
				'danger',
				'neutral'
			],
		},
		disabled: {
			control: {
				type: 'boolean'
			},
			description: 'Define se o checkbox está desabilitado ou não.',
			table: {
				type: {
					summary: 'boolean'
				}
			}
		},
		required: {
			control: {
				type: 'boolean'
			},
			description: 'Define se o checkbox é required ou não.',
			table: {
				type: {
					summary: 'boolean'
				}
			}
		},
		checked: {
			control: {
				type: 'boolean'
			},
			description: 'Define se o checkbox está checado ou não.',
			table: {
				type: {
					summary: 'boolean'
				}
			}
		},
		autofocus: {
			control: {
				type: 'boolean'
			},
			description: 'Define se o checkbox tem autofocus ou não.',
			table: {
				type: {
					summary: 'boolean'
				}
			}
		},
		hintText: {
			control: {
				type: 'text'
			},
			description: 'Texto de hint do checkbox',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		errorText: {
			control: {
				type: 'text'
			},
			description: 'Texto de erro do checkbox',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		onChange: {
			control: {
				type: 'function'
			},
			description: 'Função a ser executada quando o checkbox emite o evento de change.',
			table: {
				type: {
					summary: 'function'
				}
			}
		},
		onInput: {
			control: {
				type: 'function'
			},
			description: 'Função a ser executada quando o checkbox emite o evento de input.',
			table: {
				type: {
					summary: 'function'
				}
			}
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {
		onChange: fn(),
		onInput: fn()
	},
}

const generalArgs = {
	id: 'checkbox-id',
	name: 'checkbox-name',
	label: 'Checkbox label',
	value: 'checkbox1',
	variant: 'primary',
	state: 'normal',
	disabled: false,
	autofocus: false,
	required: false,
	checked: false,
	hintText: '',
	errorText: ''
}

export const Primary = {
	args: {
		...generalArgs,
	},
}

export const Accent = {
	args: {
		...generalArgs,
		variant: 'accent',
	},
}

export const Success = {
	args: {
		...generalArgs,
		variant: 'success',
	},
}

export const Warning = {
	args: {
		...generalArgs,
		variant: 'warning',
	},
}

export const Danger = {
	args: {
		...generalArgs,
		variant: 'danger',
	},
}

export const Disabled = {
	args: {
		...generalArgs,
		disabled: true,
	},
}