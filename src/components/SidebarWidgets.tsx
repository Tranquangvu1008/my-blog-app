import React from 'react'

import a1 from "../assets/img/photos/a1.jpg";
import a2 from "../assets/img/photos/a2.jpg";
import a3 from "../assets/img/photos/a3.jpg";

// interface SidebarWidgetsProps {
//     test?: any
// }

const SidebarWidgets = () => {
    return (<>
        <div className="widget">
            <form className="search-form">
                <div className="form-floating mb-0">
                    <input id="search-form" type="text" className="form-control" placeholder="Search" />
                    <label htmlFor="search-form">Search</label>
                </div>
            </form>
        </div>
        <div className="widget">
            <h4 className="widget-title mb-3">About Us</h4>
            <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
            <nav className="nav social">
                <a href="/#"><i className="uil uil-twitter"></i></a>
                <a href="/#"><i className="uil uil-facebook-f"></i></a>
                <a href="/#"><i className="uil uil-dribbble"></i></a>
                <a href="/#"><i className="uil uil-instagram"></i></a>
                <a href="/#"><i className="uil uil-youtube"></i></a>
            </nav>
        </div>
        <div className="widget">
            <h4 className="widget-title mb-3">Popular Posts</h4>
            <ul className="image-list">
                <li>
                    <figure className="rounded"><a href="@@webRoot/blog-post.html"><img src={a1} alt="" /></a></figure>
                    <div className="post-content">
                        <h6 className="mb-2"> <a className="link-dark" href="@@webRoot/blog-post.html">Magna Mollis Ultricies</a> </h6>
                        <ul className="post-meta">
                            <li className="post-date"><i className="uil uil-calendar-alt"></i><span>26 Mar 2022</span></li>
                            <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>3</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <figure className="rounded"> <a href="@@webRoot/blog-post.html"><img src={a2} alt="" /></a></figure>
                    <div className="post-content">
                        <h6 className="mb-2"> <a className="link-dark" href="@@webRoot/blog-post.html">Ornare Nullam Risus</a> </h6>
                        <ul className="post-meta">
                            <li className="post-date"><i className="uil uil-calendar-alt"></i><span>16 Feb 2022</span></li>
                            <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>6</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <figure className="rounded"><a href="@@webRoot/blog-post.html"><img src={a3} alt="" /></a></figure>
                    <div className="post-content">
                        <h6 className="mb-2"> <a className="link-dark" href="@@webRoot/blog-post.html">Euismod Nullam Fusce</a> </h6>
                        <ul className="post-meta">
                            <li className="post-date"><i className="uil uil-calendar-alt"></i><span>8 Jan 2022</span></li>
                            <li className="post-comments"><a href="/#"><i className="uil uil-comment"></i>5</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div className="widget">
            <h4 className="widget-title mb-3">Categories</h4>
            <ul className="unordered-list bullet-primary text-reset">
                <li><a href="/#">Teamwork (21)</a></li>
                <li><a href="/#">Ideas (19)</a></li>
                <li><a href="/#">Workspace (16)</a></li>
                <li><a href="/#">Coding (7)</a></li>
                <li><a href="/#">Meeting (12)</a></li>
                <li><a href="/#">Business Tips (14)</a></li>
            </ul>
        </div>
        <div className="widget">
            <h4 className="widget-title mb-3">Tags</h4>
            <ul className="list-unstyled tag-list">
                <li><a href="/#" className="btn btn-soft-ash btn-sm rounded-pill">Still Life</a></li>
                <li><a href="/#" className="btn btn-soft-ash btn-sm rounded-pill">Urban</a></li>
                <li><a href="/#" className="btn btn-soft-ash btn-sm rounded-pill">Nature</a></li>
                <li><a href="/#" className="btn btn-soft-ash btn-sm rounded-pill">Landscape</a></li>
                <li><a href="/#" className="btn btn-soft-ash btn-sm rounded-pill">Macro</a></li>
                <li><a href="/#" className="btn btn-soft-ash btn-sm rounded-pill">Fun</a></li>
                <li><a href="/#" className="btn btn-soft-ash btn-sm rounded-pill">Workshop</a></li>
                <li><a href="/#" className="btn btn-soft-ash btn-sm rounded-pill">Photography</a></li>
            </ul>
        </div>
        <div className="widget">
            <h4 className="widget-title mb-3">Archive</h4>
            <ul className="unordered-list bullet-primary text-reset">
                <li><a href="/#">February 2019</a></li>
                <li><a href="/#">January 2019</a></li>
                <li><a href="/#">December 2018</a></li>
                <li><a href="/#">November 2018</a></li>
                <li><a href="/#">October 2018</a></li>
            </ul>
        </div>
    </>
    );
}

export default SidebarWidgets;