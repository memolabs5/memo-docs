<template><div><h1 id="common" tabindex="-1"><a class="header-anchor" href="#common" aria-hidden="true">#</a> Common</h1>
<p> </p>
<h4 id="what-are-the-account-and-private-key" tabindex="-1"><a class="header-anchor" href="#what-are-the-account-and-private-key" aria-hidden="true">#</a> What are the account and private key?</h4>
<p>The private key and account address used by mefs is the same as the Ethereum, and the format is 0x...;</p>
<p> </p>
<h4 id="what-is-the-role" tabindex="-1"><a class="header-anchor" href="#what-is-the-role" aria-hidden="true">#</a> What is the role?</h4>
<p>Mefs contains 3 roles: user, keeper, and provider; currently each account address corresponds to a role; During startup, different services are started according to the role type in the contract.</p>
<p> </p>
<h4 id="account-address-and-network-address" tabindex="-1"><a class="header-anchor" href="#account-address-and-network-address" aria-hidden="true">#</a> Account address and network address</h4>
<p>After starting mefs, there will be two addresses: account address and network address; the account address format is 0x..., the network address format is 8M...; These two addresses are actually equivalent, one for interacting with the chain, and one for network connection.</p>
<p> </p>
<h4 id="how-to-check-my-balance" tabindex="-1"><a class="header-anchor" href="#how-to-check-my-balance" aria-hidden="true">#</a> How to check my balance?</h4>
<p>Run mefs-user/keeper/provider test showBalance in the command line to view the balance of the running account, the unit is wei;</p>
<p> </p>
<h4 id="where-is-the-mefs-directory-what-s-included" tabindex="-1"><a class="header-anchor" href="#where-is-the-mefs-directory-what-s-included" aria-hidden="true">#</a> Where is the mefs directory? What's included?</h4>
<p>`mefs-user/keeper/provider init will create config, data, datastore, keystore and other directories and files in the corresponding directories according to the MEFS_PATH variable; For the directory that has been initialized, if you run mefs-user/keeper/provider init again, an error message will prompt you;
If you want to modify the directory, set MEFS_PATH before running mefs-user/keeper/provider init;
The Keystore uses a password to store the private key; Data directory stores the content of the data block, and the user's data is finally stored in the Data directory in the form of data blocks;</p>
<p> </p>
<h4 id="how-to-check-the-local-account-address" tabindex="-1"><a class="header-anchor" href="#how-to-check-the-local-account-address" aria-hidden="true">#</a> How to check the local account address?</h4>
<p>Run mefs-user/keeper/provider id to see the local account address 0x...</p>
<p> </p>
<h4 id="how-to-check-the-version-of-mefs" tabindex="-1"><a class="header-anchor" href="#how-to-check-the-version-of-mefs" aria-hidden="true">#</a> How to check the version of mefs?</h4>
<p>Run `mefs-user/keeper/provider version to see the version number of mefs.</p>
<p> </p>
<h4 id="how-can-i-check-my-role" tabindex="-1"><a class="header-anchor" href="#how-can-i-check-my-role" aria-hidden="true">#</a> How can I check my role?</h4>
<p>During the startup process of mefs daemon, you can view the output prompt information; You can also run mefs-user/keeper/provider test localinfo to view your own role during operation.</p>
<p> </p>
<h4 id="how-to-set-the-a-address-of-the-blockchain" tabindex="-1"><a class="header-anchor" href="#how-to-set-the-a-address-of-the-blockchain" aria-hidden="true">#</a> How to set the A address of the blockchain?</h4>
<p>Run mefs-user/keeper/provider config Eth to view the address of the blockchain to which you are connected, If you want to modify, you can run mefs-user/keeper/provider config Eth xxx, where xxx is the API address of the chain.</p>
<p> </p>
<h4 id="how-can-i-check-my-network-connection-status" tabindex="-1"><a class="header-anchor" href="#how-can-i-check-my-network-connection-status" aria-hidden="true">#</a> How can I check my network connection status?</h4>
<p>Run mefs-user/keeper/provider swarm peers to view the nodes you are connected to.</p>
<p> </p>
<h4 id="why-file-operation-is-object" tabindex="-1"><a class="header-anchor" href="#why-file-operation-is-object" aria-hidden="true">#</a> Why file operation is object?</h4>
<p>In MEFS, object and file are equivalent. So whlie you see &quot;object&quot; or &quot;file&quot;, you can think of them as &quot;file&quot;.</p>
<p> </p>
<h4 id="version-issue-of-docker" tabindex="-1"><a class="header-anchor" href="#version-issue-of-docker" aria-hidden="true">#</a> Version Issue of Docker</h4>
<p>What should I do if docker1.31.1 cannot recognize --mount?</p>
<p>Solution: upgrade the docker version</p>
<p> </p>
<h4 id="log-issue" tabindex="-1"><a class="header-anchor" href="#log-issue" aria-hidden="true">#</a> Log Issue</h4>
<p>After the keeper started for a period of time, it went down. What is the reason why the log is not very complete?</p>
<p>Network reasons</p>
</div></template>


