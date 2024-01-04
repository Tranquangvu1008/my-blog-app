import React, { useEffect } from 'react'
import PageProgress from 'components/PageProgress';
import FooterWidgets from 'components/FooterWidgets';
import Navbar from 'components/Navbar';

import bg25 from "assets/img/photos/bg25.png";
import map from "assets/img/map.png";

import { motion } from 'framer-motion';

const Contact = () => {
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

    return (<motion.div initial="hidden"
        animate="visible"
        variants={textVariants}>
        <div className="content-wrapper">
            <header className="wrapper bg-soft-primary">
                <Navbar classList="center-nav transparent position-absolute navbar-dark"
                    logoBoth={true}
                    otherClassList={"w-100 d-flex ms-auto"}
                    otherLanguageSelect={true}
                    otherBtn={true}
                    otherBtnClassList={"btn-sm btn-white rounded-pill"}
                    otherBtnText={"Contact"}
                    otherBtnLink={"/contact"}
                />
            </header>
            <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" data-image-src={bg25}
                style={{ backgroundImage: `url(${bg25})` }}>
                <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="display-1 mb-3 text-white">Get in Touch</h1>
                            <nav className="d-inline-block" aria-label="breadcrumb">
                                <ol className="breadcrumb text-white">
                                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

            </section>
            <section className="wrapper bg-light angled upper-end">
                <div className="container pb-11">
                    <div className="row mb-14 mb-md-16">
                        <div className="col-xl-10 mx-auto mt-n19">
                            <div className="card">
                                <div className="row gx-0">
                                    <div className="col-lg-6 align-self-stretch">
                                        <div className="map map-full rounded-top rounded-lg-start">
                                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62682.497206672095!2d106.7473767446782!3d10.913720946203973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d91eb88b3a0d%3A0xc29bee41fcab904c!2zRMSpIEFuLCBCw6xuaCBExrDGoW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1703239024782!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62682.497206672095!2d106.7473767446782!3d10.913720946203973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d91eb88b3a0d%3A0xc29bee41fcab904c!2zRMSpIEFuLCBCw6xuaCBExrDGoW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1703239024782!5m2!1svi!2s" title='map' style={{ width: "100%", height: "100%", border: "0" }} allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-10 p-md-11 p-lg-14">
                                            <div className="d-flex flex-row">
                                                <div>
                                                    <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-location-pin-alt"></i> </div>
                                                </div>
                                                <div className="align-self-start justify-content-start">
                                                    <h5 className="mb-1">Address</h5>
                                                    <address>Moonshine St. 14/05 Light City, <br className="d-none d-md-block" />London, United Kingdom</address>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <div>
                                                    <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-phone-volume"></i> </div>
                                                </div>
                                                <div>
                                                    <h5 className="mb-1">Phone</h5>
                                                    <p>00 (123) 456 78 90 <br />00 (987) 654 32 10</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <div>
                                                    <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-envelope"></i> </div>
                                                </div>
                                                <div>
                                                    <h5 className="mb-1">E-mail</h5>
                                                    <p className="mb-0"><a href="mailto:sandbox@email.com" className="link-body">sandbox@email.com</a></p>
                                                    <p className="mb-0"><a href="mailto:help@sandbox.com" className="link-body">help@sandbox.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                            <h2 className="display-4 mb-3 text-center">Drop Us a Line</h2>
                            <p className="lead text-center mb-10">Reach out to us from our contact form and we will get back to you shortly.</p>
                            <form className="contact-form needs-validation" method="post" action="@@webRoot/assets/php/contact.php" noValidate>
                                <div className="messages"></div>
                                <div className="row gx-4">
                                    <div className="col-md-6">
                                        <div className="form-floating mb-4">
                                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Jane" required />
                                            <label htmlFor="form_name">First Name *</label>
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                            <div className="invalid-feedback">
                                                Please enter your first name.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating mb-4">
                                            <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Doe" required />
                                            <label htmlFor="form_lastname">Last Name *</label>
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                            <div className="invalid-feedback">
                                                Please enter your last name.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating mb-4">
                                            <input id="form_email" type="email" name="email" className="form-control" placeholder="jane.doe@example.com" required />
                                            <label htmlFor="form_email">Email *</label>
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                            <div className="invalid-feedback">
                                                Please provide a valid email address.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-select-wrapper mb-4">
                                            <select className="form-select" id="form-select" name="department" required defaultValue="">
                                                <option disabled value="">Select a department</option>
                                                <option value="Sales">Sales</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Customer Support">Customer Support</option>
                                            </select>
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                            <div className="invalid-feedback">
                                                Please select a department.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating mb-4">
                                            <textarea id="form_message" name="message" className="form-control" placeholder="Your message" style={{ height: "150px" }} required></textarea>
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
                                        <input type="submit" className="btn btn-primary rounded-pill btn-send mb-3" value="Send message" />
                                        <p className="text-muted"><strong>*</strong> These fields are required.</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
            <section className="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map" data-image-src={map} style={{ backgroundImage: `url(${map})` }}>
                <div className="container pt-0 pb-14 pt-md-16 pb-md-18">
                    <div className="row">
                        <div className="col-lg-9 col-xxl-8 mx-auto">
                            <h3 className="display-4 mb-8 px-xl-12">We are trusted by over 5000+ clients. Join them now and grow your business.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-lg-9 col-xl-7 mx-auto">
                            <div className="row align-items-center counter-wrapper gy-4 gy-md-0">
                                <div className="col-md-4 text-center">
                                    <h3 className="counter counter-lg text-primary">7518</h3>
                                    <p>Completed Projects</p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <h3 className="counter counter-lg text-primary">5472</h3>
                                    <p>Satisfied Customers</p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <h3 className="counter counter-lg text-primary">2184</h3>
                                    <p>Expert Employees</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
        <footer className="bg-dark text-inverse mt-0 mt-md-16">
            <div className="container py-13 py-md-15">
                <FooterWidgets lightText={true} />
            </div>

        </footer>
        <PageProgress />
    </motion.div>);
}

export default Contact;