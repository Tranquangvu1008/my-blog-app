import React, { useEffect } from 'react'
import Footer6Widgets from '../../components/Footer6Widgets';
import Navbar from '../../components/Navbar';
import PageProgress from '../../components/PageProgress';
import photoAbout17 from "../../assets/img/photos/about17.jpg";
import photoAbout172x from "../../assets/img/photos/about17@2x.jpg";
import photoF1 from "../../assets/img/photos/f1.png";
import photoF12x from "../../assets/img/photos/f1@2x.png";
import photoF2 from "../../assets/img/photos/f2.png";
import photoF22x from "../../assets/img/photos/f2@2x.png";
import photoF3 from "../../assets/img/photos/f3.png";
import photoF32x from "../../assets/img/photos/f3@2x.png";
import photoF4 from "../../assets/img/photos/f4.png";
import photoF42x from "../../assets/img/photos/f4@2x.png";
import emailSvg from "../../assets/img/icons/lineal/email.svg";

import "../../assets/scss/style.scss";
import "../../assets/css/colors/pink.css";

const IndexFirst = () => {

    return (<div>
        <div className="content-wrapper">
            {/* Navbar header */}
            <header className="wrapper bg-gray">
                <Navbar
                    classList={"fancy navbar-light navbar-bg-light"}
                    fancy={true}
                    logoAlt={"logo-dark"}
                    otherClassList={"w-100 d-flex ms-auto"}
                    otherSocial={true}
                />
            </header>
            {/* Avatar and text */}
            <section className="wrapper bg-gray">
                <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
                    <div className="row gy-10 gy-md-13 gy-lg-0 align-items-center">
                        <div
                            className="col-md-8 col-lg-5 d-flex position-relative mx-auto"
                            data-cues="slideInDown"
                            data-group="header"
                        >
                            {/* Avatar */}
                            <div
                                className="img-mask mask-1"
                                style={{
                                    animationName: "slideInDown",
                                    animationDuration: "700ms",
                                    animationTimingFunction: "ease",
                                    animationDelay: "0ms",
                                    animationDirection: "normal",
                                    animationFillMode: "both",
                                }}
                            >
                                <img
                                    src={photoAbout17}
                                    srcSet={`${photoAbout172x} 2x`}
                                    alt=""
                                />
                            </div>
                            <div
                                className="card shadow-lg position-absolute"
                                style={{
                                    bottom: "10%",
                                    right: "2%",
                                    animationName: "slideInDown",
                                    animationDuration: "700ms",
                                    animationTimingFunction: "ease",
                                    animationDelay: "300ms",
                                    animationDirection: "normal",
                                    animationFillMode: "both",
                                }}
                            >
                                <div className="card-body py-4 px-5">
                                    <div className="d-flex flex-row align-items-center">
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 409.6 409.6"
                                                data-inject-url="http://localhost:3000/assets/img/icons/lineal/check.svg"
                                                className="svg-inject icon-svg icon-svg-sm text-primary mx-auto me-3"
                                            >
                                                <path
                                                    className="lineal-stroke"
                                                    d="M204.8 409.6C91.9 409.6 0 317.7 0 204.8c0-49.9 18.2-98.1 51.2-135.5 4.4-5 12-5.5 17-1.1s5.5 12 1.1 17c-29.1 33-45.2 75.5-45.2 119.5 0 99.6 81.1 180.7 180.7 180.7s180.7-81.1 180.7-180.7S304.4 24.1 204.8 24.1c-27.3-.1-54.2 6.1-78.7 18-6 2.9-13.2.4-16.1-5.6-2.9-6-.4-13.2 5.6-16.1C143.4 6.9 173.9-.1 204.8 0c112.9 0 204.8 91.9 204.8 204.8s-91.9 204.8-204.8 204.8z"
                                                ></path>
                                                <path
                                                    className="lineal-fill"
                                                    d="M349.4 204.8c0 79.8-64.7 144.6-144.6 144.6S60.2 284.6 60.2 204.8 125 60.2 204.8 60.2 349.4 125 349.4 204.8z"
                                                ></path>
                                                <path
                                                    className="lineal-stroke"
                                                    d="M204.8 361.4c-86.4 0-156.6-70.2-156.6-156.6S118.4 48.2 204.8 48.2s156.6 70.2 156.6 156.6-70.2 156.6-156.6 156.6zm0-289.1c-73.1 0-132.5 59.4-132.5 132.5s59.4 132.5 132.5 132.5 132.5-59.5 132.5-132.5S277.9 72.3 204.8 72.3z"
                                                ></path>
                                                <path
                                                    className="lineal-stroke"
                                                    d="M200.9 246.7c-8.8 0-17.2-3.5-23.5-9.7L145 204.5c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l32.5 32.5c3.6 3.5 9.3 3.5 12.8 0l49.8-49.9c4.7-4.7 12.3-4.7 17 0s4.7 12.3 0 17L224.4 237c-6.2 6.2-14.7 9.7-23.5 9.7z"
                                                ></path>
                                            </svg>
                                            {/* <img src={checkSvg} className="svg-inject icon-svg icon-svg-sm text-primary mx-auto me-3" alt="" /> */}
                                        </div>
                                        <div>
                                            <h3 className="counter mb-0 text-nowrap">250+</h3>
                                            <p className="fs-14 lh-sm mb-0 text-nowrap">
                                                Projects Done
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 offset-lg-1 col-xxl-5 text-center text-lg-start"
                            data-cues="slideInDown"
                            data-group="page-title"
                            data-delay="600"
                            data-disable="true"
                        >
                            {/* Title introduce */}
                            <h1
                                className="display-1 mb-5"
                                data-cue="slideInDown"
                                data-group="page-title"
                                data-delay="600"
                                data-show="true"
                                style={{
                                    animationName: "slideInDown",
                                    animationDuration: "700ms",
                                    animationTimingFunction: "ease",
                                    animationDelay: "600ms",
                                    animationDirection: "normal",
                                    animationFillMode: "both",
                                }}
                            >
                                I'm User Interface Designer &amp; Developer.
                            </h1>
                            {/* Content introduce */}
                            <p
                                className="lead fs-25 lh-sm mb-7 px-md-10 px-lg-0"
                                data-cue="slideInDown"
                                data-group="page-title"
                                data-delay="600"
                                data-show="true"
                                style={{
                                    animationName: "slideInDown",
                                    animationDuration: "700ms",
                                    animationTimingFunction: "ease",
                                    animationDelay: "900ms",
                                    animationDirection: "normal",
                                    animationFillMode: "both",
                                }}
                            >
                                Hello! I'm Julia, a freelance user interface designer &amp;
                                developer based in London. I’m very passionate about the work
                                that I do.
                            </p>

                            <div
                                className="d-flex justify-content-center justify-content-lg-start"
                                data-cues="slideInDown"
                                data-group="page-title-buttons"
                                data-delay="900"
                                data-cue="slideInDown"
                                data-disabled="true"
                                data-show="true"
                                style={{
                                    animationName: "slideInDown",
                                    animationDuration: "700ms",
                                    animationTimingFunction: "ease",
                                    animationDelay: "900ms",
                                    animationDirection: "normal",
                                    animationFillMode: "both",
                                }}
                            >
                                <span
                                    data-cue="slideInDown"
                                    data-group="page-title-buttons"
                                    data-delay="900"
                                    data-show="true"
                                    style={{
                                        animationName: "slideInDown",
                                        animationDuration: "700ms",
                                        animationTimingFunction: "ease",
                                        animationDelay: "1200ms",
                                        animationDirection: "normal",
                                        animationFillMode: "both",
                                    }}
                                >
                                    <a
                                        href="/#"
                                        className="btn btn-lg btn-primary rounded-pill me-2"
                                    >
                                        See My Works
                                    </a>
                                </span>
                                <span
                                    data-cue="slideInDown"
                                    data-group="page-title-buttons"
                                    data-delay="900"
                                    data-show="true"
                                    style={{
                                        animationName: "slideInDown",
                                        animationDuration: "700ms",
                                        animationTimingFunction: "ease",
                                        animationDelay: "1500ms",
                                        animationDirection: "normal",
                                        animationFillMode: "both",
                                    }}
                                >
                                    <a
                                        href="/#"
                                        className="btn btn-lg btn-outline-primary rounded-pill"
                                    >
                                        Contact Me
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper bg-light wrapper-border">
                <div className="container py-14 py-md-18">
                    <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10">
                        <div className="col-lg-6 order-lg-2">
                            <ul className="progress-list">
                                <li>
                                    <p>Web Design</p>
                                    <div
                                        className="progressbar line soft-violet"
                                        data-value="100"
                                    >
                                        <svg
                                            viewBox="0 0 100 6"
                                            preserveAspectRatio="none"
                                            style={{ display: "block", width: "100%" }}
                                        >
                                            <path
                                                d="M 0,3 L 100,3"
                                                stroke="#eee"
                                                strokeWidth="6"
                                                fillOpacity="0"
                                            ></path>
                                            <path
                                                d="M 0,3 L 100,3"
                                                stroke="#555"
                                                strokeWidth="6"
                                                fillOpacity="0"
                                                style={{
                                                    strokeDasharray: "100, 100",
                                                    strokeDashoffset: "0",
                                                }}
                                            ></path>
                                        </svg>
                                        <div
                                            className="progressbar-text"
                                            style={{
                                                color: "inherit",
                                                position: "absolute",
                                                right: "0px",
                                                top: "-30px",
                                                padding: "0px",
                                                margin: "0px",
                                            }}
                                        >
                                            100 %
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p>Mobile Design</p>
                                    <div className="progressbar line soft-blue" data-value="80">
                                        <svg
                                            viewBox="0 0 100 6"
                                            preserveAspectRatio="none"
                                            style={{ display: "block", width: "100%" }}
                                        >
                                            <path
                                                d="M 0,3 L 100,3"
                                                stroke="#eee"
                                                strokeWidth="6"
                                                fillOpacity="0"
                                            ></path>
                                            <path
                                                d="M 0,3 L 100,3"
                                                stroke="#555"
                                                strokeWidth="6"
                                                fillOpacity="0"
                                                style={{
                                                    strokeDasharray: "100, 100",
                                                    strokeDashoffset: "20",
                                                }}
                                            ></path>
                                        </svg>
                                        <div
                                            className="progressbar-text"
                                            style={{
                                                color: "inherit",
                                                position: "absolute",
                                                right: "0px",
                                                top: "-30px",
                                                padding: "0px",
                                                margin: "0px",
                                            }}
                                        >
                                            80 %
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p>Development</p>
                                    <div className="progressbar line soft-leaf" data-value="85">
                                        <svg
                                            viewBox="0 0 100 6"
                                            preserveAspectRatio="none"
                                            style={{ display: "block", width: "100%" }}
                                        >
                                            <path
                                                d="M 0,3 L 100,3"
                                                stroke="#eee"
                                                strokeWidth="6"
                                                fillOpacity="0"
                                            ></path>
                                            <path
                                                d="M 0,3 L 100,3"
                                                stroke="#555"
                                                strokeWidth="6"
                                                fillOpacity="0"
                                                style={{
                                                    strokeDasharray: "100, 100",
                                                    strokeDashoffset: "15",
                                                }}
                                            ></path>
                                        </svg>
                                        <div
                                            className="progressbar-text"
                                            style={{
                                                color: "inherit",
                                                position: "absolute",
                                                right: "0px",
                                                top: "-30px",
                                                padding: "0px",
                                                margin: "0px",
                                            }}
                                        >
                                            85 %
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p>SEO</p>
                                    <div className="progressbar line soft-pink" data-value="90">
                                        <svg
                                            viewBox="0 0 100 6"
                                            preserveAspectRatio="none"
                                            style={{ display: "block", width: "100%" }}
                                        >
                                            <path
                                                d="M 0,3 L 100,3"
                                                stroke="#eee"
                                                strokeWidth="6"
                                                fillOpacity="0"
                                            ></path>
                                            <path
                                                d="M 0,3 L 100,3"
                                                stroke="#555"
                                                strokeWidth="6"
                                                fillOpacity="0"
                                                style={{
                                                    strokeDasharray: "100, 100",
                                                    strokeDashoffset: "10",
                                                }}
                                            ></path>
                                        </svg>
                                        <div
                                            className="progressbar-text"
                                            style={{
                                                color: "inherit",
                                                position: "absolute",
                                                right: "0px",
                                                top: "-30px",
                                                padding: "0px",
                                                margin: "0px",
                                            }}
                                        >
                                            90 %
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-4 mb-3">What I Do?</h2>
                            <p className="lead fs-20 mb-5">
                                Duis mollis est commodo luctus nisi erat porttitor ligula,
                                eget lacinia odio sem nec elit. Nullam quis risus eget urna
                                mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
                                Praesent commodo cursus magna, vel scelerisque nisl.
                            </p>
                        </div>
                    </div>
                    <div className="row gx-lg-8 gx-xl-12 gy-6 text-center">
                        <div className="col-md-6 col-lg-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 442.8"
                                data-inject-url="http://localhost:3000/assets/img/icons/lineal/browser.svg"
                                className="svg-inject icon-svg icon-svg-md text-violet mb-3"
                            >
                                <path
                                    className="lineal-stroke"
                                    d="M464.2 442.8H47.7C21.4 442.8 0 421.4 0 395.1V47.7C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7c0 7.6-6.2 13.8-13.8 13.9-7.6 0-13.8-6.2-13.9-13.8 0-11.1-9-20-20.1-20.1H47.7c-11.1 0-20 9-20.1 20.1v347.3c0 11.1 9 20.1 20.1 20.1h416.5c11.1 0 20.1-9 20.1-20.1V209.4c0-7.6 6.2-13.8 13.8-13.9 7.6 0 13.8 6.2 13.9 13.8V395c0 26.4-21.4 47.8-47.8 47.8z"
                                ></path>
                                <path
                                    className="lineal-fill"
                                    d="M13.8 47.7v69.9h484.3V47.7c0-18.7-15.2-33.9-33.9-33.9H47.7C29 13.8 13.8 29 13.8 47.7z"
                                ></path>
                                <path
                                    className="lineal-stroke"
                                    d="M498.2 131.5H13.8c-7.6 0-13.8-6.2-13.8-13.8v-70C0 21.4 21.4 0 47.7 0h416.5C490.6 0 512 21.4 512 47.7v69.9c0 7.7-6.2 13.9-13.8 13.9zM27.7 103.8h456.6v-56c0-11.1-9-20.1-20.1-20.1H47.8c-11.1 0-20 9-20.1 20v56.1z"
                                ></path>
                                <path
                                    className="lineal-stroke"
                                    d="M294.7 79.6h-26.3c-7.6 0-13.8-6.2-13.8-13.8S260.8 52 268.4 52h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8zm73.4 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8 0 7.6-6.2 13.8-13.8 13.8zm73.3 0h-26.3c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8h26.3c7.6 0 13.8 6.2 13.8 13.8.1 7.6-6.1 13.8-13.8 13.8z"
                                ></path>
                                <path
                                    className="lineal-fill"
                                    d="M112.8 268.5h286.4v63.6H112.8z"
                                ></path>
                                <path
                                    className="lineal-stroke"
                                    d="M399.2 345.9H112.8c-7.6 0-13.8-6.2-13.8-13.8v-63.7c0-7.6 6.2-13.8 13.8-13.8h286.4c7.6 0 13.8 6.2 13.8 13.8v63.7c.1 7.6-6.1 13.8-13.8 13.8zm-272.6-27.6h258.8v-36H126.6v36zm230.9-95.5h-203c-7.6.2-14-5.8-14.2-13.5s5.8-14 13.5-14.2h203.8c7.6-.2 14 5.8 14.2 13.5s-5.8 14-13.5 14.2h-.8z"
                                ></path>
                            </svg>
                            <h4>Web Design</h4>
                            <p className="mb-2">
                                Nulla vitae elit libero, a pharetra augue. Donec id elit non
                                mi porta gravida at eget metus. Cras justo cum sociis natoque
                                magnis.
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 327.4 512"
                                data-inject-url="http://localhost:3000/assets/img/icons/lineal/smartphone.svg"
                                className="svg-inject icon-svg icon-svg-md text-blue mb-3"
                            >
                                <path
                                    className="lineal-fill"
                                    d="M313.7 72.3V47c0-18.4-14.9-33.2-33.2-33.2H47c-18.4 0-33.2 14.9-33.2 33.2v25.3h299.9zM13.8 398.4V465c0 18.4 14.9 33.2 33.2 33.2h233.4c18.4 0 33.2-14.9 33.2-33.2v-66.6H13.8z"
                                ></path>
                                <path
                                    className="lineal-stroke"
                                    d="M280.4 0H47C21.1 0 0 21.1 0 47v418c0 25.9 21.1 47 47 47h233.4c25.9 0 47-21.1 47-47V352.3c0-7.6-6.2-13.8-13.8-13.7-7.6 0-13.7 6.2-13.7 13.7v32.3H27.5V86.1h272.4V256c0 7.6 6.1 13.8 13.7 13.8s13.8-6.1 13.8-13.7V47c0-25.9-21-47-47-47zm19.5 412.1V465c0 10.8-8.7 19.5-19.5 19.5H47c-10.8 0-19.5-8.7-19.5-19.5v-52.9h272.4zM27.5 58.6V47c0-10.8 8.7-19.5 19.5-19.5h233.4c10.8 0 19.5 8.7 19.5 19.5v11.6H27.5z"
                                ></path>
                                <circle cx="163.7" cy="448.3" r="9.4"></circle>
                                <path
                                    className="lineal-stroke"
                                    d="M163.7 471.5c-12.8 0-23.2-10.4-23.2-23.2 0-12.8 10.4-23.2 23.2-23.2s23.2 10.4 23.2 23.2-10.4 23.2-23.2 23.2zm-25.4-248.1H69.5c-7.6 0-13.8-6.2-13.8-13.8V150c0-7.6 6.2-13.8 13.8-13.8h68.8c7.6 0 13.8 6.2 13.8 13.8s-6.2 13.8-13.8 13.8h-55v32.1h55c7.6 0 13.8 6.2 13.8 13.8-.1 7.5-6.2 13.7-13.8 13.7z"
                                ></path>
                                <path
                                    className="lineal-fill"
                                    d="M189.2 150H258v59.6h-68.8z"
                                ></path>
                                <path
                                    className="lineal-stroke"
                                    d="M258 223.4h-68.8c-7.6 0-13.8-6.2-13.8-13.8V150c0-7.6 6.2-13.8 13.8-13.8H258c7.6 0 13.7 6.2 13.7 13.8v59.6c0 7.6-6.1 13.8-13.7 13.8zm-55-27.5h41.3v-32.1h-41.4l.1 32.1z"
                                ></path>
                                <path
                                    className="lineal-fill"
                                    d="M69.5 265.6h68.8v59.6H69.5z"
                                ></path>
                                <path
                                    className="lineal-stroke"
                                    d="M138.3 339H69.5c-7.6 0-13.8-6.2-13.8-13.8v-59.7c0-7.6 6.2-13.8 13.8-13.8h68.8c7.6 0 13.7 6.2 13.7 13.8v59.6c0 7.7-6.1 13.9-13.7 13.9zm-55-27.5h41.2v-32.1H83.2l.1 32.1zM258 339h-68.8c-7.6 0-13.8-6.2-13.7-13.8 0-7.6 6.2-13.7 13.7-13.7h55v-32.1h-55c-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8H258c7.6 0 13.8 6.2 13.8 13.8v59.6c0 7.6-6.2 13.8-13.8 13.8z"
                                ></path>
                            </svg>
                            <h4>Mobile Design</h4>
                            <p className="mb-2">
                                Nulla vitae elit libero, a pharetra augue. Donec id elit non
                                mi porta gravida at eget metus. Cras justo cum sociis natoque
                                magnis.
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 427.5"
                                data-inject-url="http://localhost:3000/assets/img/icons/lineal/settings-3.svg"
                                className="svg-inject icon-svg icon-svg-md text-leaf mb-3"
                            >
                                <path
                                    className="lineal-fill"
                                    d="M186.9 353.4h138.3V413H186.9z"
                                ></path>
                                <path
                                    className="lineal-stroke"
                                    d="M460.2 0H51.8C23.2 0 0 23.2 0 51.7v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.7h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-41.9c.3-1.2.4-2.4.4-3.6-.2-8-6.9-14.3-14.8-14.1H51.8C39.2 339 29 328.8 29 316.2V51.7c0-12.6 10.2-22.8 22.8-22.8h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-46.7c-8 .2-14.3 6.9-14.1 14.8.2 8 6.9 14.3 14.8 14.1h45.9c28.6 0 51.7-23.2 51.8-51.7V51.7C512 23.2 488.8 0 460.2 0zM310.7 367.9v30.7H201.3v-30.7h109.4z"
                                ></path>
                                <path
                                    className="lineal-fill"
                                    d="M220.1 271.6c-12.7-19.8-6.9-46.3 12.9-59s46.3-6.9 59 12.9c9 14 9 32 0 46.1h100.6v-50.3l-30.4-4.9c-4.9-16.3-13.6-31.3-25.3-43.7l11-28.7-47.3-27.3-19.4 23.8c-16.6-3.9-33.9-3.9-50.5 0l-19.4-23.8-47.2 27.3 11 28.7c-11.7 12.4-20.3 27.4-25.3 43.7l-30.3 4.9v50.3h100.6z"
                                ></path>
                                <path
                                    className="lineal-stroke"
                                    d="M392.5 286.1H291.9c-8 0-14.5-6.5-14.5-14.5 0-2.8.8-5.5 2.3-7.8 8.4-13.1 4.6-30.6-8.6-39-13.1-8.4-30.6-4.6-39 8.6-5.9 9.3-5.9 21.1 0 30.4 4.3 6.7 2.4 15.7-4.3 20-2.3 1.5-5.1 2.3-7.8 2.3H119.4c-8 0-14.5-6.5-14.4-14.5v-50.3c0-7.1 5.2-13.1 12.2-14.3l21.8-3.5c4.7-12.2 11.3-23.6 19.5-33.7l-7.9-20.6c-2.5-6.6.1-14.1 6.3-17.7l47.3-27.3c6.2-3.5 14-2.1 18.5 3.4l13.9 17.1c12.9-2 26.1-2 39 0l13.9-17.1c4.5-5.5 12.3-7 18.5-3.4l47.3 27.3c6.2 3.6 8.8 11.1 6.3 17.7l-7.9 20.6c8.2 10.2 14.7 21.5 19.4 33.7l21.8 3.5c7 1.1 12.2 7.2 12.2 14.3v50.3c-.1 8-6.6 14.5-14.6 14.5zm-80-29h65.6v-23.5l-18.2-2.9c-5.5-.9-10-4.8-11.6-10.1-4.3-14.2-11.9-27.2-22-38-3.8-4-5-9.9-3-15.1l6.6-17.2-25.9-15-11.6 14.3c-3.5 4.3-9.1 6.2-14.5 5-14.5-3.3-29.5-3.3-43.9 0-5.4 1.2-11-.7-14.5-5l-11.6-14.3-25.9 15 6.6 17.2c2 5.2.8 11-3 15.1-10.1 10.8-17.7 23.8-22 38-1.6 5.3-6.1 9.2-11.6 10.1l-18.2 2.9v23.5h65.6c-.4-2.8-.6-5.7-.6-8.6.4-31.6 26.3-56.8 57.9-56.4 31 .4 56 25.4 56.4 56.4 0 2.9-.2 5.8-.6 8.6z"
                                ></path>
                            </svg>
                            <h4>Development</h4>
                            <p className="mb-2">
                                Nulla vitae elit libero, a pharetra augue. Donec id elit non
                                mi porta gravida at eget metus. Cras justo cum sociis natoque
                                magnis.
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 511.9"
                                data-inject-url="http://localhost:3000/assets/img/icons/lineal/search-2.svg"
                                className="svg-inject icon-svg icon-svg-md text-pink mb-3"
                            >
                                <path
                                    className="lineal-stroke"
                                    d="M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z"
                                ></path>
                                <circle
                                    className="lineal-fill"
                                    cx="297.1"
                                    cy="214.9"
                                    r="111.1"
                                ></circle>
                                <path
                                    className="lineal-stroke"
                                    d="M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z"
                                ></path>
                            </svg>
                            <h4>SEO</h4>
                            <p className="mb-2">
                                Nulla vitae elit libero, a pharetra augue. Donec id elit non
                                mi porta gravida at eget metus. Cras justo cum sociis natoque
                                magnis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper bg-light wrapper-border">
                <div className="container py-14 pt-md-18 pb-md-16">
                    <div className="row align-items-center mb-10">
                        <div className="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
                            <h2 className="display-4 mb-3">Latest Projects</h2>
                            <p className="lead fs-20 mb-0">
                                Check out some of my latest projects with creative ideas.
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
                            <a
                                href="/#"
                                className="btn btn-outline-primary rounded-pill mb-0"
                            >
                                See All Projects
                            </a>
                        </div>
                    </div>
                    <div className="card bg-soft-violet mb-10">
                        <div className="card-body p-12 pb-0">
                            <div className="row">
                                <div className="col-lg-4 pb-12 align-self-center">
                                    <div className="post-category mb-3 text-violet">
                                        Web Design
                                    </div>
                                    <h3 className="h1 post-title mb-3">Snowlake Theme</h3>
                                    <p>
                                        Maecenas faucibus mollis interdum sed posuere consectetur
                                        est at lobortis. Scelerisque id ligula porta felis euismod
                                        semper. Fusce dapibus tellus cursus.
                                    </p>
                                    <a href="/#" className="more hover link-violet">
                                        See Project
                                    </a>
                                </div>
                                <div className="col-lg-7 offset-lg-1 align-self-end">
                                    <figure>
                                        <img
                                            className="img-fluid"
                                            src={photoF1}
                                            srcSet={`${photoF12x} 2x`}
                                            alt=""
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-soft-blue mb-10">
                        <div className="card-body p-12">
                            <div className="row gy-10 align-items-center">
                                <div className="col-lg-4 order-lg-2 offset-lg-1">
                                    <div className="post-category mb-3 text-blue">
                                        Mobile Design
                                    </div>
                                    <h3 className="h1 post-title mb-3">Budget App</h3>
                                    <p>
                                        Maecenas faucibus mollis interdum sed posuere consectetur
                                        est at lobortis. Scelerisque id ligula porta felis euismod
                                        semper. Fusce dapibus tellus cursus.
                                    </p>
                                    <a href="/#" className="more hover link-blue">
                                        See Project
                                    </a>
                                </div>
                                <div className="col-lg-7">
                                    <figure>
                                        <img
                                            className="img-fluid"
                                            src={photoF2}
                                            srcSet={`${photoF22x} 2x`}
                                            alt=""
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-md-8 gx-xl-10">
                        <div className="col-lg-6">
                            <div className="card bg-soft-leaf mb-10">
                                <div className="card-body p-12 pb-0">
                                    <div className="post-category mb-3 text-leaf">
                                        Web Design
                                    </div>
                                    <h3 className="h1 post-title mb-3">Missio Theme</h3>
                                    <p>
                                        Maecenas faucibus mollis interdum sed posuere porta
                                        consectetur cursus porta lobortis. Scelerisque id ligula
                                        felis.
                                    </p>
                                    <a href="/#" className="more hover link-leaf mb-8">
                                        See Project
                                    </a>
                                </div>
                                <img
                                    className="card-img-bottom"
                                    src={photoF3}
                                    srcSet={`${photoF32x} 2x`}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card bg-soft-pink">
                                <div className="card-body p-12 pb-0">
                                    <div className="post-category mb-3 text-pink">
                                        Mobile Design
                                    </div>
                                    <h3 className="h1 post-title mb-3">Storage App</h3>
                                    <p>
                                        Maecenas faucibus mollis interdum sed posuere consectetur
                                        est at lobortis. Scelerisque id ligula porta felis euismod
                                        semper.
                                    </p>
                                    <a href="/#" className="more hover link-pink mb-8">
                                        See Project
                                    </a>
                                </div>
                                <img
                                    className="card-img-bottom"
                                    src={photoF4}
                                    srcSet={`${photoF42x} 2x`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <footer>
            <div className="container pt-14 pt-md-18 pb-7">
                <div className="card bg-soft-primary mb-8">
                    <div className="card-body p-12">
                        <div className="row gx-md-8 gx-xl-12 gy-10">
                            <div className="col-lg-6">
                                <img
                                    src={emailSvg}
                                    className="svg-inject icon-svg icon-svg-sm mb-4"
                                    alt=""
                                />
                                <h2 className="display-4 mb-3 pe-lg-10">
                                    If you like what you see, let's work together.
                                </h2>
                                <p className="lead pe-lg-12 mb-0">
                                    I bring rapid solutions to make the life of my clients
                                    easier. Have any questions? Reach out to me from this
                                    contact form and I will get back to you shortly.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <form
                                    className="contact-form needs-validation"
                                    method="post"
                                    noValidate
                                >
                                    <div className="messages"></div>
                                    <div className="row gx-4">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-4">
                                                <input
                                                    id="form_name"
                                                    type="text"
                                                    name="name"
                                                    className="form-control border-0"
                                                    placeholder="Jane"
                                                    required={true}
                                                    data-error="First Name is required."
                                                />
                                                <label htmlFor="form_name">Name *</label>
                                                <div className="valid-feedback">Looks good!</div>
                                                <div className="invalid-feedback">
                                                    Please enter your name.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mb-4">
                                                <input
                                                    id="form_email"
                                                    type="email"
                                                    name="email"
                                                    className="form-control border-0"
                                                    placeholder="jane.doe@example.com"
                                                    required={true}
                                                    data-error="Valid email is required."
                                                />
                                                <label htmlFor="form_email">Email *</label>
                                                <div className="valid-feedback">Looks good!</div>
                                                <div className="invalid-feedback">
                                                    Please provide a valid email address.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-4">
                                                <textarea
                                                    id="form_message"
                                                    name="message"
                                                    className="form-control border-0"
                                                    placeholder="Your message"
                                                    style={{ height: "150px" }}
                                                    required
                                                ></textarea>
                                                <label htmlFor="form_message">Message *</label>
                                                <div className="valid-feedback">Looks good!</div>
                                                <div className="invalid-feedback">
                                                    Please enter your messsage.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="submit"
                                                className="btn btn-outline-primary rounded-pill btn-send mb-3"
                                                value="Send message"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer6Widgets />
            </div>
        </footer>
        <PageProgress />
    </div>);
}

export default IndexFirst;