import React, { useEffect } from 'react'
import PageProgress from '../../components/PageProgress'
import FooterWidgets from '../../components/FooterWidgets'
import Navbar from '../../components/Navbar';

import pp1 from "../../assets/img/photos/pp1.jpg";
import pp2 from "../../assets/img/photos/pp2.jpg";
import pp3 from "../../assets/img/photos/pp3.jpg";
import pp4 from "../../assets/img/photos/pp4.jpg";
import pp5 from "../../assets/img/photos/pp5.jpg";


const FestivalDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (<>
        <div className="content-wrapper">
            <header className="wrapper bg-soft-primary">
                <Navbar classList={"center-nav transparent navbar-light"} otherClassList={"w-100 d-flex ms-auto"}
                    otherLanguageSelect={true} otherBtn={true} otherBtnClassList={"btn-sm btn-primary rounded-pill"}
                    otherBtnText={"Contact"} otherBtnLink={"/contact"} />
            </header>
            <section className="wrapper bg-soft-primary">
                <div className="container pt-10 pb-19 pt-md-14 pb-md-22 text-center">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <div className="post-header">
                                <div className="post-category text-line">
                                    <a href="/#" className="hover" rel="category">Identity</a>
                                </div>
                                <h1 className="display-1 mb-3">Commodo Dolor Bibendum Parturient Cursus Mollis</h1>
                                <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">Integer posuere erat a ante venenatis dapibus posuere. Maecenas faucibus mollis interdum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper bg-light wrapper-border">
                <div className="container pb-14 pb-md-16">
                    <div className="row">
                        <div className="col-12">
                            <article className="mt-n21">
                                <figure className="rounded mb-8 mb-md-12"><img src={pp1} alt="" /></figure>
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <h2 className="display-6 mb-4">About the Project</h2>
                                        <div className="row gx-0">
                                            <div className="col-md-9 text-justify">
                                                <p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum.</p>
                                                <p>Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                            </div>
                                            <div className="col-md-2 ms-auto">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <h5 className="mb-1">Date</h5>
                                                        <p>17 May 2018</p>
                                                    </li>
                                                    <li>
                                                        <h5 className="mb-1">Client Name</h5>
                                                        <p>Cool House</p>
                                                    </li>
                                                </ul>
                                                <a href="/#" className="more hover">See Project</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5 gx-md-6 gy-6">
                                    <div className="item col-md-6">
                                        <figure className="hover-scale rounded cursor-dark"><a href={pp2} data-glightbox data-gallery="project-1"><img src={pp2} alt="" /></a></figure>
                                    </div>
                                    <div className="item col-md-6">
                                        <figure className="hover-scale rounded cursor-dark"><a href={pp3} data-glightbox data-gallery="project-1"><img src={pp3} alt="" /></a></figure>
                                    </div>
                                    <div className="item col-md-6">
                                        <figure className="hover-scale rounded cursor-dark"><a href={pp4} data-glightbox data-gallery="project-1"><img src={pp4} alt="" /></a></figure>
                                    </div>
                                    <div className="item col-md-6">
                                        <figure className="hover-scale rounded cursor-dark"><a href={pp5} data-glightbox data-gallery="project-1"><img src={pp5} alt="" /></a></figure>
                                    </div>
                                </div>
                                <div className="row mt-8 mt-md-12">
                                    <div className="col-md-10 offset-md-1 text-justify">
                                        <h2 className="mb-4">Quam Mollis Bibendum</h2>
                                        <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum etiam porta.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper bg-light">
                <div className="container py-10">
                    <div className="row gx-md-6 gy-3 gy-md-0">
                        <div className="col-md-8 align-self-center text-center text-md-start navigation">
                            <a href="/#" className="btn btn-soft-ash rounded-pill btn-icon btn-icon-start mb-0 me-1"><i className="uil uil-arrow-left"></i> Prev Post</a>
                            <a href="/#" className="btn btn-soft-ash rounded-pill btn-icon btn-icon-end mb-0">Next Post <i className="uil uil-arrow-right"></i></a>
                        </div>
                        <aside className="col-md-4 sidebar text-center text-md-end">
                            <div className="dropdown share-dropdown btn-group">
                                <button className="btn btn-red rounded-pill btn-icon btn-icon-start dropdown-toggle mb-0 me-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="uil uil-share-alt"></i> Share </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/#"><i className="uil uil-twitter"></i>Twitter</a>
                                    <a className="dropdown-item" href="/#"><i className="uil uil-facebook-f"></i>Facebook</a>
                                    <a className="dropdown-item" href="/#"><i className="uil uil-linkedin"></i>Linkedin</a>
                                </div>
                            </div>
                        </aside>
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
    </>
    );
}

export default FestivalDetail;