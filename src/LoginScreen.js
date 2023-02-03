import React from 'react'
import './LoginScreen.css'
function LoginScreen() {
    return (
        <div className='loginScreen'>
            <div className='logingScreen_background'>
                <img
                    className='loginScreen_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                    alt='Netflix' />
                    <button className='logingScreen_button'>
                        Sign In
                    </button>
                    <div className='logingScreen_gradient' />
            </div>
            <div className='logingScreen_body'>
                <>
                <h1>
                Unlimited movies, TV shows, and more.
                </h1>
                </>
            </div>
        </div>
    )
}

export default LoginScreen