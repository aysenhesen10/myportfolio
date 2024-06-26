import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <header>
        <div className="container">
            <div className='head'>
                <img src="https://zyan.vercel.app/images/logo.png"alt="" />
                <ul>
                    <li><a href="#">HOME <i class="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">SERICES</a></li>
                    <li><a href="#">PROJECTS</a></li>
                    <li><a href="#">BLOG <i class="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
                <div>
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
