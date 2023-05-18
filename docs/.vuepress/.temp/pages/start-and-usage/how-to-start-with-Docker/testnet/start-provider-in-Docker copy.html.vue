<template><div><h1 id="start-provider" tabindex="-1"><a class="header-anchor" href="#start-provider" aria-hidden="true">#</a> Start Provider</h1>
<h2 id="step-by-step" tabindex="-1"><a class="header-anchor" href="#step-by-step" aria-hidden="true">#</a> Step by step</h2>
<h3 id="step-1-docker-environment-preparation" tabindex="-1"><a class="header-anchor" href="#step-1-docker-environment-preparation" aria-hidden="true">#</a> Step 1: Docker Environment Preparation</h3>
<h4 id="for-linux" tabindex="-1"><a class="header-anchor" href="#for-linux" aria-hidden="true">#</a> For Linux</h4>
<p>If you are using Linux OS, just install docker to continue.</p>
<p><RouterLink to="/start-and-usage/how-to-start-with-Docker/testnet/docker-install.html">Install docker</RouterLink></p>
<p>Confirm Docker is running after install.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">service</span> <span class="token function">docker</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="for-windows" tabindex="-1"><a class="header-anchor" href="#for-windows" aria-hidden="true">#</a> For Windows</h4>
<p>If you are using Windows OS, you should install docker first, then install wsl to emulate a linux OS.</p>
<p>Install Docker in Windows
Just download and install the docker application in Windows.</p>
<p>Download link: <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">https://www.docker.com/<ExternalLinkIcon/></a></p>
<p>Install wsl</p>
<p>Using ubuntu 20.04 as an example.
Open the starting menu and run microsoft store.
Search for wsl, click Ubuntu 20.04 in the results to install.</p>
<p>Switch wsl1 to wsl2</p>
<p>Right click the start memu and open powershell(administrator), run:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>wsl --set-version Ubuntu-20.04 <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Confirm the wsl version is switched to version 2</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Run Ubuntu 20.04 from start memu to enter an emulated Ubuntu 20.04 and continue.</p>
<h3 id="step-2-set-up-the-home-directory" tabindex="-1"><a class="header-anchor" href="#step-2-set-up-the-home-directory" aria-hidden="true">#</a> Step 2: Set up the home directory</h3>
<p>Node home directory:
Using &quot;~/memo_provider&quot; as an example:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">MEFS_PATH</span><span class="token operator">=~</span>/memo_provider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Node data storage directory: ~/memo_provider_data as an example:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">MEFS_DATA</span><span class="token operator">=~</span>/memo_provider_data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The home directory contains config file and other files for running a node, the storage directory is where data is stored.</p>
<h3 id="step-3-pull-image-provider" tabindex="-1"><a class="header-anchor" href="#step-3-pull-image-provider" aria-hidden="true">#</a> Step 3: Pull image (provider)</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull memoio/mefs-provider:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-4-initialization-create-new-wallet" tabindex="-1"><a class="header-anchor" href="#step-4-initialization-create-new-wallet" aria-hidden="true">#</a> Step 4: Initialization（Create new wallet）</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">--entrypoint</span> mefs-provider memoio/mefs-provider:latest init <span class="token parameter variable">--password</span><span class="token operator">=</span>memoriae
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>• Parameter explanation:</p>
<p>--password： Enter your provider password, the default is memoriae.</p>
<p>Init: Execute the initialize command, which will generate your wallet address and generate a configuration file.</p>
<h3 id="step-5-get-wallet-address" tabindex="-1"><a class="header-anchor" href="#step-5-get-wallet-address" aria-hidden="true">#</a> Step 5: Get wallet address</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">--entrypoint</span> mefs-provider memoio/mefs-provider:latest wallet default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Explanation of arguments:</p>
<p>wallet default: Get the default wallet address</p>
<h3 id="step-6-top-up" tabindex="-1"><a class="header-anchor" href="#step-6-top-up" aria-hidden="true">#</a> Step 6: Top up</h3>
<p>Please post tweet and send email to complete the registration.</p>
<ol>
<li>Please post the tweet using your personal Twitter account and**@**<a href="https://twitter.com/Memo_Labs" target="_blank" rel="noopener noreferrer">MemoLabs<ExternalLinkIcon/></a>.</li>
</ol>
<p>Twittercontent：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>I have joined the MEMO testnet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>Please send an email to <a href="mailto:sup@memolabs.org">sup@memolabs.org</a> to apply for provider registration, also attach the link to Tweet.</li>
</ol>
<p>Email Example</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Network: <span class="token builtin class-name">test</span> net
Wallet Address: 0x70955480f225b23f60c37c4B6e88C63E3ACD723
Role: provider
Twitter Link: 
https://twitter.com/Geo***71090/status/1387**********01381?s<span class="token operator">=</span><span class="token number">20</span>*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note:</p>
<p>The network must be confirmed before application, usually either test net or product net.</p>
<p>The wallet address is the wallet address generated in the previous step.</p>
<h3 id="step-7-set-configurations" tabindex="-1"><a class="header-anchor" href="#step-7-set-configurations" aria-hidden="true">#</a> Step 7: Set configurations</h3>
<p>Here are configurations for testnet.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">--entrypoint</span> mefs-provider memoio/mefs-provider:latest config <span class="token builtin class-name">set</span> <span class="token parameter variable">--key</span><span class="token operator">=</span>contract.version <span class="token parameter variable">--value</span><span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">--entrypoint</span> mefs-provider memoio/mefs-provider:latest config <span class="token builtin class-name">set</span> <span class="token parameter variable">--key</span><span class="token operator">=</span>contract.endPoint <span class="token parameter variable">--value</span><span class="token operator">=</span><span class="token string">"https://testchain.metamemo.one:24180"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">--entrypoint</span> mefs-provider memoio/mefs-provider:latest config <span class="token builtin class-name">set</span> <span class="token parameter variable">--key</span><span class="token operator">=</span>contract.roleContract <span class="token parameter variable">--value</span><span class="token operator">=</span><span class="token string">"0x3c9ebF885d38813632FD129f892E1E0b75371cfA"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">--entrypoint</span> mefs-provider memoio/mefs-provider:latest bootstrap <span class="token function">clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">--entrypoint</span> mefs-provider memoio/mefs-provider:latest bootstrap <span class="token function">add</span> <span class="token string">"/ip4/103.39.231.220/tcp/14008/p2p/12D3KooWA4wnzRUmtsvP1ybbpWKHWeYHxZLRp7x1oVNtuUuUXWFd"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-8-start-node" tabindex="-1"><a class="header-anchor" href="#step-8-start-node" aria-hidden="true">#</a> Step 8: Start node</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">4001</span>:4001 <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_PATH</span>:/root <span class="token parameter variable">-v</span> <span class="token variable">$MEFS_DATA</span>:/root/data <span class="token parameter variable">-e</span> <span class="token assign-left variable">PASSWORD</span><span class="token operator">=</span><span class="token string">"memoriae"</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">PRICE</span><span class="token operator">=</span><span class="token number">250000</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">GROUP</span><span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">SWARM_PORT</span><span class="token operator">=</span><span class="token number">4001</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">DATA_PATH</span><span class="token operator">=</span>/root/data <span class="token parameter variable">--name</span> mefs-provider memoio/mefs-provider:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>• Please make sure your provider home directory and password are the same as in the previous step.</p>
<p>If you have any technical problems, please join our Discord server for help. <a href="https://discord.gg/YXQQwPhMpq" target="_blank" rel="noopener noreferrer">Memo Labs<ExternalLinkIcon/></a></p>
<h2 id="checking-the-running-status" tabindex="-1"><a class="header-anchor" href="#checking-the-running-status" aria-hidden="true">#</a> Checking the running status</h2>
<h3 id="step-1-enter-the-container" tabindex="-1"><a class="header-anchor" href="#step-1-enter-the-container" aria-hidden="true">#</a> Step 1: Enter the container</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mefs-provider <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>After entering the container, you can use the mefs-provider command to perform operations.</li>
</ul>
<h3 id="step-2-check-provider-information" tabindex="-1"><a class="header-anchor" href="#step-2-check-provider-information" aria-hidden="true">#</a> Step 2: Check provider information</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-provider info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>----------- Information -----------

