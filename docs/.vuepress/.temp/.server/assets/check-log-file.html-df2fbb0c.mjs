import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="check-log-file" tabindex="-1"><a class="header-anchor" href="#check-log-file" aria-hidden="true">#</a> Check Log File</h1><p>In the <em>&lt; storage dir &gt;/.mefs</em> directory, there are startup log daemon.stdout.xx and the running log in the <em>logs</em> directory;</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/.mefs/logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Through the running log, you can view the running status of the node; when an error occurs, you can view the startup log;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/FAQ/check-log-file.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkLogFile_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "check-log-file.html.vue"]]);
export {
  checkLogFile_html as default
};
