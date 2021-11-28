import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { withRouter } from 'react-router'
import Posts from './pages/Posts'
import Contact from './pages/Contact'
import MainNav from './pages/Nav/MainNav'
import Hello from './pages/Hello'
import Post from './pages/Post'
import Blog from './pages/Blog'

class Lesson3 extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h4>Lesson 3</h4>
                    <MainNav />
                    <Routes>
                        <Route path='/' element={<Navigate to='/hello' />} />
                        <Route path='/hello/*' element={<Hello />}>
                            <Route path='learn' element={<p>I am learning it now</p>} />
                        </Route>
                        <Route path='/posts/*' element={<Posts />} />
                        <Route path='/posts/:postId' element={<Post />} />
                        <Route path='/blog/' element={<Blog />} />
                        <Route path='/contact' element={
                            <Contact
                                email={'admin@ceo.com'}
                                phone={'+948-954396'}
                            />}
                        />
                    </Routes>
                </div>
            </BrowserRouter >
        )
    }
}

export default Lesson3