<template>
	<div
		ref="blushSelectDropdown"
		:class="componentWrapperClasses"
	>
		<div
			class="select-label"
			@click="toggleSelectDropdown"
		>
			<label
				v-if="props.label"
				:for="props.id"
				class="label"
			>
				{{ props.label }}
			</label>
			<div class="select-content">
				<div 
					:id="props.id"
					class="custom-select-display"
					:class="{ open: isOpen }"
				>
					<template v-if="isMultiple">
						<span v-if="selectedValuesLabels.length > 0">
							{{ selectedValuesLabels }}
						</span>
						<span v-else>{{ props.placeholder }}</span>
					</template>
					<template v-else>
						{{ selectedValueLabel || props.placeholder }}
					</template>
					<span class="material-icons-round arrow">
						expand_more
					</span>
				</div>
				<span
					v-if="showStateIcon"
					class="material-icons-round state-icon"
				>
					{{ icon }}
				</span>
			</div>
		</div>
		<div
			v-if="props.hintText && !isOpen"
			class="hint"
		>
			{{ props.hintText }}
		</div>
		<div
			v-if="props.errorText && !isOpen"
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
		<ul
			v-if="isOpen"
			ref="blushSelectCustomDropdown" 
			class="custom-select-options"
		>
			<li 
				v-for="(option) in options" 
				:key="option.value"
				:class="{ selected: isOptionSelected(option.value) }"
				class="custom-option"
				@click="selectOption(option.value)"
			>
				{{ option.label }}
			</li>
		</ul>
  
		<!-- select invisivel para acessibilidade -->
		<select 
			ref="blushNativeSelect" 
			v-bind="attrs" 
			v-model="internalValue" 
			:multiple="isMultiple"
			:disabled="props.disabled"
			:name="props.name"
			class="native-select"
		>
			<slot />
		</select>
	</div>
</template>
  
<script setup>
import { ref, computed, onMounted, useAttrs, nextTick } from 'vue'

const props = defineProps({
	id: {
		type: String,
		default: null,
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
	placeholder: {
		type: String,
		default: 'Selecionar',
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
	multiple: {
		type: Boolean,
		default: false,
	},
	hintText: {
		type: String,
	},
	errorText: {
		type: String,
	},
	readonly: {
		type: Boolean,
	}
})

const attrs = useAttrs()

const internalValue = defineModel({
	type: [String, Number, Array],
	default: () => '',
})

const componentWrapperClasses = computed(() => [
	'blush-select',
	'neutral',
	props.size,
	props.state,
	props.disabled === true ? 'disabled' : '',
	props.readonly === true ? 'readonly' : ''
])

const emit = defineEmits(['onChange'])

const isOpen = ref(false)
const blushSelectDropdown = ref(null)
const blushSelectCustomDropdown = ref(null)
const blushNativeSelect = ref(null)

const isMultiple = computed(() => props.multiple)

const options = computed(() => {
	return Array.from(blushNativeSelect.value?.options || []).map((option) => ({
		value: option.value,
		label: option.text,
	}))
})

const selectedValuesLabels = computed(() => {
	if (!isMultiple.value) {
		return []
	}

	return options.value
		.filter((option) => internalValue.value.includes(option.value))
		.map((option) => option.label).join(', ')
})

const selectedValueLabel = computed(() => {
	if (isMultiple.value) { 
		return ''
	}

	const selectedOption = options.value.find(
		(option) => option.value === internalValue.value
	)
	return selectedOption?.label || ''
})

const selectOption = (value) => {
	if (isMultiple.value) {
		const selectedOptions = [...(internalValue.value || [])]
		const index = selectedOptions.indexOf(value)

		if (index === -1) {
			selectedOptions.push(value)
		} else {
			selectedOptions.splice(index, 1)
		}

		internalValue.value = selectedOptions

	} else {
		internalValue.value = value
		isOpen.value = false
	}

	nextTick(() => {
		emit('onChange', internalValue.value)
	})
}

const isOptionSelected = (value) => {
	if (isMultiple.value) {
		return internalValue.value.includes(value)
	}

	return internalValue.value === value
}

const toggleSelectDropdown = () => {
	if(props.readonly !== true && props.disabled !== true) {
		isOpen.value = !isOpen.value
	}
}

const handleClickOutside = (event) => {
	if (blushSelectDropdown.value &&
		!blushSelectDropdown.value.contains(event.target) &&
		blushSelectCustomDropdown.value &&
		!blushSelectCustomDropdown.value.contains(event.target)
	) {
		isOpen.value = false
		console.log('handle click')
	}
}

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

onMounted(() => {
	document.addEventListener('click', handleClickOutside)
})

</script>
  
<style lang="scss">
    @import './blush-select.scss'
</style>