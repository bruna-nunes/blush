import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'%root%': path.resolve(__dirname, './')
		},
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: {
				additionalData: `
					@use 'sass:map';
					@import '%root%/src/utils/tokens/tokens';
					@import "https://fonts.googleapis.com/icon?family=Material+Icons+Round";
       	 		`
			}
		}
	},
	build: {
		cssCodeSplit: false,
		sourcemap: false,
		emptyOutDir: true,
		plugins: [vue()],
		lib: {
			entry: [
				path.resolve(__dirname, 'blush/blush.js'),
				path.resolve(__dirname, 'blush/blush.scss')
			],
			name: 'blush'
		},
		rollupOptions: {
			external: ['vue'],
			output: {
			  globals: {
				vue: 'Vue'
			  }
			}
		  }
	}
})
