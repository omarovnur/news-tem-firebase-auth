import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'


Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }


  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/*webpackChunkName: "blog"*/ '../views/Blog.vue'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import(/*webpackChunkName: "login"*/ '../views/Login.vue'),


  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/*webpackChunkName: "signup"*/ '../views/SignUp.vue'),

  }
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
})



export default router;
