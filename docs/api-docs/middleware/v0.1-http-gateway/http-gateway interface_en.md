# Http-Gateway Interface

## Upload Object

putobject
method: put
url: [http://0.0.0.0:5080/{bucketname}/{objectname}/](http://0.0.0.0:5080/%7Bbucketname%7D/%7Bobjectname%7D/)

x-amz-meta-sign: the signature of the wallet address to the MD5 value of the uploaded file
x-amz-meta-date: storage time, uint `seconds`

return
status 200

![upload](./put.png)

![upload2](./putRes.png)

## Download Object

getobject
method: get
url: [http://0.0.0.0:5080/{bucketname}/{objectname}](http://0.0.0.0:5080/%7Bbucketname%7D/%7Bobjectname%7D)

return
status 200

![download](./download.png)

## Query Price

QueryPrice
method: get
url: [http://0.0.0.0:5080/?queryprice=""&bucket={bucketname}&ssize={filesize}&stime=](http://0.0.0.0:5080/?queryprice=""&bucket=%7Bbucketname%7D&ssize=%7Bfilesize%7D&stime=)(storagetime}

return 
status 200
price

![queryPrice](./queryPrice.png)

## Query Balance

GetBalanceInfo
method: get
url: [http://0.0.0.0:5080/{bucketname}/?getbalance=""](http://0.0.0.0:5080/%7Bbucketname%7D/?getbalance="")

return 
status 200
balance

![queryBal](./queryBal.png)

## Approve

Approve
method: get
url: [http://0.0.0.0:5080/?approve=""&ts={$transaction}&faddr={$walletaddress}](http://0.0.0.0:5080/?approve=""&ts=%7B$transaction%7D&faddr=%7B$walletaddress%7D)

faddr： the sender address
ts： the hash of 'approve' transaction

return 
status 200

![approve](./approve.png)

## List Object

Listobject
method: get
url: [http://0.0.0.0:5080/{bucketname}?list-type=2&encoding-type=url&delimiter=/&fetch-owner=true](http://0.0.0.0:5080/%7Bbucketname%7D?list-type=2&encoding-type=url&delimiter=/&fetch-owner=true)

![list](./list.png)
