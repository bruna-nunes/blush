<template>
	<div :class="classes">
		<div class="input-label">
			<input
				:id="props.id"
				v-model="radioModel"
				type="radio"
				:value="props.value"
				:name="props.name"
				:disabled="props.disabled"
				:checked="props.checked"
				:required="props.required"
				:autofocus="props.autofocus"
				class="input"
				@change="emit('onChange', $event)"
				@input="emit('onInput', $event)"
			>
			<label
				v-if="props.label"
				:for="props.id"
				class="label"
			>
				{{ props.label }}
			</label>
		</div>
		<div
			v-if="props.hintText"
			class="hint"
		>
			{{ props.hintText }}
		</div>
		<div
			v-if="props.errorText"
			class="error"
		>
			<span
				class="material-icons-round icon"
			>
				error
			</span>
			<span class="text">
				{{ props.errorText }}
			</span>
		</div>
	</div>
</template>
  
<script setup>
import { computed } from 'vue'

const props = defineProps({
	value: {
		type: [String, Number, Object],
		required: true,
	},
	id: {
		type: String,
	},
	name: {
		type: String,
	},
	label: {
		type: String,
	},
	variant: {
		type: String,
		default: 'primary',
		validator(value) {
			return [
				'primary',
				'accent', 
				'success',
				'warning',
				'danger', 
				'neutral',
			].includes(value)
		}
	},
	state: {
		type: String,
		default: 'normal',
		validator(value) {
			return [
				'valid',
				'invalid', 
				'normal',
			].includes(value)
		}
	},
	disabled: {
		type: Boolean,
		default: false
	},
	required: {
		type: Boolean,
		default: false
	},
	checked: {
		type: Boolean,
		default: false,
	},
	hintText: {
		type: String,
	},
	errorText: {
		type: String,
	},
	autofocus: {
		type: Boolean,
		default: false
	},
})

const radioModel = defineModel()

const emit = defineEmits(['onChange', 'onInput'])

const classes = computed(() => [
	'blush-radio',
	props.variant,
	props.state,
	props.disabled ? 'disabled' : ''
])

</script>
  
<style lang="scss">
    @import './blush-radio.scss';
</style>