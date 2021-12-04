import './Register.css';
import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';

import { useState, useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const Register = () => {

    const { login } = useContext(AuthContext)
    const [error, setError] = useState('');
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            setError('')
        }, 5000)
    }, [error])

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let username = formData.get("username");
        let password = formData.get("password");
        let repeatPassword = formData.get("repeatPassword");


        authService.register({ username, password, repeatPassword })
            .then(res => {
            
                if (res.username) {

                    sessionStorage.setItem('username', res.username)
                    sessionStorage.setItem('token', res.token)
                    sessionStorage.setItem('id', res.id)

                    login(res)
                    history.push('/');
                    return;
                } else {
                    setError(res.message);
                    return;
                }
            })

    }

    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>User <strong className="llow">Registration</strong></h2>
                        </div>
                    </div>

                </div>
                {error && <div className="errorRegister"><p className="errTxtRegister">{error}</p></div>}
                <div className="white_color">
                    <div className="row">

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <form className="contact_bg" onSubmit={onRegisterHandler} method="POST">
                                <div className="row">
                                    <div className="col-md-12">

                                        <div className="col-md-12">
                                            <input className="contactus" placeholder="Type username..." type="text" name="username" />
                                        </div>
                                        <div className="col-md-12">
                                            <input className="contactus" placeholder="Type password..." type="password" name="password" />
                                        </div>
                                        <div className="col-md-12">
                                            <input className="contactus" placeholder="Repeat password..." type="password" name="repeatPassword" />
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <button className="send">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Register