import React, { useState, useEffect } from 'react'
import './NavBar.css'

function NavBar() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll',transitionNavBar)
    },  []);

    return (
        <div className={`navBar ${show && 'nav_back'}`}>
            <div className='nav_contents'>
                <img
                    className='nav_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' atl='Netflix' />

                <img
                    className='nav_user'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='User' />
            </div>
        </div>
    )
}

export default NavBar