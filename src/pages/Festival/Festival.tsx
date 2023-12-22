import React, { useEffect } from 'react'
import PageProgress from '../../components/PageProgress';
import Navbar from '../../components/Navbar';
import FooterWidgets from '../../components/FooterWidgets';

import cs16 from "../../assets/img/photos/cs16.jpg"
import cs17 from "../../assets/img/photos/cs17.jpg"
import cs18 from "../../assets/img/photos/cs18.jpg"
import cs19 from "../../assets/img/photos/cs19.jpg"
import cs20 from "../../assets/img/photos/cs20.jpg"
import cs21 from "../../assets/img/photos/cs21.jpg"
import cs22 from "../../assets/img/photos/cs22.jpg"
import { Link } from 'react-router-dom';


const Festival = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
        <div className="content-wrapper">
            <header className="wrapper bg-light">
                <Navbar classList={"center-nav transparent navbar-light"}
                    otherClassList={"w-100 d-flex ms-auto"}
                    otherLanguageSelect={true}
                    otherBtn={true}
                    otherBtnClassList={"btn-sm btn-primary rounded-pill"}
                    otherBtnText={"Contact"}
                    otherBtnLink={"/contract"}
                />
            </header>
            <section className="wrapper bg-light">
                <div className="container pt-10 pt-md-14 text-center">
                    <div className="row">
                        <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-5 mx-auto">
                            <h1 className="display-1 mb-3">Projects</h1>
                            <p className="lead fs-lg px-lg-10 px-xxl-8">Check out some of our awesome projects with creative ideas and great design.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper bg-light">
                <div className="container pt-9 pt-md-11 pb-14 pb-md-16">
                    <div className="projects-overflow mt-md-10 mb-10 mb-lg-15">
                        <div className="project item">
                            <div className="row">
                                <figure className="col-lg-8 col-xl-7 offset-xl-1 rounded"> <img src={cs16} alt="" /></figure>
                                <div className="project-details d-flex justify-content-center flex-column" style={{ right: "10%", bottom: "25%" }}>
                                    <div className="card shadow rellax" data-rellax-xs-speed="0" data-rellax-mobile-speed="0">
                                        <div className="card-body">
                                            <div className="post-header">
                                                <div className="post-category text-line text-purple mb-3">Cosmetic</div>
                                                <h2 className="post-title mb-3">Cras Fermentum Sem</h2>
                                            </div>
                                            <div className="post-content">
                                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                                                <Link to={"/festival/1"} className="more hover link-purple">See Project</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project item">
                            <div className="row">
                                <figure className="col-lg-7 offset-lg-5 col-xl-6 offset-xl-5 rounded"> <img src={cs17} alt="" /></figure>
                                <div className="project-details d-flex justify-content-center flex-column" style={{ left: "18%", bottom: "25%" }}>
                                    <div className="card shadow rellax" data-rellax-xs-speed="0" data-rellax-mobile-speed="0">
                                        <div className="card-body">
                                            <div className="post-header">
                                                <div className="post-category text-line text-leaf mb-3">Coffee</div>
                                                <h2 className="post-title mb-3">Mollis Ipsum Mattis</h2>
                                            </div>
                                            <div className="post-content">
                                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula.</p>
                                                <a href="/#" className="more hover link-leaf">See Project</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project item">
                            <div className="row">
                                <figure className="col-lg-9 col-xl-7 offset-xl-2 rounded"> <img src={cs18} alt="" /></figure>
                                <div className="project-details d-flex justify-content-center flex-column" style={{ right: "3%", bottom: "25%" }}>
                                    <div className="card shadow rellax" data-rellax-xs-speed="0" data-rellax-mobile-speed="0">
                                        <div className="card-body">
                                            <div className="post-header">
                                                <div className="post-category text-line text-violet mb-3">Still Life</div>
                                                <h2 className="post-title mb-3">Ipsum Ultricies Cursus</h2>
                                            </div>
                                            <div className="post-content">
                                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                                                <a href="/#" className="more hover link-violet">See Project</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project item">
                            <div className="row">
                                <figure className="col-lg-9 offset-lg-3 col-xl-7 offset-xl-4 rounded"> <img src={cs19} alt="" /></figure>
                                <div className="project-details d-flex justify-content-center flex-column" style={{ left: "12%", bottom: "25%" }}>
                                    <div className="card shadow rellax" data-rellax-xs-speed="0" data-rellax-mobile-speed="0">
                                        <div className="card-body">
                                            <div className="post-header">
                                                <div className="post-category text-line text-yellow mb-3">Product</div>
                                                <h2 className="post-title mb-3">Sollicitudin Ornare Porta</h2>
                                            </div>
                                            <div className="post-content">
                                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                                                <a href="/#" className="more hover link-yellow">See Project</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project item">
                            <div className="row">
                                <figure className="col-lg-8 col-xl-6 offset-xl-1 rounded"> <img src={cs20} alt="" /></figure>
                                <div className="project-details d-flex justify-content-center flex-column" style={{ right: "15%", bottom: "25%" }}>
                                    <div className="card shadow rellax" data-rellax-xs-speed="0" data-rellax-mobile-speed="0">
                                        <div className="card-body">
                                            <div className="post-header">
                                                <div className="post-category text-line text-orange mb-3">Product</div>
                                                <h2 className="post-title mb-3">Inceptos Euismod Egestas</h2>
                                            </div>
                                            <div className="post-content">
                                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula.</p>
                                                <a href="/#" className="more hover link-orange">See Project</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project item">
                            <div className="row">
                                <figure className="col-lg-9 offset-lg-3 col-xl-7 offset-xl-5 rounded"> <img src={cs21} alt="" /></figure>
                                <div className="project-details d-flex justify-content-center flex-column ms-lg-n150 ms-xl-0" style={{ left: "18%", bottom: "25%" }}>
                                    <div className="card shadow rellax" data-rellax-xs-speed="0" data-rellax-mobile-speed="0">
                                        <div className="card-body">
                                            <div className="post-header">
                                                <div className="post-category text-line text-green mb-3">Workshop</div>
                                                <h2 className="post-title mb-3">Ipsum Mollis Vulputate</h2>
                                            </div>
                                            <div className="post-content">
                                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                                                <a href="/#" className="more hover link-green">See Project</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project item">
                            <div className="row">
                                <figure className="col-lg-8 col-xl-6 offset-xl-1 rounded"> <img src={cs22} alt="" /></figure>
                                <div className="project-details d-flex justify-content-center flex-column" style={{ right: "15%", bottom: "25%" }}>
                                    <div className="card shadow rellax" data-rellax-xs-speed="0" data-rellax-mobile-speed="0">
                                        <div className="card-body">
                                            <div className="post-header">
                                                <div className="post-category text-line text-red mb-3">Concept</div>
                                                <h2 className="post-title mb-3">Porta Ornare Cras</h2>
                                            </div>
                                            <div className="post-content">
                                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                                                <a href="/#" className="more hover link-red">See Project</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="d-flex justify-content-center" aria-label="pagination">
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

export default Festival;