import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    /*{
      path: "/",
      alias: "/stock",
      name: "stock",
      component: () => import("./components/StockList")
    },
    {
      path: "/stock/:id",
      name: "console-details",
      component: () => import("./components/Console")
    },*/
    {
      path: "/facturation",
      name: "facturation",
      props: { title: "Facturation" },
      component: () => import("./views/Facturation.vue")
    },
    {
      path: '/',
      name: 'Home',
      props: { title: "Tableau de bord" },
      component: () => import('./views/Home.vue')
    },
    {
      path: '/stock',
      name: 'stock',
      props: { title: "Stock" },
      component: () => import('./views/Stock.vue')
    },
    {
      path: '/client',
      name: 'client',
      props: { title: "Client" },
      component: () => import('./views/Client.vue')
    }
  ]
});