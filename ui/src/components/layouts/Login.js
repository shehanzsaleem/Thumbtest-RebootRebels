import React, { useState, useCallback, useEffect } from 'react';
import "./Login.css";
import fire from './fire';



const Login = () => {



    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmaiError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState('');



    const clearInputs = () => {

        console.log("clear inputs");
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {

        console.log("clear errors");
        setEmaiError('');
        setPasswordError('');
    }


    const handleLogin = () => {

        console.log("handle login");
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-emai":
                    case "auth/user-disabled":
                    case "suth/user-not-found":
                        setEmaiError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };


    const handleSignup = () => {

        console.log("handle signup");
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmaiError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    }


    const sethasAccount = () => {

        console.log("set has account");

    };


    const handleLogout = () => {

        console.log("handle logout");
        fire.auth().signOut();
    };


    const authListener = () => {

        console.log("auth listener");


        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };



    useEffect(() => {
        authListener();
    }, []);



    // const Login = (props) => {
    //     const {
    //         email,
    //         setEmail,
    //         password,
    //         setPassword,
    //         handleLogin,
    //         handleSignup,
    //         hasAccount,
    //         sethasAccount,
    //         emailError,
    //         passwordError
    //     } = props;
    // }


        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-5 mb-5 pt-5 pb-5">
                        <div className="login-main-text">
                            <h2>ThumbTest<br /> Login Page</h2>
                            <p>Login or register from here to access.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-5 mb-5 pt-5 pb-5">
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="User Name" required />
                                    <p className="errorMsg">{emailError}</p>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <p className="errorMsg">{passwordError}</p>
                                </div>
                                <div className="btnContainer">
                                    {hasAccount ? (
                                        <>
                                            <button type="submit" className="btn btn-black" onClick={handleLogin}>Sign in</button>
                                            <p>Don't have an account ? <span onClick={() => sethasAccount(!hasAccount)}>Sign up</span></p>
                                        </>
                                    ) : (
                                        <>
                                            <button type="submit" className="btn btn-secondary" onClick={handleSignup}>Sign up</button>
                                            <p>Have an account ? <span onClick={() => sethasAccount(!hasAccount)}>Sign in</span></p>
                                        </>
                                    )
                                    }
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    };

    export default Login;