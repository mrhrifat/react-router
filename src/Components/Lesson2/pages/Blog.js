import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Blog extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h4>History</h4>
            </div>
        )
    }
}

export default Blog
