import * as Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import * as VueRouter from 'vue-router';

window.Vue = Vue;


// 1. Define route components.
// These can be imported from other files
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes : [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ], 
})

// 5. Create and mount the root instance.
const app = Vue.createApp(App)
app.use(router)

app.mount('#app')
