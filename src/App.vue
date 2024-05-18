<template>
  <div class="content-app">
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <comp-example msg="Componente exemplo" />
  </div>
  
</template>

<script setup>
  import CompExample from './components/CompExample.vue'
</script>

<style lang="scss">
.content-app {
  background-color: map-get($primary-absolute, '001');
  text-align: center;
  padding: spacing(4);
}
</style>
