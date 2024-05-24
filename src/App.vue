<template>
  <div class="content-app">
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <comp-example msg="Componente exemplo" />
    <blush-button
      id="button1"
      name="nameButton1"
      type="button"
      label="Button"
      variant="primary"
      size="large"
      :disabled="false"
      @onClick="clickButtonHandler"
    />
  </div>
  
</template>

<script setup>
import CompExample from './components/CompExample.vue'
import blushButton from './components/blush-button/blush-button.vue';

function clickButtonHandler(event) {
  console.log(event)
}
</script>

<style lang="scss">
.content-app {
  padding: spacing(4);
}
</style>
