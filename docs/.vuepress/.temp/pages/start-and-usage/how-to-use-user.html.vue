<template><div><p>This document is detailed about how to use user node, the installation guide is in another document.
Use LFS command to operate upload and download functions.</p>
<h1 id="lfs-command" tabindex="-1"><a class="header-anchor" href="#lfs-command" aria-hidden="true">#</a> lfs command</h1>
<p>Introduction</p>
<p>This command creates, uploads, downloads, and views a collection of containers and files for the user.</p>
<p>Usage</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-user lfs

COMMANDS:
   createBucket    create bucket
   listBuckets     list buckets
   headBucket      <span class="token function">head</span> bucket info
   putObject       put object
   headObject      <span class="token function">head</span> object
   getObject       get object
   listObjects     list objects
   delObject       delete object
   downloadObject  download object using rpc
   showStorage     show storage info
   getPros         get pros of bucket
   help, h         Shows a list of commands or <span class="token builtin class-name">help</span> <span class="token keyword">for</span> one <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Subcommands</p>
<h2 id="_1-createbucket-subcommand" tabindex="-1"><a class="header-anchor" href="#_1-createbucket-subcommand" aria-hidden="true">#</a> 1 createBucket subcommand</h2>
<p>Introduction</p>
<p>This command creates buckets</p>
<p>Usage</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-user lfs createBucket <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Options</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token parameter variable">--bucket</span> value, <span class="token parameter variable">--bn</span> value <span class="token builtin class-name">set</span> bucket name 
<span class="token parameter variable">--policy</span> value, <span class="token parameter variable">--pl</span> value <span class="token builtin class-name">set</span> erasure code <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> or multi-copy policy <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>default is <span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token parameter variable">--datacount</span> value, <span class="token parameter variable">--dc</span> value <span class="token builtin class-name">set</span> Number of data blocks <span class="token punctuation">(</span>default is <span class="token number">3</span><span class="token punctuation">)</span> 
<span class="token parameter variable">--paritycount</span> value, <span class="token parameter variable">--pc</span> value Set the number of parity blocks <span class="token punctuation">(</span>default is <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example</p>
<p>Bucket name: test, storage policy: erasure code, number of data blocks: 10, number of check blocks 5</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-user lfs createBucket  <span class="token parameter variable">--bn</span><span class="token operator">=</span>test  <span class="token parameter variable">--pl</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--dc</span><span class="token operator">==</span><span class="token number">10</span> <span class="token parameter variable">--pc</span><span class="token operator">=</span><span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-listbuckets-subcommand" tabindex="-1"><a class="header-anchor" href="#_2-listbuckets-subcommand" aria-hidden="true">#</a> 2 listBuckets subcommand</h2>
<p>Introduction</p>
<p>This command is used to view the status of all buckets</p>
<p>Usage</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-user lfs listBuckets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-headbucket-subcommand" tabindex="-1"><a class="header-anchor" href="#_3-headbucket-subcommand" aria-hidden="true">#</a> 3 headBucket subcommand</h2>
<p>Introduction</p>
<p>This command is used to view all the information of the specified bucket, the following is an example (test is the bucket name)</p>
<p>Usage</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-user lfs headBucke   <span class="token parameter variable">--bn</span><span class="token operator">=</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-putobject-subcommand" tabindex="-1"><a class="header-anchor" href="#_4-putobject-subcommand" aria-hidden="true">#</a> 4 putObject subcommand</h2>
<p>Introduction</p>
<p>This command specifies the file for upload</p>
<p>Usage</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-user lfs putObject <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>USAGE:
mefs-user lfs putObject [command options] [arguments...]</p>
<p>OPTIONS:
--bucket value, --bn value use bucket name
--object value, --on value file name after upload
--path value upload file path
--etag value select verification method (default: md5)
--enc value Select encryption method (default: aes)
--help, -h View help</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
Example

```shell
./mefs-user lfs putObject --bn=test --on=1   --path=./index.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-headobject-subcommand" tabindex="-1"><a class="header-anchor" href="#_5-headobject-subcommand" aria-hidden="true">#</a> 5 headObject subcommand</h2>
<p>Introduction</p>
<p>This command is used to view the specified file status</p>
<p>Usage</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-user lfs headObject <span class="token parameter variable">-h</span>

USAGE:
   mefs-user lfs headObject <span class="token punctuation">[</span>command options<span class="token punctuation">]</span> <span class="token punctuation">[</span>arguments<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

OPTIONS:
   <span class="token parameter variable">--bucket</span> value, <span class="token parameter variable">--bn</span> value  bucketName
   <span class="token parameter variable">--object</span> value, <span class="token parameter variable">--on</span> value  objectName
   <span class="token parameter variable">--all</span>                       show all information <span class="token punctuation">(</span>default: <span class="token boolean">false</span><span class="token punctuation">)</span>
   --help, <span class="token parameter variable">-h</span>                  show <span class="token builtin class-name">help</span> <span class="token punctuation">(</span>default: <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-user lfs headObject  <span class="token parameter variable">--bn</span><span class="token operator">=</span>test <span class="token parameter variable">--on</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-getobject-subcommand" tabindex="-1"><a class="header-anchor" href="#_6-getobject-subcommand" aria-hidden="true">#</a> 6 getObject subcommand</h2>
<p>Introduction</p>
<p>Download the file to the specified path</p>
<p>Usage</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>USAGE:
   mefs-user lfs getObject <span class="token punctuation">[</span>command options<span class="token punctuation">]</span> <span class="token punctuation">[</span>arguments<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

OPTIONS:
   <span class="token parameter variable">--bucket</span> value, <span class="token parameter variable">--bn</span> value  bucketName
   <span class="token parameter variable">--object</span> value, <span class="token parameter variable">--on</span> value  objectName
   <span class="token parameter variable">--cid</span> value                 cid name
   <span class="token parameter variable">--start</span> value               start position <span class="token punctuation">(</span>default: <span class="token number">0</span><span class="token punctuation">)</span>
   <span class="token parameter variable">--length</span> value              <span class="token builtin class-name">read</span> length <span class="token punctuation">(</span>default: -1<span class="token punctuation">)</span>
   <span class="token parameter variable">--path</span> value                stored path of <span class="token function">file</span>
   --help, <span class="token parameter variable">-h</span>                  show <span class="token builtin class-name">help</span> <span class="token punctuation">(</span>default: <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-user lfs getObject <span class="token parameter variable">--bn</span><span class="token operator">=</span>test <span class="token parameter variable">--on</span><span class="token operator">=</span><span class="token number">1</span>  <span class="token parameter variable">--path</span><span class="token operator">=</span>./index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-listobjects-subcommand" tabindex="-1"><a class="header-anchor" href="#_7-listobjects-subcommand" aria-hidden="true">#</a> 7 listObjects subcommand</h2>
<p>Introduction</p>
<p>View all file information of a specified bucket</p>
<p>Usage</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>USAGE:
   mefs-user lfs listObjects <span class="token punctuation">[</span>command options<span class="token punctuation">]</span> <span class="token punctuation">[</span>arguments<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

OPTIONS:
   <span class="token parameter variable">--bucket</span> value, <span class="token parameter variable">--bn</span> value  bucket name, priority
   <span class="token parameter variable">--marker</span> value              key start from, marker should exist
   <span class="token parameter variable">--prefix</span> value              prefix of objects
   <span class="token parameter variable">--delimiter</span> value           delimiter to group keys: <span class="token string">'/'</span> or <span class="token string">''</span>
   <span class="token parameter variable">--maxKeys</span> value             number of objects <span class="token keyword">in</span> <span class="token builtin class-name">return</span> <span class="token punctuation">(</span>default: <span class="token number">1000</span><span class="token punctuation">)</span>
   --help, <span class="token parameter variable">-h</span>                  show <span class="token builtin class-name">help</span> <span class="token punctuation">(</span>default: <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-user lfs listObjects
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-delobject-subcommand" tabindex="-1"><a class="header-anchor" href="#_8-delobject-subcommand" aria-hidden="true">#</a> 8 delObject subcommand</h2>
<p>Introductioin</p>
<p>delete specified file</p>
<p>Usage</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>USAGE:
   mefs-user lfs delObject <span class="token punctuation">[</span>command options<span class="token punctuation">]</span> <span class="token punctuation">[</span>arguments<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

OPTIONS:
   <span class="token parameter variable">--bucket</span> value, <span class="token parameter variable">--bn</span> value  bucketName
   <span class="token parameter variable">--object</span> value, <span class="token parameter variable">--on</span> value  objectName
   --help, <span class="token parameter variable">-h</span>                  show <span class="token builtin class-name">help</span> <span class="token punctuation">(</span>default: <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-downloadobject-subcommand" tabindex="-1"><a class="header-anchor" href="#_9-downloadobject-subcommand" aria-hidden="true">#</a> 9 downloadObject subcommand</h2>
<p>Introduction</p>
<p>Download objects using rpc</p>
<p>Usage</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>USAGE:
   mefs-user lfs downloadObject <span class="token punctuation">[</span>command options<span class="token punctuation">]</span> <span class="token punctuation">[</span>arguments<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

OPTIONS:
   <span class="token parameter variable">--bucket</span> value, <span class="token parameter variable">--bn</span> value  bucketName
   <span class="token parameter variable">--object</span> value, <span class="token parameter variable">--on</span> value  objectName
   <span class="token parameter variable">--cid</span> value                 cid name
   <span class="token parameter variable">--start</span> value               start position <span class="token punctuation">(</span>default: <span class="token number">0</span><span class="token punctuation">)</span>
   <span class="token parameter variable">--length</span> value              <span class="token builtin class-name">read</span> length <span class="token punctuation">(</span>default: -1<span class="token punctuation">)</span>
   <span class="token parameter variable">--path</span> value                stored path of <span class="token function">file</span>
   --help, <span class="token parameter variable">-h</span>                  show <span class="token builtin class-name">help</span> <span class="token punctuation">(</span>default: <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-showstorage-subcommand" tabindex="-1"><a class="header-anchor" href="#_10-showstorage-subcommand" aria-hidden="true">#</a> 10 showStorage subcommand</h2>
<p>Introduction</p>
<p>Display the storage information of the node</p>
<p>Example</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-user lfs showStorage
Lfs has storage:  <span class="token number">40.69</span> MiB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-getpros-subcommand" tabindex="-1"><a class="header-anchor" href="#_11-getpros-subcommand" aria-hidden="true">#</a> 11 getPros subcommand</h2>
<p>Introduction</p>
<p>View the bucket user list</p>
<p>Example</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-user lfs getPros <span class="token number">0</span>
bucket <span class="token number">0</span> <span class="token keyword">select</span> providers:  <span class="token punctuation">[</span><span class="token number">8</span> <span class="token number">21</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


