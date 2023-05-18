<template><div><h1 id="http-gateway接口" tabindex="-1"><a class="header-anchor" href="#http-gateway接口" aria-hidden="true">#</a> http-gateway接口</h1>
<h2 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件" aria-hidden="true">#</a> 上传文件</h2>
<p>putobject
method: put
url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D/%7Bobjectname%7D/" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}/{objectname}/<ExternalLinkIcon/></a></p>
<p>x-amz-meta-sign  就是钱包地址对上传文件md5值的签名
x-amz-meta-date 存储时间 单位：秒</p>
<p>return
status 200</p>
<figure><img src="@source/api-docs/middleware/v0.1-http-gateway/put.png" alt="upload" tabindex="0" loading="lazy"><figcaption>upload</figcaption></figure>
<figure><img src="@source/api-docs/middleware/v0.1-http-gateway/putRes.png" alt="upload response" tabindex="0" loading="lazy"><figcaption>upload response</figcaption></figure>
<h2 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件" aria-hidden="true">#</a> 下载文件</h2>
<p>getobject
method: get
url:    <a href="http://0.0.0.0:5080/%7Bbucketname%7D/%7Bobjectname%7D" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}/{objectname}<ExternalLinkIcon/></a></p>
<p>return
status 200</p>
<figure><img src="@source/api-docs/middleware/v0.1-http-gateway/download.png" alt="download" tabindex="0" loading="lazy"><figcaption>download</figcaption></figure>
<h2 id="查询价格" tabindex="-1"><a class="header-anchor" href="#查询价格" aria-hidden="true">#</a> 查询价格</h2>
<p>QueryPrice
method: get
url:  <a href="http://0.0.0.0:5080/?queryprice=" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/?queryprice=<ExternalLinkIcon/></a>&quot;&quot;&amp;bucket={bucketname}&amp;ssize={filesize}&amp;stime=(storagetime}</p>
<p>return
status 200
price</p>
<figure><img src="@source/api-docs/middleware/v0.1-http-gateway/queryPrice.png" alt="query price" tabindex="0" loading="lazy"><figcaption>query price</figcaption></figure>
<h2 id="查询余额" tabindex="-1"><a class="header-anchor" href="#查询余额" aria-hidden="true">#</a> 查询余额</h2>
<p>GetBalanceInfo
method: get
url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D/?getbalance=" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}/?getbalance=<ExternalLinkIcon/></a>&quot;&quot;</p>
<p>return
status 200
balance</p>
<figure><img src="@source/api-docs/middleware/v0.1-http-gateway/queryBal.png" alt="query balance" tabindex="0" loading="lazy"><figcaption>query balance</figcaption></figure>
<h2 id="approve" tabindex="-1"><a class="header-anchor" href="#approve" aria-hidden="true">#</a> Approve</h2>
<p>Approve
method: get
url: <a href="http://0.0.0.0:5080/?approve=" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/?approve=<ExternalLinkIcon/></a>&quot;&quot;&amp;ts={<span class="katex-error" title="ParseError: KaTeX parse error: Expected &#x27;EOF&#x27;, got &#x27;}&#x27; at position 12: transaction}̲&amp;faddr={" style="color:#cc0000">transaction}&amp;faddr={</span>walletaddress}</p>
<p>faddr： 发送方地址
ts： approve交易hash</p>
<p>return
status 200</p>
<figure><img src="@source/api-docs/middleware/v0.1-http-gateway/approve.png" alt="approve" tabindex="0" loading="lazy"><figcaption>approve</figcaption></figure>
<h2 id="列出文件" tabindex="-1"><a class="header-anchor" href="#列出文件" aria-hidden="true">#</a> 列出文件</h2>
<p>Listobject
method: get
url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D?list-type=2&amp;encoding-type=url&amp;delimiter=/&amp;fetch-owner=true" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}?list-type=2&amp;encoding-type=url&amp;delimiter=/&amp;fetch-owner=true<ExternalLinkIcon/></a></p>
<figure><img src="@source/api-docs/middleware/v0.1-http-gateway/list.png" alt="list" tabindex="0" loading="lazy"><figcaption>list</figcaption></figure>
</div></template>


