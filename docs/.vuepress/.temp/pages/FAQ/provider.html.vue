<template><div><h1 id="provider" tabindex="-1"><a class="header-anchor" href="#provider" aria-hidden="true">#</a> Provider</h1>
<p> </p>
<h3 id="what-is-the-pos-of-the-provider" tabindex="-1"><a class="header-anchor" href="#what-is-the-pos-of-the-provider" aria-hidden="true">#</a> What is the pos of the provider?</h3>
<p>The pos function is used for cold start. When the provider just joins the network, the amount of stored data is small.
Pos generates local data according to the size of the mortgage space, and responds to the keeper challenge;
When the provider receives the actual user data, it will gradually delete the pos data;
The difference between pos data and actual user data is that the price of pos data is 1/10 of the default price, and the pos data will not be repaired.</p>
<p> </p>
<h3 id="how-does-the-provider-modify-its-price" tabindex="-1"><a class="header-anchor" href="#how-does-the-provider-modify-its-price" aria-hidden="true">#</a> How does the provider modify its price?</h3>
<p>When the provider is started, it resets its price parameters and sets rdo to true to update its storage price.</p>
<p> </p>
<h3 id="how-does-the-provider-set-up-its-own-master-keeper" tabindex="-1"><a class="header-anchor" href="#how-does-the-provider-set-up-its-own-master-keeper" aria-hidden="true">#</a> How does the provider set up its own master keeper?</h3>
<p>When the provider is running, it can set its own master keeper through mefs contract addMasterKeeper 0x...; The main keeper will give priority to providing its own provider and trigger the time and space payment in the upkeeping contract.</p>
</div></template>


