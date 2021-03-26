const ProtocolAdapter = artifacts.require('LiquityDebtAdapter');

contract.only('LiquityDebtAdapter', () => {
  const lusdAddress = '';
  const testAddress = '';

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
