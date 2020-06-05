import React, {Component} from 'react';
import './signUp.css';
import signUpLogo from './signUp-user-icon.svg';

class SignUp extends Component {
    render() {
        return (
            <div className = "mainPan">
                <div className = "leftPan">
                    <div>
                        <img src = {signUpLogo} className = "signUpUserLogo"></img>
                        <p className = "signUpText1">Let's get you set up</p>
                        <p className = "signUpText2">
                            Get ready to meet new people who share your interest... It would only take a few moments.
                        </p>
                    </div>  
                </div>
                <div className = "rightPan">
                    <div className = "form">
                        <form>
                            <label>Name</label>
                            <input type = "text" placeholder = "First"></input> 
                            <input type = "text" placeholder = "Last"></input><br/>
                            <label>Date of Birth</label>
                            <input type = "date"></input> <br/>
                            <label>Gender</label>
                            <button type = "button">Male</button>
                            <button type = "button">Female</button>
                            <button type = "button">Other</button><br/>
                            <label>Email or Phone</label>
                            <input type = "email"></input><br/>
                            <label>Username</label>
                            <input type = "text"></input> <br/>
                            <label>Password</label>
                            <input type = "password"></input> <br/>
                            <button type="button">Cancel</button>
                            <button type="button">Sign Up</button>
                        </form> 
                    </div>      
                </div>
            </div>
        )
    }
};

export default SignUp;