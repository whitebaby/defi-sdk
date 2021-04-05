const ProtocolAdapter = artifacts.require('LiquityAssetAdapter');

contract.only('LiquityAssetAdapter', () => {
  const liqAddress = '0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D';
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

  it('should return correct balances for liq', async () => {
    await protocolAdapterContract.methods['getBalance(address,address)'](liqAddress, testAddress)
      .call()
      .then((result) => {
        console.dir(result, { depth: null });
      });
  });
});
