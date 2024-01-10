import React, { useEffect } from 'react'
import PageProgress from 'components/PageProgress';
import FooterWidgets from 'components/FooterWidgets';
import Navbar from 'components/Navbar';

import b1 from "assets/img/photos/b1.jpg";
import b2 from "assets/img/photos/b2.jpg";
import b3 from "assets/img/photos/b3.jpg";
import b4 from "assets/img/photos/b4.jpg";
import b5 from "assets/img/photos/b5.jpg";
import b6 from "assets/img/photos/b6.jpg";
import b7 from "assets/img/photos/b7.jpg";
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import SidebarWidgets from 'components/SidebarWidgets';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
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

    return (<motion.div variants={containerVariants}
        initial="hidden"
        animate="visible">
        <div className="content-wrapper">
            <header className="wrapper bg-soft-primary">
                <Navbar classList={"center-nav navbar-light navbar-bg-light"}
                    otherClassList={"w-100 d-flex ms-auto"}
                    // otherSearch={true}
                    otherBtn={true}
                    otherBtnClassList={"btn-sm btn-primary rounded-pill"}
                    otherBtnText={"Login"}
                    otherBtnLink={"/login"}
                />
            </header>
            <section className="section-frame overflow-hidden">
                <div className="wrapper bg-soft-primary">
                    <div className="container py-12 py-md-16 text-center">
                        <div className="row">
                            <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
                                <h1 className="display-1 mb-3"><motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.25, duration: 0.5 }}
                                >
                                    Business News
                                </motion.span></h1>
                                <motion.p className="lead px-lg-5 px-xxl-8 mb-1" variants={textVariants}>Welcome to our journal. Here you can find the latest company news and business articles.</motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row gx-lg-8 gx-xl-12">
                        <div className="col-lg-8">
                            <div className="blog classic-view">
                                <article className="post">
                                    <div className="card">
                                        <figure className="card-img-top overlay overlay-1 hover-scale"><Link to={"/blog/1"}><img src={b1} alt="" /></Link>
                                            <figcaption>
                                                <h5 className="from-top mb-0">Read More</h5>
                                            </figcaption>
                                        </figure>
                                        <div className="card-body">
                                            <div className="post-header">
                                                <div className="post-category text-line">
                                                    <a href="/#" className="hover" rel="category">Teamwork</a>
                                                </div>
                                                <h2 className="post-title mt-1 mb-0"><Link className="link-dark" to={"/blog/1"}>Amet Dolor Bibendum Parturient Cursus</Link></h2>
                                            </div>
                                            <div className="post-content">
                                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus.</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <ul className="post-meta d-flex mb-0">
                                                <li className="post-date"><i className="uil uil-calendar-alt"></i><span>5 Jul 2022</span></li>
                                                <li className="post-author"><a href="/#"><i className="uil uil-user"></i><span>By Sandbox</span></a></li>
                                                <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>3<span> Comments</span></a></li>
                                                <li className="post-likes ms-auto"><a href="/#"><i className="uil uil-heart-alt"></i>3</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                                <article className="post">
                                    <div className="card">
                                        <figure className="card-img-top overlay overlay-1 hover-scale"><Link to={"/blog/1"}><img src={b2} alt="" /></Link>
                                            <figcaption>
                                                <h5 className="from-top mb-0">Read More</h5>
                                            </figcaption>
                                        </figure>
                                        <div className="card-body">
                                            <div className="post-header">
                                                <div className="post-category text-line">
                                                    <a href="/#" className="hover" rel="category">Teamwork</a>
                                                </div>
                                                <h2 className="post-title mt-1 mb-0"><Link className="link-dark" to={"/blog/1"}>Amet Dolor Bibendum Parturient Cursus</Link></h2>
                                            </div>
                                            <div className="post-content">
                                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus.</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <ul className="post-meta d-flex mb-0">
                                                <li className="post-date"><i className="uil uil-calendar-alt"></i><span>5 Jul 2022</span></li>
                                                <li className="post-author"><a href="/#"><i className="uil uil-user"></i><span>By Sandbox</span></a></li>
                                                <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>3<span> Comments</span></a></li>
                                                <li className="post-likes ms-auto"><a href="/#"><i className="uil uil-heart-alt"></i>3</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                                <article className="post">
                                    <div className="card">
                                        <figure className="card-img-top overlay overlay-1 hover-scale"><Link to={"/blog/1"}><img src={b3} alt="" /></Link>
                                            <figcaption>
                                                <h5 className="from-top mb-0">Read More</h5>
                                            </figcaption>
                                        </figure>
                                        <div className="card-body">
                                            <div className="post-header">
                                                <div className="post-category text-line">
                                                    <a href="/#" className="hover" rel="category">Teamwork</a>
                                                </div>
                                                <h2 className="post-title mt-1 mb-0"><Link className="link-dark" to={"/blog/1"}>Amet Dolor Bibendum Parturient Cursus</Link></h2>
                                            </div>
                                            <div className="post-content">
                                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus.</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <ul className="post-meta d-flex mb-0">
                                                <li className="post-date"><i className="uil uil-calendar-alt"></i><span>5 Jul 2022</span></li>
                                                <li className="post-author"><a href="/#"><i className="uil uil-user"></i><span>By Sandbox</span></a></li>
                                                <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>3<span> Comments</span></a></li>
                                                <li className="post-likes ms-auto"><a href="/#"><i className="uil uil-heart-alt"></i>3</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="blog grid grid-view">
                                <div className="row isotope gx-md-8 gy-8 mb-8">
                                    <article className="item post col-md-6">
                                        <div className="card">
                                            <figure className="card-img-top overlay overlay-1 hover-scale"><a href="/#"> <img src={b4} alt="" /></a>
                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>
                                            <div className="card-body">
                                                <div className="post-header">
                                                    <div className="post-category text-line">
                                                        <a href="/#" className="hover" rel="category">Coding</a>
                                                    </div>
                                                    <h2 className="post-title h3 mt-1 mb-3"><Link className="link-dark" to={"/blog/1"}>Ligula tristique quis risus</Link></h2>
                                                </div>
                                                <div className="post-content">
                                                    <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <ul className="post-meta d-flex mb-0">
                                                    <li className="post-date"><i className="uil uil-calendar-alt"></i><span>14 Apr 2022</span></li>
                                                    <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>4</a></li>
                                                    <li className="post-likes ms-auto"><a href="/#"><i className="uil uil-heart-alt"></i>5</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="item post col-md-6">
                                        <div className="card">
                                            <figure className="card-img-top overlay overlay-1 hover-scale"><a href="/#"> <img src={b5} alt="" /></a>
                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>
                                            <div className="card-body">
                                                <div className="post-header">
                                                    <div className="post-category text-line">
                                                        <a href="/#" className="hover" rel="category">Workspace</a>
                                                    </div>
                                                    <h2 className="post-title h3 mt-1 mb-3"><Link className="link-dark" to={"/blog/1"}>Nullam id dolor elit id nibh</Link></h2>
                                                </div>
                                                <div className="post-content">
                                                    <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <ul className="post-meta d-flex mb-0">
                                                    <li className="post-date"><i className="uil uil-calendar-alt"></i><span>29 Mar 2022</span></li>
                                                    <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>3</a></li>
                                                    <li className="post-likes ms-auto"><a href="/#"><i className="uil uil-heart-alt"></i>3</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="item post col-md-6">
                                        <div className="card">
                                            <figure className="card-img-top overlay overlay-1 hover-scale"><a href="/#"> <img src={b6} alt="" /></a>
                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>
                                            <div className="card-body">
                                                <div className="post-header">
                                                    <div className="post-category text-line">
                                                        <a href="/#" className="hover" rel="category">Meeting</a>
                                                    </div>
                                                    <h2 className="post-title h3 mt-1 mb-3"><Link className="link-dark" to={"/blog/1"}>Ultricies fusce porta elit</Link></h2>
                                                </div>
                                                <div className="post-content">
                                                    <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <ul className="post-meta d-flex mb-0">
                                                    <li className="post-date"><i className="uil uil-calendar-alt"></i><span>26 Feb 2022</span></li>
                                                    <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>6</a></li>
                                                    <li className="post-likes ms-auto"><a href="/#"><i className="uil uil-heart-alt"></i>3</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="item post col-md-6">
                                        <div className="card">
                                            <figure className="card-img-top overlay overlay-1 hover-scale"><a href="/#"> <img src={b7} alt="" /></a>
                                                <figcaption>
                                                    <h5 className="from-top mb-0">Read More</h5>
                                                </figcaption>
                                            </figure>
                                            <div className="card-body">
                                                <div className="post-header">
                                                    <div className="post-category text-line">
                                                        <a href="/#" className="hover" rel="category">Business Tips</a>
                                                    </div>
                                                    <h2 className="post-title h3 mt-1 mb-3"><Link className="link-dark" to={"/blog/1"}>Morbi leo risus porta eget</Link></h2>
                                                </div>
                                                <div className="post-content">
                                                    <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <ul className="post-meta d-flex mb-0">
                                                    <li className="post-date"><i className="uil uil-calendar-alt"></i><span>7 Jan 2022</span></li>
                                                    <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>2</a></li>
                                                    <li className="post-likes ms-auto"><a href="/#"><i className="uil uil-heart-alt"></i>5</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <nav className="d-flex" aria-label="pagination">
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="/#" aria-label="Previous">
                                            <span aria-hidden="true"><i className="uil uil-arrow-left"></i></span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="/#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="/#" aria-label="Next">
                                            <span aria-hidden="true"><i className="uil uil-arrow-right"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <aside className="col-lg-4 sidebar mt-8 mt-lg-6"><SidebarWidgets /></aside>
                    </div>
                </div>
            </section>
        </div>
        <footer className="bg-dark text-inverse">
            <div className="container py-13 py-md-15">
                <FooterWidgets lightText={true} />
            </div>
        </footer>
        <PageProgress />
    </motion.div>);
}

export default Blog;