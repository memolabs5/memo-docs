import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://docs.memolabs.org/",

  iconAssets: "iconfont",

  logo: "/logo.png",

  repo: "https://github.com/memoio/memo-docs",

  docsDir: "docs",

  editLinkPattern: 'https://github.com/memoio/memo-docs/master/:path',
  lang: "en",
  locales: {
    "/": {
      lang: "en",
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      footer: "Copyright © 2023 MemoLabs.",
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
   routeLocales: {
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
      },
    },
  },

  plugins: {
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math",  "notes", "zoom"], // , "search"
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
