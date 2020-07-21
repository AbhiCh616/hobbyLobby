import React, { Component } from 'react'
import './feed.css'
import Post from './post'

class Feed extends Component {

    constructor(props) {
        super(props)
        this.state = {
            postList: [],
            userName: 'Taylor Swift'
        }
        this.fetchPosts = this.fetchPosts.bind(this)
    }

    fetchPosts() {
        fetch('http://127.0.0.1:8000/feed/music_list/')
            .then(response => response.json())
            .then(data => this.setState({
                postList: data
            }))
    }

    componentWillMount() {
        this.fetchPosts()
    }

    render() {

        return (
            <React.Fragment>
                <div className="mainFeedPan">
                    <div className="leftFeedPan">
                        <div className="userLink">
                            {this.state.userName}
                        </div>
                    </div>
                    <div className="centerFeedPan">
                        <div className="topBar">
                           <div class="recentLabel">Recent                       
                                <select id = "myList">
                                <option value = "Music">Music</option>
                                <option value = "Dance">Dance</option>
                                <option value = "Skating">Skating</option>
                                </select>
                            </div>
                        </div>
                        <div className="postsPan">
                            {this.state.postList.map(
                                post => <Post text={post.caption} image={post.img} />
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
