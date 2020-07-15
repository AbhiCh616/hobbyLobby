import React, { Component } from 'react'

class Post extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="postText">
                    {this.props.text}
                </div>
            </React.Fragment>
        )
    }
}

export default Post