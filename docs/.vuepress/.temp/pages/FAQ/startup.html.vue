<template><div><h1 id="startup-problems" tabindex="-1"><a class="header-anchor" href="#startup-problems" aria-hidden="true">#</a> Startup problems</h1>
<p> </p>
<p><strong>Error when starting the new user image</strong></p>
<p><code v-pre>Error:strconv.ParseInt: parsing &quot;&quot;: invalid syntax</code></p>
<p>The <code v-pre>-e FS = 0</code> parameter needs to be added during startup.</p>
<p> </p>
<p><strong>Actively specify the number of keepers or providers when starting user (default keeper 3, provider 6)</strong></p>
<p>You can refer to user-startup.</p>
<p> </p>
<p><strong>When creating a bucket, you need to specify the erasure code policy or multiple copies.</strong></p>
<p>You need to ensure that the number of providers connected to the user is greater than the number of <em><strong>dc + pc</strong></em> amount view the command <code v-pre>mefs-user lfs list_providers</code>.</p>
<p> </p>
<p><strong>Can the user specify a provider when starting.</strong></p>
<p>The provider cannot be specified when starting. The program logic randomly selects the provider according to its reputation to avoid some deception.</p>
<p> </p>
<p><strong>See your log <code v-pre>Your role is not user</code> .</strong></p>
<p>The registered address is not a user role and needs to be re-registered.</p>
<p> </p>
<p><strong>Error when a user starts</strong></p>
<p><code v-pre>Error: cannot acquire lock: Lock FcntlFlock of /root/.mefs/repo.lock failed: resource temporarily unavailable</code></p>
<p>(1) Check the permissions of user-related directories or whether API files are missing in the user's file directory.</p>
<p>(2) Check whether the <code v-pre>- V / XXX: / root</code> directory and the XXX directory of source in the startup command are the same. It is recommended to be the same as far as possible.</p>
<p>(3) Adjust docker's tasks <code v-pre>sudo systemctl status docker|grep tasks;</code></p>
<p> </p>
<p><strong>The daemon log shows <code v-pre>get empty add from the resolver</code>.</strong></p>
<p>View <code v-pre>docker logs container_name</code> is an <code v-pre>error: balance is insufficiently</code> displayed in the name.</p>
<p> </p>
<p><strong>The user log displays the following information</strong></p>
<p><code v-pre>Get Block xxx from 8MGbFz5MtaNfwU9b6kQj8cPHUFTfCq failed: failed to dial : all dials failed\n * [/ip4/172.xx.xx.xx/tcp/4001] failed to negotiate security protocol: connected to wrong peer</code></p>
<p>The connection was disconnected during the download, resulting in insufficient data blocks.</p>
<p> </p>
<p><strong>An error is reported when downloading files in batch.</strong></p>
<p>The error message is an <code v-pre>error: the object option is invalid</code>. View the file in the bucket and upload it. Size is 0 (more than ten users display the error message at the same time)</p>
<p>Check the log when uploading the file. It is found that the file is uploaded successfully and no error is found. The output information when the file is uploaded shows that the file is uploaded as. When the user is restarted, the user cannot download normally. In this case, the metadata information acquisition fails. When the user uploads the data, the metadata does not arrive. Provider, the user may be restarted during upload.</p>
</div></template>


