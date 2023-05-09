const Web3 = require('web3');
const web3 = new Web3('http://localhost:7545');
const contractAddress = "0x57A06bcBac57b052647663f12A6e1c6e4ED75674";
const contractAbi = [
    {
        constant: false,
        inputs: [[Object], [Object], [Object], [Object], [Object]],
        name: 'addDonor',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
        signature: '0x48803dbf'
    },
    {
        constant: true,
        inputs: [[Object]],
        name: 'getDonor',
        outputs: [[Object], [Object], [Object], [Object], [Object]],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0x96c59043'
    },
    {
        constant: false,
        inputs: [[Object], [Object], [Object], [Object], [Object], [Object]],
        name: 'addRecipient',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
        signature: '0xe96f2bea'
    },
    {
        constant: true,
        inputs: [[Object]],
        name: 'getRecipient',
        outputs: [[Object], [Object], [Object], [Object], [Object]],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0x62812a39'
    },
    {
        constant: true,
        inputs: [[Object]],
        name: 'getRecipientCount',
        outputs: [[Object]],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0xb02d6cf6'
    },
    {
        constant: true,
        inputs: [[Object], [Object]],
        name: 'getRecipientDetail',
        outputs: [[Object], [Object], [Object], [Object]],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0x681bc108'
    },
    {
        constant: true,
        inputs: [[Object]],
        name: 'isMatchFound',
        outputs: [[Object]],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0xc39aeabc'
    },
    {
        constant: true,
        inputs: [[Object]],
        name: 'getMatchedDonor',
        outputs: [[Object]],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0x784c413d'
    },
    {
        constant: true,
        inputs: [[Object]],
        name: 'getEMR',
        outputs: [[Object]],
        payable: false,
        stateMutability: 'view',
        type: 'function',
        signature: '0x1164de0e'
    },
    {
        constant: false,
        inputs: [[Object]],
        name: 'transplantMatch',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
        signature: '0xf3f7bb52'
    }
];

const contract = new web3.eth.Contract(contractAbi, contractAddress);

export default contract;
