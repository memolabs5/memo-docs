import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.mjs";
const _imports_0 = "/assets/checkbal1-2ea24b71.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="how-to-check-the-balance" tabindex="-1"><a class="header-anchor" href="#how-to-check-the-balance" aria-hidden="true">#</a> How to check the balance</h1><h2 id="method-1" tabindex="-1"><a class="header-anchor" href="#method-1" aria-hidden="true">#</a> Method 1：</h2><p>Enter the test chain browser: <a href="https://testscan.metamemo.one:8080" target="_blank" rel="noopener noreferrer">https://testscan.metamemo.one:8080`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>  You can check the account balance by pasting the wallet address into the search box in the upper right corner. There are two account balances:</p><p>  Balance: Test chain token (ABBAS) balance, used for transaction overhead when starting a node</p><p>  Tokens: Major Token (MEMO) balance, used to pay for storage services and staking.</p><figure><img${ssrRenderAttr("src", _imports_0)} alt="1" tabindex="0" loading="lazy"><figcaption>1</figcaption></figure><h2 id="method-2" tabindex="-1"><a class="header-anchor" href="#method-2" aria-hidden="true">#</a> Method 2:</h2><p>Refer to WIKI and enter the container, and then run the command line to view all the information of the node, including account balance.</p><p> </p><p>1.After the account is initialized, start the node and enter the container. Run the command line &quot;mefs-user info&quot; or &quot;mefs-provider info&quot; to check the account balance.</p><p> </p><p>2.If the account has been started, and then the computer has been shutted down, Docker, or &quot;Windows PowerShell&quot; was been closed, you need to restart MEMO again to check the balance. Specifically, you need to open Docker first, then run the command line &quot; docker start mefs-user&quot; using Windows Powershell to start, and then enter the container to check it through the command line&quot;mefs-user info&quot; or &quot;mefs-provider info&quot;.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/concepts/how-to-check-balance.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const howToCheckBalance_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "how-to-check-balance.html.vue"]]);
export {
  howToCheckBalance_html as default
};
