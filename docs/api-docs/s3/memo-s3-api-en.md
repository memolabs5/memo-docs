# MEMO S3 API

## Start Node and Gateway

If you are under Windows, you can directly [use the Windows installation package to complete the installation](https://docs.memolabs.org/memo/before-begin/in-windows-os), and the program will automatically start the node and gateway after running the start icon. The account and password of the gateway are recorded in the `account.txt` file in the root directory of the node, the default account is the node wallet address, the default password is `memoriae`, and the default gateway API port is 5080.

If you want to deploy the startup node manually, multiple methods for deploying the startup node are shown in the [Startup Document](https://docs.memolabs.org/memo/start-nodes-in-linux/user/how-to-start/step-by-step) of the MEMO.

If you want to start the gateway manually from the command line, start the gateway with the following command, using the default parameters:

```sh
mefs-user gateway run 
```

You can also manually specify parameters such as account, password, and endpoint at startup, and the startup parameters are described:

```sh
## Windows
C:\memouser\batch>mefs-user.exe gateway run -h
NAME:
   mefs-user gateway run - run a memo gateway

USAGE:
   mefs-user gateway run [command options] [arguments...]

OPTIONS:
   --username value, -n value  input your user name (default: "memo")
   --password value, -p value  input your password (default: "memoriae")
   --endpoint value, -e value  input your endpoint (default: "0.0.0.0:5080")
   --console value, -c value   input your console for browser (default: "8080")
   --help, -h                  show help (default: false)
```

## S3 API Lists

The S3-compatible APIs currently supported by MEMO include:

| About Bucket             | About Object    |
| ------------------------ | --------------- |
| `MakeBucketWithLocation` | `ListObjects`   |
| `GetBucketInfo`          | `GetObject`     |
| `ListBuckets`            | `GetObjectInfo` |
|                          | `PutObject`     |
|                          | `DeleteObject`  |

## The Interface for Operating Buckets

### Create a Bucket

MakeBucketWithLocation(ctx context.Context, bucket string) error

| parameter | type      | description    |
| --------- | --------- | -------------- |
| `ctx`     | *Context* | client context |
| `bucket`  | *string*  | bucket name    |

for example:

```go
// create client
func NewMemofs() (*MemoFs, error) {
    repoDir := os.Getenv("MEFS_PATH")
    addr, headers, err := mclient.GetMemoClientInfo(repoDir)
    if err != nil {
        return nil, err
    }
    napi, closer, err := mclient.NewUserNode(context.Background(), addr, headers)
    if err != nil {
        return nil, err
    }
    defer closer()
    _, err = napi.ShowStorage(context.Background())
    if err != nil {
        return nil, err
    }

    return &MemoFs{
        addr:    addr,
        headers: headers,
    }, nil
}
```

```go
err = memofs.MakeBucketWithLocation(ctx, "myBucket")
if err != nil {
    fmt.Println(err)
    return
}
fmt.Println("Successfully created mybucket.")
```

### Get the Details of the Bucket

GetBucketInfo(ctx context.Context, bucket string) (bi BucketInfo, err error)

| parameter | type      | description    |
| --------- | --------- | -------------- |
| `ctx`     | *Context* | client context |
| `bucket`  | *string*  | bucket name    |

| return value | type         | description           |
| ------------ | ------------ | --------------------- |
| `bi`         | *BucketInfo* | details of the bucket |
| `err`        | *error*      | error information     |

```go
type BucketInfo struct {
    pb.BucketOption
    pb.BucketInfo
    Confirmed bool `json:"Confirmed"`
}
```

```go
type BucketOption struct {
    Version              uint32   `protobuf:"varint,1,opt,name=Version,json=version,proto3" json:"Version,omitempty"`
    Policy               uint32   `protobuf:"varint,2,opt,name=Policy,json=policy,proto3" json:"Policy,omitempty"`
    DataCount            uint32   `protobuf:"varint,3,opt,name=DataCount,json=dataCount,proto3" json:"DataCount,omitempty"`
    ParityCount          uint32   `protobuf:"varint,4,opt,name=ParityCount,json=parityCount,proto3" json:"ParityCount,omitempty"`
    TagFlag              uint32   `protobuf:"varint,5,opt,name=TagFlag,json=tagFlag,proto3" json:"TagFlag,omitempty"`
    SegSize              uint32   `protobuf:"varint,6,opt,name=SegSize,json=segSize,proto3" json:"SegSize,omitempty"`
    XXX_NoUnkeyedLiteral struct{} `json:"-"`
    XXX_unrecognized     []byte   `json:"-"`
    XXX_sizecache        int32    `json:"-"`
}
```

```go
type BucketInfo struct {
    BucketID             uint64   `protobuf:"varint,1,opt,name=BucketID,json=bucketID,proto3" json:"BucketID,omitempty"`
    CTime                int64    `protobuf:"varint,2,opt,name=CTime,json=cTime,proto3" json:"CTime,omitempty"`
    MTime                int64    `protobuf:"varint,3,opt,name=MTime,json=mTime,proto3" json:"MTime,omitempty"`
    Length               uint64   `protobuf:"varint,4,opt,name=Length,json=length,proto3" json:"Length,omitempty"`
    UsedBytes            uint64   `protobuf:"varint,5,opt,name=UsedBytes,json=usedBytes,proto3" json:"UsedBytes,omitempty"`
    NextObjectID         uint64   `protobuf:"varint,6,opt,name=NextObjectID,json=nextObjectID,proto3" json:"NextObjectID,omitempty"`
    NextOpID             uint64   `protobuf:"varint,7,opt,name=NextOpID,json=nextOpID,proto3" json:"NextOpID,omitempty"`
    Deletion             bool     `protobuf:"varint,8,opt,name=Deletion,json=deletion,proto3" json:"Deletion,omitempty"`
    Name                 string   `protobuf:"bytes,9,opt,name=Name,json=name,proto3" json:"Name,omitempty"`
    Root                 []byte   `protobuf:"bytes,10,opt,name=Root,json=root,proto3" json:"Root,omitempty"`
    XXX_NoUnkeyedLiteral struct{} `json:"-"`
    XXX_unrecognized     []byte   `json:"-"`
    XXX_sizecache        int32    `json:"-"`
}
```

for example:

```go
bucketInfo, err := memoFs.GetBucketInfo(ctx, "myBucket")
if err != nil {
    fmt.Println(err)
    return err
}
fmt.Println(bucketInfo)
```

### List All Buckets of User

ListBuckets(ctx context.Context) (bs []BucketInfo, err error)

| return value | type           | description                     |
| ------------ | -------------- | ------------------------------- |
| `bs`         | *[]BucketInfo* | information list of all buckets |
| `err`        | *error*        | error information               |

for example:

```go
buckets, err := memoFs.ListBuckets(ctx)
if err != nil {
    fmt.Println(err)
    return
}
for _, bucket := range buckets {
    fmt.Println(bucket)
} 
```

## The Interface for Operating Objects

### List all Objects in Bucket

ListObjects(ctx context.Context, bucket, prefix, marker, delimiter string, maxKeys int) (objsInfo ListObjectsInfo, err error)

All matching objects can be listed based on the specified filter criteria.

| parameter   | type      | description                                                                                                                                                                                                   |
| ----------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ctx`       | *Context* | client context                                                                                                                                                                                                |
| `bucket`    | *string*  | bucket name                                                                                                                                                                                                   |
| `prefix`    | *string*  | object matching prefix, which is used to limit the response to matching only objects with the prefix in the key, which is not required, `nil` by default                                                      |
| `marker`    | *string*  | the key tag of the starting object, which is not required, `nil` by default and starting from the first object, the enumeration starts with the next object at the matching position when specifying 'marker' |
| `delimiter` | *string*  | object name seperator, only supports '/' and ''                                                                                                                                                               |
| `maxKeys`   | *int*     | specify the maximum number of entries returned in a single `ListObjects` request, the default value is 1000                                                                                                   |

| return value | type              | description       |
| ------------ | ----------------- | ----------------- |
| `objsInfo`   | *ListObjectsInfo* | objects list      |
| `err`        | *error*           | error information |

```go
type ListObjectsInfo struct {
    IsTruncated bool
    NextMarker string
    Objects []ObjectInfo
    Prefixes []string
}
```

for example:

```go
objectsInfo, err := memoFs.ListObjects(ctx, "myBucket", "", "", "",1000)
if err != nil {
    fmt.Println(err)
    return
}
for _, object := range objectsInfo.Objects {
    fmt.Println(object)
}
```

### Get Object

GetObject(ctx context.Context, bucketName, objectName string, startOffset, length int64, writer io.Writer) error

Return the data stream for an object.

| parameter     | type     | description                                                                                                                |
| ------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| `ctx`         | Context  | client context                                                                                                             |
| `bucketName`  | *string* | bucket name                                                                                                                |
| `objectName`  | *string* | object name                                                                                                                |
| `startOffset` | *int64*  | specify the number of segments of the object to get, not required, the default is 0, which means to get from the beginning |
| `length`      | *int64*  | specify the length to get, not required, default is the total length of the object                                         |
| `writer`      | *Writer* | any Go type of io.Writer, which is used to return the data stream of the object                                            |

for example:

```go
buffer := bytes.NewBuffer(nil)
err := memoFs.GetObject(ctx, "myBucket", "myFile", 0, 33, buffer)
if err != nil {
    fmt.Println(err)
    return 
} 
```

### Get Object Information

GetObjectInfo(ctx context.Context, bucket, object string) (objInfo ObjectInfo, err error)

| parameter | type      | description    |
| --------- | --------- | -------------- |
| `ctx`     | *Context* | client context |
| `bucket`  | *string*  | bucket name    |
| `object`  | *string*  | object name    |

| return value | type       | description                  |
| ------------ | ---------- | ---------------------------- |
| objInfo      | ObjectInfo | struct of object information |
| err          | error      | error information            |

```go
type ObjectInfo struct {
    pb.ObjectInfo
    Parts       []*pb.ObjectPartInfo `json:"Parts"`
    Size        uint64               `json:"Size"`        // file size(sum of part.RawLength)
    StoredBytes uint64               `json:"StoredBytes"` // stored size(sum of part.Length)
    Mtime       int64                `json:"Mtime"`
    State       string               `json:"State"`
    ETag        []byte               `json:"MD5"`
}
```

for example:

```go
objInfo, err := memoFs.GetObjectInfo(ctx, "myBucket", "myFile")
if err != nil {
    fmt.Println(err)
    return
}
fmt.Println(objInfo.Size) 
```

### Upload Object

PutObject(ctx context.Context, bucket, object string, r io.Reader, userDefined map[string]string) (objInfo ObjectInfo, err error)

Split the object to be uploaded into multiple stripes, one stripe at a time.

| parameter     | type                | description                                                                                                                                                                                                                                      |
| ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ctx`         | *Context*           | client context                                                                                                                                                                                                                                   |
| `bucket`      | *string*            | bucket name                                                                                                                                                                                                                                      |
| `object`      | *string*            | object name                                                                                                                                                                                                                                      |
| `reader`      | *io.Reader*         | the Go type of io.Reader, which is used to read data and upload it                                                                                                                                                                               |
| `userDefined` | *map[string]string* | it is used to set the encryption method and 'etag' format of the uploaded object, default `AES` encryption, and can also be set to empty to indicate no encryption; by default, 'etag' is generated in `md5` format and can also be set to `cid` |

| return value | type         | description                                                                      |
| ------------ | ------------ | -------------------------------------------------------------------------------- |
| `objInfo`    | *ObjectInfo* | return the details of the uploaded object, including size, time, etag, and so on |
| `err`        | *error*      | error information                                                                |

for example:

```go
file, err := os.Open("my-testfile")
if err != nil {
    fmt.Println(err)
    return
}
defer file.Close()

fileStat, err := file.Stat()
if err != nil {
    fmt.Println(err)
    return
}
userDefined := make(map[string]string)
userDefined["encryption"] = "aes"
objInfo, err := memoFs.PutObject(ctx, "mybucket", "myobject", file, userDefined)
if err != nil {
    fmt.Println(err)
    return
}
fmt.Println("Successfully uploaded bytes: ", objInfo.Size)
```

### Delete Object

DeleteObject(ctx context.Context, bucket, object string) error

Mark an object as deleted and users will not be able to expose and get the object.

| parameter | type      | description    |
| --------- | --------- | -------------- |
| `ctx`     | *Context* | client context |
| `bucket`  | *string*  | bucket name    |
| `object`  | *string*  | object name    |

for example

```go
err := memoFs.DeleteObject(ctx, "myBucket", "myFile")
if err != nil {
    fmt.Println(err)
    return
}
err = memoFs.GetObject(ctx, "myBucket", "myFile", 0, 33, buffer)
fmt.Println(err) // "myFile" has been deleted
```
