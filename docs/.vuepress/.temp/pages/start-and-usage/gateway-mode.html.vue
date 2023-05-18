<template><div><h1 id="gateway-mode" tabindex="-1"><a class="header-anchor" href="#gateway-mode" aria-hidden="true">#</a> Gateway Mode</h1>
<p>Multiple users can share one mefs's running program.</p>
<h2 id="user-agent-start" tabindex="-1"><a class="header-anchor" href="#user-agent-start" aria-hidden="true">#</a> User Agent Start</h2>
<p>After mefs is started, other users can also be started as a proxy.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-user lfs start <span class="token operator">&lt;</span>addr<span class="token operator">></span> <span class="token parameter variable">--sk</span><span class="token operator">=</span><span class="token operator">&lt;</span>private key<span class="token operator">></span> <span class="token parameter variable">--pwd</span><span class="token operator">=</span><span class="token operator">&lt;</span>password<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameter explanation:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>addr：account address<span class="token punctuation">;</span>

--sk：the private key of the user<span class="token punctuation">;</span> <span class="token keyword">if</span> the private key corresponding to the address does not match, the address of the private key shall prevail<span class="token punctuation">;</span>

--pwd：user's password<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="user-agent-stop" tabindex="-1"><a class="header-anchor" href="#user-agent-stop" aria-hidden="true">#</a> User Agent Stop</h2>
<p>After mefs is started, other users can also be shut down by proxy.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-user lfs <span class="token function">kill</span> addr <span class="token parameter variable">--pwd</span><span class="token operator">=</span><span class="token operator">&lt;</span>password<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameter explanation:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>addr：account address

--pwd：account password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<ul>
<li>Cli</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-user rootcmd subcmd arg1 <span class="token assign-left variable">op1</span><span class="token operator">=</span>arg2 <span class="token parameter variable">--addr</span><span class="token operator">=</span><span class="token operator">&lt;</span>public key<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Http</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> "http://<span class="token operator">&lt;</span>ip<span class="token operator">></span>:5001/api/v0/<span class="token operator">&lt;</span>roocmd<span class="token operator">></span>/<span class="token operator">&lt;</span>subcmd<span class="token operator">></span>?arg<span class="token operator">=</span><span class="token operator">&lt;</span>arg<span class="token operator"><span class="token file-descriptor important">1</span>>&amp;</span><span class="token assign-left variable">op1</span><span class="token operator">=</span><span class="token operator">&lt;</span>arg<span class="token operator"><span class="token file-descriptor important">2</span>>&amp;</span><span class="token assign-left variable">addr</span><span class="token operator">=</span><span class="token operator">&lt;</span>public key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<p>The user whose address is the public key obtains the file named ObjectName from the BucketName bucket.</p>
<ul>
<li>Cli</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs lfs get_object <span class="token operator">&lt;</span>BucketName<span class="token operator">></span> <span class="token operator">&lt;</span>ObjectName<span class="token operator">></span> <span class="token parameter variable">--addr</span><span class="token operator">=</span><span class="token operator">&lt;</span>public key<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Http</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span>  <span class="token string">"http://127.0.0.1:5001/api/v0/lfs/get_object?arg=&lt;BucketName>&amp;arg=&lt;ObjectName>&amp;addr=&lt;public key>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


