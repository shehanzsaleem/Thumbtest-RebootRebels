import React from 'react';
import "./Login.css";
const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        sethasAccount,
        emailError,
        passwordError
    } = props;
    // const {email} = props;
    // const {setEmail} = props;
    // const {password} = props;
    // const {setPassword} = props;
    // const {handleLogin} = props;
    // const {hasAccount} = props;
    // const {handleSignup} = props;
    // const {sethasAccount} = props;
    // const {emailError} = props;
    // const {passwordError} = props;
    return (


        <div className="container-fluid login">
            <div className="row">
                <div className="col-md-6 col-sm-12 mt-5 mb-5 pt-5 pb-5">
                    <div className="login-main-text">
                        <h2>Application<br /> Login Page</h2>
                        <p>Login or register from here to access.</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mt-5 mb-5 pt-5 pb-5">
                    <div className="login-form">
                        <form>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" className="form-control" placeholder="User Name" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-black">Login</button>
                            <button type="submit" className="btn btn-secondary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
       
        <section classNameName="login" >
        <div classNameName="loginContainer">
        </div> <label>Username</label>
        <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <p classNameName="errorMsg">{emailError}</p>
        <label>Password</label>
        <input type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
        <p classNameName="errorMsg">{passwordError}</p>
        <div className="btnContainer">
        {hasAccount ? (
        <>
        <button classNameName="b1" onClick={handleLogin}>Sign in</button>
        <p>Don't have an account ? <span onClick={() => sethasAccount(!hasAccount)}>Sign up</span></p>
        </>
        ) : (
        <>
        <button classNameName="b1" onClick={handleSignup}>Sign up</button>
        <p>Have an account ? <span onClick={() => sethasAccount(!hasAccount)}>Sign in</span></p>
        </>
        )
        }
        </div>
        </section>
        </div>
    );
};
export default Login;