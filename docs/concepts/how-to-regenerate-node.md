# How to regenerate a node

> Missing Keystore file

You must know the private key address, private key and the password when generating the account.

Take 0a95533a110ee10bdaa902fed92e56f3f7709a532e22b597 ****** private key as an example:

```shell
## Enter the user or provider

export MEFS_PATH=/root/1/.mefs

mefs-user init --sk=0a95533a110ee10bdaa902fed92e56f3f7709a532e22b597******* --pwd=xxx

export MEFS_PATH=/root/.mefs
```
