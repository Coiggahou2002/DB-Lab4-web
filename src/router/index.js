import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: "/", 
      component: () => import("@/views/elhome.vue"),
      children: [
        {
          path: "query", 
          name: 'Query',
          components: {
            main: () => import("@/views/Query.vue"),
          }
        },
        {
          path: "add", 
          name: 'AddInfo',
          components: {
            main: () => import("@/views/AddInfo.vue"),
          }
        },
        {
          path: "pos_checkin", 
          name: 'PositionCheckin',
          components: {
            main: () => import("@/views/PosCheck.vue"),
          }
        },
        {
          path: "feed_log", 
          name: 'FeedLog',
          components: {
            main: () => import("@/views/FeedLog.vue"),
          }
        },
        {
          path: "about", 
          name: 'About',
          components: {
            main: () => import("@/views/about.vue"),
          }
        },
        {
          path: "login", 
          name: "Login",
          components: {
            main: () => import("@/views/login.vue"),
          }
        },
      ]
    },
  ],
});

export default router;
