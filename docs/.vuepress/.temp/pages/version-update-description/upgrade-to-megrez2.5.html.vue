<template><div><h1 id="step-by-step" tabindex="-1"><a class="header-anchor" href="#step-by-step" aria-hidden="true">#</a> Step by step</h1>
<p>Using user node as an example, providers are the same.</p>
<h2 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h2>
<p>For user nodes, if there is important data stored in memo, please download it to the local hard disk first, otherwise the data will be lost.</p>
<h2 id="step1-for-existing-nodes" tabindex="-1"><a class="header-anchor" href="#step1-for-existing-nodes" aria-hidden="true">#</a> Step1(For existing nodes)</h2>
<p>1.Enter the node</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mefs-user <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​<img src="@source/version-update-description/to2.5-1.png" alt="1" loading="lazy"></p>
<p>2.Export the node sk and wallet address and save it</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-user wallet default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​<img src="@source/version-update-description/to2.5-2.png" alt="2" loading="lazy"></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-user wallet <span class="token builtin class-name">export</span> 0xf830Eb3445E4c5dAf415f3284c8C50ff6670b3f0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​<img src="@source/version-update-description/to2.5-3.png" alt="3" loading="lazy"></p>
<p>3.stop the node and delete the node root directory, the default is .memo-user</p>
<p>​<img src="@source/version-update-description/to2.5-4.png" alt="4" loading="lazy"></p>
<h2 id="step2-for-new-nodes" tabindex="-1"><a class="header-anchor" href="#step2-for-new-nodes" aria-hidden="true">#</a> Step2(For new nodes)</h2>
<p>1.Send the wallet address to us for topping up</p>
<p>2.Download the latest version of image</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull memoio/mefs-user:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​<img src="@source/version-update-description/to2.5-5.png" alt="5" loading="lazy"></p>
<p>Set up the environments for root directory and data directory</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">MEFS_PATH</span><span class="token operator">=~</span>/memo_user

<span class="token assign-left variable">MEFS_DATA</span><span class="token operator">=~</span>/memo_user_data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/version-update-description/to2.5-6.png" alt="6" tabindex="0" loading="lazy"><figcaption>6</figcaption></figure>
<p>3.Regenerate the node root directory using sk</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">--entrypoint</span> mefs-user memoio/mefs-user:latest init <span class="token parameter variable">--sk</span><span class="token operator">=</span> da3d7cab393218e5d4e3835f6651d815e0df46bb3c8d843fef23cc80c66a16ad <span class="token parameter variable">--password</span><span class="token operator">=</span>memoriae
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​<img src="@source/version-update-description/to2.5-7.png" alt="7" loading="lazy"></p>
<p>4.Update the configuration file</p>
<p>version:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">--entrypoint</span> mefs-user memoio/mefs-user:latest config <span class="token builtin class-name">set</span> <span class="token parameter variable">--key</span><span class="token operator">=</span>contract.version <span class="token parameter variable">--value</span><span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​<img src="@source/version-update-description/to2.5-8.png" alt="8" loading="lazy"></p>
<p>endpoint:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">--entrypoint</span> mefs-user memoio/mefs-user:latest config <span class="token builtin class-name">set</span> <span class="token parameter variable">--key</span><span class="token operator">=</span>contract.endPoint <span class="token parameter variable">--value</span><span class="token operator">=</span><span class="token string">"https:// testchain.metamemo.one:24180"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​<img src="@source/version-update-description/to2.5-9.png" alt="9" loading="lazy"></p>
<p>contract:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">--entrypoint</span> mefs-user memoio/mefs-user:latest config <span class="token builtin class-name">set</span> <span class="token parameter variable">--key</span><span class="token operator">=</span>contract.roleContract <span class="token parameter variable">--value</span><span class="token operator">=</span><span class="token string">" 0x7c797a5d4809e3FA59d4988b6EeB8880D83Eef3a"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​<img src="@source/version-update-description/to2.5-10.png" alt="10" loading="lazy"></p>
<p>bootstrap:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">--entrypoint</span> mefs-user memoio/mefs-user:latest bootstrap <span class="token function">clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/version-update-description/to2.5-11.png" alt="11" tabindex="0" loading="lazy"><figcaption>11</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">--entrypoint</span> mefs-user memoio/mefs-user:latest bootstrap <span class="token function">add</span>

<span class="token string">"/ip4/1.182.90.4/tcp/14071/p2p/12D3KooWRJ4Hs5oKEonaz2B5j2DVFTa4j66oHfzndVLCmYhkWY2w"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.Start the node</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> --stop-timeout <span class="token number">30</span> <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_DATA</span>:/root/data <span class="token parameter variable">-e</span> <span class="token assign-left variable">PRICE</span><span class="token operator">=</span><span class="token number">250000</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">PASSWORD</span><span class="token operator">=</span><span class="token string">"memoriae"</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">GROUP</span><span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">SWARM_PORT</span><span class="token operator">=</span><span class="token number">4001</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">DATA_PATH</span><span class="token operator">=</span>/root/data <span class="token parameter variable">--name</span> mefs-user memoio/mefs-user:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/version-update-description/to2.5-12.png" alt="12" tabindex="0" loading="lazy"><figcaption>12</figcaption></figure>
<p>6.Wait for the synchronization til the status turns true</p>
<figure><img src="@source/version-update-description/to2.5-13.png" alt="13" tabindex="0" loading="lazy"><figcaption>13</figcaption></figure>
<h2 id="step-3-for-providers-only" tabindex="-1"><a class="header-anchor" href="#step-3-for-providers-only" aria-hidden="true">#</a> Step 3: (For providers only)</h2>
<p>1.declare</p>
<p>When participating as a provider node, you need to run the declare command (declare the public address), which is used to communicate between nodes.</p>
<p>Prepare your public ip + port, the demonstration is as below.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-provider net <span class="token builtin class-name">declare</span> /ip4/x.x.x.x/tcp/4001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/version-update-description/to2.5-14.png" alt="14" tabindex="0" loading="lazy"><figcaption>14</figcaption></figure>
<p>Explanation of parameters.</p>
<p>suppose 1.2.3.4 is your public ip</p>
<p>4001 is your public port, which corresponds to the port 4001 mapped when the node is started.</p>
</div></template>


