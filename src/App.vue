<template>
  <div class="content-app">
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div class="line-buttons">
      <blush-button
        id="button1"
        name="nameButton1"
        type="button"
        label="Button primary"
        variant="primary"
        size="large"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
      <blush-button
        id="button2"
        name="nameButton2"
        type="button"
        label="Button primary outline"
        variant="primary-outline"
        size="medium"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
      <blush-button
        id="button3"
        name="nameButton3"
        type="button"
        label="Button primary ghost"
        variant="primary-ghost"
        size="small"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
    </div>
    <div class="line-buttons">
      <blush-button
        id="button4"
        name="nameButton4"
        type="button"
        label="Button accent"
        variant="accent"
        size="large"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
      <blush-button
        id="button5"
        name="nameButton5"
        type="button"
        label="Button accent outline"
        variant="accent-outline"
        size="medium"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
      <blush-button
        id="button6"
        name="nameButton6"
        type="button"
        label="Button accent ghost"
        variant="accent-ghost"
        size="small"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
    </div>
    <div class="line-buttons">
      <blush-button
        id="button7"
        name="nameButton7"
        type="button"
        label="Button success"
        variant="success"
        size="large"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
      <blush-button
        id="button8"
        name="nameButton8"
        type="button"
        label="Button success outline"
        variant="success-outline"
        size="medium"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
      <blush-button
        id="button9"
        name="nameButton9"
        type="button"
        label="Button success ghost"
        variant="success-ghost"
        size="small"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
    </div>
    <div class="line-buttons">
      <blush-button
        id="button10"
        name="nameButton10"
        type="button"
        label="Button warning"
        variant="warning"
        size="large"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
      <blush-button
        id="button11"
        name="nameButton11"
        type="button"
        label="Button warning outline"
        variant="warning-outline"
        size="medium"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
      <blush-button
        id="button12"
        name="nameButton12"
        type="button"
        label="Button warning ghost"
        variant="warning-ghost"
        size="small"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
    </div>
    <div class="line-buttons">
      <blush-button
        id="button13"
        name="nameButton13"
        type="button"
        label="Button danger"
        variant="danger"
        size="large"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
      <blush-button
        id="button14"
        name="nameButton14"
        type="button"
        label="Button danger outline"
        variant="danger-outline"
        size="medium"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
      <blush-button
        id="button15"
        name="nameButton15"
        type="button"
        label="Button danger ghost"
        variant="danger-ghost"
        size="small"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
    </div>
    <div class="line-buttons">
      <blush-button
        id="button16"
        name="nameButton16"
        type="button"
        label="Button neutral"
        variant="neutral"
        size="large"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
      <blush-button
        id="button17"
        name="nameButton17"
        type="button"
        label="Button neutral outline"
        variant="neutral-outline"
        size="medium"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
      <blush-button
        id="button18"
        name="nameButton18"
        type="button"
        label="Button neutral ghost"
        variant="neutral-ghost"
        size="small"
        :disabled="false"
        @onClick="clickButtonHandler"
      />
    </div>
    <hr>
  </div>
  <blush-badge
    v-if="isBadgeVisible"
    text="Badge"
    variant="neutral-outline"
    @onDismiss="dismissBadgeHandler"
    show-dismiss
  />
  <hr>
  <div style="max-width: 400px;">
    <blush-progress
      label="Label test"
      :max="80"
      :value="21"
      showProgressText
      variant="neutral"
      size="large"
    />
  </div>
  <hr>
  <blush-card
    title="Card title"
    subtitle="Card subtitle"
    variant="neutral-outline"
    imageSrc="https://picsum.photos/600/300/?image=25"
    imageAlt="Alt image card"
    imagePlacement="top"
    style="max-width: 20rem;"
  >
    <template #header>
      Header
    </template>
    <template #content>
      Card content
      <blush-button
        id="button-card"
        name="nameButtoncARD"
        type="button"
        label="Button card content"
        variant="primary"
        size="small"
        @onClick="clickButtonHandler"
      />
    </template>
    <template #footer>
      Footer
    </template>
  </blush-card>
  <hr>
  <div style="width: 600px;">
    <blush-table
    name="table"
    :columns="blushTableColumns"
    :items="blushTableItems"
    variant="neutral-outline"
    lines-style="stripped"
    :selectable="true"
    @selected-items-change="tableItemsChanged"
  >
    <template #cell(name)="{value, item}">
      Nome com template: <br>{{ value }}
    </template>
  </blush-table>
  </div>

  <blush-list
    :items="listItems"
    variant="neutral-outline"
  >
    <template #header>
      header
    </template>
    <template #item(item1)="{value, item}">
      Item com template: {{ value }}
    </template>
    <template #footer>
      footer
    </template>
  </blush-list>
  <hr>
  <blush-checkbox
    v-model="checkboxVModel"
    value="checkbox1"
    label="Checkbox 1"
    variant="neutral"
    hint-text="Esse é um texto de hint/dica"
    error-text="Erro genérico"
    state="invalid"
    @onChange="changeCheckboxHandler"
    @onInput="inputCheckboxHandler"
  />
  <br>
  Checkbox: {{ checkboxVModel }}

</template>

<script setup>
import { ref } from 'vue'
import CompExample from './components/CompExample.vue'
import blushButton from './components/blush-button/blush-button.vue';
import blushBadge from './components/blush-badge/blush-badge.vue';
import blushProgress from './components/blush-progress/blush-progress.vue';
import blushCard from './components/blush-card/blush-card.vue'
import blushTable from './components/blush-table/blush-table.vue'
import blushList from './components/blush-list/blush-list.vue';
import blushCheckbox from './components/blush-checkbox/blush-checkbox.vue';

const isBadgeVisible = ref(true)

function clickButtonHandler(event) {
  console.log(event)
}

function dismissBadgeHandler(event) {
  isBadgeVisible.value = false
  console.log(event)
}

const blushTableColumns = [
   {
    key: 'name',
    title: 'Nome'
   },
   {
    key: 'age',
    title: 'Idade',
   },
   {
    key: 'color',
    title: 'Cor'
   },
   {
    key: 'number',
    title: 'Número'
   }
]

const blushTableItems = [
  {
    name: 'Nome 1',
    age: '20',
    color: 'Amarelo',
    number: '123',
  },
  {
    name: 'Nome 2',
    age: '30',
    color: 'Azul',
    number: '123'
  },
  {
    name: 'Nome 2',
    age: '40',
    color: 'Vermelho',
    number: '123'
  }
]

function tableItemsChanged(selectedItems) {
  console.log(selectedItems)
}

const listItems = [
  {
    key: 'item1',
    text: 'Item 1'
  },
  {
    key: 'item2',
    text: 'Item 2'
  },
  {
    key: 'item3',
    text: 'Item 3'
  },
  {
    key: 'item4',
    text: 'Item 4'
  }
]
const checkboxVModel = ref()

function changeCheckboxHandler(event) {
  console.log('changeCheckboxHandler', event)
}

function inputCheckboxHandler(event) {
  console.log('inputCheckboxHandler', event)
}
</script>

<style lang="scss">
.content-app {
  display: flex;
  flex-direction: column;
  gap: spacing(8);
  padding: spacing(4);

  .line-buttons {
    display: flex;
    gap: spacing(4);
    align-items: end;
  }
}
</style>
