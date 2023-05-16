# User

&nbsp;

#### What is the LFS function of user?

Mefs provides users with an encrypted file system LFS, which supports bucket and object operations

&nbsp;

#### How To Start The User's LFS?

After confirming that mefs-user daemon is running, and the running role is user, run mefs-user lfs start;

When the return value is returned, there will be information about the success or failure of the startup. The initial startup process includes the entire network query and contract signing, so the startup time is relatively long.

When the user starts lfs, he can choose to use the default parameters; if you lower the price parameter, you may not find enough providers;

If you increase the ks parameter, you may not find enough keepers; if you increase the ps parameter, you may not find enough providers.

&nbsp;

#### What are the LFS initialization errors of user?

**Input parameter error**

ps parameter setting should be greater than 1, other parameters should be greater than 0; rdo is true/false.

**Insufficient amount in user account**

The greater the storage duration and the storage size, the greater the amount required to sign the contract.

&nbsp;

#### What should I do if I cannot find enough number of keeper/provider after wrong parameter input?

Restart LFS, set new parameters, and set rdo to true.

&nbsp;

#### What are the common mistakes of LFS operation?

**When the bucket is created, the bucket already exists.**

This means that the bucket has been created with this name, and now the bucket is deleted, only marking records, not real deletion.
Therefore, even if the bucket is deleted, creating it with this name again will still show that the bucket already exists.

**When downloading, it shows that the file already exists**

This is because the file already exists in the current directory, you can download it from another directory, or rename the file in the current directory.

**When uploading, it shows that the file already exists**

This means that there is already a file with this name in the currently uploaded bucket. Now that the file is deleted, it is only marked for recording, not a real deletion. So even if the file is deleted, creating it with this name again will still show that the file already exists. You can modify the upload path, for example, mefs-user lfs put_object objectName bucketName/, upload to the directory of < new dir name > corresponding to bucketName.
