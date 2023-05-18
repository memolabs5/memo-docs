import { defineClientConfig } from "@vuepress/client";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "E:/code/chainwork/maiyun/docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.193_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-theme-hope/lib/client/export.js";

import "E:/code/chainwork/maiyun/docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.193_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

import Slide from "E:/code/chainwork/maiyun/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.193_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // render icon for auto-catalog
    app.component("HopeIcon", HopeIcon);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,
    Slide,
  }
});