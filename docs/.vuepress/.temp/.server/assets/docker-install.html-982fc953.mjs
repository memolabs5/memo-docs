import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.mjs";
const _imports_0 = "/assets/docker1-7af32316.png";
const _imports_1 = "/assets/docker2-823aaf32.png";
const _imports_2 = "/assets/docker4-4ae78167.png";
const _imports_3 = "/assets/docker5-ba822ced.png";
const _imports_4 = "/assets/docker6-74706e00.png";
const _imports_5 = "/assets/docker6-74706e00.png";
const _imports_6 = "/assets/windocker1-d9a689be.png";
const _imports_7 = "/assets/windocker2-c1604739.png";
const _imports_8 = "/assets/windocker3-18eb7d84.png";
const _imports_9 = "/assets/windocker4-1222140a.png";
const _imports_10 = "/assets/windocker5-1b429552.png";
const _imports_11 = "/assets/windocker6-72fc398b.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="for-linux" tabindex="-1"><a class="header-anchor" href="#for-linux" aria-hidden="true">#</a> For Linux</h1><p>Before starting the memo, you must install docker.</p><p> </p><p><strong>Docker:</strong> <a href="https://docs.docker.com/desktop/install/linux-install/" target="_blank" rel="noopener noreferrer">Install on Linux`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><strong>How to install Docker in Linux(Ubuntu)：</strong></p><p><strong>1、Update apt package index</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img${ssrRenderAttr("src", _imports_0)} alt="1" tabindex="0" loading="lazy"><figcaption>1</figcaption></figure><p> </p><p><strong>2、Install the following packages to enable apt to use the repository over HTTPS</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> apt-transport-https ca-certificates <span class="token function">curl</span> software-properties-common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​<img${ssrRenderAttr("src", _imports_1)} alt="2" loading="lazy"></p><p>​ </p><p><strong>3、Add the GPG key of Docker official</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4、Run the following command line to set up the stable repository</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository <span class="token string">&quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​<img${ssrRenderAttr("src", _imports_2)} alt="4" loading="lazy"></p><p>​ </p><p><strong>5、 Update the apt package index again</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img${ssrRenderAttr("src", _imports_3)} alt="5" tabindex="0" loading="lazy"><figcaption>5</figcaption></figure><p> </p><p><strong>6、 Install the latest version of Docker CE</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img${ssrRenderAttr("src", _imports_4)} alt="6" tabindex="0" loading="lazy"><figcaption>6</figcaption></figure><p> </p><p><strong>7、 Verify whether the installation is successful</strong></p><p>Check the version of docker installed</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Start docker and pull hello-world to verify whether the installation is successful</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Since sudo access is required to use docker, enter the password here and it will be started successfully.</p><p>Next, run the following command line</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can see the container being downloaded from the remote for testing： Pulling from library/hello-world</p><p>When you see the message： Hello from Docker! It means the docker is successfully installed.</p><figure><img${ssrRenderAttr("src", _imports_5)} alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="for-windows" tabindex="-1"><a class="header-anchor" href="#for-windows" aria-hidden="true">#</a> For Windows</h1><p>Before starting the memo, you must install docker.</p><p> </p><p><strong>Windows install Docker：</strong></p><p>1、<a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker official website`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>2、Download docker for windows</p><figure><img${ssrRenderAttr("src", _imports_6)} alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img${ssrRenderAttr("src", _imports_7)} alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img${ssrRenderAttr("src", _imports_8)} alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img${ssrRenderAttr("src", _imports_9)} alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p> </p><p>Wait for the download to complete.</p><p> </p><p>Double click to install.</p><figure><img${ssrRenderAttr("src", _imports_10)} alt="5" tabindex="0" loading="lazy"><figcaption>5</figcaption></figure><p> </p><p>Wait, finish.</p><figure><img${ssrRenderAttr("src", _imports_11)} alt="6" tabindex="0" loading="lazy"><figcaption>6</figcaption></figure><p> </p><p>After the installation is complete, you will be prompted to restart the computer.</p><p> </p><p>Double-click the icon to start docker.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/start-and-usage/install-Docker/docker-install.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dockerInstall_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "docker-install.html.vue"]]);
export {
  dockerInstall_html as default
};
