import React from 'react';
import './Header.css';
import logo from '../../../src/assets/Images/MyPhotos/logo-removebg-preview.png';
import { NavLink } from 'react-router-dom';
import video from '../../assets/Videos/chill.mp4';
import Typical from 'react-typical';

function Header() {


    return (
        <div className="container-fluid">
            <video autoPlay muted loop id="myVideo">
                <source src={video} />
                Your browser does not support the audio element.
            </video>
            <div className="header row animate__animated animate__slideInUp animate__delay-0.5s">
                <div className="col-12 col-lg-3">
                    <img src={logo} alt="logo" />
                </div>
                <div className="col-12 col-lg-4"></div>
                <div className="header-nav col-12 col-lg-5">
                    <ul className="nav justify-content-center header-ul">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Resume">Resume</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="intro">
                <h1>Nguyễn Tấn Hải</h1>
                <p> I'm a
                    <Typical
                        steps={[
                            ' Web Developer! ', 1000,
                            ' Web Designer! ', 1000,
                            ' Android App Developer! ', 1000,
                            ' Desktop App Developer! ',1500,
                        ]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </p>
            </div>
            <hr />
            <div className="jsFooter">
                <div className="row">
                    <div className="col">
                        <ul className="list-unstyled list-inline content-follow">
                            <li className="list-item"><a href="https://www.facebook.com/tanhai.nguyen.921/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square" /></a>
                            </li>
                            <li className="list-item"><a href="https://github.com/nguyenhai15040206" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

