import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3, d as _imports_4, e as _imports_5, f as _imports_6 } from "./list-892090da.mjs";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="http-gateway接口" tabindex="-1"><a class="header-anchor" href="#http-gateway接口" aria-hidden="true">#</a> http-gateway接口</h1><h2 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件" aria-hidden="true">#</a> 上传文件</h2><p>putobject method: put url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D/%7Bobjectname%7D/" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}/{objectname}/`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>x-amz-meta-sign 就是钱包地址对上传文件md5值的签名 x-amz-meta-date 存储时间 单位：秒</p><p>return status 200</p><figure><img${ssrRenderAttr("src", _imports_0)} alt="upload" tabindex="0" loading="lazy"><figcaption>upload</figcaption></figure><figure><img${ssrRenderAttr("src", _imports_1)} alt="upload response" tabindex="0" loading="lazy"><figcaption>upload response</figcaption></figure><h2 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件" aria-hidden="true">#</a> 下载文件</h2><p>getobject method: get url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D/%7Bobjectname%7D" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}/{objectname}`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>return status 200</p><figure><img${ssrRenderAttr("src", _imports_2)} alt="download" tabindex="0" loading="lazy"><figcaption>download</figcaption></figure><h2 id="查询价格" tabindex="-1"><a class="header-anchor" href="#查询价格" aria-hidden="true">#</a> 查询价格</h2><p>QueryPrice method: get url: <a href="http://0.0.0.0:5080/?queryprice=" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/?queryprice=`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>&quot;&quot;&amp;bucket={bucketname}&amp;ssize={filesize}&amp;stime=(storagetime}</p><p>return status 200 price</p><figure><img${ssrRenderAttr("src", _imports_3)} alt="query price" tabindex="0" loading="lazy"><figcaption>query price</figcaption></figure><h2 id="查询余额" tabindex="-1"><a class="header-anchor" href="#查询余额" aria-hidden="true">#</a> 查询余额</h2><p>GetBalanceInfo method: get url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D/?getbalance=" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}/?getbalance=`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>&quot;&quot;</p><p>return status 200 balance</p><figure><img${ssrRenderAttr("src", _imports_4)} alt="query balance" tabindex="0" loading="lazy"><figcaption>query balance</figcaption></figure><h2 id="approve" tabindex="-1"><a class="header-anchor" href="#approve" aria-hidden="true">#</a> Approve</h2><p>Approve method: get url: <a href="http://0.0.0.0:5080/?approve=" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/?approve=`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>&quot;&quot;&amp;ts={<span class="katex-error" title="ParseError: KaTeX parse error: Expected &#39;EOF&#39;, got &#39;}&#39; at position 12: transaction}̲&amp;faddr={" style="${ssrRenderStyle({ "color": "#cc0000" })}">transaction}&amp;faddr={</span>walletaddress}</p><p>faddr： 发送方地址 ts： approve交易hash</p><p>return status 200</p><figure><img${ssrRenderAttr("src", _imports_5)} alt="approve" tabindex="0" loading="lazy"><figcaption>approve</figcaption></figure><h2 id="列出文件" tabindex="-1"><a class="header-anchor" href="#列出文件" aria-hidden="true">#</a> 列出文件</h2><p>Listobject method: get url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D?list-type=2&amp;encoding-type=url&amp;delimiter=/&amp;fetch-owner=true" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}?list-type=2&amp;encoding-type=url&amp;delimiter=/&amp;fetch-owner=true`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><figure><img${ssrRenderAttr("src", _imports_6)} alt="list" tabindex="0" loading="lazy"><figcaption>list</figcaption></figure></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/api-docs/middleware/v0.1-http-gateway/http-gateway接口_cn.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const httpGateway___cn_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "http-gateway接口_cn.html.vue"]]);
export {
  httpGateway___cn_html as default
};
