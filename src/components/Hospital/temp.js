import Web3 from "web3";


if (typeof window.ethereum !== 'undefined') {
    // Request the user's permission to connect to MetaMask
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Use MetaMask as the web3 provider
    web3 = new Web3(window.ethereum);

    // Get the user's account
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    // await OrganChain.methods.addRecipient(encodedAddress, encodedAddress1, this.state.ipfsHash, this.state.EMRHash, organ, bloodgroup).send({
    //     from: accounts[0],
    //     gas: 1000000
    // });
    // this.setState({ successMsg: "Repient Registered Successfully!" })

    // Use the account for your contract interactions
    // ...
} else {
    // MetaMask is not installed, show an error message
    console.log("attach metamask");

} //