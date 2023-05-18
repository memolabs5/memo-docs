<template><div><h1 id="disconnection-problems" tabindex="-1"><a class="header-anchor" href="#disconnection-problems" aria-hidden="true">#</a> Disconnection problems</h1>
<p> </p>
<p><strong>Performance after disconnection</strong></p>
<ol>
<li>
<p>When the keeper challenges the provider, it is found that the provider cannot be connected. The challenge is over and continues to the next one. The provider initiates a challenge and the cycle repeats. Therefore, the avail time value of the data on the provider will not be updated.</p>
</li>
<li>
<p>Keeper will regularly check the online status of other keepers and providers every 5min. If the network is disconnected for more than 1h, set it. The online status is false, and its credit value is reduced by 1, and the initial value of the credit is 0.</p>
</li>
<li>
<p>If the credit value of the provider is less than 0, it cannot be matched to the user again to form the storage service. Providers with credit less than 0 can. To choose to perform well in this storage service, to improve the credit value, to continue to participate in the storage service next time.</p>
</li>
<li>
<p>Keeper will make repair statistics every 7min. If the difference between the avail time and now time of the data block exceeds a certain time, The data block will be listed as the data block to be repaired.</p>
</li>
<li>
<p>Before repairing, if the credit value of the provider to which the data block to be repaired belongs is less than -50, or the provider cannot be connected, look for it. A new provider to replace the fixtures. Therefore, the disconnected provider has no corresponding challenge results and cannot get the storage revenue during the disconnection. If the network is disconnected too many times, Then for this provider, the data challenged during network disconnection will be repaired to other providers, and the provider will never be used. Will get the benefits of this part of the data again.</p>
</li>
</ol>
<p> </p>
<p><strong>No real data is stored, and the performance after a network disconnection</strong></p>
<p>The keeper will challenge every 5min and trigger spatiotemporal payment every 5min. The spatiotemporal payment interval is 2h, but the contract will be delayed payment by 3 days to pay.</p>
<ul>
<li>
<p>No bucket created: no challenge, no gain, no punishment, and the credit remains unchanged.</p>
</li>
<li>
<p>If a bucket is created but no data is stored in it: no challenge will be initiated, as above.</p>
</li>
</ul>
<p>If the user stores data in the bucket during the disconnection of the provider, if there are not enough online providers, it will keep searching circularly online provider.</p>
<p> </p>
<p><strong>Stored real data, performance after a network disconnection</strong></p>
<p>After the network is disconnected, when the keeper challenges the provider, it finds that the provider cannot be connected. The challenge ends and continues to the next provider.</p>
<p>The provider initiates a challenge and the cycle repeats.</p>
<p>Therefore, the disconnected provider has no corresponding challenge results and cannot get the storage revenue during the disconnection.</p>
<p> </p>
<p><strong>Payment and punishment</strong></p>
<p>(1) When the keeper and provider are in normal service, can the keeper and provider get the information relative to the storage time and space, Storage service fee payable;</p>
<p>(2) When the provider is in normal service if the user downloads data, can the provider get the pending payment corresponding to the amount of downloaded data, Fee signature;</p>
<p>(3) In case of problems with the keeper or provider, test whether the system can reduce the credit value and storage contribution, Penalty for deducting the pledged amount;</p>
<p> </p>
<p><strong>Provider revenue</strong></p>
<ol>
<li>
<p>Ensure that users in <code v-pre>mefs-provider info users</code> have signed up for the provider.</p>
</li>
<li>
<p>User has uploaded data to the provider, which can be downloaded from <code v-pre>/root/.mefs/data</code> to see if there is a file named by the node ID, Pieces with data.</p>
</li>
</ol>
<p> </p>
<p><strong>The provider started without the user signing</strong></p>
<p>View by <code v-pre>mefs-provider info users</code></p>
<ol>
<li>
<p>Provider has mapped <code v-pre>IP + port</code>.</p>
</li>
<li>
<p>User signing up with provider randomly.</p>
</li>
<li>
<p>No user-added when the provider started.</p>
</li>
</ol>
</div></template>


