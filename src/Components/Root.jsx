import React, { Component } from 'react'
import Lesson1 from './Lesson1/Lesson1'
import Lesson2 from './Lesson2/Lesson2'

class Root extends Component {
    render() {
        return (
            <div>
                {/* <Lesson1 /> */}
                <Lesson2 />
            </div>
        )
    }
}

export default Root
