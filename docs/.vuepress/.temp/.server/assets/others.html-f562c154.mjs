import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="others" tabindex="-1"><a class="header-anchor" href="#others" aria-hidden="true">#</a> Others</h1><p> </p><p><strong>Which keeper is in the system?</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>The following is the public keeper&#39;s account address:

0x1adCa07Ae9bC70fc8c8d4C972176d1a1C810f0Ec

0xE434216FDF5573D8334Cb65cA2Df053e8A6f76C5

0x0614bc4f711dC47Fb0BE3B3300CDcB3339F2dD88

0xE561B5EAB2B97FAba9965eCC0179848D317ec2D3

0xf904237239a79f535bdc77622CCfB31E3B3f83C9

0xd98FA04955365De35321478136fb8706049f7Ef9

0x071E7e6163B5855Fad5837BDDf1C50b70327074e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p> </p><p><strong>How to set the A address of the blockchain?</strong></p><p>Run mefs-user/keeper/provider config Eth to view the address of the blockchain to which you are connected, If you want to modify, you can run mefs-user/keeper/provider config Eth xxx, where xxx is the API address of the chain.</p><p> </p><p><strong>How can I check my network connection status?</strong></p><p>Run mefs-user/keeper/provider swarm peers to view the nodes you are connected to.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/FAQ/others.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const others_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "others.html.vue"]]);
export {
  others_html as default
};
