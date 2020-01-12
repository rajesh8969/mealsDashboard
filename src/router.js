import Vue from "vue";
import Router from "vue-router";
 
Vue.use(Router);
 
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("./components/HelloWorld.vue")
    },
    {
      path: "/meals",
      component: () => import("./components/selected_meal.vue")
    },
    {
      path: "*",
      component: () => import("./components/HelloWorld.vue")
    }
  ]
});