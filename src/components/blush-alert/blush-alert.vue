<template>
    <div
        :class="classes"
    >
        <img
            :src="stateImgSrc"
            width="28"
            height="28"
            class="icon"
            :alt="stateImgAlt" 
        >
        <div class="content">
            <h6
                v-if="props.title"
                class="title"
            >
                {{ props.title }}
            </h6>
            <p
                v-if="props.text"
                class="text"
            >
                {{ props.text }}
            </p>
        </div>
        <img
            v-if="props.showDismiss"
            src="../../assets/icons/x.svg"
            width="24"
            height="24"
            class="dismiss-icon"
            alt="Fechar alert"
            @click="emit('onDismiss')"
        >
    </div>
</template>
  
<script setup>
import { computed } from 'vue';

  
const props = defineProps({
    title: {
        type: String
    },
    text: {
        type: String,
    },
    type: {
        type: String,
        default: 'informative',
        validator(value) {
            return [
                'success',
                'warning',
                'error', 
                'informative', 
            ].includes(value)
        }
    },
    showDismiss: {
        type: Boolean,
        default: false
    },
})

const emit = defineEmits(['onDismiss'])

const classes = computed(() => [
    'blush-alert',
    props.type,
    props.showDismiss ? 'dismissible' : ''
])

const iconStateMap = {
    'success': {
        src: '/src/assets/icons/check-circle.svg',
        alt: 'Ícone de sucesso'
    },
    'warning': {
        src: '/src/assets/icons/exclamation-triangle.svg',
        alt: 'Ícone de aviso'
    },
    'error': {
        src: '/src/assets/icons/cancel.svg',
        alt: 'Ícone de erro'
    },
    'informative': {
        src: '/src/assets/icons/info-triangle.svg',
        alt: 'Ícone de informação'
    },
}

const showStateIcon = computed(() => {
    return ['success', 'warning', 'error', 'ínformative'].includes(props.type)
}) 
const stateImgSrc = computed(() => {
    if(showStateIcon) {
        return iconStateMap[props.type].src
    }
    return ''
})

const stateImgAlt = computed(() => {
    if(showStateIcon) {
        return iconStateMap[props.type].alt
    }
    return ''
})

</script>
  
<style lang="scss">
    @import './blush-alert.scss';
</style>
