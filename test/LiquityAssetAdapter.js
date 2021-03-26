const ProtocolAdapter = artifacts.require('LiquityAssetAdapter');

contract.only('LiquityAssetAdapter', () => {
  const liqAddress = '';
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

  it('should return correct balances for liq', async () => {
    await protocolAdapterContract.methods['getBalance(address,address)'](liqAddress, testAddress)
      .call()
      .then((result) => {
        console.dir(result, { depth: null });
      });
  });
});
