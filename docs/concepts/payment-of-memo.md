# Payment of Memo

&nbsp; 

## The Payment of Memo System

#### The Payment Process of Memo System

Payment is an important link in the Memo system and the biggest motivation for Providers and Keepers to actively participate in the work of the system. It is precisely because of the existence of payment that Keepers is responsible for regularly challenging Providers, and Providers will actively cooperate with Keepers' challenges and the responses of Users.

&nbsp;

#### Time and space payment

In the Memo system, how is the fee that the User needs to pay is calculated?

The payment fee for a single Provider (MoneyProvider) is determined by the three parameters of storage unit price , storage duration , and storage space .

Keepers are responsible for verifying whether Providers store data completely. According to the challenge result, it can be concluded that how much and how long each Provider has effectively stored data for User during this period. The consensus on cost calculation is as follows:

The percentage coefficient in this formula is 90%, and the remaining 10% is allocated to the middle managers( Keepers )who participate in the challenge. This percentage is determined by the specific conditions of the system, but once determined, it applies to all nodes in the system.

The User deploys a contract for storing payment, using the contract's characteristics of saving assets and transferring funds, and realizes a payment scheme that does not depend on the trust of a specific third party.The main content is that the User determines the payment object and payment trigger conditions in the contract, and transfers a sufficient amount to the contract.Once the conditions for triggering payment are reached, the contract will automatically transfer the specified amount to the designated account to realize the storage payment. The advantage of this is that there is no need to rely on a specific institution, and the payment behavior is fully regulated and automated in advance.

Keeper can use this storage payment contract to find storage nodes that need to be challenged.The User can also use this contract to find out which nodes his data is stored on, so as to obtain the data, which is conducive to system data retrieval, and there is no load imbalance and performance bottleneck problems.

&nbsp;

#### Delayed payment and partial payment

In the Memo system, the User's payment to Provider and Keeper is not paid in real time or paid in advance, but delayed.The original intention of this design is to protect the end User.Therefore, for the User, delaying payment for Keepers and Providers for a period of time can prompt Keepers and Providers to serve the User in good faith in accordance with the contract.Because if the User pays in advance, the Provider may damage the data before the storage service expires or no longer respond to the Keeper challenge, then it will bring losses to the User, so delayed payment is actually a protective measure for the User.

In addition, the fee is not paid in one time, but is paid at regular intervals.For example, the storage period is one year. Instead of paying for the entire year at a time, it is divided into many small cycles to complete. This is mainly due to the consideration of providing a better user experience for the Provider.

For example, if a Provider starts to store data for User from 10:00 on February 6, 2021, it should be stored for User for one month as required by the contract, and payment will be triggered every one day.Keeper needs to trigger the spatio-temporal payment at 10:00 on the 7th of the current month. It is necessary to record that the start time of the payment is 10:00 on April 6, 2021, and the deadline is 10:00 on April 7, 2020. It is usually one day.

The current plan is to determine a time interval cycle, as shown in the figure, record the amount that User needs to pay in each cycle, and delay 3 cycles before paying.When the storage service expires, the contract will transfer all accumulated unpaid cycle amounts to Keepers and Providers.The Provider does not need to worry about the User transferring the funds in the contract in advance, because the operation power of the contract funds is in the control of all the Keepers in the service.

&nbsp;

#### Trigger payment-verification passed

As mentioned above, the role of deploying the payment contract is the User, but it is not the User that triggers the payment contract, but the Keeper.The reason why the spatiotemporal payment is triggered by the Keeper instead of the User or Provider is that:As a user of storage space, if User triggers payment, User may not trigger on time or even actively trigger;As a storage space provider, Provider may falsify data multiple times to trigger payment functions, thereby making profits.Let Keeper trigger the payment, which is also a check and balance measure of the system design.

So when the conditions are met, the Keeper will trigger the payment? Here is the verification of the following aspects:

1. Verify whether the payment object is the storage node Provider and management node Keeper in this storage service;

2. Verify whether the paid amount is consistent with the result of the Keeper challenge;

3. Verify whether the start time of the payment is equal to the cut-off time of the last payment.

Specific verification method:

Keepers regularly challenge a certain Provider. After a period of time, a merkle tree root is generated based on all the challenge results, which is recorded as merkle_Root.And record the number of times each Keeper participated in the challenge during this time in the array, which is recorded as share.

Each Keeper reached a consensus on the challenge result and obtained the amount of data and storage duration normally stored by the Provider during this period.According to this space-time value, after calculating the payment fee, each Keeper signs the Upkeeping contract address, the Provider address, the challenge result, the stStart and stLength related to the delayed payment, the share array, and the merkle_Root in turn.And select a master Keeper, and the master Keeper triggers the time-space payment method in the contract.The reason for signing this information is to ensure that the spatiotemporal payment is for the correct storage service, and the payment object is indeed the Provider node in the storage service.Secondly, this information can help to audit the time and space payment in the future.

The spatio-temporal payment function verifies the signature in turn, verifies whether the payment amount is consistent with that contained in the Keeper signature, and whether the initial time of payment is equal to the deadline of the last payment.That is, is stStartnow equal to stStartlast plus stLengthlast.If the information is consistent, then the spatio-temporal payment function can be executed. This can ensure that the payment amount, payment object, payment storage time and storage space are correct.Even if the Keeper is given the power to trigger the time and space payment, the Keeper is also subject to other Keepers, thus eliminating the possibility of a single Keeper doing evil.

#### Download payment

User's payment to Provider, in addition to the storage fee payment mentioned above, will also involve download payment. Because the download operation will cause the Provider to consume traffic, and it will also increase the power cost and machine consumption.

However, unlike the storage service triggered by Keeper, the download payment is triggered by the Provider.

Smart contracts run through the Memo system.For downloading issues, the system designs a Channel contract.This contract can solve the characteristics of receiving value, saving value, and sending value to solve the problem of decentralized and reliable payment.The payment channel does not need to go through the intermediate manager Keeper, so the cost is lower, and the payment amount is only calculated based on the amount of data downloaded.The Channel contract records the addresses of the User and Provider, and also needs to record the start time and validity period of the contract.The Provider can trigger the payment contract accordingly, but the User can destroy the contract based on whether the contract has expired.

Unlike the delayed payment for storage services, the payment for downloads is real-time.However, the user needs to transfer funds for download payment to the Channel contract in advance, and the Provider can check whether the amount is sufficient.The initial value of the payment amount recorded by the two parties in the transaction is 0. Whenever the User downloads data from the Provider, the two parties in the transaction increase the payment amount according to the amount of data downloaded.The User signs the payment amount and sends it to the Provider. The Provider verifies whether the payment amount contained in the signature information is correct, and if it is correct, it authorizes the User to download data from this node.The Provider triggers the ReadPay function of the Channel contract with the signature information.After the function verifies that the signature information is correct, the payment amount contained in the signature information will be transferred from the contract funds to the Provider.

The user can also trigger the CloseChannel function of the Channel contract after the transaction expires to return the remaining funds in the contract to himself.

The practice of triggering the contract function only once to realize payment management can reduce the burden on the chain and the network.
