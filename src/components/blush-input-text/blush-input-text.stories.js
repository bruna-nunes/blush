import { fn } from '@storybook/test'
import BlushInput from './blush-input-text.vue'

export default {
	title: 'BLUSH/blush-input-text',
	component: BlushInput,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'Componente de input text.',
	},
	argTypes: {
		id: {
			control: {
				type: 'text'
			},
			description: 'ID do input',
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
			description: 'Nome do input',
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
			description: 'Label do input',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		size: {
			control: {
				type: 'select'
			},
			table: {
				type: {
					summary: 'string'
				}
			},
			description: 'Tamanho do input',
			options: ['small', 'medium', 'large'],
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
			description: 'Estado do input',
			options: ['valid', 'invalid', 'normal'],
		},
		placeholder: {
			control: {
				type: 'text'
			},
			description: 'Placeholder do input',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		disabled: {
			control: {
				type: 'boolean'
			},
			description: 'Define se o input está desabilitado ou não.',
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
			description: 'Define se o input é required ou não.',
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
			description: 'Define se o input tem autofocus ou não.',
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
			description: 'Texto de hint do input',
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
			description: 'Texto de erro do input',
			table: {
				type: {
					summary: 'string'
				}
			}
		},
		minLength: {
			control: {
				type: 'number'
			},
			description: 'Comprimento mínimo da string que pode ser inserida no input (quantidade em caracteres).',
			table: {
				type: {
					summary: 'string, number'
				}
			}
		},
		maxLength: {
			control: {
				type: 'number'
			},
			description: 'Comprimento máximo da string que pode ser inserida no input (quantidade em caracteres).',
			table: {
				type: {
					summary: 'string, number'
				}
			}
		},
		readonly: {
			control: {
				type: 'boolean'
			},
			description: 'Define se o input será somente de leitura (não poderá ser editado).',
			table: {
				type: {
					summary: 'boolean'
				}
			}
		},
		onChange: {
			control: {
				type: 'function'
			},
			description: 'Função a ser executada quando o input emite o evento de change.',
			table: {
				category: 'Events',
				type: {
					summary: 'function'
				}
			}
		},
		onInput: {
			control: {
				type: 'function'
			},
			description: 'Função a ser executada quando o input emite o evento de input.',
			table: {
				category: 'Events',
				type: {
					summary: 'function'
				}
			}
		},
		onFocus: {
			control: {
				type: 'function'
			},
			description: 'Função a ser executada quando o input emite o evento de focus.',
			table: {
				category: 'Events',
				type: {
					summary: 'function'
				}
			}
		},
		onBlur: {
			control: {
				type: 'function'
			},
			description: 'Função a ser executada quando o input emite o evento de blur.',
			table: {
				category: 'Events',
				type: {
					summary: 'function'
				}
			}
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {
		onChange: fn(),
		onInput: fn(),
		onFocus: fn(),
		onBlur: fn()
	},
}

const generalArgs = {
	id: 'input-id',
	name: 'input-name',
	label: 'Input label',
	size: 'medium',
	state: 'normal',
	placeholder: 'Placeholder',
	disabled: false,
	autofocus: false,
	required: false,
	hintText: '',
	errorText: '',
	minLength: 0,
	maxLength: 100,
	readonly: false
}

export const Neutral = {
	args: {
		...generalArgs,
	},
}

export const Small = {
	args: {
		...generalArgs,
		size: 'small'
	},
}

export const Medium = {
	args: {
		...generalArgs,
		size: 'medium'
	},
}

export const Large = {
	args: {
		...generalArgs,
		size: 'large'
	},
}

export const Disabled = {
	args: {
		...generalArgs,
		disabled: true,
	},
}

export const ReadOnly = {
	args: {
		...generalArgs,
		readonly: true,
	},
}

export const StateInvalidAndErrorText = {
	args: {
		...generalArgs,
		state: 'invalid',
		errorText: 'Texto de erro'
	},
}

export const StateValid = {
	args: {
		...generalArgs,
		state: 'valid',
	},
}

export const WithHint = {
	args: {
		...generalArgs,
		hintText: 'Texto de hint',
	},
}