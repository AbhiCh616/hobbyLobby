import React, { Component } from 'react'
import './userProfile.css'

class ProfilePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: 'Taylor Swift',
            newPostValues: {
                post_date: '',
                caption: '',
            },
            postHobbyTag: ''
        }
        this.handleHobbyTagSelection = this.handleHobbyTagSelection.bind(this)
        this.handleHobbyCaption = this.handleHobbyCaption.bind(this)
        this.handleSubmitPost = this.handleSubmitPost.bind(this)
    }

    handleHobbyTagSelection(e) {
        var value = e.target.value
        this.setState({
            postHobbyTag: value
        })
    }

    handleHobbyCaption(e) {
        var value = e.target.value
        this.setState({
            newPostValues: {
                ...this.state.newPostValues,
                caption: value,
            }
        })
    }

    handleSubmitPost(e) {
        e.preventDefault()

        this.setState({
            newPostValues: {
                ...this.state.newPostValues,
                post_date: new Date()
            }
        })

        var url = 'http://127.0.0.1:8000/feed/' +
            this.state.postHobbyTag + '_list/create/'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state.newPostValues)
        })
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
                    <div className="centerProfilePane">
                        <div className="topBar">
                            Create Post
                        </div>
                        <form className="createPostArea" onSubmit={this.handleSubmitPost}>
                            <div className="row">
                                <div className="post-col-25">
                                    <label>Make Post</label>
                                </div>
                                <div className="col-75">
                                    <textarea className="postCaption" name="postCaption" placeholder="What's on your mind?"
                                        onChange={this.handleHobbyCaption}></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="post-col-25">
                                    <label>Media</label>
                                </div>
                                <div className="col-75">

                                </div>
                            </div>
                            <div className="row">
                                <div className="post-col-25">
                                    <label>Tags</label>
                                </div>
                                <div className="col-75">
                                    <div className="postHobbyTagContainer">
                                        <select id="postHobbyTag" onChange={this.handleHobbyTagSelection}>
                                            <option value="no_tag">Select Hobby</option>
                                            <option value="music">Music</option>
                                            <option value="dance">Dance</option>
                                            <option value="skating">Skating</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button id="createPostButton" type="submit">Post</button>
                        </form>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default ProfilePage