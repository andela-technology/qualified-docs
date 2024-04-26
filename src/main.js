// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from "~/layouts/Default.vue";

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href: "//fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,300italic,400italic,600italic",
  });
  head.link.push({
    rel: "stylesheet",
    href: "/css/global.css",
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: "og:url",
      name: "og:url",
      content:
        (process.env.GRIDSOME_BASE_PATH || "https://docs.qualified.io") +
        to.path,
    });
    next();
  });
}
