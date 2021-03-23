<!--
 * @Author: wudi(max24@vip.qq.com)
 * @Date: 2021-02-22 13:29:04
 * @Description: 
-->
# Guide
## How to participate?

### > Want to store data on Memoriae?

If you want to store data on decentralized cloud, then you can participate Memoriae as a User.

**Operational Requirements**

* Recommended configuration: 4 cores, 8G memory, 20Mbps bandwidth;
* External network ip, port 4001 is usable;
* Docker environment;

**Get the Docker Image**

```shell
> docker pull memoio/mefs-user:latest
```
**Generate Account**

```shell
> docker run -it -v <your local storage dir>:/root --entrypoint="/app/create" memoio/mefs-user:latest
```

Then input the password of mefs-user(at least 8 digits, the default is "memoriae") as prompted, and the keyfile of mefs-user is stored in the < your local storage >/.mefs/keystore directory. 

An example of generating an account:

```shell
> docker run -it -v ~/docker-test/user:/root --entrypoint="/app/create" memoio/mefs-user:latest
> please input your password(at least 8): 12345678
> Private Key: 5cac2aaf3aa4c086a381cc0e74fdc3d685a99db5d320a2e0265ea426cf3d7894
  Address: 0x32Ae578B69c2e3B484DEB01F6B5E65b9a61bC2a0
```

The generated address is "0x32Ae578B69c2e3B484DEB01F6B5E65b9a61bC2a0", the private key is "5cac2aaf3aa4c086a381cc0e74fdc3d685a99db5d320a2e0265ea426cf3d7894", the keyfile is stored in the ~/docker-test/user/.mefs/keystore directory, the file name is "0x32Ae578B69c2e3B484DEB01F6B5E65b9a61bC2a0", the password is "12345678".

**Apply for Test Tokens**

Send an email to sup@memolabs.io to apply for test tokens.

Email content: account address (such as 0x... generated above)、role (user)

**Start User**

Due to the need to deploy contracts and match nodes during the initial startup, it takes about 30 minutes.

* Start Command:

```shell
//Start docker; port 4001 is used for network connection, 5080 for S3 interface
sudo docker run -d --stop-timeout 30 \
    -p <External Port Num>:<Port Num> \
    -v <storage dir>:/root \
    -e TRANSPORT=<Port Num> \
    -e WALLET="0x..." \
    -e PASSWORD="<your password>" \
    --mount type=bind,source="<keystore dir>",destination=/app/keystore \
    --name <countainer name> memoio/mefs-keeper:latest
```

* Parameter Explanation:

> **WALLET:** Account address (0x...), must be specified;
> **PASSWORD:** The password of the keyfile. If the user is running in the docker background mode, it must be specified; if it is running in the foreground mode, it can be entered during the running process;
> **STORAGESIZE:** The size of storage space used, such as 10GB, 1000MB, 1TB, etc, the default is 1TB;
> **GATEWAY:** Whether to enable the gateway mode, after enabling, port 5080 provides external minio S3 interface service; the user name is WALLET, the password is PASSWORD; it is enabled by default;
> **storage dir:** data directory;
> **keystore dir:** The location of the keyfile exported after registration, the name of the keyfile is WALLET;

* Log File:

In the *< storage dir >/.mefs* directory, there are startup log daemon.stdout.xx and the running log in the *logs* directory;

Through the running log, you can view the running status of the keeper node; when an error occurs, you can view the startup log;

**Enter the Terminal**

```shell
//enter the docker
> sudo docker exec -it <container name> bash
```

