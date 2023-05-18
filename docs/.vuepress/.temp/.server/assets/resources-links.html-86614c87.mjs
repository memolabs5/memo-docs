import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h3 id="official-website" tabindex="-1"><a class="header-anchor" href="#official-website" aria-hidden="true">#</a> Official Website</h3><p><a href="https://www.memolabs.org/" target="_blank" rel="noopener noreferrer">https://www.memolabs.org/`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p> </p><h3 id="official-website-blog" tabindex="-1"><a class="header-anchor" href="#official-website-blog" aria-hidden="true">#</a> Official Website Blog</h3><p><a href="https://www.memolabs.org/#/blog" target="_blank" rel="noopener noreferrer">https://www.memolabs.org/#/blog`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p> </p><h3 id="check-our-github" tabindex="-1"><a class="header-anchor" href="#check-our-github" aria-hidden="true">#</a> Check Our GitHub</h3><p>Our <a href="https://github.com/memoio/testnet" target="_blank" rel="noopener noreferrer">GITHUB`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> URL is:</p><p><a href="https://github.com/memoio/testnet" target="_blank" rel="noopener noreferrer">https://github.com/memoio/testnet`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p> </p><h3 id="twitter" tabindex="-1"><a class="header-anchor" href="#twitter" aria-hidden="true">#</a> Twitter</h3><p><a href="https://twitter.com/Memo_Labs" target="_blank" rel="noopener noreferrer">https://twitter.com/Memo_Labs`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p> </p><h3 id="telegram" tabindex="-1"><a class="header-anchor" href="#telegram" aria-hidden="true">#</a> Telegram</h3><p><a href="https://t.me/memolabsio" target="_blank" rel="noopener noreferrer">Telegram: Contact @memolabsio`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p> </p><h3 id="medium" tabindex="-1"><a class="header-anchor" href="#medium" aria-hidden="true">#</a> Medium</h3><p><a href="https://memolabs.medium.com/" target="_blank" rel="noopener noreferrer">https://memolabs.medium.com/`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/resources/resources-links.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resourcesLinks_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "resources-links.html.vue"]]);
export {
  resourcesLinks_html as default
};
