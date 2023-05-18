import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rafi" tabindex="-1"><a class="header-anchor" href="#rafi" aria-hidden="true">#</a> RAFI</h1><p>Risk-Aware Failure Identification (RAFI) Strategy As a new Risk-Aware Failure Identification (RAFI) Strategy, it uses different time thresholds to identify strip failures of different numbers of failed blocks, so as to improve the overall data reliability and availability with a shorter identification time.</p><p> </p><p><a href="https://www.usenix.org/conference/atc18/presentation/fang" target="_blank" rel="noopener noreferrer">learn more`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/RAFI/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
