import React from 'react'
import { Link } from 'react-router-dom'


function PostNav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='1'>Post 1</Link>
                </li>
                <li>
                    <Link to='2'>Post 2</Link>
                </li>
                <li>
                    <Link to='3'>Post 3</Link>
                </li>
            </ul>
        </nav>
    )
}


export default PostNav
