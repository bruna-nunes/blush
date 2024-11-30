<template>
	<div :class="classes">
		<div class="input-label">
			<label
				v-if="props.label"
				:for="props.id"
				class="label"
			>
				{{ props.label }}
			</label>
			<div class="input-content">
				<input
					:id="props.id"
					v-model="inputTextModel"
					type="text"
					:name="props.name"
					:disabled="props.disabled"
					:placeholder="props.placeholder"
					:checked="props.checked"
					:required="props.required"
					:autofocus="props.autofocus"
					:minlength="props.minLength"
					:maxlength="props.maxLength"
					:readonly="props.readonly"
					class="input"
					@change="emit('onChange', $event)"
					@input="emit('onInput', $event)"
					@focus="emit('onFocus', $event)"
					@blur="emit('onBlur', $event)"
				>
				<span
					v-if="showStateIcon"
					class="material-icons-round state-icon"
				>
					{{ icon }}
				</span>
			</div>
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
	id: {
		type: String,
	},
	name: {
		type: String,
	},
	label: {
		type: String,
	},
	size: {
		type: String,
		default: 'medium',
		validator(value) {
			return ['large', 'medium', 'small'].includes(value)
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
	placeholder: {
		type: String
	},
	disabled: {
		type: Boolean,
		default: false
	},
	required: {
		type: Boolean,
		default: false
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
	minLength: {
		type: [String, Number],
		default: 0
	},
	maxLength: {
		type: [String, Number],
		default: 100
	},
	readonly: {
		type: Boolean,
	}
})

const inputTextModel = defineModel()

const emit = defineEmits(['onChange', 'onInput', 'onFocus', 'onBlur'])

const classes = computed(() => [
	'blush-input-text',
	'neutral',
	props.size,
	props.state,
	props.disabled ? 'disabled' : ''
])

const iconStateMap = {
	'valid': 'done',
	'invalid': 'error',
}

const showStateIcon = computed(() => {
	return ['valid', 'invalid'].includes(props.state)
})

const icon = computed(() => {
	if(showStateIcon.value) {
		return iconStateMap[props.state]
	}
	return ''
})

</script>
  
<style lang="scss">
    @import './blush-input-text.scss';
</style>