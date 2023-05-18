import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="version2-megrez" tabindex="-1"><a class="header-anchor" href="#version2-megrez" aria-hidden="true">#</a> Version2-Megrez</h1><p>Compared with its predecessor Phecda, Megrez has upgraded its security and availability. In terms of security, Megrez has optimized the consensus mechanism for the Keepers and enables on-chain transaction data submission. In terms of availability, Megrez not only has improved the challenge mechanism but also developed a new micro-payment layer. In terms of application, Megrez has developed new application interfaces to meet the business needs of different partners.</p><p> </p><p>If you want more details, click here <a href="https://memolabs.medium.com/memo-testnet-megrez-global-public-beta-is-going-to-launch-soon-bf13512fd06e" target="_blank" rel="noopener noreferrer">MEMO testnet “Megrez” global public beta is going to launch soon`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>​</p><p> </p><h2 id="difference-from-phecda" tabindex="-1"><a class="header-anchor" href="#difference-from-phecda" aria-hidden="true">#</a> Difference from Phecda</h2><p>For users, there are following differences in use experience of Phecda and Megrez.</p><p> </p><p><strong>Node deployment</strong></p><p>Phecda: Connect directly in all started nodes after node startup.</p><p>Megrez: The group function is added to each role. Users can choose which group to join when they start the user and provider nodes.</p><p> </p><p><strong>Startup time</strong></p><p>Megrez node startup time is way shorter than Phecda node startup time.</p><p> </p><p><strong>User Experience - Command Line</strong></p><p>● Megrez optimized the command line on the basis of Phecda, and added new commands such as querying wallet address through the command line.</p><p>●User simplified command.</p><p>●Storage order status of the specified user can be viewed.</p><p>●Token situation is increased, there can be multiple tokens.</p><p>​</p><p>​</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/version-update-description/version2-megrez.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const version2Megrez_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "version2-megrez.html.vue"]]);
export {
  version2Megrez_html as default
};
