import React, { Component } from 'react';
import './signUp.css';
import signUpLogo from './signUp-user-icon.svg';
import maleUnselected from './male-unselected.svg';
import femaleUnselected from './female-unselected.svg'

class SignUp extends Component {

    render() {
        return (
            <div className="mainPan">
                <div className="leftPan">
                    <div className="infoPan">
                        <img src={signUpLogo} className="signUpUserLogo"></img>
                        <p className="signUpText1">Let's get you set up</p>
                        <p className="signUpText2">
                            Get ready to meet new people who share your interest... It would only take a few moments.
                        </p>
                    </div>
                </div>
                <div className="rightPan">
                    <div className="form">
                        <form action="signup/submit">
                            <div className="row">
                                <div className="col-25">
                                    <label>Name</label>
                                </div>
                                <div className="col-75">
                                    <input className="nameField" type="text" placeholder="First"></input>
                                    <input className="nameField" type="text" placeholder="Last"></input><br />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label>Date of Birth</label>
                                </div>
                                <div className="col-75">
                                    <input type="date"></input> <br />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label>Gender</label>
                                </div>
                                <div className="col-75">
                                    <input type="radio" id="male" name="gender" />
                                    <label for="male" className="maleLabel">
                                        <img src={maleUnselected} id="maleImage" />
                                        Male
                                    </label>
                                    <input type="radio" id="female" name="gender" />
                                    <label for="female" id="femaleLabel">
                                        <img src={femaleUnselected} id="femaleImage" />
                                        Female
                                    </label>
                                    <input type="radio" id="other" name="gender" />
                                    <label for="other" className="otherLabel">Other</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label>
                                        Email or Phone</label>
                                </div>
                                <div className="col-75">
                                    <input type="email" placeholder="example@mail.com"></input><br />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label>Username</label>
                                </div>
                                <div className="col-75">
                                    <input type="text"></input> <br />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label>Password</label>
                                </div>
                                <div className="col-75">
                                    <input type="password"></input> <br />
                                </div>
                            </div>
                            <div className="actionButtons">
                                <button className="signUpButton" type="submit">Sign Up</button>
                                <button formAction="/" className="cancelButton" type="button">
                                    <a href="/">Cancel</a></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

export default SignUp;