import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../../style/style.module.css'

function MainNav() {
    return (
        <nav>
            <NavLink className={navInfo => navInfo.isActive ? classes.active : ''} to='/hello'>Home</NavLink>
            <NavLink className={navInfo => navInfo.isActive ? classes.active : ''} to='/posts'>Posts</NavLink>
            <NavLink className={navInfo => navInfo.isActive ? classes.active : ''} to='/blog'>Blog</NavLink>
            <NavLink className={navInfo => navInfo.isActive ? classes.active : ''} to='/contact'>Contact</NavLink>
        </nav>
    )
}

export default MainNav
