const crypto = require('crypto');
const elliptic = require('elliptic');
const { keccak256 } = require('ethereumjs-util');

function generateRandomAddress() {
    const privateKey = crypto.randomBytes(32).toString('hex');
    const ec = new elliptic.ec('secp256k1');
    const publicKey = '0x' + ec.keyFromPrivate(privateKey).getPublic('hex').slice(2);
    const address = '0x' + keccak256(publicKey).slice(-20).toString('hex');
    return address;
}

module.exports = generateRandomAddress;