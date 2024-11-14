<template>
    <div
        :class="classes"
    >   
        <div class="tooltip">
            <span
                v-if="props.title"
                class="title"
            >
                {{ props.title }}
            </span>
            <div
                v-html="props.content"
                class="content"
            >
            </div>
        </div>
        <slot></slot>
    </div>
</template>
  
<script setup>
import { computed } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        default: 'neutral',
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
    placement: {
        type: String,
        default: 'top',
        validator(value) {
            return ['top', 'bottom'].includes(value)
        }
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    show: {
        type: String,
        default: 'hover',
        validator(value) {
            return ['hover', 'always'].includes(value)
        }
    },
})

const classes = computed(() => {
    return {
    'blush-tooltip': true,
    [props.variant]: props.variant,
    [props.placement]: props.placement,
    'hover': props.show === 'hover',
    'always': props.show === 'always'
    }
    
})
</script>
  
<style lang="scss">
    @import './blush-tooltip.scss';
</style>
