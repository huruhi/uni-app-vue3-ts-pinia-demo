import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'

import App from './App.vue'

// const app = createApp(App)
// createApp(App).mount('#app')

export function createApp() {
    const app = createSSRApp(App)
    app.use(Pinia.createPinia())

    return {
        app,
        Pinia,
    }
}