import { useState } from "react";
import axios from "axios";
import Top2 from "../Navbar/Top2";
import "./styles.css";



function Hospital_login() {

    const [valid, checkvalid] = useState(({
        username: '',
        password: '',
        errMsg: '',
    }));

    const onSubmit = (event) => {

        event.preventDefault();

        checkvalid({ errMsg: '' });

        const { username, password } = valid;
        const user = { username, password };
        console.log(user);

        axios.request("http://localhost:5002/api/hospitals/login", user)
            .then(res => {
                localStorage.setItem("isAuthenticated", "true");
                window.localStorage.setItem("token", res.data.token);
                window.location = "/hospital/dashboard";

                console.log("login completed");
            })
            .catch(err => checkvalid(...valid, { errMsg: err }));




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

                                    <span class="text-primary">Signup For hospital Login</span>
                                </h1>
                                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                                    quibusdam tempora at cupiditate quis eum maiores libero
                                    veritatis? Dicta facilis sint aliquid ipsum atque?
                                </p>
                            </div>

                            <div class="col-lg-6 mb-5 mb-lg-0">
                                <div class="card">
                                    <div class="card-body py-5 px-md-5">
                                        <form onSubmit={onSubmit}>
                                            <div class="form-outline mb-4">
                                                <input type="username" id="username" name="username" class="form-control" value={valid.username} onChange={handleChange} required />
                                                <label class="form-label" for="username">Username</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="password" id="password" name="password" class="form-control" value={valid.password} onChange={handleChange} required />
                                                <label class="form-label" for="form3Example4">Password</label>
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
export default Hospital_login;

