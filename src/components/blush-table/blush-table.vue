<template>
    <div
        :class="classes"
    >
        <table>
            <thead>
                <tr>
                    <th
                        v-if="props.selectable"
                    >
                        <input
                            :checked="isAllItemsSelected"
                            type="checkbox"
                            :name="props.name"
                            @change="toggleAllSelectedItems($event.target.checked)"
                        />
                    </th>
                    <th
                        v-for="column in props.columns"
                        :key="column.key"
                    >
                        {{ column.title }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in props.items"
                    :key="item"
                >
                    <td
                        v-if="props.selectable"
                    >
                        <input
                            v-model="selectedItems"
                            type="checkbox"
                            :name="props.name"
                            :value="item"
                            @change="emitSelectedItemsChange"
                        />
                    </td>
                    <td
                        v-for="column in props.columns"
                        :key="column.key"
                    >
                        <slot
                            :name="`cell(${column.key})`"
                            :value="item[column.key]"
                            :item="item"
                        >
                            {{ item[column.key] }}
                        </slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    columns: {
        type: Object,
        required: true
    },
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
    selectable: {
        type: Boolean
    },
    linesStyle: {
        type: String,
        default: 'none',
        validator(value) {
            return ['none', 'stripped'].includes(value)
        }
    }
})

const emit = defineEmits(['selectedItemsChange'])

const selectedItems = ref([])
const isAllItemsSelected = computed(() => {
    return selectedItems.value.length === props.items.length
})

function toggleAllSelectedItems(selected) {
    if(selected) {
        selectedItems.value = props.items
    } else {
        selectedItems.value = []
    }
    emitSelectedItemsChange()
}

const linesStyleClass = computed(() => {
    if (props.linesStyle === 'stripped') {
        return props.linesStyle
    }
    return ''
})
const classes = computed(() => [
    'blush-table',
    props.variant,
    linesStyleClass.value
])

function emitSelectedItemsChange() {
    emit('selectedItemsChange', JSON.parse(JSON.stringify(selectedItems.value)))
}
</script>
  
<style lang="scss">
    @import './blush-table.scss';
</style>
