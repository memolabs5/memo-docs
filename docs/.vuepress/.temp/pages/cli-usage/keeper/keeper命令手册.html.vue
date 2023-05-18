<template><div><h1 id="memo-keeper节点命令详解" tabindex="-1"><a class="header-anchor" href="#memo-keeper节点命令详解" aria-hidden="true">#</a> MEMO keeper节点命令详解</h1>
<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<p>本文将详细介绍MEMO系统keeper节点的命令行功能使用；用户需要首先下载二进制并执行程序 <strong>mefs-keeper</strong> ，从而启动Memo keeper节点。</p>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>查看keeper节点中可以使用的所有功能简介和用法</p>
<h2 id="命令用法" tabindex="-1"><a class="header-anchor" href="#命令用法" aria-hidden="true">#</a> 命令用法</h2>
<p>使用以下命令即可查看所有命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>显示输出</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>COMMANDS:
   init       Initialize a memoriae repo
   daemon     Run a network-connected Memoriae node.
   auth       Interact with auth
   wallet     Interact with wallet
   net        Interact with net
   config     Interact with config
   state      Interact with state manager
   role       Interact with role manager
   info       print information of this <span class="token function">node</span>
   register   register an account <span class="token function">id</span> <span class="token keyword">for</span> the wallet first, <span class="token keyword">then</span> register a role <span class="token keyword">for</span> it, at last, <span class="token function">add</span> it into a group.
   version    Print version
   backup     backup <span class="token builtin class-name">export</span> or <span class="token function">import</span>
   bootstrap  bootstrap
   recover    recover
   log        Manage logging
   settle     Interact with settlement chain
   lfs        Interact with lfs
   order      Interact with order
   gateway    memo gateway
   restrict   Interact with restrict
   transfer   transfer eth or memo
   help, h    Shows a list of commands or <span class="token builtin class-name">help</span> <span class="token keyword">for</span> one <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="一-启动节点相关命令" tabindex="-1"><a class="header-anchor" href="#一-启动节点相关命令" aria-hidden="true">#</a> 一 ：启动节点相关命令</h1>
<h2 id="_1-init命令" tabindex="-1"><a class="header-anchor" href="#_1-init命令" aria-hidden="true">#</a> 1. init命令</h2>
<h3 id="简介-1" tabindex="-1"><a class="header-anchor" href="#简介-1" aria-hidden="true">#</a> 简介</h3>
<p>初始化节点；</p>
<p>此命令用于在指定路径创建一个钱包，如果此路径已经存在钱包信息，则会直接使用此已存在的钱包，而不会重新创建钱包。</p>
<h3 id="命令用法-1" tabindex="-1"><a class="header-anchor" href="#命令用法-1" aria-hidden="true">#</a> 命令用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper init <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>选项说明</strong></p>
<p>--setPass                               使用输入来设置密码（默认为：false）
--password value, --pwd value           输入用来访问的密码（默认为：memoriae）
--secretKey value, --sk value           使用密钥来初始化
--keyfile value, --kf value             使用密钥文件进行初始化
--kpw value                             使用密码来解析密钥文件
--help, -h                              查看更多帮助</p>
<p><strong>创建节点示例</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">MEFS_PATH</span><span class="token operator">=~</span>/.memo-keeper ./mefs-keeper init   <span class="token parameter variable">--setPass</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例设置节点根目录为：~/.memo-keeper</p>
<h2 id="_2-daemon命令" tabindex="-1"><a class="header-anchor" href="#_2-daemon命令" aria-hidden="true">#</a> 2.daemon命令</h2>
<h3 id="简介-2" tabindex="-1"><a class="header-anchor" href="#简介-2" aria-hidden="true">#</a> 简介</h3>
<p>本命令功能是启动，停止节点</p>
<h3 id="命令用法-2" tabindex="-1"><a class="header-anchor" href="#命令用法-2" aria-hidden="true">#</a> 命令用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper daemon start <span class="token parameter variable">-h</span>

COMMANDS:
   start    Start a running mefs daemon
   stop     Stop a running mefs daemon
   help, h  Shows a list of commands or <span class="token builtin class-name">help</span> <span class="token keyword">for</span> one <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>选项说明</strong></p>
