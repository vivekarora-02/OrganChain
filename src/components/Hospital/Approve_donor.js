import React, { Component } from 'react';
import { Grid, Form, Segment, Header, Button, Divider, Message } from 'semantic-ui-react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import Hospital_nav from './Hospital_nav';
//import ipfs from '../../ipfs';
import web3 from '../../ethereum/web3';
import OrganChain from '../../ethereum/OrganD';

class ApproveDonor extends Component {
    state = {
        fname: '',
        lname: '',
        email: '',
        donorId: '',
        buffer: null,
        ipfsHash: '',
        EMRHash: '',
        loading: false,
        errMsg: '',
        successMsg: ''
    }


    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    captureFile = event => {
        const file = event.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
            this.setState({ buffer: Buffer(reader.result) });
        }
    }

    onApprove = (event) => {
        event.preventDefault();

        this.setState({ errMsg: '', successMsg: '' });

        const { fname, lname, email, buffer, donorId } = this.state;

        axios.get(`http://localhost:5002/api/donors/${email}`)
            .then(async (res) => {

                this.setState({ loading: true });

                const { gender, city, phone, email, organ, bloodgroup } = res.data;

                const data = JSON.stringify({ fname, lname, gender, city, phone, email });
                console.log(data);
                const buf = Buffer.from(data);

                // const result = await ipfs.files.add(buf);
                // this.setState({ ipfsHash: result[0].hash });
                // console.log(this.state.ipfsHash);

                // const result1 = await ipfs.files.add(buffer);
                // this.setState({ EMRHash: result1[0].hash });
                // console.log(this.state.EMRHash);

                try {
                    const accounts = await web3.eth.getAccounts();
                    await OrganChain.methods.addDonor(donorId, this.state.ipfsHash, this.state.EMRHash, organ, bloodgroup).send({
                        from: accounts[0],
                        gas: 1000000
                    });
                    this.setState({ successMsg: "Donor Approved !" })
                }
                catch (err) {
                    this.setState({ errMsg: err.message })
                }
                this.setState({ loading: false });
            })
            .catch(err => this.setState({ errMsg: err.message }));
    }



    render() {
        return (
            <>
                <Hospital_nav />
                <Grid centered columns={2} style={{ marginTop: '20px' }}>
                    <Grid.Column width={6}>
                        <Segment>
                            <Header as="h3" color="grey" style={{ textAlign: "center" }}>
                                Approve Donor
                            </Header>
                            <Divider />
                            <Form onSubmit={this.onApprove} error={!!this.state.errMsg}>
                                <Form.Input
                                    value={this.state.fname}
                                    onChange={this.onChange}
                                    name="fname"
                                    label='First Name'
                                    placeholder='First Name'
                                    required
                                />
                                <Form.Input
                                    value={this.state.lname}
                                    onChange={this.onChange}
                                    name="lname"
                                    label='Last Name'
                                    placeholder='Last Name'
                                    required
                                />
                                <Form.Input
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    name="email"
                                    label='Email'
                                    placeholder='Email'
                                    type="email"
                                    required
                                />
                                <Form.Input
                                    value={this.state.donorId}
                                    onChange={this.onChange}
                                    name="donorId"
                                    label='Donor Public Key'
                                    placeholder='Donor Public Key'
                                    required
                                />
                                <Form.Input
                                    onChange={this.captureFile}
                                    name="EMR"
                                    label="EMR"
                                    type="file"
                                    required
                                />
                                {
                                    this.state.errMsg && this.state.errMsg === "Donor Approved !" ?
                                        <Message success header="Sucess" content={this.state.successMsg} /> : <Message error header="Oops!!" content={this.state.errMsg} />
                                }
                                <Segment basic textAlign={"center"}>
                                    <Button loading={this.state.loading} positive type='submit'>Approve</Button>
                                </Segment>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </>
        )
    }
}

export default ApproveDonor;