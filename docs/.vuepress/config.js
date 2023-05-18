import { defineUserConfig } from "vuepress";
// import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "vuepress-plugin-redirect";
// import i18nPlugin  from "vuepress-plugin-i18n";

import theme from "./theme.js";

const base = process.env.BASE_PATH ? process.env.BASE_PATH : "/";

export default defineUserConfig({
  base: base,
  debug:false,
  lang: "en",
  title: "MEMO",
  description: "Decentralized Storage Designed For Your Future",
/*   routeLocales: {
    skipToContent: "Skip to main content",
    notFoundTitle: "Page not found",
    notFoundMsg: [
      "There’s nothing here.",
      "How did we get here?",
      "That’s a Four-Oh-Four.",
      "Looks like we've got some broken links.",
    ],
    back: "Go back",
    home: "Take me home",
    openInNewWindow: "Open in new window",
  }, */
  locales: {
    "/": {
      lang: "en",
      title: "Memo Docs",
      description: "Memo Docs",
/*       routeLocales: {
        skipToContent: "Skip to main content",
        notFoundTitle: "Page not found",
        notFoundMsg: [
          "There’s nothing here.",
          "How did we get here?",
          "That’s a Four-Oh-Four.",
          "Looks like we've got some broken links.",
        ],
        back: "Go back",
        home: "Take me home",
        openInNewWindow: "Open in new window",
      }, */
    },
  },

  /*   locales: {
    missing: (locale, key) => key,
    "/": {
      lang: "en", // en-US
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
      skipToContent:'skipToContent',
    },
    "/zh/": {
      lang: "zh", // zh-CN
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
      skipToContent:'skipToContent',
    },
  }, */

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    /*     searchProPlugin({
      // index all contents
      indexContent: true,
      // add supports for category and tags
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "Category: $content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "Tag: $content",
        },
      ],
    }), */
    redirectPlugin({}),
  ],
});
