import React, { Component } from 'react'
import './feed.css'
import Post from './post'

class Feed extends Component {
    state = {
        userImage: './userProfile.svg',
        userName: 'Taylor Swift',
        posts: [
            { text: 'text1', image: 'image1' },
            { text: 'text2', image: 'image2' },
            { text: 'text3', image: 'image3' },
            { text: 'text1', image: 'image1' },
            { text: 'text2', image: 'image2' },
            { text: 'text3', image: 'image3' },
            { text: 'text1', image: 'image1' },
            { text: 'text2', image: 'image2' },
            { text: 'text3', image: 'image3' },
            { text: 'text1', image: 'image1' },
            { text: 'text2', image: 'image2' },
            { text: 'text3', image: 'image3' },

        ]
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
                            Recent
                        </div>
                        <div className="postsPan">
                            {this.state.posts.map(
                                post => <Post text={post.text} image={post.images} />
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
