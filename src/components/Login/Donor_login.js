import { useState } from "react";
import axios from "axios";
import Top2 from "../Navbar/Top2";
import "./styles.css";



function Donor_login() {

    const [valid, checkvalid] = useState(({
        public_key: '',
        errMsg: '',
    }));

    const onSubmit = (event) => {

        event.preventDefault();
    }

    const handleChange = (event) => {
        checkvalid({ ...valid, [event.target.name]: event.target.value });
    }

    return (
        <>
            <Top2 />
            <section class="hospital_login">
                <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
                    <div class="container">
                        <div class="row gx-lg-5 align-items-center">
                            <div class="col-lg-6 mb-5 mb-lg-0">
                                <h1 class="my-5 display-3 fw-bold ls-tight">

                                    <span class="text-primary">Login for Donor</span>
                                </h1>
                                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                                    “After I die if I am buried I will rot. If I am burnt I will become ash but if my body is donated I will live to give life and happiness to many."
                                </p>
                            </div>

                            <div class="col-lg-6 mb-5 mb-lg-0">
                                <div class="card">
                                    <div class="card-body py-5 px-md-5">
                                        <form onSubmit={onSubmit}>
                                            <div class="form-outline mb-4">
                                                <input type="string" id="public_key" name="public_key" class="form-control" value={valid.public_key} onChange={handleChange} required />
                                                <label class="form-label" for="public_key">Public Key</label>
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-block mb-4" onSubmit={onSubmit}>
                                                Sign up
                                            </button>
                                            {valid.errMsg &&
                                                <h3 className="error"> {valid.errMsg} </h3>}


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );




}
export default Donor_login;

