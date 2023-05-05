import { useState } from "react";
import "./styles.css";
import Front from "../front/Front";
import axios from "axios";
import Top2 from "../Navbar/Top2";


function Login_signup() {
    const [state, setState] = useState(({
        fname: '',
        lname: '',
        gender: 'Male',
        city: '',
        phone: '',
        email: '',
        bloodgroup: '',
        organ: 'Eyes',
        errMsg: '',
        pass: ''

    }));
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }
    const onSubmit = (event) => {
        event.preventDefault();
        setState({ errMsg: '' });
        const { fname, lname, gender, city, phone, email, bloodgroup, organ, pass } = state;
        const donor = { fname, lname, gender, city, phone, email, bloodgroup, organ, pass };
        axios.post("http://localhost:5002/api/donors/", donor)
            .then((res) => {
                console.log("Donor Added Successfully");
                window.location = "/hospital-list/" + city;
            })
            .catch(err => setState(...state, { errMsg: err.message }));
    }
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
                                <form onSubmit={onSubmit} >
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                        <input type="email" name="email" placeholder="Email" value={state.email} required onChange={handleChange} />
                                    </div>
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                        <input type="password" name="pass" placeholder="Password" value={state.pass} required onChange={handleChange} />
                                    </div>
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                        <input type="number" name="phone" placeholder="Phonenumber" value={state.phone} required onChange={handleChange} />
                                    </div>

                                    <div className="row clearfix">
                                        <div className="col_half">
                                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                                <input type="text" name="fname" placeholder="First Name" value={state.fname} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col_half">
                                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                                <input type="text" name="lname" placeholder="Last Name" value={state.lname} onChange={handleChange} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input_field select_option">
                                        <select name="gender" value={state.gender} onChange={handleChange} required>
                                            <option>Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Other</option>

                                        </select>
                                    </div>
                                    <div className="input_field select_option">
                                        <select name="bloodgroup" value={state.bloodgroup} onChange={handleChange} required>
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
                                        <select name="city" value={state.city} onChange={handleChange} required>
                                            <option>Select a City for Hospital location</option>
                                            <option value="Delhi-NCR">Delhi-NCR</option>
                                            <option value="Mumbai">Mumbai</option>
                                            <option value="Bangalore">Bangalore</option>
                                            <option value="Chennai">Chennai</option>
                                        </select>
                                    </div>
                                    <div className="input_field select_option">
                                        <select name="organ" value={state.organ} onChange={handleChange} required>
                                            <option>Select a organ to donate</option>
                                            <option value="Eyes">Eyes</option>
                                            <option value="Heart">Heart</option>
                                            <option value="Lungs">Lungs</option>
                                            <option value="Pancreas">Pancreas</option>
                                        </select>
                                    </div>


                                    <Front />

                                    <input className="button" type="submit" value="Register" onSubmit={onSubmit} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Login_signup;

