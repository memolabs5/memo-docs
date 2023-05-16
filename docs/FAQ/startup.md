# Startup problems

&nbsp; 

**Error when starting the new user image**

`Error:strconv.ParseInt: parsing "": invalid syntax`

The `-e FS = 0` parameter needs to be added during startup.

&nbsp; 

**Actively specify the number of keepers or providers when starting user (default keeper 3, provider 6)**

You can refer to user-startup.

&nbsp; 

**When creating a bucket, you need to specify the erasure code policy or multiple copies.**

You need to ensure that the number of providers connected to the user is greater than the number of ***dc + pc*** amount view the command `mefs-user lfs list_providers`.

&nbsp; 

**Can the user specify a provider when starting.**

The provider cannot be specified when starting. The program logic randomly selects the provider according to its reputation to avoid some deception.

&nbsp; 

**See your log `Your role is not user` .**

The registered address is not a user role and needs to be re-registered.

&nbsp; 

**Error when a user starts**

`Error: cannot acquire lock: Lock FcntlFlock of /root/.mefs/repo.lock failed: resource temporarily unavailable`

(1) Check the permissions of user-related directories or whether API files are missing in the user's file directory.

(2) Check whether the `- V / XXX: / root` directory and the XXX directory of source in the startup command are the same. It is recommended to be the same as far as possible.

(3) Adjust docker's tasks `sudo systemctl status docker|grep tasks;`

&nbsp; 

**The daemon log shows `get empty add from the resolver`.**

View `docker logs container_name` is an `error: balance is insufficiently` displayed in the name.

&nbsp; 

**The user log displays the following information**

`Get Block xxx from 8MGbFz5MtaNfwU9b6kQj8cPHUFTfCq failed: failed to dial : all dials failed\n * [/ip4/172.xx.xx.xx/tcp/4001] failed to negotiate security protocol: connected to wrong peer`

The connection was disconnected during the download, resulting in insufficient data blocks.

&nbsp; 

**An error is reported when downloading files in batch.**

The error message is an `error: the object option is invalid`. View the file in the bucket and upload it. Size is 0 (more than ten users display the error message at the same time)

Check the log when uploading the file. It is found that the file is uploaded successfully and no error is found. The output information when the file is uploaded shows that the file is uploaded as. When the user is restarted, the user cannot download normally. In this case, the metadata information acquisition fails. When the user uploads the data, the metadata does not arrive. Provider, the user may be restarted during upload.
