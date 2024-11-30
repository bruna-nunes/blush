<template>
	<div
		:class="componentClasses"
	> 
		<input
			:type="componentType"
			:name="props.name"
			class="radio-collapse"
			:checked="props.opened"
			@change="emit('onChangeCollapseVisibility', props.name)" 
		>
		<header
			class="header-collapse"
		>
			<p class="title">
				{{ props.title }}
			</p>
			<span class="material-icons-round icon-collapse">
				expand_more
			</span>
		</header>
		<main
			class="main-collapse"
		>
			<slot />
		</main>
	</div>
</template>
  
<script setup>
import { computed } from 'vue'

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
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
	opened: {
		type: Boolean,
		default: false
	},
	accordion: {
		type: Boolean,
		default: false
	}
})

const emit = defineEmits(['onChangeCollapseVisibility'])

const componentClasses = computed(() => ({
	'blush-collapse': true,
	[props.variant]: props.variant,
}))

const componentType = computed(() => {
	return props.accordion === true ? 'radio' : 'checkbox'
})

</script>
  
<style lang="scss">
    @import './blush-collapse.scss';
</style>
