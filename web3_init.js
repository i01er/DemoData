var Web3 = require('web3');
// set the provider of web3
if (typeof web3 !== 'undefined') { 
    console.log(web3.currentProvider);
    web3 = new Web3(web3.currentProvider);
    console.log("Using MetaMask");
} else {
    console.log("No currentProvider for web3");
}