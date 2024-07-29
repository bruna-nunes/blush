<template>
    <div class="blush-collapse">
        <div
            v-for="collapse in props.items"
            :class="componentClasses"
        >
        <!-- todo criar templates nomeados para cada item pra conseguir personalizar slot-->
            <header
                class="header"
                @click="toggleCollapse(collapse.id)"
            >
                <p class="title">
                    {{ props.title }}
                </p>
                <img
                    src="../../assets/icons/arrow.svg"
                    width="24"
                    height="24"
                    :class="expandIconClasses"
                    alt="Fechar badge"
                    @click="emit('onDismiss')"
                >
            </header>
            <main
                v-if="$slots.content"
                v-show="isCollapseOpened"
                class="main"
            >
                <slot name="content"></slot>
                {{ isCollapseOpened }}
            </main>
        </div>
    </div>
</template>
  
<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    title: {
        type: String,
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
    opened: {
        type: Boolean,
        default: false
    },
    expandIconType: {
        type: String,
        default: 'arrow',
        validator(value) {
            return ['arrow', 'plusminus'].includes(value)
        }
    },
    accordion: {
        type: Boolean
    },
})

const componentClasses = computed(() => ({
    'blush-collapse': true,
    [props.variant]: props.variant,
    'active': isCollapseOpened
}))

const isCollapseOpened = ref(props.opened === true)

const expandIconClasses = computed(() => ({
    'collapse-icon': true,
    'active': isCollapseOpened.value
}))

function toggleCollapse(collapseId) {
    props.items[collapseId].opened =  = !isCollapseOpened.value
}

</script>
  
<style lang="scss">
    @import './blush-collapse.scss';
</style>
