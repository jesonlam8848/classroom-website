const routes = [
  {
    path: "/",
    name: "index",
    title: "首页",
    component: () => import("../views/index.vue"), 
    redirect: { name: "tokens" },
    children: [
      {
        path: "/myClass",
        name: "myClass",
        component: () => import("../views/content/myClass.vue"),
      },
      {
        path: "/settings",
        name: "settings",
        component: () => import("../views/content/settings.vue"),
      },
      {
        path: "/orderInfo",
        name: "orderInfo",
        component: () => import("../views/content/orderInfo.vue"),
      },
      {
        path: "/tokens",
        name: "tokens",
        component: () => import("../views/content/tokens.vue"),
      },
    ],
  },
];
export default routes;
