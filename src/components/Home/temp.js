const crypto = require('crypto');

function generateRandomIPFSHash() {
    const randomString = crypto.randomBytes(32).toString('hex');
    const ipfsHash = 'Qm' + randomString;
    console.log(ipfsHash);
}

generateRandomIPFSHash();