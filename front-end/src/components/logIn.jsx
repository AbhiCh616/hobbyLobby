import React, {Component} from 'react'
import './signUp.css'
import signUpLogo from './signUp-user-icon.svg';
import arrowIcon from './arrow-icon.svg';
import googleLogo from './google-logo.svg'
import dividerOr from './divider-or.svg'
import dividerLine from './divide-line.svg'

class LogIn extends Component {
    render() {
        return(
            <div className = "mainPan">
                <div className = "leftPan">
                    <div className = "infoPan">
                        <img src = {signUpLogo} className = "signUpUserLogo"></img>
                        <p className = "signUpText1">One of us?</p>
                        <p className = "signUpText2">
                            Meeting new people is always an adventure.
                        </p>
                    </div>  
                </div>
                <div className = "rightPan">
                    <div className = "form">
                        <form>
                            <div className = "row">
                                <button className = "googleSignIn" type = "button">
                                    <img src = {googleLogo} className = "googleLogo" />
                                    <label>Use Google Account</label>
                                </button>
                            </div>
                            <div className = "row">
                                <img src = {dividerOr} className = "divider"/>
                            </div>
                            <div className = "row">
                                <div className = "col-25">
                                    <label>Username or Email</label>
                                </div>
                                <div className = "col-75">
                                    <input type = "text" />
                                </div>
                            </div>
                            <div className = "row">
                                <div className = "col-25">
                                    <label>Password</label>
                                </div>
                                <div className = "col-75">
                                    <input type = "password"></input> <br/>
                                </div>
                            </div>
                            <div className = "actionButtons">
                                <button className = "LogInButton" type="button">
                                    Log In <img src = {arrowIcon} className = "arrowIcon" />
                                </button>
                            </div>
                        </form>
                        <div className = "helpSection">
                            <img src = {dividerLine} className = "sectionDivider" />
                            <div className = "forgotPassword">
                                <a href = "">Forgot Password?</a>
                            </div>
                            <div className = "signUpOption">
                                <label>Don't have an account?</label>
                                <a href = "/signup">Sign up</a>
                            </div>
                        </div> 
                    </div>      
                </div>
            </div>
        )
    }
}

export default LogIn