import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Home",
    component: () => import("../views/home"),
  },
  require('./modules/entry')['default'],
  require('./modules/typecho')['default'],
  require('./modules/novel')['default'],
  require('./modules/public-api')['default'],
  require('./modules/todo')['default'],
  require('./modules/navigation')['default'],
  require('./modules/blog')['default'],
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name) {
    document.title = to.name
  }
  next()
})
export default router;
