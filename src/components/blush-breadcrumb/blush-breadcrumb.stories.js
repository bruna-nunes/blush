import BlushBreadcrumb from './blush-breadcrumb.vue'
import BlushCard from '../blush-card/blush-card.vue'
import { vueRouter } from 'storybook-vue3-router'

export default {
	title: 'BLUSH/blush-breadcrumb',
	component: BlushBreadcrumb,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'Componente de breadcrumb com suporte para href e Vue Router',
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
			description: 'Estilo do breadcrumb',
			options: ['primary', 'accent', 'success', 'warning', 'danger', 'neutral'],
		},
		separatorStyle: {
			control: {
				type: 'select'
			},
			table: {
				type: {
					summary: 'string'
				}
			},
			description: 'Separador do breadcrumb',
			options: ['slash', 'chevron'],
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
			description: 'Array de objetos com items do breadcrumb. Para cada item do breadcrumb deve ser fornecido um objeto com texto para o breadcrumb e href para links normais ou route para Vue Router',
			table: {
				type: {
					summary: 'array of objects'
				},
				defaultValue: {
					summary: null
				}
			}
		},
	},
}

const customRoutes = [
	{
		path: '/card1',
		component: BlushCard,
		props: {
			title: 'Card1 from router',
			variant: 'neutral-outline',
			imageSrc: 'https://picsum.photos/600/300/?image=25',
			imageAlt: 'Alt image card',
			style: 'max-width: 20rem;'
		}
	},
]

const generalArgs = {
	items: [
		{
			text: 'Google',
			href: 'https://google.com',
			active: true
		},
		{
			text: 'Card 1',
			toRoute: '/card1'
		}
	],
	separatorStyle: 'chevron',
	variant: 'primary'
}

export const Primary = {
	args: {
		...generalArgs,
	},
}

Primary.decorators = [
	vueRouter(customRoutes)
]

export const Accent = {
	args: {
		...generalArgs,
		variant: 'accent',
	},
}

Accent.decorators = [
	vueRouter(customRoutes)
]

export const Success = {
	args: {
		...generalArgs,
		variant: 'success',
	},
}

Success.decorators = [
	vueRouter(customRoutes)
]

export const Warning = {
	args: {
		...generalArgs,
		variant: 'warning',
	},
}

Warning.decorators = [
	vueRouter(customRoutes)
]

export const Danger = {
	args: {
		...generalArgs,
		variant: 'danger',
	},
}

Danger.decorators = [
	vueRouter(customRoutes)
]

export const SeparatorStyleSlash = {
	args: {
		...generalArgs,
		separatorStyle: 'slash',
	},
}

SeparatorStyleSlash.decorators = [
	vueRouter(customRoutes)
]

