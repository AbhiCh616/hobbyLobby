import React, { Component } from 'react'
import './feed.css'
import Post from './post'

class Feed extends Component {

    constructor(props) {
        super(props)
        this.state = {
            postList: [],
            selectedHobbyFilter: '',
            userName: 'Taylor Swift'
        }
        this.fetchPosts = this.fetchPosts.bind(this)
        this.handleHobbySelection = this.handleHobbySelection.bind(this)
    }

    fetchPosts() {
        fetch('http://127.0.0.1:8000/feed/' + this.state.selectedHobbyFilter)
            .then(response => response.json())
            .then(data => this.setState({
                postList: data
            }))
    }

    handleHobbySelection(e) {
        var value = e.target.value
        this.setState({
            selectedHobbyFilter: value
        })
    }

    componentWillMount() {
        this.fetchPosts()
    }

    componentDidUpdate() {
        this.fetchPosts()
    }

    render() {

        return (
            <React.Fragment>
                <div className="mainFeedPan">
                    <div className="leftFeedPan">
                        <a href="/profile_page" className="userLink">
                            {this.state.userName}
                        </a>
                    </div>
                    <div className="centerFeedPan">
                        <div className="topBar">
                            <div className="recentLabel">
                                Recent
                            </div>
                            <div className="hobbySelectionListContainer">
                                <select id="myList" onChange={this.handleHobbySelection}>
                                    <option value="no_list">Select Hobby</option>
                                    <option value="music_list">Music</option>
                                    <option value="dance_list">Dance</option>
                                    <option value="skating_list">Skating</option>
                                </select>
                            </div>
                        </div>
                        <div className="postsPan">
                            {this.state.postList.map(
                                post => <Post key={post.post_id} text={post.caption} date={post.post_date} />
                            )}
                        </div>
                    </div>
                    <div className="rightFeedPan">

                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default Feed
