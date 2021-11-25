import React, { Component } from 'react'
import { Outlet, Route, Routes } from 'react-router'

class Hello extends Component {
    render() {
        return (
            <div>
                <h4>Welcome to React Router</h4>
                {/* <Routes>
                    <Route path='learn' element={<p>I am learning it now</p>} />
                </Routes> */}
                <Outlet />
            </div>
        )
    }
}

export default Hello
