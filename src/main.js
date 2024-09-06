import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import BlushCard from './components/blush-card/blush-card.vue'

const routes = [
    {
        path: '/card1',
        component: BlushCard,
        props: {
            title: 'Card1 from router',
            variant: 'neutral-outline',
            imageSrc: 'https://picsum.photos/600/300/?image=25',
            imageAlt: 'Alt image card',
            style: 'max-width: 20rem;'
        }
    },
    {
        path: '/card2',
        component: BlushCard,
        props: {
            title: 'Card2 from router',
            variant: 'primary-outline',
            imageSrc: 'https://picsum.photos/600/300/?image=25',
            imageAlt: 'Alt image card',
            style: 'max-width: 20rem;'
        }
    },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
