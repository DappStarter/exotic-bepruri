require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy raise noise atom install nation equal gift'; 
let testAccounts = [
"0xf02e746e05bccd02ba61f7fb116e010182a7fef87bdb8f449a8f43dcbd9cf382",
"0xb2054ff2d1f8a1e94bd7c87b1234c116cbae612f8aa7529b83786f27593f293a",
"0x603d8671a06acc5ae59dbd412aae4d2c496f44d7acd71344072959c8635aba88",
"0xe579197620af28d020f88226c30f2b26525ecfc0b1a31df9bceceaf9fb672d93",
"0x03256dfc8ed9b31677b8af3854a4ed1bbadf85bb42304989ee17e8ef2bbfc826",
"0x3ec46485ed90ffaf4e45bc458a6f00e5b03a33dff5b9e3ca56c9fe21a575be26",
"0x235a1938dedf9fd624b535677b3f7c1f9d7ea649a515db2d1bff565c060d1053",
"0x9da115bf254cd3df0dc711a95a5e2f68893ded6b03c67887be23571ddebaf346",
"0x24e832609d752d8bfa55943b1187eb11ad8a27c2d718c187a8aaaf6d373e1692",
"0xa8db93de17aef68f6a45e15591269fbc25653867afb1b9fa88278fede7ecc726"
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
            version: '^0.5.11'
        }
    }
};
