import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="http-operation" tabindex="-1"><a class="header-anchor" href="#http-operation" aria-hidden="true">#</a> HTTP Operation</h1><p>Mefs commands can all be operated using HTTP.</p><p>Configuration</p><p>Before mefs-user starts, perform the following configuration:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// mefs api port setting, default is <span class="token number">5001</span>

mefs-user config Addresses.API /ip4/0.0.0.0/tcp/5001

// cross-domain access

mefs-user config <span class="token parameter variable">--json</span> API.HTTPHeaders.Access-Control-Allow-Origin <span class="token string">&#39;[&quot;*&quot;]&#39;</span>

mefs-user config <span class="token parameter variable">--json</span> API.HTTPHeaders.Access-Control-Allow-Methods <span class="token string">&#39;[&quot;PUT&quot;, &quot;GET&quot;, &quot;POST&quot;]&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then restart mefs-user to use HTTP to operate.</p><p><strong>Usage</strong></p><p>A command similar to the following:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mefs-user rootcmd subcmd <span class="token operator">&lt;</span>arg<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>arg<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token parameter variable">-opname1</span><span class="token operator">=</span><span class="token operator">&lt;</span>op<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token parameter variable">-opname2</span><span class="token operator">=</span><span class="token operator">&lt;</span>op<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The corresponding HTTP request is:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&quot;http://&lt;ip&gt;:&lt;port&gt;/api/v0/&lt;rootcmd&gt;/&lt;subcmd&gt;?arg=&lt;arg1&gt;&amp;arg=&lt;arg2&gt;&amp;opname1=&lt;op1&gt;&amp;opname2=&lt;op2&gt;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>IP is the network address of the machine where mefs-user is started. The port defaults to 5001. If cross-domain access is configured before running, you can use the external network IP to access, otherwise you can only access it through 127.0.0.1.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><h3 id="show-all-bucket-information" tabindex="-1"><a class="header-anchor" href="#show-all-bucket-information" aria-hidden="true">#</a> Show all bucket information</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&quot;http://127.0.0.1:5001/api/v0/lfs/list_buckets?addr=&lt;public key&gt;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The output is in standard JSON format:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token punctuation">{</span>
    <span class="token property">&quot;Method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;List Buckets&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Buckets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;BucketName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;BucketName&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;BucketID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;BucketID&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Ctime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;Ctime&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Policy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;Policy&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;DataCount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;DataCount&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ParityCount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;ParityCount&gt;&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;BucketName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;BucketName&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;BucketID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;BucketID&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Ctime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;Ctime&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Policy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;Policy&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;DataCount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;DataCount&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ParityCount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;ParityCount&gt;&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="display-information-about-all-objects-in-a-bucket" tabindex="-1"><a class="header-anchor" href="#display-information-about-all-objects-in-a-bucket" aria-hidden="true">#</a> Display Information about All Objects in a Bucket</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&quot;http://127.0.0.1:5001/api/v0/lfs/list_objects?arg=&lt;BucketName&gt;&amp;addr=&lt;public key&gt;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The output is in standard JSON format:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;Method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;List Objects&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;Objects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;ObjectName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;ObjectName&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;ObjectSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;ObjectSize&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Ctime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;Ctime&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Dir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;Dir&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;LatestChalTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;LatestChalTime&gt;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;ObjectName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;ObjectName&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;ObjectSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;ObjectSize&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Ctime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;Ctime&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Dir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;Dir&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;LatestChalTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;LatestChalTime&gt;&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/start-and-usage/http-operation.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const httpOperation_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "http-operation.html.vue"]]);
export {
  httpOperation_html as default
};
