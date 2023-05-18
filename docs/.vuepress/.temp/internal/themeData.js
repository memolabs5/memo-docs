export const themeData = JSON.parse("{\"encrypt\":{},\"locales\":{\"/\":{\"logo\":\"/logo.png\",\"repo\":\"https://github.com/memoio/memo-docs\",\"docsDir\":\"docs\",\"editLinkPattern\":\"https://github.com/memoio/memo-docs/master/:path\",\"lang\":\"en\",\"navbar\":[],\"sidebar\":{\"/\":[\"api-docs\",\"campaigns\",\"cli-usage\",\"concepts\",\"FAQ\",\"RAFI\",\"start-and-usage\"],\"/api-docs/\":\"structure\",\"campaigns\":\"structure\",\"/cli-usage/\":\"structure\",\"/RAFI/\":\"structure\",\"/start-and-usage/\":\"structure\",\"/concepts/\":\"structure\",\"/FAQ/\":\"structure\"},\"footer\":\"Copyright © 2023 MemoLabs.\",\"displayFooter\":true,\"metaLocales\":{\"editLink\":\"Edit this page on GitHub\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
