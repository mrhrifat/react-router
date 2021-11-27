import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div>
                <h6>I am Contact</h6>
                <p>Mail me to {this.props.email}</p>
            </div>
        )
    }
}

export default Contact
