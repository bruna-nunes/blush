import { ref } from 'vue'

const toastsQueue = ref([])

export default {
	install: (app) => {

		const add = (toastData, timeout = 4800) => {
			toastData = Object.assign({ id: Date.now() }, toastData)
			toastsQueue.value.push(toastData)

			if (timeout) {
				setTimeout(() => {
					remove(toastData.id)
				}, timeout)
			}

			return toastData.id
		}

		const remove = (id) => {
			return toastsQueue.value.splice(
				toastsQueue.value.findIndex((n) => n.id === id),
				1
			)
		}

		const removeAll = () => {
			toastsQueue.value.length = 0
		}

		const toastsApi = {
			queue: toastsQueue.value,
			add,
			remove,
			removeAll
		}

		// Provides Toasts API for external usage
		app.config.globalProperties.$toasts = toastsApi
		app.provide('toasts', toastsApi)
	}
}
