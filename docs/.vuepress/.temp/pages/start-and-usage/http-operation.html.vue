<template><div><h1 id="http-operation" tabindex="-1"><a class="header-anchor" href="#http-operation" aria-hidden="true">#</a> HTTP Operation</h1>
<p>Mefs commands can all be operated using HTTP.</p>
<p>Configuration</p>
<p>Before mefs-user starts, perform the following configuration:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>// mefs api port setting, default is <span class="token number">5001</span>

mefs-user config Addresses.API /ip4/0.0.0.0/tcp/5001

// cross-domain access

mefs-user config <span class="token parameter variable">--json</span> API.HTTPHeaders.Access-Control-Allow-Origin <span class="token string">'["*"]'</span>

mefs-user config <span class="token parameter variable">--json</span> API.HTTPHeaders.Access-Control-Allow-Methods <span class="token string">'["PUT", "GET", "POST"]'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then restart mefs-user to use HTTP to operate.</p>
<p><strong>Usage</strong></p>
<p>A command similar to the following:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-user rootcmd subcmd <span class="token operator">&lt;</span>arg<span class="token operator"><span class="token file-descriptor important">1</span>></span> <span class="token operator">&lt;</span>arg<span class="token operator"><span class="token file-descriptor important">2</span>></span> <span class="token parameter variable">-opname1</span><span class="token operator">=</span><span class="token operator">&lt;</span>op<span class="token operator"><span class="token file-descriptor important">1</span>></span> <span class="token parameter variable">-opname2</span><span class="token operator">=</span><span class="token operator">&lt;</span>op<span class="token operator"><span class="token file-descriptor important">2</span>></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The corresponding HTTP request is:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">"http://&lt;ip>:&lt;port>/api/v0/&lt;rootcmd>/&lt;subcmd>?arg=&lt;arg1>&amp;arg=&lt;arg2>&amp;opname1=&lt;op1>&amp;opname2=&lt;op2>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>IP is the network address of the machine where mefs-user is started. The port defaults to 5001. If cross-domain access is configured before running, you can use the external network IP to access, otherwise you can only access it through 127.0.0.1.</p>
<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<h3 id="show-all-bucket-information" tabindex="-1"><a class="header-anchor" href="#show-all-bucket-information" aria-hidden="true">#</a> Show all bucket information</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">"http://127.0.0.1:5001/api/v0/lfs/list_buckets?addr=&lt;public key>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The output is in standard JSON format:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>  <span class="token punctuation">{</span>
    <span class="token property">"Method"</span><span class="token operator">:</span> <span class="token string">"List Buckets"</span><span class="token punctuation">,</span>
    <span class="token property">"Buckets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"BucketName"</span><span class="token operator">:</span> <span class="token string">"&lt;BucketName>"</span><span class="token punctuation">,</span>
        <span class="token property">"BucketID"</span><span class="token operator">:</span> <span class="token string">"&lt;BucketID>"</span><span class="token punctuation">,</span>
        <span class="token property">"Ctime"</span><span class="token operator">:</span> <span class="token string">"&lt;Ctime>"</span><span class="token punctuation">,</span>
        <span class="token property">"Policy"</span><span class="token operator">:</span> <span class="token string">"&lt;Policy>"</span><span class="token punctuation">,</span>
        <span class="token property">"DataCount"</span><span class="token operator">:</span> <span class="token string">"&lt;DataCount>"</span><span class="token punctuation">,</span>
        <span class="token property">"ParityCount"</span><span class="token operator">:</span> <span class="token string">"&lt;ParityCount>"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"BucketName"</span><span class="token operator">:</span> <span class="token string">"&lt;BucketName>"</span><span class="token punctuation">,</span>
        <span class="token property">"BucketID"</span><span class="token operator">:</span> <span class="token string">"&lt;BucketID>"</span><span class="token punctuation">,</span>
        <span class="token property">"Ctime"</span><span class="token operator">:</span> <span class="token string">"&lt;Ctime>"</span><span class="token punctuation">,</span>
        <span class="token property">"Policy"</span><span class="token operator">:</span> <span class="token string">"&lt;Policy>"</span><span class="token punctuation">,</span>
        <span class="token property">"DataCount"</span><span class="token operator">:</span> <span class="token string">"&lt;DataCount>"</span><span class="token punctuation">,</span>
        <span class="token property">"ParityCount"</span><span class="token operator">:</span> <span class="token string">"&lt;ParityCount>"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="display-information-about-all-objects-in-a-bucket" tabindex="-1"><a class="header-anchor" href="#display-information-about-all-objects-in-a-bucket" aria-hidden="true">#</a> Display Information about All Objects in a Bucket</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">"http://127.0.0.1:5001/api/v0/lfs/list_objects?arg=&lt;BucketName>&amp;addr=&lt;public key>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The output is in standard JSON format:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"Method"</span><span class="token operator">:</span> <span class="token string">"List Objects"</span><span class="token punctuation">,</span>
  <span class="token property">"Objects"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"ObjectName"</span><span class="token operator">:</span> <span class="token string">"&lt;ObjectName>"</span><span class="token punctuation">,</span>
      <span class="token property">"ObjectSize"</span><span class="token operator">:</span> <span class="token string">"&lt;ObjectSize>"</span><span class="token punctuation">,</span>
      <span class="token property">"Ctime"</span><span class="token operator">:</span> <span class="token string">"&lt;Ctime>"</span><span class="token punctuation">,</span>
      <span class="token property">"Dir"</span><span class="token operator">:</span> <span class="token string">"&lt;Dir>"</span><span class="token punctuation">,</span>
      <span class="token property">"LatestChalTime"</span><span class="token operator">:</span> <span class="token string">"&lt;LatestChalTime>"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"ObjectName"</span><span class="token operator">:</span> <span class="token string">"&lt;ObjectName>"</span><span class="token punctuation">,</span>
      <span class="token property">"ObjectSize"</span><span class="token operator">:</span> <span class="token string">"&lt;ObjectSize>"</span><span class="token punctuation">,</span>
      <span class="token property">"Ctime"</span><span class="token operator">:</span> <span class="token string">"&lt;Ctime>"</span><span class="token punctuation">,</span>
      <span class="token property">"Dir"</span><span class="token operator">:</span> <span class="token string">"&lt;Dir>"</span><span class="token punctuation">,</span>
      <span class="token property">"LatestChalTime"</span><span class="token operator">:</span> <span class="token string">"&lt;LatestChalTime>"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


