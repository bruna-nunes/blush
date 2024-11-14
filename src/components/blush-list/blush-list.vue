<template>
    <div
        :class="classes"
    >
        <header v-if="$slots.header" class="header">
            <slot name="header"></slot>
        </header>
        <ul class="list">
            <li
                v-for="item in props.items"
                class="item"
            >
                <slot
                    :name="`item(${item.key})`"
                    :value="item.text"
                    :item="item"
                    >
                        {{ item.text }}
                </slot>
            </li>
        </ul>
        <footer v-if="$slots.footer" class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
  
<script setup>
import { computed } from 'vue';

const props = defineProps({
    items: {
        type: Object,
        required: true
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

const classes = computed(() => [
    'blush-list',
    props.variant,
])
</script>
  
<style lang="scss">
    @import './blush-list.scss';
</style>
