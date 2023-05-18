import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.mjs";
const _imports_0 = "/assets/memo-icon-f8db36f1.png";
const _imports_1 = "/assets/memoPic-f6faabe2.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><p> </p><p>Memo is a large-scale decentralized data storage system with high security and reliability built around blockchain. It is a new-gen blockchain decentralized cloud storage protocol that organizes global edge storage nodes to provide users with safe, reliable and highly available storage services.</p><p>  MEFS(MEmo File System) is the file storage system for MEMO.</p><figure><img${ssrRenderAttr("src", _imports_0)} alt="memo" tabindex="0" loading="lazy"><figcaption>memo</figcaption></figure><p> </p><p>MEMO is a new-gen blockchain decentralized cloud storage protocol developed by MEMO Labs. Our mission is to build a reliable infrastructure for Web3.0. To achieve high scalability and availability, MEMO has vastly innovated data tiering, verification, fault tolerance, and recovery mechanisms. MEMO has made technological breakthroughs on blockchain cloud storage with a new architecture and multiple innovations.</p><p> </p><p>MEMO has designed three user roles: the User, the storage space user; the Provider, the storage space provider; and the Keeper, the coordination manager. Driven by smart contracts, three interconnected roles constrain each other.</p><p> </p><p>MEMO can be divided into three functional role-based layers: settlement, verification, and storage. The settlement layer processes settlement on-chain by aggregating order information and sending the amount of each order to the storage nodes Provider. The verification layer is conducted off-chain. The Keeper nodes challenge the Provider nodes, verifie the results of the proof, and decide whether to issue the withdrawal certificate to the Provider nodes. All processes on the verification layer will go through nodes on the same layer and pass the Byzantine fault-tolerant consensus. The storage layer consists of massive scattered Provider nodes, which store genuine User data and regularly submit the proof of storage to the verification layer.</p><p> </p><p>The following articles will help you learn more.</p><p>What is MEMO?</p><p><a href="https://memolabs.medium.com/memoriae-next-generation-of-decentralized-cloud-storage-based-on-blockchain-9151ab8c1aaa" target="_blank" rel="noopener noreferrer">Memoriae — Next Generation of Decentralized Cloud Storage Based on Blockchain`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>Roles：</p><p><a href="https://memolabs.medium.com/build-an-autonomous-storage-system-role-design-in-memoriae-f724c405ddc" target="_blank" rel="noopener noreferrer">Build an Autonomous Storage System: Role Design in Memoriae`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><a href="https://memolabs.medium.com/memoriae-system-node-matching-d246fca41009" target="_blank" rel="noopener noreferrer">Memoriae System Node Matching`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>Technology：</p><p><a href="https://memolabs.medium.com/multilevel-fault-tolerant-mechanism-design-for-memo-decentralized-cloud-storage-system-f3c585eb401d" target="_blank" rel="noopener noreferrer">Multilevel Fault-tolerant Mechanism Design for MEMO Decentralized Cloud Storage System`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><a href="https://medium.com/memolabs/the-risk-aware-failure-identification-rafi-strategy-of-memo-decentralized-cloud-storage-system-6c5990ec8cb3" target="_blank" rel="noopener noreferrer">MEMO Original Data Recovery Strategy: Risk-Aware Failure Identification (RAFI)`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><figure><img${ssrRenderAttr("src", _imports_1)} alt="memo-picture" tabindex="0" loading="lazy"><figcaption>memo-picture</figcaption></figure><p> </p><h2 id="sign-up-for-auth-token" tabindex="-1"><a class="header-anchor" href="#sign-up-for-auth-token" aria-hidden="true">#</a> Sign up for Auth Token</h2><p>The user clicks on the link to obtain test tokens in the Memoriae wallet (under development), and the system will send the user a test token of 10 Memo. When the user&#39;s test balance is not less than 10 Memo, they will not be able to apply for the test token again.</p><p>send an eail to <a href="mailto:sup@memolabs.org">sup@memolabs.org</a> to apply for test tokens</p><p>Email subject: apply for test token</p><p>Email content: account address (format such as 0x...), role (Provider or Keeper or User)</p><p> </p><h2 id="interactive-forum" tabindex="-1"><a class="header-anchor" href="#interactive-forum" aria-hidden="true">#</a> Interactive Forum</h2><p>Persons who are interested in decentralized data storage systems are welcome to join the Memo community and participate in interaction!</p><p>Our <a href="https://github.com/memoio/testnet/issues" target="_blank" rel="noopener noreferrer">GITHUB`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> URL is:</p><p><a href="https://github.com/memoio/testnet/issues" target="_blank" rel="noopener noreferrer">https://github.com/memoio/testnet/issues`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>Our <a href="https://twitter.com/Memo_Labs" target="_blank" rel="noopener noreferrer">TWITTER URL`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> is:</p><p><a href="https://twitter.com/Memo_Labs" target="_blank" rel="noopener noreferrer">https://twitter.com/Memo_Labs`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/concepts/introduction.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const introduction_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "introduction.html.vue"]]);
export {
  introduction_html as default
};
