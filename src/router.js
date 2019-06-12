import Vue from 'vue'
import Router from 'vue-router'
var firebase = require("firebase/app");

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/registro',
      name: 'registro',
      component: () => import(/* webpackChunkName: "register" */ './views/Registro.vue')
    },
    {
      path: '/',
      name: 'inicio',
      component: () => import(/* webpackChunkName: "home" */ './views/Inicio.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/ingreso',
      name: 'ingreso',
      component: () => import(/* webpackChunkName: "login" */ './views/Ingreso.vue')
    }
  ]
})

router.beforeEach((to, from, next) =>{
  const rutaProtegida = to.matched.some(record => record.meta.requiresAuth);//nos dice si la ruta es protegida o no vue Router doc
  var user = firebase.auth().currentUser;

  if(rutaProtegida === true && user === null){
    next({name: 'ingreso'})
  }else {
    next()
  }
})

export default router;