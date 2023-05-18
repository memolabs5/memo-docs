import { defineAsyncComponent, ref, readonly, reactive, defineComponent, onMounted, computed, h, inject, getCurrentInstance, camelize, capitalize, nextTick, isRef, unref, getCurrentScope, onScopeDispose, watch, shallowRef, watchEffect, Transition, provide, resolveComponent, onUnmounted, toRef, TransitionGroup, useSSRContext, createSSRApp } from "vue";
const pagesData$1 = {
  // path: /
  "v-8daa1a0e": () => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-c5e073c2.mjs"
  ).then(({ data }) => data),
  // path: /api-docs/
  "v-b858e5f0": () => import(
    /* webpackChunkName: "v-b858e5f0" */
    "./assets/index.html-eef4ebab.mjs"
  ).then(({ data }) => data),
  // path: /campaigns/volunteer-recruitment-plan.html
  "v-c1fb5a52": () => import(
    /* webpackChunkName: "v-c1fb5a52" */
    "./assets/volunteer-recruitment-plan.html-054b380c.mjs"
  ).then(({ data }) => data),
  // path: /cli-usage/
  "v-e94e2898": () => import(
    /* webpackChunkName: "v-e94e2898" */
    "./assets/index.html-3934be26.mjs"
  ).then(({ data }) => data),
  // path: /concepts/characteristics-advantages.html
  "v-516714de": () => import(
    /* webpackChunkName: "v-516714de" */
    "./assets/characteristics-advantages.html-ab0b59b9.mjs"
  ).then(({ data }) => data),
  // path: /concepts/how-to-check-balance.html
  "v-4a8bdca8": () => import(
    /* webpackChunkName: "v-4a8bdca8" */
    "./assets/how-to-check-balance.html-8d19e9bd.mjs"
  ).then(({ data }) => data),
  // path: /concepts/how-to-pledge-memo.html
  "v-299ed0d5": () => import(
    /* webpackChunkName: "v-299ed0d5" */
    "./assets/how-to-pledge-memo.html-85f390ef.mjs"
  ).then(({ data }) => data),
  // path: /concepts/how-to-regenerate-node.html
  "v-2a643788": () => import(
    /* webpackChunkName: "v-2a643788" */
    "./assets/how-to-regenerate-node.html-6b5fd936.mjs"
  ).then(({ data }) => data),
  // path: /concepts/introduction.html
  "v-59cf70b4": () => import(
    /* webpackChunkName: "v-59cf70b4" */
    "./assets/introduction.html-80e4fdaf.mjs"
  ).then(({ data }) => data),
  // path: /concepts/memo-token-economics.html
  "v-72dce437": () => import(
    /* webpackChunkName: "v-72dce437" */
    "./assets/memo-token-economics.html-4c55eb89.mjs"
  ).then(({ data }) => data),
  // path: /concepts/payment-of-memo.html
  "v-5583080a": () => import(
    /* webpackChunkName: "v-5583080a" */
    "./assets/payment-of-memo.html-de16c334.mjs"
  ).then(({ data }) => data),
  // path: /concepts/
  "v-6da238aa": () => import(
    /* webpackChunkName: "v-6da238aa" */
    "./assets/index.html-cd013deb.mjs"
  ).then(({ data }) => data),
  // path: /concepts/requirements.html
  "v-535175fe": () => import(
    /* webpackChunkName: "v-535175fe" */
    "./assets/requirements.html-36ef1c6d.mjs"
  ).then(({ data }) => data),
  // path: /concepts/roles-introduction.html
  "v-34b80de4": () => import(
    /* webpackChunkName: "v-34b80de4" */
    "./assets/roles-introduction.html-3bf98c53.mjs"
  ).then(({ data }) => data),
  // path: /FAQ/check-log-file.html
  "v-551d99dd": () => import(
    /* webpackChunkName: "v-551d99dd" */
    "./assets/check-log-file.html-43bd2575.mjs"
  ).then(({ data }) => data),
  // path: /FAQ/common.html
  "v-2f23d81c": () => import(
    /* webpackChunkName: "v-2f23d81c" */
    "./assets/common.html-4cc79e8a.mjs"
  ).then(({ data }) => data),
  // path: /FAQ/connection.html
  "v-59b4cc09": () => import(
    /* webpackChunkName: "v-59b4cc09" */
    "./assets/connection.html-dfa8603f.mjs"
  ).then(({ data }) => data),
  // path: /FAQ/others.html
  "v-7226c9a4": () => import(
    /* webpackChunkName: "v-7226c9a4" */
    "./assets/others.html-6b9921d2.mjs"
  ).then(({ data }) => data),
  // path: /FAQ/provider.html
  "v-68259754": () => import(
    /* webpackChunkName: "v-68259754" */
    "./assets/provider.html-2bd53bcf.mjs"
  ).then(({ data }) => data),
  // path: /FAQ/
  "v-74379e72": () => import(
    /* webpackChunkName: "v-74379e72" */
    "./assets/index.html-d4192cb5.mjs"
  ).then(({ data }) => data),
  // path: /FAQ/startup.html
  "v-71e887ee": () => import(
    /* webpackChunkName: "v-71e887ee" */
    "./assets/startup.html-0ef21d69.mjs"
  ).then(({ data }) => data),
  // path: /FAQ/user.html
  "v-f0990488": () => import(
    /* webpackChunkName: "v-f0990488" */
    "./assets/user.html-d85d5b16.mjs"
  ).then(({ data }) => data),
  // path: /RAFI/rafi.html
  "v-92efbcfa": () => import(
    /* webpackChunkName: "v-92efbcfa" */
    "./assets/rafi.html-0e5c8504.mjs"
  ).then(({ data }) => data),
  // path: /RAFI/
  "v-136523e4": () => import(
    /* webpackChunkName: "v-136523e4" */
    "./assets/index.html-00f99df4.mjs"
  ).then(({ data }) => data),
  // path: /resources/
  "v-7fe15663": () => import(
    /* webpackChunkName: "v-7fe15663" */
    "./assets/index.html-29bc37b9.mjs"
  ).then(({ data }) => data),
  // path: /resources/resources-links.html
  "v-2c51f84b": () => import(
    /* webpackChunkName: "v-2c51f84b" */
    "./assets/resources-links.html-0ff6a86f.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/gateway-mode.html
  "v-226a61b6": () => import(
    /* webpackChunkName: "v-226a61b6" */
    "./assets/gateway-mode.html-2e821f48.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/how-to-use-user.html
  "v-1ec379db": () => import(
    /* webpackChunkName: "v-1ec379db" */
    "./assets/how-to-use-user.html-d8101b5a.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/http-operation.html
  "v-0f20180f": () => import(
    /* webpackChunkName: "v-0f20180f" */
    "./assets/http-operation.html-ca3692c6.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/
  "v-bbcbe2b0": () => import(
    /* webpackChunkName: "v-bbcbe2b0" */
    "./assets/index.html-0595dbf3.mjs"
  ).then(({ data }) => data),
  // path: /version-update-description/
  "v-14701f29": () => import(
    /* webpackChunkName: "v-14701f29" */
    "./assets/index.html-8ac3811f.mjs"
  ).then(({ data }) => data),
  // path: /version-update-description/upgrade-to-megrez2.5.html
  "v-6bdca6e0": () => import(
    /* webpackChunkName: "v-6bdca6e0" */
    "./assets/upgrade-to-megrez2.5.html-2a0b64de.mjs"
  ).then(({ data }) => data),
  // path: /version-update-description/version1-phecda.html
  "v-c50ce74a": () => import(
    /* webpackChunkName: "v-c50ce74a" */
    "./assets/version1-phecda.html-706e4f45.mjs"
  ).then(({ data }) => data),
  // path: /version-update-description/version2-megrez.html
  "v-e287edd2": () => import(
    /* webpackChunkName: "v-e287edd2" */
    "./assets/version2-megrez.html-8a2c2c4b.mjs"
  ).then(({ data }) => data),
  // path: /version-update-description/version2.5-megrez.html
  "v-4da8a79e": () => import(
    /* webpackChunkName: "v-4da8a79e" */
    "./assets/version2.5-megrez.html-6a8758e3.mjs"
  ).then(({ data }) => data),
  // path: /version-update-description/version2.xx-update-description-cn.html
  "v-97046b8a": () => import(
    /* webpackChunkName: "v-97046b8a" */
    "./assets/version2.xx-update-description-cn.html-6c0e30c1.mjs"
  ).then(({ data }) => data),
  // path: /api-docs/middleware/
  "v-0b55d256": () => import(
    /* webpackChunkName: "v-0b55d256" */
    "./assets/index.html-fd080f21.mjs"
  ).then(({ data }) => data),
  // path: /api-docs/s3/memo-s3-api-cn.html
  "v-7634800c": () => import(
    /* webpackChunkName: "v-7634800c" */
    "./assets/memo-s3-api-cn.html-d3037ee0.mjs"
  ).then(({ data }) => data),
  // path: /api-docs/s3/memo-s3-api-en.html
  "v-2eb2367c": () => import(
    /* webpackChunkName: "v-2eb2367c" */
    "./assets/memo-s3-api-en.html-1fe29f04.mjs"
  ).then(({ data }) => data),
  // path: /api-docs/s3/
  "v-b12aa7f2": () => import(
    /* webpackChunkName: "v-b12aa7f2" */
    "./assets/index.html-ebcf298a.mjs"
  ).then(({ data }) => data),
  // path: /cli-usage/keeper/keeper-commandline-mannual.html
  "v-4b06a12d": () => import(
    /* webpackChunkName: "v-4b06a12d" */
    "./assets/keeper-commandline-mannual.html-f86e75b2.mjs"
  ).then(({ data }) => data),
  // path: /cli-usage/keeper/keeper%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C.html
  "v-975c5a5a": () => import(
    /* webpackChunkName: "v-975c5a5a" */
    "./assets/keeper命令手册.html-731707e9.mjs"
  ).then(({ data }) => data),
  // path: /cli-usage/keeper/
  "v-0e843549": () => import(
    /* webpackChunkName: "v-0e843549" */
    "./assets/index.html-847c50ea.mjs"
  ).then(({ data }) => data),
  // path: /cli-usage/provider/provider-commandline-mannual.html
  "v-af75f0e6": () => import(
    /* webpackChunkName: "v-af75f0e6" */
    "./assets/provider-commandline-mannual.html-58efed11.mjs"
  ).then(({ data }) => data),
  // path: /cli-usage/provider/provider%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C.html
  "v-78910d9a": () => import(
    /* webpackChunkName: "v-78910d9a" */
    "./assets/provider命令手册.html-be2c85fe.mjs"
  ).then(({ data }) => data),
  // path: /cli-usage/provider/
  "v-750091ac": () => import(
    /* webpackChunkName: "v-750091ac" */
    "./assets/index.html-cb9f4971.mjs"
  ).then(({ data }) => data),
  // path: /cli-usage/user/
  "v-0850d290": () => import(
    /* webpackChunkName: "v-0850d290" */
    "./assets/index.html-305f9c0b.mjs"
  ).then(({ data }) => data),
  // path: /cli-usage/user/user-commandline-mannual.html
  "v-5cae2c4d": () => import(
    /* webpackChunkName: "v-5cae2c4d" */
    "./assets/user-commandline-mannual.html-d8862563.mjs"
  ).then(({ data }) => data),
  // path: /cli-usage/user/user%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C.html
  "v-2e81c41a": () => import(
    /* webpackChunkName: "v-2e81c41a" */
    "./assets/user命令手册.html-6d9e1560.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/how-to-start-with-Docker/
  "v-60415ec0": () => import(
    /* webpackChunkName: "v-60415ec0" */
    "./assets/index.html-bce50419.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/how-to-start-with-Windows/
  "v-9279f4ca": () => import(
    /* webpackChunkName: "v-9279f4ca" */
    "./assets/index.html-11e84142.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/how-to-start-with-Windows/start-user-in-Windows.html
  "v-424ec73c": () => import(
    /* webpackChunkName: "v-424ec73c" */
    "./assets/start-user-in-Windows.html-bbe5d141.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/install-Docker/docker-install.html
  "v-0dcbac76": () => import(
    /* webpackChunkName: "v-0dcbac76" */
    "./assets/docker-install.html-cbcf0d10.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/install-Docker/
  "v-4b75f815": () => import(
    /* webpackChunkName: "v-4b75f815" */
    "./assets/index.html-7d21cc8b.mjs"
  ).then(({ data }) => data),
  // path: /api-docs/middleware/v0.1-http-gateway/http-gateway%20interface_en.html
  "v-fc93c7ca": () => import(
    /* webpackChunkName: "v-fc93c7ca" */
    "./assets/http-gateway interface_en.html-f21917bd.mjs"
  ).then(({ data }) => data),
  // path: /api-docs/middleware/v0.1-http-gateway/http-gateway%E6%8E%A5%E5%8F%A3_cn.html
  "v-a30faa42": () => import(
    /* webpackChunkName: "v-a30faa42" */
    "./assets/http-gateway接口_cn.html-96e40bcd.mjs"
  ).then(({ data }) => data),
  // path: /api-docs/middleware/v0.1-http-gateway/
  "v-489a8195": () => import(
    /* webpackChunkName: "v-489a8195" */
    "./assets/index.html-1f3318d9.mjs"
  ).then(({ data }) => data),
  // path: /api-docs/middleware/v1.0/
  "v-2f76b49d": () => import(
    /* webpackChunkName: "v-2f76b49d" */
    "./assets/index.html-6f028999.mjs"
  ).then(({ data }) => data),
  // path: /api-docs/middleware/v1.0/%E4%B8%AD%E9%97%B4%E4%BB%B6HTTPAPI%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3.html
  "v-5629bc47": () => import(
    /* webpackChunkName: "v-5629bc47" */
    "./assets/中间件HTTPAPI说明文档.html-6ea8aa74.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/how-to-start-with-Docker/megrez/
  "v-2b7783d2": () => import(
    /* webpackChunkName: "v-2b7783d2" */
    "./assets/index.html-750b5182.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/how-to-start-with-Docker/megrez/start-provider-in-Docker%20copy.html
  "v-6f23eb2f": () => import(
    /* webpackChunkName: "v-6f23eb2f" */
    "./assets/start-provider-in-Docker copy.html-dd37706b.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/how-to-start-with-Docker/megrez/start-user-in-Docker%20copy.html
  "v-8974daee": () => import(
    /* webpackChunkName: "v-8974daee" */
    "./assets/start-user-in-Docker copy.html-daf8bf10.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/how-to-start-with-Docker/testnet/
  "v-4a05e664": () => import(
    /* webpackChunkName: "v-4a05e664" */
    "./assets/index.html-8cbd0b83.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/how-to-start-with-Docker/testnet/start-provider-in-Docker%20copy.html
  "v-62a79e08": () => import(
    /* webpackChunkName: "v-62a79e08" */
    "./assets/start-provider-in-Docker copy.html-9f08f2dc.mjs"
  ).then(({ data }) => data),
  // path: /start-and-usage/how-to-start-with-Docker/testnet/start-user-in-Docker%20copy.html
  "v-444ac6d6": () => import(
    /* webpackChunkName: "v-444ac6d6" */
    "./assets/start-user-in-Docker copy.html-a26a5142.mjs"
  ).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-4550b209.mjs"
  ).then(({ data }) => data),
  // path: /campaigns/
  "v-fcf94a36": () => import(
    /* webpackChunkName: "v-fcf94a36" */
    "./assets/index.html-48e9cee4.mjs"
  ).then(({ data }) => data)
};
const siteData$1 = JSON.parse('{"base":"/","lang":"en","title":"MEMO","description":"Decentralized Storage Designed For Your Future","head":[],"locales":{"/":{"lang":"en","title":"Memo Docs","description":"Memo Docs"}}}');
process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
const isArray$2 = Array.isArray;
const isString$1 = (val) => typeof val === "string";
var resolveHeadIdentifier = ([
  tag,
  attrs,
  content
]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
var dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
var ensureEndingSlash = (str) => /(\.html|\/)$/.test(str) ? str : str + "/";
var isLinkFtp = (link) => link.startsWith("ftp://");
var isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
var markdownLinkRegexp = /.md((\?|#).*)?$/;
var isLinkExternal = (link, base = "/") => {
  if (isLinkHttp(link) || isLinkFtp(link)) {
    return true;
  }
  if (link.startsWith("/") && !link.startsWith(base) && !markdownLinkRegexp.test(link)) {
    return true;
  }
  return false;
};
var isLinkMailto = (link) => /^mailto:/.test(link);
var isLinkTel = (link) => /^tel:/.test(link);
var isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
var removeEndingSlash = (str) => str.replace(/\/$/, "");
var removeLeadingSlash = (str) => str.replace(/^\//, "");
var resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a2, b2) => {
    const levelDelta = b2.split("/").length - a2.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b2.length - a2.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const pagesComponents = {
  // path: /
  "v-8daa1a0e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-db46ebe5.mjs"
  )),
  // path: /api-docs/
  "v-b858e5f0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b858e5f0" */
    "./assets/index.html-ab5d24c4.mjs"
  )),
  // path: /campaigns/volunteer-recruitment-plan.html
  "v-c1fb5a52": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c1fb5a52" */
    "./assets/volunteer-recruitment-plan.html-aa6b9ef2.mjs"
  )),
  // path: /cli-usage/
  "v-e94e2898": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e94e2898" */
    "./assets/index.html-2f633b32.mjs"
  )),
  // path: /concepts/characteristics-advantages.html
  "v-516714de": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-516714de" */
    "./assets/characteristics-advantages.html-f85c5f27.mjs"
  )),
  // path: /concepts/how-to-check-balance.html
  "v-4a8bdca8": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4a8bdca8" */
    "./assets/how-to-check-balance.html-d0a3393a.mjs"
  )),
  // path: /concepts/how-to-pledge-memo.html
  "v-299ed0d5": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-299ed0d5" */
    "./assets/how-to-pledge-memo.html-9992e618.mjs"
  )),
  // path: /concepts/how-to-regenerate-node.html
  "v-2a643788": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2a643788" */
    "./assets/how-to-regenerate-node.html-20b3d472.mjs"
  )),
  // path: /concepts/introduction.html
  "v-59cf70b4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-59cf70b4" */
    "./assets/introduction.html-10dfa41c.mjs"
  )),
  // path: /concepts/memo-token-economics.html
  "v-72dce437": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-72dce437" */
    "./assets/memo-token-economics.html-d07ff1f4.mjs"
  )),
  // path: /concepts/payment-of-memo.html
  "v-5583080a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5583080a" */
    "./assets/payment-of-memo.html-8f85dcd2.mjs"
  )),
  // path: /concepts/
  "v-6da238aa": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6da238aa" */
    "./assets/index.html-53dce335.mjs"
  )),
  // path: /concepts/requirements.html
  "v-535175fe": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-535175fe" */
    "./assets/requirements.html-6a7f6651.mjs"
  )),
  // path: /concepts/roles-introduction.html
  "v-34b80de4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-34b80de4" */
    "./assets/roles-introduction.html-a57a7db9.mjs"
  )),
  // path: /FAQ/check-log-file.html
  "v-551d99dd": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-551d99dd" */
    "./assets/check-log-file.html-df2fbb0c.mjs"
  )),
  // path: /FAQ/common.html
  "v-2f23d81c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2f23d81c" */
    "./assets/common.html-019d0239.mjs"
  )),
  // path: /FAQ/connection.html
  "v-59b4cc09": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-59b4cc09" */
    "./assets/connection.html-1e7e16a2.mjs"
  )),
  // path: /FAQ/others.html
  "v-7226c9a4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7226c9a4" */
    "./assets/others.html-f562c154.mjs"
  )),
  // path: /FAQ/provider.html
  "v-68259754": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-68259754" */
    "./assets/provider.html-fed78053.mjs"
  )),
  // path: /FAQ/
  "v-74379e72": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-74379e72" */
    "./assets/index.html-653a04f7.mjs"
  )),
  // path: /FAQ/startup.html
  "v-71e887ee": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-71e887ee" */
    "./assets/startup.html-8d9aeea9.mjs"
  )),
  // path: /FAQ/user.html
  "v-f0990488": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-f0990488" */
    "./assets/user.html-b3de292b.mjs"
  )),
  // path: /RAFI/rafi.html
  "v-92efbcfa": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-92efbcfa" */
    "./assets/rafi.html-ee2f12ba.mjs"
  )),
  // path: /RAFI/
  "v-136523e4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-136523e4" */
    "./assets/index.html-8ee97f4a.mjs"
  )),
  // path: /resources/
  "v-7fe15663": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7fe15663" */
    "./assets/index.html-62d001ff.mjs"
  )),
  // path: /resources/resources-links.html
  "v-2c51f84b": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2c51f84b" */
    "./assets/resources-links.html-86614c87.mjs"
  )),
  // path: /start-and-usage/gateway-mode.html
  "v-226a61b6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-226a61b6" */
    "./assets/gateway-mode.html-ae38977a.mjs"
  )),
  // path: /start-and-usage/how-to-use-user.html
  "v-1ec379db": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1ec379db" */
    "./assets/how-to-use-user.html-d914642b.mjs"
  )),
  // path: /start-and-usage/http-operation.html
  "v-0f20180f": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0f20180f" */
    "./assets/http-operation.html-c0d43013.mjs"
  )),
  // path: /start-and-usage/
  "v-bbcbe2b0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-bbcbe2b0" */
    "./assets/index.html-0b5011ae.mjs"
  )),
  // path: /version-update-description/
  "v-14701f29": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-14701f29" */
    "./assets/index.html-301d998d.mjs"
  )),
  // path: /version-update-description/upgrade-to-megrez2.5.html
  "v-6bdca6e0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6bdca6e0" */
    "./assets/upgrade-to-megrez2.5.html-16bd500a.mjs"
  )),
  // path: /version-update-description/version1-phecda.html
  "v-c50ce74a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c50ce74a" */
    "./assets/version1-phecda.html-02c230cb.mjs"
  )),
  // path: /version-update-description/version2-megrez.html
  "v-e287edd2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e287edd2" */
    "./assets/version2-megrez.html-bb069a4b.mjs"
  )),
  // path: /version-update-description/version2.5-megrez.html
  "v-4da8a79e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4da8a79e" */
    "./assets/version2.5-megrez.html-7342c8da.mjs"
  )),
  // path: /version-update-description/version2.xx-update-description-cn.html
  "v-97046b8a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-97046b8a" */
    "./assets/version2.xx-update-description-cn.html-2a8ab1df.mjs"
  )),
  // path: /api-docs/middleware/
  "v-0b55d256": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0b55d256" */
    "./assets/index.html-70bada55.mjs"
  )),
  // path: /api-docs/s3/memo-s3-api-cn.html
  "v-7634800c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7634800c" */
    "./assets/memo-s3-api-cn.html-edbf5bc0.mjs"
  )),
  // path: /api-docs/s3/memo-s3-api-en.html
  "v-2eb2367c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2eb2367c" */
    "./assets/memo-s3-api-en.html-f846d911.mjs"
  )),
  // path: /api-docs/s3/
  "v-b12aa7f2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b12aa7f2" */
    "./assets/index.html-848da7d2.mjs"
  )),
  // path: /cli-usage/keeper/keeper-commandline-mannual.html
  "v-4b06a12d": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4b06a12d" */
    "./assets/keeper-commandline-mannual.html-47f69a6d.mjs"
  )),
  // path: /cli-usage/keeper/keeper%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C.html
  "v-975c5a5a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-975c5a5a" */
    "./assets/keeper命令手册.html-f8a1e2c7.mjs"
  )),
  // path: /cli-usage/keeper/
  "v-0e843549": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0e843549" */
    "./assets/index.html-5854f30d.mjs"
  )),
  // path: /cli-usage/provider/provider-commandline-mannual.html
  "v-af75f0e6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-af75f0e6" */
    "./assets/provider-commandline-mannual.html-0a39ebf6.mjs"
  )),
  // path: /cli-usage/provider/provider%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C.html
  "v-78910d9a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-78910d9a" */
    "./assets/provider命令手册.html-e4cd6c1a.mjs"
  )),
  // path: /cli-usage/provider/
  "v-750091ac": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-750091ac" */
    "./assets/index.html-a8c783a4.mjs"
  )),
  // path: /cli-usage/user/
  "v-0850d290": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0850d290" */
    "./assets/index.html-a9e3d29f.mjs"
  )),
  // path: /cli-usage/user/user-commandline-mannual.html
  "v-5cae2c4d": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5cae2c4d" */
    "./assets/user-commandline-mannual.html-75514a67.mjs"
  )),
  // path: /cli-usage/user/user%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C.html
  "v-2e81c41a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2e81c41a" */
    "./assets/user命令手册.html-27dc0b94.mjs"
  )),
  // path: /start-and-usage/how-to-start-with-Docker/
  "v-60415ec0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-60415ec0" */
    "./assets/index.html-10f04ae4.mjs"
  )),
  // path: /start-and-usage/how-to-start-with-Windows/
  "v-9279f4ca": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-9279f4ca" */
    "./assets/index.html-ceb41d64.mjs"
  )),
  // path: /start-and-usage/how-to-start-with-Windows/start-user-in-Windows.html
  "v-424ec73c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-424ec73c" */
    "./assets/start-user-in-Windows.html-2b7ca4e2.mjs"
  )),
  // path: /start-and-usage/install-Docker/docker-install.html
  "v-0dcbac76": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0dcbac76" */
    "./assets/docker-install.html-982fc953.mjs"
  )),
  // path: /start-and-usage/install-Docker/
  "v-4b75f815": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4b75f815" */
    "./assets/index.html-460b39c1.mjs"
  )),
  // path: /api-docs/middleware/v0.1-http-gateway/http-gateway%20interface_en.html
  "v-fc93c7ca": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-fc93c7ca" */
    "./assets/http-gateway interface_en.html-2d47fc9e.mjs"
  )),
  // path: /api-docs/middleware/v0.1-http-gateway/http-gateway%E6%8E%A5%E5%8F%A3_cn.html
  "v-a30faa42": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a30faa42" */
    "./assets/http-gateway接口_cn.html-9e5d7c1c.mjs"
  )),
  // path: /api-docs/middleware/v0.1-http-gateway/
  "v-489a8195": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-489a8195" */
    "./assets/index.html-8c960677.mjs"
  )),
  // path: /api-docs/middleware/v1.0/
  "v-2f76b49d": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2f76b49d" */
    "./assets/index.html-be0ae9d5.mjs"
  )),
  // path: /api-docs/middleware/v1.0/%E4%B8%AD%E9%97%B4%E4%BB%B6HTTPAPI%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3.html
  "v-5629bc47": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5629bc47" */
    "./assets/中间件HTTPAPI说明文档.html-beb466b6.mjs"
  )),
  // path: /start-and-usage/how-to-start-with-Docker/megrez/
  "v-2b7783d2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2b7783d2" */
    "./assets/index.html-5ffba2a6.mjs"
  )),
  // path: /start-and-usage/how-to-start-with-Docker/megrez/start-provider-in-Docker%20copy.html
  "v-6f23eb2f": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6f23eb2f" */
    "./assets/start-provider-in-Docker copy.html-ebb95768.mjs"
  )),
  // path: /start-and-usage/how-to-start-with-Docker/megrez/start-user-in-Docker%20copy.html
  "v-8974daee": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8974daee" */
    "./assets/start-user-in-Docker copy.html-fea994b3.mjs"
  )),
  // path: /start-and-usage/how-to-start-with-Docker/testnet/
  "v-4a05e664": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4a05e664" */
    "./assets/index.html-19100811.mjs"
  )),
  // path: /start-and-usage/how-to-start-with-Docker/testnet/start-provider-in-Docker%20copy.html
  "v-62a79e08": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-62a79e08" */
    "./assets/start-provider-in-Docker copy.html-6f18fd75.mjs"
  )),
  // path: /start-and-usage/how-to-start-with-Docker/testnet/start-user-in-Docker%20copy.html
  "v-444ac6d6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-444ac6d6" */
    "./assets/start-user-in-Docker copy.html-584435cd.mjs"
  )),
  // path: /404.html
  "v-3706649a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-aa6333ca.mjs"
  )),
  // path: /campaigns/
  "v-fcf94a36": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-fcf94a36" */
    "./assets/index.html-222de8ad.mjs"
  ))
};
var layoutsSymbol = Symbol(
  ""
);
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData = () => pageData;
var pageFrontmatterSymbol = Symbol(
  ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol(
  ""
);
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol(
  ""
);
var pageLangSymbol = Symbol(
  ""
);
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var pageLayoutSymbol = Symbol(
  ""
);
var usePageLayout = () => {
  const pageLayout = inject(pageLayoutSymbol);
  if (!pageLayout) {
    throw new Error("usePageLayout() is called without provider.");
  }
  return pageLayout;
};
var routeLocaleSymbol = Symbol(
  ""
);
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
var siteLocaleDataSymbol = Symbol(
  ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Resolve page data according to page key
   */
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 ?? pageDataEmpty;
  },
  /**
   * Resolve page frontmatter from page data
   */
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString$1(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray$2(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (page2, siteLocale) => [page2.title, siteLocale.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (page2) => page2.lang || "en",
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (page2, layouts) => {
    let layoutName;
    if (page2.path) {
      const frontmatterLayout = page2.frontmatter.layout;
      if (isString$1(frontmatterLayout)) {
        layoutName = frontmatterLayout;
      } else {
        layoutName = LAYOUT_NAME_DEFAULT;
      }
    } else {
      layoutName = LAYOUT_NAME_NOT_FOUND;
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page2 = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page2.value.key]
    );
    return () => pageComponent.value ? (
      // use page component
      h(pageComponent.value)
    ) : (
      // fallback content
      h(
        "div",
        "404 Not Found"
      )
    );
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
const hopeInject = "";
const clientConfig0 = {};
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b2[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new u32(b2[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j = b2[i2]; j < b2[i2 + 1]; ++j) {
      r2[j] = j - b2[i2] << 5 | i2;
    }
  }
  return [b2, r2];
};
var _a$1 = freb(fleb, 2), fl = _a$1[0], revfl = _a$1[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0];
var rev = new u16(32768);
for (var i$1 = 0; i$1 < 32768; ++i$1) {
  var x$2 = (i$1 & 43690) >>> 1 | (i$1 & 21845) << 1;
  x$2 = (x$2 & 52428) >>> 2 | (x$2 & 13107) << 2;
  x$2 = (x$2 & 61680) >>> 4 | (x$2 & 3855) << 4;
  rev[i$1] = ((x$2 & 65280) >>> 8 | (x$2 & 255) << 8) >>> 1;
}
var hMap = function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 0; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v2 = le[cd[i2] - 1]++ << r_1;
        for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
          co[rev[v2] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >>> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$1 = 0; i$1 < 144; ++i$1)
  flt[i$1] = 8;
for (var i$1 = 144; i$1 < 256; ++i$1)
  flt[i$1] = 9;
for (var i$1 = 256; i$1 < 280; ++i$1)
  flt[i$1] = 7;
for (var i$1 = 280; i$1 < 288; ++i$1)
  flt[i$1] = 8;
var fdt = new u8(32);
for (var i$1 = 0; i$1 < 32; ++i$1)
  fdt[i$1] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m2 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m2)
      m2 = a2[i2];
  }
  return m2;
};
var bits = function(d, p2, m2) {
  var o2 = p2 / 8 | 0;
  return (d[o2] | d[o2 + 1] << 8) >> (p2 & 7) & m2;
};
var bits16 = function(d, p2) {
  var o2 = p2 / 8 | 0;
  return (d[o2] | d[o2 + 1] << 8 | d[o2 + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v2, s2, e2) {
  if (s2 == null || s2 < 0)
    s2 = 0;
  if (e2 == null || e2 > v2.length)
    e2 = v2.length;
  var n2 = new (v2.BYTES_PER_ELEMENT == 2 ? u16 : v2.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e2 - s2);
  n2.set(v2.subarray(s2, e2));
  return n2;
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt2) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err);
  if (!nt2)
    throw e2;
  return e2;
};
var inflt = function(dat, buf, st2) {
  var sl = dat.length;
  if (!sl || st2 && st2.f && !st2.l)
    return buf || new u8(0);
  var noBuf = !buf || st2;
  var noSt = !st2 || st2.i;
  if (!st2)
    st2 = {};
  if (!buf)
    buf = new u8(sl * 3);
  var cbuf = function(l3) {
    var bl = buf.length;
    if (l3 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st2.f || 0, pos = st2.p || 0, bt2 = st2.b || 0, lm = st2.l, dm = st2.d, lbt = st2.m, dbt = st2.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type2 = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type2) {
        var s2 = shft(pos) + 4, l2 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l2;
        if (t2 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt2 + l2);
        buf.set(dat.subarray(s2, t2), bt2);
        st2.b = bt2 += l2, st2.p = pos = t2 * 8, st2.f = final;
        continue;
      } else if (type2 == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type2 == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >>> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c2 = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c2;
          }
        }
        var lt2 = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt2);
        dbt = max(dt);
        lm = hMap(lt2, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (noBuf)
      cbuf(bt2 + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >>> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt2++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b2 = fleb[i2];
          add = bits(dat, pos, (1 << b2) - 1) + fl[i2];
          pos += b2;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b2 = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt2 + 131072);
        var end = bt2 + add;
        for (; bt2 < end; bt2 += 4) {
          buf[bt2] = buf[bt2 - dt];
          buf[bt2 + 1] = buf[bt2 + 1 - dt];
          buf[bt2 + 2] = buf[bt2 + 2 - dt];
          buf[bt2 + 3] = buf[bt2 + 3 - dt];
        }
        bt2 = end;
      }
    }
    st2.l = lm, st2.p = lpos, st2.b = bt2, st2.f = final;
    if (lm)
      final = 1, st2.m = lbt, st2.d = dm, st2.n = dbt;
  } while (!final);
  return bt2 == buf.length ? buf : slc(buf, 0, bt2);
};
var et$1 = /* @__PURE__ */ new u8(0);
var zlv = function(d) {
  if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31)
    err(6, "invalid zlib data");
  if (d[1] & 32)
    err(6, "invalid zlib data: preset dictionaries not supported");
};
function unzlibSync(data, out) {
  return inflt((zlv(data), data.subarray(2, -4)), out);
}
var te$1 = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et$1, { stream: true });
  tds = 1;
} catch (e2) {
}
var dutf8 = function(d) {
  for (var r2 = "", i2 = 0; ; ) {
    var c2 = d[i2++];
    var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
    if (i2 + eb > d.length)
      return [r2, slc(d, i2 - 1)];
    if (!eb)
      r2 += String.fromCharCode(c2);
    else if (eb == 3) {
      c2 = ((c2 & 15) << 18 | (d[i2++] & 63) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c2 & 31) << 6 | d[i2++] & 63);
    else
      r2 += String.fromCharCode((c2 & 15) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  if (te$1)
    return te$1.encode(str);
  var l2 = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w2 = function(v2) {
    ar[ai++] = v2;
  };
  for (var i2 = 0; i2 < l2; ++i2) {
    if (ai + 5 > ar.length) {
      var n2 = new u8(ai + 8 + (l2 - i2 << 1));
      n2.set(ar);
      ar = n2;
    }
    var c2 = str.charCodeAt(i2);
    if (c2 < 128 || latin1)
      w2(c2);
    else if (c2 < 2048)
      w2(192 | c2 >> 6), w2(128 | c2 & 63);
    else if (c2 > 55295 && c2 < 57344)
      c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i2) & 1023, w2(240 | c2 >> 18), w2(128 | c2 >> 12 & 63), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
    else
      w2(224 | c2 >> 12), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r2 = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r2 += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r2;
  } else if (td)
    return td.decode(dat);
  else {
    var _a2 = dutf8(dat), out = _a2[0], ext = _a2[1];
    if (ext.length)
      err(8);
    return out;
  }
}
const G$1 = ({ name: t2 = "", color: n2 = "currentColor" }, { slots: e2 }) => {
  var i2;
  return h("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${t2}-icon`], viewBox: "0 0 1024 1024", fill: n2, "aria-label": `${t2} icon` }, (i2 = e2.default) == null ? void 0 : i2.call(e2));
};
G$1.displayName = "IconBase";
const vt = ({ size: t2 = 48, stroke: n2 = 4, wrapper: e2 = true, height: i2 = 2 * t2 }) => {
  const h$1 = h("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: t2, preserveAspectRatio: "xMidYMid", viewBox: "25 25 50 50" }, [h("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", keyTimes: "0;1", repeatCount: "indefinite", values: "0;360" }), h("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": n2, "stroke-linecap": "round" }, [h("animate", { attributeName: "stroke-dasharray", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "1,200;90,200;1,200" }), h("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "0;-35px;-125px" })])]);
  return e2 ? h("div", { class: "loading-icon-wrapper", style: `display:flex;align-items:center;justify-content:center;height:${i2}px` }, h$1) : h$1;
};
vt.displayName = "LoadingIcon";
const Rt = (t2, { slots: n2 }) => {
  var e2;
  return ((e2 = n2.default) == null ? void 0 : e2.call(n2)) || null;
}, gt = () => h(G$1, { name: "github" }, () => h("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
gt.displayName = "GitHubIcon";
const $t = () => h(G$1, { name: "gitlab" }, () => h("path", { d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z" }));
$t.displayName = "GitlabIcon";
const yt = () => h(G$1, { name: "gitee" }, () => h("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
yt.displayName = "GiteeIcon";
const bt = () => h(G$1, { name: "bitbucket" }, () => h("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
bt.displayName = "BitbucketIcon";
const wt = () => h(G$1, { name: "source" }, () => h("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
wt.displayName = "SourceIcon";
const et = Array.isArray, Gt = (t2) => typeof t2 == "function", P$3 = (t2) => typeof t2 == "string";
var Ot = (t2) => /^(https?:)?\/\//.test(t2), J$1 = (t2) => Object.prototype.toString.call(t2) === "[object Object]";
const Vt = (t2, n2) => {
  const e2 = n2 ? n2._instance : getCurrentInstance();
  return J$1(e2 == null ? void 0 : e2.appContext.components) && (t2 in e2.appContext.components || camelize(t2) in e2.appContext.components || capitalize(camelize(t2)) in e2.appContext.components);
};
function Ft(t2) {
  return t2;
}
function Zt(t2, n2 = true) {
  getCurrentInstance() ? onMounted(t2) : n2 ? t2() : nextTick(t2);
}
function Qt(t2, n2 = false) {
  const e2 = ref(), i2 = () => e2.value = !!t2();
  return i2(), Zt(i2, n2), e2;
}
const St = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Mt = "__vueuse_ssr_handlers__";
St[Mt] = St[Mt] || {};
var Dt;
(function(t2) {
  t2.UP = "UP", t2.RIGHT = "RIGHT", t2.DOWN = "DOWN", t2.LEFT = "LEFT", t2.NONE = "NONE";
})(Dt || (Dt = {}));
var Jt = Object.defineProperty, xt = Object.getOwnPropertySymbols, qt = Object.prototype.hasOwnProperty, Kt = Object.prototype.propertyIsEnumerable, It = (t2, n2, e2) => n2 in t2 ? Jt(t2, n2, { enumerable: true, configurable: true, writable: true, value: e2 }) : t2[n2] = e2, Xt = (t2, n2) => {
  for (var e2 in n2 || (n2 = {}))
    qt.call(n2, e2) && It(t2, e2, n2[e2]);
  if (xt)
    for (var e2 of xt(n2))
      Kt.call(n2, e2) && It(t2, e2, n2[e2]);
  return t2;
};
const te = { easeInSine: [0.12, 0, 0.39, 0], easeOutSine: [0.61, 1, 0.88, 1], easeInOutSine: [0.37, 0, 0.63, 1], easeInQuad: [0.11, 0, 0.5, 0], easeOutQuad: [0.5, 1, 0.89, 1], easeInOutQuad: [0.45, 0, 0.55, 1], easeInCubic: [0.32, 0, 0.67, 0], easeOutCubic: [0.33, 1, 0.68, 1], easeInOutCubic: [0.65, 0, 0.35, 1], easeInQuart: [0.5, 0, 0.75, 0], easeOutQuart: [0.25, 1, 0.5, 1], easeInOutQuart: [0.76, 0, 0.24, 1], easeInQuint: [0.64, 0, 0.78, 0], easeOutQuint: [0.22, 1, 0.36, 1], easeInOutQuint: [0.83, 0, 0.17, 1], easeInExpo: [0.7, 0, 0.84, 0], easeOutExpo: [0.16, 1, 0.3, 1], easeInOutExpo: [0.87, 0, 0.13, 1], easeInCirc: [0.55, 0, 1, 0.45], easeOutCirc: [0, 0.55, 0.45, 1], easeInOutCirc: [0.85, 0, 0.15, 1], easeInBack: [0.36, 0, 0.66, -0.56], easeOutBack: [0.34, 1.56, 0.64, 1], easeInOutBack: [0.68, -0.6, 0.32, 1.6] };
Xt({ linear: Ft }, te);
const Et = () => Qt(() => typeof window < "u" && window.navigator && "userAgent" in window.navigator), ee$1 = () => {
  const t2 = Et();
  return computed(() => t2.value && /\b(?:Android|iPhone)/i.test(navigator.userAgent));
}, ne = (t2) => {
  const n2 = useRouteLocale();
  return computed(() => t2[n2.value]);
}, fe = (t2, n2) => {
  let e2 = 1;
  for (let i2 = 0; i2 < t2.length; i2++)
    e2 += t2.charCodeAt(i2), e2 += e2 << 10, e2 ^= e2 >> 6;
  return e2 += e2 << 3, e2 ^= e2 >> 11, e2 % n2;
};
var K$2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nt = {}, me = { get exports() {
  return nt;
}, set exports(t2) {
  nt = t2;
} };
(function(t2, n2) {
  (function(e2, i2) {
    t2.exports = i2();
  })(K$2, function() {
    var e2 = 1e3, i2 = 6e4, h2 = 36e5, b2 = "millisecond", y2 = "second", w2 = "minute", p2 = "hour", S2 = "day", k2 = "week", x2 = "month", u2 = "quarter", l2 = "year", g2 = "date", r2 = "Invalid Date", c2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, I2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(d) {
      var a2 = ["th", "st", "nd", "rd"], s2 = d % 100;
      return "[" + d + (a2[(s2 - 20) % 10] || a2[s2] || a2[0]) + "]";
    } }, E2 = function(d, a2, s2) {
      var f2 = String(d);
      return !f2 || f2.length >= a2 ? d : "" + Array(a2 + 1 - f2.length).join(s2) + d;
    }, U2 = { s: E2, z: function(d) {
      var a2 = -d.utcOffset(), s2 = Math.abs(a2), f2 = Math.floor(s2 / 60), o2 = s2 % 60;
      return (a2 <= 0 ? "+" : "-") + E2(f2, 2, "0") + ":" + E2(o2, 2, "0");
    }, m: function d(a2, s2) {
      if (a2.date() < s2.date())
        return -d(s2, a2);
      var f2 = 12 * (s2.year() - a2.year()) + (s2.month() - a2.month()), o2 = a2.clone().add(f2, x2), v2 = s2 - o2 < 0, m2 = a2.clone().add(f2 + (v2 ? -1 : 1), x2);
      return +(-(f2 + (s2 - o2) / (v2 ? o2 - m2 : m2 - o2)) || 0);
    }, a: function(d) {
      return d < 0 ? Math.ceil(d) || 0 : Math.floor(d);
    }, p: function(d) {
      return { M: x2, y: l2, w: k2, d: S2, D: g2, h: p2, m: w2, s: y2, ms: b2, Q: u2 }[d] || String(d || "").toLowerCase().replace(/s$/, "");
    }, u: function(d) {
      return d === void 0;
    } }, _ = "en", z2 = {};
    z2[_] = M2;
    var H2 = function(d) {
      return d instanceof A2;
    }, j = function d(a2, s2, f2) {
      var o2;
      if (!a2)
        return _;
      if (typeof a2 == "string") {
        var v2 = a2.toLowerCase();
        z2[v2] && (o2 = v2), s2 && (z2[v2] = s2, o2 = v2);
        var m2 = a2.split("-");
        if (!o2 && m2.length > 1)
          return d(m2[0]);
      } else {
        var D2 = a2.name;
        z2[D2] = a2, o2 = D2;
      }
      return !f2 && o2 && (_ = o2), o2 || !f2 && _;
    }, O2 = function(d, a2) {
      if (H2(d))
        return d.clone();
      var s2 = typeof a2 == "object" ? a2 : {};
      return s2.date = d, s2.args = arguments, new A2(s2);
    }, $2 = U2;
    $2.l = j, $2.i = H2, $2.w = function(d, a2) {
      return O2(d, { locale: a2.$L, utc: a2.$u, x: a2.$x, $offset: a2.$offset });
    };
    var A2 = function() {
      function d(s2) {
        this.$L = j(s2.locale, null, true), this.parse(s2);
      }
      var a2 = d.prototype;
      return a2.parse = function(s2) {
        this.$d = function(f2) {
          var o2 = f2.date, v2 = f2.utc;
          if (o2 === null)
            return new Date(NaN);
          if ($2.u(o2))
            return new Date();
          if (o2 instanceof Date)
            return new Date(o2);
          if (typeof o2 == "string" && !/Z$/i.test(o2)) {
            var m2 = o2.match(c2);
            if (m2) {
              var D2 = m2[2] - 1 || 0, C2 = (m2[7] || "0").substring(0, 3);
              return v2 ? new Date(Date.UTC(m2[1], D2, m2[3] || 1, m2[4] || 0, m2[5] || 0, m2[6] || 0, C2)) : new Date(m2[1], D2, m2[3] || 1, m2[4] || 0, m2[5] || 0, m2[6] || 0, C2);
            }
          }
          return new Date(o2);
        }(s2), this.$x = s2.x || {}, this.init();
      }, a2.init = function() {
        var s2 = this.$d;
        this.$y = s2.getFullYear(), this.$M = s2.getMonth(), this.$D = s2.getDate(), this.$W = s2.getDay(), this.$H = s2.getHours(), this.$m = s2.getMinutes(), this.$s = s2.getSeconds(), this.$ms = s2.getMilliseconds();
      }, a2.$utils = function() {
        return $2;
      }, a2.isValid = function() {
        return this.$d.toString() !== r2;
      }, a2.isSame = function(s2, f2) {
        var o2 = O2(s2);
        return this.startOf(f2) <= o2 && o2 <= this.endOf(f2);
      }, a2.isAfter = function(s2, f2) {
        return O2(s2) < this.startOf(f2);
      }, a2.isBefore = function(s2, f2) {
        return this.endOf(f2) < O2(s2);
      }, a2.$g = function(s2, f2, o2) {
        return $2.u(s2) ? this[f2] : this.set(o2, s2);
      }, a2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, a2.valueOf = function() {
        return this.$d.getTime();
      }, a2.startOf = function(s2, f2) {
        var o2 = this, v2 = !!$2.u(f2) || f2, m2 = $2.p(s2), D2 = function(F2, Y2) {
          var R = $2.w(o2.$u ? Date.UTC(o2.$y, Y2, F2) : new Date(o2.$y, Y2, F2), o2);
          return v2 ? R : R.endOf(S2);
        }, C2 = function(F2, Y2) {
          return $2.w(o2.toDate()[F2].apply(o2.toDate("s"), (v2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y2)), o2);
        }, T2 = this.$W, N2 = this.$M, B2 = this.$D, W2 = "set" + (this.$u ? "UTC" : "");
        switch (m2) {
          case l2:
            return v2 ? D2(1, 0) : D2(31, 11);
          case x2:
            return v2 ? D2(1, N2) : D2(0, N2 + 1);
          case k2:
            var Z = this.$locale().weekStart || 0, Q = (T2 < Z ? T2 + 7 : T2) - Z;
            return D2(v2 ? B2 - Q : B2 + (6 - Q), N2);
          case S2:
          case g2:
            return C2(W2 + "Hours", 0);
          case p2:
            return C2(W2 + "Minutes", 1);
          case w2:
            return C2(W2 + "Seconds", 2);
          case y2:
            return C2(W2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, a2.endOf = function(s2) {
        return this.startOf(s2, false);
      }, a2.$set = function(s2, f2) {
        var o2, v2 = $2.p(s2), m2 = "set" + (this.$u ? "UTC" : ""), D2 = (o2 = {}, o2[S2] = m2 + "Date", o2[g2] = m2 + "Date", o2[x2] = m2 + "Month", o2[l2] = m2 + "FullYear", o2[p2] = m2 + "Hours", o2[w2] = m2 + "Minutes", o2[y2] = m2 + "Seconds", o2[b2] = m2 + "Milliseconds", o2)[v2], C2 = v2 === S2 ? this.$D + (f2 - this.$W) : f2;
        if (v2 === x2 || v2 === l2) {
          var T2 = this.clone().set(g2, 1);
          T2.$d[D2](C2), T2.init(), this.$d = T2.set(g2, Math.min(this.$D, T2.daysInMonth())).$d;
        } else
          D2 && this.$d[D2](C2);
        return this.init(), this;
      }, a2.set = function(s2, f2) {
        return this.clone().$set(s2, f2);
      }, a2.get = function(s2) {
        return this[$2.p(s2)]();
      }, a2.add = function(s2, f2) {
        var o2, v2 = this;
        s2 = Number(s2);
        var m2 = $2.p(f2), D2 = function(N2) {
          var B2 = O2(v2);
          return $2.w(B2.date(B2.date() + Math.round(N2 * s2)), v2);
        };
        if (m2 === x2)
          return this.set(x2, this.$M + s2);
        if (m2 === l2)
          return this.set(l2, this.$y + s2);
        if (m2 === S2)
          return D2(1);
        if (m2 === k2)
          return D2(7);
        var C2 = (o2 = {}, o2[w2] = i2, o2[p2] = h2, o2[y2] = e2, o2)[m2] || 1, T2 = this.$d.getTime() + s2 * C2;
        return $2.w(T2, this);
      }, a2.subtract = function(s2, f2) {
        return this.add(-1 * s2, f2);
      }, a2.format = function(s2) {
        var f2 = this, o2 = this.$locale();
        if (!this.isValid())
          return o2.invalidDate || r2;
        var v2 = s2 || "YYYY-MM-DDTHH:mm:ssZ", m2 = $2.z(this), D2 = this.$H, C2 = this.$m, T2 = this.$M, N2 = o2.weekdays, B2 = o2.months, W2 = function(Y2, R, X, q2) {
          return Y2 && (Y2[R] || Y2(f2, v2)) || X[R].slice(0, q2);
        }, Z = function(Y2) {
          return $2.s(D2 % 12 || 12, Y2, "0");
        }, Q = o2.meridiem || function(Y2, R, X) {
          var q2 = Y2 < 12 ? "AM" : "PM";
          return X ? q2.toLowerCase() : q2;
        }, F2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: T2 + 1, MM: $2.s(T2 + 1, 2, "0"), MMM: W2(o2.monthsShort, T2, B2, 3), MMMM: W2(B2, T2), D: this.$D, DD: $2.s(this.$D, 2, "0"), d: String(this.$W), dd: W2(o2.weekdaysMin, this.$W, N2, 2), ddd: W2(o2.weekdaysShort, this.$W, N2, 3), dddd: N2[this.$W], H: String(D2), HH: $2.s(D2, 2, "0"), h: Z(1), hh: Z(2), a: Q(D2, C2, true), A: Q(D2, C2, false), m: String(C2), mm: $2.s(C2, 2, "0"), s: String(this.$s), ss: $2.s(this.$s, 2, "0"), SSS: $2.s(this.$ms, 3, "0"), Z: m2 };
        return v2.replace(I2, function(Y2, R) {
          return R || F2[Y2] || m2.replace(":", "");
        });
      }, a2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, a2.diff = function(s2, f2, o2) {
        var v2, m2 = $2.p(f2), D2 = O2(s2), C2 = (D2.utcOffset() - this.utcOffset()) * i2, T2 = this - D2, N2 = $2.m(this, D2);
        return N2 = (v2 = {}, v2[l2] = N2 / 12, v2[x2] = N2, v2[u2] = N2 / 3, v2[k2] = (T2 - C2) / 6048e5, v2[S2] = (T2 - C2) / 864e5, v2[p2] = T2 / h2, v2[w2] = T2 / i2, v2[y2] = T2 / e2, v2)[m2] || T2, o2 ? N2 : $2.a(N2);
      }, a2.daysInMonth = function() {
        return this.endOf(x2).$D;
      }, a2.$locale = function() {
        return z2[this.$L];
      }, a2.locale = function(s2, f2) {
        if (!s2)
          return this.$L;
        var o2 = this.clone(), v2 = j(s2, f2, true);
        return v2 && (o2.$L = v2), o2;
      }, a2.clone = function() {
        return $2.w(this.$d, this);
      }, a2.toDate = function() {
        return new Date(this.valueOf());
      }, a2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, a2.toISOString = function() {
        return this.$d.toISOString();
      }, a2.toString = function() {
        return this.$d.toUTCString();
      }, d;
    }(), ht = A2.prototype;
    return O2.prototype = ht, [["$ms", b2], ["$s", y2], ["$m", w2], ["$H", p2], ["$W", S2], ["$M", x2], ["$y", l2], ["$D", g2]].forEach(function(d) {
      ht[d[1]] = function(a2) {
        return this.$g(a2, d[0], d[1]);
      };
    }), O2.extend = function(d, a2) {
      return d.$i || (d(a2, A2, O2), d.$i = true), O2;
    }, O2.locale = j, O2.isDayjs = H2, O2.unix = function(d) {
      return O2(1e3 * d);
    }, O2.en = z2[_], O2.Ls = z2, O2.p = {}, O2;
  });
})(me);
var V$1 = nt, it = {}, pe = { get exports() {
  return it;
}, set exports(t2) {
  it = t2;
} };
(function(t2, n2) {
  (function(e2, i2) {
    t2.exports = i2();
  })(K$2, function() {
    return function(e2, i2, h2) {
      var b2 = i2.prototype, y2 = function(u2) {
        var l2, g2 = u2.date, r2 = u2.utc, c2 = {};
        if (!((l2 = g2) instanceof Date || l2 instanceof Array || b2.$utils().u(l2) || l2.constructor.name !== "Object")) {
          if (!Object.keys(g2).length)
            return new Date();
          var I2 = r2 ? h2.utc() : h2();
          Object.keys(g2).forEach(function(O2) {
            var $2, A2;
            c2[$2 = O2, A2 = b2.$utils().p($2), A2 === "date" ? "day" : A2] = g2[O2];
          });
          var M2 = c2.day || (c2.year || c2.month >= 0 ? 1 : I2.date()), E2 = c2.year || I2.year(), U2 = c2.month >= 0 ? c2.month : c2.year || c2.day ? 0 : I2.month(), _ = c2.hour || 0, z2 = c2.minute || 0, H2 = c2.second || 0, j = c2.millisecond || 0;
          return r2 ? new Date(Date.UTC(E2, U2, M2, _, z2, H2, j)) : new Date(E2, U2, M2, _, z2, H2, j);
        }
        return g2;
      }, w2 = b2.parse;
      b2.parse = function(u2) {
        u2.date = y2.bind(this)(u2), w2.bind(this)(u2);
      };
      var p2 = b2.set, S2 = b2.add, k2 = b2.subtract, x2 = function(u2, l2, g2, r2) {
        r2 === void 0 && (r2 = 1);
        var c2 = Object.keys(l2), I2 = this;
        return c2.forEach(function(M2) {
          I2 = u2.bind(I2)(l2[M2] * r2, M2);
        }), I2;
      };
      b2.set = function(u2, l2) {
        return l2 = l2 === void 0 ? u2 : l2, u2.constructor.name === "Object" ? x2.bind(this)(function(g2, r2) {
          return p2.bind(this)(r2, g2);
        }, l2, u2) : p2.bind(this)(u2, l2);
      }, b2.add = function(u2, l2) {
        return u2.constructor.name === "Object" ? x2.bind(this)(S2, u2, l2) : S2.bind(this)(u2, l2);
      }, b2.subtract = function(u2, l2) {
        return u2.constructor.name === "Object" ? x2.bind(this)(S2, u2, l2, -1) : k2.bind(this)(u2, l2);
      };
    };
  });
})(pe);
var ve = it, rt = {}, ge = { get exports() {
  return rt;
}, set exports(t2) {
  rt = t2;
} };
(function(t2, n2) {
  (function(e2, i2) {
    t2.exports = i2();
  })(K$2, function() {
    var e2 = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, i2 = {};
    return function(h2, b2, y2) {
      var w2, p2 = function(u2, l2, g2) {
        g2 === void 0 && (g2 = {});
        var r2 = new Date(u2), c2 = function(I2, M2) {
          M2 === void 0 && (M2 = {});
          var E2 = M2.timeZoneName || "short", U2 = I2 + "|" + E2, _ = i2[U2];
          return _ || (_ = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: I2, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: E2 }), i2[U2] = _), _;
        }(l2, g2);
        return c2.formatToParts(r2);
      }, S2 = function(u2, l2) {
        for (var g2 = p2(u2, l2), r2 = [], c2 = 0; c2 < g2.length; c2 += 1) {
          var I2 = g2[c2], M2 = I2.type, E2 = I2.value, U2 = e2[M2];
          U2 >= 0 && (r2[U2] = parseInt(E2, 10));
        }
        var _ = r2[3], z2 = _ === 24 ? 0 : _, H2 = r2[0] + "-" + r2[1] + "-" + r2[2] + " " + z2 + ":" + r2[4] + ":" + r2[5] + ":000", j = +u2;
        return (y2.utc(H2).valueOf() - (j -= j % 1e3)) / 6e4;
      }, k2 = b2.prototype;
      k2.tz = function(u2, l2) {
        u2 === void 0 && (u2 = w2);
        var g2 = this.utcOffset(), r2 = this.toDate(), c2 = r2.toLocaleString("en-US", { timeZone: u2 }), I2 = Math.round((r2 - new Date(c2)) / 1e3 / 60), M2 = y2(c2).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(r2.getTimezoneOffset() / 15) - I2, true);
        if (l2) {
          var E2 = M2.utcOffset();
          M2 = M2.add(g2 - E2, "minute");
        }
        return M2.$x.$timezone = u2, M2;
      }, k2.offsetName = function(u2) {
        var l2 = this.$x.$timezone || y2.tz.guess(), g2 = p2(this.valueOf(), l2, { timeZoneName: u2 }).find(function(r2) {
          return r2.type.toLowerCase() === "timezonename";
        });
        return g2 && g2.value;
      };
      var x2 = k2.startOf;
      k2.startOf = function(u2, l2) {
        if (!this.$x || !this.$x.$timezone)
          return x2.call(this, u2, l2);
        var g2 = y2(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return x2.call(g2, u2, l2).tz(this.$x.$timezone, true);
      }, y2.tz = function(u2, l2, g2) {
        var r2 = g2 && l2, c2 = g2 || l2 || w2, I2 = S2(+y2(), c2);
        if (typeof u2 != "string")
          return y2(u2).tz(c2);
        var M2 = function(z2, H2, j) {
          var O2 = z2 - 60 * H2 * 1e3, $2 = S2(O2, j);
          if (H2 === $2)
            return [O2, H2];
          var A2 = S2(O2 -= 60 * ($2 - H2) * 1e3, j);
          return $2 === A2 ? [O2, $2] : [z2 - 60 * Math.min($2, A2) * 1e3, Math.max($2, A2)];
        }(y2.utc(u2, r2).valueOf(), I2, c2), E2 = M2[0], U2 = M2[1], _ = y2(E2).utcOffset(U2);
        return _.$x.$timezone = c2, _;
      }, y2.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, y2.tz.setDefault = function(u2) {
        w2 = u2;
      };
    };
  });
})(ge);
var $e = rt, st = {}, ye = { get exports() {
  return st;
}, set exports(t2) {
  st = t2;
} };
(function(t2, n2) {
  (function(e2, i2) {
    t2.exports = i2();
  })(K$2, function() {
    var e2 = "minute", i2 = /[+-]\d\d(?::?\d\d)?/g, h2 = /([+-]|\d\d)/g;
    return function(b2, y2, w2) {
      var p2 = y2.prototype;
      w2.utc = function(r2) {
        var c2 = { date: r2, utc: true, args: arguments };
        return new y2(c2);
      }, p2.utc = function(r2) {
        var c2 = w2(this.toDate(), { locale: this.$L, utc: true });
        return r2 ? c2.add(this.utcOffset(), e2) : c2;
      }, p2.local = function() {
        return w2(this.toDate(), { locale: this.$L, utc: false });
      };
      var S2 = p2.parse;
      p2.parse = function(r2) {
        r2.utc && (this.$u = true), this.$utils().u(r2.$offset) || (this.$offset = r2.$offset), S2.call(this, r2);
      };
      var k2 = p2.init;
      p2.init = function() {
        if (this.$u) {
          var r2 = this.$d;
          this.$y = r2.getUTCFullYear(), this.$M = r2.getUTCMonth(), this.$D = r2.getUTCDate(), this.$W = r2.getUTCDay(), this.$H = r2.getUTCHours(), this.$m = r2.getUTCMinutes(), this.$s = r2.getUTCSeconds(), this.$ms = r2.getUTCMilliseconds();
        } else
          k2.call(this);
      };
      var x2 = p2.utcOffset;
      p2.utcOffset = function(r2, c2) {
        var I2 = this.$utils().u;
        if (I2(r2))
          return this.$u ? 0 : I2(this.$offset) ? x2.call(this) : this.$offset;
        if (typeof r2 == "string" && (r2 = function(_) {
          _ === void 0 && (_ = "");
          var z2 = _.match(i2);
          if (!z2)
            return null;
          var H2 = ("" + z2[0]).match(h2) || ["-", 0, 0], j = H2[0], O2 = 60 * +H2[1] + +H2[2];
          return O2 === 0 ? 0 : j === "+" ? O2 : -O2;
        }(r2), r2 === null))
          return this;
        var M2 = Math.abs(r2) <= 16 ? 60 * r2 : r2, E2 = this;
        if (c2)
          return E2.$offset = M2, E2.$u = r2 === 0, E2;
        if (r2 !== 0) {
          var U2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (E2 = this.local().add(M2 + U2, e2)).$offset = M2, E2.$x.$localOffset = U2;
        } else
          E2 = this.utc();
        return E2;
      };
      var u2 = p2.format;
      p2.format = function(r2) {
        var c2 = r2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return u2.call(this, c2);
      }, p2.valueOf = function() {
        var r2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * r2;
      }, p2.isUTC = function() {
        return !!this.$u;
      }, p2.toISOString = function() {
        return this.toDate().toISOString();
      }, p2.toString = function() {
        return this.toDate().toUTCString();
      };
      var l2 = p2.toDate;
      p2.toDate = function(r2) {
        return r2 === "s" && this.$offset ? w2(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l2.call(this);
      };
      var g2 = p2.diff;
      p2.diff = function(r2, c2, I2) {
        if (r2 && this.$u === r2.$u)
          return g2.call(this, r2, c2, I2);
        var M2 = this.local(), E2 = w2(r2).local();
        return g2.call(M2, E2, c2, I2);
      };
    };
  });
})(ye);
var be = st;
V$1.extend(ve), V$1.extend(be), V$1.extend($e);
const ot = (t2, n2) => {
  if (t2) {
    if (V$1(t2 instanceof Date ? t2 : P$3(t2) ? t2.trim() : t2).isValid()) {
      const i2 = n2 ? V$1(t2).tz(n2) : V$1(t2), h2 = i2.year(), b2 = i2.month() + 1, y2 = i2.date(), w2 = i2.hour(), p2 = i2.minute(), S2 = i2.second(), k2 = i2.millisecond(), x2 = w2 === 0 && p2 === 0 && S2 === 0 && k2 === 0;
      return { value: i2.toDate(), info: { year: h2, month: b2, day: y2, ...x2 ? {} : { hour: w2, minute: p2, second: S2 } }, type: x2 ? "date" : "full" };
    }
    const e2 = /(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(t2.trim());
    if (e2) {
      const [, i2, h2, b2, y2, w2, p2] = e2, S2 = (c2) => typeof c2 > "u" ? void 0 : Number(c2), k2 = (c2) => c2 && c2 < 100 ? c2 + 2e3 : c2, x2 = (c2) => y2 && w2 && !p2 ? 0 : c2, u2 = { year: k2(S2(i2)), month: S2(h2), day: S2(b2), hour: S2(y2), minute: S2(w2), second: x2(S2(p2)) }, l2 = i2 === void 0 && h2 === void 0 && b2 === void 0, g2 = y2 === void 0 && w2 === void 0 && p2 === void 0, r2 = V$1({ ...u2, month: u2.month - 1 }).toDate();
      return { value: l2 ? void 0 : r2, info: g2 ? { year: u2.year, month: u2.month, day: u2.day } : l2 ? { hour: u2.hour, minute: u2.minute, second: u2.second } : u2, type: l2 ? "time" : g2 ? "date" : "full" };
    }
  }
  return null;
}, _t = (t2, n2) => P$3(t2) && t2.startsWith(n2), Oe = (t2, n2) => P$3(t2) && t2.endsWith(n2), Tt = Object.entries, at = Object.keys, ut = (t2, ...n2) => {
  if (n2.length === 0)
    return t2;
  const e2 = n2.shift() || null;
  return e2 && Tt(e2).forEach(([i2, h2]) => {
    i2 === "__proto__" || i2 === "constructor" || (J$1(t2[i2]) && J$1(h2) ? ut(t2[i2], h2) : et(h2) ? t2[i2] = [...h2] : J$1(h2) ? t2[i2] = { ...h2 } : t2[i2] = e2[i2]);
  }), ut(t2, ...n2);
}, Ct = (t2) => J$1(t2) && P$3(t2.name), De = (t2, n2 = false) => t2 ? et(t2) ? t2.map((e2) => P$3(e2) ? { name: e2 } : Ct(e2) ? e2 : null).filter((e2) => e2 !== null) : P$3(t2) ? [{ name: t2 }] : Ct(t2) ? [t2] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${n2 ? "" : "| false"} | undefined\`, but got`, t2), []) : [], ct = (t2, n2) => {
  if (t2) {
    if (et(t2) && t2.every(P$3))
      return t2;
    if (P$3(t2))
      return [t2];
    console.error(`Expect ${n2 || "value"} to be \`string[] | string | undefined\`, but got`, t2);
  }
  return [];
}, xe = (t2) => ct(t2, "category"), Ie = (t2) => ct(t2, "tag"), _e = (t2) => _t(t2, "/");
const zt = /#.*$/u, kt = (t2) => {
  const n2 = zt.exec(t2);
  return n2 ? n2[0] : "";
}, lt = (t2) => decodeURI(t2).replace(zt, "").replace(/(index)?\.(md|html)$/, ""), Ce = (t2, n2) => {
  if (n2 === void 0)
    return false;
  const e2 = lt(t2.path), i2 = lt(n2), h2 = kt(n2);
  return h2 ? h2 === t2.hash && (!i2 || e2 === i2) : e2 === i2;
};
const He = (t2) => {
  const n2 = Buffer.from(t2, "base64").toString("binary");
  return strFromU8(unzlibSync(strToU8(n2, true)));
}, Le = (t2) => Ot(t2) ? t2 : `https://github.com/${t2}`, Ne = (t2) => !Ot(t2) || /github\.com/.test(t2) ? "GitHub" : /bitbucket\.org/.test(t2) ? "Bitbucket" : /gitlab\.com/.test(t2) ? "GitLab" : /gitee\.com/.test(t2) ? "Gitee" : null, Ht = (t2, ...n2) => {
  const e2 = t2.resolve(...n2), i2 = e2.matched[e2.matched.length - 1];
  if (!(i2 != null && i2.redirect))
    return e2;
  const { redirect: h2 } = i2, b2 = Gt(h2) ? h2(e2) : h2, y2 = P$3(b2) ? { path: b2 } : b2;
  return Ht(t2, { hash: e2.hash, query: e2.query, params: e2.params, ...y2 });
};
var _a;
const isClient = typeof window !== "undefined";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const noop$2 = () => {
};
const isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop$2;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop$2;
  };
  const filter = (invoke) => {
    const duration = resolveUnref(ms);
    const maxDuration = resolveUnref(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function throttleFilter(ms, trailing = true, leading = true, rejectOnCancel = false) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop$2;
  let lastValue;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop$2;
    }
  };
  const filter = (_invoke) => {
    const duration = resolveUnref(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading, rejectOnCancel), fn);
}
function resolveRef(r2) {
  return typeof r2 === "function" ? computed(r2) : ref(r2);
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, resolveUnref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start,
    stop
  };
}
function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = isRef(initialValue);
  const _value = ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = resolveUnref(truthyValue);
      _value.value = _value.value === truthy ? resolveUnref(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter = bypassFilter
  } = _a2, watchOptions = __objRest$5(_a2, [
    "eventFilter"
  ]);
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$2.call(b2, prop))
      __defNormalProp$2(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b2)) {
      if (__propIsEnum$2.call(b2, prop))
        __defNormalProp$2(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps$2 = (a2, b2) => __defProps$2(a2, __getOwnPropDescs$2(b2));
var __objRest$1$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter: filter
  } = _a2, watchOptions = __objRest$1$1(_a2, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$2(__spreadValues$2({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
const defaultDocument = isClient ? window.document : void 0;
const defaultNavigator = isClient ? window.navigator : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop$2;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener, options2));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return;
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop$2));
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e2) => {
      const el = unrefElement(target);
      if (el)
        shouldListen = !e2.composedPath().includes(el) && !shouldIgnore(e2);
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      var _a2;
      const el = unrefElement(target);
      if (((_a2 = window2.document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", update);
    else
      mediaQuery.removeListener(update);
  };
  const update = () => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(resolveRef(query).value);
    matches.value = mediaQuery.matches;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
  };
  watchEffect(update);
  tryOnScopeDispose(() => cleanup());
  return matches;
}
function useClipboard(options = {}) {
  const {
    navigator: navigator2 = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500,
    legacy = false
  } = options;
  const events = ["copy", "cut"];
  const isClipboardApiSupported = useSupported(() => navigator2 && "clipboard" in navigator2);
  const isSupported = computed(() => isClipboardApiSupported.value || legacy);
  const text = ref("");
  const copied = ref(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    if (isClipboardApiSupported.value) {
      navigator2.clipboard.readText().then((value) => {
        text.value = value;
      });
    } else {
      text.value = legacyRead();
    }
  }
  if (isSupported.value && read) {
    for (const event of events)
      useEventListener(event, updateText);
  }
  async function copy(value = resolveUnref(source)) {
    if (isSupported.value && value != null) {
      if (isClipboardApiSupported.value)
        await navigator2.clipboard.writeText(value);
      else
        legacyCopy(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  function legacyCopy(value) {
    const ta = document.createElement("textarea");
    ta.value = value != null ? value : "";
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  function legacyRead() {
    var _a2, _b2, _c;
    return (_c = (_b2 = (_a2 = document == null ? void 0 : document.getSelection) == null ? void 0 : _a2.call(document)) == null ? void 0 : _b2.toString()) != null ? _c : "";
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var __defProp$k = Object.defineProperty;
var __getOwnPropSymbols$m = Object.getOwnPropertySymbols;
var __hasOwnProp$m = Object.prototype.hasOwnProperty;
var __propIsEnum$m = Object.prototype.propertyIsEnumerable;
var __defNormalProp$k = (obj, key, value) => key in obj ? __defProp$k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$k = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$m.call(b2, prop))
      __defNormalProp$k(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$m)
    for (var prop of __getOwnPropSymbols$m(b2)) {
      if (__propIsEnum$m.call(b2, prop))
        __defNormalProp$k(a2, prop, b2[prop]);
    }
  return a2;
};
const StorageSerializers = {
  boolean: {
    read: (v2) => v2 === "true",
    write: (v2) => String(v2)
  },
  object: {
    read: (v2) => JSON.parse(v2),
    write: (v2) => JSON.stringify(v2)
  },
  number: {
    read: (v2) => Number.parseFloat(v2),
    write: (v2) => String(v2)
  },
  any: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  string: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  map: {
    read: (v2) => new Map(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2.entries()))
  },
  set: {
    read: (v2) => new Set(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2))
  },
  date: {
    read: (v2) => new Date(v2),
    write: (v2) => v2.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e2) => {
      console.error(e2);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e2) {
      onError(e2);
    }
  }
  if (!storage)
    return data;
  const rawInit = resolveUnref(defaults);
  const type2 = guessSerializerType(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type2];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), { flush, deep, eventFilter });
  if (window2 && listenToStorageChanges) {
    useEventListener(window2, "storage", update);
    useEventListener(window2, customStorageEventName, updateFromCustomEvent);
  }
  update();
  return data;
  function write(v2) {
    try {
      if (v2 == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v2);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e2) {
      onError(e2);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit !== null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (isFunction(mergeDefaults))
        return mergeDefaults(value, rawInit);
      else if (type2 === "object" && !Array.isArray(value))
        return __spreadValues$k(__spreadValues$k({}, rawInit), value);
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      data.value = read(event);
    } catch (e2) {
      onError(e2);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
/* @__PURE__ */ new Map();
const functionsMap = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
function useFullscreen(target, options = {}) {
  const { document: document2 = defaultDocument, autoExit = false } = options;
  const targetRef = target || (document2 == null ? void 0 : document2.querySelector("html"));
  const isFullscreen = ref(false);
  let map = functionsMap[0];
  const isSupported = useSupported(() => {
    if (!document2) {
      return false;
    } else {
      for (const m2 of functionsMap) {
        if (m2[1] in document2) {
          map = m2;
          return true;
        }
      }
    }
    return false;
  });
  const [REQUEST, EXIT, ELEMENT, , EVENT] = map;
  async function exit() {
    if (!isSupported.value)
      return;
    if (document2 == null ? void 0 : document2[ELEMENT])
      await document2[EXIT]();
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported.value)
      return;
    await exit();
    const target2 = unrefElement(targetRef);
    if (target2) {
      await target2[REQUEST]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    if (isFullscreen.value)
      await exit();
    else
      await enter();
  }
  if (document2) {
    useEventListener(document2, EVENT, () => {
      isFullscreen.value = !!(document2 == null ? void 0 : document2[ELEMENT]);
    }, false);
  }
  if (autoExit)
    tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useMutationObserver(target, callback, options = {}) {
  const _a2 = options, { window: window2 = defaultWindow } = _a2, mutationOptions = __objRest$1(_a2, ["window"]);
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window2 && el) {
      observer = new MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, { immediate: true });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
function usePreferredLanguages(options = {}) {
  const { window: window2 = defaultWindow } = options;
  if (!window2)
    return ref(["en"]);
  const navigator2 = window2.navigator;
  const value = ref(navigator2.languages);
  useEventListener(window2, "languagechange", () => {
    value.value = navigator2.languages;
  });
  return value;
}
function checkOverflowScroll(ele) {
  const style = window.getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientHeight < ele.scrollHeight || style.overflowY === "auto" && ele.clientWidth < ele.scrollWidth) {
    return true;
  } else {
    const parent = ele.parentNode;
    if (!parent || parent.tagName === "BODY")
      return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e2 = rawEvent || window.event;
  const _target = e2.target;
  if (checkOverflowScroll(_target))
    return false;
  if (e2.touches.length > 1)
    return true;
  if (e2.preventDefault)
    e2.preventDefault();
  return false;
}
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow;
  watch(resolveRef(element), (el) => {
    if (el) {
      const ele = el;
      initialOverflow = ele.style.overflow;
      if (isLocked.value)
        ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const ele = resolveUnref(element);
    if (!ele || isLocked.value)
      return;
    if (isIOS) {
      stopTouchMoveListener = useEventListener(ele, "touchmove", (e2) => {
        preventDefault(e2);
      }, { passive: false });
    }
    ele.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const ele = resolveUnref(element);
    if (!ele || !isLocked.value)
      return;
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    ele.style.overflow = initialOverflow;
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v2) {
      if (v2)
        lock();
      else
        unlock();
    }
  });
}
function useSessionStorage(key, initialValue, options = {}) {
  const { window: window2 = defaultWindow } = options;
  return useStorage(key, initialValue, window2 == null ? void 0 : window2.sessionStorage, options);
}
let _id = 0;
function useStyleTag(css2, options = {}) {
  const isLoaded = ref(false);
  const {
    document: document2 = defaultDocument,
    immediate = true,
    manual = false,
    id = `vueuse_styletag_${++_id}`
  } = options;
  const cssRef = ref(css2);
  let stop = () => {
  };
  const load = () => {
    if (!document2)
      return;
    const el = document2.getElementById(id) || document2.createElement("style");
    if (!el.isConnected) {
      el.type = "text/css";
      el.id = id;
      if (options.media)
        el.media = options.media;
      document2.head.appendChild(el);
    }
    if (isLoaded.value)
      return;
    stop = watch(cssRef, (value) => {
      el.textContent = value;
    }, { immediate: true });
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document2 || !isLoaded.value)
      return;
    stop();
    document2.head.removeChild(document2.getElementById(id));
    isLoaded.value = false;
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnScopeDispose(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: readonly(isLoaded)
  };
}
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
function useWindowScroll({ window: window2 = defaultWindow } = {}) {
  if (!window2) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const x2 = ref(window2.scrollX);
  const y2 = ref(window2.scrollY);
  useEventListener(window2, "scroll", () => {
    x2.value = window2.scrollX;
    y2.value = window2.scrollY;
  }, {
    capture: false,
    passive: true
  });
  return { x: x2, y: y2 };
}
const badge = "";
const t$1 = ({ type: r2 = "info", text: e2 = "", vertical: i2 = "top", color: a2 }, { slots: l2 }) => {
  var o2;
  return h("span", { class: ["badge", r2, { diy: a2 }], style: { verticalAlign: i2, ...a2 ? { backgroundColor: a2 } : {} } }, e2 || ((o2 = l2.default) == null ? void 0 : o2.call(l2)));
};
t$1.displayName = "Badge";
const fontIcon = "";
var m$2 = defineComponent({ name: "FontIcon", props: { icon: { type: String, default: "" }, color: { type: String, default: "" }, size: { type: [String, Number], default: "" } }, setup(o2) {
  const c2 = computed(() => {
    const n2 = ["font-icon icon"], t2 = `${"iconfont icon-"}${o2.icon}`;
    return n2.push(t2), n2;
  }), r2 = computed(() => {
    const n2 = {};
    return o2.color && (n2.color = o2.color), o2.size && (n2["font-size"] = Number.isNaN(Number(o2.size)) ? o2.size : `${o2.size}px`), at(n2).length ? n2 : null;
  });
  return () => o2.icon ? h("span", { key: o2.icon, class: c2.value, style: r2.value, ...{} }) : null;
} });
const l$2 = () => h(G$1, { name: "back-to-top" }, () => [h("path", { d: "M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z" }), h("path", { d: "m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z" })]);
l$2.displayName = "BackToTopIcon";
const balloon = "";
const backToTop = "";
var T$3 = defineComponent({ name: "BackToTop", props: { threshold: { type: Number, default: 300 } }, setup(a2) {
  const t2 = usePageFrontmatter(), e2 = ne({ "/": {} }), { y: r2 } = useWindowScroll(), l2 = computed(() => t2.value.backToTop !== false && r2.value > a2.threshold);
  return () => h(Transition, { name: "fade" }, () => l2.value ? h("button", { class: "back-to-top", "aria-label": e2.value.backToTop, "data-balloon-pos": "left", onClick: () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } }, h(l$2)) : null);
} });
const srOnly = "";
const clientConfig1 = defineClientConfig({
  enhance: ({ app }) => {
    if (!Vt("Badge"))
      app.component("Badge", t$1);
    if (!Vt("FontIcon"))
      app.component("FontIcon", m$2);
  },
  setup: () => {
    useStyleTag(`  @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(T$3, { threshold: 300 })
  ]
});
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a2;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof global !== "undefined" && ((_a2 = global.perf_hooks) === null || _a2 === void 0 ? void 0 : _a2.performance)) {
    supported = true;
    perf = global.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
class ApiProxy {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id in plugin.settings) {
        const item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e2) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e2) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy)
      setupFn(proxy.proxiedTarget);
  }
}
/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser$1 = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray$1(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop$1 = () => {
};
const isArray$1 = Array.isArray;
function warn(msg) {
  const args = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + msg].concat(args));
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const hashPos = location.indexOf("#");
  let searchPos = location.indexOf("?");
  if (hashPos < searchPos && hashPos >= 0) {
    searchPos = -1;
  }
  if (searchPos > -1) {
    path = location.slice(0, searchPos);
    searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location.slice(0, hashPos);
    hash = location.slice(hashPos, location.length);
  }
  path = resolveRelativePath(path != null ? path : location, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location) {
  const query = location.query ? stringifyQuery2(location.query) : "";
  return location.path + (query && "?") + query + (location.hash || "");
}
function isSameRouteLocation(stringifyQuery2, a2, b2) {
  const aLastIndex = a2.matched.length - 1;
  const bLastIndex = b2.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord$1(a2.matched[aLastIndex], b2.matched[bLastIndex]) && isSameRouteLocationParams$1(a2.params, b2.params) && stringifyQuery2(a2.query) === stringifyQuery2(b2.query) && a2.hash === b2.hash;
}
function isSameRouteRecord$1(a2, b2) {
  return (a2.aliasOf || a2) === (b2.aliasOf || b2);
}
function isSameRouteLocationParams$1(a2, b2) {
  if (Object.keys(a2).length !== Object.keys(b2).length)
    return false;
  for (const key in a2) {
    if (!isSameRouteLocationParamsValue$1(a2[key], b2[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue$1(a2, b2) {
  return isArray$1(a2) ? isEquivalentArray$1(a2, b2) : isArray$1(b2) ? isEquivalentArray$1(b2, a2) : a2 === b2;
}
function isEquivalentArray$1(a2, b2) {
  return isArray$1(b2) ? a2.length === b2.length && a2.every((value, i2) => value === b2[i2]) : a2.length === 1 && a2[0] === b2;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (process.env.NODE_ENV !== "production" && !from.startsWith("/")) {
    warn(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
    return to;
  }
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  const lastToSegment = toSegments[toSegments.length - 1];
  if (lastToSegment === ".." || lastToSegment === ".") {
    toSegments.push("");
  }
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".")
      continue;
    if (segment === "..") {
      if (position > 1)
        position--;
    } else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType$1;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType$1 || (NavigationType$1 = {}));
var NavigationDirection$1;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection$1 || (NavigationDirection$1 = {}));
const START = "";
function normalizeBase(base) {
  if (!base) {
    if (isBrowser$1) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
  return base.replace(BEFORE_HASH_RE, "#") + location;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof position.el === "string") {
      if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
        try {
          const foundEl = document.querySelector(position.el);
          if (isIdSelector && foundEl) {
            warn(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
            return;
          }
        } catch (err2) {
          warn(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
          return;
        }
      }
    }
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      process.env.NODE_ENV !== "production" && warn(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
function createMemoryHistory(base = "") {
  let listeners = [];
  let queue2 = [START];
  let position = 0;
  base = normalizeBase(base);
  function setLocation(location) {
    position++;
    if (position === queue2.length) {
      queue2.push(location);
    } else {
      queue2.splice(position);
      queue2.push(location);
    }
  }
  function triggerListeners(to, from, { direction, delta }) {
    const info = {
      direction,
      delta,
      type: NavigationType$1.pop
    };
    for (const callback of listeners) {
      callback(to, from, info);
    }
  }
  const routerHistory = {
    // rewritten by Object.defineProperty
    location: START,
    // TODO: should be kept in queue
    state: {},
    base,
    createHref: createHref.bind(null, base),
    replace(to) {
      queue2.splice(position--, 1);
      setLocation(to);
    },
    push(to, data) {
      setLocation(to);
    },
    listen(callback) {
      listeners.push(callback);
      return () => {
        const index2 = listeners.indexOf(callback);
        if (index2 > -1)
          listeners.splice(index2, 1);
      };
    },
    destroy() {
      listeners = [];
      queue2 = [START];
      position = 0;
    },
    go(delta, shouldTrigger = true) {
      const from = this.location;
      const direction = (
        // we are considering delta === 0 going forward, but in abstract mode
        // using 0 for the delta doesn't make sense like it does in html5 where
        // it reloads the page
        delta < 0 ? NavigationDirection$1.back : NavigationDirection$1.forward
      );
      position = Math.max(0, Math.min(position + delta, queue2.length - 1));
      if (shouldTrigger) {
        triggerListeners(this.location, from, {
          direction,
          delta
        });
      }
    }
  };
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => queue2[position]
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var NavigationFailureType$1;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType$1 || (NavigationFailureType$1 = {}));
const ErrorTypeMessages = {
  [
    1
    /* ErrorTypes.MATCHER_NOT_FOUND */
  ]({ location, currentLocation }) {
    return `No match for
 ${JSON.stringify(location)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
  },
  [
    2
    /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
  ]({ from, to }) {
    return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
  },
  [
    4
    /* ErrorTypes.NAVIGATION_ABORTED */
  ]({ from, to }) {
    return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
  },
  [
    8
    /* ErrorTypes.NAVIGATION_CANCELLED */
  ]({ from, to }) {
    return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
  },
  [
    16
    /* ErrorTypes.NAVIGATION_DUPLICATED */
  ]({ from, to }) {
    return `Avoided redundant navigation to current location: "${from.fullPath}".`;
  }
};
function createRouterError(type2, params) {
  if (process.env.NODE_ENV !== "production" || false) {
    return assign(new Error(ErrorTypeMessages[type2](params)), {
      type: type2,
      [NavigationFailureSymbol]: true
    }, params);
  } else {
    return assign(new Error(), {
      type: type2,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type2) {
  return error instanceof Error && NavigationFailureSymbol in error && (type2 == null || !!(error.type & type2));
}
const propertiesToLog = ["params", "query", "hash"];
function stringifyRoute(to) {
  if (typeof to === "string")
    return to;
  if ("path" in to)
    return to.path;
  const location = {};
  for (const key of propertiesToLog) {
    if (key in to)
      location[key] = to[key];
  }
  return JSON.stringify(location, null, 2);
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [
      90
      /* PathScore.Root */
    ];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re3 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re3 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re3})`);
          } catch (err2) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re3}): ` + err2.message);
          }
        }
        let subPattern = repeatable ? `((?:${re3})(?:/(?:${re3}))*)` : `(${re3})`;
        if (!tokenIndex)
          subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re3 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i2 = score.length - 1;
    score[i2][score[i2].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re2 = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re2);
    const params = {};
    if (!match)
      return null;
    for (let i2 = 1; i2 < match.length; i2++) {
      const value = match[i2] || "";
      const key = keys[i2 - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (isArray$1(param) && !repeatable) {
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const text = isArray$1(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path || "/";
  }
  return {
    re: re2,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a2, b2) {
  let i2 = 0;
  while (i2 < a2.length && i2 < b2.length) {
    const diff = b2[i2] - a2[i2];
    if (diff)
      return diff;
    i2++;
  }
  if (a2.length < b2.length) {
    return a2.length === 1 && a2[0] === 40 + 40 ? -1 : 1;
  } else if (a2.length > b2.length) {
    return b2.length === 1 && b2[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a2, b2) {
  let i2 = 0;
  const aScore = a2.score;
  const bScore = b2.score;
  while (i2 < aScore.length && i2 < bScore.length) {
    const comp = compareScoreArray(aScore[i2], bScore[i2]);
    if (comp)
      return comp;
    i2++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${path}" should be "/${path}".` : `Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i2 = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i2 < path.length) {
    char = path[i2++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i2--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i2--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  if (process.env.NODE_ENV !== "production") {
    const existingKeys = /* @__PURE__ */ new Set();
    for (const key of parser.keys) {
      if (existingKeys.has(key.name))
        warn(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
      existingKeys.add(key.name);
    }
  }
  const matcher = assign(parser, {
    record,
    parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    if (process.env.NODE_ENV !== "production") {
      checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent);
    }
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          // we might be the child of an alias
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      if (process.env.NODE_ENV !== "production" && normalizedRecord.path === "*") {
        throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\nSee more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (process.env.NODE_ENV !== "production" && parent && path[0] === "/")
        checkMissingParamsInAbsolutePath(matcher, parent);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
        if (process.env.NODE_ENV !== "production") {
          checkSameParams(originalRecord, matcher);
        }
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i2 = 0; i2 < children.length; i2++) {
          addRoute(children[i2], matcher, originalRecord && originalRecord.children[i2]);
        }
      }
      originalRecord = originalRecord || matcher;
      if (matcher.record.components && Object.keys(matcher.record.components).length || matcher.record.name || matcher.record.redirect) {
        insertMatcher(matcher);
      }
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$1;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index2 = matchers.indexOf(matcherRef);
      if (index2 > -1) {
        matchers.splice(index2, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i2 = 0;
    while (i2 < matchers.length && comparePathParserScore(matcher, matchers[i2]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (matcher.record.path !== matchers[i2].record.path || !isRecordChildOf(matcher, matchers[i2])))
      i2++;
    matchers.splice(i2, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve(location, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location && location.name) {
      matcher = matcherMap.get(location.name);
      if (!matcher)
        throw createRouterError(1, {
          location
        });
      if (process.env.NODE_ENV !== "production") {
        const invalidParams = Object.keys(location.params || {}).filter((paramName) => !matcher.keys.find((k2) => k2.name === paramName));
        if (invalidParams.length) {
          warn(`Discarded invalid param(s) "${invalidParams.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
        }
      }
      name = matcher.record.name;
      params = assign(
        // paramsFromLocation is a new object
        paramsFromLocation(
          currentLocation.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          matcher.keys.filter((k2) => !k2.optional).map((k2) => k2.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        location.params && paramsFromLocation(location.params, matcher.keys.map((k2) => k2.name))
      );
      path = matcher.stringify(params);
    } else if ("path" in location) {
      path = location.path;
      if (process.env.NODE_ENV !== "production" && !path.startsWith("/")) {
        warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`);
      }
      matcher = matchers.find((m2) => m2.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m2) => m2.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "boolean" ? props : props[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function isSameParam(a2, b2) {
  return a2.name === b2.name && a2.optional === b2.optional && a2.repeatable === b2.repeatable;
}
function checkSameParams(a2, b2) {
  for (const key of a2.keys) {
    if (!key.optional && !b2.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b2.record.path}" and the original record: "${a2.record.path}" must have the exact same param named "${key.name}"`);
  }
  for (const key of b2.keys) {
    if (!key.optional && !a2.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b2.record.path}" and the original record: "${a2.record.path}" must have the exact same param named "${key.name}"`);
  }
}
function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
  if (parent && parent.record.name && !mainNormalizedRecord.name && !mainNormalizedRecord.path) {
    warn(`The route named "${String(parent.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
  }
}
function checkMissingParamsInAbsolutePath(record, parent) {
  for (const key of parent.keys) {
    if (!record.keys.find(isSameParam.bind(null, key)))
      return warn(`Absolute path "${record.record.path}" must have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
  }
}
function isRecordChildOf(record, parent) {
  return parent.children.some((child) => child === record || isRecordChildOf(record, child));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err2) {
    process.env.NODE_ENV !== "production" && warn(`Error decoding "${text}". Using original value`);
  }
  return "" + text;
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i2 = 0; i2 < searchParams.length; ++i2) {
    const searchParam = searchParams[i2].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray$1(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = isArray$1(value) ? value.map((v2) => v2 && encodeQueryValue(v2)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = isArray$1(value) ? value.map((v2) => v2 == null ? null : "" + v2) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
const viewDepthKey = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const routerKey$1 = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const routeLocationKey$1 = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
const routerViewLocationKey = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function useCallbacks() {
  let handlers2 = [];
  function add(handler) {
    handlers2.push(handler);
    return () => {
      const i2 = handlers2.indexOf(handler);
      if (i2 > -1)
        handlers2.splice(i2, 1);
    };
  }
  function reset() {
    handlers2 = [];
  }
  return {
    add,
    list: () => handlers2,
    reset
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && // name is defined if record is because of the function overload
  (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve, reject) => {
    const next = (valid) => {
      if (valid === false) {
        reject(createRouterError(4, {
          from,
          to
        }));
      } else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
        record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
          enterCallbackArray.push(valid);
        }
        resolve();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, process.env.NODE_ENV !== "production" ? canOnlyBeCalledOnce(next, to, from) : next);
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    if (process.env.NODE_ENV !== "production" && guard.length > 2) {
      const message = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ""}:
${guard.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof guardReturn === "object" && "then" in guardReturn) {
        guardCall = guardCall.then((resolvedValue) => {
          if (!next._called) {
            warn(message);
            return Promise.reject(new Error("Invalid navigation guard"));
          }
          return resolvedValue;
        });
      } else if (guardReturn !== void 0) {
        if (!next._called) {
          warn(message);
          reject(new Error("Invalid navigation guard"));
          return;
        }
      }
    }
    guardCall.catch((err2) => reject(err2));
  });
}
function canOnlyBeCalledOnce(next, to, from) {
  let called = 0;
  return function() {
    if (called++ === 1)
      warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
    next._called = true;
    if (called === 1)
      next.apply(null, arguments);
  };
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    if (process.env.NODE_ENV !== "production" && !record.components && !record.children.length) {
      warn(`Record with path "${record.path}" is either missing a "component(s)" or "children" property.`);
    }
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (process.env.NODE_ENV !== "production") {
        if (!rawComponent || typeof rawComponent !== "object" && typeof rawComponent !== "function") {
          warn(`Component "${name}" in record with path "${record.path}" is not a valid component. Received "${String(rawComponent)}".`);
          throw new Error("Invalid route component");
        } else if ("then" in rawComponent) {
          warn(`Component "${name}" in record with path "${record.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const promise2 = rawComponent;
          rawComponent = () => promise2;
        } else if (rawComponent.__asyncLoader && // warn only once per component
        !rawComponent.__warnedDefineAsync) {
          rawComponent.__warnedDefineAsync = true;
          warn(`Component "${name}" in record with path "${record.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`);
        }
      }
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        if (process.env.NODE_ENV !== "production" && !("catch" in componentPromise)) {
          warn(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
          componentPromise = Promise.resolve(componentPromise);
        }
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink$1(props) {
  const router = inject(routerKey$1);
  const currentRoute = inject(routeLocationKey$1);
  const route = computed(() => router.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index2 = currentMatched.findIndex(isSameRouteRecord$1.bind(null, routeMatched));
    if (index2 > -1)
      return index2;
    const parentRecordPath = getOriginalPath$1(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath$1(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord$1.bind(null, matched[length - 2])) : index2
    );
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams$1(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams$1(currentRoute.params, route.value.params));
  function navigate(e2 = {}) {
    if (guardEvent$1(e2)) {
      return router[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(noop$1);
    }
    return Promise.resolve();
  }
  if ((process.env.NODE_ENV !== "production" || false) && isBrowser$1) {
    const instance = getCurrentInstance();
    if (instance) {
      const linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value
      };
      instance.__vrl_devtools = instance.__vrl_devtools || [];
      instance.__vrl_devtools.push(linkContextDevtools);
      watchEffect(() => {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
      }, { flush: "post" });
    }
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl$1 = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: useLink$1,
  setup(props, { slots }) {
    const link = reactive(useLink$1(props));
    const { options } = inject(routerKey$1);
    const elClass = computed(() => ({
      [getLinkClass$1(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [getLinkClass$1(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink$1 = RouterLinkImpl$1;
function guardEvent$1(e2) {
  if (e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey)
    return;
  if (e2.defaultPrevented)
    return;
  if (e2.button !== void 0 && e2.button !== 0)
    return;
  if (e2.currentTarget && e2.currentTarget.getAttribute) {
    const target = e2.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e2.preventDefault)
    e2.preventDefault();
  return true;
}
function includesParams$1(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray$1(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2]))
        return false;
    }
  }
  return true;
}
function getOriginalPath$1(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass$1 = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    process.env.NODE_ENV !== "production" && warnDeprecatedUsage();
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
        initialDepth++;
      }
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && // if there is no instance but to and from are the same this might be
      // the first visit
      (!from || !isSameRouteRecord$1(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      if ((process.env.NODE_ENV !== "production" || false) && isBrowser$1 && component.ref) {
        const info = {
          depth: depth.value,
          name: matchedRoute.name,
          path: matchedRoute.path,
          meta: matchedRoute.meta
        };
        const internalInstances = isArray$1(component.ref) ? component.ref.map((r2) => r2.i) : [component.ref.i];
        internalInstances.forEach((instance) => {
          instance.__vrv_devtools = info;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, { Component: component, route }) || component
      );
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function warnDeprecatedUsage() {
  const instance = getCurrentInstance();
  const parentName = instance.parent && instance.parent.type.name;
  const parentSubTreeType = instance.parent && instance.parent.subTree && instance.parent.subTree.type;
  if (parentName && (parentName === "KeepAlive" || parentName.includes("Transition")) && typeof parentSubTreeType === "object" && parentSubTreeType.name === "RouterView") {
    const comp = parentName === "KeepAlive" ? "keep-alive" : "transition";
    warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${comp}>
    <component :is="Component" />
  </${comp}>
</router-view>`);
  }
}
function formatRouteLocation(routeLocation, tooltip) {
  const copy = assign({}, routeLocation, {
    // remove variables that can contain vue instances
    matched: routeLocation.matched.map((matched) => omit(matched, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: true,
      display: routeLocation.fullPath,
      tooltip,
      value: copy
    }
  };
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
let routerId = 0;
function addDevtools(app, router, matcher) {
  if (router.__hasDevtools)
    return;
  router.__hasDevtools = true;
  const id = routerId++;
  setupDevtoolsPlugin({
    id: "org.vuejs.router" + (id ? "." + id : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app
  }, (api) => {
    if (typeof api.now !== "function") {
      console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
    }
    api.on.inspectComponent((payload, ctx) => {
      if (payload.instanceData) {
        payload.instanceData.state.push({
          type: "Routing",
          key: "$route",
          editable: false,
          value: formatRouteLocation(router.currentRoute.value, "Current Route")
        });
      }
    });
    api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
      if (componentInstance.__vrv_devtools) {
        const info = componentInstance.__vrv_devtools;
        node.tags.push({
          label: (info.name ? `${info.name.toString()}: ` : "") + info.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: PINK_500
        });
      }
      if (isArray$1(componentInstance.__vrl_devtools)) {
        componentInstance.__devtoolsApi = api;
        componentInstance.__vrl_devtools.forEach((devtoolsData) => {
          let backgroundColor = ORANGE_400;
          let tooltip = "";
          if (devtoolsData.isExactActive) {
            backgroundColor = LIME_500;
            tooltip = "This is exactly active";
          } else if (devtoolsData.isActive) {
            backgroundColor = BLUE_600;
            tooltip = "This link is active";
          }
          node.tags.push({
            label: devtoolsData.route.path,
            textColor: 0,
            tooltip,
            backgroundColor
          });
        });
      }
    });
    watch(router.currentRoute, () => {
      refreshRoutesView();
      api.notifyComponentUpdate();
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
    const navigationsLayerId = "router:navigations:" + id;
    api.addTimelineLayer({
      id: navigationsLayerId,
      label: `Router${id ? " " + id : ""} Navigations`,
      color: 4237508
    });
    router.onError((error, to) => {
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "Error during Navigation",
          subtitle: to.fullPath,
          logType: "error",
          time: api.now(),
          data: { error },
          groupId: to.meta.__navigationId
        }
      });
    });
    let navigationId = 0;
    router.beforeEach((to, from) => {
      const data = {
        guard: formatDisplay("beforeEach"),
        from: formatRouteLocation(from, "Current Location during this navigation"),
        to: formatRouteLocation(to, "Target location")
      };
      Object.defineProperty(to.meta, "__navigationId", {
        value: navigationId++
      });
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          time: api.now(),
          title: "Start of navigation",
          subtitle: to.fullPath,
          data,
          groupId: to.meta.__navigationId
        }
      });
    });
    router.afterEach((to, from, failure) => {
      const data = {
        guard: formatDisplay("afterEach")
      };
      if (failure) {
        data.failure = {
          _custom: {
            type: Error,
            readOnly: true,
            display: failure ? failure.message : "",
            tooltip: "Navigation Failure",
            value: failure
          }
        };
        data.status = formatDisplay("❌");
      } else {
        data.status = formatDisplay("✅");
      }
      data.from = formatRouteLocation(from, "Current Location during this navigation");
      data.to = formatRouteLocation(to, "Target location");
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "End of navigation",
          subtitle: to.fullPath,
          time: api.now(),
          data,
          logType: failure ? "warning" : "default",
          groupId: to.meta.__navigationId
        }
      });
    });
    const routerInspectorId = "router-inspector:" + id;
    api.addInspector({
      id: routerInspectorId,
      label: "Routes" + (id ? " " + id : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function refreshRoutesView() {
      if (!activeRoutesPayload)
        return;
      const payload = activeRoutesPayload;
      let routes = matcher.getRoutes().filter((route) => !route.parent);
      routes.forEach(resetMatchStateOnRouteRecord);
      if (payload.filter) {
        routes = routes.filter((route) => (
          // save matches state based on the payload
          isRouteMatching(route, payload.filter.toLowerCase())
        ));
      }
      routes.forEach((route) => markRouteRecordActive(route, router.currentRoute.value));
      payload.rootNodes = routes.map(formatRouteRecordForInspector);
    }
    let activeRoutesPayload;
    api.on.getInspectorTree((payload) => {
      activeRoutesPayload = payload;
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        refreshRoutesView();
      }
    });
    api.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        const routes = matcher.getRoutes();
        const route = routes.find((route2) => route2.record.__vd_id === payload.nodeId);
        if (route) {
          payload.state = {
            options: formatRouteRecordMatcherForStateInspector(route)
          };
        }
      }
    });
    api.sendInspectorTree(routerInspectorId);
    api.sendInspectorState(routerInspectorId);
  });
}
function modifierForKey(key) {
  if (key.optional) {
    return key.repeatable ? "*" : "?";
  } else {
    return key.repeatable ? "+" : "";
  }
}
function formatRouteRecordMatcherForStateInspector(route) {
  const { record } = route;
  const fields = [
    { editable: false, key: "path", value: record.path }
  ];
  if (record.name != null) {
    fields.push({
      editable: false,
      key: "name",
      value: record.name
    });
  }
  fields.push({ editable: false, key: "regexp", value: route.re });
  if (route.keys.length) {
    fields.push({
      editable: false,
      key: "keys",
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.keys.map((key) => `${key.name}${modifierForKey(key)}`).join(" "),
          tooltip: "Param keys",
          value: route.keys
        }
      }
    });
  }
  if (record.redirect != null) {
    fields.push({
      editable: false,
      key: "redirect",
      value: record.redirect
    });
  }
  if (route.alias.length) {
    fields.push({
      editable: false,
      key: "aliases",
      value: route.alias.map((alias) => alias.record.path)
    });
  }
  if (Object.keys(route.record.meta).length) {
    fields.push({
      editable: false,
      key: "meta",
      value: route.record.meta
    });
  }
  fields.push({
    key: "score",
    editable: false,
    value: {
      _custom: {
        type: null,
        readOnly: true,
        display: route.score.map((score) => score.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: route.score
      }
    }
  });
  return fields;
}
const PINK_500 = 15485081;
const BLUE_600 = 2450411;
const LIME_500 = 8702998;
const CYAN_400 = 2282478;
const ORANGE_400 = 16486972;
const DARK = 6710886;
function formatRouteRecordForInspector(route) {
  const tags = [];
  const { record } = route;
  if (record.name != null) {
    tags.push({
      label: String(record.name),
      textColor: 0,
      backgroundColor: CYAN_400
    });
  }
  if (record.aliasOf) {
    tags.push({
      label: "alias",
      textColor: 0,
      backgroundColor: ORANGE_400
    });
  }
  if (route.__vd_match) {
    tags.push({
      label: "matches",
      textColor: 0,
      backgroundColor: PINK_500
    });
  }
  if (route.__vd_exactActive) {
    tags.push({
      label: "exact",
      textColor: 0,
      backgroundColor: LIME_500
    });
  }
  if (route.__vd_active) {
    tags.push({
      label: "active",
      textColor: 0,
      backgroundColor: BLUE_600
    });
  }
  if (record.redirect) {
    tags.push({
      label: typeof record.redirect === "string" ? `redirect: ${record.redirect}` : "redirects",
      textColor: 16777215,
      backgroundColor: DARK
    });
  }
  let id = record.__vd_id;
  if (id == null) {
    id = String(routeRecordId++);
    record.__vd_id = id;
  }
  return {
    id,
    label: record.path,
    tags,
    children: route.children.map(formatRouteRecordForInspector)
  };
}
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
  const isExactActive = currentRoute.matched.length && isSameRouteRecord$1(currentRoute.matched[currentRoute.matched.length - 1], route.record);
  route.__vd_exactActive = route.__vd_active = isExactActive;
  if (!isExactActive) {
    route.__vd_active = currentRoute.matched.some((match) => isSameRouteRecord$1(match, route.record));
  }
  route.children.forEach((childRoute) => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
  route.__vd_match = false;
  route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
  const found = String(route.re).match(EXTRACT_REGEXP_RE);
  route.__vd_match = false;
  if (!found || found.length < 3) {
    return false;
  }
  const nonEndingRE = new RegExp(found[1].replace(/\$$/, ""), found[2]);
  if (nonEndingRE.test(filter)) {
    route.children.forEach((child) => isRouteMatching(child, filter));
    if (route.record.path !== "/" || filter === "/") {
      route.__vd_match = route.re.test(filter);
      return true;
    }
    return false;
  }
  const path = route.record.path.toLowerCase();
  const decodedPath = decode(path);
  if (!filter.startsWith("/") && (decodedPath.includes(filter) || path.includes(filter)))
    return true;
  if (decodedPath.startsWith(filter) || path.startsWith(filter))
    return true;
  if (route.record.name && String(route.record.name).includes(filter))
    return true;
  return route.children.some((child) => isRouteMatching(child, filter));
}
function omit(obj, keys) {
  const ret = {};
  for (const key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
}
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  if (process.env.NODE_ENV !== "production" && !routerHistory)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser$1 && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = (
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode)
  );
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    } else if (process.env.NODE_ENV !== "production") {
      warn(`Cannot remove non-existent route "${String(name)}"`);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      if (process.env.NODE_ENV !== "production") {
        if (href2.startsWith("//"))
          warn(`Location "${rawLocation}" resolved to "${href2}". A resolved location cannot start with multiple slashes.`);
        else if (!matchedRoute2.matched.length) {
          warn(`No match found for location with path "${rawLocation}"`);
        }
      }
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      if (process.env.NODE_ENV !== "production" && "params" in rawLocation && !("name" in rawLocation) && // @ts-expect-error: the type is never
      Object.keys(rawLocation.params).length) {
        warn(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
      }
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(targetParams)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    if (process.env.NODE_ENV !== "production" && hash && !hash.startsWith("#")) {
      warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
    }
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    if (process.env.NODE_ENV !== "production") {
      if (href.startsWith("//")) {
        warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
      } else if (!matchedRoute.matched.length) {
        warn(`No match found for location with path "${"path" in rawLocation ? rawLocation.path : rawLocation}"`);
      }
    }
    return assign({
      fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      )
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : (
          // force empty params
          { path: newTargetLocation }
        );
        newTargetLocation.params = {};
      }
      if (process.env.NODE_ENV !== "production" && !("path" in newTargetLocation) && !("name" in newTargetLocation)) {
        warn(`Invalid redirect found:
${JSON.stringify(newTargetLocation, null, 2)}
 when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
        throw new Error("Invalid redirect");
      }
      return assign({
        query: to.query,
        hash: to.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in newTargetLocation ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(
        assign(locationAsObject(shouldRedirect), {
          state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
          force,
          replace: replace2
        }),
        // keep original redirectedFrom if it exists
        redirectedFrom || targetLocation
      );
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(
        from,
        from,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        true,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        false
      );
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? (
      // navigation redirects still mark the router as ready
      isNavigationFailure(
        error,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? error : markAsReady(error)
    ) : (
      // reject any unknown error
      triggerError(error, toLocation, from)
    )).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(
          failure2,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          if (process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          isSameRouteLocation(stringifyQuery$1, resolve(failure2.to), toLocation) && // and we have done it a couple of times
          redirectedFrom && // @ts-expect-error: added only in dev
          (redirectedFrom._count = redirectedFrom._count ? (
            // @ts-expect-error
            redirectedFrom._count + 1
          ) : 1) > 30) {
            warn(`Detected a possibly infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`);
            return Promise.reject(new Error("Infinite redirect in navigation guard"));
          }
          return pushWithRedirect(
            // keep options
            assign({
              // preserve an existing replacement but allow the redirect to override it
              replace: replace2
            }, locationAsObject(failure2.to), {
              state: typeof failure2.to === "object" ? assign({}, data, failure2.to.state) : data,
              force
            }),
            // preserve the original redirectedFrom if any
            redirectedFrom || toLocation
          );
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function runWithContext(fn) {
    const app = installedApps.values().next().value;
    return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to.matched) {
        if (record.beforeEnter && !from.matched.includes(record)) {
          if (isArray$1(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err2) => isNavigationFailure(
      err2,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? err2 : Promise.reject(err2));
  }
  function triggerAfterEach(to, from, failure) {
    for (const guard of afterGuards.list()) {
      runWithContext(() => guard(to, from, failure));
    }
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser$1 ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router.listening)
        return;
      const toLocation = resolve(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop$1);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser$1) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(
          error,
          4 | 8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        )) {
          return error;
        }
        if (isNavigationFailure(
          error,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          pushWithRedirect(
            error.to,
            toLocation
            // avoid an uncaught rejection, let push call triggerError
          ).then((failure) => {
            if (isNavigationFailure(
              failure,
              4 | 16
              /* ErrorTypes.NAVIGATION_DUPLICATED */
            ) && !info.delta && info.type === NavigationType$1.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop$1);
          return Promise.reject();
        }
        if (info.delta) {
          routerHistory.go(-info.delta, false);
        }
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(
          // after navigation, all matched components are resolved
          toLocation,
          from,
          false
        );
        if (failure) {
          if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
          // entry while a different route is displayed
          !isNavigationFailure(
            failure,
            8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          )) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType$1.pop && isNavigationFailure(
            failure,
            4 | 16
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          )) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$1);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      if (process.env.NODE_ENV !== "production") {
        warn("uncaught error during route navigation:");
      }
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve2, reject) => {
      readyHandlers.add([resolve2, reject]);
    });
  }
  function markAsReady(err2) {
    if (!ready) {
      ready = !err2;
      setupListeners();
      readyHandlers.list().forEach(([resolve2, reject]) => err2 ? reject(err2) : resolve2());
      readyHandlers.reset();
    }
    return err2;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser$1 || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err2) => triggerError(err2, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app) {
      const router2 = this;
      app.component("RouterLink", RouterLink$1);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router2;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser$1 && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err2) => {
          if (process.env.NODE_ENV !== "production")
            warn("Unexpected error when starting the router:", err2);
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed(() => currentRoute.value[key]);
      }
      app.provide(routerKey$1, router2);
      app.provide(routeLocationKey$1, reactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
      if ((process.env.NODE_ENV !== "production" || false) && isBrowser$1) {
        addDevtools(app, router2, matcher);
      }
    }
  };
  function runGuardQueue(guards) {
    return guards.reduce((promise2, guard) => promise2.then(() => runWithContext(guard)), Promise.resolve());
  }
  return router;
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i2 = 0; i2 < len; i2++) {
    const recordFrom = from.matched[i2];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord$1(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i2];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord$1(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter$1() {
  return inject(routerKey$1);
}
function useRoute() {
  return inject(routeLocationKey$1);
}
const clientConfig2 = defineClientConfig({
  setup() {
    return;
  }
});
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser = typeof window !== "undefined";
const noop = () => {
};
const isArray = Array.isArray;
function isSameRouteRecord(a2, b2) {
  return (a2.aliasOf || a2) === (b2.aliasOf || b2);
}
function isSameRouteLocationParams(a2, b2) {
  if (Object.keys(a2).length !== Object.keys(b2).length)
    return false;
  for (const key in a2) {
    if (!isSameRouteLocationParamsValue(a2[key], b2[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a2, b2) {
  return isArray(a2) ? isEquivalentArray(a2, b2) : isArray(b2) ? isEquivalentArray(b2, a2) : a2 === b2;
}
function isEquivalentArray(a2, b2) {
  return isArray(b2) ? a2.length === b2.length && a2.every((value, i2) => value === b2[i2]) : a2.length === 1 && a2[0] === b2;
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/* @__PURE__ */ new Map();
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const routerKey = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const routeLocationKey = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function useLink(props) {
  const router = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index2 > -1)
      return index2;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2
    );
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e2 = {}) {
    if (guardEvent(e2)) {
      return router[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(noop);
    }
    return Promise.resolve();
  }
  if ((process.env.NODE_ENV !== "production" || false) && isBrowser) {
    const instance = getCurrentInstance();
    if (instance) {
      const linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value
      };
      instance.__vrl_devtools = instance.__vrl_devtools || [];
      instance.__vrl_devtools.push(linkContextDevtools);
      watchEffect(() => {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
      }, { flush: "post" });
    }
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e2) {
  if (e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey)
    return;
  if (e2.defaultPrevented)
    return;
  if (e2.button !== void 0 && e2.button !== 0)
    return;
  if (e2.currentTarget && e2.currentTarget.getAttribute) {
    const target = e2.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e2.preventDefault)
    e2.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
function useRouter() {
  return inject(routerKey);
}
const autoCatalog = "";
var D = defineComponent({ name: "AutoCatalog", props: { base: { type: String, default: "" }, level: { type: Number, default: 3 }, index: Boolean }, setup(c2, { slots: h$1 }) {
  const f2 = ne({ "/": {} }), O2 = usePageData(), g2 = useRouter(), T2 = useSiteData(), v2 = (i2) => {
    const u2 = i2["I"];
    return typeof u2 > "u" || u2;
  }, E2 = () => {
    const i2 = c2.base || O2.value.path.replace(/\/[^/]+$/, "/"), u2 = g2.getRoutes(), p2 = [];
    return u2.filter(({ meta: l2, path: e2 }) => {
      if (!_t(e2, i2) || e2 === i2)
        return false;
      if (i2 === "/") {
        const t2 = at(T2.value.locales).filter((n2) => n2 !== "/");
        if (e2 === "/404.html" || t2.some((n2) => _t(e2, n2)))
          return false;
      }
      return (Oe(e2, ".html") && !Oe(e2, "/index.html") || Oe(e2, "/")) && v2(l2);
    }).map(({ path: l2, meta: e2 }) => {
      const t2 = l2.substring(i2.length).split("/").length;
      return { title: e2["t"] || "", icon: e2["i"], base: l2.replace(/\/[^/]+\/?$/, "/"), order: e2["O"] || null, level: Oe(l2, "/") ? t2 - 1 : t2, path: l2 };
    }).filter(({ title: l2, level: e2 }) => typeof l2 == "string" && l2 && e2 <= c2.level).sort(({ title: l2, level: e2, path: t2, order: n2 }, { title: r2, level: o2, path: d, order: s2 }) => e2 - o2 || (Oe(t2, "/index.html") ? -1 : Oe(d, "/index.html") ? 1 : n2 === null ? s2 === null ? l2.localeCompare(r2) : s2 : s2 === null ? n2 : n2 > 0 ? s2 > 0 ? n2 - s2 : -1 : s2 < 0 ? n2 - s2 : 1)).forEach((l2) => {
      var e2;
      const { base: t2, level: n2 } = l2;
      switch (n2) {
        case 1:
          p2.push(l2);
          break;
        case 2: {
          const r2 = p2.find((o2) => o2.path === t2);
          r2 && (r2.children ?? (r2.children = [])).push(l2);
          break;
        }
        default: {
          const r2 = p2.find((o2) => o2.path === t2.replace(/\/[^/]+\/$/, "/"));
          if (r2) {
            const o2 = (e2 = r2.children) == null ? void 0 : e2.find((d) => d.path === t2);
            o2 && (o2.children ?? (o2.children = [])).push(l2);
          }
        }
      }
    }), p2;
  }, b2 = computed(() => E2());
  return () => h("div", { class: "auto-catalog-wrapper" }, [h("h2", { class: "main-title" }, f2.value.title), ...b2.value.map(({ children: i2 = [], icon: u2, path: p2, title: l2 }, e2) => [h("h3", { id: l2, class: ["child-title", { "has-children": i2.length }] }, [h("a", { href: `#${l2}`, class: "header-anchor" }, "#"), h(RouterLink, { class: "catalog-title", to: p2 }, () => [c2.index ? `${e2 + 1}.` : null, u2 && h$1.icon ? h$1.icon({ icon: u2 }) : null, l2 || "Unknown"])]), i2.length ? h("ul", { class: "child-catalog-wrapper" }, i2.map(({ children: t2 = [], icon: n2, path: r2, title: o2 }, d) => h("li", { class: "child-catalog-item" }, [h("div", { class: ["sub-title", { "has-children": t2.length }] }, [h("a", { href: `#${o2}`, class: "header-anchor" }, "#"), h(RouterLink, { class: "catalog-title", to: r2 }, () => [c2.index ? `${e2 + 1}.${d + 1}` : null, n2 && h$1.icon ? h$1.icon({ icon: n2 }) : null, o2 || "Unknown"])]), t2.length ? h("div", { class: "sub-catalog-wrapper" }, t2.map(({ icon: s2, path: A2, title: L2 }, $2) => h(RouterLink, { class: "sub-catalog-item", to: A2 }, () => [c2.index ? `${e2 + 1}.${d + 1}.${$2 + 1}` : null, s2 && h$1.icon ? h$1.icon({ icon: s2 }) : null, L2 || "Unknown"]))) : null]))) : null])]);
} }), K$1 = defineClientConfig({ enhance: ({ app: c2 }) => {
  Vt("AutoCatalog", c2) || c2.component("AutoCatalog", (h$1) => h(D, h$1, { icon: ({ icon: f2 }) => h(resolveComponent("HopeIcon"), { icon: f2 }) }));
} });
const vars$1 = "";
const externalLinkIcon = "";
const svg = h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h("span", [
      svg,
      h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = {};
const clientConfig4 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h(ExternalLinkIcon, { locales }));
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress$1.isStarted();
    n2 = clamp(n2, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n2 === 1 ? null : n2;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress$1.status;
    if (!n2) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress$1.set(n2);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i2 = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const vars = "";
const nprogress = "";
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter$1();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
const clientConfig5 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse(`{"encrypt":{},"locales":{"/":{"logo":"/logo.png","repo":"https://github.com/memoio/memo-docs","docsDir":"docs","editLinkPattern":"https://github.com/memoio/memo-docs/master/:path","lang":"en","navbar":[],"sidebar":{"/":["api-docs","campaigns","cli-usage","concepts","FAQ","RAFI","start-and-usage"],"/api-docs/":"structure","campaigns":"structure","/cli-usage/":"structure","/RAFI/":"structure","/start-and-usage/":"structure","/concepts/":"structure","/FAQ/":"structure"},"footer":"Copyright © 2023 MemoLabs.","displayFooter":true,"metaLocales":{"editLink":"Edit this page on GitHub"},"routeLocales":{"skipToContent":"Skip to main content","notFoundTitle":"Page not found","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"}}}}`);
const themeData = ref(themeData$1);
const useThemeData$1 = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a2;
  return {
    ...theme,
    ...(_a2 = theme.locales) == null ? void 0 : _a2[routeLocale]
  };
};
const clientConfig6 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData$1();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const button = "";
const M$1 = 800, u = 2e3, S$3 = { "/": {} }, n = false, P$2 = ['.theme-hope-content div[class*="language-"] pre'], m$1 = false;
const l$1 = /* @__PURE__ */ new Map(), T$2 = () => {
  const { copy: C2 } = useClipboard({ legacy: true }), a2 = ne(S$3), g2 = usePageData(), i2 = ee$1();
  const E2 = (o2) => {
    if (!o2.hasAttribute("copy-code-registered")) {
      const e2 = document.createElement("button");
      e2.classList.add("copy-code-button"), e2.innerHTML = '<div class="copy-icon" />', e2.setAttribute("aria-label", a2.value.copy), e2.setAttribute("data-copied", a2.value.copied), o2.parentElement && o2.parentElement.insertBefore(e2, o2), o2.setAttribute("copy-code-registered", "");
    }
  }, p2 = () => nextTick().then(() => new Promise((o2) => {
    setTimeout(() => {
      P$2.forEach((e2) => {
        document.querySelectorAll(e2).forEach(E2);
      }), o2();
    }, M$1);
  })), d = (o2, e2, t2) => {
    let { innerText: s2 = "" } = e2;
    /language-(shellscript|shell|bash|sh|zsh)/.test(o2.classList.toString()) && (s2 = s2.replace(/^ *(\$|>) /gm, "")), C2(s2).then(() => {
      t2.classList.add("copied"), clearTimeout(l$1.get(t2));
      const c2 = setTimeout(() => {
        t2.classList.remove("copied"), t2.blur(), l$1.delete(t2);
      }, u);
      if (l$1.set(t2, c2), n)
        ;
    });
  };
  onMounted(() => {
    (!i2.value || m$1) && p2(), useEventListener("click", (o2) => {
      const e2 = o2.target;
      if (e2.matches('div[class*="language-"] > button.copy')) {
        const t2 = e2.parentElement, s2 = e2.nextElementSibling;
        s2 && d(t2, s2, e2);
      } else if (e2.matches('div[class*="language-"] div.copy-icon')) {
        const t2 = e2.parentElement, s2 = t2.parentElement, c2 = t2.nextElementSibling;
        c2 && d(s2, c2, t2);
      }
    }), watch(() => g2.value.path, () => {
      (!i2.value || m$1) && p2();
    });
  });
};
var Y$1 = defineClientConfig({ setup: () => {
  T$2();
} });
const chart = "";
const parseChartConfig = (config, type) => {
  if (type === "json")
    return JSON.parse(config);
  const exports = {}, module = { exports };
  return eval(config), module.exports;
};
var ChartJS = defineComponent({ name: "ChartJS", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const r2 = ref(), o2 = ref(), t2 = ref(true);
  return onMounted(async () => {
    const [{ default: n2 }] = await Promise.all([import("./assets/auto-7a2feac1.mjs"), new Promise((s2) => setTimeout(s2, 800))]);
    n2.defaults.maintainAspectRatio = false;
    const a2 = parseChartConfig(He(e2.config), e2.type), i2 = o2.value.getContext("2d");
    new n2(i2, a2), t2.value = false;
  }), () => [e2.title ? h("div", { class: "chart-title" }, decodeURIComponent(e2.title)) : null, t2.value ? h(vt, { class: "chart-loading", height: 192 }) : null, h("div", { ref: r2, class: "chart-wrapper", id: e2.id, style: { display: t2.value ? "none" : "block" } }, h("canvas", { ref: o2, height: 400 }))];
} });
const codeTabs = "";
const o$2 = useStorage("VUEPRESS_CODE_TAB_STORE", {});
var S$2 = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(t2, { slots: v2 }) {
  const l2 = ref(t2.active), u2 = ref([]), c2 = () => {
    if (t2.tabId) {
      const { title: e2, id: a2 = e2 } = t2.data[l2.value];
      o$2.value[t2.tabId] = a2;
    }
  }, b2 = (e2 = l2.value) => {
    l2.value = e2 < u2.value.length - 1 ? e2 + 1 : 0, u2.value[l2.value].focus();
  }, f2 = (e2 = l2.value) => {
    l2.value = e2 > 0 ? e2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, p2 = (e2, a2) => {
    if (e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), l2.value = a2) : e2.key === "ArrowRight" ? (e2.preventDefault(), b2()) : e2.key === "ArrowLeft" && (e2.preventDefault(), f2()), t2.tabId) {
      const { title: d, id: i2 = d } = t2.data[l2.value];
      o$2.value[t2.tabId] = i2;
    }
  }, m2 = () => {
    if (t2.tabId) {
      const e2 = t2.data.findIndex(({ title: a2, id: d = a2 }) => o$2.value[t2.tabId] === d);
      if (e2 !== -1)
        return e2;
    }
    return t2.active;
  };
  return onMounted(() => {
    l2.value = m2(), watch(() => o$2.value[t2.tabId], (e2, a2) => {
      if (t2.tabId && e2 !== a2) {
        const d = t2.data.findIndex(({ title: i2, id: r2 = i2 }) => r2 === e2);
        d !== -1 && (l2.value = d);
      }
    });
  }), () => t2.data.length ? h("div", { class: "code-tabs" }, [h("div", { class: "code-tabs-nav", role: "tablist" }, t2.data.map(({ title: e2 }, a2) => {
    const d = a2 === l2.value;
    return h("button", { ref: (i2) => {
      i2 && (u2.value[a2] = i2);
    }, class: ["code-tabs-nav-tab", { active: d }], role: "tab", "aria-controls": `codetab-${t2.id}-${a2}`, "aria-selected": d, onClick: () => {
      l2.value = a2, c2();
    }, onKeydown: (i2) => p2(i2, a2) }, e2);
  })), t2.data.map(({ title: e2, id: a2 = e2 }, d) => {
    var i2;
    const r2 = d === l2.value;
    return h("div", { class: ["code-tab", { active: r2 }], id: `codetab-${t2.id}-${d}`, role: "tabpanel", "aria-expanded": r2 }, (i2 = v2[`tab${d}`]) == null ? void 0 : i2.call(v2, { title: e2, value: a2, isActive: r2 }));
  })]) : null;
} });
const codeGroup = "";
const c$1 = ({ active: p2 = false }, { slots: u2 }) => {
  var e2;
  return h("div", { class: ["code-group-item", { active: p2 }], "aria-selected": p2 }, (e2 = u2.default) == null ? void 0 : e2.call(u2));
};
c$1.displayName = "CodeGroupItem";
const y$1 = defineComponent({ name: "CodeGroup", setup(p2, { slots: u2 }) {
  const e2 = ref(-1), t2 = ref([]);
  const i2 = (a2 = e2.value) => {
    e2.value = a2 < t2.value.length - 1 ? a2 + 1 : 0, t2.value[e2.value].focus();
  }, f2 = (a2 = e2.value) => {
    e2.value = a2 > 0 ? a2 - 1 : t2.value.length - 1, t2.value[e2.value].focus();
  }, m2 = (a2, o2) => {
    a2.key === " " || a2.key === "Enter" ? (a2.preventDefault(), e2.value = o2) : a2.key === "ArrowRight" ? (a2.preventDefault(), i2(o2)) : a2.key === "ArrowLeft" && (a2.preventDefault(), f2(o2));
  };
  return () => {
    var a2;
    const o2 = (((a2 = u2.default) == null ? void 0 : a2.call(u2)) || []).filter((l2) => l2.type.name === "CodeGroupItem").map((l2) => (l2.props === null && (l2.props = {}), l2));
    return o2.length === 0 ? null : (e2.value < 0 || e2.value > o2.length - 1 ? (e2.value = o2.findIndex((l2) => "active" in l2.props), e2.value === -1 && (e2.value = 0)) : o2.forEach((l2, r2) => {
      l2.props.active = r2 === e2.value;
    }), h("div", { class: "code-group" }, [h("div", { class: "code-group-nav" }, o2.map((l2, r2) => {
      const s2 = r2 === e2.value;
      return h("button", { ref: (v2) => {
        v2 && (t2.value[r2] = v2);
      }, class: ["code-group-nav-tab", { active: s2 }], "aria-pressed": s2, "aria-expanded": s2, onClick: () => {
        e2.value = r2;
      }, onKeydown: (v2) => m2(v2, r2) }, l2.props.title);
    })), o2]));
  };
} });
const index$2 = "";
const q$1 = () => h(G$1, { name: "back" }, () => h("path", { d: "M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z" })), a$1 = () => h(G$1, { name: "home" }, () => h("path", { d: "M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z" })), o$1 = '<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>', v$3 = '<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>', l = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';
const codeDemo = "";
const L$1 = { "useBabel": false, "jsLib": [], "cssLib": [], "codepenLayout": "left", "codepenEditors": "101", "babel": "https://unpkg.com/@babel/standalone/babel.min.js", "vue": "https://unpkg.com/vue/dist/vue.global.prod.js", "react": "https://unpkg.com/react/umd/react.production.min.js", "reactDOM": "https://unpkg.com/react-dom/umd/react-dom.production.min.js" }, E = { html: { types: ["html", "slim", "haml", "md", "markdown", "vue"], map: { html: "none", vue: "none", md: "markdown" } }, js: { types: ["js", "javascript", "coffee", "coffeescript", "ts", "typescript", "ls", "livescript"], map: { js: "none", javascript: "none", coffee: "coffeescript", ls: "livescript", ts: "typescript" } }, css: { types: ["css", "less", "sass", "scss", "stylus", "styl"], map: { css: "none", styl: "stylus" } } }, B = (e2, s2, t2) => {
  const n2 = document.createElement(e2);
  return isPlainObject(s2) && at(s2).forEach((a2) => {
    if (a2.indexOf("data"))
      n2[a2] = s2[a2];
    else {
      const o2 = a2.replace("data", "");
      n2.dataset[o2] = s2[a2];
    }
  }), t2 && t2.forEach((a2) => {
    n2.appendChild(a2);
  }), n2;
}, w = (e2) => ({ ...L$1, ...e2, jsLib: Array.from(/* @__PURE__ */ new Set([...L$1.jsLib || [], ...e2.jsLib || []])), cssLib: Array.from(/* @__PURE__ */ new Set([...L$1.cssLib || [], ...e2.cssLib || []])) }), m = (e2, s2) => {
  if (e2[s2] !== void 0)
    return e2[s2];
  const t2 = new Promise((n2) => {
    var a2;
    const o2 = document.createElement("script");
    o2.src = s2, (a2 = document.querySelector("body")) == null || a2.appendChild(o2), o2.onload = () => {
      n2();
    };
  });
  return e2[s2] = t2, t2;
}, k$1 = (e2, s2) => {
  if (s2.css && Array.from(e2.childNodes).every((t2) => t2.nodeName !== "STYLE")) {
    const t2 = B("style", { innerHTML: s2.css });
    e2.appendChild(t2);
  }
}, V = (e2, s2, t2) => {
  const n2 = t2.getScript();
  if (n2 && Array.from(s2.childNodes).every((a2) => a2.nodeName !== "SCRIPT")) {
    const a2 = document.createElement("script");
    a2.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e2} .code-demo-container').shadowRoot;
${n2}}`)), s2.appendChild(a2);
  }
}, H$1 = (e2) => {
  const s2 = at(e2), t2 = { html: [], js: [], css: [], isLegal: false };
  return ["html", "js", "css"].forEach((n2) => {
    const a2 = s2.filter((o2) => E[n2].types.includes(o2));
    if (a2.length) {
      const o2 = a2[0];
      t2[n2] = [e2[o2].replace(/^\n|\n$/g, ""), E[n2].map[o2] || o2];
    }
  }), t2.isLegal = (!t2.html.length || t2.html[1] === "none") && (!t2.js.length || t2.js[1] === "none") && (!t2.css.length || t2.css[1] === "none"), t2;
}, $$1 = (e2) => e2.replace(/<br \/>/g, "<br>").replace(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>"), x$1 = (e2) => `<div id="app">
${$$1(e2)}
</div>`, I$1 = (e2) => `${e2.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`, J = (e2) => e2.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim(), O$1 = (e2) => `(function(exports){var module={};module.exports=exports;${e2};return module.exports.__esModule?module.exports.default:module.exports;})({})`, q = (e2, s2) => {
  const t2 = w(s2), n2 = e2.js[0] || "";
  return { ...t2, html: $$1(e2.html[0] || ""), js: n2, css: e2.css[0] || "", isLegal: e2.isLegal, getScript: () => {
    var a2;
    return t2.useBabel ? ((a2 = window.Babel.transform(n2, { presets: ["es2015"] })) == null ? void 0 : a2.code) || "" : n2;
  } };
}, F$1 = (e2, s2) => {
  const t2 = w(s2), n2 = e2.html[0] || "", a2 = /<template>([\s\S]+)<\/template>/u.exec(n2), o2 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(n2), d = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(n2), u2 = a2 ? a2[1].replace(/^\n|\n$/g, "") : "", [i2 = "", c2 = ""] = o2 ? [o2[4].replace(/^\n|\n$/g, ""), o2[3]] : [], [l2 = "", h2 = ""] = d ? [d[4].replace(/^\n|\n$/g, ""), d[3]] : [], f2 = c2 === "" && (h2 === "" || h2 === "css");
  return { ...t2, html: x$1(u2), js: J(i2), css: l2, isLegal: f2, jsLib: [t2.vue, ...t2.jsLib], getScript: () => {
    var y2, p2;
    const g2 = s2.useBabel ? ((p2 = (y2 = window.Babel) == null ? void 0 : y2.transform(i2, { presets: ["es2015"] })) == null ? void 0 : p2.code) || "" : i2.replace(/export\s+default/u, "return");
    return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${O$1(g2)};appOptions.template=\`${u2.replace("`", '\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`;
  } };
}, G = (e2, s2) => {
  const t2 = w(s2);
  return { ...t2, html: x$1(""), js: I$1(e2.js[0] || ""), css: e2.css[0] || (e2.js[0] ? e2.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim() : ""), isLegal: e2.isLegal, jsLib: [t2.react, t2.reactDOM, ...t2.jsLib], jsx: true, getScript: () => {
    var n2, a2;
    const o2 = ((a2 = (n2 = window.Babel) == null ? void 0 : n2.transform(e2.js[0] || "", { presets: ["es2015", "react"] })) == null ? void 0 : a2.code) || "";
    return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${O$1(o2)}))`;
  } };
}, v$2 = {}, Y = (e2) => Promise.all([m(v$2, e2.babel), m(v$2, e2.react), m(v$2, e2.reactDOM)]), K = (e2) => {
  const s2 = [m(v$2, e2.vue)];
  return e2.useBabel && s2.push(m(v$2, e2.babel)), Promise.all(s2);
}, U = (e2) => e2.useBabel ? m(v$2, e2.babel) : Promise.resolve();
var W = defineComponent({ name: "CodeDemo", props: { id: { type: String, required: true }, type: { type: String, default: "normal" }, title: { type: String, default: "" }, config: { type: String, default: "" }, code: { type: String, required: true } }, setup(e2, { slots: s2 }) {
  const [t2, n2] = useToggle(false), a2 = ref(), o2 = ref(), d = ref("0"), u2 = ref(false), i2 = computed(() => JSON.parse(e2.config ? He(e2.config) : "{}")), c2 = computed(() => {
    const p2 = JSON.parse(He(e2.code));
    return H$1(p2);
  }), l2 = computed(() => e2.type === "react" ? G(c2.value, i2.value) : e2.type === "vue" ? F$1(c2.value, i2.value) : q(c2.value, i2.value)), h$1 = computed(() => l2.value.isLegal), f2 = (p2 = false) => {
    const g2 = a2.value.attachShadow({ mode: "open" }), S2 = document.createElement("div");
    S2.classList.add("code-demo-app"), g2.appendChild(S2), h$1.value ? (p2 && (S2.innerHTML = l2.value.html), k$1(g2, l2.value), V(e2.id, g2, l2.value), d.value = "0") : d.value = "auto", u2.value = true;
  }, y2 = () => {
    switch (e2.type) {
      case "react":
        return Y(l2.value).then(() => f2());
      case "vue":
        return K(l2.value).then(() => f2());
      default:
        return U(l2.value).then(() => f2(true));
    }
  };
  return onMounted(() => {
    setTimeout(() => {
      y2();
    }, 800);
  }), () => {
    var p2;
    return h("div", { class: "code-demo-wrapper", id: e2.id }, [h("div", { class: "code-demo-header" }, [l2.value.isLegal ? h("button", { class: ["toggle-button", t2.value ? "down" : "end"], onClick: () => {
      d.value = t2.value ? "0" : `${o2.value.clientHeight + 13.8}px`, n2();
    } }) : null, e2.title ? h("span", { class: "title" }, decodeURIComponent(e2.title)) : null, l2.value.isLegal && l2.value.jsfiddle !== false ? h("form", { class: "code-demo-jsfiddle", target: "_blank", action: "https://jsfiddle.net/api/post/library/pure/", method: "post" }, [h("input", { type: "hidden", name: "html", value: l2.value.html }), h("input", { type: "hidden", name: "js", value: l2.value.js }), h("input", { type: "hidden", name: "css", value: l2.value.css }), h("input", { type: "hidden", name: "wrap", value: "1" }), h("input", { type: "hidden", name: "panel_js", value: "3" }), h("input", { type: "hidden", name: "resources", value: [...l2.value.cssLib, ...l2.value.jsLib].join(",") }), h("button", { type: "submit", class: "jsfiddle-button", innerHTML: v$3, "aria-label": "JSFiddle", "data-balloon-pos": "up" })]) : null, !l2.value.isLegal || l2.value.codepen !== false ? h("form", { class: "code-demo-codepen", target: "_blank", action: "https://codepen.io/pen/define", method: "post" }, [h("input", { type: "hidden", name: "data", value: JSON.stringify({ html: l2.value.html, js: l2.value.js, css: l2.value.css, js_external: l2.value.jsLib.join(";"), css_external: l2.value.cssLib.join(";"), layout: l2.value.codepenLayout, html_pre_processor: c2.value ? c2.value.html[1] : "none", js_pre_processor: c2.value ? c2.value.js[1] : l2.value.jsx ? "babel" : "none", css_pre_processor: c2.value ? c2.value.css[1] : "none", editors: l2.value.codepenEditors }) }), h("button", { type: "submit", innerHTML: o$1, class: "codepen-button", "aria-label": "Codepen", "data-balloon-pos": "up" })]) : null]), u2.value ? null : h(vt, { class: "code-demo-loading" }), h("div", { ref: a2, class: "code-demo-container", style: { display: h$1.value && u2.value ? "block" : "none" } }), h("div", { class: "code-demo-code-wrapper", style: { height: d.value } }, h("div", { ref: o2, class: "code-demo-codes" }, (p2 = s2.default) == null ? void 0 : p2.call(s2)))]);
  };
} });
const echarts = "";
const parseEChartsConfig = (config, type) => {
  if (type === "js") {
    const exports = {}, module = { exports };
    return eval(config), module.exports;
  }
  return JSON.parse(config);
};
var ECharts = defineComponent({ name: "ECharts", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(t2) {
  const o2 = ref();
  let e2;
  const r2 = ref(true);
  return useEventListener("resize", useDebounceFn(() => e2 == null ? void 0 : e2.resize(), 100)), onMounted(() => {
    Promise.all([import("echarts"), new Promise((n2) => setTimeout(n2, 800))]).then(([n2]) => {
      const i2 = parseEChartsConfig(He(t2.config), t2.type);
      e2 = n2.init(o2.value), e2.setOption(i2), r2.value = false;
    });
  }), onUnmounted(() => {
    e2 == null || e2.dispose();
  }), () => [t2.title ? h("div", { class: "echarts-title" }, decodeURIComponent(t2.title)) : null, h("div", { class: "echarts-wrapper" }, [h("div", { ref: o2, class: "echarts-container", id: t2.id }), r2.value ? h(vt, { class: "echarts-loading", height: 360 }) : null])];
} });
const figure = "";
const flowchart = "";
var f = { x: 0, y: 0, "line-width": 2, "line-length": 40, "text-margin": 8, "font-size": 14, "font-color": "#8DA1AC", "line-color": "#8DA1AC", "element-color": "black", fill: "white", "yes-text": "Yes", "no-text": "No", "arrow-end": "block", scale: 1 }, F = { ...f, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#FF485E", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FF485E", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" } } }, b$2 = { ...f, "line-width": 1, symbols: { start: { class: "start-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, end: { class: "end-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, operation: { class: "operation-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, inputoutput: { class: "inputoutput-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, subroutine: { class: "subroutine-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, condition: { class: "condition-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, parallel: { class: "parallel-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" } } }, y = { ...f, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#00BC7D", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#EB4D5D", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#937AC4", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FFB500", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" } } }, s = { ant: F, vue: y, pie: b$2 }, g$1 = defineComponent({ name: "FlowChart", props: { code: { type: String, required: true }, id: { type: String, required: true }, preset: { type: String, default: "vue" } }, setup(l2) {
  let o2 = null;
  const p2 = ref(), n2 = ref(true), t2 = ref(1), r2 = computed(() => s[l2.preset] || (console.warn(`[md-enhance:flowchart] Unknown preset: ${l2.preset}`), s.vue)), c2 = (e2) => e2 < 419 ? 0.8 : e2 > 1280 ? 1 : 0.9;
  return onMounted(() => {
    Promise.all([import("flowchart.ts"), new Promise((e2) => setTimeout(e2, 800))]).then(([{ parse: e2 }]) => {
      o2 = e2(He(l2.code)), t2.value = c2(window.innerWidth), n2.value = false, o2.draw(l2.id, { ...r2.value, scale: t2.value });
    }), useEventListener("resize", useDebounceFn(() => {
      if (o2) {
        const e2 = c2(window.innerWidth);
        t2.value !== e2 && (t2.value = e2, o2.draw(l2.id, { ...r2.value, scale: e2 }));
      }
    }, 100));
  }), () => [n2.value ? h(vt, { class: "flowchart-loading", height: 192 }) : null, h("div", { ref: p2, class: ["flowchart-wrapper", l2.preset], id: l2.id, style: { display: n2.value ? "none" : "block" } })];
} });
const footnote = "";
const imageMark = "";
const mermaid = "";
const b$1 = (e2) => ({ dark: e2, background: e2 ? "#1e1e1e" : "#fff", primaryColor: e2 ? "#389d70" : "#4abf8a", primaryBorderColor: e2 ? "#389d70" : "#4abf8a", primaryTextColor: "#fff", secondaryColor: "#ffb500", secondaryBorderColor: e2 ? "#fff" : "#000", secondaryTextColor: e2 ? "#ddd" : "#333", tertiaryColor: e2 ? "#282828" : "#efeef4", tertiaryBorderColor: e2 ? "#bbb" : "#242424", tertiaryTextColor: e2 ? "#ddd" : "#333", noteBkgColor: e2 ? "#f6d365" : "#fff5ad", noteTextColor: "#242424", noteBorderColor: e2 ? "#f6d365" : "#333", lineColor: e2 ? "#d3d3d3" : "#333", textColor: e2 ? "#fff" : "#242424", mainBkg: e2 ? "#389d70" : "#4abf8a", errorBkgColor: "#eb4d5d", errorTextColor: "#fff", nodeBorder: e2 ? "#389d70" : "#4abf8a", nodeTextColor: e2 ? "#fff" : "#242424", signalTextColor: e2 ? "#9e9e9e" : "#242424", classText: "#fff", labelColor: "#fff", fillType0: e2 ? "#cf1322" : "#f1636e", fillType1: "#f39c12", fillType2: "#2ecc71", fillType3: "#fa541c", fillType4: "#25a55b", fillType5: "#13c2c2", fillType6: "#096dd9", fillType7: "#aa6fe9" });
var T$1 = defineComponent({ name: "Mermaid", props: { id: { type: String, required: true }, code: { type: String, required: true } }, setup(e2) {
  const i2 = ref(), a2 = ref(""), t2 = ref(false), n2 = computed(() => He(e2.code)), f2 = async () => Promise.all([import("mermaid"), new Promise((o2) => setTimeout(o2, 800))]).then(async ([{ default: o2 }]) => {
    const r2 = { useMaxWidth: false };
    o2.initialize({ theme: "base", themeVariables: b$1(t2.value), flowchart: r2, sequence: r2, journey: r2, gantt: r2, er: r2, pie: r2, ...{}, startOnLoad: false }), a2.value = (await o2.render(e2.id, n2.value)).svg;
  });
  return onMounted(() => {
    const o2 = document.documentElement, r2 = () => o2.classList.contains("dark") || o2.getAttribute("data-theme") === "dark";
    t2.value = r2(), f2(), useMutationObserver(o2, () => {
      t2.value = r2();
    }, { attributeFilter: ["class", "data-theme"], attributes: true }), watch(t2, () => f2());
  }), () => h("div", { ref: i2, class: "mermaid-wrapper" }, a2.value ? h("div", { class: "mermaid-content", innerHTML: a2.value }) : h(vt, { class: "mermaid-loading", height: 96 }));
} });
const o = () => import("./assets/highlight.esm-5a7d9d1a.mjs"), t = () => import("./assets/markdown.esm-f4580aa9.mjs"), e = () => import("./assets/math.esm-821e316c.mjs"), r = () => import("./assets/notes.esm-f01d36a5.mjs"), a = () => import("./assets/reveal.esm-89acc74e.mjs"), c = () => import("./assets/zoom.esm-226c665b.mjs");
const useReveal = () => [a(), t(), o(), e(), r(), c()];
const index$1 = "";
const leagueGothic = "";
const sourceSansPro = "";
var S$1 = defineComponent({ name: "Presentation", props: { id: { type: String, required: true }, code: { type: String, required: true }, theme: { type: String, default: "auto" } }, setup(r2) {
  const t2 = usePageFrontmatter(), s2 = ref(""), u2 = ref(true), d = ref();
  let i2 = null;
  const m2 = async (e2) => {
    const p2 = [new Promise((o2) => setTimeout(o2, 800)), ...useReveal()], [, c2, ...v2] = await Promise.all(p2), n2 = new c2.default(e2, { plugins: v2.map(({ default: o2 }) => o2) });
    return await n2.initialize({ backgroundTransition: "slide", hash: t2.value.layout === "Slide", mouseWheel: t2.value.layout === "Slide", transition: "slide", slideNumber: true, ...{}, ...t2.value.reveal || {}, embedded: t2.value.layout !== "Slide" }), n2.configure({ backgroundTransition: "slide" }), n2;
  };
  return onMounted(async () => {
    const e2 = d.value;
    e2 && (s2.value = He(r2.code), e2.setAttribute("id", r2.id), e2.setAttribute("data-theme", r2.theme), i2 = await m2(e2), u2.value = false);
  }), onUnmounted(() => {
    i2 == null || i2.destroy();
  }), () => h("div", { class: "presentation-wrapper" }, [h("div", { ref: d, class: ["reveal", "reveal-viewport"] }, h("div", { class: "slides", innerHTML: `<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${s2.value}<\/script></section>` })), u2.value ? h(vt, { class: "reveal-loading", height: 400 }) : null]);
} });
const playground = "";
var i = defineComponent({ name: "Playground", props: { title: { type: String, default: "" }, link: { type: String, required: true } }, setup(r2) {
  return () => [h("div", { class: "playground-wrapper" }, [h("div", { class: "title-wrapper" }, [r2.title ? h("div", { class: "title" }, decodeURIComponent(r2.title)) : null, h("div", { class: "actions" }, [h("a", { class: "action", href: decodeURIComponent(r2.link), target: "_blank", innerHTML: l })])]), h("div", { class: "playground-container" }, h("iframe", { src: decodeURIComponent(r2.link) }))])];
} });
const tabs = "";
const v$1 = useStorage("VUEPRESS_TAB_STORE", {});
var S = defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(e2, { slots: o2 }) {
  const l2 = ref(e2.active), u2 = ref([]), s2 = () => {
    if (e2.tabId) {
      const { title: a2, id: t2 = a2 } = e2.data[l2.value];
      v$1.value[e2.tabId] = t2;
    }
  }, b2 = (a2 = l2.value) => {
    l2.value = a2 < u2.value.length - 1 ? a2 + 1 : 0, u2.value[l2.value].focus();
  }, f2 = (a2 = l2.value) => {
    l2.value = a2 > 0 ? a2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, p2 = (a2, t2) => {
    a2.key === " " || a2.key === "Enter" ? (a2.preventDefault(), l2.value = t2) : a2.key === "ArrowRight" ? (a2.preventDefault(), b2()) : a2.key === "ArrowLeft" && (a2.preventDefault(), f2()), s2();
  }, m2 = () => {
    if (e2.tabId) {
      const a2 = e2.data.findIndex(({ title: t2, id: i2 = t2 }) => v$1.value[e2.tabId] === i2);
      if (a2 !== -1)
        return a2;
    }
    return e2.active;
  };
  return onMounted(() => {
    l2.value = m2(), watch(() => v$1.value[e2.tabId], (a2, t2) => {
      if (e2.tabId && a2 !== t2) {
        const i2 = e2.data.findIndex(({ title: r2, id: d = r2 }) => d === a2);
        i2 !== -1 && (l2.value = i2);
      }
    });
  }), () => e2.data.length ? h("div", { class: "tab-list" }, [h("div", { class: "tab-list-nav", role: "tablist" }, e2.data.map(({ title: a2 }, t2) => {
    const i2 = t2 === l2.value;
    return h("button", { ref: (r2) => {
      r2 && (u2.value[t2] = r2);
    }, class: ["tab-list-nav-item", { active: i2 }], role: "tab", "aria-controls": `tab-${e2.id}-${t2}`, "aria-selected": i2, onClick: () => {
      l2.value = t2, s2();
    }, onKeydown: (r2) => p2(r2, t2) }, a2);
  })), e2.data.map(({ title: a2, id: t2 = a2 }, i2) => {
    var r2;
    const d = i2 === l2.value;
    return h("div", { class: ["tab-item", { active: d }], id: `tab-${e2.id}-${i2}`, role: "tabpanel", "aria-expanded": d }, (r2 = o2[`tab${i2}`]) == null ? void 0 : r2.call(o2, { title: a2, value: t2, isActive: d }));
  })]) : null;
} });
const tasklist = "";
const katex_min = "";
const katex = "";
const clientConfig8 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", S$2);
    if (!Vt("CodeGroup", app))
      app.component("CodeGroup", y$1);
    if (!Vt("CodeGroupItem", app))
      app.component("CodeGroupItem", c$1);
    app.component("CodeDemo", W);
    app.component("ECharts", ECharts);
    app.component("FlowChart", g$1);
    app.component("Mermaid", T$1);
    app.component("Presentation", S$1);
    app.component("Playground", i);
    app.component("Tabs", S);
    app.component("VuePlayground", defineAsyncComponent(() => import("./assets/VuePlayground-db07acb0.mjs")));
  }
});
const photoswipe = "";
const photoSwipe = "";
const T = ".theme-hope-content :not(a) > img:not([no-view])", C = { "/": {} }, O = 800, x = {}, A = (e2) => isString$1(e2) ? Array.from(document.querySelectorAll(e2)) : e2.map((t2) => Array.from(document.querySelectorAll(t2))).flat(), p = (e2) => new Promise((t2, n2) => {
  e2.complete ? t2({ src: e2.src, width: e2.naturalWidth, height: e2.naturalHeight, alt: e2.alt }) : (e2.onload = () => t2(p(e2)), e2.onerror = (s2) => n2(s2));
}), H = () => {
  const { isSupported: e2, toggle: t2 } = useFullscreen(), n2 = ne(C), s2 = usePageData(), c2 = () => Promise.all([import("./assets/photoswipe.esm-2f7b443d.mjs"), nextTick().then(() => new Promise((l2) => setTimeout(l2, O)).then(() => A(T)))]).then(([{ default: l2 }, m2]) => {
    const h2 = '<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>';
    m2.forEach((d, v2) => {
      const u2 = () => {
        const a2 = Array(m2.length).fill({ html: h2 }), o2 = new l2({ dataSource: a2, preloaderDelay: 0, ...n2.value, ...x, index: v2 });
        o2.on("uiRegister", () => {
          e2 && o2.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
            t2();
          } }), o2.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (r2, i2) => {
            r2.setAttribute("download", ""), r2.setAttribute("target", "_blank"), r2.setAttribute("rel", "noopener"), i2.on("change", () => {
              r2.href = i2.currSlide.data.src;
            });
          } });
        }), o2.init(), m2.forEach((r2, i2) => {
          p(r2).then((g2) => {
            a2.splice(i2, 1, g2), o2.refreshSlideContent(i2);
          });
        });
      };
      d.style.cursor = "zoom-in", d.addEventListener("click", () => {
        u2();
      }), d.addEventListener("keypress", ({ key: a2 }) => {
        a2 === "Enter" && u2();
      });
    });
  });
  onMounted(() => {
    c2(), watch(() => s2.value.path, () => c2());
  });
};
var I = defineClientConfig({ setup: () => {
  H();
} });
const HopeIcon = (props) => {
  const { icon = "" } = props;
  return isLinkHttp(icon) ? h("img", { class: "icon", src: icon, "no-view": "" }) : _e(icon) ? h("img", { class: "icon", src: withBase(icon), "no-view": "" }) : h(resolveComponent("FontIcon"), props);
};
HopeIcon.displayName = "HopeIcon";
const useAutoLink = (item, preferFull = false) => {
  const router = useRouter$1();
  const { fullPath, meta, name } = Ht(router, encodeURI(item));
  return {
    text: !preferFull && meta[
      "s"
      /* ArticleInfoType.shortTitle */
    ] ? meta[
      "s"
      /* ArticleInfoType.shortTitle */
    ] : meta[
      "t"
      /* ArticleInfoType.title */
    ] || item,
    link: name === "404" ? item : fullPath,
    ...meta[
      "i"
      /* ArticleInfoType.icon */
    ] ? { icon: meta[
      "i"
      /* ArticleInfoType.icon */
    ] } : {}
  };
};
const useThemeData = () => useThemeData$1();
const useThemeLocaleData = () => useThemeLocaleData$1();
const usePure = () => computed(() => Boolean(useThemeData().value.pure));
const useWindowSize = () => {
  const themeData2 = useThemeData();
  const isMobile = ref(false);
  const isWide = ref(false);
  const windowSizeHandler = () => {
    isMobile.value = window.innerWidth <= (themeData2.value.mobileBreakPoint || 719);
    isWide.value = window.innerWidth >= (themeData2.value.wideBreakPoint || 1440);
  };
  onMounted(() => {
    windowSizeHandler();
    useEventListener("resize", windowSizeHandler, false);
    useEventListener("orientationchange", windowSizeHandler, false);
  });
  return {
    isMobile,
    isWide
  };
};
const useNavigate = () => {
  const router = useRouter$1();
  const route = useRoute();
  return (url) => {
    if (url)
      if (_e(url)) {
        if (route.path !== url)
          void router.push(url);
      } else if (isLinkHttp(url) || isLinkMailto(url)) {
        if (window)
          window.open(url);
      } else {
        const base = route.path.slice(0, route.path.lastIndexOf("/"));
        void router.push(`${base}/${encodeURI(url)}`);
      }
  };
};
const usePageAuthor = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { author } = frontmatter.value;
    if (author)
      return De(author);
    if (author === false)
      return [];
    return De(themeLocale.value.author, false);
  });
};
const usePageCategory = () => {
  const frontmatter = usePageFrontmatter();
  return computed(() => xe(frontmatter.value.category).map((name) => ({
    name,
    // this is a hack
    path: ""
  })));
};
const usePageTag = () => {
  const frontmatter = usePageFrontmatter();
  return computed(() => Ie(frontmatter.value.tag).map((name) => ({
    name,
    // this is a hack
    path: ""
  })));
};
const usePageDate = () => {
  const frontmatter = usePageFrontmatter();
  const page2 = usePageData();
  return computed(() => {
    const { date } = frontmatter.value;
    if (date)
      return ot(date);
    const { createdTime } = page2.value.git || {};
    if (createdTime)
      return ot(new Date(createdTime));
    return null;
  });
};
const usePageInfo = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  const author = usePageAuthor();
  const category = usePageCategory();
  const tag = usePageTag();
  const date = usePageDate();
  const info = computed(() => ({
    author: author.value,
    category: category.value,
    date: date.value,
    localizedDate: page2.value.localizedDate,
    tag: tag.value,
    isOriginal: frontmatter.value.isOriginal || false,
    readingTime: page2.value.readingTime || null,
    pageview: "pageview" in frontmatter.value ? frontmatter.value.pageview : true
  }));
  const items = computed(() => "pageInfo" in frontmatter.value ? frontmatter.value.pageInfo : "pageInfo" in themeLocale.value ? themeLocale.value.pageInfo : null);
  return { info, items };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const darkModeSymbol = Symbol.for("darkMode");
const useDarkmode = () => {
  const darkmode = inject(darkModeSymbol);
  if (!darkmode)
    throw new Error("useDarkmode() is called without provider.");
  return darkmode;
};
const injectDarkmode = (app) => {
  const themeData2 = useThemeData();
  const isDarkPreferred = usePreferredDark();
  const status = useStorage("vuepress-theme-hope-scheme", "auto");
  const config2 = computed(() => themeData2.value.darkmode || "switch");
  const isDarkmode = computed(() => {
    const darkmode = config2.value;
    return darkmode === "disable" ? false : (
      // force darkmode
      darkmode === "enable" ? true : (
        // auto
        darkmode === "auto" ? isDarkPreferred.value : (
          // toggle
          darkmode === "toggle" ? status.value === "dark" : (
            // switch
            status.value === "dark" || status.value === "auto" && isDarkPreferred.value
          )
        )
      )
    );
  });
  const canToggle = computed(() => {
    const darkmode = config2.value;
    return darkmode === "switch" || darkmode === "toggle";
  });
  app.provide(darkModeSymbol, {
    canToggle,
    config: config2,
    isDarkmode,
    status
  });
  Object.defineProperties(app.config.globalProperties, {
    $isDarkmode: { get: () => isDarkmode.value }
  });
};
const setupDarkmode = () => {
  const { isDarkmode } = useDarkmode();
  const updateDOM = (isDark = isDarkmode.value) => document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  onMounted(() => {
    watch(isDarkmode, updateDOM, { immediate: true });
  });
};
const AutoLink = defineComponent({
  name: "AutoLink",
  inheritAttrs: false,
  props: {
    /**
     * @description Autolink config
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * @description Whether it's active only when exact match
     */
    exact: Boolean,
    /**
     * @description Whether to hide externalLinkIcon
     */
    noExternalLinkIcon: Boolean
  },
  emits: ["focusout"],
  setup(props, { attrs, emit, slots }) {
    const route = useRoute();
    const siteData2 = useSiteData();
    const config2 = toRef(props, "config");
    const hasHttpProtocol = computed(() => isLinkHttp(config2.value.link));
    const hasNonHttpProtocol = computed(() => isLinkMailto(config2.value.link) || isLinkTel(config2.value.link));
    const linkTarget = computed(() => hasNonHttpProtocol.value ? void 0 : config2.value.target || (hasHttpProtocol.value ? "_blank" : void 0));
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const renderRouterLink = computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const anchorRel = computed(() => hasNonHttpProtocol.value ? void 0 : config2.value.rel || (isBlankTarget.value ? "noopener noreferrer" : void 0));
    const linkAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      if (props.exact)
        return false;
      const localeKeys = at(siteData2.value.locales);
      return localeKeys.length ? (
        // check all the locales
        localeKeys.every((key) => key !== config2.value.link)
      ) : (
        // check root
        config2.value.link !== "/"
      );
    });
    const isActive = computed(() => renderRouterLink.value ? config2.value.activeMatch ? new RegExp(config2.value.activeMatch).test(route.path) : (
      // if this link is active in subpath
      !shouldBeActiveInSubpath.value ? route.path === config2.value.link : _t(route.path, config2.value.link)
    ) : false);
    return () => {
      var _a2, _b2, _c;
      const { text, icon, link } = config2.value;
      return renderRouterLink.value ? h(RouterLink$1, {
        to: link,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        // class needs to be merged manually
        class: ["nav-link", { active: isActive.value }, attrs["class"]],
        onFocusout: () => emit("focusout")
      }, () => {
        var _a3, _b3, _c2;
        return ((_a3 = slots["default"]) == null ? void 0 : _a3.call(slots)) || [
          ((_b3 = slots["before"]) == null ? void 0 : _b3.call(slots)) || h(HopeIcon, { icon }),
          text,
          (_c2 = slots["after"]) == null ? void 0 : _c2.call(slots)
        ];
      }) : h("a", {
        href: link,
        rel: anchorRel.value,
        target: linkTarget.value,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        // class needs to be merged manually
        class: ["nav-link", attrs["class"]],
        onFocusout: () => emit("focusout")
      }, ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || [
        ((_b2 = slots["before"]) == null ? void 0 : _b2.call(slots)) || h(HopeIcon, { icon }),
        text,
        props.noExternalLinkIcon ? null : h(ExternalLinkIcon),
        (_c = slots["after"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const isActiveSidebarItem = (route, item, exact = false) => {
  if ("activeMatch" in item)
    return new RegExp(item.activeMatch).test(route.path);
  if (Ce(route, item.link))
    return true;
  if (item.children && !exact)
    return item.children.some((child) => isActiveSidebarItem(route, child));
  return false;
};
const isMatchedSidebarItem = (route, item) => {
  if (item.type === "group")
    return item.children.some((child) => {
      if (child.type === "group")
        return isMatchedSidebarItem(route, child);
      return child.type === "page" && isActiveSidebarItem(route, child, true);
    }) || "prefix" in item && Ce(route, item.prefix);
  return false;
};
const renderItem = (config2, props) => config2.link ? (
  // if the item has link, render it as `<AutoLink>`
  h(AutoLink, {
    ...props,
    config: config2
  })
) : (
  // if the item only has text, render it as `<p>`
  h("p", props, [h(HopeIcon, { icon: config2.icon }), config2.text])
);
const renderChildren$1 = (children) => {
  const route = useRoute();
  if (!children)
    return null;
  return h("ul", { class: "sidebar-sub-headers" }, children.map((child) => {
    const active = isActiveSidebarItem(route, child, true);
    return h("li", { class: "sidebar-sub-header" }, [
      renderItem(child, {
        class: ["sidebar-link", "heading", { active }]
      }),
      renderChildren$1(child.children)
    ]);
  }));
};
const sidebarData = { "/api-docs/": [{ "text": "middleware", "prefix": "middleware/", "collapsible": true, "icon": "API", "children": [{ "text": "v0.1-http-gateway", "prefix": "v0.1-http-gateway/", "collapsible": true, "icon": "API", "children": ["http-gateway interface_en", "http-gateway接口_cn"] }, { "text": "v1.0", "prefix": "v1.0/", "collapsible": true, "icon": "API", "children": ["中间件HTTPAPI说明文档"] }] }, { "text": "S3", "prefix": "s3/", "collapsible": true, "icon": "API", "children": ["memo-s3-api-cn", "memo-s3-api-en"] }], "campaigns": ["volunteer-recruitment-plan"], "/cli-usage/": [{ "text": "keeper", "prefix": "keeper/", "collapsible": true, "icon": "API", "children": ["keeper-commandline-mannual", "keeper命令手册"] }, { "text": "provider", "prefix": "provider/", "collapsible": true, "icon": "API", "children": ["provider-commandline-mannual", "provider命令手册"] }, { "text": "user", "prefix": "user/", "collapsible": true, "icon": "API", "children": ["user-commandline-mannual", "user命令手册"] }], "/RAFI/": ["rafi"], "/start-and-usage/": [{ "text": "", "prefix": "how-to-start-with-Windows/", "collapsible": true, "children": ["", "start-user-in-Windows"] }, "gateway-mode", { "text": "how to start with Docker", "prefix": "how-to-start-with-Docker/", "collapsible": true, "icon": "API", "children": [{ "text": "megrez", "prefix": "megrez/", "collapsible": true, "icon": "API", "children": ["start-provider-in-Docker copy", "start-user-in-Docker copy"] }, { "text": "testnet", "prefix": "testnet/", "collapsible": true, "icon": "API", "children": ["start-provider-in-Docker copy", "start-user-in-Docker copy"] }] }, "http-operation", { "text": "install-Docker", "prefix": "install-Docker/", "collapsible": true, "icon": "API", "children": ["docker-install"] }, "how-to-use-user"], "/concepts/": ["characteristics-advantages", "how-to-check-balance", "how-to-pledge-memo", "how-to-regenerate-node", "introduction", "roles-introduction", "memo-token-economics", "requirements", "payment-of-memo"], "/FAQ/": ["check-log-file", "common", "connection", "others", "provider", "startup", "user"] };
const resolvePrefix = (prefix = "", path = "") => _e(path) ? path : `${ensureEndingSlash(prefix)}${path}`;
const headerToSidebarItem = (header, headerDepth) => {
  const page2 = usePageData();
  return {
    type: "heading",
    text: header.title,
    link: `${page2.value.path}#${header.slug}`,
    children: headersToSidebarItemChildren(header.children, headerDepth)
  };
};
const headersToSidebarItemChildren = (headers, headerDepth) => headerDepth > 0 ? headers.map((header) => headerToSidebarItem(header, headerDepth - 1)) : [];
const resolveHeadingSidebarItems = (headerDepth) => {
  const page2 = usePageData();
  return headersToSidebarItemChildren(page2.value.headers, headerDepth);
};
const resolveArraySidebarItems = (sidebarConfig, headerDepth, prefix = "") => {
  const page2 = usePageData();
  const handleChildItem = (item, pathPrefix = prefix) => {
    var _a2;
    const childItem = isString$1(item) ? useAutoLink(resolvePrefix(pathPrefix, item)) : item.link ? {
      ...item,
      ...!isLinkExternal(item.link) ? { link: useAutoLink(resolvePrefix(pathPrefix, item.link)).link } : {}
    } : item;
    if ("children" in childItem) {
      const prefix2 = resolvePrefix(pathPrefix, childItem.prefix);
      const children = childItem.children === "structure" ? sidebarData[prefix2] : childItem.children;
      return {
        type: "group",
        ...childItem,
        prefix: prefix2,
        children: children.map((item2) => handleChildItem(item2, prefix2))
      };
    }
    return {
      type: "page",
      ...childItem,
      children: (
        // if the sidebar item is current page and children is not set
        // use headers of current page as children
        childItem.link === page2.value.path ? headersToSidebarItemChildren(
          // skip h1 header
          ((_a2 = page2.value.headers[0]) == null ? void 0 : _a2.level) === 1 ? page2.value.headers[0].children : page2.value.headers,
          headerDepth
        ) : []
      )
    };
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, headerDepth) => {
  const page2 = usePageData();
  const sidebarRoutes = at(sidebarConfig).sort((x2, y2) => y2.length - x2.length);
  for (const base of sidebarRoutes)
    if (_t(decodeURI(page2.value.path), base)) {
      const matchedConfig = sidebarConfig[base];
      return matchedConfig ? resolveArraySidebarItems(matchedConfig === "structure" ? sidebarData[base] : matchedConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : matchedConfig, headerDepth, base) : [];
    }
  console.warn(`${page2.value.path} is missing sidebar config.`);
  return [];
};
const resolveSidebarItems = () => {
  const routeLocale = useRouteLocale();
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  const sidebarConfig = frontmatter.value.home ? false : frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "structure";
  const headerDepth = frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2;
  return sidebarConfig === false ? [] : sidebarConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : sidebarConfig === "structure" ? resolveArraySidebarItems(sidebarData[routeLocale.value], headerDepth, routeLocale.value) : isArray$2(sidebarConfig) ? resolveArraySidebarItems(sidebarConfig, headerDepth) : isPlainObject(sidebarConfig) ? resolveMultiSidebarItems(sidebarConfig, headerDepth) : [];
};
const sidebarItemsSymbol = Symbol.for("sidebarItems");
const setupSidebarItems = () => {
  const sidebarItems = computed(() => resolveSidebarItems());
  provide(sidebarItemsSymbol, sidebarItems);
};
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems)
    throw new Error("useSidebarItems() is called without provider.");
  return sidebarItems;
};
const footer = "";
const PageFooter = defineComponent({
  name: "PageFooter",
  setup() {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const author = usePageAuthor();
    const enable = computed(() => {
      const { copyright: copyright2, footer: footer2 } = frontmatter.value;
      return footer2 !== false && Boolean(copyright2 || footer2 || themeLocale.value.displayFooter);
    });
    const content = computed(() => {
      const { footer: footer2 } = frontmatter.value;
      return footer2 === false ? false : isString$1(footer2) ? footer2 : themeLocale.value.footer || "";
    });
    const copyright = computed(() => "copyright" in frontmatter.value ? frontmatter.value.copyright : "copyright" in themeLocale.value ? themeLocale.value.copyright : author.value.length ? `Copyright © ${new Date().getFullYear()} ${author.value[0].name}` : false);
    return () => enable.value ? h("footer", { class: "footer-wrapper" }, [
      content.value ? h("div", { class: "footer", innerHTML: content.value }) : null,
      copyright.value ? h("div", {
        class: "copyright",
        innerHTML: copyright.value
      }) : null
    ]) : null;
  }
});
const dropdownLink = "";
const DropdownLink = defineComponent({
  name: "NavbarDropdownLink",
  props: {
    /**
     * Dropdown config
     *
     * 下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props, { slots }) {
    const page2 = usePageData();
    const config2 = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const open = ref(false);
    watch(() => page2.value.path, () => {
      open.value = false;
    });
    const handleDropdown = (event) => {
      const isTriggerByTab = event.detail === 0;
      if (isTriggerByTab)
        open.value = !open.value;
    };
    return () => {
      var _a2;
      return h("div", { class: ["dropdown-wrapper", { open: open.value }] }, [
        h("button", {
          class: "dropdown-title",
          type: "button",
          "aria-label": dropdownAriaLabel.value,
          onClick: handleDropdown
        }, [
          ((_a2 = slots["title"]) == null ? void 0 : _a2.call(slots)) || h("span", { class: "title" }, [
            h(HopeIcon, { icon: config2.value.icon }),
            props.config.text
          ]),
          h("span", { class: "arrow" }),
          h("ul", { class: "nav-dropdown" }, config2.value.children.map((child, index2) => {
            const isLastChild = index2 === config2.value.children.length - 1;
            return h("li", { class: "dropdown-item" }, "children" in child ? [
              h("h4", { class: "dropdown-subtitle" }, child.link ? h(AutoLink, {
                config: child,
                onFocusout: () => {
                  if (
                    // no children
                    child.children.length === 0 && isLastChild
                  )
                    open.value = false;
                }
              }) : h("span", child.text)),
              h("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild, grandIndex) => h("li", { class: "dropdown-subitem" }, h(AutoLink, {
                config: grandchild,
                onFocusout: () => {
                  if (
                    // last item of grandchild
                    grandIndex === child.children.length - 1 && isLastChild
                  )
                    open.value = false;
                }
              }))))
            ] : h(AutoLink, {
              config: child,
              onFocusout: () => {
                if (isLastChild)
                  open.value = false;
              }
            }));
          }))
        ])
      ]);
    };
  }
});
const I18nIcon = () => h(G$1, { name: "i18n" }, () => [
  h("path", {
    d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"
  })
]);
I18nIcon.displayName = "I18nIcon";
const resolveNavbarItem = (item, prefix = "") => {
  if (isString$1(item))
    return useAutoLink(`${prefix}${item}`);
  if ("children" in item)
    return {
      ...item,
      ...item.link && !isLinkExternal(item.link) ? useAutoLink(`${prefix}${item.link}`) : {},
      children: item.children.map((child) => resolveNavbarItem(child, `${prefix}${item.prefix || ""}`))
    };
  return {
    ...item,
    link: isLinkExternal(item.link) ? item.link : useAutoLink(`${prefix}${item.link}`).link
  };
};
const useNavbarConfig = () => computed(() => (useThemeLocaleData().value.navbar || []).map((item) => resolveNavbarItem(item)));
const useNavbarLanguageDropdown = () => {
  const router = useRouter$1();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const localePaths = at(siteLocale.value.locales);
    if (localePaths.length < 2)
      return null;
    const { path, fullPath } = router.currentRoute.value;
    const { navbarLocales } = themeLocale.value;
    const languageDropdown = {
      text: "",
      ariaLabel: navbarLocales == null ? void 0 : navbarLocales.selectLangAriaLabel,
      children: localePaths.map((targetLocalePath) => {
        var _a2, _b2, _c;
        const targetSiteLocale = ((_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) ?? {};
        const targetThemeLocale = ((_b2 = themeData2.value.locales) == null ? void 0 : _b2[targetLocalePath]) ?? {};
        const targetLang = targetSiteLocale.lang || "";
        const text = ((_c = targetThemeLocale.navbarLocales) == null ? void 0 : _c.langName) ?? targetLang;
        let link;
        if (targetLang === siteLocale.value.lang) {
          link = path;
        } else {
          const targetLocalePage = path.replace(routeLocale.value, targetLocalePath);
          link = // try to link to the corresponding page of current page
          router.getRoutes().some((item) => item.path === targetLocalePage) ? (
            // try to keep current hash across languages
            fullPath.replace(path, targetLocalePage)
          ) : (
            // or fallback to homepage
            targetThemeLocale.home ?? targetLocalePath
          );
        }
        return {
          text,
          link
        };
      })
    };
    return languageDropdown;
  });
};
const useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();
  const repo = computed(() => themeLocale.value.repo || null);
  const repoLink2 = computed(() => repo.value ? Le(repo.value) : null);
  const repoType = computed(() => repo.value ? Ne(repo.value) : null);
  const repoLabel = computed(() => repoLink2.value ? themeLocale.value.repoLabel ?? (repoType.value === null ? "Source" : repoType.value) : null);
  return computed(() => {
    if (!repoLink2.value || !repoLabel.value || themeLocale.value.repoDisplay === false)
      return null;
    return {
      type: repoType.value || "Source",
      label: repoLabel.value,
      link: repoLink2.value
    };
  });
};
defineComponent({
  name: "LanguageDropdown",
  setup() {
    const dropdown = useNavbarLanguageDropdown();
    return () => dropdown.value ? h("div", { class: "nav-item" }, h(DropdownLink, { class: "i18n-dropdown", config: dropdown.value }, {
      title: () => {
        var _a2;
        return h(I18nIcon, {
          "aria-label": (_a2 = dropdown.value) == null ? void 0 : _a2.ariaLabel,
          style: {
            width: "1rem",
            height: "1rem",
            verticalAlign: "middle"
          }
        });
      }
    })) : null;
  }
});
const navScreenDropdown = "";
const NavScreenDropdown = defineComponent({
  name: "NavScreenDropdown",
  props: {
    /**
     * Navbar Screen Dropdown list config
     *
     * 导航栏下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const page2 = usePageData();
    const config2 = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const open = ref(false);
    watch(() => page2.value.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
    return () => [
      h("button", {
        class: ["nav-screen-dropdown-title", { active: open.value }],
        type: "button",
        "aria-label": dropdownAriaLabel.value,
        onClick: () => {
          open.value = !open.value;
        }
      }, [
        h("span", { class: "title" }, [
          h(HopeIcon, { icon: config2.value.icon }),
          props.config.text
        ]),
        h("span", { class: ["arrow", open.value ? "down" : "end"] })
      ]),
      h("ul", {
        class: ["nav-screen-dropdown", { hide: !open.value }]
      }, config2.value.children.map((child) => h("li", { class: "dropdown-item" }, "children" in child ? [
        h("h4", { class: "dropdown-subtitle" }, child.link ? h(AutoLink, {
          config: child,
          onFocusout: () => {
            if (isLastItemOfArray(child, config2.value.children) && child.children.length === 0)
              open.value = false;
          }
        }) : h("span", child.text)),
        h("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild) => h("li", { class: "dropdown-subitem" }, h(AutoLink, {
          config: grandchild,
          onFocusout: () => {
            if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config2.value.children))
              open.value = false;
          }
        }))))
      ] : h(AutoLink, {
        config: child,
        onFocusout: () => {
          if (isLastItemOfArray(child, config2.value.children))
            open.value = false;
        }
      }))))
    ];
  }
});
const navScreenLinks = "";
const NavScreenLinks = defineComponent({
  name: "NavScreenLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h("nav", { class: "nav-screen-links" }, navbarConfig.value.map((config2) => h("div", { class: "navbar-links-item" }, "children" in config2 ? h(NavScreenDropdown, { config: config2 }) : h(AutoLink, { config: config2 })))) : null;
  }
});
const DarkIcon = () => h(G$1, { name: "dark" }, () => h("path", {
  d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"
}));
DarkIcon.displayName = "DarkIcon";
const LightIcon = () => h(G$1, { name: "light" }, () => h("path", {
  d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"
}));
LightIcon.displayName = "LightIcon";
const AutoIcon = () => h(G$1, { name: "auto" }, () => h("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"
}));
AutoIcon.displayName = "AutoIcon";
const EnterFullScreenIcon = () => h(G$1, { name: "enter-fullscreen" }, () => h("path", {
  d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"
}));
EnterFullScreenIcon.displayName = "EnterFullScreenIcon";
const CancelFullScreenIcon = () => h(G$1, { name: "cancel-fullscreen" }, () => h("path", {
  d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"
}));
CancelFullScreenIcon.displayName = "CancelFullScreenIcon";
const OutlookIcon = () => h(G$1, { name: "outlook" }, () => [
  h("path", {
    d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"
  })
]);
OutlookIcon.displayName = "OutlookIcon";
const appearanceSwitch = "";
const AppearanceSwitch = defineComponent({
  name: "AppearanceSwitch",
  setup() {
    const { config: config2, status } = useDarkmode();
    const toggleDarkMode = () => {
      if (config2.value === "switch")
        status.value = {
          light: "dark",
          dark: "auto",
          auto: "light"
        }[status.value];
      else
        status.value = status.value === "light" ? "dark" : "light";
    };
    return () => h("button", {
      id: "appearance-switch",
      onClick: () => toggleDarkMode()
    }, [
      h(AutoIcon, {
        style: {
          display: status.value === "auto" ? "block" : "none"
        }
      }),
      h(DarkIcon, {
        style: {
          display: status.value === "dark" ? "block" : "none"
        }
      }),
      h(LightIcon, {
        style: {
          display: status.value === "light" ? "block" : "none"
        }
      })
    ]);
  }
});
const AppearanceMode = defineComponent({
  name: "AppearanceMode",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { canToggle } = useDarkmode();
    const locale = computed(() => themeLocale.value.outlookLocales.darkmode);
    return () => canToggle.value ? h("div", { class: "appearance-wrapper" }, [
      h("label", { class: "appearance-title", for: "appearance-switch" }, locale.value),
      h(AppearanceSwitch)
    ]) : null;
  }
});
const themeColorPicker = "";
const ThemeColorPicker = defineComponent({
  name: "ThemeColorPicker",
  props: {
    /**
     * Theme color picker config
     *
     * 主题色选择器配置
     */
    themeColor: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const setThemeColor = (theme = "") => {
      const classes = document.documentElement.classList;
      const themes = at(props.themeColor).map((color) => `theme-${color}`);
      if (!theme) {
        localStorage.removeItem("theme");
        classes.remove(...themes);
        return;
      }
      classes.remove(...themes.filter((themeColorClass) => themeColorClass !== `theme-${theme}`));
      classes.add(`theme-${theme}`);
      localStorage.setItem("theme", theme);
    };
    onMounted(() => {
      const theme = localStorage.getItem("theme");
      if (theme)
        setThemeColor(theme);
    });
    return () => h("ul", { id: "theme-color-picker" }, [
      h("li", h("span", {
        class: "theme-color",
        onClick: () => setThemeColor()
      })),
      ...Tt(props.themeColor).map(([color, value]) => h("li", h("span", {
        style: { background: value },
        onClick: () => setThemeColor(color)
      })))
    ]);
  }
});
const ThemeColor = defineComponent({
  name: "ThemeColor",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const locale = computed(() => themeLocale.value.outlookLocales.themeColor);
    const themeColor = computed(() => {
      const { themeColor: themeColor2 } = themeData2.value;
      return themeColor2 === false ? null : themeColor2;
    });
    return () => themeColor.value ? h("div", { class: "theme-color-wrapper" }, [
      h("label", { class: "theme-color-title", for: "theme-color-picker" }, locale.value),
      h(ThemeColorPicker, { themeColor: themeColor.value })
    ]) : null;
  }
});
const toggleFullScreenButton = "";
const ToggleFullScreenButton = defineComponent({
  name: "ToggleFullScreenButton",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { isSupported, isFullscreen, toggle } = useFullscreen();
    const fullscreenLocale = computed(() => themeLocale.value.outlookLocales.fullscreen);
    return () => isSupported ? h("div", { class: "full-screen-wrapper" }, [
      h("label", { class: "full-screen-title", for: "full-screen-switch" }, fullscreenLocale.value),
      h("button", {
        class: "full-screen",
        id: "full-screen-switch",
        ariaPressed: isFullscreen.value,
        onClick: () => toggle()
      }, isFullscreen.value ? h(CancelFullScreenIcon) : h(EnterFullScreenIcon))
    ]) : null;
  }
});
const OutlookSettings = defineComponent({
  name: "OutlookSettings",
  setup() {
    const themeData2 = useThemeData();
    const pure = usePure();
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen);
    return () => h(ClientOnly, () => [
      enableThemeColor.value ? h(ThemeColor) : null,
      h(AppearanceMode),
      enableFullScreen.value ? h(ToggleFullScreenButton) : null
    ]);
  }
});
const navScreen = "";
const NavScreen = defineComponent({
  name: "NavScreen",
  props: {
    /**
     * Whether to show the screen
     *
     * 是否显示
     */
    show: Boolean
  },
  emits: ["close"],
  setup(props, { emit, slots }) {
    const page2 = usePageData();
    const { isMobile } = useWindowSize();
    const body = ref();
    const isLocked = useScrollLock(body);
    onMounted(() => {
      body.value = document.body;
      watch(isMobile, (value) => {
        if (!value && props.show) {
          isLocked.value = false;
          emit("close");
        }
      });
      watch(() => page2.value.path, () => {
        isLocked.value = false;
        emit("close");
      });
    });
    onUnmounted(() => {
      isLocked.value = false;
    });
    return () => h(Transition, {
      name: "fade",
      onEnter: () => {
        isLocked.value = true;
      },
      onAfterLeave: () => {
        isLocked.value = false;
      }
    }, () => {
      var _a2, _b2;
      return props.show ? h("div", { id: "nav-screen" }, h("div", { class: "container" }, [
        (_a2 = slots["before"]) == null ? void 0 : _a2.call(slots),
        h(NavScreenLinks),
        h("div", { class: "outlook-wrapper" }, h(OutlookSettings)),
        (_b2 = slots["after"]) == null ? void 0 : _b2.call(slots)
      ])) : null;
    });
  }
});
const navbarBrand = "";
const NavbarBrand = defineComponent({
  name: "NavbarBrand",
  setup() {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const siteBrandLink = computed(() => themeLocale.value.home || routeLocale.value);
    const siteBrandTitle = computed(() => siteLocale.value.title);
    const siteBrandLogo = computed(() => themeLocale.value.logo ? withBase(themeLocale.value.logo) : null);
    const siteBrandLogoDark = computed(() => themeLocale.value.logoDark ? withBase(themeLocale.value.logoDark) : null);
    return () => h(RouterLink$1, { to: siteBrandLink.value, class: "brand" }, () => [
      siteBrandLogo.value ? h("img", {
        class: ["logo", { light: Boolean(siteBrandLogoDark.value) }],
        src: siteBrandLogo.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandLogoDark.value ? h("img", {
        class: ["logo dark"],
        src: siteBrandLogoDark.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandTitle.value ? h("span", {
        class: [
          "site-name",
          {
            "hide-in-pad": siteBrandLogo.value && themeLocale.value.hideSiteNameOnMobile !== false
          }
        ]
      }, siteBrandTitle.value) : null
    ]);
  }
});
const navbarLinks = "";
const NavbarLinks = defineComponent({
  name: "NavbarLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h("nav", { class: "nav-links" }, [
      ...navbarConfig.value.map((config2) => h("div", { class: "nav-item hide-in-mobile" }, "children" in config2 ? h(DropdownLink, { config: config2 }) : h(AutoLink, { config: config2 })))
    ]) : null;
  }
});
const repoLink = "";
const RepoLink = defineComponent({
  name: "RepoLink",
  components: { BitbucketIcon: bt, GiteeIcon: yt, GitHubIcon: gt, GitlabIcon: $t, SourceIcon: wt },
  setup() {
    const repo = useNavbarRepo();
    return () => repo.value ? h("div", { class: "nav-item" }, h("a", {
      class: "repo-link",
      href: repo.value.link,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": repo.value.label
    }, h(resolveComponent(`${repo.value.type}Icon`), {
      style: {
        width: "1.25rem",
        height: "1.25rem",
        verticalAlign: "middle"
      }
    }))) : null;
  }
});
const toggleNavbarButton = "";
const ToggleNavbarButton = ({ active = false }, { emit }) => h("button", {
  class: ["toggle-navbar-button", { "is-active": active }],
  "aria-label": "Toggle Navbar",
  "aria-expanded": active,
  "aria-controls": "nav-screen",
  onClick: () => emit("toggle")
}, h("span", { class: "button-container" }, [
  h("span", { class: "button-top" }),
  h("span", { class: "button-middle" }),
  h("span", { class: "button-bottom" })
]));
ToggleNavbarButton.displayName = "ToggleNavbarButton";
const toggleSidebarButton = "";
const ToggleSidebarButton = (_, { emit }) => h("button", {
  class: "toggle-sidebar-button",
  title: "Toggle Sidebar",
  onClick: () => emit("toggle")
}, h("span", { class: "icon" }));
ToggleSidebarButton.displayName = "ToggleSidebarButton";
ToggleSidebarButton.emits = ["toggle"];
const outlookButton = "";
const OutlookButton = defineComponent({
  name: "OutlookButton",
  setup() {
    const { isSupported } = useFullscreen();
    const themeData2 = useThemeData();
    const pure = usePure();
    const page2 = usePageData();
    const { canToggle } = useDarkmode();
    const open = ref(false);
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen && isSupported);
    watch(() => page2.value.path, () => {
      open.value = false;
    });
    return () => canToggle.value || enableFullScreen.value || enableThemeColor.value ? h(
      "div",
      { class: "nav-item hide-in-mobile" },
      // only AppearanceSwitch is enabled
      canToggle.value && !enableFullScreen.value && !enableThemeColor.value ? h(AppearanceSwitch) : (
        // only FullScreen is enabled
        enableFullScreen.value && !canToggle.value && !enableThemeColor.value ? h(ToggleFullScreenButton) : h("button", {
          class: ["outlook-button", { open: open.value }],
          tabindex: "-1",
          ariaHidden: true
        }, [
          h(OutlookIcon),
          h("div", { class: "outlook-dropdown" }, h(OutlookSettings))
        ])
      )
    ) : null;
  }
});
const navbar = "";
const Navbar = defineComponent({
  name: "NavBar",
  emits: ["toggleSidebar"],
  setup(_props, { emit, slots }) {
    const themeLocale = useThemeLocaleData();
    const { isMobile } = useWindowSize();
    const showScreen = ref(false);
    const autoHide = computed(() => {
      const { navbarAutoHide = "mobile" } = themeLocale.value;
      return navbarAutoHide !== "none" && (navbarAutoHide === "always" || isMobile.value);
    });
    const navbarLayout = computed(() => themeLocale.value.navbarLayout || {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "Outlook", "Search"]
    });
    return () => {
      var _a2, _b2, _c, _d, _e2, _f;
      const map = {
        Brand: h(NavbarBrand),
        Language: null,
        Links: h(NavbarLinks),
        Repo: h(RepoLink),
        Outlook: h(OutlookButton),
        Search: Vt("Docsearch") ? h(resolveComponent("Docsearch")) : Vt("SearchBox") ? h(resolveComponent("SearchBox")) : Vt("SearchBox") ? h(resolveComponent("SearchBox")) : null
      };
      return [
        h("header", {
          class: [
            "navbar",
            {
              "auto-hide": autoHide.value,
              "hide-icon": themeLocale.value.navbarIcon === false
            }
          ],
          id: "navbar"
        }, [
          h("div", { class: "navbar-start" }, [
            // @ts-ignore
            h(ToggleSidebarButton, {
              onToggle: () => {
                if (showScreen.value)
                  showScreen.value = false;
                emit("toggleSidebar");
              }
            }),
            (_a2 = slots["startBefore"]) == null ? void 0 : _a2.call(slots),
            ...(navbarLayout.value.start || []).map((item) => map[item]),
            (_b2 = slots["startAfter"]) == null ? void 0 : _b2.call(slots)
          ]),
          h("div", { class: "navbar-center" }, [
            (_c = slots["centerBefore"]) == null ? void 0 : _c.call(slots),
            ...(navbarLayout.value.center || []).map((item) => map[item]),
            (_d = slots["centerAfter"]) == null ? void 0 : _d.call(slots)
          ]),
          h("div", { class: "navbar-end" }, [
            (_e2 = slots["endBefore"]) == null ? void 0 : _e2.call(slots),
            ...(navbarLayout.value.end || []).map((item) => map[item]),
            (_f = slots["endAfter"]) == null ? void 0 : _f.call(slots),
            h(ToggleNavbarButton, {
              active: showScreen.value,
              onToggle: () => {
                showScreen.value = !showScreen.value;
              }
            })
          ])
        ]),
        h(NavScreen, {
          show: showScreen.value,
          onClose: () => {
            showScreen.value = false;
          }
        }, {
          before: () => {
            var _a3;
            return (_a3 = slots["screenTop"]) == null ? void 0 : _a3.call(slots);
          },
          after: () => {
            var _a3;
            return (_a3 = slots["screenBottom"]) == null ? void 0 : _a3.call(slots);
          }
        })
      ];
    };
  }
});
const sidebarChild = "";
const SidebarChild = defineComponent({
  name: "SidebarChild",
  props: {
    /**
     * Sidebar item config
     *
     * 侧边栏项目配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    return () => [
      renderItem(props.config, {
        class: [
          "sidebar-link",
          `sidebar-${props.config.type}`,
          { active: isActiveSidebarItem(route, props.config, true) }
        ],
        exact: true
      }),
      renderChildren$1(props.config.children)
    ];
  }
});
const sidebarGroup = "";
const SidebarGroup = defineComponent({
  name: "SidebarGroup",
  props: {
    /**
     * Sidebar group item config
     *
     * 侧边栏分组配置
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * Whether current group is open
     *
     * 当前分组是否展开
     */
    open: {
      type: Boolean,
      required: true
    }
  },
  emits: ["toggle"],
  setup(props, { emit }) {
    const route = useRoute();
    const active = computed(() => isActiveSidebarItem(route, props.config));
    const exact = computed(() => isActiveSidebarItem(route, props.config, true));
    return () => {
      const { collapsible, children = [], icon, prefix, link, text } = props.config;
      return h("section", { class: "sidebar-group" }, [
        h(collapsible ? "button" : "p", {
          class: [
            "sidebar-heading",
            {
              clickable: collapsible || link,
              exact: exact.value,
              active: active.value
            }
          ],
          ...collapsible ? {
            onClick: () => emit("toggle"),
            onKeydown: (event) => {
              if (event.key === "Enter")
                emit("toggle");
            }
          } : {}
        }, [
          // icon
          h(HopeIcon, { icon }),
          // title
          link ? h(RouterLink$1, { to: link, class: "title" }, () => text) : h("span", { class: "title" }, text),
          // arrow
          collapsible ? h("span", { class: ["arrow", props.open ? "down" : "end"] }) : null
        ]),
        props.open || !collapsible ? h(SidebarLinks, { key: prefix, config: children }) : null
      ]);
    };
  }
});
const sidebarLinks = "";
const SidebarLinks = defineComponent({
  name: "SidebarLinks",
  props: {
    /**
     * Sidebar links config
     *
     * 侧边栏链接配置
     */
    config: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const openGroupIndex = ref(-1);
    const toggleGroup = (index2) => {
      openGroupIndex.value = index2 === openGroupIndex.value ? -1 : index2;
    };
    watch(() => route.path, () => {
      const index2 = props.config.findIndex((item) => isMatchedSidebarItem(route, item));
      openGroupIndex.value = index2;
    }, { immediate: true, flush: "post" });
    return () => h("ul", { class: "sidebar-links" }, props.config.map((config2, index2) => h("li", config2.type === "group" ? h(SidebarGroup, {
      config: config2,
      open: index2 === openGroupIndex.value,
      onToggle: () => toggleGroup(index2)
    }) : h(SidebarChild, { config: config2 }))));
  }
});
const sidebar = "";
const Sidebar = defineComponent({
  name: "SideBar",
  setup(_props, { slots }) {
    const route = useRoute();
    const themeLocale = useThemeLocaleData();
    const sidebarItems = useSidebarItems();
    const sidebar2 = ref();
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        const activeSidebarItem = document.querySelector(`.sidebar a.sidebar-link[href="${route.path}${hash}"]`);
        if (!activeSidebarItem)
          return;
        const { top: sidebarTop, height: sidebarHeight } = sidebar2.value.getBoundingClientRect();
        const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
        if (activeSidebarItemTop < sidebarTop)
          activeSidebarItem.scrollIntoView(true);
        else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight)
          activeSidebarItem.scrollIntoView(false);
      });
    });
    return () => {
      var _a2, _b2, _c;
      return h("aside", {
        class: [
          "sidebar",
          { "hide-icon": themeLocale.value.sidebarIcon === false }
        ],
        id: "sidebar",
        ref: sidebar2
      }, [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        ((_b2 = slots["default"]) == null ? void 0 : _b2.call(slots)) || h(SidebarLinks, { config: sidebarItems.value }),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const common = "";
const CommonWrapper = defineComponent({
  name: "CommonWrapper",
  props: {
    /**
     * Whether disable navbar
     *
     * 是否禁用导航栏
     */
    noNavbar: Boolean,
    /**
     * Whether disable sidebar
     *
     * 是否禁用侧边栏
     */
    noSidebar: Boolean
  },
  setup(props, { slots }) {
    const router = useRouter$1();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { isMobile, isWide } = useWindowSize();
    const [isMobileSidebarOpen, toggleMobileSidebar] = useToggle(false);
    const [isDesktopSidebarCollapsed, toggleDesktopSidebar] = useToggle(false);
    const sidebarItems = useSidebarItems();
    const body = ref();
    const isLocked = useScrollLock(body);
    const hideNavbar = ref(false);
    const enableNavbar = computed(() => {
      if (props.noNavbar)
        return false;
      if (frontmatter.value.navbar === false || themeLocale.value.navbar === false)
        return false;
      return Boolean(page2.value.title || themeLocale.value.logo || themeLocale.value.repo || themeLocale.value.navbar);
    });
    const enableSidebar = computed(() => {
      if (props.noSidebar)
        return false;
      return frontmatter.value.sidebar !== false && sidebarItems.value.length !== 0 && !frontmatter.value.home;
    });
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e2) => {
      touchStart.x = e2.changedTouches[0].clientX;
      touchStart.y = e2.changedTouches[0].clientY;
    };
    const onTouchEnd = (e2) => {
      const dx = e2.changedTouches[0].clientX - touchStart.x;
      const dy = e2.changedTouches[0].clientY - touchStart.y;
      if (
        // horizontal swipe
        Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 40
      )
        if (dx > 0 && touchStart.x <= 80)
          toggleMobileSidebar(true);
        else
          toggleMobileSidebar(false);
    };
    const enableToc = computed(() => frontmatter.value.home ? false : frontmatter.value.toc || themeLocale.value.toc !== false && frontmatter.value.toc !== false);
    const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let lastDistance = 0;
    useEventListener("scroll", useThrottleFn(() => {
      const distance = getScrollTop();
      if (distance <= 58 || distance < lastDistance)
        hideNavbar.value = false;
      else if (lastDistance + 200 < distance && !isMobileSidebarOpen.value)
        hideNavbar.value = true;
      lastDistance = distance;
    }, 300, true));
    watch(isMobileSidebarOpen, (value) => {
      isLocked.value = value;
    });
    watch(isMobile, (value) => {
      if (!value)
        toggleMobileSidebar(false);
    });
    onMounted(() => {
      body.value = document.body;
      const unregisterRouterHook = router.afterEach(() => {
        toggleMobileSidebar(false);
      });
      onUnmounted(() => {
        unregisterRouterHook();
      });
    });
    return () => h(Vt("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : Rt, () => {
      var _a2;
      return h("div", {
        class: [
          "theme-container",
          // classes
          {
            "no-navbar": !enableNavbar.value,
            "no-sidebar": !enableSidebar.value && !(slots["sidebar"] || slots["sidebarTop"] || slots["sidebarBottom"]),
            "has-toc": enableToc.value,
            "hide-navbar": hideNavbar.value,
            "sidebar-collapsed": !isMobile.value && !isWide.value && isDesktopSidebarCollapsed.value,
            "sidebar-open": isMobile.value && isMobileSidebarOpen.value
          },
          frontmatter.value.containerClass || ""
        ],
        onTouchStart,
        onTouchEnd
      }, [
        // navbar
        enableNavbar.value ? h(Navbar, { onToggleSidebar: () => toggleMobileSidebar() }, {
          startBefore: () => {
            var _a3;
            return (_a3 = slots["navbarStartBefore"]) == null ? void 0 : _a3.call(slots);
          },
          startAfter: () => {
            var _a3;
            return (_a3 = slots["navbarStartAfter"]) == null ? void 0 : _a3.call(slots);
          },
          centerBefore: () => {
            var _a3;
            return (_a3 = slots["navbarCenterBefore"]) == null ? void 0 : _a3.call(slots);
          },
          centerAfter: () => {
            var _a3;
            return (_a3 = slots["navbarCenterAfter"]) == null ? void 0 : _a3.call(slots);
          },
          endBefore: () => {
            var _a3;
            return (_a3 = slots["navbarEndBefore"]) == null ? void 0 : _a3.call(slots);
          },
          endAfter: () => {
            var _a3;
            return (_a3 = slots["navbarEndAfter"]) == null ? void 0 : _a3.call(slots);
          },
          screenTop: () => {
            var _a3;
            return (_a3 = slots["navScreenTop"]) == null ? void 0 : _a3.call(slots);
          },
          screenBottom: () => {
            var _a3;
            return (_a3 = slots["navScreenBottom"]) == null ? void 0 : _a3.call(slots);
          }
        }) : null,
        // sidebar mask
        h(Transition, { name: "fade" }, () => isMobileSidebarOpen.value ? h("div", {
          class: "sidebar-mask",
          onClick: () => toggleMobileSidebar(false)
        }) : null),
        // toggle sidebar button
        h(Transition, { name: "fade" }, () => isMobile.value ? null : h("div", {
          class: "toggle-sidebar-wrapper",
          onClick: () => toggleDesktopSidebar()
        }, h("span", {
          class: [
            "arrow",
            isDesktopSidebarCollapsed.value ? "end" : "start"
          ]
        }))),
        // sidebar
        h(Sidebar, {}, {
          ...slots["sidebar"] ? {
            default: () => {
              var _a3;
              return (_a3 = slots["sidebar"]) == null ? void 0 : _a3.call(slots);
            }
          } : {},
          top: () => {
            var _a3;
            return (_a3 = slots["sidebarTop"]) == null ? void 0 : _a3.call(slots);
          },
          bottom: () => {
            var _a3;
            return (_a3 = slots["sidebarBottom"]) == null ? void 0 : _a3.call(slots);
          }
        }),
        (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots),
        h(PageFooter)
      ]);
    });
  }
});
const featurePanel = "";
const FeaturePanel = defineComponent({
  name: "FeaturePanel",
  props: {
    /**
     * Feature config
     */
    items: {
      type: Object,
      default: () => []
    },
    /**
     * Feature header
     */
    header: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    return () => h("div", { class: "feature-panel" }, [
      props.header ? h("h2", { class: "feature-header" }, props.header) : null,
      props.items.length ? h("div", { class: "feature-wrapper" }, props.items.map((feature) => {
        const children = [
          h("h3", [
            h(HopeIcon, { icon: feature.icon }),
            h("span", { innerHTML: feature.title })
          ]),
          h("p", { innerHTML: feature.details })
        ];
        return feature.link ? isLinkExternal(feature.link) ? h("a", {
          class: "feature-item link",
          href: feature.link,
          role: "navigation",
          "aria-label": feature.title,
          target: "_blank"
        }, children) : h(RouterLink$1, {
          class: "feature-item link",
          to: feature.link,
          role: "navigation",
          "aria-label": feature.title
        }, () => children) : h("div", { class: "feature-item" }, children);
      })) : null
    ]);
  }
});
const DropTransition = defineComponent({
  name: "DropTransition",
  props: {
    /**
     * @description Transition type
     */
    type: {
      type: String,
      default: "single"
    },
    /**
     * @description Transition delay
     */
    delay: { type: Number, default: 0 },
    /**
     * @description Transition duration
     */
    duration: { type: Number, default: 0.25 },
    /**
     * @description appear
     */
    appear: Boolean
  },
  setup(props, { slots }) {
    const setStyle = (item) => {
      item.style.transition = `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
      item.style.transform = "translateY(-20px)";
      item.style.opacity = "0";
    };
    const unsetStyle = (item) => {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
    };
    return () => h(
      // @ts-ignore
      props.type === "single" ? Transition : TransitionGroup,
      {
        name: "drop",
        appear: props.appear,
        onAppear: setStyle,
        onAfterAppear: unsetStyle,
        onEnter: setStyle,
        onAfterEnter: unsetStyle,
        onBeforeLeave: setStyle
      },
      () => {
        var _a2;
        return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
      }
    );
  }
});
const heroInfo = "";
const HeroInfo = defineComponent({
  name: "HeroInfo",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const heroText = computed(() => {
      if (frontmatter.value.heroText === false)
        return false;
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = computed(() => {
      if (frontmatter.value.tagline === false)
        return false;
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const heroImage = computed(() => {
      if (!frontmatter.value.heroImage)
        return null;
      return withBase(frontmatter.value.heroImage);
    });
    const heroImageDark = computed(() => {
      if (!frontmatter.value.heroImageDark)
        return null;
      return withBase(frontmatter.value.heroImageDark);
    });
    const heroAlt = computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const actions = computed(() => frontmatter.value.actions ?? []);
    return () => {
      var _a2, _b2;
      return h("header", { class: "hero-info-wrapper" }, [
        ((_a2 = slots["heroImage"]) == null ? void 0 : _a2.call(slots)) || h(DropTransition, { appear: true, type: "group" }, () => [
          heroImage.value ? h("img", {
            key: "light",
            class: { light: heroImageDark.value },
            src: heroImage.value,
            alt: heroAlt.value
          }) : null,
          heroImageDark.value ? h("img", {
            key: "dark",
            class: "dark",
            src: heroImageDark.value,
            alt: heroAlt.value
          }) : null
        ]),
        ((_b2 = slots["heroInfo"]) == null ? void 0 : _b2.call(slots)) || h("div", { class: "hero-info" }, [
          heroText.value ? h(DropTransition, { appear: true, delay: 0.04 }, () => h("h1", { id: "main-title" }, heroText.value)) : null,
          tagline.value ? h(DropTransition, { appear: true, delay: 0.08 }, () => h("p", { class: "description" }, tagline.value)) : null,
          actions.value.length ? h(DropTransition, { appear: true, delay: 0.12 }, () => h("p", { class: "actions" }, actions.value.map((action) => h(AutoLink, {
            class: ["action-button", action.type || "default"],
            config: action,
            noExternalLinkIcon: true
          })))) : null
        ])
      ]);
    };
  }
});
const MarkdownContent = ({ custom }) => h(Content, { class: ["theme-hope-content", { custom }] });
MarkdownContent.displayName = "MarkdownContent";
MarkdownContent.props = {
  custom: Boolean
};
const homePage = "";
const HomePage = defineComponent({
  name: "HopePage",
  setup(_props, { slots }) {
    const pure = usePure();
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      const { features: features2 } = frontmatter.value;
      if (isArray$2(features2))
        return features2.some((item) => !("items" in item)) ? [{ items: features2 }] : features2;
      return [];
    });
    return () => {
      var _a2, _b2, _c;
      return h("main", {
        class: ["home project", { pure: pure.value }],
        id: "main-content",
        "aria-labelledby": frontmatter.value.heroText === null ? void 0 : "main-title"
      }, [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        h(HeroInfo),
        features.value.map(({ header = "", items }, index2) => h(DropTransition, { appear: true, delay: 0.16 + index2 * 0.08 }, () => h(FeaturePanel, { header, items }))),
        (_b2 = slots["center"]) == null ? void 0 : _b2.call(slots),
        h(DropTransition, { appear: true, delay: 0.16 + features.value.length * 0.08 }, () => h(MarkdownContent)),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const getAncestorLinks = (path, routeLocale) => {
  const routePaths = path.replace(routeLocale, "/").split("/");
  const links = [];
  let link = removeEndingSlash(routeLocale);
  routePaths.forEach((element, index2) => {
    if (index2 !== routePaths.length - 1) {
      link += `${element}/`;
      links.push(link);
    } else if (element !== "") {
      link += element;
      links.push(link);
    }
  });
  return links;
};
const breadcrumb = "";
const BreadCrumb = defineComponent({
  name: "BreadCrumb",
  setup() {
    const router = useRouter$1();
    const page2 = usePageData();
    const routeLocale = useRouteLocale();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const config2 = ref([]);
    const enable = computed(() => (frontmatter.value.breadcrumb || frontmatter.value.breadcrumb !== false && themeLocale.value.breadcrumb !== false) && config2.value.length > 1);
    const iconEnable = computed(() => frontmatter.value.breadcrumbIcon || frontmatter.value.breadcrumbIcon !== false && themeLocale.value.breadcrumbIcon !== false);
    const getBreadCrumbConfig = () => {
      const routes = router.getRoutes();
      const breadcrumbConfig = getAncestorLinks(page2.value.path, routeLocale.value).map((link) => {
        const route = routes.find((route2) => route2.path === link);
        if (route) {
          const { meta, path } = Ht(router, route.path);
          const title = meta[
            "s"
            /* ArticleInfoType.shortTitle */
          ] || meta[
            "t"
            /* ArticleInfoType.title */
          ];
          if (title)
            return {
              title,
              icon: meta[
                "i"
                /* ArticleInfoType.icon */
              ],
              path
            };
        }
        return null;
      }).filter((item) => item !== null);
      if (breadcrumbConfig.length > 1)
        config2.value = breadcrumbConfig;
    };
    onMounted(() => {
      getBreadCrumbConfig();
      watch(() => page2.value.path, getBreadCrumbConfig);
    });
    return () => h("nav", { class: ["breadcrumb", { disable: !enable.value }] }, enable.value ? h("ol", {
      vocab: "https://schema.org/",
      typeof: "BreadcrumbList"
    }, config2.value.map((item, index2) => h("li", {
      class: { "is-active": config2.value.length - 1 === index2 },
      property: "itemListElement",
      typeof: "ListItem"
    }, [
      h(RouterLink$1, {
        to: item.path,
        property: "item",
        typeof: "WebPage"
      }, () => [
        // icon
        iconEnable.value ? h(HopeIcon, { icon: item.icon }) : null,
        // text
        h("span", { property: "name" }, item.title || "Unknown")
      ]),
      // meta
      h("meta", { property: "position", content: index2 + 1 })
    ]))) : []);
  }
});
const pageNav = "";
const resolveFromFrontmatterConfig = (conf) => {
  if (conf === false)
    return false;
  if (isString$1(conf))
    return useAutoLink(conf, true);
  if (isPlainObject(conf))
    return conf;
  return null;
};
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
  const index2 = sidebarItems.findIndex((item) => item.link === currentPath);
  if (index2 !== -1) {
    const targetItem = sidebarItems[index2 + offset];
    if (!(targetItem == null ? void 0 : targetItem.link))
      return null;
    return targetItem;
  }
  for (const item of sidebarItems)
    if (item.children) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
      if (childResult)
        return childResult;
    }
  return null;
};
const PageNav = defineComponent({
  name: "PageNav",
  setup() {
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const page2 = usePageData();
    const navigate = useNavigate();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      return prevConfig === false ? null : prevConfig || (themeLocale.value.prevLink === false ? null : resolveFromSidebarItems(sidebarItems.value, page2.value.path, -1));
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      return nextConfig === false ? null : nextConfig || (themeLocale.value.nextLink === false ? null : resolveFromSidebarItems(sidebarItems.value, page2.value.path, 1));
    });
    useEventListener("keydown", (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextNavLink.value) {
            navigate(nextNavLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevNavLink.value) {
            navigate(prevNavLink.value.link);
            event.preventDefault();
          }
        }
      }
    });
    return () => prevNavLink.value || nextNavLink.value ? h("nav", { class: "page-nav" }, [
      prevNavLink.value ? h(AutoLink, { class: "prev", config: prevNavLink.value }, () => {
        var _a2, _b2;
        return [
          h("div", { class: "hint" }, [
            h("span", { class: "arrow start" }),
            themeLocale.value.metaLocales.prev
          ]),
          h("div", { class: "link" }, [
            h(HopeIcon, {
              icon: (_a2 = prevNavLink.value) == null ? void 0 : _a2.icon
            }),
            (_b2 = prevNavLink.value) == null ? void 0 : _b2.text
          ])
        ];
      }) : null,
      nextNavLink.value ? h(AutoLink, { class: "next", config: nextNavLink.value }, () => {
        var _a2, _b2;
        return [
          h("div", { class: "hint" }, [
            themeLocale.value.metaLocales.next,
            h("span", { class: "arrow end" })
          ]),
          h("div", { class: "link" }, [
            (_a2 = nextNavLink.value) == null ? void 0 : _a2.text,
            h(HopeIcon, {
              icon: (_b2 = nextNavLink.value) == null ? void 0 : _b2.icon
            })
          ])
        ];
      }) : null
    ]) : null;
  }
});
const AuthorIcon = () => h(G$1, { name: "author" }, () => h("path", {
  d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"
}));
AuthorIcon.displayName = "AuthorIcon";
const CalendarIcon = () => h(G$1, { name: "calendar" }, () => h("path", {
  d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"
}));
CalendarIcon.displayName = "CalendarIcon";
const CategoryIcon = () => h(G$1, { name: "category" }, () => h("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon.displayName = "CategoryIcon";
const EyeIcon = () => h(G$1, { name: "eye" }, () => h("path", {
  d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"
}));
EyeIcon.displayName = "EyeIcon";
const FireIcon = () => h(G$1, { name: "fire" }, () => h("path", {
  d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"
}));
FireIcon.displayName = "FireIcon";
const PrintIcon = () => h(G$1, { name: "print" }, () => h("path", {
  d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"
}));
PrintIcon.displayName = "PrintIcon";
const TagIcon = () => h(G$1, { name: "tag" }, () => h("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon.displayName = "TagIcon";
const TimerIcon = () => h(G$1, { name: "timer" }, () => h("path", {
  d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"
}));
TimerIcon.displayName = "TimerIcon";
const WordIcon = () => h(G$1, { name: "word" }, () => [
  h("path", {
    d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"
  }),
  h("path", {
    d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"
  })
]);
WordIcon.displayName = "WordIcon";
const useMetaLocale = () => {
  const themeLocale = useThemeLocaleData();
  return computed(() => themeLocale.value.metaLocales);
};
const readingTimeLocales = { "/": {} };
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const repoType = Ne(docsRepo);
  let pattern;
  if (editLinkPattern)
    pattern = editLinkPattern;
  else if (repoType !== null)
    pattern = editLinkPatterns[repoType];
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const useEditLink = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern = "" } = themeLocale.value;
    const showEditLink = frontmatter.value.editLink ?? editLink ?? true;
    if (!showEditLink)
      return null;
    if (!docsRepo)
      return null;
    const link = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      editLinkPattern,
      filePathRelative: page2.value.filePathRelative
    });
    if (!link)
      return null;
    return {
      text: themeLocale.value.metaLocales.editLink,
      link
    };
  });
};
const useUpdateTime = () => {
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2, _b2;
    const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;
    if (!showLastUpdated)
      return null;
    if (!((_a2 = page2.value.git) == null ? void 0 : _a2.updatedTime))
      return null;
    const updatedDate = new Date((_b2 = page2.value.git) == null ? void 0 : _b2.updatedTime);
    return updatedDate.toLocaleString(siteLocale.value.lang);
  });
};
const useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2;
    const showContributors = frontmatter.value.contributors ?? themeLocale.value.contributors ?? true;
    if (!showContributors)
      return null;
    return ((_a2 = page2.value.git) == null ? void 0 : _a2.contributors) ?? null;
  });
};
const authorInfo = "";
const AuthorInfo = defineComponent({
  name: "AuthorInfo",
  inheritAttrs: false,
  props: {
    /**
     * Author information
     *
     * 作者信息
     */
    author: {
      type: Array,
      required: true
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.author.length ? h("span", {
      class: "page-author-info",
      "aria-label": `${metaLocale.value.author}${props.pure ? "" : "🖊"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(AuthorIcon),
      h("span", props.author.map((item) => item.url ? h("a", {
        class: "page-author-item",
        href: item.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, item.name) : h("span", { class: "page-author-item" }, item.name))),
      h("span", {
        property: "author",
        content: props.author.map((item) => item.name).join(", ")
      })
    ]) : null;
  }
});
const categoryInfo = "";
const CategoryInfo = defineComponent({
  name: "CategoryInfo",
  inheritAttrs: false,
  props: {
    /**
     * Category information
     *
     * 分类信息
     */
    category: {
      type: Array,
      required: true
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const router = useRouter$1();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const navigate = (event, path = "") => {
      if (path && page2.value.path !== path) {
        event.preventDefault();
        void router.push(path);
      }
    };
    return () => props.category.length ? h("span", {
      class: "page-category-info",
      "aria-label": `${metaLocale.value.category}${props.pure ? "" : "🌈"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(CategoryIcon),
      ...props.category.map(({ name, path }) => h("span", {
        class: [
          "page-category-item",
          {
            // TODO: magic number 9 is tricky here
            [`category${fe(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: (event) => navigate(event, path)
      }, name)),
      h("meta", {
        property: "articleSection",
        content: props.category.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const DateInfo = defineComponent({
  name: "DateInfo",
  inheritAttrs: false,
  props: {
    /**
     * Date information
     *
     * 日期信息
     */
    date: {
      type: Object,
      default: null
    },
    /**
     * Localized date text
     *
     * 本地化的日期文字
     */
    localizedDate: {
      type: String,
      default: ""
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const lang = usePageLang();
    const metaLocale = useMetaLocale();
    return () => {
      var _a2, _b2;
      return props.date ? h("span", {
        class: "page-date-info",
        "aria-label": `${metaLocale.value.date}${props.pure ? "" : "📅"}`,
        ...props.pure ? {} : { "data-balloon-pos": "down" }
      }, [
        h(CalendarIcon),
        h("span", h(ClientOnly, () => {
          var _a3;
          return props.localizedDate || ((_a3 = props.date.value) == null ? void 0 : _a3.toLocaleDateString(lang.value));
        })),
        h("meta", {
          property: "datePublished",
          // ISO Format Date string
          content: ((_b2 = (_a2 = props.date) == null ? void 0 : _a2.value) == null ? void 0 : _b2.toISOString()) || ""
        })
      ]) : null;
    };
  }
});
const originalInfo = "";
const OriginalInfo = defineComponent({
  name: "OriginalInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether the article is original
     *
     * 文章是否是原创
     */
    isOriginal: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.isOriginal ? h("span", { class: "page-original-info" }, metaLocale.value.origin) : null;
  }
});
defineComponent({
  name: "PageViewInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether show pageview and it's path
     *
     * 是否显示浏览量以及其路径
     */
    pageview: {
      type: [Boolean, String],
      default: false
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const route = useRoute();
    const metaLocale = useMetaLocale();
    const pageviewElement = ref();
    const pageViews = ref(0);
    useMutationObserver(pageviewElement, () => {
      const count = pageviewElement.value.textContent;
      if (count && !isNaN(Number(count)))
        pageViews.value = Number(count);
    }, { childList: true });
    return () => props.pageview ? h("span", {
      class: "page-pageview-info",
      "aria-label": `${metaLocale.value.views}${props.pure ? "" : "🔢"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(pageViews.value < 1e3 ? EyeIcon : FireIcon),
      h("span", {
        ref: pageviewElement,
        class: "waline-pageview-count",
        id: "ArtalkPV",
        /** visitorID */
        "data-path": isString$1(props.pageview) ? props.pageview : withBase(route.path)
      }, "...")
    ]) : null;
  }
});
const ReadingTimeInfo = defineComponent({
  name: "ReadingTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = ne(readingTimeLocales);
    const readingTime = computed(() => {
      if (!props.readingTime)
        return null;
      const { minutes } = props.readingTime;
      return minutes < 1 ? { text: readingTimeLocale.value.less1Minute, time: "PT1M" } : {
        text: readingTimeLocale.value.time.replace("$time", Math.round(minutes).toString()),
        time: `PT${Math.round(minutes)}M`
      };
    });
    return () => readingTime.value ? h("span", {
      class: "page-reading-time-info",
      "aria-label": `${metaLocale.value.readingTime}${props.pure ? "" : "⌛"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(TimerIcon),
      h("span", readingTime.value.text),
      h("meta", {
        property: "timeRequired",
        content: readingTime.value.time
      })
    ]) : null;
  }
});
const tagInfo = "";
const TagInfo = defineComponent({
  name: "TagInfo",
  inheritAttrs: false,
  props: {
    /**
     * Tag information
     *
     * 标签信息
     */
    tag: {
      type: Array,
      default: () => []
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const router = useRouter$1();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const navigate = (event, path = "") => {
      if (path && page2.value.path !== path) {
        event.preventDefault();
        void router.push(path);
      }
    };
    return () => props.tag.length ? h("span", {
      class: "page-tag-info",
      "aria-label": `${metaLocale.value.tag}${props.pure ? "" : "🏷"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(TagIcon),
      ...props.tag.map(({ name, path }) => h("span", {
        class: [
          "page-tag-item",
          {
            // TODO: magic number 9 is tricky here
            [`tag${fe(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: (event) => navigate(event, path)
      }, name)),
      h("meta", {
        property: "keywords",
        content: props.tag.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const WordInfo = defineComponent({
  name: "ReadTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = ne(readingTimeLocales);
    const words = computed(() => {
      var _a2;
      return (_a2 = props.readingTime) == null ? void 0 : _a2.words.toString();
    });
    const wordText = computed(() => readingTimeLocale.value.word.replace("$word", words.value || ""));
    return () => words.value ? h("span", {
      class: "page-word-info",
      "aria-label": `${metaLocale.value.words}${props.pure ? "" : "🔠"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(WordIcon),
      h("span", wordText.value),
      h("meta", {
        property: "wordCount",
        content: words.value
      })
    ]) : null;
  }
});
const pageInfo = "";
const PageInfo = defineComponent({
  name: "PageInfo",
  components: {
    AuthorInfo,
    CategoryInfo,
    DateInfo,
    OriginalInfo,
    PageViewInfo: () => null,
    ReadingTimeInfo,
    TagInfo,
    WordInfo
  },
  props: {
    /**
     * Article information to display
     *
     * 待展示的文章信息
     */
    items: {
      type: [Array, Boolean],
      default: () => [
        "Author",
        "Original",
        "Date",
        "PageView",
        "ReadingTime",
        "Category",
        "Tag"
      ]
    },
    /**
     * Article information
     *
     * 文章信息配置
     */
    info: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const pure = usePure();
    return () => props.items ? h("div", { class: "page-info" }, props.items.map((item) => h(resolveComponent(`${item}Info`), {
      ...props.info,
      pure: pure.value
    }))) : null;
  }
});
const pageTitle = "";
const PageTitle = defineComponent({
  name: "PageTitle",
  setup() {
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { info, items } = usePageInfo();
    return () => h("div", { class: "page-title" }, [
      h("h1", [
        themeLocale.value.titleIcon === false ? null : h(HopeIcon, { icon: frontmatter.value.icon }),
        page2.value.title
      ]),
      h(PageInfo, {
        info: info.value,
        ...items.value === null ? {} : { items: items.value }
      }),
      h("hr")
    ]);
  }
});
const EditIcon = () => h(G$1, { name: "edit" }, () => [
  h("path", {
    d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"
  }),
  h("path", {
    d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"
  })
]);
EditIcon.displayName = "EditIcon";
const pageMeta = "";
const PageMeta = defineComponent({
  name: "PageMeta",
  setup() {
    const themeLocale = useThemeLocaleData();
    const editLink = useEditLink();
    const updateTime = useUpdateTime();
    const contributors = useContributors();
    return () => {
      const { metaLocales } = themeLocale.value;
      return h("footer", { class: "page-meta" }, [
        editLink.value ? h("div", { class: "meta-item edit-link" }, h(AutoLink, { class: "label", config: editLink.value }, { before: () => h(EditIcon) })) : null,
        h("div", { class: "meta-item git-info" }, [
          updateTime.value ? h("div", { class: "update-time" }, [
            h("span", { class: "label" }, `${metaLocales.lastUpdated}: `),
            h(ClientOnly, () => h("span", { class: "info" }, updateTime.value))
          ]) : null,
          contributors.value && contributors.value.length ? h("div", { class: "contributors" }, [
            h("span", { class: "label" }, `${metaLocales.contributors}: `),
            contributors.value.map(({ email, name }, index2) => [
              h("span", { class: "contributor", title: `email: ${email}` }, name),
              index2 !== contributors.value.length - 1 ? "," : ""
            ])
          ]) : null
        ])
      ]);
    };
  }
});
const printButton = "";
const PrintButton = defineComponent({
  name: "PrintButton",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    return () => themeData2.value.print === false ? null : h("button", {
      class: "print-button",
      title: themeLocale.value.metaLocales.print,
      onClick: () => {
        window.print();
      }
    }, h(PrintIcon));
  }
});
const toc = "";
const renderHeader = ({ title, level, slug }) => h(RouterLink$1, {
  to: `#${slug}`,
  class: ["toc-link", `level${level}`]
}, () => title);
const renderChildren = (headers, headerDepth) => {
  const route = useRoute();
  return headers.length && headerDepth > 0 ? h("ul", { class: "toc-list" }, headers.map((header) => [
    h("li", {
      class: [
        "toc-item",
        { active: Ce(route, `#${header.slug}`) }
      ]
    }, renderHeader(header)),
    renderChildren(header.children, headerDepth - 1)
  ])) : null;
};
const TOC = defineComponent({
  name: "TOC",
  props: {
    /**
     * TOC items config
     *
     * TOC 项目配置
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Max header nesting depth
     *
     * 最大的标题嵌套深度
     */
    headerDepth: {
      type: Number,
      default: 2
    }
  },
  setup(props, { slots }) {
    const route = useRoute();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const toc2 = ref();
    const scrollTo = (top) => {
      var _a2;
      (_a2 = toc2.value) == null ? void 0 : _a2.scrollTo({ top, behavior: "smooth" });
    };
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        if (toc2.value) {
          const activeTocItem = document.querySelector(`#toc a.toc-link[href$="${hash}"]`);
          if (!activeTocItem)
            return;
          const { top: tocTop, height: tocHeight } = toc2.value.getBoundingClientRect();
          const { top: activeTocItemTop, height: activeTocItemHeight } = activeTocItem.getBoundingClientRect();
          if (activeTocItemTop < tocTop)
            scrollTo(toc2.value.scrollTop + activeTocItemTop - tocTop);
          else if (activeTocItemTop + activeTocItemHeight > tocTop + tocHeight)
            scrollTo(toc2.value.scrollTop + activeTocItemTop + activeTocItemHeight - tocTop - tocHeight);
        }
      });
    });
    return () => {
      var _a2, _b2;
      const tocHeaders = props.items.length ? renderChildren(props.items, props.headerDepth) : page2.value.headers ? renderChildren(page2.value.headers, props.headerDepth) : null;
      return tocHeaders ? h("div", { class: "toc-place-holder" }, [
        h("aside", { id: "toc" }, [
          (_a2 = slots["before"]) == null ? void 0 : _a2.call(slots),
          h("div", { class: "toc-header" }, [
            metaLocale.value.toc,
            h(PrintButton)
          ]),
          h("div", { class: "toc-wrapper", ref: toc2 }, tocHeaders),
          (_b2 = slots["after"]) == null ? void 0 : _b2.call(slots)
        ])
      ]) : null;
    };
  }
});
const page = "";
const NormalPage = defineComponent({
  name: "NormalPage",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const { isDarkmode } = useDarkmode();
    const themeLocale = useThemeLocaleData();
    const tocEnable = computed(() => frontmatter.value.toc || frontmatter.value.toc !== false && themeLocale.value.toc !== false);
    return () => h("main", { class: "page", id: "main-content" }, h(Vt("LocalEncrypt") ? resolveComponent("LocalEncrypt") : Rt, () => {
      var _a2, _b2, _c, _d;
      return [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        h(BreadCrumb),
        h(PageTitle),
        tocEnable.value ? h(TOC, {
          headerDepth: frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2
        }, {
          before: () => {
            var _a3;
            return (_a3 = slots["tocBefore"]) == null ? void 0 : _a3.call(slots);
          },
          after: () => {
            var _a3;
            return (_a3 = slots["tocAfter"]) == null ? void 0 : _a3.call(slots);
          }
        }) : null,
        (_b2 = slots["contentBefore"]) == null ? void 0 : _b2.call(slots),
        h(MarkdownContent),
        (_c = slots["contentAfter"]) == null ? void 0 : _c.call(slots),
        h(PageMeta),
        h(PageNav),
        Vt("CommentService") ? h(resolveComponent("CommentService"), {
          darkmode: isDarkmode.value
        }) : null,
        (_d = slots["bottom"]) == null ? void 0 : _d.call(slots)
      ];
    }));
  }
});
const skipLink = "";
const SkipLink = defineComponent({
  name: "SkipLink",
  props: {
    /** @description Content ID */
    content: {
      type: String,
      default: "main-content"
    }
  },
  setup(props) {
    const page2 = usePageData();
    const themeLocale = useThemeLocaleData();
    const skipToMainContent = ref();
    const focusMainContent = ({ target }) => {
      const el = document.querySelector(target.hash);
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    onMounted(() => {
      watch(() => page2.value.path, () => skipToMainContent.value.focus());
    });
    return () => [
      h("span", {
        ref: skipToMainContent,
        tabindex: "-1"
      }),
      h("a", {
        href: `#${props.content}`,
        class: "skip-link sr-only",
        onClick: focusMainContent
      }, themeLocale.value.routeLocales.skipToContent)
    ];
  }
});
const fadeSlideY = "";
const FadeSlideY = defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const { resolve: onBeforeEnter, pending: onBeforeLeave } = useScrollPromise();
    return () => h(Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a2;
      return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
    });
  }
});
const Layout = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  setup() {
    useThemeLocaleData();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const { isMobile } = useWindowSize();
    const sidebarDisplay = computed(() => "none");
    return () => [
      h(SkipLink),
      h(CommonWrapper, {}, {
        default: () => frontmatter.value.home ? h(HomePage) : h(FadeSlideY, () => h(NormalPage, { key: page2.value.path })),
        ...sidebarDisplay.value !== "none" ? { navScreenBottom: () => h(resolveComponent("BloggerInfo")) } : {},
        ...!isMobile.value && sidebarDisplay.value === "always" ? { sidebar: () => h(resolveComponent("BloggerInfo")) } : {}
      })
    ];
  }
});
const notFoundHint = "";
const NotFoundHint = defineComponent({
  name: "NotFoundHint",
  setup() {
    const themeLocale = useThemeLocaleData();
    const getMsg = () => {
      const messages = themeLocale.value.routeLocales["notFoundMsg"];
      return messages[Math.floor(Math.random() * messages.length)];
    };
    return () => h("div", { class: "not-found-hint" }, [
      h("p", { class: "error-code" }, "404"),
      h("h1", { class: "error-title" }, themeLocale.value.routeLocales["notFoundTitle"]),
      h("p", { class: "error-hint" }, getMsg())
    ]);
  }
});
const notFound = "";
const NotFound = defineComponent({
  name: "NotFound",
  setup(_props, { slots }) {
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const { navigate } = useLink$1({
      to: themeLocale.value.home ?? routeLocale.value
    });
    return () => [
      h(SkipLink),
      h(CommonWrapper, { noSidebar: true }, () => {
        var _a2;
        return h("main", { class: "page not-found", id: "main-content" }, ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || [
          h(NotFoundHint),
          h("div", { class: "actions" }, [
            h("button", {
              class: "action-button",
              onClick: () => {
                window.history.go(-1);
              }
            }, themeLocale.value.routeLocales.back),
            h("button", { class: "action-button", onClick: () => navigate() }, themeLocale.value.routeLocales.home)
          ])
        ]);
      })
    ];
  }
});
const index = "";
const slidePage = "";
var v = defineComponent({ name: "SlidePage", setup() {
  const i2 = useRouter$1(), t2 = ref(false), n2 = ref(), s2 = () => {
    t2.value = !t2.value;
  }, e2 = () => {
    t2.value = false;
  }, r2 = () => {
    e2(), window.history.go(-1);
  }, u2 = () => {
    e2(), i2.push("/");
  };
  return onClickOutside(n2, e2), () => h("div", { class: "presentation" }, [h(Content), h("div", { ref: n2, class: ["menu", { active: t2.value }] }, [h("button", { class: "menu-button", onClick: () => s2() }, h("span", { class: "icon" })), h("button", { class: "back-button", onClick: () => r2() }, h(q$1)), h("button", { class: "home-button", onClick: () => u2() }, h(a$1))])]);
} });
const clientConfig10 = defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
    injectDarkmode(app);
    app.component("HopeIcon", HopeIcon);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
  },
  layouts: {
    Layout,
    NotFound,
    Slide: v
  }
});
function ee(e2) {
  return e2;
}
const z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, N$1 = "__vueuse_ssr_handlers__";
z[N$1] = z[N$1] || {};
var L;
(function(e2) {
  e2.UP = "UP", e2.RIGHT = "RIGHT", e2.DOWN = "DOWN", e2.LEFT = "LEFT", e2.NONE = "NONE";
})(L || (L = {}));
var oe = Object.defineProperty, M = Object.getOwnPropertySymbols, se = Object.prototype.hasOwnProperty, ie = Object.prototype.propertyIsEnumerable, P$1 = (e2, n2, t2) => n2 in e2 ? oe(e2, n2, { enumerable: true, configurable: true, writable: true, value: t2 }) : e2[n2] = t2, ae = (e2, n2) => {
  for (var t2 in n2 || (n2 = {}))
    se.call(n2, t2) && P$1(e2, t2, n2[t2]);
  if (M)
    for (var t2 of M(n2))
      ie.call(n2, t2) && P$1(e2, t2, n2[t2]);
  return e2;
};
const re = { easeInSine: [0.12, 0, 0.39, 0], easeOutSine: [0.61, 1, 0.88, 1], easeInOutSine: [0.37, 0, 0.63, 1], easeInQuad: [0.11, 0, 0.5, 0], easeOutQuad: [0.5, 1, 0.89, 1], easeInOutQuad: [0.45, 0, 0.55, 1], easeInCubic: [0.32, 0, 0.67, 0], easeOutCubic: [0.33, 1, 0.68, 1], easeInOutCubic: [0.65, 0, 0.35, 1], easeInQuart: [0.5, 0, 0.75, 0], easeOutQuart: [0.25, 1, 0.5, 1], easeInOutQuart: [0.76, 0, 0.24, 1], easeInQuint: [0.64, 0, 0.78, 0], easeOutQuint: [0.22, 1, 0.36, 1], easeInOutQuint: [0.83, 0, 0.17, 1], easeInExpo: [0.7, 0, 0.84, 0], easeOutExpo: [0.16, 1, 0.3, 1], easeInOutExpo: [0.87, 0, 0.13, 1], easeInCirc: [0.55, 0, 1, 0.45], easeOutCirc: [0, 0.55, 0.45, 1], easeInOutCirc: [0.85, 0, 0.15, 1], easeInBack: [0.36, 0, 0.66, -0.56], easeOutBack: [0.34, 1.56, 0.64, 1], easeInOutBack: [0.68, -0.6, 0.32, 1.6] };
ae({ linear: ee }, re);
const $ = Object.entries;
const languageSwitch = "";
const g = { "autoLocale": false, "switchLocale": false, "localeConfig": {}, "localeFallback": true, "defaultBehavior": "defaultLocale" }, k = $(g.localeConfig), P = { "/": {} }, { switchLocale: b } = g;
defineComponent({ name: "LanguageSwitch", setup() {
  const m2 = usePreferredLanguages(), n2 = useRoute(), c2 = useRouter$1(), u2 = useRouteLocale(), d = useSessionStorage("VUEPRESS_REDIRECT_LOCALES", {}), i2 = ref(false), t2 = computed(() => {
    for (const e2 of m2.value)
      for (const [l2, a2] of k)
        if (a2.includes(e2))
          return l2 === u2.value ? null : { lang: e2, localePath: l2 };
    return null;
  }), p2 = computed(() => t2.value ? n2.path.replace(u2.value, t2.value.localePath) : null), r2 = computed(() => {
    if (t2.value) {
      const { lang: e2, localePath: l2 } = t2.value, a2 = [P[u2.value], P[l2]];
      return { hint: a2.map(({ hint: o2 }) => o2.replace("$1", e2)), switch: a2.map(({ switch: o2 }) => o2.replace("$1", e2)).join(" / "), cancel: a2.map(({ cancel: o2 }) => o2).join(" / ") };
    }
    return null;
  });
  return watch(t2, () => {
    d.value[u2.value] || (t2.value ? b === "direct" ? c2.replace(p2.value) : b === "modal" && (i2.value = true) : i2.value = false);
  }, { immediate: true }), onMounted(() => {
    const e2 = useScrollLock(document.body);
    watch(i2, (l2) => {
      e2.value = l2;
    }, { immediate: true }), onUnmounted(() => {
      e2.value = false;
    });
  }), () => i2.value ? h(TransitionGroup, { name: "lang-modal-fade" }, () => {
    var e2, l2, a2;
    return i2.value ? [h("div", { key: "mask", class: "lang-modal-mask" }), h("div", { key: "popup", class: "lang-modal-wrapper" }, [h("div", { class: "lang-modal-content" }, (e2 = r2.value) == null ? void 0 : e2.hint.map((o2) => h("p", o2))), h("button", { type: "button", class: "lang-modal-action primary", onClick: () => {
      d.value[u2.value] = true, c2.replace(p2.value);
    } }, (l2 = r2.value) == null ? void 0 : l2.switch), h("button", { type: "button", class: "lang-modal-action", onClick: () => {
      d.value[u2.value] = true, i2.value = false;
    } }, (a2 = r2.value) == null ? void 0 : a2.cancel)])] : [];
  }) : null;
} });
var N = defineClientConfig({ setup() {
}, rootComponents: [] });
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  K$1,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  Y$1,
  clientConfig8,
  I,
  clientConfig10,
  N
];
const pagesRoutes = [
  ["v-8daa1a0e", "/", { "y": "a", "t": "memo" }, ["/index.html", "/README.md"]],
  ["v-b858e5f0", "/api-docs/", { "y": "a", "t": "Api docs", "i": "API", "I": 0 }, ["/api-docs/index.html", "/api-docs/README.md"]],
  ["v-c1fb5a52", "/campaigns/volunteer-recruitment-plan.html", { "y": "a", "t": "Recruiting Specific Content" }, ["/campaigns/volunteer-recruitment-plan", "/campaigns/volunteer-recruitment-plan.md"]],
  ["v-e94e2898", "/cli-usage/", { "y": "a", "t": "cli-usage", "i": "API", "I": 0 }, ["/cli-usage/index.html", "/cli-usage/README.md"]],
  ["v-516714de", "/concepts/characteristics-advantages.html", { "y": "a", "t": "Characteristics and Advantages" }, ["/concepts/characteristics-advantages", "/concepts/characteristics-advantages.md"]],
  ["v-4a8bdca8", "/concepts/how-to-check-balance.html", { "y": "a", "t": "How to check the balance" }, ["/concepts/how-to-check-balance", "/concepts/how-to-check-balance.md"]],
  ["v-299ed0d5", "/concepts/how-to-pledge-memo.html", { "y": "a", "t": "How to Pledge MEMO" }, ["/concepts/how-to-pledge-memo", "/concepts/how-to-pledge-memo.md"]],
  ["v-2a643788", "/concepts/how-to-regenerate-node.html", { "y": "a", "t": "How to regenerate a node" }, ["/concepts/how-to-regenerate-node", "/concepts/how-to-regenerate-node.md"]],
  ["v-59cf70b4", "/concepts/introduction.html", { "y": "a", "t": "Introduction" }, ["/concepts/introduction", "/concepts/introduction.md"]],
  ["v-72dce437", "/concepts/memo-token-economics.html", { "y": "a", "t": "MEMO TOKEN ECONOMICS" }, ["/concepts/memo-token-economics", "/concepts/memo-token-economics.md"]],
  ["v-5583080a", "/concepts/payment-of-memo.html", { "y": "a", "t": "Payment of Memo" }, ["/concepts/payment-of-memo", "/concepts/payment-of-memo.md"]],
  ["v-6da238aa", "/concepts/", { "y": "a", "t": "concepts", "i": "API", "I": 0 }, ["/concepts/index.html", "/concepts/README.md"]],
  ["v-535175fe", "/concepts/requirements.html", { "y": "a", "t": "Operational Requirements" }, ["/concepts/requirements", "/concepts/requirements.md"]],
  ["v-34b80de4", "/concepts/roles-introduction.html", { "y": "a", "t": "Introduction of Roles" }, ["/concepts/roles-introduction", "/concepts/roles-introduction.md"]],
  ["v-551d99dd", "/FAQ/check-log-file.html", { "y": "a", "t": "Check Log File" }, ["/FAQ/check-log-file", "/FAQ/check-log-file.md"]],
  ["v-2f23d81c", "/FAQ/common.html", { "y": "a", "t": "Common" }, ["/FAQ/common", "/FAQ/common.md"]],
  ["v-59b4cc09", "/FAQ/connection.html", { "y": "a", "t": "Disconnection problems" }, ["/FAQ/connection", "/FAQ/connection.md"]],
  ["v-7226c9a4", "/FAQ/others.html", { "y": "a", "t": "Others" }, ["/FAQ/others", "/FAQ/others.md"]],
  ["v-68259754", "/FAQ/provider.html", { "y": "a", "t": "Provider" }, ["/FAQ/provider", "/FAQ/provider.md"]],
  ["v-74379e72", "/FAQ/", { "y": "a", "t": "FAQ", "i": "API", "I": 0 }, ["/FAQ/index.html", "/FAQ/README.md"]],
  ["v-71e887ee", "/FAQ/startup.html", { "y": "a", "t": "Startup problems" }, ["/FAQ/startup", "/FAQ/startup.md"]],
  ["v-f0990488", "/FAQ/user.html", { "y": "a", "t": "User" }, ["/FAQ/user", "/FAQ/user.md"]],
  ["v-92efbcfa", "/RAFI/rafi.html", { "y": "a", "t": "RAFI" }, ["/RAFI/rafi", "/RAFI/rafi.md"]],
  ["v-136523e4", "/RAFI/", { "y": "a", "t": "RAFI", "i": "API", "I": 0 }, ["/RAFI/index.html", "/RAFI/README.md"]],
  ["v-7fe15663", "/resources/", { "y": "a", "t": "resources", "i": "API" }, ["/resources/index.html", "/resources/README.md"]],
  ["v-2c51f84b", "/resources/resources-links.html", { "y": "a", "t": "" }, ["/resources/resources-links", "/resources/resources-links.md"]],
  ["v-226a61b6", "/start-and-usage/gateway-mode.html", { "y": "a", "t": "Gateway Mode" }, ["/start-and-usage/gateway-mode", "/start-and-usage/gateway-mode.md"]],
  ["v-1ec379db", "/start-and-usage/how-to-use-user.html", { "y": "a", "t": "lfs command" }, ["/start-and-usage/how-to-use-user", "/start-and-usage/how-to-use-user.md"]],
  ["v-0f20180f", "/start-and-usage/http-operation.html", { "y": "a", "t": "HTTP Operation" }, ["/start-and-usage/http-operation", "/start-and-usage/http-operation.md"]],
  ["v-bbcbe2b0", "/start-and-usage/", { "y": "a", "t": "Start And Usage", "i": "API", "I": 0 }, ["/start-and-usage/index.html", "/start-and-usage/README.md"]],
  ["v-14701f29", "/version-update-description/", { "y": "a", "t": "version-update-description", "i": "API", "I": 0 }, ["/version-update-description/index.html", "/version-update-description/README.md"]],
  ["v-6bdca6e0", "/version-update-description/upgrade-to-megrez2.5.html", { "y": "a", "t": "Step by step" }, ["/version-update-description/upgrade-to-megrez2.5", "/version-update-description/upgrade-to-megrez2.5.md"]],
  ["v-c50ce74a", "/version-update-description/version1-phecda.html", { "y": "a", "t": "" }, ["/version-update-description/version1-phecda", "/version-update-description/version1-phecda.md"]],
  ["v-e287edd2", "/version-update-description/version2-megrez.html", { "y": "a", "t": "Version2-Megrez" }, ["/version-update-description/version2-megrez", "/version-update-description/version2-megrez.md"]],
  ["v-4da8a79e", "/version-update-description/version2.5-megrez.html", { "y": "a", "t": "Megrez2.5" }, ["/version-update-description/version2.5-megrez", "/version-update-description/version2.5-megrez.md"]],
  ["v-97046b8a", "/version-update-description/version2.xx-update-description-cn.html", { "y": "a", "t": "" }, ["/version-update-description/version2.xx-update-description-cn", "/version-update-description/version2.xx-update-description-cn.md"]],
  ["v-0b55d256", "/api-docs/middleware/", { "y": "a", "t": "middleware", "i": "API", "I": 0 }, ["/api-docs/middleware/index.html", "/api-docs/middleware/README.md"]],
  ["v-7634800c", "/api-docs/s3/memo-s3-api-cn.html", { "y": "a", "t": "MEMO S3 API CN" }, ["/api-docs/s3/memo-s3-api-cn", "/api-docs/s3/memo-s3-api-cn.md"]],
  ["v-2eb2367c", "/api-docs/s3/memo-s3-api-en.html", { "y": "a", "t": "MEMO S3 API EN" }, ["/api-docs/s3/memo-s3-api-en", "/api-docs/s3/memo-s3-api-en.md"]],
  ["v-b12aa7f2", "/api-docs/s3/", { "y": "a", "t": "S3", "i": "API", "I": 0 }, ["/api-docs/s3/index.html", "/api-docs/s3/README.md"]],
  ["v-4b06a12d", "/cli-usage/keeper/keeper-commandline-mannual.html", { "y": "a", "t": "CommandLine Mannual for Prefacekeeper" }, ["/cli-usage/keeper/keeper-commandline-mannual", "/cli-usage/keeper/keeper-commandline-mannual.md"]],
  ["v-975c5a5a", "/cli-usage/keeper/keeper%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C.html", { "y": "a", "t": "MEMO keeper节点命令详解" }, ["/cli-usage/keeper/keeper命令手册.html", "/cli-usage/keeper/keeper%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C", "/cli-usage/keeper/keeper命令手册.md", "/cli-usage/keeper/keeper%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C.md"]],
  ["v-0e843549", "/cli-usage/keeper/", { "y": "a", "t": "keeper", "i": "API", "I": 0 }, ["/cli-usage/keeper/index.html", "/cli-usage/keeper/README.md"]],
  ["v-af75f0e6", "/cli-usage/provider/provider-commandline-mannual.html", { "y": "a", "t": "CommandLine Mannual for Prefaceprovider" }, ["/cli-usage/provider/provider-commandline-mannual", "/cli-usage/provider/provider-commandline-mannual.md"]],
  ["v-78910d9a", "/cli-usage/provider/provider%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C.html", { "y": "a", "t": "MEMO provider节点命令详解" }, ["/cli-usage/provider/provider命令手册.html", "/cli-usage/provider/provider%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C", "/cli-usage/provider/provider命令手册.md", "/cli-usage/provider/provider%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C.md"]],
  ["v-750091ac", "/cli-usage/provider/", { "y": "a", "t": "provider", "i": "API", "I": 0 }, ["/cli-usage/provider/index.html", "/cli-usage/provider/README.md"]],
  ["v-0850d290", "/cli-usage/user/", { "y": "a", "t": "user", "i": "API", "I": 0 }, ["/cli-usage/user/index.html", "/cli-usage/user/README.md"]],
  ["v-5cae2c4d", "/cli-usage/user/user-commandline-mannual.html", { "y": "a", "t": "CommandLine Mannual for User" }, ["/cli-usage/user/user-commandline-mannual", "/cli-usage/user/user-commandline-mannual.md"]],
  ["v-2e81c41a", "/cli-usage/user/user%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C.html", { "y": "a", "t": "MEMO User节点命令详解" }, ["/cli-usage/user/user命令手册.html", "/cli-usage/user/user%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C", "/cli-usage/user/user命令手册.md", "/cli-usage/user/user%E5%91%BD%E4%BB%A4%E6%89%8B%E5%86%8C.md"]],
  ["v-60415ec0", "/start-and-usage/how-to-start-with-Docker/", { "y": "a", "t": "how to start with Docker", "i": "API", "I": 0 }, ["/start-and-usage/how-to-start-with-Docker/index.html", "/start-and-usage/how-to-start-with-Docker/README.md"]],
  ["v-9279f4ca", "/start-and-usage/how-to-start-with-Windows/", { "y": "a", "t": "" }, ["/start-and-usage/how-to-start-with-Windows/index.html", "/start-and-usage/how-to-start-with-Windows/README.md"]],
  ["v-424ec73c", "/start-and-usage/how-to-start-with-Windows/start-user-in-Windows.html", { "y": "a", "t": "In Windows OS" }, ["/start-and-usage/how-to-start-with-Windows/start-user-in-Windows", "/start-and-usage/how-to-start-with-Windows/start-user-in-Windows.md"]],
  ["v-0dcbac76", "/start-and-usage/install-Docker/docker-install.html", { "y": "a", "t": "For Linux" }, ["/start-and-usage/install-Docker/docker-install", "/start-and-usage/install-Docker/docker-install.md"]],
  ["v-4b75f815", "/start-and-usage/install-Docker/", { "y": "a", "t": "install-Docker", "i": "API", "I": 0 }, ["/start-and-usage/install-Docker/index.html", "/start-and-usage/install-Docker/README.md"]],
  ["v-fc93c7ca", "/api-docs/middleware/v0.1-http-gateway/http-gateway%20interface_en.html", { "y": "a", "t": "Http-Gateway Interface" }, ["/api-docs/middleware/v0.1-http-gateway/http-gateway interface_en.html", "/api-docs/middleware/v0.1-http-gateway/http-gateway%20interface_en", "/api-docs/middleware/v0.1-http-gateway/http-gateway interface_en.md", "/api-docs/middleware/v0.1-http-gateway/http-gateway%20interface_en.md"]],
  ["v-a30faa42", "/api-docs/middleware/v0.1-http-gateway/http-gateway%E6%8E%A5%E5%8F%A3_cn.html", { "y": "a", "t": "http-gateway接口" }, ["/api-docs/middleware/v0.1-http-gateway/http-gateway接口_cn.html", "/api-docs/middleware/v0.1-http-gateway/http-gateway%E6%8E%A5%E5%8F%A3_cn", "/api-docs/middleware/v0.1-http-gateway/http-gateway接口_cn.md", "/api-docs/middleware/v0.1-http-gateway/http-gateway%E6%8E%A5%E5%8F%A3_cn.md"]],
  ["v-489a8195", "/api-docs/middleware/v0.1-http-gateway/", { "y": "a", "t": "v0.1-http-gateway", "i": "API", "I": 0 }, ["/api-docs/middleware/v0.1-http-gateway/index.html", "/api-docs/middleware/v0.1-http-gateway/README.md"]],
  ["v-2f76b49d", "/api-docs/middleware/v1.0/", { "y": "a", "t": "v1.0", "i": "API", "I": 0 }, ["/api-docs/middleware/v1.0/index.html", "/api-docs/middleware/v1.0/README.md"]],
  ["v-5629bc47", "/api-docs/middleware/v1.0/%E4%B8%AD%E9%97%B4%E4%BB%B6HTTPAPI%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3.html", { "y": "a", "t": "中间件HTTPAPI说明文档" }, ["/api-docs/middleware/v1.0/中间件HTTPAPI说明文档.html", "/api-docs/middleware/v1.0/%E4%B8%AD%E9%97%B4%E4%BB%B6HTTPAPI%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3", "/api-docs/middleware/v1.0/中间件HTTPAPI说明文档.md", "/api-docs/middleware/v1.0/%E4%B8%AD%E9%97%B4%E4%BB%B6HTTPAPI%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3.md"]],
  ["v-2b7783d2", "/start-and-usage/how-to-start-with-Docker/megrez/", { "y": "a", "t": "megrez", "i": "API", "I": 0 }, ["/start-and-usage/how-to-start-with-Docker/megrez/index.html", "/start-and-usage/how-to-start-with-Docker/megrez/README.md"]],
  ["v-6f23eb2f", "/start-and-usage/how-to-start-with-Docker/megrez/start-provider-in-Docker%20copy.html", { "y": "a", "t": "Start Provider" }, ["/start-and-usage/how-to-start-with-Docker/megrez/start-provider-in-Docker copy.html", "/start-and-usage/how-to-start-with-Docker/megrez/start-provider-in-Docker%20copy", "/start-and-usage/how-to-start-with-Docker/megrez/start-provider-in-Docker copy.md", "/start-and-usage/how-to-start-with-Docker/megrez/start-provider-in-Docker%20copy.md"]],
  ["v-8974daee", "/start-and-usage/how-to-start-with-Docker/megrez/start-user-in-Docker%20copy.html", { "y": "a", "t": "Start User" }, ["/start-and-usage/how-to-start-with-Docker/megrez/start-user-in-Docker copy.html", "/start-and-usage/how-to-start-with-Docker/megrez/start-user-in-Docker%20copy", "/start-and-usage/how-to-start-with-Docker/megrez/start-user-in-Docker copy.md", "/start-and-usage/how-to-start-with-Docker/megrez/start-user-in-Docker%20copy.md"]],
  ["v-4a05e664", "/start-and-usage/how-to-start-with-Docker/testnet/", { "y": "a", "t": "testnet", "i": "API", "I": 0 }, ["/start-and-usage/how-to-start-with-Docker/testnet/index.html", "/start-and-usage/how-to-start-with-Docker/testnet/README.md"]],
  ["v-62a79e08", "/start-and-usage/how-to-start-with-Docker/testnet/start-provider-in-Docker%20copy.html", { "y": "a", "t": "Start Provider" }, ["/start-and-usage/how-to-start-with-Docker/testnet/start-provider-in-Docker copy.html", "/start-and-usage/how-to-start-with-Docker/testnet/start-provider-in-Docker%20copy", "/start-and-usage/how-to-start-with-Docker/testnet/start-provider-in-Docker copy.md", "/start-and-usage/how-to-start-with-Docker/testnet/start-provider-in-Docker%20copy.md"]],
  ["v-444ac6d6", "/start-and-usage/how-to-start-with-Docker/testnet/start-user-in-Docker%20copy.html", { "y": "a", "t": "Start User" }, ["/start-and-usage/how-to-start-with-Docker/testnet/start-user-in-Docker copy.html", "/start-and-usage/how-to-start-with-Docker/testnet/start-user-in-Docker%20copy", "/start-and-usage/how-to-start-with-Docker/testnet/start-user-in-Docker copy.md", "/start-and-usage/how-to-start-with-Docker/testnet/start-user-in-Docker%20copy.md"]],
  ["v-3706649a", "/404.html", { "y": "p", "t": "" }, ["/404"]],
  ["v-fcf94a36", "/campaigns/", { "y": "p", "t": "Campaigns" }, ["/campaigns/index.html"]]
];
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const layout = usePageLayout();
    return () => h(layout.value);
  }
});
var createRoutes = () => pagesRoutes.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress
    }
  ]
);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION_NORMALIZED) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = ref(router.currentRoute.value.path);
  watch(
    () => router.currentRoute.value.path,
    (value) => routePath.value = value
  );
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageFrontmatter = computed(
    () => resolvers.resolvePageFrontmatter(pageData.value)
  );
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(() => resolvers.resolvePageLang(pageData.value));
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  app.provide(layoutsSymbol, layouts);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  app.provide(pageLayoutSymbol, pageLayout);
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    layouts,
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h(RouterView),
        ...clientConfigs.flatMap(
          ({ rootComponents = [] }) => rootComponents.map((component) => h(component))
        )
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  createVueApp,
  ut as u,
  vt as v
};
