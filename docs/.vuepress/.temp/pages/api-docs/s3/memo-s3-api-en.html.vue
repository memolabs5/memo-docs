<template><div><h1 id="memo-s3-api-en" tabindex="-1"><a class="header-anchor" href="#memo-s3-api-en" aria-hidden="true">#</a> MEMO S3 API EN</h1>
<h2 id="start-node-and-gateway" tabindex="-1"><a class="header-anchor" href="#start-node-and-gateway" aria-hidden="true">#</a> Start Node and Gateway</h2>
<p>If you are under Windows, you can directly <a href="https://docs.memolabs.org/memo/before-begin/in-windows-os" target="_blank" rel="noopener noreferrer">use the Windows installation package to complete the installation<ExternalLinkIcon/></a>, and the program will automatically start the node and gateway after running the start icon. The account and password of the gateway are recorded in the <code v-pre>account.txt</code> file in the root directory of the node, the default account is the node wallet address, the default password is <code v-pre>memoriae</code>, and the default gateway API port is 5080.</p>
<p>If you want to deploy the startup node manually, multiple methods for deploying the startup node are shown in the <a href="https://docs.memolabs.org/memo/start-nodes-in-linux/user/how-to-start/step-by-step" target="_blank" rel="noopener noreferrer">Startup Document<ExternalLinkIcon/></a> of the MEMO.</p>
<p>If you want to start the gateway manually from the command line, start the gateway with the following command, using the default parameters:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-user gateway run 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can also manually specify parameters such as account, password, and endpoint at startup, and the startup parameters are described:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">## Windows</span>
C:<span class="token punctuation">\</span>memouser<span class="token punctuation">\</span>batch<span class="token operator">></span>mefs-user.exe gateway run <span class="token parameter variable">-h</span>
NAME:
   mefs-user gateway run - run a memo gateway

