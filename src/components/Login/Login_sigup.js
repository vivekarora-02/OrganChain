import "./styles.css";
import Front from "../front/Front";
import Top2 from "../Navbar/Top2";
import React, { Component } from 'react';
import axios from 'axios';
import { Message } from "semantic-ui-react";

class DonorSignUp extends Component {
    state = {
        fname: '',
        lname: '',
        gender: 'Male',
        city: 'Gwalior',
        phone: '',
        email: '',
        bloodgroup: 'A+',
        organ: 'Eyes',
        errMsg: '',
        succMsg: '',
        pass: '',
    }

    onSubmit = event => {
        event.preventDefault();

        this.setState({ errMsg: '' });

        const { fname, lname, gender, city, phone, email, bloodgroup, organ, pass } = this.state;
        const donor = { fname, lname, gender, city, phone, email, bloodgroup, organ, pass };
        console.log(donor);
        axios.post("http://localhost:5002/api/donors/", donor)
            .then((res) => {

                this.setState({ succMsg: "Donor Added Successfully" });
            })
            .catch(err => this.setState({ errMsg: err.message }));

    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <>
                <Top2 />
                <div className="login">
                    <div className="form_wrapper">
                        <div className="form_container">
                            <div className="title_container">
                                <h2>Organ Donation Signup</h2>
                            </div>
                            <div className="row clearfix">
                                <div className="">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                            <input type="email" name="email" placeholder="Email" value={this.state.email} required onChange={this.onChange} />
                                        </div>
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                            <input type="password" name="pass" placeholder="Password" value={this.state.pass} required onChange={this.onChange} />
                                        </div>
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                            <input type="number" name="phone" placeholder="Phonenumber" value={this.state.phone} required onChange={this.onChange} />
                                        </div>

                                        <div className="row clearfix">
                                            <div className="col_half">
                                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                                    <input type="text" name="fname" placeholder="First Name" value={this.state.fname} onChange={this.onChange} required />
                                                </div>
                                            </div>
                                            <div className="col_half">
                                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                                    <input type="text" name="lname" placeholder="Last Name" value={this.state.lname} onChange={this.onChange} required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input_field select_option">
                                            <select name="gender" value={this.state.gender} onChange={this.onChange} required>
                                                <option>Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Others">Other</option>

                                            </select>
                                        </div>
                                        <div className="input_field select_option">
                                            <select name="bloodgroup" value={this.state.bloodgroup} onChange={this.onChange} required>
                                                <option>Select a Blood Type</option>
                                                <option value="A-">A-</option>
                                                <option value="A+">A+</option>
                                                <option value="B-">B-</option>
                                                <option value="B+">B+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="O-">O-</option>
                                                <option value="O+">O+</option>
                                            </select>
                                        </div>
                                        <div className="input_field select_option">
                                            <select name="city" value={this.state.city} onChange={this.onChange} required>
                                                <option>Select a City for Hospital location</option>
                                                <option value="New Delhi">Delhi</option>
                                                <option value="Pune">Pune</option>
                                                <option value="Gwalior">Gwalior</option>
                                            </select>
                                        </div>
                                        <div className="input_field select_option">
                                            <select name="organ" value={this.state.organ} onChange={this.onChange} required>
                                                <option>Select a organ to donate</option>
                                                <option value="Eyes">Eyes</option>
                                                <option value="Heart">Heart</option>
                                                <option value="Lungs">Lungs</option>
                                                <option value="Pancreas">Pancreas</option>
                                            </select>
                                        </div>




                                        <input className="button" type="submit" value="Register" />

                                        {
                                            this.state.errMsg && this.state.errMsg.length > 0 ?
                                                <Message error header="Oops!!" content={this.state.errMsg} /> : <div />
                                        }
                                        {
                                            this.state.succMsg && this.state.succMsg.length > 0 ?
                                                <Message header="Great!!" content={this.state.succMsg} /> : <div />
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default DonorSignUp;

