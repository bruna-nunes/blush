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
      max="80"
      value="21"
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

</template>

<script setup>
import { ref } from 'vue'
import CompExample from './components/CompExample.vue'
import blushButton from './components/blush-button/blush-button.vue';
import blushBadge from './components/blush-badge/blush-badge.vue';
import blushProgress from './components/blush-progress/blush-progress.vue';
import blushCard from './components/blush-card/blush-card.vue'

const isBadgeVisible = ref(true)

function clickButtonHandler(event) {
  console.log(event)
}

function dismissBadgeHandler(event) {
  isBadgeVisible.value = false
  console.log(event)
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
