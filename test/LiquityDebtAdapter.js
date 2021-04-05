const ProtocolAdapter = artifacts.require('LiquityDebtAdapter');

contract.only('LiquityDebtAdapter', () => {
  const lusdAddress = '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0';
  const testAddress = '0x42b9dF65B219B3dD36FF330A4dD8f327A6Ada990';

  let accounts;
  let protocolAdapterContract;

  beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    await ProtocolAdapter.new({ from: accounts[0] })
      .then((result) => {
        protocolAdapterContract = result.contract;
      });
  });

  it('should return correct balances for lusd', async () => {
    await protocolAdapterContract.methods['getBalance(address,address)'](lusdAddress, testAddress)
      .call()
      .then((result) => {
        console.dir(result, { depth: null });
      });
  });
});
