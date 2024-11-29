<template>
	<div
		:class="classes"
	>
		<img 
			v-if="props.imageSrc && props.imagePlacement === 'top'"
			:src="props.imageSrc"
			:alt="props.imageAlt"
			class="image-top"
		>
		<header
			v-if="$slots.header"
			class="header"
		>
			<slot name="header" />
		</header>
		<main class="main">
			<h5
				v-if="props.title"
				class="title"
			>
				{{ props.title }}
			</h5>
			<p
				v-if="props.subtitle"
				class="subtitle"
			>
				{{ props.subtitle }}
			</p>
			<div
				v-if="$slots.content"
				class="content"
			>
				<slot name="content" />
			</div>
		</main>
		<footer
			v-if="$slots.footer"
			class="footer "
		>
			<slot name="footer" />
		</footer>
		<img 
			v-if="props.imageSrc && props.imagePlacement === 'bottom'"
			:src="props.imageSrc"
			:alt="props.imageAlt"
			class="image-bottom"
		>
	</div>
</template>
  
<script setup>
import { computed } from 'vue'

const props = defineProps({
	title: {
		type: String,
	},
	subtitle: {
		type: String,
	},
	variant: {
		type: String,
		default: 'neutral-outline',
		validator(value) {
			return [
				'primary', 'primary-outline',
				'accent', 'accent-outline',
				'success', 'success-outline',
				'warning', 'warning-outline',
				'danger', 'danger-outline',
				'neutral', 'neutral-outline'
			].includes(value)
		}
	},
	imageSrc: {
		type: String
	},
	imageAlt: {
		type: String
	},
	imagePlacement: {
		type: String,
		default: 'top',
		validator(value) {
			return ['top', 'bottom'].includes(value)
		} 
	}
})

const classes = computed(() => [
	'blush-card',
	props.variant,
])

</script>
  
<style lang="scss">
    @import './blush-card.scss';
</style>