<span class="token number">2022</span>-03-23 <span class="token number">16</span>:44:19 CST <span class="token comment">#Current time</span>

<span class="token number">2.1</span>.0-alpha+git.86acc04+2022-03-22.14:17:54CST <span class="token comment">#mefs-provider version information</span>

----------- Network Information -----------

ID: 12D3KooWR74K1v6naGUAjHRrkakxVS88h4X93bMnquoRiEDdLJTx

IP: <span class="token punctuation">[</span>/ip4/10.xx.xx.xx/tcp/8003<span class="token punctuation">]</span> <span class="token comment">#The current node network information, 8003 is the swarm-port port, used for node communication</span>

Type: Private

Declared Address: <span class="token punctuation">{</span>12D3KooWR74K1v6naGUAjHRrkakxVS88h4X93bMnquoRiEDdLJTx: <span class="token punctuation">[</span>/ip4/10.xx.xx.xx/tcp/8003<span class="token punctuation">]</span><span class="token punctuation">}</span>

----------- Sync Information -----------

Status: true, Slot: <span class="token number">323608</span>, Time: <span class="token number">2022</span>-03-23 <span class="token number">16</span>:44:00 CST <span class="token comment">#Please check if your sync status is true, if it is false, please check your node network</span>

Height Synced: <span class="token number">3363</span>, Remote: <span class="token number">3363</span> <span class="token comment">#sync status</span>

