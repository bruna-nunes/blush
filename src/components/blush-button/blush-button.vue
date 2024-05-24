<template>
    <button
        :id="props.id"
        :name="props.name"
        :type="props.type"
        :disabled="props.disabled"
        :autofocus="props.autofocus"
        @click="emit('onClick', $event)"
        :class="classes"
    >
        {{ props.label }}
    </button>
</template>
  
<script setup>
import { computed } from 'vue';

  
const props = defineProps({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    type: {
        type: String,
        default: 'button',
        validator(value) {
            return ['button', 'submit', 'reset'].includes(value)
        }
    },
    label: {
        type: String,
        required: true,
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
                'primary', 'primary-outline', 'primary-ghost',
                'accent', 'accent-outline', 'accent-ghost',
                'success', 'success-outline', 'success-ghost',
                'warning', 'warning-outline', 'warning-ghost',
                'danger', 'danger-outline', 'danger-ghost',
                'neutral', 'neutral-outline', 'neutral-ghost',
            ]
        }
    },
    disabled: {
        type: Boolean,
        default: false
    },
    autofocus: {
        type: Boolean,
        default: false
    },
    block: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['onClick'])

const classes = computed(() => [
    'blush-button',
    props.variant,
    props.size,
    props.block ? 'full' : ''
])

</script>
  
<style lang="scss">
    @import './blush-button.scss';
</style>