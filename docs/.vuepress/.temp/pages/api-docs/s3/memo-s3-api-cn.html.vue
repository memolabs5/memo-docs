<template><div><h1 id="memo-s3-api-cn" tabindex="-1"><a class="header-anchor" href="#memo-s3-api-cn" aria-hidden="true">#</a> MEMO S3 API CN</h1>
<h2 id="启动节点和-gateway" tabindex="-1"><a class="header-anchor" href="#启动节点和-gateway" aria-hidden="true">#</a> 启动节点和 Gateway</h2>
<p>如果是在windows下可以直接<a href="https://docs.memolabs.org/memo/before-begin/in-windows-os" target="_blank" rel="noopener noreferrer">使用windows安装包完成安装<ExternalLinkIcon/></a>，运行start图标以后程序会自动启动节点以及网关。并在节点的根目录下的account.txt文件中记录网关的账号和密码，默认账号为节点钱包地址，默认密码为memoriae，默认网关API端口为5080.</p>
<p>备注：</p>
<p>如果想手动部署启动节点，在memo的<a href="https://docs.memolabs.org/memo/start-nodes-in-linux/user/how-to-start/step-by-step" target="_blank" rel="noopener noreferrer">启动文档<ExternalLinkIcon/></a>中给出了多个部署启动节点的方法可供使用。</p>
<p>如果想在命令行下手动启动网关，则使用以下命令启动gateway，将使用默认参数：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-user gateway run 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以在启动时手动指定账号、密码、endpoint等参数，启动参数说明：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">## Windows环境</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="s3-api-列表" tabindex="-1"><a class="header-anchor" href="#s3-api-列表" aria-hidden="true">#</a> S3 API 列表</h2>
<p>目前 MEMO 支持的兼容 S3 的 API 包含：</p>
<table>
<thead>
<tr>
<th>Bucket相关</th>
<th>Object相关</th>
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
<h2 id="操作桶的接口" tabindex="-1"><a class="header-anchor" href="#操作桶的接口" aria-hidden="true">#</a> 操作桶的接口</h2>
<h3 id="创建一个桶" tabindex="-1"><a class="header-anchor" href="#创建一个桶" aria-hidden="true">#</a> 创建一个桶</h3>
<p>MakeBucketWithLocation(ctx context.Context, bucket string) error</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>ctx</code></td>
<td style="text-align:left"><em>Context</em></td>
<td style="text-align:left">客户端上下文</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>bucket</code></td>
<td style="text-align:left"><em>string</em></td>
<td style="text-align:left">存储桶名称</td>
</tr>
</tbody>
</table>
<p>示例</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token comment">// 创建客户端</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取桶的详细信息" tabindex="-1"><a class="header-anchor" href="#获取桶的详细信息" aria-hidden="true">#</a> 获取桶的详细信息</h3>
<p>GetBucketInfo(ctx context.Context, bucket string) (bi BucketInfo, err error)</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ctx</code></td>
<td><em>Context</em></td>
<td>客户端上下文</td>
</tr>
<tr>
<td><code v-pre>bucket</code></td>
<td><em>string</em></td>
<td>存储桶名称</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>返回值</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>bi</code></td>
<td><em>BucketInfo</em></td>
<td>桶详细信息</td>
</tr>
<tr>
<td><code v-pre>err</code></td>
<td><em>error</em></td>
<td>错误信息</td>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>bucketInfo<span class="token punctuation">,</span> err <span class="token operator">:=</span> memoFs<span class="token punctuation">.</span><span class="token function">GetBucketInfo</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"myBucket"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span> err
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>bucketInfo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列出user的所有桶" tabindex="-1"><a class="header-anchor" href="#列出user的所有桶" aria-hidden="true">#</a> 列出user的所有桶</h3>
<p>ListBuckets(ctx context.Context) (bs []BucketInfo, err error)</p>
<table>
<thead>
<tr>
<th style="text-align:left">返回值</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>bs</code></td>
<td style="text-align:left"><em>[]BucketInfo</em></td>
<td style="text-align:left">所有存储桶的信息列表</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>err</code></td>
<td style="text-align:left"><em>error</em></td>
<td style="text-align:left">错误信息</td>
</tr>
</tbody>
</table>
<p>示例</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>buckets<span class="token punctuation">,</span> err <span class="token operator">:=</span> memoFs<span class="token punctuation">.</span><span class="token function">ListBuckets</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> bucket <span class="token operator">:=</span> <span class="token keyword">range</span> buckets <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>bucket<span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作对象的接口" tabindex="-1"><a class="header-anchor" href="#操作对象的接口" aria-hidden="true">#</a> 操作对象的接口</h2>
<h3 id="列出桶中所有对象" tabindex="-1"><a class="header-anchor" href="#列出桶中所有对象" aria-hidden="true">#</a> 列出桶中所有对象</h3>
<p>ListObjects(ctx context.Context, bucket, prefix, marker, delimiter string, maxKeys int) (objsInfo ListObjectsInfo, err error)</p>
<p>可以根据指定的过滤条件列出匹配的所有对象。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ctx</code></td>
<td><em>Context</em></td>
<td>客户端上下文</td>
</tr>
<tr>
<td><code v-pre>bucket</code></td>
<td><em>string</em></td>
<td>存储桶名称</td>
</tr>
<tr>
<td><code v-pre>prefix</code></td>
<td><em>string</em></td>
<td>对象匹配前缀，用来限定响应中只匹配key中带有该前缀的对象，非必选，默认为空</td>
</tr>
<tr>
<td><code v-pre>marker</code></td>
<td><em>string</em></td>
<td>起始对象的key标记，非必选，默认为空从第一个对象开始。指定<code v-pre>marker</code>时，从匹配位置的下一个对象开始列举</td>
</tr>
<tr>
<td><code v-pre>delimiter</code></td>
<td><em>string</em></td>
<td>对象名称分隔符，仅支持<code v-pre>&quot;/&quot;</code>和<code v-pre>&quot;&quot;</code>，只是数据展示的形式，非必选，默认为空</td>
</tr>
<tr>
<td><code v-pre>maxKeys</code></td>
<td><em>int</em></td>
<td>指定单次ListObjects请求返回的最大条目数量，默认值是1000</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>返回值</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>objsInfo</code></td>
<td><em>ListObjectsInfo</em></td>
<td>对象列表</td>
</tr>
<tr>
<td><code v-pre>err</code></td>
<td><em>error</em></td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> ListObjectsInfo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    IsTruncated <span class="token builtin">bool</span>
    NextMarker <span class="token builtin">string</span>
    Objects <span class="token punctuation">[</span><span class="token punctuation">]</span>ObjectInfo
    Prefixes <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>objectsInfo<span class="token punctuation">,</span> err <span class="token operator">:=</span> memoFs<span class="token punctuation">.</span><span class="token function">ListObjects</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"myBucket"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> object <span class="token operator">:=</span> <span class="token keyword">range</span> objectsInfo<span class="token punctuation">.</span>Objects <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取对象" tabindex="-1"><a class="header-anchor" href="#获取对象" aria-hidden="true">#</a> 获取对象</h3>
