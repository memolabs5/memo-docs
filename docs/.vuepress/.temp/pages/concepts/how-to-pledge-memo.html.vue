<template><div><h1 id="how-to-pledge-memo" tabindex="-1"><a class="header-anchor" href="#how-to-pledge-memo" aria-hidden="true">#</a> How to Pledge MEMO</h1>
<p>Documentation on the use of the pledge function (example for the user, same for other nodes)</p>
<p> </p>
<h2 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h2>
<p>The following commands are executed only if the MEFS_PATH environment variable has been set to the root directory of the node, using the user as an example:</p>
<p>In the linux environment, the default root directory of the node is ~/.memo-user, set the root directory with the command below</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">MEFS_PATH</span><span class="token operator">=~</span>/.memo-user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the windows environment, the default root directory of the node is c:\memouser, set the root directory with the command below</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token assign-left variable">MEFS_PATH</span><span class="token operator">=</span>c:<span class="token punctuation">\</span>memouser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MEMO unit conversions：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">1</span> <span class="token assign-left variable">Memo</span><span class="token operator">=</span> <span class="token number">10</span>^9 NanoMemo <span class="token operator">=</span> <span class="token number">10</span>^18 AttoMemo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="pledge-operation" tabindex="-1"><a class="header-anchor" href="#pledge-operation" aria-hidden="true">#</a> Pledge operation</h2>
<p>First check the node info panel to confirm that the current ERC20 balance is sufficient for pledging.</p>
<figure><img src="@source/concepts/pledge1.png" alt="1" tabindex="0" loading="lazy"><figcaption>1</figcaption></figure>
<p>When you have confirmed that the ERC20 balance is sufficient, you can proceed with the pledge operation.</p>
<p>Pledge 1000 NanoMemo to the pledge pool:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-user settle pledgeAdd <span class="token string">"1000 NanoMemo"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/concepts/pledge2.png" alt="2" tabindex="0" loading="lazy"><figcaption>2</figcaption></figure>
<p>After run the command, you can see that the pledge amount has increased by 1000 NanoMemo.</p>
<figure><img src="@source/concepts/pledge3.png" alt="3" tabindex="0" loading="lazy"><figcaption>3</figcaption></figure>
<h2 id="check-the-current-pledge-amount" tabindex="-1"><a class="header-anchor" href="#check-the-current-pledge-amount" aria-hidden="true">#</a> Check the current pledge amount</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-user settle pledgeGet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/concepts/pledge4.png" alt="4" tabindex="0" loading="lazy"><figcaption>4</figcaption></figure>
<h2 id="extracts-memo-from-the-pledge-pool-to-the-fs-pool" tabindex="-1"><a class="header-anchor" href="#extracts-memo-from-the-pledge-pool-to-the-fs-pool" aria-hidden="true">#</a> Extracts MEMO from the pledge pool to the FS pool</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-user settle pledgeWithdraw <span class="token string">"1000 NanoMemo"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/concepts/pledge5.png" alt="5" tabindex="0" loading="lazy"><figcaption>5</figcaption></figure>
<h2 id="move-memo-from-fs-file-system-to-wallet" tabindex="-1"><a class="header-anchor" href="#move-memo-from-fs-file-system-to-wallet" aria-hidden="true">#</a> Move memo from Fs file system to wallet</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-user settle withdraw <span class="token string">"1000 NanoMemo"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


