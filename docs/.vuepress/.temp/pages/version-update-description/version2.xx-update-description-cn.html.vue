<template><div><h3 id="version2-6-4" tabindex="-1"><a class="header-anchor" href="#version2-6-4" aria-hidden="true">#</a> Version2.6.4</h3>
<p>修改内容：</p>
<ol>
<li>
<p>质押的收益不参加后续的分润</p>
</li>
<li>
<p>提取质押，需要距离最后一笔质押180天之后；用户执行<code v-pre>quit role</code>需要距离注册<code v-pre>role</code>的360天之后</p>
</li>
<li>
<p>质押收益可以随时取；质押和质押收益的提取各用单独的命令<code v-pre>mefs-user pledgeWithdraw</code> <code v-pre>mefs-user pledgeRewardWithdraw</code></p>
</li>
<li>
<p>info面板显示改动：provider的<code v-pre>voucher</code>改为<code v-pre>income</code>，<code v-pre>income</code>数值表示可提取收益</p>
</li>
</ol>
<p> </p>
<h3 id="version2-6-5" tabindex="-1"><a class="header-anchor" href="#version2-6-5" aria-hidden="true">#</a> Version2.6.5</h3>
<p>修改内容：</p>
<ol>
<li>
<p>修复了一个info面板中的显示错误</p>
</li>
<li>
<p>修改订单默认时长为1000天</p>
</li>
<li>
<p>provider节点默认不会删除到期数据，当设置MEFS_CLEANUP环境变量为true后才会删除</p>
</li>
</ol>
<p> </p>
<h3 id="version2-7-0" tabindex="-1"><a class="header-anchor" href="#version2-7-0" aria-hidden="true">#</a> Version2.7.0</h3>
<ol>
<li>增加新功能：用户选择上传lfs元数据到keeper链</li>
<li>上传对象时为对象添加etag</li>
<li>显示面板的相关修复</li>
<li>修复user在传输对象时的一些bug</li>
<li>一些性能优化</li>
</ol>
<h3 id="version2-7-1" tabindex="-1"><a class="header-anchor" href="#version2-7-1" aria-hidden="true">#</a> Version2.7.1</h3>
<p>修复user在重度传输负载时的相关问题</p>
<h3 id="version2-7-2" tabindex="-1"><a class="header-anchor" href="#version2-7-2" aria-hidden="true">#</a> Version2.7.2</h3>
<p>修复keeper的共识bug</p>
<h3 id="version2-7-3" tabindex="-1"><a class="header-anchor" href="#version2-7-3" aria-hidden="true">#</a> Version2.7.3</h3>
<p>修复keeper的共识bug</p>
<h3 id="version2-7-4" tabindex="-1"><a class="header-anchor" href="#version2-7-4" aria-hidden="true">#</a> Version2.7.4</h3>
<p>修复keeper的共识bug</p>
</div></template>


