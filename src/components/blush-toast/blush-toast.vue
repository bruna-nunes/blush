<template>
	<div
		:class="classes"
	>
		<img
			:src="stateImgSrc"
			width="28"
			height="28"
			class="icon"
			:alt="stateImgAlt" 
		>
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
		<img
			v-if="props.showDismiss"
			src="../../assets/icons/x.svg"
			width="24"
			height="24"
			class="dismiss-icon"
			alt="Fechar toast"
			@click="emit('onDismiss')"
		>
	</div>
</template>
  
<script setup>
import { computed } from 'vue'
import InformativeIcon from '/src/assets/icons/info-triangle.svg'
import SuccessIcon from '/src/assets/icons/check-circle.svg'
import WarningIcon from '/src/assets/icons/exclamation-triangle.svg'
import ErrorIcon from '/src/assets/icons/cancel.svg'
  
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
	'success': {
		src: SuccessIcon,
		alt: 'Ícone de sucesso'
	},
	'warning': {
		src: WarningIcon,
		alt: 'Ícone de aviso'
	},
	'error': {
		src: ErrorIcon,
		alt: 'Ícone de erro'
	},
	'informative': {
		src: InformativeIcon,
		alt: 'Ícone de informação'
	},
}

const showStateIcon = computed(() => {
	return ['success', 'warning', 'error', 'ínformative'].includes(props.type)
}) 
const stateImgSrc = computed(() => {
	if(showStateIcon.value) {
		return iconStateMap[props.type].src
	}
	return ''
})

const stateImgAlt = computed(() => {
	if(showStateIcon.value) {
		return iconStateMap[props.type].alt
	}
	return ''
})

</script>
  
<style lang="scss">
    @import './blush-toast.scss';
</style>