USAGE:
   mefs-user gateway run <span class="token punctuation">[</span>command options<span class="token punctuation">]</span> <span class="token punctuation">[</span>arguments<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

OPTIONS:
   <span class="token parameter variable">--username</span> value, <span class="token parameter variable">-n</span> value  input your user name <span class="token punctuation">(</span>default: <span class="token string">"memo"</span><span class="token punctuation">)</span>
   <span class="token parameter variable">--password</span> value, <span class="token parameter variable">-p</span> value  input your password <span class="token punctuation">(</span>default: <span class="token string">"memoriae"</span><span class="token punctuation">)</span>
   <span class="token parameter variable">--endpoint</span> value, <span class="token parameter variable">-e</span> value  input your endpoint <span class="token punctuation">(</span>default: <span class="token string">"0.0.0.0:5080"</span><span class="token punctuation">)</span>
   <span class="token parameter variable">--console</span> value, <span class="token parameter variable">-c</span> value   input your console <span class="token keyword">for</span> browser <span class="token punctuation">(</span>default: <span class="token string">"8080"</span><span class="token punctuation">)</span>
   --help, <span class="token parameter variable">-h</span>                  show <span class="token builtin class-name">help</span> <span class="token punctuation">(</span>default: <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="s3-api-lists" tabindex="-1"><a class="header-anchor" href="#s3-api-lists" aria-hidden="true">#</a> S3 API Lists</h2>
<p>The S3-compatible APIs currently supported by MEMO include:</p>
<table>
<thead>
<tr>
<th>About Bucket</th>
<th>About Object</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>MakeBucketWithLocation</code></td>
<td><code v-pre>ListObjects</code></td>
</tr>
<tr>
<td><code v-pre>GetBucketInfo</code></td>
<td><code v-pre>GetObject</code></td>
</tr>
<tr>
<td><code v-pre>ListBuckets</code></td>
<td><code v-pre>GetObjectInfo</code></td>
</tr>
<tr>
<td></td>
<td><code v-pre>PutObject</code></td>
</tr>
<tr>
<td></td>
<td><code v-pre>DeleteObject</code></td>
</tr>
</tbody>
</table>
<h2 id="the-interface-for-operating-buckets" tabindex="-1"><a class="header-anchor" href="#the-interface-for-operating-buckets" aria-hidden="true">#</a> The Interface for Operating Buckets</h2>
<h3 id="create-a-bucket" tabindex="-1"><a class="header-anchor" href="#create-a-bucket" aria-hidden="true">#</a> Create a Bucket</h3>
<p>MakeBucketWithLocation(ctx context.Context, bucket string) error</p>
<table>
<thead>
<tr>
<th>parameter</th>
<th>type</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ctx</code></td>
<td><em>Context</em></td>
<td>client context</td>
</tr>
<tr>
<td><code v-pre>bucket</code></td>
<td><em>string</em></td>
<td>bucket name</td>
</tr>
</tbody>
</table>
<p>for example:</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// create client</span>
<span class="token keyword">func</span> <span class="token function">NewMemofs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>MemoFs<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    repoDir <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">"MEFS_PATH"</span><span class="token punctuation">)</span>
    addr<span class="token punctuation">,</span> headers<span class="token punctuation">,</span> err <span class="token operator">:=</span> mclient<span class="token punctuation">.</span><span class="token function">GetMemoClientInfo</span><span class="token punctuation">(</span>repoDir<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    napi<span class="token punctuation">,</span> closer<span class="token punctuation">,</span> err <span class="token operator">:=</span> mclient<span class="token punctuation">.</span><span class="token function">NewUserNode</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> addr<span class="token punctuation">,</span> headers<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> <span class="token function">closer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> napi<span class="token punctuation">.</span><span class="token function">ShowStorage</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">&amp;</span>MemoFs<span class="token punctuation">{</span>
        addr<span class="token punctuation">:</span>    addr<span class="token punctuation">,</span>
        headers<span class="token punctuation">:</span> headers<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>err <span class="token operator">=</span> memofs<span class="token punctuation">.</span><span class="token function">MakeBucketWithLocation</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"myBucket"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Successfully created mybucket."</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-the-details-of-the-bucket" tabindex="-1"><a class="header-anchor" href="#get-the-details-of-the-bucket" aria-hidden="true">#</a> Get the Details of the Bucket</h3>
<p>GetBucketInfo(ctx context.Context, bucket string) (bi BucketInfo, err error)</p>
<table>
<thead>
<tr>
<th>parameter</th>
<th>type</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ctx</code></td>
<td><em>Context</em></td>
<td>client context</td>
</tr>
<tr>
<td><code v-pre>bucket</code></td>
<td><em>string</em></td>
<td>bucket name</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>return value</th>
<th>type</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>bi</code></td>
<td><em>BucketInfo</em></td>
<td>details of the bucket</td>
</tr>
<tr>
<td><code v-pre>err</code></td>
<td><em>error</em></td>
<td>error information</td>
</tr>
</tbody>
</table>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> BucketInfo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    pb<span class="token punctuation">.</span>BucketOption
    pb<span class="token punctuation">.</span>BucketInfo
    Confirmed <span class="token builtin">bool</span> <span class="token string">`json:"Confirmed"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> BucketOption <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Version              <span class="token builtin">uint32</span>   <span class="token string">`protobuf:"varint,1,opt,name=Version,json=version,proto3" json:"Version,omitempty"`</span>
    Policy               <span class="token builtin">uint32</span>   <span class="token string">`protobuf:"varint,2,opt,name=Policy,json=policy,proto3" json:"Policy,omitempty"`</span>
    DataCount            <span class="token builtin">uint32</span>   <span class="token string">`protobuf:"varint,3,opt,name=DataCount,json=dataCount,proto3" json:"DataCount,omitempty"`</span>
    ParityCount          <span class="token builtin">uint32</span>   <span class="token string">`protobuf:"varint,4,opt,name=ParityCount,json=parityCount,proto3" json:"ParityCount,omitempty"`</span>
    TagFlag              <span class="token builtin">uint32</span>   <span class="token string">`protobuf:"varint,5,opt,name=TagFlag,json=tagFlag,proto3" json:"TagFlag,omitempty"`</span>
    SegSize              <span class="token builtin">uint32</span>   <span class="token string">`protobuf:"varint,6,opt,name=SegSize,json=segSize,proto3" json:"SegSize,omitempty"`</span>
    XXX_NoUnkeyedLiteral <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">`json:"-"`</span>
    XXX_unrecognized     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>   <span class="token string">`json:"-"`</span>
    XXX_sizecache        <span class="token builtin">int32</span>    <span class="token string">`json:"-"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> BucketInfo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    BucketID             <span class="token builtin">uint64</span>   <span class="token string">`protobuf:"varint,1,opt,name=BucketID,json=bucketID,proto3" json:"BucketID,omitempty"`</span>
    CTime                <span class="token builtin">int64</span>    <span class="token string">`protobuf:"varint,2,opt,name=CTime,json=cTime,proto3" json:"CTime,omitempty"`</span>
    MTime                <span class="token builtin">int64</span>    <span class="token string">`protobuf:"varint,3,opt,name=MTime,json=mTime,proto3" json:"MTime,omitempty"`</span>
    Length               <span class="token builtin">uint64</span>   <span class="token string">`protobuf:"varint,4,opt,name=Length,json=length,proto3" json:"Length,omitempty"`</span>
    UsedBytes            <span class="token builtin">uint64</span>   <span class="token string">`protobuf:"varint,5,opt,name=UsedBytes,json=usedBytes,proto3" json:"UsedBytes,omitempty"`</span>
    NextObjectID         <span class="token builtin">uint64</span>   <span class="token string">`protobuf:"varint,6,opt,name=NextObjectID,json=nextObjectID,proto3" json:"NextObjectID,omitempty"`</span>
    NextOpID             <span class="token builtin">uint64</span>   <span class="token string">`protobuf:"varint,7,opt,name=NextOpID,json=nextOpID,proto3" json:"NextOpID,omitempty"`</span>
    Deletion             <span class="token builtin">bool</span>     <span class="token string">`protobuf:"varint,8,opt,name=Deletion,json=deletion,proto3" json:"Deletion,omitempty"`</span>
    Name                 <span class="token builtin">string</span>   <span class="token string">`protobuf:"bytes,9,opt,name=Name,json=name,proto3" json:"Name,omitempty"`</span>
    Root                 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>   <span class="token string">`protobuf:"bytes,10,opt,name=Root,json=root,proto3" json:"Root,omitempty"`</span>
    XXX_NoUnkeyedLiteral <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">`json:"-"`</span>
    XXX_unrecognized     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>   <span class="token string">`json:"-"`</span>
    XXX_sizecache        <span class="token builtin">int32</span>    <span class="token string">`json:"-"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for example:</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>bucketInfo<span class="token punctuation">,</span> err <span class="token operator">:=</span> memoFs<span class="token punctuation">.</span><span class="token function">GetBucketInfo</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"myBucket"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span> err
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>bucketInfo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="list-all-buckets-of-user" tabindex="-1"><a class="header-anchor" href="#list-all-buckets-of-user" aria-hidden="true">#</a> List All Buckets of User</h3>
<p>ListBuckets(ctx context.Context) (bs []BucketInfo, err error)</p>
<table>
<thead>
<tr>
<th>return value</th>
<th>type</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>bs</code></td>
<td><em>[]BucketInfo</em></td>
<td>information list of all buckets</td>
</tr>
<tr>
<td><code v-pre>err</code></td>
<td><em>error</em></td>
<td>error information</td>
</tr>
</tbody>
</table>
<p>for example:</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>buckets<span class="token punctuation">,</span> err <span class="token operator">:=</span> memoFs<span class="token punctuation">.</span><span class="token function">ListBuckets</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> bucket <span class="token operator">:=</span> <span class="token keyword">range</span> buckets <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>bucket<span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-interface-for-operating-objects" tabindex="-1"><a class="header-anchor" href="#the-interface-for-operating-objects" aria-hidden="true">#</a> The Interface for Operating Objects</h2>
<h3 id="list-all-objects-in-bucket" tabindex="-1"><a class="header-anchor" href="#list-all-objects-in-bucket" aria-hidden="true">#</a> List all Objects in Bucket</h3>
<p>ListObjects(ctx context.Context, bucket, prefix, marker, delimiter string, maxKeys int) (objsInfo ListObjectsInfo, err error)</p>
<p>All matching objects can be listed based on the specified filter criteria.</p>
<table>
<thead>
<tr>
<th>parameter</th>
<th>type</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ctx</code></td>
<td><em>Context</em></td>
<td>client context</td>
</tr>
<tr>
<td><code v-pre>bucket</code></td>
<td><em>string</em></td>
<td>bucket name</td>
</tr>
<tr>
<td><code v-pre>prefix</code></td>
<td><em>string</em></td>
<td>object matching prefix, which is used to limit the response to matching only objects with the prefix in the key, which is not required, <code v-pre>nil</code> by default</td>
</tr>
<tr>
<td><code v-pre>marker</code></td>
<td><em>string</em></td>
<td>the key tag of the starting object, which is not required, <code v-pre>nil</code> by default and starting from the first object, the enumeration starts with the next object at the matching position when specifying 'marker'</td>
</tr>
<tr>
<td><code v-pre>delimiter</code></td>
<td><em>string</em></td>
<td>object name seperator, only supports '/' and ''</td>
</tr>
<tr>
<td><code v-pre>maxKeys</code></td>
<td><em>int</em></td>
<td>specify the maximum number of entries returned in a single <code v-pre>ListObjects</code> request, the default value is 1000</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>return value</th>
<th>type</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>objsInfo</code></td>
<td><em>ListObjectsInfo</em></td>
<td>objects list</td>
</tr>
<tr>
<td><code v-pre>err</code></td>
<td><em>error</em></td>
<td>error information</td>
</tr>
</tbody>
</table>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> ListObjectsInfo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    IsTruncated <span class="token builtin">bool</span>
    NextMarker <span class="token builtin">string</span>
    Objects <span class="token punctuation">[</span><span class="token punctuation">]</span>ObjectInfo
    Prefixes <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for example:</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>objectsInfo<span class="token punctuation">,</span> err <span class="token operator">:=</span> memoFs<span class="token punctuation">.</span><span class="token function">ListObjects</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"myBucket"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> object <span class="token operator">:=</span> <span class="token keyword">range</span> objectsInfo<span class="token punctuation">.</span>Objects <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-object" tabindex="-1"><a class="header-anchor" href="#get-object" aria-hidden="true">#</a> Get Object</h3>
<p>GetObject(ctx context.Context, bucketName, objectName string, startOffset, length int64, writer io.Writer) error</p>
<p>Return the data stream for an object.</p>
<table>
<thead>
<tr>
<th>parameter</th>
<th>type</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ctx</code></td>
<td>Context</td>
<td>client context</td>
</tr>
<tr>
<td><code v-pre>bucketName</code></td>
<td><em>string</em></td>
<td>bucket name</td>
</tr>
<tr>
<td><code v-pre>objectName</code></td>
<td><em>string</em></td>
<td>object name</td>
</tr>
<tr>
<td><code v-pre>startOffset</code></td>
<td><em>int64</em></td>
<td>specify the number of segments of the object to get, not required, the default is 0, which means to get from the beginning</td>
</tr>
<tr>
<td><code v-pre>length</code></td>
<td><em>int64</em></td>
<td>specify the length to get, not required, default is the total length of the object</td>
</tr>
<tr>
<td><code v-pre>writer</code></td>
<td><em>Writer</em></td>
<td>any Go type of io.Writer, which is used to return the data stream of the object</td>
</tr>
</tbody>
</table>
<p>for example:</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>buffer <span class="token operator">:=</span> bytes<span class="token punctuation">.</span><span class="token function">NewBuffer</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>
err <span class="token operator">:=</span> memoFs<span class="token punctuation">.</span><span class="token function">GetObject</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"myBucket"</span><span class="token punctuation">,</span> <span class="token string">"myFile"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> buffer<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-object-information" tabindex="-1"><a class="header-anchor" href="#get-object-information" aria-hidden="true">#</a> Get Object Information</h3>
<p>GetObjectInfo(ctx context.Context, bucket, object string) (objInfo ObjectInfo, err error)</p>
<table>
<thead>
<tr>
<th>parameter</th>
<th>type</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ctx</code></td>
<td><em>Context</em></td>
<td>client context</td>
</tr>
<tr>
<td><code v-pre>bucket</code></td>
<td><em>string</em></td>
<td>bucket name</td>
</tr>
<tr>
<td><code v-pre>object</code></td>
<td><em>string</em></td>
<td>object name</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>return value</th>
<th>type</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td>objInfo</td>
<td>ObjectInfo</td>
<td>struct of object information</td>
</tr>
<tr>
<td>err</td>
<td>error</td>
<td>error information</td>
</tr>
</tbody>
</table>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> ObjectInfo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    pb<span class="token punctuation">.</span>ObjectInfo
    Parts       <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>pb<span class="token punctuation">.</span>ObjectPartInfo <span class="token string">`json:"Parts"`</span>
    Size        <span class="token builtin">uint64</span>               <span class="token string">`json:"Size"`</span>        <span class="token comment">// file size(sum of part.RawLength)</span>
    StoredBytes <span class="token builtin">uint64</span>               <span class="token string">`json:"StoredBytes"`</span> <span class="token comment">// stored size(sum of part.Length)</span>
    Mtime       <span class="token builtin">int64</span>                <span class="token string">`json:"Mtime"`</span>
    State       <span class="token builtin">string</span>               <span class="token string">`json:"State"`</span>
    ETag        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>               <span class="token string">`json:"MD5"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for example:</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>objInfo<span class="token punctuation">,</span> err <span class="token operator">:=</span> memoFs<span class="token punctuation">.</span><span class="token function">GetObjectInfo</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"myBucket"</span><span class="token punctuation">,</span> <span class="token string">"myFile"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>objInfo<span class="token punctuation">.</span>Size<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="upload-object" tabindex="-1"><a class="header-anchor" href="#upload-object" aria-hidden="true">#</a> Upload Object</h3>
<p>PutObject(ctx context.Context, bucket, object string, r io.Reader, userDefined map[string]string) (objInfo ObjectInfo, err error)</p>
<p>Split the object to be uploaded into multiple stripes, one stripe at a time.</p>
<table>
<thead>
<tr>
<th>parameter</th>
<th>type</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ctx</code></td>
<td><em>Context</em></td>
<td>client context</td>
</tr>
<tr>
<td><code v-pre>bucket</code></td>
<td><em>string</em></td>
<td>bucket name</td>
</tr>
<tr>
<td><code v-pre>object</code></td>
<td><em>string</em></td>
<td>object name</td>
</tr>
<tr>
<td><code v-pre>reader</code></td>
<td><em>io.Reader</em></td>
<td>the Go type of io.Reader, which is used to read data and upload it</td>
</tr>
<tr>
<td><code v-pre>userDefined</code></td>
<td><em>map[string]string</em></td>
<td>it is used to set the encryption method and 'etag' format of the uploaded object, default <code v-pre>AES</code> encryption, and can also be set to empty to indicate no encryption; by default, 'etag' is generated in <code v-pre>md5</code> format and can also be set to <code v-pre>cid</code></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>return value</th>
<th>type</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>objInfo</code></td>
<td><em>ObjectInfo</em></td>
<td>return the details of the uploaded object, including size, time, etag, and so on</td>
</tr>
<tr>
<td><code v-pre>err</code></td>
<td><em>error</em></td>
<td>error information</td>
</tr>
</tbody>
</table>
<p>for example:</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"my-testfile"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

fileStat<span class="token punctuation">,</span> err <span class="token operator">:=</span> file<span class="token punctuation">.</span><span class="token function">Stat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
userDefined <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>
userDefined<span class="token punctuation">[</span><span class="token string">"encryption"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"aes"</span>
objInfo<span class="token punctuation">,</span> err <span class="token operator">:=</span> memoFs<span class="token punctuation">.</span><span class="token function">PutObject</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"mybucket"</span><span class="token punctuation">,</span> <span class="token string">"myobject"</span><span class="token punctuation">,</span> file<span class="token punctuation">,</span> userDefined<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Successfully uploaded bytes: "</span><span class="token punctuation">,</span> objInfo<span class="token punctuation">.</span>Size<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-object" tabindex="-1"><a class="header-anchor" href="#delete-object" aria-hidden="true">#</a> Delete Object</h3>
<p>DeleteObject(ctx context.Context, bucket, object string) error</p>
<p>Mark an object as deleted and users will not be able to expose and get the object.</p>
<table>
<thead>
<tr>
<th>parameter</th>
<th>type</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ctx</code></td>
<td><em>Context</em></td>
<td>client context</td>
</tr>
<tr>
<td><code v-pre>bucket</code></td>
<td><em>string</em></td>
<td>bucket name</td>
</tr>
<tr>
<td><code v-pre>object</code></td>
<td><em>string</em></td>
<td>object name</td>
</tr>
</tbody>
</table>
<p>for example</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>err <span class="token operator">:=</span> memoFs<span class="token punctuation">.</span><span class="token function">DeleteObject</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"myBucket"</span><span class="token punctuation">,</span> <span class="token string">"myFile"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
err <span class="token operator">=</span> memoFs<span class="token punctuation">.</span><span class="token function">GetObject</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"myBucket"</span><span class="token punctuation">,</span> <span class="token string">"myFile"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> buffer<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token comment">// "myFile" has been deleted</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


