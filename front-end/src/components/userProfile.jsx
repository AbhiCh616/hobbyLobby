import React, { Component } from 'react'
import './userProfile.css'

class ProfilePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: 'Taylor Swift'
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="mainFeedPan">
                    <div className="leftProfilePan">
                        <div className="userLink">
                            {this.state.userName}
                        </div>
                    </div>
                    <div className="centerProfilePan">
                        <div className="topBar">
                            Create Post
                        </div>
                        <div className="createPostArea">
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default ProfilePage