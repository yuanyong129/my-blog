import { createApp } from 'vue';
import router from './router';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import App from './App.vue';

createApp(App).use(ArcoVue).use(router).mount('#app');
