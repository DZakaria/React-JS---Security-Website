import React from 'react'
import './FooterStyles.css';
import {SiDatabricks} from 'react-icons/si'
import {FiMail} from 'react-icons/fi'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

import {BsFillArrowUpCircleFill} from 'react-icons/bs'
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <SiDatabricks className='icon' />
                        <h2>Secured.</h2>
                    </div>
                    <BsFillArrowUpCircleFill className='icon' />

                    <div className="col-container">
                        <div className="col">
                            <h3>Navigation</h3>
                            <p>Home</p>
                            <p>Data</p>
                            <p>Cloud</p>
                            <p>Contact</p>
                        </div>

                        <div className="col">
     <h3>Navigation</h3>
     <p>Home</p>
     <p>Data</p>
     <p>Cloud</p>
     <p>Contact</p>
 </div>

                        <div className="col">
                            <h3>test</h3>
                            <p>Home</p>
                            <p>Home</p>
                            <p>Home</p>
                            <p>Home</p>
                        </div>

                        <div className="col">
                            <h3>Test</h3>
                            <p>Home</p>
                            <p>Home</p>
                            <p>Home</p>
                            <p>Home</p>

                        </div>

                        <form>
                            <h3>Join Our Team</h3>
                            <input type="email" placeholder="Your Email" />
                            <FiMail className='mail-icon' />
                            <div className="social-group">
                                <FaInstagram className='social-icon' />
                                <FaFacebook className='social-icon' />
                                <FaLinkedin className='social-icon' />
                                <FaGithub className='social-icon' />

                            </div>
                        </form>


                        

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
