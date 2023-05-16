# Provider

&nbsp;

### What is the pos of the provider?

The pos function is used for cold start. When the provider just joins the network, the amount of stored data is small.
Pos generates local data according to the size of the mortgage space, and responds to the keeper challenge;
When the provider receives the actual user data, it will gradually delete the pos data;
The difference between pos data and actual user data is that the price of pos data is 1/10 of the default price, and the pos data will not be repaired.

&nbsp;

### How does the provider modify its price?

When the provider is started, it resets its price parameters and sets rdo to true to update its storage price.

&nbsp;

### How does the provider set up its own master keeper?

When the provider is running, it can set its own master keeper through mefs contract addMasterKeeper 0x...; The main keeper will give priority to providing its own provider and trigger the time and space payment in the upkeeping contract.