<p>--password value, --pwd value           使用注册时的密码（默认为：memoriae）
--api value                             设置要使用的api地址（默认为：/ip4/127.0.0.1/tcp/5001）
--secretKey value, --sk value           用私钥来创建节点，如果没有请初始化节点
--swarm-port value                      设置节点要使用的swarm端口（默认为：4001）
--group value                           设置节点要进入的组（默认为：0）
--price value                           设置价格（默认为：0，表示不修改config.json中的价格）
--secureAPI                             是否为安全的API（默认为：true）
--help, -h                              查看更多帮助</p>
<p><strong>启动节点示例</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">MEFS_PATH</span><span class="token operator">=~</span>/.memo-keeper <span class="token function">nohup</span> ./mefs-keeper daemon start <span class="token parameter variable">--api</span><span class="token operator">=</span>/ip4/127.0.0.1/tcp/5001 --swarm-port<span class="token operator">=</span><span class="token number">4001</span> <span class="token parameter variable">--group</span><span class="token operator">=</span><span class="token number">1</span> <span class="token operator">&amp;></span> keeper.log <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-wallet命令" tabindex="-1"><a class="header-anchor" href="#_3-wallet命令" aria-hidden="true">#</a> 3.wallet命令</h2>
<h3 id="简介-3" tabindex="-1"><a class="header-anchor" href="#简介-3" aria-hidden="true">#</a> 简介</h3>
<p>本命令实现了操作钱包的相关功能。</p>
<h3 id="命令用法-3" tabindex="-1"><a class="header-anchor" href="#命令用法-3" aria-hidden="true">#</a> 命令用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper wallet <span class="token parameter variable">-h</span>

COMMANDS:
   new      create a new wallet address
   list     list all addrs
   default  print default wallet address
   <span class="token builtin class-name">export</span>   <span class="token builtin class-name">export</span> wallet secret key
   help, h  Shows a list of commands or <span class="token builtin class-name">help</span> <span class="token keyword">for</span> one <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>子命令简介</strong></p>
<p>new                           创建一个新的钱包地址
list                          查看所有钱包地址
default                       显示默认钱包地址
export                        导出钱包私钥</p>
<p><strong>查看默认钱包地址</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper wallet default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查看钱包私钥</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper wallet <span class="token builtin class-name">export</span> <span class="token variable">$wallet</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数$wallet 为钱包地址</p>
<h2 id="_4-config命令" tabindex="-1"><a class="header-anchor" href="#_4-config命令" aria-hidden="true">#</a> 4.config命令</h2>
<h3 id="简介-4" tabindex="-1"><a class="header-anchor" href="#简介-4" aria-hidden="true">#</a> 简介</h3>
<p>此命用于修改配置文件，仅在节点未启动时使用生效；若节点运行中修改config，则需要重启节点以使其生效；</p>
<p>配置文件所在路径：节点根目录下 &quot;.memo-keeper/config.json&quot;</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper config <span class="token parameter variable">-h</span>

COMMANDS:
   <span class="token builtin class-name">set</span>      Set config key
   get      Get config key
   help, h  Shows a list of commands or <span class="token builtin class-name">help</span> <span class="token keyword">for</span> one <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set子命令" tabindex="-1"><a class="header-anchor" href="#set子命令" aria-hidden="true">#</a> set子命令</h3>
<p>set子命令用于设置配置文件中指定选项的值</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper config <span class="token builtin class-name">set</span> <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>子命令简介</strong></p>
<p>NAME:
mefs-keeper config set - Set config key</p>
<p>USAGE:
mefs-keeper config set [command options] [arguments...]</p>
<p>OPTIONS:
--key value    The key of the config entry (e.g. &quot;api.address&quot;)
--value value  The value with which to set the config entry
--help, -h     show help (default: false)</p>
<p>配置示例：</p>
<p>配置 contract.endPoint的值</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper config <span class="token builtin class-name">set</span> <span class="token parameter variable">--key</span><span class="token operator">=</span>contract.endPoint <span class="token parameter variable">--value</span><span class="token operator">=</span><span class="token string">"https://testchain.metamemo.one:24180"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="get子命令" tabindex="-1"><a class="header-anchor" href="#get子命令" aria-hidden="true">#</a> get子命令</h3>
<p>此命令为获取指定配置项的值</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper config get <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令实例：</p>
<p>获取contract.endPoint值</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper config get <span class="token parameter variable">--key</span><span class="token operator">=</span>contract.endPoint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-bootstrap命令" tabindex="-1"><a class="header-anchor" href="#_5-bootstrap命令" aria-hidden="true">#</a> 5.bootstrap命令</h2>
<h3 id="简介-5" tabindex="-1"><a class="header-anchor" href="#简介-5" aria-hidden="true">#</a> 简介</h3>
<p>此命令用于设置配置文件中的引导节点，可添加多个。</p>
<h3 id="命令用法-4" tabindex="-1"><a class="header-anchor" href="#命令用法-4" aria-hidden="true">#</a> 命令用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper bootstrap <span class="token parameter variable">-h</span>

