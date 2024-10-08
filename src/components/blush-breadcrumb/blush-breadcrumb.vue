<template>
    <div
        :class="classes"
    >
        <div
            v-for="item in props.items"
            class="item-link"
        >
            <router-link
                v-if="item.toRoute"
                :to="item.toRoute"
                :class="{active: item.active}"
                class="link"
            >
                {{ item.text }}
            </router-link>
            <a
                v-else
                :href="item.href"
                :class="{active: item.active}"
                class="link"
            >
                {{ item.text }}
            </a>
        </div>
</div>
</template>
  
<script setup>
import { computed } from 'vue';
  
const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    variant: {
        type: String,
        default: 'primary',
        validator(value) {
            return ['primary', 'accent', 'success', 'warning', 'danger', 'neutral'].includes(value)
        }
    },
    separatorStyle: {
        type: String,
        default: 'chevron',
        validator(value) {
            return ['chevron', 'slash'].includes(value)
        }
    }
})

const classes = computed(() => [
    'blush-breadcrumb',
    props.variant,
    props.separatorStyle === 'chevron' || props.separatorStyle === 'slash' ? props.separatorStyle : ''
])

</script>
  
<style lang="scss">
    @import './blush-breadcrumb.scss';
</style>
