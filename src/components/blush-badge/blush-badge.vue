<template>
	<span
		:class="classes"
	>
		<span>{{ props.text }}</span>
		<span
			v-if="props.showDismiss"
			class="material-icons-round dismiss-icon"
			@click="emit('onDismiss')"
		>
			cancel
		</span>
	</span>
</template>
  
<script setup>
import { computed } from 'vue'
  
const props = defineProps({
	text: {
		type: String,
		required: true
	},
	variant: {
		type: String,
		default: 'primary',
		validator(value) {
			return [
				'primary', 'primary-outline', 'primary-ghost',
				'accent', 'accent-outline', 'accent-ghost',
				'success', 'success-outline', 'success-ghost',
				'warning', 'warning-outline', 'warning-ghost',
				'danger', 'danger-outline', 'danger-ghost',
				'neutral', 'neutral-outline', 'neutral-ghost',
			].includes(value)
		}
	},
	showDismiss: {
		type: Boolean,
		default: false
	},
})

const emit = defineEmits(['onDismiss'])

const classes = computed(() => [
	'blush-badge',
	props.variant,
	props.showDismiss ? 'dismissible' : ''
])

</script>
  
<style lang="scss">
    @import './blush-badge.scss';
</style>
