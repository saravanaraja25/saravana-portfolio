import React from 'react'
import { NavLink } from 'react-router-dom'
import pps from '../img/pps.jpeg'

function Header({open}) {
    function change(){
        open(false)
    }
    return (
        <div className="header">
            <div className="row">
                <div className="col-3 p-0">
                    <div className="menu py-5">
                        <ul className="py-5">
                            <li>
                                <NavLink exact onClick={change} activeClassName="active" to="/">
                                    <i className="fas fa-home"></i>
                                    <br/>
                                    Home
                                </NavLink>
                            </li>
                            <li>                                
                                <NavLink onClick={change} activeClassName="active" to="/about">
                                    <i className="fas fa-user"></i>
                                    <br/>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={change} activeClassName="active" to="/skills">
                                    <i className="fas fa-graduation-cap"></i>
                                    <br/>
                                    Skills
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={change} activeClassName="active" to="/works">
                                    <i className="fas fa-briefcase"></i>
                                    <br/>
                                    Works
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={change} activeClassName="active" to="/contact">
                                    <i className="fas fa-envelope"></i>
                                    <br/>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col p-0">
                    <div className="personal text-center py-5">
                        <div className="head-photo">
                            <img className="w-100" src={pps} alt="Saravana Raja"/>
                        </div>
                        <div className="info">
                            <h1 className="text-white font-weight-bold">Saravana Raja</h1>
                            <h5 className="mt-3">Full Stack Developer</h5>
                            <div className="icons mt-5">
                                <a target="_blank" rel="noreferrer" href="https://facebook.com/saravanaraja25"><i className="fab fa-facebook-f"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/saravanaraja25/"><i className="fab fa-linkedin-in"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/saravanaraja25/"><i className="fab fa-github"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/saravanarajapp/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="mt-5 footer text-white">
                            <p className="pt-4">Designed With 💙 By Saravana Raja.</p>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