Challenge Epoch: <span class="token number">23</span> <span class="token number">2022</span>-03-23 <span class="token number">11</span>:56:30 CST

----------- Role Information -----------

ID: <span class="token number">30</span>

Type: Provider

Wallet: 0x749573E16C18A0f5Eb53248382588e2064E0Af80

Balance: <span class="token number">999.87</span> Gwei <span class="token punctuation">(</span>tx fee<span class="token punctuation">)</span>, <span class="token number">0</span> AttoMemo <span class="token punctuation">(</span>Erc20<span class="token punctuation">)</span>, <span class="token number">493586.64</span> NanoMemo <span class="token punctuation">(</span>in fs<span class="token punctuation">)</span>

Data Stored: size <span class="token number">57647104</span> byte <span class="token punctuation">(</span><span class="token number">54.98</span> MiB<span class="token punctuation">)</span>, price <span class="token number">56750000</span>

----------- Group Information -----------

EndPoint: http://119.xx.xx.xx:8191

Contract Address: 0xCa2C4103bd5679F43eC9E277C2bAf5598f94Fe6D

Fs Address: 0xFB9FF16EB4093aa8fFf762F2dF4E61d3A7532Af9

ID: <span class="token number">1</span> <span class="token comment">#group id</span>

Security Level: <span class="token number">7</span>

Size: <span class="token number">109.95</span> MiB

Price: <span class="token number">113500000</span>

Keepers: <span class="token number">10</span>, Providers: <span class="token number">16</span>, Users: <span class="token number">4</span>

----------- Pledge Information ----------

