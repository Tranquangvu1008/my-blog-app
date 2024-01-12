import React, { useState } from 'react'
import "./index.scss"
import "assets/css/colors/pink.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import eyeSvg from "assets/img/icons/lineal/eye.svg"
import eyeFlashSvg from "assets/img/icons/lineal/eye-flash.svg"
import { ReactSVG } from 'react-svg';

const Login = () => {
    const [register, setRegister] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [focusIcon, setFocusIcon] = useState(false);

    const onClickRegister = () => {
        setRegister((prevRegister) => !prevRegister)
    }

    const [showTextBack, setShowTextBack] = useState(false);

    const handleHover = () => {
        setShowTextBack(true);
    };

    const handleLeave = () => {
        setShowTextBack(false);
    };

    return (<div className="bg-white bg-gradient-to-r from-gray-200 to-blue-300 flex items-center justify-center flex-col min-h-screen">
        <button className='absolute top-5 left-5 '>
            <a
                href="/"
                className={`bg-[#704bc7] text-white font-medium py-1 px-2 rounded inline-flex items-center space-x-1 text-[14px]
                `}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                <p className={`transition-opacity duration-300 ${showTextBack ? 'opacity-100' : 'opacity-0 hidden'}`}>Back to Home Page</p>
            </a>
        </button>

        <div className={`container__signin ${register && 'active'}`} id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="/#" className="icon"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="/#" className="icon"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="/#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="/#" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                    <span>or use your email for registeration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <div className='relative w-full'>
                        <input type={`${showPassword ? 'text' : 'password'}`} placeholder="Password"
                            onFocus={(e) => {
                                setFocusIcon((prevFocusIcon) => !prevFocusIcon)
                            }} onBlur={(e) => {
                                setFocusIcon((prevFocusIcon) => !prevFocusIcon)
                            }} />
                        <ReactSVG src={`${showPassword ? eyeFlashSvg : eyeSvg}`} className={`absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer fill-current ${focusIcon ? 'text-gray-700' : 'text-gray-400'}`}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                setShowPassword((prevShowPassword) => !prevShowPassword)
                            }} />
                    </div>                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="/#" className="icon"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="/#" className="icon"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="/#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="/#" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email" />
                    <div className='relative w-full'>
                        <input type={`${showPassword ? 'text' : 'password'}`} placeholder="Password"
                            onFocus={(e) => {
                                setFocusIcon((prevFocusIcon) => !prevFocusIcon)
                            }} onBlur={(e) => {
                                setFocusIcon((prevFocusIcon) => !prevFocusIcon)
                            }} />
                        <ReactSVG src={`${showPassword ? eyeFlashSvg : eyeSvg}`} className={`absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer fill-current ${focusIcon ? 'text-gray-700' : 'text-gray-400'}`}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                setShowPassword((prevShowPassword) => !prevShowPassword)
                            }} />
                    </div>
                    <a href="/#">Forget Your Password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1 className='text-white'>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hiddenButton" id="login" onClick={onClickRegister}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1 className='text-white'>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className="hiddenButton" id="register" onClick={onClickRegister}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>);

}

export default Login;