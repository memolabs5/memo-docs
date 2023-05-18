import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="megrez2-5" tabindex="-1"><a class="header-anchor" href="#megrez2-5" aria-hidden="true">#</a> Megrez2.5</h1><p>Megrez2.5 is the latest version of MEMO’s network.</p><p> </p><p>The main optimizations in Megrez 2.5 are the upgrading and optimization of the smart contracts and the economic model. In terms of smart contracts, the management of contracts and the scalability of contracts have been enhanced. In the economic model, the revenue parameters of the Provider role have been optimized.</p><p> </p><p>If you want more details about Megrez 2.5, click here <a href="https://memolabs.medium.com/the-new-version-of-the-web3-decentralized-storage-layer-memo-megrez-2-5-will-be-available-soon-749f4006664e?source=user_profile---------2----------------------------" target="_blank" rel="noopener noreferrer"><strong>The new version of the Web3 decentralized storage layer MEMO, Megrez 2.5, will be available soon!</strong>`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/version-update-description/version2.5-megrez.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const version2_5Megrez_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "version2.5-megrez.html.vue"]]);
export {
  version2_5Megrez_html as default
};