COMMANDS:
   list     list bootstrap addresses
   <span class="token function">add</span>      <span class="token function">add</span> bootstrap addresses
   <span class="token function">clear</span>    remove all bootstrap addresses
   help, h  Shows a list of commands or <span class="token builtin class-name">help</span> <span class="token keyword">for</span> one <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>子命令简介</strong></p>
<p>list                 查看当前节点引导节点列表
add                  添加引导节点
clear                清空引导节点</p>
<p><strong>添加引导节点示例</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper bootstrap <span class="token function">add</span> <span class="token string">"/ip4/103.xx.xx.xx/tcp/44006/p2p/12D3KooWQgakkyTFzcMh8JVbNK3FtiwJZz264sStq8QKBTeHwR3D"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-register命令" tabindex="-1"><a class="header-anchor" href="#_6-register命令" aria-hidden="true">#</a> 6.register命令</h2>
<h3 id="简介-6" tabindex="-1"><a class="header-anchor" href="#简介-6" aria-hidden="true">#</a> 简介</h3>
<p>此命令首先为钱包地址注册一个MEMO系统的账户ID，然后将该钱包账户注册为指定角色（keeper、Keeper、keeper），最后将该角色加入指定的group中；</p>
<p>请注意：keeper节点调用<code v-pre>daemon start</code>启动过程中会自动根据参数指定生成账户id、注册角色、加入group；</p>
<h3 id="命令用法-5" tabindex="-1"><a class="header-anchor" href="#命令用法-5" aria-hidden="true">#</a> 命令用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>NAME:
   mefs-keeper register - register an account <span class="token function">id</span> <span class="token keyword">for</span> the wallet first, <span class="token keyword">then</span> register a role <span class="token keyword">for</span> it, at last, <span class="token function">add</span> it into a group.

