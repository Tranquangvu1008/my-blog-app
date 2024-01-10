import Navbar from 'components/Navbar';
import PageProgress from 'components/PageProgress';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import cf1 from "assets/img/photos/cf1.jpg"
import cf2 from "assets/img/photos/cf2.jpg"
import cf3 from "assets/img/photos/cf3.jpg"
import cf4 from "assets/img/photos/cf4.jpg"
import cf5 from "assets/img/photos/cf5.jpg"
import cf6 from "assets/img/photos/cf6.jpg"
import fs4 from "assets/img/photos/fs4.jpg"
import fs5 from "assets/img/photos/fs5.jpg"
import fs6 from "assets/img/photos/fs6.jpg"
import fs7 from "assets/img/photos/fs7.jpg"
import bg34 from "assets/img/photos/bg34.jpg"
import bg35 from "assets/img/photos/bg35.jpg"
import bg36 from "assets/img/photos/bg36.jpg"
import pf1 from "assets/img/photos/pf1-full.jpg"
import pf2 from "assets/img/photos/pf2-full.jpg"
import pf3 from "assets/img/photos/pf3-full.jpg"
import pf4 from "assets/img/photos/pf4-full.jpg"
import pf5 from "assets/img/photos/pf5-full.jpg"
import pf6 from "assets/img/photos/pf6-full.jpg"
import pf7 from "assets/img/photos/pf7-full.jpg"
import pf8 from "assets/img/photos/pf8-full.jpg"
import pf9 from "assets/img/photos/pf9-full.jpg"
import pf10 from "assets/img/photos/pf10-full.jpg"
import pf11 from "assets/img/photos/pf11-full.jpg"
import pf12 from "assets/img/photos/pf12-full.jpg"
import pf13 from "assets/img/photos/pf13-full.jpg"
import about30 from "assets/img/photos/about30.jpg"
import logoAltSrc from 'assets/img/logo-dark.png';
import logoAlt2xSrc from 'assets/img/logo-dark@2x.png';

import "assets/css/fonts/urbanist.css"
import "assets/css/colors/yellow.css"
import "./index.scss"

