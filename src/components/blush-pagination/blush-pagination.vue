<template>
	<div :class="classes">
		<button
			type="button"
			class="prev"
			:disabled="currentPageModel === 1"
			@click="setPage(currentPageModel - 1)"
		>
			<span
				v-if="props.prevNextStyle === 'arrow'"
				class="material-icons-round arrow"
			>
				chevron_left
			</span>
			<p
				v-if="props.prevNextStyle === 'text'"
			>
				{{ props.prevText }}
			</p>
		</button>
		<button
			v-if="displayFirstPage"
			type="button"
			:class="getPageClasses(1)"
			@click="setPage(1)"
		>
			1
		</button>
		<div
			v-if="displayDotsBefore"
			class="dots"
		>
			...
		</div>
		<button
			v-for="page in pagesToDisplay"
			:key="page"
			type="button"
			:class="getPageClasses(page)"
			@click="setPage(page)"
		>
			{{ page }}
		</button>
		<div
			v-if="displayDotsAfter"
			class="dots"
		>
			...
		</div>
		<button
			v-if="displayLastPage"
			type="button"
			:class="getPageClasses(totalPages)"
			@click="setPage(totalPages)"
		>
			{{ totalPages }}
		</button>
		<button
			type="button"
			class="next"
			:disabled="currentPageModel === totalPages"
			@click="setPage(currentPageModel + 1)"
		>
			<span
				v-if="props.prevNextStyle === 'arrow'"
				class="material-icons-round arrow"
			>
				chevron_right
			</span>
			<p
				v-if="props.prevNextStyle === 'text'"
			>
				{{ props.nextText }}
			</p>
		</button>
	</div>
</template>
  
<script setup>
import { computed } from 'vue'
  
const props = defineProps({
	variant: {
		type: String,
		default: 'primary',
		validator(value) {
			return [
				'primary', 'primary-outline',
				'accent', 'accent-outline',
				'success', 'success-outline',
				'warning', 'warning-outline',
				'danger', 'danger-outline',
				'neutral', 'neutral-outline',
			].includes(value)
		}
	},
	totalItems: {
		type: Number,
		required: true
	},
	perPage: {
		type: Number,
		default: 10
	},
	prevNextStyle: {
		type: String,
		default: 'arrow',
		validator(value) {
			return ['arrow', 'text'].includes(value)
		}
	},
	prevText: {
		type: String,
		default: 'Prev'
	},
	nextText: {
		type: String,
		default: 'Next'
	}
})

const emit = defineEmits(['onPageChange'])

const currentPageModel = defineModel({ default: 1 })

const classes = computed(() => [
	'blush-pagination',
	props.variant,
])

function getPageClasses(page) {
	return {
		'page': true,
		'active': page === currentPageModel.value
	}
}

function setPage(page) {
	currentPageModel.value = page
	emit('onPageChange', page)
}

const totalPages = computed(() => {
	return Math.ceil(props.totalItems / props.perPage)
})

const quantityPagesToDisplayBeforeFowardCurrent = 2

const pagesToDisplay = computed(() => {
	const pages = []
	let start = currentPageModel.value - quantityPagesToDisplayBeforeFowardCurrent
	let end = currentPageModel.value + quantityPagesToDisplayBeforeFowardCurrent

	if(start < 1) {
		const startOffset = 1 - start
		start += startOffset
		end += startOffset
	}

	if(end > totalPages.value) {
		const endOffset = end - totalPages.value
		start = Math.max(1, start - endOffset)
		end -= endOffset
	}

	for(let pageNumber = start; pageNumber <= end; pageNumber++) {
		pages.push(pageNumber)
	}
	return pages
})

const displayFirstPage = computed(() => {
	return (
		pagesToDisplay.value[0] > 1 && (currentPageModel.value - quantityPagesToDisplayBeforeFowardCurrent) > 1
	)
})

const displayLastPage = computed(() => {
	return (
		pagesToDisplay.value[pagesToDisplay.value.length - 1] < totalPages.value && (currentPageModel.value + quantityPagesToDisplayBeforeFowardCurrent) < totalPages.value
	)
})

const displayDotsBefore = computed(() => {
	return currentPageModel.value > (quantityPagesToDisplayBeforeFowardCurrent + 2)
})

const displayDotsAfter = computed(() => {
	return currentPageModel.value < (totalPages.value - (quantityPagesToDisplayBeforeFowardCurrent + 1))
})

</script>
  
<style lang="scss">
    @import './blush-pagination.scss';
</style>
