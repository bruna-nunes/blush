<template>
	<div class="blush-progress">
		<div class="label-indicator">
			<span
				v-if="props.label"
				id="blush-progress-label"
				class="label"
			>
				{{ label }}
			</span>
			<span
				v-if="props.showProgressText"
				class="indicator"
			>
				{{ `${progressPercentage}%` }}
			</span>
		</div>

		<div
			:class="progressClasses"
		>
			<div
				class="fill"
				:style="styleFillObject"
				role="progressbar"
				:aria-valuemax="props.max"
				aria-valuemin="0"
				:aria-valuenow="progressPercentage"
				aria-labelledby="blush-progress-label"
				tabindex="0"
			/>
		</div>
	</div>
</template>
  
<script setup>
import { computed } from 'vue'

const props = defineProps({
	id: {
		type: String,
	},
	type: {
		type: String,
		default: 'linear',
		validator(value) {
			return ['linear'].includes(value)
		}
	},
	size: { 
		type: String,
		default: 'medium',
		validator(value) {
			return ['large', 'medium', 'small'].includes(value)
		}
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
				'neutral'
			].includes(value)
		}
	},
	label: {
		type: String,
	},
	showProgressText: {
		type: Boolean,
		default: false
	},
	value: {
		type: Number,
		default: 0 
	},
	max: {
		type: Number,
		default: 100 
	},
})

const progressClasses = computed(() => [
	'progress',
	props.variant,
	props.size,
])

const progressPercentage = computed(() => {
	return Math.round((props.value * 100) / props.max)
})

const styleFillObject = computed(() => {
	return {
		width: `${progressPercentage.value}%`
	}
})

</script>
  
<style lang="scss">
    @import './blush-progress.scss';
</style>
