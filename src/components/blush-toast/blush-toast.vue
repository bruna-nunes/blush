<template>
	<div
		:class="classes"
	>
		<span
			v-if="showStateIcon"
			class="material-icons-round icon"
		>
			{{ icon }}
		</span>
		<div class="content">
			<h6
				v-if="props.title"
				class="title"
			>
				{{ props.title }}
			</h6>
			<p
				v-if="props.text"
				class="text"
			>
				{{ props.text }}
			</p>
		</div>
		<span
			v-if="props.showDismiss"
			class="material-icons-round dismiss-icon"
			@click="emit('onDismiss')"
		>
			close
		</span>
	</div>
</template>
  
<script setup>
import { computed } from 'vue'

const props = defineProps({
	title: {
		type: String
	},
	text: {
		type: String,
	},
	type: {
		type: String,
		default: 'informative',
		validator(value) {
			return [
				'success',
				'warning',
				'error', 
				'informative', 
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
	'blush-toast',
	props.type,
	props.showDismiss ? 'dismissible' : ''
])

const iconStateMap = {
	'success': 'check_circle',
	'warning': 'warning',
	'error': 'cancel',
	'informative': 'info',
}

const showStateIcon = computed(() => {
	return ['success', 'warning', 'error', 'informative'].includes(props.type)
}) 

const icon = computed(() => {
	if(showStateIcon.value) {
		return iconStateMap[props.type]
	}
	return ''
})

</script>
  
<style lang="scss">
    @import './blush-toast.scss';
</style>
