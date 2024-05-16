import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from './components/about-page.vue';
import ArticlePage from './components/article-page.vue';
import LandingPage from './components/landing-page.vue';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/aura-light-green/theme.css';

const app = createApp(App);

const router = createRouter({
  routes: [
    { path: '/', component: LandingPage },
    { path: '/about', component: AboutPage },
    { path: '/article', component: ArticlePage },
  ],
  history: createWebHistory(),
});

app.use(router);
app.use(PrimeVue);
app.mount('#app');
