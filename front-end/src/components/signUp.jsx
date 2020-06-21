import React, { Component } from 'react';
import './signUp.css';
import signUpLogo from './signUp-user-icon.svg';
import maleUnselected from './male-unselected.svg';
import femaleUnselected from './female-unselected.svg'
import PropTypes from 'prop-types'

class SignUp extends Component {
    state = {
        username: '',
        password: ''
    }

    handle_change = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState(prevstate => {
            const newState = { ...prevstate }
            newState[name] = value
            return newState
        })
    }

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
                        <form onSubmit={e => this.props.handle_signup(e, this.state)}>
                            <div className="row">
                                <div className="col-25">
                                    <label>Name</label>
                                </div>
                                <div className="col-75">
                                    <input className="nameField" type="text" placeholder="First"></input>
                                    <input className="nameField" type="text" placeholder="Last"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label>Date of Birth</label>
                                </div>
                                <div className="col-75">
                                    <input type="date"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label>Gender</label>
                                </div>
                                <div className="col-75">
                                    <input type="radio" id="male" name="gender" />
                                    <label htmlFor="male" className="maleLabel">
                                        <img src={maleUnselected} id="maleImage" />
                                        Male
                                    </label>
                                    <input type="radio" id="female" name="gender" />
                                    <label htmlFor="female" id="femaleLabel">
                                        <img src={femaleUnselected} id="femaleImage" />
                                        Female
                                    </label>
                                    <input type="radio" id="other" name="gender" />
                                    <label htmlFor="other" className="otherLabel">Other</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label>
                                        Email or Phone</label>
                                </div>
                                <div className="col-75">
                                    <input type="email" placeholder="example@mail.com"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label>Username</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" name="username" value={this.state.username} onChange={this.handle_change} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label>Password</label>
                                </div>
                                <div className="col-75">
                                    <input type="password" name="password" value={this.state.password} onChange={this.handle_change} />
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
}

export default SignUp

SignUp.propTypes = {
    handle_signup: PropTypes.func.isRequired
}