USAGE:
   mefs-keeper register <span class="token punctuation">[</span>command options<span class="token punctuation">]</span> <span class="token punctuation">[</span>role <span class="token punctuation">(</span>keeper/keeper/keeper<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>group index<span class="token punctuation">]</span>

OPTIONS:
   <span class="token parameter variable">--password</span> value, <span class="token parameter variable">--pwd</span> value  the wallet password, used to restore sk from keystore <span class="token punctuation">(</span>default: <span class="token string">"memoriae"</span><span class="token punctuation">)</span>
   --help, <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>选项说明</strong></p>
<p>--password value, -p value 输入keystore密码，从而从本地<code v-pre>keystore</code> 目录中解密出私钥<code v-pre>sk</code>（默认为：memoriae）
--help, -h 查看更多帮助</p>
<p>命令示例</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper register <span class="token parameter variable">--pwd</span><span class="token operator">=</span>memoriae keeper <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数说明：pwd为钱包密码，keeper表示指定的角色为keeper，1为指定此节点加入group 1</p>
<h1 id="二-状态查看相关命令" tabindex="-1"><a class="header-anchor" href="#二-状态查看相关命令" aria-hidden="true">#</a> 二：状态查看相关命令</h1>
<h2 id="_1-net命令" tabindex="-1"><a class="header-anchor" href="#_1-net命令" aria-hidden="true">#</a> 1.net命令</h2>
<p>网络相关命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-keeper net <span class="token parameter variable">-h</span>

COMMANDS:
   info      get net info
   connect   connet a peer
   peers     print peers
   findpeer  <span class="token function">find</span> peers
   <span class="token builtin class-name">declare</span>   <span class="token builtin class-name">declare</span> public network address
   help, h   Shows a list of commands or <span class="token builtin class-name">help</span> <span class="token keyword">for</span> one <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="info子命令" tabindex="-1"><a class="header-anchor" href="#info子命令" aria-hidden="true">#</a> info子命令</h3>
<p>该命令查看节点网络信息,命令用法：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper net info 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出内容如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Network ID 12D3KooWEZcwTW77nh68369j3tQj3aYvgYdwM5ZQrsKFdt5fNP3d, IP <span class="token punctuation">[</span>/ip4/172.xx.xx.xx/tcp/4001 /ip4/128.xx.xx.xx/tcp/39525 /ip4/10.xx.xx.xx/tcp/39525<span class="token punctuation">]</span>, Type: Private
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="peers子命令" tabindex="-1"><a class="header-anchor" href="#peers子命令" aria-hidden="true">#</a> peers子命令</h3>
<p>查看目前连接的所有节点的网络信息,命令用法：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper net peers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出内容如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>12D3KooWHXmKSneyGqE8fPrTmNTBs2rR9pWTdNcgVG3Tt5htJef7 <span class="token punctuation">[</span>/ip4/121.xx.xx.xx/tcp/23456<span class="token punctuation">]</span>
12D3KooWB5yMrUL6NG6wHrdR9V114mUDkpJ5Mp3c1sLPHwiFi6DN <span class="token punctuation">[</span>/ip4/192.xx.xx.xx/tcp/4201<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="connect子命令" tabindex="-1"><a class="header-anchor" href="#connect子命令" aria-hidden="true">#</a> connect子命令</h3>
<p>该命令手动连接到指定节点,命令用法：</p>
<p>关于peerID的构造解释：
首先使用net info命令查看节点的网络信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-keeper net info
Network ID 12D3K<span class="token punctuation">..</span>., IP <span class="token punctuation">[</span>/ip4/xxx.xxx.xxx.xxx/tcp/xxx<span class="token punctuation">]</span>, Type: Private
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那么此节点的peerID为：
/ip4/xxx.xxx.xxx.xxx/tcp/xxx/p2p/12D3K...</p>
<p>后面子命令中如果需要用到peerID，则按照此格式构造即可</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper net connect <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令示例</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper net connect /ip4/1.2.3.4/tcp/5678/p2p/12D<span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="findpeer子命令" tabindex="-1"><a class="header-anchor" href="#findpeer子命令" aria-hidden="true">#</a> findpeer子命令</h3>
<p>根据peerID查看节点信息,命令用法：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper net findpeer <span class="token parameter variable">-h</span>

USAGE:
   mefs-keeper net findpeer <span class="token punctuation">[</span>command options<span class="token punctuation">]</span> <span class="token punctuation">[</span>peerID <span class="token punctuation">(</span>12D<span class="token punctuation">..</span>.<span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>peerID的构造见前面的命令说明。</p>
<p><strong>搜索示例：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper net findpeer 12D3KooWHWKAGipKn9QCBEnNxf1ERhRud9qPsWTu9PqFrBm9A9kz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="declare子命令" tabindex="-1"><a class="header-anchor" href="#declare子命令" aria-hidden="true">#</a> declare子命令</h3>
<p>用于keeper节点申明自己的公网ip地址；(仅keeper节点需要使用该命令)</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./mefs-keeper net <span class="token builtin class-name">declare</span> <span class="token parameter variable">-h</span>
NAME:
   mefs-keeper net <span class="token builtin class-name">declare</span> - <span class="token builtin class-name">declare</span> public network address

USAGE:
   mefs-keeper net <span class="token builtin class-name">declare</span> <span class="token punctuation">[</span>command options<span class="token punctuation">]</span> <span class="token punctuation">[</span>net address <span class="token punctuation">(</span>/ip4/1.2.3.4/tcp/5678<span class="token punctuation">)</span><span class="token punctuation">]</span>

OPTIONS:
   --help, <span class="token parameter variable">-h</span>  show <span class="token builtin class-name">help</span> <span class="token punctuation">(</span>default: <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：提供的ip地址必须为外网地址，提供的外网访问端口必须映射到本节点的启动时提供的swap port端口。</p>
<h2 id="_2-state命令" tabindex="-1"><a class="header-anchor" href="#_2-state命令" aria-hidden="true">#</a> 2.state命令</h2>
<h3 id="简介-7" tabindex="-1"><a class="header-anchor" href="#简介-7" aria-hidden="true">#</a> 简介</h3>
<p>此命令可查看自身资产状态等信息。</p>
<h3 id="命令用法-6" tabindex="-1"><a class="header-anchor" href="#命令用法-6" aria-hidden="true">#</a> 命令用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper state <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>子命令列表</strong></p>
<p>post          查看keeper与keeper节点间存储订单的付费和惩罚信息<br>
pay           查看节点当前的存储账户余额和memo余额
withdraw      keeper节点结算当前存储收益</p>
<h2 id="_3-role命令" tabindex="-1"><a class="header-anchor" href="#_3-role命令" aria-hidden="true">#</a> 3.role命令</h2>
<h3 id="简介-8" tabindex="-1"><a class="header-anchor" href="#简介-8" aria-hidden="true">#</a> 简介</h3>
<p>已连接节点的查看命令</p>
<h3 id="命令用法-7" tabindex="-1"><a class="header-anchor" href="#命令用法-7" aria-hidden="true">#</a> 命令用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper role list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-info命令" tabindex="-1"><a class="header-anchor" href="#_4-info命令" aria-hidden="true">#</a> 4.info命令</h2>
<h3 id="简介-9" tabindex="-1"><a class="header-anchor" href="#简介-9" aria-hidden="true">#</a> 简介</h3>
<p>此命令查看此节点基本信息</p>
<h3 id="命令用法-8" tabindex="-1"><a class="header-anchor" href="#命令用法-8" aria-hidden="true">#</a> 命令用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper info <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>选项说明</strong></p>
<p>​--update                      (default: false)
--all value,  -a value        展示节点所有info信息 (default: &quot;false&quot;)
--help, -h                    查看更多帮助</p>
<p><strong>命令示例</strong></p>
<p>精简版</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>完整版</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper info <span class="token parameter variable">-all</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-settle命令" tabindex="-1"><a class="header-anchor" href="#_5-settle命令" aria-hidden="true">#</a> 5.settle命令</h2>
<h3 id="简介-10" tabindex="-1"><a class="header-anchor" href="#简介-10" aria-hidden="true">#</a> 简介</h3>
<p>节点质押、取款等操作</p>
<h3 id="命令用法-9" tabindex="-1"><a class="header-anchor" href="#命令用法-9" aria-hidden="true">#</a> 命令用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper settle <span class="token parameter variable">-h</span>

COMMANDS:
   setDesc               Set description <span class="token keyword">for</span> a node. Especially <span class="token keyword">for</span> keepers, <span class="token keyword">if</span> desc is <span class="token builtin class-name">set</span> to <span class="token string">'cloud'</span>, they will be selected as <span class="token function">dc</span> <span class="token keyword">in</span> buckets preferentially.
   withdraw              withdraw memo from fs
   pledgeAdd             <span class="token function">add</span> pledge value
   pledgeGet             get pledge information
   pledgeWithdraw        move pledge value to fs, <span class="token keyword">then</span> call settle withdraw
   pledgeRewardWithdraw  move pledge reward value to fs, <span class="token keyword">then</span> call settle withdraw
   quitRole              change its state to inactive, this <span class="token function">op</span> is invocatable and daemon will fail at next start
   alterPayee            alter current payee to a new one, need to be comfirmed by new payee to finish.
   help, h               Shows a list of commands or <span class="token builtin class-name">help</span> <span class="token keyword">for</span> one <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>子命令列表</strong></p>
<p>setDesc                       节点设置描述
withdraw                      将文件系统的token取出至(Erc20)钱包
pledgeAdd                     增加质押
pledgeGet                     查看当前质押
pledgeWithdraw                将质押的token取出到Fs文件系统
pledgeRewardWithdraw          将质押收益提取到Fs文件系统
   quitRole                      注销当前角色，地址、token信息保留
alterPayee                    alter payee
help, h                       查看更多帮助</p>
<p><strong>命令用例</strong></p>
<ul>
<li>pledgeAdd</li>
</ul>
<p>质押1Memo</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper settle pledgeAdd <span class="token string">"1 Memo"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数说明：金额参数要使用引号，金额和单位之间要有一个空格，单位不区分大小写，可以是Memo, NanoMemo, AttoMemo，它们之间的关系为：1
Memo=10<sup>9*NanoMemo=10</sup>18*AttoMemo</p>
<ul>
<li>pledgeGet</li>
</ul>
<p>查看节点质押信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper settle pledgeGet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>pledgeWithdraw</li>
</ul>
<p>取出0.5Memo的质押到Fs账户</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper settle pledgeWithdraw <span class="token string">"0.5 Memo"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数说明：金额参数要使用引号，金额和单位之间要有一个空格，单位不区分大小写，可以是Memo, NanoMemo, AttoMemo，它们之间的关系为：1
Memo=10<sup>9*NanoMemo=10</sup>18*AttoMemo</p>
<ul>
<li>pledgeRewardWithdraw</li>
</ul>
<p>取出0.5Memo的质押奖励到Fs账户</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper settle pledgeRewardWithdraw <span class="token string">"0.5 Memo"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数说明：金额参数要使用引号，金额和单位之间要有一个空格，单位不区分大小写，可以是Memo, NanoMemo, AttoMemo，它们之间的关系为：1
Memo=10<sup>9*NanoMemo=10</sup>18*AttoMemo</p>
<ul>
<li>withdraw</li>
</ul>
<p>将Fs文件系统的0.5memo取出至(Erc20)钱包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper settle withdraw <span class="token string">"0.5 Memo"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数说明：金额参数要使用引号，金额和单位之间要有一个空格，单位不区分大小写，可以是Memo, NanoMemo, AttoMemo，它们之间的关系为：1
Memo=10<sup>9*NanoMemo=10</sup>18*AttoMemo</p>
<ul>
<li>quitRole</li>
</ul>
<p>此命令使节点退出目前的角色，此时将不再能使用角色相关功能。但钱包余额不受影响，并且对于keeper和keeper角色，此时能够取出注册角色时提供的角色质押金额。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper settle quitRole --really-do-it
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-version命令" tabindex="-1"><a class="header-anchor" href="#_6-version命令" aria-hidden="true">#</a> 6.version命令</h2>
<h3 id="简介-11" tabindex="-1"><a class="header-anchor" href="#简介-11" aria-hidden="true">#</a> 简介</h3>
<p>查看当前节点版本</p>
<h3 id="命令用法-10" tabindex="-1"><a class="header-anchor" href="#命令用法-10" aria-hidden="true">#</a> 命令用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="三-keeper日常使用命令" tabindex="-1"><a class="header-anchor" href="#三-keeper日常使用命令" aria-hidden="true">#</a> 三：keeper日常使用命令</h1>
<h2 id="_1-recover命令" tabindex="-1"><a class="header-anchor" href="#_1-recover命令" aria-hidden="true">#</a> 1.recover命令</h2>
<h3 id="简介-12" tabindex="-1"><a class="header-anchor" href="#简介-12" aria-hidden="true">#</a> 简介</h3>
<p>用于节点启动异常时尽量修复db
警告：不要异常退出节点，想退出节点时应该使用daemon stop命令正常退出。否则可能导致db损坏而无法修复</p>
<h3 id="命令用法-11" tabindex="-1"><a class="header-anchor" href="#命令用法-11" aria-hidden="true">#</a> 命令用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper recover db <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--path         指定修复的数据库路径
--deType       修复数据的类型(meta 或者 state)</p>
<p><strong>命令示例</strong></p>
<p>修复state数据库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper recover db <span class="token parameter variable">--path</span><span class="token operator">=</span>/root/.memo-keeper/state <span class="token parameter variable">--dbType</span><span class="token operator">=</span>state
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-backup命令" tabindex="-1"><a class="header-anchor" href="#_2-backup命令" aria-hidden="true">#</a> 2.backup命令</h2>
<h3 id="简介-13" tabindex="-1"><a class="header-anchor" href="#简介-13" aria-hidden="true">#</a> 简介</h3>
<p>节点关闭时使用；</p>
<p>导入/导出state(或meta)数据库。</p>
<h3 id="export" tabindex="-1"><a class="header-anchor" href="#export" aria-hidden="true">#</a> export</h3>
<p>将状态数据库导出到文件中，使用方法如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper backup <span class="token builtin class-name">export</span> <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--path          备份数据库文件的存储路径
--dbType        要导出的数据库类型meta或则state（默认为：state）</p>
<p><strong>命令示例</strong></p>
<p>导出state数据库至当前目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper backup <span class="token builtin class-name">export</span> <span class="token parameter variable">--path</span><span class="token operator">=</span>./ <span class="token parameter variable">--dbType</span><span class="token operator">=</span>state
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> import</h3>
<p>从文件中导入数据库，使用方法如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper backup <span class="token function">import</span> <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--path          导入数据库文件的存放路径
--dbType        导入的数据库类型：meta或则state（默认为：state）</p>
<p><strong>命令示例</strong></p>
<p>导入state数据库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper backup <span class="token function">import</span> <span class="token parameter variable">--path</span><span class="token operator">=</span>./state-xxxxxxxxx.db <span class="token parameter variable">--dbType</span><span class="token operator">=</span>state
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-restrict命令" tabindex="-1"><a class="header-anchor" href="#_3-restrict命令" aria-hidden="true">#</a> 3.restrict命令</h2>
<h3 id="简介-14" tabindex="-1"><a class="header-anchor" href="#简介-14" aria-hidden="true">#</a> 简介</h3>
<p>keeper节点设置白名单功能，创建桶时，优先选择白名单内节点。</p>
<h3 id="命令用法-12" tabindex="-1"><a class="header-anchor" href="#命令用法-12" aria-hidden="true">#</a> 命令用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper restrict <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>子命令列表</strong></p>
<p>list             查看白名单节点
add              添加白名单节点
delete           删除白名单节点
has              检查节点是否在白名单内
set              设置白名单状态
stat             查看白名单状态
help, h          查看更多帮助</p>
<p><strong>命令示例</strong></p>
<p>检查白名单状态</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper restrict <span class="token function">stat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启白名单功能</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper restrict <span class="token builtin class-name">set</span> <span class="token parameter variable">--enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加keeper节点至白名单</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>mefs-keeper restrict add PID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数PID为要添加至白名单的keeper节点ID</p>
<p>查看白名单内节点</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper restrict list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看节点是否在当前白名单内</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper restrict has PID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数PID为要添加至白名单的keeper节点ID</p>
<p>删除白名单节点</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper restrict delete PID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数PID为要添加至白名单的keeper节点ID</p>
<p>关闭白名单功能</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper restrict <span class="token builtin class-name">set</span> disable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="四-其他命令" tabindex="-1"><a class="header-anchor" href="#四-其他命令" aria-hidden="true">#</a> 四：其他命令</h1>
<h2 id="_1-auth命令" tabindex="-1"><a class="header-anchor" href="#_1-auth命令" aria-hidden="true">#</a> 1.auth命令</h2>
<h3 id="简介-15" tabindex="-1"><a class="header-anchor" href="#简介-15" aria-hidden="true">#</a> 简介</h3>
<p>查询节点的token文件值，token文件位于节点根目录下，普通用户不用关注此值。</p>
<h3 id="命令用法-13" tabindex="-1"><a class="header-anchor" href="#命令用法-13" aria-hidden="true">#</a> 命令用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper auth info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>输入结果</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.5nj0IsRixm8trR7jryyRNLU78w4cvZ1zWHyjBoFmmZE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-log命令" tabindex="-1"><a class="header-anchor" href="#_2-log命令" aria-hidden="true">#</a> 2.log命令</h2>
<h3 id="简介-16" tabindex="-1"><a class="header-anchor" href="#简介-16" aria-hidden="true">#</a> 简介</h3>
<p>此命令用于设置日志级别。
不同级别显示不同告警级别的日志信息，默认为info级别，只显示正常状态信息，普通用户应使用info日志级别。
debug/warn/error级别供开发人员使用以查看详细报错日志，此级别会产生大量日志，不能长期处于debug模式，否则会大量占用磁盘空间，不建议普通用户使用。</p>
<h3 id="命令用法-14" tabindex="-1"><a class="header-anchor" href="#命令用法-14" aria-hidden="true">#</a> 命令用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper log setLevel <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>选项</strong></p>
<p>mefs-keeper log setLevel level (debug/info/warn/error)</p>
<p>设置等级实例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-keeper log setLevel debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