<p>GetObject(ctx context.Context, bucketName, objectName string, startOffset, length int64, writer io.Writer) error</p>
<p>返回对象的数据流。</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ctx</td>
<td style="text-align:left">Context</td>
<td style="text-align:left">客户端上下文</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>bucketName</code></td>
<td style="text-align:left"><em>string</em></td>
<td style="text-align:left">存储桶名称</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>objectName</code></td>
<td style="text-align:left"><em>string</em></td>
<td style="text-align:left">对象的名称</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>startOffset</code></td>
<td style="text-align:left"><em>int64</em></td>
<td style="text-align:left">指定从对象的第几段开始获取，非必选，默认是0，表示从头开始获取</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>length</code></td>
<td style="text-align:left"><em>int64</em></td>
<td style="text-align:left">指定要获取的长度，非必选，默认为对象的总长度</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>writer</code></td>
<td style="text-align:left"><em>Writer</em></td>
<td style="text-align:left">任意实现了io.Writer的Go类型，用来返回对象的数据流</td>
</tr>
</tbody>
</table>
<p>示例</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>buffer <span class="token operator">:=</span> bytes<span class="token punctuation">.</span><span class="token function">NewBuffer</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>
err <span class="token operator">:=</span> memoFs<span class="token punctuation">.</span><span class="token function">GetObject</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"myBucket"</span><span class="token punctuation">,</span> <span class="token string">"myFile"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> buffer<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取对象信息" tabindex="-1"><a class="header-anchor" href="#获取对象信息" aria-hidden="true">#</a> 获取对象信息</h3>
<p>GetObjectInfo(ctx context.Context, bucket, object string) (objInfo ObjectInfo, err error)</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ctx</code></td>
<td><em>Context</em></td>
<td>客户端上下文</td>
</tr>
<tr>
<td><code v-pre>bucket</code></td>
<td><em>string</em></td>
<td>存储桶名称</td>
</tr>
<tr>
<td><code v-pre>object</code></td>
<td><em>string</em></td>
<td>存储对象名称</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>返回值</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>objInfo</td>
<td>ObjectInfo</td>
<td>返回包含对象信息的结构体</td>
</tr>
<tr>
<td>err</td>
<td>error</td>
<td>错误信息</td>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>objInfo<span class="token punctuation">,</span> err <span class="token operator">:=</span> memoFs<span class="token punctuation">.</span><span class="token function">GetObjectInfo</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"myBucket"</span><span class="token punctuation">,</span> <span class="token string">"myFile"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>objInfo<span class="token punctuation">.</span>Size<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上传对象" tabindex="-1"><a class="header-anchor" href="#上传对象" aria-hidden="true">#</a> 上传对象</h3>
<p>PutObject(ctx context.Context, bucket, object string, r io.Reader, userDefined map[string]string) (objInfo ObjectInfo, err error)</p>
<p>把待上传的对象分割成多个stripe，每次处理一个stripe。</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>ctx</code></td>
<td style="text-align:left"><em>Context</em></td>
<td style="text-align:left">客户端上下文</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>bucket</code></td>
<td style="text-align:left"><em>string</em></td>
<td style="text-align:left">存储桶名称</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>object</code></td>
<td style="text-align:left"><em>string</em></td>
<td style="text-align:left">对象的名称</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>reader</code></td>
<td style="text-align:left"><em>io.Reader</em></td>
<td style="text-align:left">任意实现了io.Reader的Go类型，用来读数据从而上传</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>userDefined</code></td>
<td style="text-align:left"><em>map[string]string</em></td>
<td style="text-align:left">用来设置上传对象的加密方式以及etag格式，默认<code v-pre>aes</code>加密，还可设置为空表示不加密；默认以<code v-pre>md5</code>格式生成etag，还可设置为<code v-pre>cid</code></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>返回值</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>objInfo</code></td>
<td><em>ObjectInfo</em></td>
<td>返回上传对象的详细信息，包括大小、时间、etag等</td>
</tr>
<tr>
<td><code v-pre>err</code></td>
<td><em>error</em></td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<p>示例</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除对象" tabindex="-1"><a class="header-anchor" href="#删除对象" aria-hidden="true">#</a> 删除对象</h3>
<p>DeleteObject(ctx context.Context, bucket, object string) error</p>
<p>将对象标记为删除状态，用户将无法展示和获取该对象。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>状态</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ctx</code></td>
<td><em>Context</em></td>
<td>客户端上下文</td>
</tr>
<tr>
<td><code v-pre>bucket</code></td>
<td><em>string</em></td>
<td>存储桶名称</td>
</tr>
<tr>
<td><code v-pre>object</code></td>
<td><em>string</em></td>
<td>对象的名称</td>
</tr>
</tbody>
</table>
<p>示例</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>err <span class="token operator">:=</span> memoFs<span class="token punctuation">.</span><span class="token function">DeleteObject</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"myBucket"</span><span class="token punctuation">,</span> <span class="token string">"myFile"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
err <span class="token operator">=</span> memoFs<span class="token punctuation">.</span><span class="token function">GetObject</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"myBucket"</span><span class="token punctuation">,</span> <span class="token string">"myFile"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> buffer<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token comment">// "myFile" has been deleted</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


