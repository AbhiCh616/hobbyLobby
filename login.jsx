import React, {Component} from 'react';
import './signUp.css';
import signUpLogo from './signUp-user-icon.svg';
import maleUnselected from './male-unselected.svg';

class Login extends Component {
    render() {
        return (
            <div className = "mainPan">
                <div className = "leftPan">
                    <div>
                        <img src={signUpLogo} className = "signUpUserLogo"></img>
                        <p className = "signUpText1">Let's get you set up</p>
                        <p className = "signUpText2">
                            Get ready to meet new people who share your interest... It would only take a few moments.
                        </p>
                    </div>  
                </div>
                <div className = "rightPan">
                     <div class="form">
                            <div className = "row">
                                <button className = "GoogleSignIn" type="button">Use Google Account</button>
                            </div>
                            
                            <div className = "row">
                                
                                    <hr class="l_seprator"></hr>   
                                    <p class="seprator_text">or</p>  
                                     <hr class="r_seprator"></hr>  
                                
                            </div>
                            


                            <div className = "row">
                                <div className = "col-25">
                                    <label>Username or Email</label>
                                </div>
                                <div className = "col-75">
                                    <input type = "text"></input> <br/>
                                </div>
                            </div>
                            <div className = "row">
                                <div className = "col-25">
                                    <label>Password</label>
                                </div>
                                <div className = "col-75">
                                    <input type = "Password"></input> 
                                </div>
                            </div>
                            <div className = "abc">
                                <button className = "loginButton" type="button">Log in ></button>
                            </div>
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            <p>
                            <hr className="out_seprator"></hr>
                            </p>    
                            
                            <br></br>
                            <p class="forgetpassText">Forgot Password?</p>
                            
                            <p class="Text"> Don't have an account? <a href="#">Sign Up</a></p>
                            
                            
                     </div>
                     
                     
                </div>
                
            </div>
        )
    }
};

export default Login;