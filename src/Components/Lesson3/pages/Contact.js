import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div>
                <h6>I am Contact</h6>
                <p>Mail me at: {this.props.email}</p>
                <p>Phone: {this.props.phone}</p>
            </div>
        )
    }
}

export default Contact
