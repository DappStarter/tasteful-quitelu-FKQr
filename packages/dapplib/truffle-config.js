require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remind concert harvest permit force two'; 
let testAccounts = [
"0x1933b68e6ac0ac341b3733aeb7791e3d546b5cfb7402a4bf675997c3a5ce28be",
"0x0b55a3b383f77976c56771ed8e17e25bc1553b9f1ab39123340d7c68faa7ea5f",
"0xf65bcf1bc34d13945081c03d0c90e95f70d7e84f2d2e41a2000a0620f80df01b",
"0x98007292cd4f817d4fac8a829887366d78af44e9135dd6552555d66d62bff26b",
"0x4e21964a9a91911384ce51ff10262e1e1defea5f498d7dfd098d613d892bc8d4",
"0x402ec59f4deeead396d3745b92d3299a6520a771098648e5c1f01666df54548f",
"0x2351f8e53d2dd6a1e07282c96652e633775a038c552ee95bd6cdb2757f33e0f0",
"0x5027efe5b06ecf79568a1fafc5596e76dccb1ed83e498dc8060a9eaf5a27f358",
"0xfd7ed42684a4355863cde91043337234586015bdd500f74fe2ad7ede0ba5bc8a",
"0xace37c86e4d1099772234e4bd2e7d3d04968d318097aae7a7acfcc14c7586391"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

