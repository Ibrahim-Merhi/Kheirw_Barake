import React from 'react'
import { Link } from 'react-router-dom';
import './Sign.css'
import Logo from '../../assets/images/logonb.png'


function Login() {
    return(
    <html lang="ar" dir="rtl">
    <div className="login-wrap bodies">
        <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Sign Up</label>
            <div className="login-form">
              <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className="sign-in-htm">
                            <div className="group">
                                <label for="user" className="label">Username</label>
                                <input id="user" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" checked />
                                <label for="check"><span className="icon"></span> Keep me Signed in</label>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign In" />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="#forgot">Forgot Password?</a>
                            </div>
                            
                        </div>
                        <div className="sign-up-htm">
                            <div className="group">
                                <label for="user" className="label">Username</label>
                                <input id="user" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Repeat Password</label>
                                <input id="pass" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Email Address</label>
                                <input id="pass" type="text" className="input" />
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign Up" />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <label for="tab-1">Already Member?</label>
                            </div>
                        <div className='col-lg-4'>
                            <img src={Logo} alt='' className='logo-image'/>
                        </div>    
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </html>
                                
                
    )
}

export default Login;