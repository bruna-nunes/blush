<template>
    <div :class="classes">
        <!-- <button
            type="button"
            :class="getPageClasses(1)"
            @click="setPage(1)"
        >
            1
        </button>
        <div
            v-if="displayDotsBefore"
        >
            ...
        </div> -->
        <button
            v-for="page in pagesToDisplay"
            :key="page"
            type="button"
            :class="getPageClasses(page)"
            @click="setPage(page)"
        >
            {{ page }}
        </button>
        <!-- <div
            v-if="displayDotsAfter"
        >
            ...
        </div>
        <button
            type="button"
            :class="getPageClasses(totalPages)"
            @click="setPage(totalPages)"
        >
            {{ totalPages }}
        </button> -->
    </div>
</template>
  
<script setup>
import { computed } from 'vue';
  
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

const currentPageModel = defineModel()

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

    if (totalPages.value <= 5) {
        return totalPages.value
    }

    const pages = []
    const start = Math.max(currentPageModel.value - quantityPagesToDisplayBeforeFowardCurrent, 2)
    const end = Math.min(currentPageModel.value + quantityPagesToDisplayBeforeFowardCurrent, totalPages.value)

    console.log(start, end, 'startend')
    for(let i = start; i <= end; i++) {
        pages.push(i)
    }
    return pages
    // if (totalPages.value <= 5) {
    //     return totalPages.slice(1, totalPages.value -1)
    // }

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
