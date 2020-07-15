import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    render() {
        return (
            <h1>
                <div onClick={this.props.handle_logout}>Logout</div>
            </h1>
        )
    }
}

export default User

User.propTypes = {
    handle_logout: PropTypes.func.isRequired
}