* For the use of cli, see the [command document](#-as-a-user).
* S3 interface usage see [S3 document](https://github.com/memoio/testnet/tree/master/docs/api).

### > Want to gain revenue from unused storage space and bandwidth?

If you has idle storage space and bandwidth, and you want to get some profit through it, you can participate Memoriae as a Provider.

**Operational Requirements**

* Recommended configuration: 4 cores, 8G memory, 1TB storage, 20Mbps bandwidth;
* External network ip, port 4001 is usable;
* Docker environment;

**Get the Docker Image**

```shell
> docker pull memoio/mefs-provider:latest
```

**Generate Account**

```
> docker run -it -v <your local storage dir>:/root --entrypoint="/app/create" memoio/mefs-provider:latest
```

Then input the password of mefs-provider(at least 8 digits, the default is "memoriae") as prompted, and the keyfile of mefs-provider is stored in the < your local storage >/.mefs/keystore directory. 

An example of generating an account:

```
> docker run -it -v ~/docker-test/provider:/root --entrypoint="/app/create" memoio/mefs-provider:latest
> please input your password(at least 8): 12345678
> Private Key: 5cac2aaf3aa4c086a381cc0e74fdc3d685a99db5d320a2e0265ea426cf3d7894
  Address: 0x32Ae578B69c2e3B484DEB01F6B5E65b9a61bC2a0
```

The generated address is "0x32Ae578B69c2e3B484DEB01F6B5E65b9a61bC2a0", the private key is "5cac2aaf3aa4c086a381cc0e74fdc3d685a99db5d320a2e0265ea426cf3d7894", the keyfile is stored in the ~/docker-test/provider/.mefs/keystore directory, the file name is "0x32Ae578B69c2e3B484DEB01F6B5E65b9a61bC2a0", the password is "12345678".

**Register Provider**

Send an email to sup@memolabs.io to apply for provider registration.

Email content: account address (such as 0x... generated above)、role (provider)

**Start Provider**

Requirements: The 4001 port of the machine can be accessed by the public network, or there is a port mapping on the export machine.

* Start Command:

```
//Start docker; port 4001 is used for network connection
sudo docker run -d --stop-timeout 30 \
    -p <External Port Num>:<Port Num> \
    -v <storage dir>:/root \
    -e TRANSPORT=<Port Num> \
    -e WALLET="0x..." \
    -e PASSWORD="<your password>" \
    -e STORAGESIZE="1TB" \
    -e STORAGEPRICE="4000000000"
    -e STORAGEDURATION="100"
    -e POSENABLE="false" \
    --mount type=bind,source="<keystore dir>",destination=/app/keystore \
    --name <countainer name> memoio/mefs-provider:latest
```

* Parameter Explanation:

> **TRANSPORT**：< Port Num > is the network port of the program, the default is 4001; < External Port Num > is the port mapped out by docker, and the default can be the same as < Port Num >;
> **WALLET**：Account address (0x...), must be specified;
> **PASSWORD**：The password of the keyfile. If the provider is running in the docker background mode, it must be specified; if it is running in the foreground mode, it can be entered during the running process;
> **STORAGESIZE**：The size of the storage space provided, such as 10GB, 1000MB, 1TB, etc., the default is 1TB;
> **STORAGEPRICE**：The unit price of the storage space provided, unit is token/MB/hour, the default is 4 * 10^9;
> **STORAGEDURATION**：Provided storage time, unit is day, default 100;
> **POSENABLE**：Whether to enable the cold data filling function, set true to enable; the default is false;
> **storage dir**：data directory;
> **keystore dir**：The location of the keyfile exported after registration, the name of the keyfile is WALLET;

It takes about 20 minutes for the first startup.

* Log File:

In the *< storage dir >/.mefs* directory, there are startup log daemon.stdout.xx and the running log in the *logs* directory;

Through the running log, you can view the running status of the keeper node; when an error occurs, you can view the startup log;

**Enter the Terminal**

```
// enter the docker
> sudo docker exec -it <container name> bash
```

The parameter explanation of each command can be found in the [documentation](#-as-a-provider)

### > Only a small amount of free storage space?

If you have only a small amount of free storage space, and you want to participate Memoriae, then you can become a Keeper in Memoriae.

**Operational Requirements**

* Recommended configuration: 4 cores, 8G memory, 200GB storage, 20Mbps bandwidth;
* External network ip, port 4001 is usable;
* Docker environment;

**Get the Docker Image**

```shell
> docker pull memoio/mefs-keeper:latest
```

**Generate Account**

```shell
> docker run -it -v <your local storage dir>:/root --entrypoint="/app/create" memoio/mefs-keeper:latest
```

Then input the password of mefs-keeper(at least 8 digits, the default is "memoriae") as prompted, and the keyfile of mefs-keeper is stored in the < your local storage >/.mefs/keystore directory. 

An example of generating an account:

```shell
> docker run -it -v ~/docker-test/keeper:/root --entrypoint="/app/create" memoio/mefs-keeper:latest
> please input your password(at least 8): 12345678
> Private Key: 5cac2aaf3aa4c086a381cc0e74fdc3d685a99db5d320a2e0265ea426cf3d7894
  Address: 0x32Ae578B69c2e3B484DEB01F6B5E65b9a61bC2a0
```

The generated address is "0x32Ae578B69c2e3B484DEB01F6B5E65b9a61bC2a0", the private key is "5cac2aaf3aa4c086a381cc0e74fdc3d685a99db5d320a2e0265ea426cf3d7894", the keyfile is stored in the ~/docker-test/keeper/.mefs/keystore directory, the file name is "0x32Ae578B69c2e3B484DEB01F6B5E65b9a61bC2a0", the password is "12345678".

**Register Keeper**

Send an email to sup@memolabs.io to apply for keeper registration.

Email content: account address (such as 0x... generated above)、role (keeper)

**Start Keeper**

Requirements: The 4001 port of the machine can be accessed by the public network, or there is a port mapping on the export machine.

* Start Command:

```shell
//Start docker; port 4001 is used for network connection
sudo docker run -d --stop-timeout 30 \
    -p <External Port Num>:<Port Num> \
    -v <storage dir>:/root \
    -e TRANSPORT=<Port Num> \
    -e WALLET="0x..." \
    -e PASSWORD="<your password>" \
    --mount type=bind,source="<keystore dir>",destination=/app/keystore \
    --name <countainer name> memoio/mefs-keeper:latest
```

* Parameter Explanation:

> TRANSPORT: < Port Num > is the network port of the program, the default is 4001; < External Port Num > is the port mapped out by docker, and the default can be the same as < Port Num >;

> WALLET: Account address (0x...), must be specified;
> PASSWORD: The password of the keyfile. If the keeper is running in the docker background mode, it must be specified; if it is running in the foreground mode, it can be entered during the running process;
> storage dir: data directory;
> keystore dir: The location of the keyfile exported after registration, the name of the keyfile is WALLET;

It takes about 20 minutes for the first startup.

* Log File:

In the *< storage dir >/.mefs* directory, there are startup log daemon.stdout.xx and the running log in the *logs* directory;

Through the running log, you can view the running status of the keeper node; when an error occurs, you can view the startup log;

**Enter the Terminal**

```shell
//enter the docker
> sudo docker exec -it <container name> bash
```

The parameter explanation of each command can be found in the [documentation](http://132.232.87.203:8088/508dev/dev-github/tree/master/docs/cmd).

## Get test tokens

[待定]()

## How to operate?

### > As a user

#### Command details

**start up**

* initialization

Mefs initialization, the default initialized directory is \$HOME/.mefs, you can set the initialized directory by export MEFS_PATH=<local dir>, and then run init.

```shell
> mefs-user init --netKey=<net key> --sk=<your private key> --pwd=<your password> --keyfile=<absolute path of your keyfile>
```

Parameter explanation:

> sk：private key address;
> pwd：password;
> keyfile:the full path of the keyfile file;
> netKey:private network symbol, now has dev and testnet; networks with the same symbol can be interconnected.

* Modify the network transmission port

The default is port 4001, if you need to change to <port num>, execute the following command:

```shell
// execute before running daemon
mefs-user config --json Addresses.Swarm "[\"/ip4/0.0.0.0/tcp/<port num>\"]"
```

For example, change to port 4090:

```shell
// execute before running daemon
mefs-user config --json Addresses.Swarm "[\"/ip4/0.0.0.0/tcp/4090\"]"
```

* Startup example

```shell
// Run in the background
> mefs-user daemon --netKey=<net key> --pwd=<your password> >> log 2>&1 &
```

Parameter explanation:

> pwd：password;
> netKey: private network symbol, now has dev and testnet.
> Start user's LFS

After starting the mefs daemon, the user starts its storage space.

Due to the need to match the contract and deploy the contract, it takes about 30 minutes to start.

```shell
> mefs-user lfs start <public address> --sk=<private key> --pwd=<password> --dur=<duration> --cap=<capacity> --price=<price> --ks=<keeper SLA> --ps=<provider SLA>
```

Parameter explanation:

> public address：account address（0x...）；local account's public address by default;
> sk：private key address； import from local private key file by default;
> pwd：password; DEFAULTPASSWORD by default;
> dur：the storage time provided; calculated in days, the default is 100;
> cap：provided storage size; calculated in MB, the default is 1TB;
> price：the storage price provided, calculated by weiDollar/MB/hour, and the default is 4 * 10^9; about 3 USD/(TB\*month);
> ks：the number of keeper required, the default is 3;
> ps：the number of provider required, the default is 6;

#### Use LFS（cli）

MEFS provides each user with a dedicated encrypted storage space (LFS). Each storage space contains multiple buckets. A bucket is a container for users to store objects. Each bucket contains multiple objects ( object), we can think of objects as files. The redundancy policy of the bucket can be specified when it is created (all objects stored in the bucket use this redundancy policy), and the object data is encrypted using symmetric encryption.

The user can operate data through command line, network (http), and gateway.

It can also be operated through the sdk, and only the go version is currently available.

 **bucket operation**

- create bucket

command description：`create_bucket` creates a bucket based on the name of BucketName. Each bucket can be set with different redundancy strategies. The redundancy strategy is multiple replicas or erasure codes (Reed-Solomon Codes). The number of data blocks and check blocks can be adjusted to determine the level of redundancy. The erasure codes of 3 data blocks and 2 check blocks are used by default, and the loss of two blocks can be tolerated.

```shell
> mefs-user lfs create_bucket <BucketName> --policy=<redundancy> --dc=<data count> --pc=<parity count> --addr=<public key>
```

command description:

```shell
--BucketName: name of bucket, minimum 3 bytes and maximum 256 bytes;
--policy：redundancy strategy, --policy=1 means to use erasure codes, --policy=2 means to use multiple copies, and erasure codes are used by default;
--dc：the number of data blocks, the default is 3;
--pc：the number of check blocks, the default is 2; when using the multiple copy strategy, the actual data block is 1, and the check block is dc+pc-1;
--addr: the address of user, which is empty by default, indicating that is the address of the local node.
```

result output:

```shell
Method: Create Bucket    // command name
BucketName: <BucketName> // name of created bucket
--BucketID: <BucketID>  // internal ID of bucket
--Ctime: <Ctime> // create time
--Policy: <Policy> // redundancy strategy
--DataCount: <DataCount> // number of data block
--ParityCount: <ParityCount>  // number of check blocks
```

- Bucket List

command description：`list_buckets` display all buckets created by this user, including the name (BucketName), creation time (Ctime), redundancy policy (Policy) and redundancy parameters (DataCount, ParityCount) of each bucket.

```shell
> mefs-user lfs list_buckets --addr=<public key>
```

Parameter explanation:

```shell
--addr: user address, which is empty by default, indicating that is the address of the local node.
```

result output:

```shell
Method: List Buckets
BucketName: <BucketName>
--BucketID: <BucketID>
--Ctime: <Ctime>
--Policy: <Policy>
--DataCount: <DataCount>
--ParityCount: <ParityCount>
BucketName: <BucketName>
--BucketID: <BucketID>
--Ctime: <Ctime>
...
```

- Bucket Information

command description: If the BucketName exists, `head_bucket` displays the creation time, redundancy strategy and redundancy parameters of this bucket; if it does not exist, returns the bucket does not exist.

```shell
> mefs-user lfs head_bucket <BucketName> --addr=<public key>
```

Parameter explanation:

```shell
BucketName：name of bucket
--addr: user address, which is empty by default, indicating that is the address of the local node.
```

result output:

```shell
Method: Head Bucket
BucketName: <BucketName>
--BucketID: <BucketID>
--Ctime: <Ctime>
--Policy: <Policy>
--DataCount: <DataCount>
--ParityCount: <ParityCount>
```

- Delete Bucket

command description: if the bucket named exists, `delete_bucket` deletes the bucket; if it does not exist, returns the bucket does not exist. Only delete when the bucket is empty, otherwise it returns that bucket is not empty.

```shell
> mefs-user lfs delete_bucket <BucketName> --addr=<public key>
```

Parameter explanation:

```shell
BucketName：name of bucket
--addr: user address, which is empty by default, indicating that is the address of the local node.
```

result output:

```shell
Method: Delete Bucket
BucketName: <BucketName>
--BucketID: <BucketID>
--Ctime: <Ctime>
--Policy: <Policy>
--DataCount: <DataCount>
--ParityCount: <ParityCount>
```

**object operation**

- upload object

command description: `put_object` uploads an object named ObjectName to the bucket named BucketName; if the bucket does not exist, it returns bucket does not exist; if the object already exists, it returns object already exists.

```shell
> mefs-user lfs put_object <ObjectName> <BucketName> --addr=<public key>
```

Parameter explanation:

```shell
ObjectName：the name of the uploaded file, using a relative or absolute path;
BucketName：name of bucket;
--addr: user address, which is empty by default, indicating that is the address of the local node.
```

result output:

```shell
Method: Put Object
ObjectName: <ObjectName>  // name of object
--ObjectSize: <ObjectSize> // the size of the uploaded object
--MD5: <MD5>               // the hash value of the uploaded object by MD5 encryption
--Ctime: <Ctime>           // create time of object
--Dir: <Dir>               // whether it is a directory, true indicates yes, false indicates no.
--LatestChalTime:<LatestChalTime>  // the time this object was last challenged
```

- download object

command description: `get_object` downloads an object named ObjectName from the bucket named BucketName; if the bucket does not exist, returns the bucket does not exist; if the object does not exist, returns the object does not exist.

```shell
mefs-user lfs get_object <BucketName> <ObjectName> --o=<OutputName> --addr=<public key>
```

Parameter explanation:

```shell
ObjectName：name of object that want to get;
BucketName：name of bucket;
--o: the default name of  download object is ObjectName, if this parameter is set, it is OutputName.
--addr: user address, which is empty by default, indicating that is the address of the local node.
```

Result output:

Downloaded file

- File List

command description: `list_objects` lists all the objects in the bucket named BucketName, including the object size, creation time, MD5 value, whether it is a directory, and the time of the most recent challenge.

```shell
mefs-user lfs list_objects <BucketName> --addr=<public key>
```

Parameter explanation:

```shell
BucketName：name of bucket that want to list；
--addr: user address, which is empty by default, indicating that is the address of the local node.
```

Result output:

```shell
Method: List Object
ObjectName: <ObjectName>
--ObjectSize: <ObjectSize>
--MD5: <MD5>
--Ctime: <Ctime>
--Dir: <Dir>
--LatestChalTime:<LatestChalTime>
ObjectName: <ObjectName>
--ObjectSize: <ObjectSize>
--MD5: <MD5>
--Ctime: <Ctime>
......
```

- File Imformation

command description: `head_object` displays the size of the object named ObjectName in the bucket named BucketName, the MD5 value, the creation time, whether it is a directory, and the time of the most recent challenge.

```shell
mefs-user lfs head_object <BucketName> <ObjectName> --addr=<public key>
```

Parameter explanation:

```shell
ObjectName：name of object that want to head;
BucketName：name of bucket;
--addr: user address, which is empty by default, indicating that is the address of the local node.
```

Result output:

```shell
Method: Head Object
ObjectName: <ObjectName>
--ObjectSize: <ObjectSize>
--MD5: <MD5>
--Ctime: <Ctime>
--Dir: <Dir>
--LatestChalTime:<LatestChalTime>
```

- Delete File

command description: `delete_object` deletes the object named ObjectName from the bucket named BucketName.

```shell
 mefs-user lfs delete_object <BucketName> <ObjectName> --addr=<public key>
```

Parameter explanation:

```shell
ObjectName：name of object to delete;
BucketName：name of bucket that object is in；
--addr: user address, which is empty by default, indicating that is the address of the local node.
```

Result output:

```shell
Method: Delete Object
ObjectName: <ObjectName>
--ObjectSize: <ObjectSize>
--Ctime: <Ctime>
--Dir: <Dir>
--LatestChalTime:<LatestChalTime>
```

**Operation about Role**

- List the corresponding keeper

Command description: `list_keepers` lists the keeper who signed the UpKeeping contract with this user

```shell
mefs-user lfs list_keepers
```

The output is the corresponding keeper id.

- List the corresponding provider

Command description: `list_providers` lists providers that store data for this user.

```shell
mefs-user lfs list_providers
```

The output is the corresponding provider id.

**Others**

- Refresh metadata

Command description: `fsync` manually refreshes the metadata of lfs. This command is executed on the keeper. Metadata includes SuperBlock, BucketInfo, ObjectInfo.

```shell
mefs-user lfs fsync
```

The output is 'Flush Success'.

- Check the storage space used

Command description: `show_storage` queries the user's used space, that is, how much data is stored in all buckets of the user, the unit is kb.

```shell
mefs-user lfs show_storage --addr=<public key>
```

Parameter explanation:

```shell
--addr: user address, which is empty by default, indicating that is the address of the local node.
```

The output is the corresponding space, the format is two decimal places with unit (kb).

#### http Operation

Mefs commands can all be operated using http.

**Configuration**

Before mefs-user starts, perform the following configuration:

```shell
// mefs api port setting, default is 5001
mefs-user config Addresses.API /ip4/0.0.0.0/tcp/5001
// cross-domain access
mefs-user config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
mefs-user config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST"]'
```

Then restart mefs-user to use http to operate.

**Usage**

A command similar to the following:

```shell
mefs-user rootcmd subcmd <arg1> <arg2> -opname1=<op1> -opname2=<op2>
```

The corresponding http request is:

```shell
curl  "http://<ip>:<port>/api/v0/api/v0/<rootcmd>/<subcmd>?arg=<arg1>&arg=<arg2>&opname1=<op1>&opname2=<op2>"
```

ip is the network address of the machine where mefs-user is started. The port defaults to 5001. If cross-domain access is configured before running, you can use the external network ip to access, otherwise you can only access it through 127.0.0.1.

**example**

- Show all bucket information

```shell
curl  "http://127.0.0.1:5001/api/v0/lfs/list_buckets?addr=<public key>"
```

The output is in standard json format:

```json
{
  "Method": "List Buckets",
  "Buckets": [
    {
      "BucketName": "<BucketName>",
      "BucketID": "<BucketID>",
      "Ctime": "<Ctime>",
      "Policy": "<Policy>",
      "DataCount": "<DataCount>",
      "ParityCount": "<ParityCount>"
    },
    {
      "BucketName": "<BucketName>",
      "BucketID": "<BucketID>",
      "Ctime": "<Ctime>",
      "Policy": "<Policy>",
      "DataCount": "<DataCount>",
      "ParityCount": "<ParityCount>"
    }
  ]
}
```

- Display information about all objects in a bucket

```shell
curl  "http://127.0.0.1:5001/api/v0/lfs/list_objects?arg=<BucketName>&addr=<public key>"
```

The output is in standard json format:

```json
{
  "Method": "List Objects",
  "Objects": [
    {
      "ObjectName": "<ObjectName>",
      "ObjectSize": "<ObjectSize>",
      "Ctime": "<Ctime>",
      "Dir": "<Dir>",
      "LatestChalTime": "<LatestChalTime>"
    },
    {
      "ObjectName": "<ObjectName>",
      "ObjectSize": "<ObjectSize>",
      "Ctime": "<Ctime>",
      "Dir": "<Dir>",
      "LatestChalTime": "<LatestChalTime>"
    }
  ]
}
```

#### Gateway mode

Multiple users can share one mefs's running program.

**user agent start**

After mefs is started, other users can also be started as a proxy.

```shell
mefs-user lfs start <addr> --sk=<private key> --pwd=<password>
```

Parameter explanation:

```
addr：account address;
--sk：the private key of the user; if the private key corresponding to the address does not match, the address of the private key shall prevail;
--pwd：user's password;
```

**user agent stop**

After mefs is started, other users can also be shut down by proxy.

```go
mefs-user lfs kill addr --pwd=<password>
```

Parameter explanation:

```shell
addr：account address
--pwd：account password
```

**Usage**

- cli

```shell
mefs-user rootcmd subcmd arg1 op1=arg2 --addr=<public key>
```

- http

```shell
curl  "http://<ip>:5001/api/v0/api/v0/<roocmd>/<subcmd>?arg=<arg1>&op1=<arg2>&addr=<public key>"
```

**example**

The user whose address is the public key obtains the file named ObjectName from the BucketName bucket.

- cli

```shell
mefs lfs get_object <BucketName> <ObjectName> --addr=<public key>
```

- http
```shell
curl  "http://127.0.0.1:5001/api/v0/lfs/get_object?arg=<BucketName>&arg=<ObjectName>&addr=<public key>"
```

### > As a provider

#### Start up

**initialization**

Mefs initialization, the default initialized directory is \$HOME/.mefs, you can set the initialized directory by export MEFS_PATH=<local dir>, and then run init.

```shell
> mefs-provider init --netKey=<net key> --sk=<your private key> --pwd=<your password> --keyfile=<absolute path of your keyfile>
```

Parameter explanation:

> sk：private key address;
> pwd：password;
> keyfile: the full path of the keyfile file;
> netKey: private network logo, now has dev and testnet; networks with the same logo can be interconnected.

**Modify the network transmission port**

The default is port 4001, if you need to change to <port num>, execute the following command;
The provider requires that this <port num> can be directly accessed, or there is a port mapping on the external network machine.

```shell
// execute before running daemon
mefs-provider config --json Addresses.Swarm "[\"/ip4/0.0.0.0/tcp/<port num>\"]"
```

For example, change to port 4090:

```shell
// execute before running daemon
mefs-provider config --json Addresses.Swarm "[\"/ip4/0.0.0.0/tcp/4090\"]"
```

**Start instance**

```shell
> mefs-provider daemon --netKey= <net key> --pwd=<your password> --dur=<your storage duration> --cap=<your storage capacity> --price=<your storage price> --deCap=<your deposit capacity> --rdo=<bool> --pos=true
```

Parameter explanation:

> dur: the length of storage time provided; calculated in days, the default is 365 days;
> cap：the size of the storage space provided; calculated in MB, the default is 1TB;
> price: the storage price provided is calculated in wei, and the default is 4 * 10^9 wei; that is, 3 USD/(TB\*month);
> rdo：whether to redeploy the offer contract, the default is false;
> deCap：staking space; calculated in MB, 1TB by default;
> pos：whether to use the cold start function, the default is false and not turned on; if you use it, you need to ensure that the available space is greater than the pledged space;
> netKey: private network logo, now there are dev and testnet; networks with the same logo can be interconnected;

#### View node information

Through `mefs-provider id`, you can view the node's network address (8M...), account address (0x...), public key, communication address, and version information.

```shell
mefs-provider id <peerID> --pwd=<your password>
```
Parameter explanation:

> peerID：the ID of the node to be searched; the default is the local node;
> pwd：the password of the node is DefaultPassword by default, and the proxy node is empty by default;

Result output:

```shell
{
	"NetworkAddr": "8MJ5cAWfAP86cHmAcC3dxqzK41dh4a",
	"AccountAddr": "0x91b90d08aaE86F87648cF6B497918D487A5C19Ef",
	"PublicKey": "A6nefy7/FZbrrszX/itXdKmNTrFmkwMSYptFYwBjRVxz",
	"Addresses": [
		"/ip4/127.0.0.1/tcp/4001/p2p/8MJ5cAWfAP86cHmAcC3dxqzK41dh4a",
		"/ip4/172.26.133.70/tcp/4001/p2p/8MJ5cAWfAP86cHmAcC3dxqzK41dh4a",
		"/ip4/172.17.0.1/tcp/4001/p2p/8MJ5cAWfAP86cHmAcC3dxqzK41dh4a"
	],
	"AgentVersion": "go-mefs/v0.3.2/ddf22678"
}
```

#### Display information

**Local node information**

```shell
mefs-provider info self
```

Output result:

```shell
"Wallet": "0xa12626B388dc08481520B0f9c7009b9505f87f5e", //account address
	"StartTime": "2020-11-16 Mon 10:24:50 CST", //registration time
	"UpTime": "45 day 7 hour 42 minute 10 second", //online time
	"ReadyForService": true, //whether the service has been started
	"PublicNetwork": "/ip4/58.210.46.6/tcp/4115/p2p/8MJJ58XHucLXfV5ej7GUXWhRDAHfim", //public address
	"PublicReachable": true,
	"Balance": "10874.62 Token",
	"PledgeBytes": "1.00 TiB",
	"UsedBytes": "639.31 GiB",
	"PosBytes": "0 B",
	"LocalFreeBytes": "232.77 GiB",
	"OfferAddress": "0x8bc53304465Aa7214Baaf4407f6d4626E15bBab0",
	"OfferCapacity": "976.56 GiB",
	"OfferPrice": "3.02 Dollar/(TiB*Month) (For now, 1 Dollar = 100 Token)",
	"OfferDuration": "8640000 day",
	"OfferStartTime": "2020-05-15 Fri 04:38:38 CST",
	"TotalIncome": "2.14 Token",
	"StorageIncome": "1.51 Token",
	"DownloadIncome": "7498443.30 Gwei",
	"PosIncome": "624882551.42 Gwei"
```

**user information**

```shell
mefs-provider info users
```

Output result:

```shell
8MJg6VvVqYPFr2d38wxUVGRZqqJcnv/8MGXdiJq3AhHuQa3dh1pucP6rJXahb
8MKWbYg3b9Gxj2c7szWkzSxAJS3V6y/8MHLoGHF2rBXPocBztUu2tAEaiqYqb
8MJr4bwoDcsGVdD7hhAJYMs8FkN3Kt/8MKACLbaSreLC2e7nkfEjPZvbeLhzk
8MKDyauiihGANvuAxc5G3N6B922rFy/8MKbFLenGA3zbNmKiZvkWaoztGLvJu
```
The first ID represents the User with whom the Provider node signs a storage service contract, and the first represents the file system ID.

**group information**

Provider provides storage services for users to form a group. The group information contains detailed information about storage services.

```shell
mefs-provider info group <uid> <qid>
```

Parameter explanation:

> uid：ID of the user;
> qid：ID of the file system;

#### View network nodes

**View Keeper nodes in the network**

Show all the Keeper account addresses registered on the chain:

```shell
mefs-provider list keepers
```

Output result:

```shell
"KeeperCount": 3,
	"PledgeMoney": "30000000.00 Gwei", //keeper pledge total amount
	"OnlineCount": 2, //number of online keepers
	"OnlineKepepers": [ //Keeper online
		{
			"Address": "0x489799F06C6E70599e1Cc34d393394D59Cca1695",//account address
			"Online": true,
			"PledgeMoney": "10000000.00 Gwei", //pledge amount
			"PledgeTime": "2020-09-28 Mon 13:01:29 CST" //Pledge time
		},
		{
			"Address": "0xdB04F60f4313fdCb75C51679ad25dE5D5e92a45B",
			"Online": true,
			"PledgeMoney": "10000000.00 Gwei",
			"PledgeTime": "2020-09-28 Mon 13:05:10 CST"
		}
	],
	"OfflineCount": 1, //Keeper not online
	"OfflineKeepers": [
		{
			"Address": "0x91b90d08aaE86F87648cF6B497918D487A5C19Ef",
			"Online": false,
			"PledgeMoney": "10000000.00 Gwei",
			"PledgeTime": "2020-09-28 Mon 12:54:27 CST"
		}
	]
```
**View Provider nodes in the network**

Show all Provider account addresses registered on the chain:

```shell
mefs-provider list providers
```

### > As a keeper

#### Start up

**initialization**

Mefs initialization, the default initialized directory is \$HOME/.mefs, you can set the initialized directory by export MEFS_PATH=<local dir>, and then run init.

```shell
> mefs-keeper init --netKey=<net key> --sk=<your private key> --pwd=<your password> --keyfile=<absolute path of your keyfile>
```

Parameter explanation:

- sk：private key address, if not specified, a new account will be created by default;
- pwd：password, the default password if not specified;
- keyfile: the full path of the keyfile file, if it is not specified, the default is to create a new keyfile;
- netKey: private network logo, now has dev and testnet; networks with the same logo can be interconnected, the default is dev.

**Modify the network transmission port**

The default is port 4001, if you need to change to <port num>, execute the following command;
Keeper requires that this <port num> can be directly accessed, or there is a port mapping on the external network machine.

```shell
// Execute before running daemon
mefs-keeper config --json Addresses.Swarm "[\"/ip4/0.0.0.0/tcp/<port num>\"]"
```

For example, change to port 4090:

```shell
// Execute before running daemon
mefs-keeper config --json Addresses.Swarm "[\"/ip4/0.0.0.0/tcp/4090\"]"
```

**Start instance**

```shell
> mefs-keeper daemon --netKey= <net key> --pwd=<your password> --sk=<your secretKey>
```

Parameter explanation:

- netKey: private network logo, now there are dev and testnet; networks with the same logo can be interconnected, the default is dev;
- pwd：password, the default password if not specified;
- sk：private key address, if not specified, it will be exported from the local private key file by default;

#### View node information

Through `mefs-keeper id`, you can view the node's network address (8M...), account address (0x...), public key, communication address, and version information.

```shell
mefs-keeper id <peerID> --pwd=<your password>
```

Parameter explanation:

> peerID：the ID of the node to be searched; the default is the local node;
> pwd：the password of the node is DefaultPassword by default, and the proxy node is empty by default;


Result output:

```shell
{
	"NetworkAddr": "8MJ5cAWfAP86cHmAcC3dxqzK41dh4a",
	"AccountAddr": "0x91b90d08aaE86F87648cF6B497918D487A5C19Ef",
	"PublicKey": "A6nefy7/FZbrrszX/itXdKmNTrFmkwMSYptFYwBjRVxz",
	"Addresses": [
		"/ip4/127.0.0.1/tcp/4001/p2p/8MJ5cAWfAP86cHmAcC3dxqzK41dh4a",
		"/ip4/172.26.133.70/tcp/4001/p2p/8MJ5cAWfAP86cHmAcC3dxqzK41dh4a",
		"/ip4/172.17.0.1/tcp/4001/p2p/8MJ5cAWfAP86cHmAcC3dxqzK41dh4a"
	],
	"AgentVersion": "go-mefs/v0.3.2/ddf22678"
}
```

#### Display information

Use `mefs-keeper info` to display information related to the keeper node.

**Show revenue**

mefs-keeper gains revenue by providing management services.

```shell
mefs-keeper info list_income
```
Output result:

```shell
manageIncome: 88155981.17 Gwei
posIncome: 0 Wei
```
manageIncome represents the income obtained through the management service, and posIncome represents the income obtained through the cold start management service.

**Show other node addresses**

In a storage service, the keeper signs a storage service contract with the user and the provider to jointly serve the user. The following commands can be used to query which users the keeper has signed a storage service contract with.

```shell
mefs-keeper info list_users
```

Output result:

```shell
8MJacEyv1Pf92d9k93uquFzPcnG5rH.fsID:8MG8vi4NGKmdrz3EuxAgrPatAk5LJ1 has keepers:8MH4Woxb2FkM5nFr86dHj21fLgEybi/8MJ5cAWfAP86cHmAcC3dxqzK41dh4a/8MK6qHvAfayLQy4d2684NTLAVLpQFk
8MJacEyv1Pf92d9k93uquFzPcnG5rH.fsID:8MG8vi4NGKmdrz3EuxAgrPatAk5LJ1 has providers:8MJJ58XHucLXfV5ej7GUXWhRDAHfim/8MGvZx9fireJe3McVXatDrim2CmNHJ/8MHdtmAtx5Q54So9MRWSSELorrZJdx/8MGXm9jEhY2JHAdpfbmbS4agqsJ2yM/8MKLYiSAFsdVxfj1PYNCQQjoG5Nwgm/8MH9yV7GZXhjYZeydVvZgEF3U7kxhN
```

This result shows that the keeper node and the user node (the network address is 8MJacEyv1Pf92d9k93uquFzPcnG5rH) have signed a storage service contract. 8MG8vi4NGKmdrz3EuxAgrPatAk5LJ1 represents the file system ID, which represents the storage service and is converted from the query contract address.

View the addresses of other keeper accounts that have signed a storage contract with the keeper node:

```shell
mefs-keeper info list_keepers
```

View the address of other provider accounts that have signed a storage contract with the keeper node:

```shell
mefs-keeper info list_providers
```

#### View network nodes

##### View Keeper nodes in the network

Show all the Keeper account addresses registered on the chain:

```shell
mefs-keeper list keepers
```

Output result:

```shell
"KeeperCount": 3,
	"PledgeMoney": "30000000.00 Gwei", //keeper pledge total amount
	"OnlineCount": 2,//number of online keepers
	"OnlineKepepers": [ //keeper online
		{
			"Address": "0x489799F06C6E70599e1Cc34d393394D59Cca1695",//account address
			"Online": true,
			"PledgeMoney": "10000000.00 Gwei",//pledge amount
			"PledgeTime": "2020-09-28 Mon 13:01:29 CST"//pledge time
		},
		{
			"Address": "0xdB04F60f4313fdCb75C51679ad25dE5D5e92a45B",
			"Online": true,
			"PledgeMoney": "10000000.00 Gwei",
			"PledgeTime": "2020-09-28 Mon 13:05:10 CST"
		}
	],
	"OfflineCount": 1, //keeper not online
	"OfflineKeepers": [
		{
			"Address": "0x91b90d08aaE86F87648cF6B497918D487A5C19Ef",
			"Online": false,
			"PledgeMoney": "10000000.00 Gwei",
			"PledgeTime": "2020-09-28 Mon 12:54:27 CST"
		}
	]
```
##### View Provider nodes in the network

Show all Provider's account addresses registered on the chain:

```shell
mefs-keeper list providers
```
