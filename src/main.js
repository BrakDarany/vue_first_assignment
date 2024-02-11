import './assets/style.css' 
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue' 
import About from './views/About.vue' 
import Product from './views/Product.vue'

//Defind rout
const myroutes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/about',
        component: About,
        name: 'About'
    },
    {
        path: '/product168',
        component: Product,
        name: 'Product'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myroutes,
})

// use middle where from routes array
// ?? why we use the middle ware 
const app = createApp(App)
app.use(router)
app.mount('#app')