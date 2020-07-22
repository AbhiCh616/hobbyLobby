import React, { Component } from 'react'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: this.props.date.substring(0, 10),
            time: this.props.date.substring(11, 16)
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="userName">
                    Anonymous
                </div>
                <div className="date">
                    {this.state.date}
                </div>
                <div className="time">
                    {this.state.time}
                </div>
                <div className="postText">
                    {this.props.text}
                </div>
            </React.Fragment>
        )
    }
}

export default Post