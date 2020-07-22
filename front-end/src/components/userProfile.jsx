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
                        <form>
                        <div className="FormPane">
                        <div className="row">
                            <label id="label2">Make Post</label>
                            <textarea id="PostCaption" name="postCaption" rows="6" cols="60" placeholder="What's on your mind?"></textarea>
                        </div>

                        <div className="row">
                            <lable id="label1">Media</lable>
                        </div>

                        <div className="row">
                            <lable id="label1">Tags</lable>
                            
                        </div>
                        <button className="signUpButton" type="submit">Post</button>

                        </div>
                        </form>
                        <div className="createPostArea">
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default ProfilePage