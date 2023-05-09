// import IPFSHTTPClient from 'ipfs-http-client';


// const projectId = '2PK7F0SbiAD5xMJHpDZD79POJRs';
// const projectSecret = '6619708d9ba860276cd66dbf95c62a7c';
// const auth = 'Basic' + Buffer.from(projectId + ';' + projectSecret).toString('base64');
// const client = IPFSHTTPClient({
//     host: 'ipfs.infura.io',
//     port: 5001,
//     protocol: 'http',
//     headers: {
//         authorization: auth
//     }
// })


// const ip = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
// client.add("Hello World").then((res) => {

//     console.log(res);
// });


// export default ip;


// import ipfsAPI from 'ipfs-api';

// // connect to ipfs daemon API server
// var ipfs = ipfsAPI('localhost', '5001', { protocol: 'http' });

// export default ipfs;



import { globSource, create } from 'ipfs-http-client';


const projectId = '2PK7F0SbiAD5xMJHpDZD79POJRs';
const projectSecret = '6619708d9ba860276cd66dbf95c62a7c';
async function addFile() {
    const auth =
        'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

    const client = await create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
            authorization: auth
        }
    })
    for await (const file of client.addAll(globSource("./docs", "**/*"))) {
        console.log(file)
    }
}


addFile()