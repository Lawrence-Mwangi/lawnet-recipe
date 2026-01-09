import "@/assets/css/recipe.scss"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

//disaple toggle dev tool
app.config.devtools = false;


app.use(router)

app.mount('#app')
