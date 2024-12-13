import './assets/css/custom.css';
import './assets/css/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Import Pinia
import App from './App.vue';

const app = createApp(App);

// Create and use Pinia
const pinia = createPinia();
app.use(pinia);

app.mount('#app');
