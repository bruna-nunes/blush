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
        `
			}
		}
	}
})
