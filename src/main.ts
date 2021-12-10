import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'

import App from './App.vue'
import Router from './router'

createApp(App).use(Router).use(createMetaManager()).mount('#app')