Pledge: <span class="token number">1.00</span> Memo, <span class="token number">26.00</span> Memo <span class="token punctuation">(</span>total pledge<span class="token punctuation">)</span>, <span class="token number">26.00</span> Memo <span class="token punctuation">(</span>total <span class="token keyword">in</span> pool<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-3-declare" tabindex="-1"><a class="header-anchor" href="#step-3-declare" aria-hidden="true">#</a> Step 3: Declare</h3>
<p>• When participating as a provider node, you need to execute the declare command (declare the public network address) for communication between nodes;</p>
<p>• Get your public network ip+port ready, I will show you below;</p>
<p>• Note: Execute the command in the container;</p>
<p>• The command mefs-provider info can only be executed after the sync information displays as true. Although the synchronization can be successful without doing so, it will not be able to communicate with other nodes.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-provider net <span class="token builtin class-name">declare</span> /ip4/X.X.X.X/tcp/4007
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameter explanation</strong></p>
<p>X.X.X.X is your public ip address.</p>
<p>Port 4007 is your public network port, and the mapped port is the host's port 4001 (-p 4001: the first port 4001 of the boot parameter).​</p>
<h2 id="checking-the-net-status" tabindex="-1"><a class="header-anchor" href="#checking-the-net-status" aria-hidden="true">#</a> Checking the net status</h2>
<p><strong>Get local node network information</strong></p>
<p>Command description: Enter command net info to view the network id (cid), ip address and port of the current node.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-provider net info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Network ID 12D3KooWBpPPzk9srHVVU4kkVF1RPJi9nYNgV4e6Yjjd4PGr5qrk, IP <span class="token punctuation">[</span>/ip4/10.xx.xx.xx/tcp/18003<span class="token punctuation">]</span>, Type: Private 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Get the network connection information of the node</strong></p>
<p>Command description: Enter command net peers to view the network connection information of the current node.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-provider net peers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>12D3KooWMrZTqoU8febMxxxxxxxxxCeqLQy1XCU9QcjP1YWAXVi <span class="token punctuation">[</span>/ip4/10.xx.xx.xx/tcp/8003<span class="token punctuation">]</span>

12D3KooWC2PmhSrU1VexxxxxxxxxtwvQuFZj3vPfjdfebAuJQtc <span class="token punctuation">[</span>/ip4/10.xx.xx.xx/tcp/8004<span class="token punctuation">]</span>

12D3KooWR74K1v6naGxxxxxxxxxVS88h4X93bMnquoRiEDdLJTx <span class="token punctuation">[</span>/ip4/10.xx.xx.xx/tcp/8003<span class="token punctuation">]</span>

12D3KooWSzzwJ7es1xxxxxxxxxPaqei3TUHnNZDmWTELSA7NJXQ <span class="token punctuation">[</span>/ip4/10.xx.xx.xx/tcp/18003<span class="token punctuation">]</span>

12D3KooWG8PjbbN9xxxxxxxxx2oYFtjeQ8XnqvnEqfrB4AiW7eJ <span class="token punctuation">[</span>/ip4/10.xx.xx.xx/tcp/8003<span class="token punctuation">]</span>

12D3KooWRjamwQtxxxxxxxxxb44AAXLNy9CB7u1FL2eC5QZekpF <span class="token punctuation">[</span>/ip4/1.xx.xx.xx/tcp/24071<span class="token punctuation">]</span>

<span class="token punctuation">..</span>. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Connect to any node</strong></p>
<p>Command description: Enter command net connect to connect to any node; if there is any problem with your node network, please enter command net connect to connect to our public node.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mefs-provider net connect /ip4/10.2.x.x/tcp/8004/p2p/12D3KooWAykMmqu951ziotQiAYTN6SwfvBd1dsejSSak2jdSwryF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="hardware-recommendation" tabindex="-1"><a class="header-anchor" href="#hardware-recommendation" aria-hidden="true">#</a> Hardware Recommendation</h2>
<p>If you want to be the Provider, you can set a detailed basic configuration information.</p>
<p> </p>
<p><strong>Do you want to earn income from unused storage space and bandwidth?</strong></p>
<p>If you have spare storage space and bandwidth and want to make some profit from it, you can participate in Memo as a provider.</p>
<p> </p>
<p><strong>Recommended configuration：</strong></p>
<ul>
<li>
<p>8 cores, 16G memory, 2TB storage, 20Mbps bandwidth;</p>
</li>
<li>
<p>External network IP, port 4001 is usable;</p>
</li>
<li>
<p>Docker environment;</p>
</li>
<li>
<p>Linux System</p>
</li>
</ul>
<figure><img src="@source/start-and-usage/how-to-start-with-Docker/testnet/provider.png" alt="provider" tabindex="0" loading="lazy"><figcaption>provider</figcaption></figure>
</div></template>


