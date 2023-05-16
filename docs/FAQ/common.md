# Common

&nbsp;

#### What are the account and private key?

The private key and account address used by mefs is the same as the Ethereum, and the format is 0x...;

&nbsp;

#### What is the role?

Mefs contains 3 roles: user, keeper, and provider; currently each account address corresponds to a role; During startup, different services are started according to the role type in the contract.

&nbsp;

#### Account address and network address

After starting mefs, there will be two addresses: account address and network address; the account address format is 0x..., the network address format is 8M...; These two addresses are actually equivalent, one for interacting with the chain, and one for network connection.

&nbsp;

#### How to check my balance?

Run mefs-user/keeper/provider test showBalance in the command line to view the balance of the running account, the unit is wei;

&nbsp;

#### Where is the mefs directory? What's included?

`mefs-user/keeper/provider init will create config, data, datastore, keystore and other directories and files in the corresponding directories according to the MEFS_PATH variable; For the directory that has been initialized, if you run mefs-user/keeper/provider init again, an error message will prompt you;
If you want to modify the directory, set MEFS_PATH before running mefs-user/keeper/provider init;
The Keystore uses a password to store the private key; Data directory stores the content of the data block, and the user's data is finally stored in the Data directory in the form of data blocks;

&nbsp;

#### How to check the local account address?

Run mefs-user/keeper/provider id to see the local account address 0x...

&nbsp;

#### How to check the version of mefs?

Run `mefs-user/keeper/provider version to see the version number of mefs.

&nbsp;

#### How can I check my role?

During the startup process of mefs daemon, you can view the output prompt information; You can also run mefs-user/keeper/provider test localinfo to view your own role during operation.

&nbsp; 

#### How to set the A address of the blockchain?

Run mefs-user/keeper/provider config Eth to view the address of the blockchain to which you are connected, If you want to modify, you can run mefs-user/keeper/provider config Eth xxx, where xxx is the API address of the chain.

&nbsp; 

#### How can I check my network connection status?

Run mefs-user/keeper/provider swarm peers to view the nodes you are connected to.

&nbsp; 

#### Why file operation is object?

In MEFS, object and file are equivalent. So whlie you see "object" or "file", you can think of them as "file".

&nbsp;

#### Version Issue of Docker

What should I do if docker1.31.1 cannot recognize --mount?

Solution: upgrade the docker version

&nbsp;

#### Log Issue

After the keeper started for a period of time, it went down. What is the reason why the log is not very complete?

Network reasons