const Food = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const textVariants = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    const slideImages = [cf1, cf2, cf3, cf4, cf5, cf6];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slideImages.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: any) => {
        setCurrentIndex(slideIndex);
    };


    return (<motion.div className='onepage' initial="hidden"
        animate="visible"
        variants={textVariants}>
        <div className="content-wrapper">
            <header className="wrapper bg-soft-primary">
                <Navbar classList={"extended extended-alt navbar-light navbar-bg-light"}
                    otherClassList={"w-100 d-flex ms-auto"}
                    otherSearch={true}
                    otherBtn={true}
                    otherBtnClassList={"btn-sm btn-primary rounded-pill"}
                    otherBtnText={"Login"}
                    otherBtnLink={"/login"}
                    logoAlt={true}
                />
            </header>
            <section id="home">
                <div className="wrapper bg-gray overflow-hidden">
                    <div className="container-fluid px-xl-0 pt-6 pb-10">
                        <div className="swiper-container swiper-auto" data-margin="30" data-dots="true" data-nav="true" data-centered="true" data-loop="true" data-items-auto="true">
                            <div className="swiper overflow-visible">
                                {/* <div className="swiper-wrapper"> */}
                                {/* <div className="swiper-slide"> */}
                                <div className='max-w-[80%] h-[80vh] w-full m-auto py-10 px-4 relative group'>
                                    <div
                                        style={{ backgroundImage: `url(${slideImages[currentIndex]})` }}
                                        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                                    ></div>
                                    {/* Left Arrow */}
                                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-amber-400 cursor-pointer'>
                                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                                    </div>
                                    {/* Right Arrow */}
                                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-amber-400 cursor-pointer'>
                                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                                    </div>
                                    <div className='flex top-4 justify-center py-2'>
                                        {slideImages.map((slide, slideIndex) => (
                                            <div
                                                key={slideIndex}
                                                onClick={() => goToSlide(slideIndex)}
                                                className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? "text-amber-300" : ""}`}
                                            >
                                                <RxDotFilled />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services">
                <div className="wrapper bg-gray">
                    <div className="container py-15 py-md-17">
                        <div className="row gx-lg-0 gy-10 align-items-center">
                            <div className="col-lg-6">
                                <div className="row g-6 text-center">
                                    <div className="col-md-6">
                                        <div className="card shadow-lg mb-6">
                                            <figure className="card-img-top overlay overlay-1">
                                                <a href="/#"><img className="img-fluid" src={fs4} alt="" /></a>
                                                <figcaption>
                                                    <h5 className="from-top mb-0">View Gallery</h5>
                                                </figcaption>
                                            </figure>
                                            <div className="card-body p-4">
                                                <h3 className="h4 mb-0">Products</h3>
                                            </div>

                                        </div>
                                        <div className="card shadow-lg">
                                            <figure className="card-img-top overlay overlay-1">
                                                <a href="/#"><img className="img-fluid" src={fs6} alt="" /></a>
                                                <figcaption>
                                                    <h5 className="from-top mb-0">View Gallery</h5>
                                                </figcaption>
                                            </figure>
                                            <div className="card-body p-4">
                                                <h3 className="h4 mb-0">Recipes</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card shadow-lg mt-md-6 mb-6">
                                            <figure className="card-img-top overlay overlay-1">
                                                <a href="/#"><img className="img-fluid" src={fs5} alt="" /></a>
                                                <figcaption>
                                                    <h5 className="from-top mb-0">View Gallery</h5>
                                                </figcaption>
                                            </figure>
                                            <div className="card-body p-4">
                                                <h3 className="h4 mb-0">Restaurants</h3>
                                            </div>
                                        </div>
                                        <div className="card shadow-lg">
                                            <figure className="card-img-top overlay overlay-1">
                                                <a href="/#"><img className="img-fluid" src={fs7} alt="" /></a>
                                                <figcaption>
                                                    <h5 className="from-top mb-0">View Gallery</h5>
                                                </figcaption>
                                            </figure>
                                            <div className="card-body p-4">
                                                <h3 className="h4 mb-0">Still Life</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <h2 className="display-5 mb-3">My Services</h2>
                                <p className="lead fs-lg">I would like to give you a unique photography experience, capture your products with excellent composition and lighting skills.</p>
                                <p>Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis elit interdum. Duis mollis, est non commodo luctus, nisi erat ligula mollis metus auctor fringilla.</p>
                                <a href="/#" className="btn btn-primary rounded-pill mt-2">More Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="wrapper image-wrapper bg-image bg-overlay text-white" style={{ backgroundImage: `url(${bg34})` }}>
                <div className="container py-16 py-md-19 text-center">
                    <h2 className="display-1 text-white mb-0">I take photographs with <br className="d-none d-md-block" /> creativity, concept & passion</h2>
                </div>
            </div>
            <section id="portfolio">
                <div className="wrapper bg-gray">
                    <div className="container py-15 py-md-17 text-center">
                        <div className="row">
                            <div className="col-lg-10 col-xl-8 col-xxl-7 mx-auto mb-8">
                                <h2 className="display-5 mb-3">My Selected Shots</h2>
                                <p className="lead fs-lg">Photography is my passion and I love to turn ideas into beautiful things.</p>
                            </div>
                        </div>
                        <div className="grid grid-view projects-masonry">
                            <div className="isotope-filter filter mb-10">
                                <ul>
                                    <li><a className="filter-item active" data-filter="*" href='/#'>All</a></li>
                                    <li><a className="filter-item" data-filter=".foods" href='/#'>Foods</a></li>
                                    <li><a className="filter-item" data-filter=".drinks" href='/#'>Drinks</a></li>
                                    <li><a className="filter-item" data-filter=".events" href='/#'>Events</a></li>
                                    <li><a className="filter-item" data-filter=".pastries" href='/#'>Pastries</a></li>
                                </ul>
                            </div>
                            <div className="row gx-md-6 gy-6 isotope">
                                <div className="project item col-md-6 col-xl-4 drinks events">
                                    <figure className="overlay overlay-1 rounded"><a href={pf1} data-glightbox data-gallery="shots-group"> <img src={pf1} alt="" /></a>
                                        <figcaption>
                                            <h5 className="from-top mb-0">Fringilla Nullam</h5>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div className="project item col-md-6 col-xl-4 events">
                                    <figure className="overlay overlay-1 rounded"><a href={pf2} data-glightbox data-gallery="shots-group"> <img src={pf2} alt="" /></a>
                                        <figcaption>
                                            <h5 className="from-top mb-0">Ridiculus Parturient</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="project item col-md-6 col-xl-4 drinks foods">
                                    <figure className="overlay overlay-1 rounded"><a href={pf3} data-glightbox data-gallery="shots-group"> <img src={pf3} alt="" /></a>
                                        <figcaption>
                                            <h5 className="from-top mb-0">Ornare Ipsum</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="project item col-md-6 col-xl-4 events">
                                    <figure className="overlay overlay-1 rounded"><a href={pf4} data-glightbox data-gallery="shots-group"> <img src={pf4} alt="" /></a>
                                        <figcaption>
                                            <h5 className="from-top mb-0">Nullam Mollis</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="project item col-md-6 col-xl-4 pastries events">
                                    <figure className="overlay overlay-1 rounded"><a href={pf5} data-glightbox data-gallery="shots-group"> <img src={pf5} alt="" /></a>
                                        <figcaption>
                                            <h5 className="from-top mb-0">Euismod Risus</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="project item col-md-6 col-xl-4 foods">
                                    <figure className="overlay overlay-1 rounded"><a href={pf6} data-glightbox data-gallery="shots-group"> <img src={pf6} alt="" /></a>
                                        <figcaption>
                                            <h5 className="from-top mb-0">Ridiculus Tristique</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="project item col-md-6 col-xl-4 foods drinks">
                                    <figure className="overlay overlay-1 rounded"><a href={pf7} data-glightbox data-gallery="shots-group"> <img src={pf7} alt="" /></a>
                                        <figcaption>
                                            <h5 className="from-top mb-0">Sollicitudin Pharetra</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="project item col-md-6 col-xl-4 pastries">
                                    <figure className="overlay overlay-1 rounded"><a href={pf8} data-glightbox data-gallery="shots-group"> <img src={pf8} alt="" /></a>
                                        <figcaption>
                                            <h5 className="from-top mb-0">Tristique Venenatis</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="project item col-md-6 col-xl-4 events">
                                    <figure className="overlay overlay-1 rounded"><a href={pf9} data-glightbox data-gallery="shots-group"> <img src={pf9} alt="" /></a>
                                        <figcaption>
                                            <h5 className="from-top mb-0">Cursus Fusce</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="project item col-md-6 col-xl-4 foods">
                                    <figure className="overlay overlay-1 rounded"><a href={pf10} data-glightbox data-gallery="shots-group"> <img src={pf10} alt="" /></a>
                                        <figcaption>
                                            <h5 className="from-top mb-0">Consectetur Malesuada</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="project item col-md-6 col-xl-4 drinks">
                                    <figure className="overlay overlay-1 rounded"><a href={pf11} data-glightbox data-gallery="shots-group"> <img src={pf11} alt="" /></a>
                                        <figcaption>
                                            <h5 className="from-top mb-0">Ultricies Aenean</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="project item col-md-6 col-xl-4 foods">
                                    <figure className="overlay overlay-1 rounded"><a href={pf12} data-glightbox data-gallery="shots-group"> <img src={pf12} alt="" /></a>
                                        <figcaption>
                                            <h5 className="from-top mb-0">Pellentesque Commodo</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="project item col-md-6 col-xl-4 drinks">
                                    <figure className="overlay overlay-1 rounded"><a href={pf13} data-glightbox data-gallery="shots-group"> <img src={pf13} alt="" /></a>
                                        <figcaption>
                                            <h5 className="from-top mb-0">Ultricies Aenean</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials">
                <div className="wrapper image-wrapper bg-image bg-overlay" style={{ backgroundImage: `url(${bg35})` }}>
                    <div className="container py-15 py-md-17">
                        <h2 className="display-5 mb-4 text-center text-white">Happy Customers</h2>
                        <div className="swiper-container dots-closer dots-light dots-light-75" data-margin="0" data-dots="true" data-items-xl="3" data-items-md="2" data-items-xs="1">
                            <div className="swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="item-inner">
                                            <div className="card border-0 bg-white-900">
                                                <div className="card-body">
                                                    <span className="ratings five mb-3"></span>
                                                    <blockquote className="border-0 mb-0">
                                                        <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”</p>
                                                        <div className="blockquote-details">
                                                            <div className="info p-0">
                                                                <h5 className="mb-0">Coriss Ambady</h5>
                                                                <p className="mb-0">Financial Analyst</p>
                                                            </div>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item-inner">
                                            <div className="card border-0 bg-white-900">
                                                <div className="card-body">
                                                    <span className="ratings five mb-3"></span>
                                                    <blockquote className="border-0 mb-0">
                                                        <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”</p>
                                                        <div className="blockquote-details">
                                                            <div className="info p-0">
                                                                <h5 className="mb-0">Cory Zamora</h5>
                                                                <p className="mb-0">Marketing Specialist</p>
                                                            </div>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item-inner">
                                            <div className="card border-0 bg-white-900">
                                                <div className="card-body">
                                                    <span className="ratings five mb-3"></span>
                                                    <blockquote className="border-0 mb-0">
                                                        <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”</p>
                                                        <div className="blockquote-details">
                                                            <div className="info p-0">
                                                                <h5 className="mb-0">Nikolas Brooten</h5>
                                                                <p className="mb-0">Sales Manager</p>
                                                            </div>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item-inner">
                                            <div className="card border-0 bg-white-900">
                                                <div className="card-body">
                                                    <span className="ratings five mb-3"></span>
                                                    <blockquote className="border-0 mb-0">
                                                        <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”</p>
                                                        <div className="blockquote-details">
                                                            <div className="info p-0">
                                                                <h5 className="mb-0">Coriss Ambady</h5>
                                                                <p className="mb-0">Financial Analyst</p>
                                                            </div>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item-inner">
                                            <div className="card border-0 bg-white-900">
                                                <div className="card-body">
                                                    <span className="ratings five mb-3"></span>
                                                    <blockquote className="border-0 mb-0">
                                                        <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”</p>
                                                        <div className="blockquote-details">
                                                            <div className="info p-0">
                                                                <h5 className="mb-0">Jackie Sanders</h5>
                                                                <p className="mb-0">Investment Planner</p>
                                                            </div>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item-inner">
                                            <div className="card border-0 bg-white-900">
                                                <div className="card-body">
                                                    <span className="ratings five mb-3"></span>
                                                    <blockquote className="border-0 mb-0">
                                                        <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”</p>
                                                        <div className="blockquote-details">
                                                            <div className="info p-0">
                                                                <h5 className="mb-0">Laura Widerski</h5>
                                                                <p className="mb-0">Sales Specialist</p>
                                                            </div>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="wrapper bg-gray">
                    <div className="container py-14 py-md-16">
                        <div className="row gx-md-8 gx-xl-12 gy-6 align-items-center">
                            <div className="col-md-8 col-lg-6 order-lg-2 mx-auto">
                                <div className="img-mask mask-2"><img src={about30} alt="" /></div>
                            </div>

                            <div className="col-lg-6">
                                <h2 className="display-5 mb-3">About Me</h2>
                                <p className="lead fs-lg">I'm Caitlyn Sandbox, a photographer specializing in food, drink and product photography.</p>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula.</p>
                                <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur.</p>
                                <a href="/#" className="btn btn-primary rounded-pill mt-2">Learn More</a>
                            </div>

                        </div>
                        <div className="row gx-md-8 gx-xl-12 mt-10 mt-md-13">
                            <div className="col-lg-4">
                                <h2 className="display-5 mb-3">My Working Process</h2>
                                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus. Aenean eu leo quam.</p>
                            </div>
                            <div className="col-lg-8">
                                <div className="row gy-6 gx-md-8 gx-xl-12">
                                    <div className="col-md-6">
                                        <div className="d-flex flex-row">
                                            <div>
                                                <span className="icon btn btn-circle btn-primary pe-none me-4"><span className="number fs-18">1</span></span>
                                            </div>
                                            <div>
                                                <h4 className="mb-1">Concept</h4>
                                                <p className="mb-0">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex flex-row">
                                            <div>
                                                <span className="icon btn btn-circle btn-primary pe-none me-4"><span className="number fs-18">2</span></span>
                                            </div>
                                            <div>
                                                <h4 className="mb-1">Prepare</h4>
                                                <p className="mb-0">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex flex-row">
                                            <div>
                                                <span className="icon btn btn-circle btn-primary pe-none me-4"><span className="number fs-18">3</span></span>
                                            </div>
                                            <div>
                                                <h4 className="mb-1">Retouch</h4>
                                                <p className="mb-0">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex flex-row">
                                            <div>
                                                <span className="icon btn btn-circle btn-primary pe-none me-4"><span className="number fs-18">4</span></span>
                                            </div>
                                            <div>
                                                <h4 className="mb-1">Finalize</h4>
                                                <p className="mb-0">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="pricing">
                <div className="wrapper image-wrapper bg-image bg-overlay" style={{ backgroundImage: `url(${bg36})` }}>
                    <div className="container py-15 py-md-17">
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <div className="card border-0 bg-white-900">
                                    <div className="card-body py-lg-13 px-lg-16">
                                        <h2 className="display-5 mb-3 text-center">Request Photography Pricing</h2>
                                        <p className="lead fs-lg text-center mb-10">For more information please get in touch using the form below:</p>
                                        <form className="contact-form needs-validation" method="post" noValidate>
                                            <div className="messages"></div>
                                            <div className="row gx-4">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-4">
                                                        <input id="form_name" type="text" name="name" className="form-control bg-white-700 border-0" placeholder="Name" required />
                                                        <label htmlFor="form_name">Name *</label>
                                                        <div className="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                        <div className="invalid-feedback">
                                                            Please enter your name.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-4">
                                                        <input id="form_email" type="email" name="email" className="form-control bg-white-700 border-0" placeholder="jane.doe@example.com" required />
                                                        <label htmlFor="form_email">Email *</label>
                                                        <div className="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                        <div className="invalid-feedback">
                                                            Please provide a valid email address.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating mb-4">
                                                        <textarea id="form_message" name="message" className="form-control bg-white-700 border-0" placeholder="Your message" style={{ height: "150px" }} required></textarea>
                                                        <label htmlFor="form_message">Message *</label>
                                                        <div className="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                        <div className="invalid-feedback">
                                                            Please enter your messsage.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 text-center">
                                                    <input type="submit" className="btn btn-primary rounded-pill btn-send" value="Send message" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <footer className="bg-gray">
            <div className="container pt-13 pb-7">
                <div className="row gx-lg-0 gy-6">
                    <div className="col-lg-4">
                        <div className="widget">
                            <img className="mb-4" src={logoAltSrc} srcSet={`${logoAlt2xSrc} 2x`} alt="" />
                            <p className="lead mb-0">I'm Caitlyn Sandbox, a photographer specializing in food, drink and product photography.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-2">
                        <div className="widget">
                            <div className="d-flex flex-row">
                                <div>
                                    <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-phone-volume"></i> </div>
                                </div>
                                <div>
                                    <h5 className="mb-1">Phone</h5>
                                    <p className="mb-0">00 (123) 456 78 90 <br />00 (987) 654 32 10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="widget">
                            <div className="d-flex flex-row">
                                <div>
                                    <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-location-pin-alt"></i> </div>
                                </div>
                                <div className="align-self-start justify-content-start">
                                    <h5 className="mb-1">Address</h5>
                                    <address>Moonshine St. 14/05 Light City, London, United Kingdom</address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-11 mt-md-12 mb-7" />
                <div className="d-md-flex align-items-center justify-content-between">
                    <p className="mb-2 mb-lg-0">© 2023 Sandbox. All rights reserved.</p>
                    <nav className="nav social social-muted mb-0 text-md-end">
                        <a href="/#"><i className="uil uil-twitter"></i></a>
                        <a href="/#"><i className="uil uil-facebook-f"></i></a>
                        <a href="/#"><i className="uil uil-dribbble"></i></a>
                        <a href="/#"><i className="uil uil-instagram"></i></a>
                        <a href="/#"><i className="uil uil-youtube"></i></a>
                    </nav>

                </div>
            </div>
        </footer>
        <PageProgress />
    </motion.div>);
}

export default Food;