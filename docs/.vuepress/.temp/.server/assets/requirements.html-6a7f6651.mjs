import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="operational-requirements" tabindex="-1"><a class="header-anchor" href="#operational-requirements" aria-hidden="true">#</a> Operational Requirements</h1><h2 id="hardware-requirements" tabindex="-1"><a class="header-anchor" href="#hardware-requirements" aria-hidden="true">#</a> Hardware Requirements</h2><p>The Keeper and the Provider should stay online for a long time</p><h2 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements" aria-hidden="true">#</a> System Requirements</h2><p>Ensure the security of the keystore file</p><h2 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> User</h2><p>Recommended configuration：</p><p>Recommended configuration: 4 cores, 8G memory, 20Mbps bandwidth;</p><p>External network ip, port 4001 is usable;</p><p>Docker environment;</p><h2 id="keeper" tabindex="-1"><a class="header-anchor" href="#keeper" aria-hidden="true">#</a> Keeper</h2><p>Recommended configuration：</p><p>4-core processor, 8G running memory, 200GB storage space, 20Mbps network bandwidth;</p><p>Internet ip address, port 4001 is open;</p><p>Docker environment;</p><h2 id="provider" tabindex="-1"><a class="header-anchor" href="#provider" aria-hidden="true">#</a> Provider</h2><p>Recommended configuration：</p><p>4 cores, 8G memory, 1TB storage, 20Mbps bandwidth;</p><p>External network ip, port 4001 is usable;</p><p>Docker environment;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/concepts/requirements.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const requirements_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "requirements.html.vue"]]);
export {
  requirements_html as default
};
