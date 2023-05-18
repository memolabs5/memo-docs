<template><div><h1 id="http-gateway-interface" tabindex="-1"><a class="header-anchor" href="#http-gateway-interface" aria-hidden="true">#</a> Http-Gateway Interface</h1>
<h2 id="upload-object" tabindex="-1"><a class="header-anchor" href="#upload-object" aria-hidden="true">#</a> Upload Object</h2>
<p>putobject
method: put
url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D/%7Bobjectname%7D/" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}/{objectname}/<ExternalLinkIcon/></a></p>
<p>x-amz-meta-sign: the signature of the wallet address to the MD5 value of the uploaded file
x-amz-meta-date: storage time, uint <code v-pre>seconds</code></p>
<p>return
status 200</p>
<figure><img src="@source/api-docs/middleware/v0.1-http-gateway/put.png" alt="upload" tabindex="0" loading="lazy"><figcaption>upload</figcaption></figure>
<figure><img src="@source/api-docs/middleware/v0.1-http-gateway/putRes.png" alt="upload2" tabindex="0" loading="lazy"><figcaption>upload2</figcaption></figure>
<h2 id="download-object" tabindex="-1"><a class="header-anchor" href="#download-object" aria-hidden="true">#</a> Download Object</h2>
<p>getobject
method: get
url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D/%7Bobjectname%7D" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}/{objectname}<ExternalLinkIcon/></a></p>
<p>return
status 200</p>
<figure><img src="@source/api-docs/middleware/v0.1-http-gateway/download.png" alt="download" tabindex="0" loading="lazy"><figcaption>download</figcaption></figure>
<h2 id="query-price" tabindex="-1"><a class="header-anchor" href="#query-price" aria-hidden="true">#</a> Query Price</h2>
<p>QueryPrice
method: get
url: <a href="http://0.0.0.0:5080/?queryprice=%22%22&amp;bucket=%7Bbucketname%7D&amp;ssize=%7Bfilesize%7D&amp;stime=" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/?queryprice=&quot;&quot;&amp;bucket={bucketname}&amp;ssize={filesize}&amp;stime=<ExternalLinkIcon/></a>(storagetime}</p>
<p>return
status 200
price</p>
<figure><img src="@source/api-docs/middleware/v0.1-http-gateway/queryPrice.png" alt="queryPrice" tabindex="0" loading="lazy"><figcaption>queryPrice</figcaption></figure>
<h2 id="query-balance" tabindex="-1"><a class="header-anchor" href="#query-balance" aria-hidden="true">#</a> Query Balance</h2>
<p>GetBalanceInfo
method: get
url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D/?getbalance=%22%22" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}/?getbalance=&quot;&quot;<ExternalLinkIcon/></a></p>
<p>return
status 200
balance</p>
<figure><img src="@source/api-docs/middleware/v0.1-http-gateway/queryBal.png" alt="queryBal" tabindex="0" loading="lazy"><figcaption>queryBal</figcaption></figure>
<h2 id="approve" tabindex="-1"><a class="header-anchor" href="#approve" aria-hidden="true">#</a> Approve</h2>
<p>Approve
method: get
url: <a href="http://0.0.0.0:5080/?approve=%22%22&amp;ts=%7B$transaction%7D&amp;faddr=%7B$walletaddress%7D" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/?approve=&quot;&quot;&amp;ts={<span class="katex-error" title="ParseError: KaTeX parse error: Expected &#x27;EOF&#x27;, got &#x27;}&#x27; at position 12: transaction}̲&amp;faddr={" style="color:#cc0000">transaction}&amp;faddr={</span>walletaddress}<ExternalLinkIcon/></a></p>
<p>faddr： the sender address
ts： the hash of 'approve' transaction</p>
<p>return
status 200</p>
<figure><img src="@source/api-docs/middleware/v0.1-http-gateway/approve.png" alt="approve" tabindex="0" loading="lazy"><figcaption>approve</figcaption></figure>
<h2 id="list-object" tabindex="-1"><a class="header-anchor" href="#list-object" aria-hidden="true">#</a> List Object</h2>
<p>Listobject
method: get
url: <a href="http://0.0.0.0:5080/%7Bbucketname%7D?list-type=2&amp;encoding-type=url&amp;delimiter=/&amp;fetch-owner=true" target="_blank" rel="noopener noreferrer">http://0.0.0.0:5080/{bucketname}?list-type=2&amp;encoding-type=url&amp;delimiter=/&amp;fetch-owner=true<ExternalLinkIcon/></a></p>
<figure><img src="@source/api-docs/middleware/v0.1-http-gateway/list.png" alt="list" tabindex="0" loading="lazy"><figcaption>list</figcaption></figure>
</div></template>


