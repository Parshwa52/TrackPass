const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const xyz = require('./build/TrackPassenger.json');

const provider = new HDWalletProvider(
'much crack end stable laugh marble enhance mesh car company town arctic',
'https://rinkeby.infura.io/v3/dfde1e2bb8c542ee884246a9fa1925c4'
//'https://ropsten.infura.io/v3/1bb8742f622d46aa931a3e9aab0d5159'
);

const web3 = new Web3(provider);

const deploy = async() => {
   const accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy the contract
  const result = await new web3.eth.Contract(JSON.parse(xyz.interface))
    .deploy({ data: xyz.bytecode})
    .send({ from:accounts[0], gas:'1000000' });//,arguments:[''] can be used if to pass a constructor value
    console.log(result.options.address);
};

deploy();
