import { createApp } from 'vue'
import App from './App.vue'
import icons from './components/icons/all'

const app = createApp(App)

for (const [key, value] of Object.entries(icons)) {
    app.component(key, value)
}

app.mount('#app')
