import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="how-to-regenerate-a-node" tabindex="-1"><a class="header-anchor" href="#how-to-regenerate-a-node" aria-hidden="true">#</a> How to regenerate a node</h1><blockquote><p>Missing Keystore file</p></blockquote><p>You must know the private key address, private key and the password when generating the account.</p><p>Take 0a95533a110ee10bdaa902fed92e56f3f7709a532e22b597 ****** private key as an example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## Enter the user or provider</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">MEFS_PATH</span><span class="token operator">=</span>/root/1/.mefs

mefs-user init <span class="token parameter variable">--sk</span><span class="token operator">=</span>0a95533a110ee10bdaa902fed92e56f3f7709a532e22b597******* <span class="token parameter variable">--pwd</span><span class="token operator">=</span>xxx

<span class="token builtin class-name">export</span> <span class="token assign-left variable">MEFS_PATH</span><span class="token operator">=</span>/root/.mefs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/concepts/how-to-regenerate-node.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const howToRegenerateNode_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "how-to-regenerate-node.html.vue"]]);
export {
  howToRegenerateNode_html as default
};
