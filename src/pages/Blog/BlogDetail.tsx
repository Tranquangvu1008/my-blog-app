import React, { useEffect } from 'react'
import PageProgress from 'components/PageProgress';
import FooterWidgets from 'components/FooterWidgets';
import SidebarWidgets from 'components/SidebarWidgets';
import Navbar from 'components/Navbar';

import b1 from "assets/img/photos/b1.jpg";
import b4 from "assets/img/photos/b4.jpg";
import b5 from "assets/img/photos/b5.jpg";
import bg5 from "assets/img/photos/bg5.jpg";
import b6 from "assets/img/photos/b6.jpg";
import b7 from "assets/img/photos/b7.jpg";
import b8 from "assets/img/photos/b8-full.jpg";
import b9 from "assets/img/photos/b9-full.jpg";
import b10 from "assets/img/photos/b10-full.jpg";
import b11 from "assets/img/photos/b11-full.jpg";
import avatarU1 from "assets/img/avatars/u1.jpg";
import avatarU2 from "assets/img/avatars/u2.jpg";
import avatarU3 from "assets/img/avatars/u3.jpg";
import avatarU4 from "assets/img/avatars/u4.jpg";
import avatarU5 from "assets/img/avatars/u5.jpg";

import { motion } from 'framer-motion';

const BlogDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const textVariants = {
        hidden: {
            opacity: 0,
            screenY: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
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
                <Navbar
                    classList={"center-nav transparent position-absolute navbar-dark"}
                    logoBoth={true}
                    otherClassList={"w-100 d-flex ms-auto"}
                    otherSearch={true}
                    otherBtn={true}
                    otherBtnClassList={"btn-sm btn-white rounded-pill"}
                    otherBtnText={"Contact"}
                    otherBtnLink={"/contact"}
                />
            </header>
            <section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src={bg5} style={{ backgroundImage: `url(${bg5})` }}>
                <div className="container pt-18 pb-15 pt-md-20 pb-md-19 text-center">
                    <div className="row">
                        <div className="col-md-10 col-xl-8 mx-auto">
                            <div className="post-header">
                                <div className="post-category text-line text-white">
                                    <a href="/#" className="text-reset" rel="category">Teamwork</a>
                                </div>
                                <h1 className="display-1 mb-4 text-white">Commodo Dolor Bibendum Parturient Cursus Mollis</h1>
                                <ul className="post-meta text-white">
                                    <li className="post-date"><i className="uil uil-calendar-alt"></i><span>5 Jul 2022</span></li>
                                    <li className="post-author"><i className="uil uil-user"></i><a href="/#" className="text-reset"><span>By Sandbox</span></a></li>
                                    <li className="post-comments"><i className="uil uil-comment"></i><a href="/#" className="text-reset">3<span> Comments</span></a></li>
                                    <li className="post-likes"><i className="uil uil-heart-alt"></i><a href="/#" className="text-reset">3<span> Likes</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row gx-lg-8 gx-xl-12">
                        <div className="col-lg-8">
                            <div className="blog single">
                                <div className="card">
                                    <figure className="card-img-top"><img src={b1} alt="" /></figure>
                                    <div className="card-body">
                                        <div className="classic-view">
                                            <article className="post">
                                                <div className="post-content mb-5">
                                                    <h2 className="h1 mb-4">Cras mattis consectetur purus fermentum</h2>
                                                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum.</p>
                                                    <p>Donec sed odio dui consectetur adipiscing elit. Etiam adipiscing tincidunt elit, eu convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero, condimentum ac laoreet vitae, varius tempor nisi. Duis non arcu vel lectus urna mollis ornare vel eu leo.</p>
                                                    <div className="row g-6 mt-3 mb-10">
                                                        <div className="col-md-6">
                                                            <figure className="hover-scale rounded cursor-dark"><a href={b8} data-glightbox="title: Heading; description: Purus Vulputate Sem Tellus Quam" data-gallery="post"> <img src={b8} alt="" /></a></figure>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <figure className="hover-scale rounded cursor-dark"><a href={b9} data-glightbox data-gallery="post"> <img src={b9} alt="" /></a></figure>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <figure className="hover-scale rounded cursor-dark"><a href={b10} data-glightbox data-gallery="post"> <img src={b10} alt="" /></a></figure>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <figure className="hover-scale rounded cursor-dark"><a href={b11} data-glightbox data-gallery="post"> <img src={b11} alt="" /></a></figure>
                                                        </div>
                                                    </div>
                                                    <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna.</p>
                                                    <blockquote className="fs-lg my-8">
                                                        <p>Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio sem nec elit purus.</p>
                                                        <footer className="blockquote-footer">Very important person</footer>
                                                    </blockquote>
                                                    <h3 className="h2 mb-4">Sit Vulputate Bibendum Purus</h3>
                                                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
                                                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                                                </div>
                                                <div className="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8">
                                                    <div>
                                                        <ul className="list-unstyled tag-list mb-0">
                                                            <li><a href="/#" className="btn btn-soft-ash btn-sm rounded-pill mb-0">Still Life</a></li>
                                                            <li><a href="/#" className="btn btn-soft-ash btn-sm rounded-pill mb-0">Urban</a></li>
                                                            <li><a href="/#" className="btn btn-soft-ash btn-sm rounded-pill mb-0">Nature</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mb-0 mb-md-2">
                                                        <div className="dropdown share-dropdown btn-group">
                                                            <button className="btn btn-sm btn-red rounded-pill btn-icon btn-icon-start dropdown-toggle mb-0 me-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="uil uil-share-alt"></i> Share </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="/#"><i className="uil uil-twitter"></i>Twitter</a>
                                                                <a className="dropdown-item" href="/#"><i className="uil uil-facebook-f"></i>Facebook</a>
                                                                <a className="dropdown-item" href="/#"><i className="uil uil-linkedin"></i>Linkedin</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        <hr />
                                        <div className="author-info d-md-flex align-items-center mb-3">
                                            <div className="d-flex align-items-center">
                                                <figure className="user-avatar"><img className="rounded-circle" alt="" src={avatarU5} /></figure>
                                                <div>
                                                    <h6><a href="/#" className="link-dark">Nikolas Brooten</a></h6>
                                                    <span className="post-meta fs-15">Sales Manager</span>
                                                </div>
                                            </div>
                                            <div className="mt-3 mt-md-0 ms-auto">
                                                <a href="/#" className="btn btn-sm btn-soft-ash rounded-pill btn-icon btn-icon-start mb-0"><i className="uil uil-file-alt"></i> All Posts</a>
                                            </div>
                                        </div>
                                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac. Maecenas faucibus mollis interdum.</p>
                                        <nav className="nav social">
                                            <a href="/#"><i className="uil uil-twitter"></i></a>
                                            <a href="/#"><i className="uil uil-facebook-f"></i></a>
                                            <a href="/#"><i className="uil uil-dribbble"></i></a>
                                            <a href="/#"><i className="uil uil-instagram"></i></a>
                                            <a href="/#"><i className="uil uil-youtube"></i></a>
                                        </nav>
                                        <hr />
                                        <h3 className="mb-6">You Might Also Like</h3>
                                        <div className="swiper-container blog grid-view mb-16" data-margin="30" data-dots="true" data-items-md="2" data-items-xs="1">
                                            <div className="swiper">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <article>
                                                            <figure className="overlay overlay-1 hover-scale rounded mb-5"><a href="/#"> <img src={b4} alt="" /></a>
                                                                <figcaption>
                                                                    <h5 className="from-top mb-0">Read More</h5>
                                                                </figcaption>
                                                            </figure>
                                                            <div className="post-header">
                                                                <div className="post-category text-line">
                                                                    <a href="/#" className="hover" rel="category">Coding</a>
                                                                </div>
                                                                <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="@@webRoot/blog-post.html">Ligula tristique quis risus</a></h2>
                                                            </div>
                                                            <div className="post-footer">
                                                                <ul className="post-meta mb-0">
                                                                    <li className="post-date"><i className="uil uil-calendar-alt"></i><span>14 Apr 2022</span></li>
                                                                    <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>4</a></li>
                                                                </ul>

                                                            </div>
                                                        </article>

                                                    </div>

                                                    <div className="swiper-slide">
                                                        <article>
                                                            <figure className="overlay overlay-1 hover-scale rounded mb-5"><a href="/#"> <img src={b5} alt="" /></a>
                                                                <figcaption>
                                                                    <h5 className="from-top mb-0">Read More</h5>
                                                                </figcaption>
                                                            </figure>
                                                            <div className="post-header">
                                                                <div className="post-category text-line">
                                                                    <a href="/#" className="hover" rel="category">Workspace</a>
                                                                </div>
                                                                <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="@@webRoot/blog-post.html">Nullam id dolor elit id nibh</a></h2>
                                                            </div>
                                                            <div className="post-footer">
                                                                <ul className="post-meta mb-0">
                                                                    <li className="post-date"><i className="uil uil-calendar-alt"></i><span>29 Mar 2022</span></li>
                                                                    <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>3</a></li>
                                                                </ul>

                                                            </div>
                                                        </article>

                                                    </div>

                                                    <div className="swiper-slide">
                                                        <article>
                                                            <figure className="overlay overlay-1 hover-scale rounded mb-5"><a href="/#"> <img src={b6} alt="" /></a>
                                                                <figcaption>
                                                                    <h5 className="from-top mb-0">Read More</h5>
                                                                </figcaption>
                                                            </figure>
                                                            <div className="post-header">
                                                                <div className="post-category text-line">
                                                                    <a href="/#" className="hover" rel="category">Meeting</a>
                                                                </div>
                                                                <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="@@webRoot/blog-post.html">Ultricies fusce porta elit</a></h2>
                                                            </div>
                                                            <div className="post-footer">
                                                                <ul className="post-meta mb-0">
                                                                    <li className="post-date"><i className="uil uil-calendar-alt"></i><span>26 Feb 2022</span></li>
                                                                    <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>6</a></li>
                                                                </ul>

                                                            </div>
                                                        </article>

                                                    </div>

                                                    <div className="swiper-slide">
                                                        <article>
                                                            <figure className="overlay overlay-1 hover-scale rounded mb-5"><a href="/#"> <img src={b7} alt="" /></a>
                                                                <figcaption>
                                                                    <h5 className="from-top mb-0">Read More</h5>
                                                                </figcaption>
                                                            </figure>
                                                            <div className="post-header">
                                                                <div className="post-category text-line">
                                                                    <a href="/#" className="hover" rel="category">Business Tips</a>
                                                                </div>
                                                                <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="@@webRoot/blog-post.html">Morbi leo risus porta eget</a></h2>
                                                            </div>
                                                            <div className="post-footer">
                                                                <ul className="post-meta mb-0">
                                                                    <li className="post-date"><i className="uil uil-calendar-alt"></i><span>7 Jan 2022</span></li>
                                                                    <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>2</a></li>
                                                                </ul>

                                                            </div>
                                                        </article>

                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <hr />
                                        <div id="comments">
                                            <h3 className="mb-6">5 Comments</h3>
                                            <ol id="singlecomments" className="commentlist">
                                                <li className="comment">
                                                    <div className="comment-header d-md-flex align-items-center">
                                                        <div className="d-flex align-items-center">
                                                            <figure className="user-avatar"><img className="rounded-circle" alt="" src={avatarU1} /></figure>
                                                            <div>
                                                                <h6 className="comment-author"><a href="/#" className="link-dark">Connor Gibson</a></h6>
                                                                <ul className="post-meta">
                                                                    <li><i className="uil uil-calendar-alt"></i>14 Jan 2022</li>
                                                                </ul>

                                                            </div>

                                                        </div>

                                                        <div className="mt-3 mt-md-0 ms-auto">
                                                            <a href="/#" className="btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0"><i className="uil uil-comments"></i> Reply</a>
                                                        </div>

                                                    </div>
                                                    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis integer posuere erat ante.</p>
                                                </li>
                                                <li className="comment">
                                                    <div className="comment-header d-md-flex align-items-center">
                                                        <div className="d-flex align-items-center">
                                                            <figure className="user-avatar"><img className="rounded-circle" alt="" src={avatarU2} /></figure>
                                                            <div>
                                                                <h6 className="comment-author"><a href="/#" className="link-dark">Nikolas Brooten</a></h6>
                                                                <ul className="post-meta">
                                                                    <li><i className="uil uil-calendar-alt"></i>21 Feb 2022</li>
                                                                </ul>

                                                            </div>

                                                        </div>

                                                        <div className="mt-3 mt-md-0 ms-auto">
                                                            <a href="/#" className="btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0"><i className="uil uil-comments"></i> Reply</a>
                                                        </div>

                                                    </div>
                                                    <p>Quisque tristique tincidunt metus non aliquam. Quisque ac risus sit amet quam sollicitudin vestibulum vitae malesuada libero. Mauris magna elit, suscipit non ornare et, blandit a tellus. Pellentesque dignissim ornare faucibus mollis.</p>
                                                    <ul className="children">
                                                        <li className="comment">
                                                            <div className="comment-header d-md-flex align-items-center">
                                                                <div className="d-flex align-items-center">
                                                                    <figure className="user-avatar"><img className="rounded-circle" alt="" src={avatarU3} /></figure>
                                                                    <div>
                                                                        <h6 className="comment-author"><a href="/#" className="link-dark">Pearce Frye</a></h6>
                                                                        <ul className="post-meta">
                                                                            <li><i className="uil uil-calendar-alt"></i>22 Feb 2022</li>
                                                                        </ul>

                                                                    </div>

                                                                </div>

                                                                <div className="mt-3 mt-md-0 ms-auto">
                                                                    <a href="/#" className="btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0"><i className="uil uil-comments"></i> Reply</a>
                                                                </div>

                                                            </div>
                                                            <p>Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis.</p>
                                                            <ul className="children">
                                                                <li className="comment">
                                                                    <div className="comment-header d-md-flex align-items-center">
                                                                        <div className="d-flex align-items-center">
                                                                            <figure className="user-avatar"><img className="rounded-circle" alt="" src={avatarU2} /></figure>
                                                                            <div>
                                                                                <h6 className="comment-author"><a href="/#" className="link-dark">Nikolas Brooten</a></h6>
                                                                                <ul className="post-meta">
                                                                                    <li><i className="uil uil-calendar-alt"></i>4 Apr 2022</li>
                                                                                </ul>

                                                                            </div>

                                                                        </div>

                                                                        <div className="mt-3 mt-md-0 ms-auto">
                                                                            <a href="/#" className="btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0"><i className="uil uil-comments"></i> Reply</a>
                                                                        </div>

                                                                    </div>
                                                                    <p>Nullam id dolor id nibh ultricies vehicula ut id. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia aenean bibendum nulla consectetur.</p>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="comment">
                                                    <div className="comment-header d-md-flex align-items-center">
                                                        <div className="d-flex align-items-center">
                                                            <figure className="user-avatar"><img className="rounded-circle" alt="" src={avatarU4} /></figure>
                                                            <div>
                                                                <h6 className="comment-author"><a href="/#" className="link-dark">Lou Bloxham</a></h6>
                                                                <ul className="post-meta">
                                                                    <li><i className="uil uil-calendar-alt"></i>3 May 2022</li>
                                                                </ul>

                                                            </div>

                                                        </div>

                                                        <div className="mt-3 mt-md-0 ms-auto">
                                                            <a href="/#" className="btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0"><i className="uil uil-comments"></i> Reply</a>
                                                        </div>
                                                    </div>
                                                    <p>Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                                </li>
                                            </ol>
                                        </div>
                                        <hr />
                                        <h3 className="mb-3">Would you like to share your thoughts?</h3>
                                        <p className="mb-7">Your email address will not be published. Required fields are marked *</p>
                                        <form className="comment-form">
                                            <div className="form-floating mb-4">
                                                <input type="text" className="form-control" placeholder="Name*" id="c-name" />
                                                <label htmlFor="c-name">Name *</label>
                                            </div>
                                            <div className="form-floating mb-4">
                                                <input type="email" className="form-control" placeholder="Email*" id="c-email" />
                                                <label htmlFor="c-email">Email*</label>
                                            </div>
                                            <div className="form-floating mb-4">
                                                <input type="text" className="form-control" placeholder="Website" id="c-web" />
                                                <label htmlFor="c-web">Website</label>
                                            </div>
                                            <div className="form-floating mb-4">
                                                <textarea name="textarea" className="form-control" placeholder="Comment" style={{ height: "150px" }}></textarea>
                                                <label>Comment *</label>
                                            </div>
                                            <button type="submit" className="btn btn-primary rounded-pill mb-0">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside className="col-lg-4 sidebar mt-11 mt-lg-6"><SidebarWidgets /></aside>
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

export default BlogDetail;