import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3, d as _imports_4, e as _imports_5, f as _imports_6 } from "./list-892090da.mjs";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="http-gateway-interface" tabindex="-1"><a class="header-anchor" href="#http-gateway-interface" aria-hidden="true">#</a> Http-Gateway Interface</h1><h2 id="upload-object" tabindex="-1"><a class="header-anchor" href="#upload-object" aria-hidden="true">#</a> Upload Object</h2><p>putobject method: put url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D/%7Bobjectname%7D/" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}/{objectname}/`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>x-amz-meta-sign: the signature of the wallet address to the MD5 value of the uploaded file x-amz-meta-date: storage time, uint <code>seconds</code></p><p>return status 200</p><figure><img${ssrRenderAttr("src", _imports_0)} alt="upload" tabindex="0" loading="lazy"><figcaption>upload</figcaption></figure><figure><img${ssrRenderAttr("src", _imports_1)} alt="upload2" tabindex="0" loading="lazy"><figcaption>upload2</figcaption></figure><h2 id="download-object" tabindex="-1"><a class="header-anchor" href="#download-object" aria-hidden="true">#</a> Download Object</h2><p>getobject method: get url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D/%7Bobjectname%7D" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}/{objectname}`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>return status 200</p><figure><img${ssrRenderAttr("src", _imports_2)} alt="download" tabindex="0" loading="lazy"><figcaption>download</figcaption></figure><h2 id="query-price" tabindex="-1"><a class="header-anchor" href="#query-price" aria-hidden="true">#</a> Query Price</h2><p>QueryPrice method: get url: <a href="http://0.0.0.0:5080/?queryprice=%22%22&amp;bucket=%7Bbucketname%7D&amp;ssize=%7Bfilesize%7D&amp;stime=" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/?queryprice=&quot;&quot;&amp;bucket={bucketname}&amp;ssize={filesize}&amp;stime=`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>(storagetime}</p><p>return status 200 price</p><figure><img${ssrRenderAttr("src", _imports_3)} alt="queryPrice" tabindex="0" loading="lazy"><figcaption>queryPrice</figcaption></figure><h2 id="query-balance" tabindex="-1"><a class="header-anchor" href="#query-balance" aria-hidden="true">#</a> Query Balance</h2><p>GetBalanceInfo method: get url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D/?getbalance=%22%22" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}/?getbalance=&quot;&quot;`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>return status 200 balance</p><figure><img${ssrRenderAttr("src", _imports_4)} alt="queryBal" tabindex="0" loading="lazy"><figcaption>queryBal</figcaption></figure><h2 id="approve" tabindex="-1"><a class="header-anchor" href="#approve" aria-hidden="true">#</a> Approve</h2><p>Approve method: get url: <a href="http://0.0.0.0:5080/?approve=%22%22&amp;ts=%7B$transaction%7D&amp;faddr=%7B$walletaddress%7D" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/?approve=&quot;&quot;&amp;ts={<span class="katex-error" title="ParseError: KaTeX parse error: Expected &#39;EOF&#39;, got &#39;}&#39; at position 12: transaction}̲&amp;faddr={" style="${ssrRenderStyle({ "color": "#cc0000" })}">transaction}&amp;faddr={</span>walletaddress}`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>faddr： the sender address ts： the hash of &#39;approve&#39; transaction</p><p>return status 200</p><figure><img${ssrRenderAttr("src", _imports_5)} alt="approve" tabindex="0" loading="lazy"><figcaption>approve</figcaption></figure><h2 id="list-object" tabindex="-1"><a class="header-anchor" href="#list-object" aria-hidden="true">#</a> List Object</h2><p>Listobject method: get url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D?list-type=2&amp;encoding-type=url&amp;delimiter=/&amp;fetch-owner=true" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}?list-type=2&amp;encoding-type=url&amp;delimiter=/&amp;fetch-owner=true`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><figure><img${ssrRenderAttr("src", _imports_6)} alt="list" tabindex="0" loading="lazy"><figcaption>list</figcaption></figure></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/api-docs/middleware/v0.1-http-gateway/http-gateway interface_en.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const httpGateway_interface_en_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "http-gateway interface_en.html.vue"]]);
export {
  httpGateway_interface_en_html as default
};
