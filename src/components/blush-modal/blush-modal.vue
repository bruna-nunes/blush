<template>
	<div 
		v-if="props.isOpen"
		class="blush-modal-overlay"
		@click="handleOverlayClick"
	>
		<div
			:class="classes"
			@click.stop
		>
			<span
				v-if="props.showDismissButton"
				class="material-icons-round dismiss-icon"
				@click="emit('onClose')"
			>
				close
			</span>
			<header
				v-if="$slots.header"
				class="header"
				:class="{'with-dismiss': props.showDismissButton}"
			>
				<slot name="header" />
			</header>
			<main
				v-if="$slots.content"
				class="content"
				:class="{'with-dismiss': props.showDismissButton}"
			>
				<slot name="content" />
			</main>
			<footer
				v-if="$slots.footer"
				class="footer"
			>
				<slot name="footer" />
			</footer>
		</div>
	</div>
</template>
  
<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
	isOpen: {
		type: Boolean,
		default: false,
	},
	showDismissButton: {
		type: Boolean,
		default: false,
	},
	closeOutside: {
		type: Boolean,
		default: false,
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
})

const emit = defineEmits(['onOpen', 'onClose'])

const classes = computed(() => [
	'blush-modal',
	props.variant,
])

function handleOverlayClick() {
	if(props.closeOutside) {
		emit('onClose')
	}
}

watch(() => props.isOpen, (newVal) => {
	if (newVal) {
		emit('onOpen')
	}
})

</script>
  
<style lang="scss">
    @import './blush-modal.scss';
</style>
