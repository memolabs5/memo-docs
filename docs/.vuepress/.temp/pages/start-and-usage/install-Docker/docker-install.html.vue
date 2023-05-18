<template><div><h1 id="for-linux" tabindex="-1"><a class="header-anchor" href="#for-linux" aria-hidden="true">#</a> For Linux</h1>
<p>Before starting the memo, you must install docker.</p>
<p> </p>
<p><strong>Docker:</strong> <a href="https://docs.docker.com/desktop/install/linux-install/" target="_blank" rel="noopener noreferrer">Install on Linux<ExternalLinkIcon/></a></p>
<p><strong>How to install Docker in Linux(Ubuntu)：</strong></p>
<p><strong>1、Update apt package index</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/start-and-usage/install-Docker/docker1.png" alt="1" tabindex="0" loading="lazy"><figcaption>1</figcaption></figure>
<p> </p>
<p><strong>2、Install the following packages to enable apt to use the repository over HTTPS</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> apt-transport-https ca-certificates <span class="token function">curl</span> software-properties-common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​<img src="@source/start-and-usage/install-Docker/docker2.png" alt="2" loading="lazy"></p>
<p>​ </p>
<p><strong>3、Add the GPG key of Docker official</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4、Run the following command line to set up the stable repository</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository <span class="token string">"deb [arch=amd64] https://download.docker.com/linux/ubuntu <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​<img src="@source/start-and-usage/install-Docker/docker4.png" alt="4" loading="lazy"></p>
<p>​ </p>
<p><strong>5、 Update the apt package index again</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/start-and-usage/install-Docker/docker5.png" alt="5" tabindex="0" loading="lazy"><figcaption>5</figcaption></figure>
<p> </p>
<p><strong>6、 Install the latest version of Docker CE</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/start-and-usage/install-Docker/docker6.png" alt="6" tabindex="0" loading="lazy"><figcaption>6</figcaption></figure>
<p> </p>
<p><strong>7、 Verify whether the installation is successful</strong></p>
<p>Check the version of docker installed</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Start docker and pull hello-world to verify whether the installation is successful</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Since sudo access is required to use docker, enter the password here and it will be started successfully.</p>
<p>Next, run the following command line</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can see the container being downloaded from the remote for testing： Pulling from library/hello-world</p>
<p>When you see the message： Hello from Docker! It means the docker is successfully installed.</p>
<figure><img src="@source/start-and-usage/install-Docker/docker7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="for-windows" tabindex="-1"><a class="header-anchor" href="#for-windows" aria-hidden="true">#</a> For Windows</h1>
<p>Before starting the memo, you must install docker.</p>
<p> </p>
<p><strong>Windows install Docker：</strong></p>
<p>1、<a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker official website<ExternalLinkIcon/></a></p>
<p>2、Download docker for windows</p>
<figure><img src="@source/start-and-usage/install-Docker/windocker1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/start-and-usage/install-Docker/windocker2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/start-and-usage/install-Docker/windocker3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/start-and-usage/install-Docker/windocker4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p> </p>
<p>Wait for the download to complete.</p>
<p> </p>
<p>Double click to install.</p>
<figure><img src="@source/start-and-usage/install-Docker/windocker5.png" alt="5" tabindex="0" loading="lazy"><figcaption>5</figcaption></figure>
<p> </p>
<p>Wait, finish.</p>
<figure><img src="@source/start-and-usage/install-Docker/windocker6.png" alt="6" tabindex="0" loading="lazy"><figcaption>6</figcaption></figure>
<p> </p>
<p>After the installation is complete, you will be prompted to restart the computer.</p>
<p> </p>
<p>Double-click the icon to start docker.</p>
</div></template>


