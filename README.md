# Blush

<img src="https://raw.githubusercontent.com/bruna-nunes/blush/refs/heads/main/src/assets/logos/blush-logo-primary.png" width="300">

### Component Library and Design System.

Check [the documentation available online](https://bruna-nunes.github.io/blush)


## 🧰 Tools and Technologies used

- [Vue](https://vuejs.org/)
- [Vite](https://vite.dev/)
- [Sass](https://sass-lang.com/)
- [Storybook](https://storybook.js.org/)
- [Cypress](https://www.cypress.io/)
- [GitHub Actions](https://github.com/features/actions)
- [Material Icons](https://fonts.google.com/icons?icon.style=Rounded&icon.size=24&icon.color=%23e8eaed&icon.set=Material+Icons)
- [ESLint](https://eslint.org/)
- [StyleLint](https://stylelint.io/)

##  Usage
Import blush as an external package and use its components and design tokens

### Install Blush
```sh
npm install blush
```

### Import the Blush global style into your `main.js`

```js
import 'blush/dist/style.css'
```

### Use components by importing them

```html
<!-- App.vue -->
<script>
    import { blushAlert } from 'blush'
</script>
<template>
    <blush-alert
		title="Alert"
		text="Description alert"
		type="informative"
		:show-dismiss="true"
		@on-dismiss="console.log('dismiss alert')"
	/>
</template>
```

### To use our design tokens, simply import the utils file with all of them.

```css
/* some css file */
@import "blush/src/utils/tokens/tokens.scss";
```

### 💡 If you are using the Vite bundler, you can import the tokens globally like this (this is what we recommend):

```js
// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:map';
          @import "blush/src/utils/tokens/tokens.scss";
        `
      }
    }
  }
})
```

## 💻 How to use in dev mode

### Install dependencies
`npm install`

### Run the dev server with hot-reload
`npm run dev`

### Build a version to production
`npm run build`

### Start the Storybook server to see components documentation
`npm run storybook`

### Run the Cypress executable to tests
`npx cypress open`

### Run Lint with [ESLint](https://eslint.org/)
`npm run eslint`

### Run ESLint Fix
`npm run eslint:fix`

### Run Lint with [StyleLint](https://stylelint.io/)
`npm run stylelint`

### Run StyleLint Fix
`npm run stylelint:fix`