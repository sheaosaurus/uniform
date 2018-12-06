import React from 'react';
import ButtonComp from '../utils/buttonComp';
import Login from './login';


const RegisterLogin = () => {
    return (
        <div className="row">
         <div className="header--block"></div>
                <div className="register__login">
                    <div className="register__login-left">
                        <h1>New Customers</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <ButtonComp
                            type="default"
                            title="Create an account"
                            linkTo="/register"
                            addStyles={{
                                margin:'10px 0 0 0'
                            }}
                        />
                    </div>
                    <div className="register__login-right">
                        <h2>Registered customers</h2>
                        <p>If you have an account please log in.</p>
                        <Login/>
                    </div>
                </div>
            </div>
    );
};


export default RegisterLogin;
