const TokenAdapter = artifacts.require('GenesisGroupTokenAdapter');

contract.only('GenesisGroupTokenAdapter', () => {
  const fgenAddress = '0xBFfB152b9392e38CdDc275D818a3Db7FE364596b';
  const feiAddress = '0x956F47F50A910163D8BF957Cf5846D573E7f87CA';
  const tribeAddress = '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B';

  let accounts;
  let tokenAdapter;
  const fgen = [
    fgenAddress,
    'Fei Genesis Group',
    'FGEN',
    '18',
  ];

  beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    await TokenAdapter.new({ from: accounts[0] })
      .then((result) => {
        tokenAdapter = result.contract;
      });
  });

  it('should return correct components', async () => {
    await tokenAdapter.methods['getComponents(address)'](fgenAddress)
      .call()
      .then((result) => {
        assert.equal(result[0][0], feiAddress);
        assert.equal(result[1][0], tribeAddress);
      });
  });

  it('should return correct metadata', async () => {
    await tokenAdapter.methods['getMetadata(address)'](fgenAddress)
      .call()
      .then((result) => {
        assert.deepEqual(result, fgen);
      });
  });
});
