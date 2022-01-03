import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './globals.styl';

createApp(App).use(router).mount('#app');
