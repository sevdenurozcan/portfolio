import React from 'react'
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import '../css/Header.css'
import { Link } from 'react-router-dom';
import { CiHeart, CiNoWaitingSign } from "react-icons/ci";

function Header() {
    return (
        <div className='body'>
            <div className='ben'>Sevde Nur Özcan <CiHeart /></div>
            <div className='nav'>
                <nav>
                    <ul className='ul'>
                        <Link to={"/"}><li className='li'><FaHome className='icon' /></li></Link>
                        <Link to={"/aboutme"}><li className='li'><SiAboutdotme className='icon' /></li></Link>
                        <a href="https://www.linkedin.com/in/sevde-nur-%C3%B6zcan/"><li className='li'><FaLinkedin className='icon' /></li></a>
                    </ul>

                </nav>

                <hr className='hr' />
            </div>
        </div >
    )
}

export default Header