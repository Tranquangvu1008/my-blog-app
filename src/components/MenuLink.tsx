import React from 'react'

interface MenuLinkProps {
    centerLogo?: any;
}

const MenuLink: React.FC<MenuLinkProps> = ({ centerLogo, }) => {
    return (<>
        {centerLogo ? (<ul className="navbar-nav">
            <div className="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
                <ul className="navbar-nav ms-lg-auto">
                    <li className="nav-item dropdown dropdown-mega">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Demos</a>
                        <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                            <li className="mega-menu-content mega-menu-scroll">
                                <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled">
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo1.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi1.jpg" srcSet="@@webRoot/assets/img/demos/mi1@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 1</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo2.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi2.jpg" srcSet="@@webRoot/assets/img/demos/mi2@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 2</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo3.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi3.jpg" srcSet="@@webRoot/assets/img/demos/mi3@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 3</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo4.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi4.jpg" srcSet="@@webRoot/assets/img/demos/mi4@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 4</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo5.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi5.jpg" srcSet="@@webRoot/assets/img/demos/mi5@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 5</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo6.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi6.jpg" srcSet="@@webRoot/assets/img/demos/mi6@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 6</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo7.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi7.jpg" srcSet="@@webRoot/assets/img/demos/mi7@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 7</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo8.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi8.jpg" srcSet="@@webRoot/assets/img/demos/mi8@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 8</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo9.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi9.jpg" srcSet="@@webRoot/assets/img/demos/mi9@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 9</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo10.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi10.jpg" srcSet="@@webRoot/assets/img/demos/mi10@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 10</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo11.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi11.jpg" srcSet="@@webRoot/assets/img/demos/mi11@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 11</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo12.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi12.jpg" srcSet="@@webRoot/assets/img/demos/mi12@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 12</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo13.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi13.jpg" srcSet="@@webRoot/assets/img/demos/mi13@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 13</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo14.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi14.jpg" srcSet="@@webRoot/assets/img/demos/mi14@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 14</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo15.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi15.jpg" srcSet="@@webRoot/assets/img/demos/mi15@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 15</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo16.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi16.jpg" srcSet="@@webRoot/assets/img/demos/mi16@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 16</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo17.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi17.jpg" srcSet="@@webRoot/assets/img/demos/mi17@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 17</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo18.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi18.jpg" srcSet="@@webRoot/assets/img/demos/mi18@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 18</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo19.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi19.jpg" srcSet="@@webRoot/assets/img/demos/mi19@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 19</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo20.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi20.jpg" srcSet="@@webRoot/assets/img/demos/mi20@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 20</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo21.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi21.jpg" srcSet="@@webRoot/assets/img/demos/mi21@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 21</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo22.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi22.jpg" srcSet="@@webRoot/assets/img/demos/mi22@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 22</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo23.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi23.jpg" srcSet="@@webRoot/assets/img/demos/mi23@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 23</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo24.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi24.jpg" srcSet="@@webRoot/assets/img/demos/mi24@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 24</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo25.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi25.jpg" srcSet="@@webRoot/assets/img/demos/mi25@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 25</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo26.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi26.jpg" srcSet="@@webRoot/assets/img/demos/mi26@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 26</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo27.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi27.jpg" srcSet="@@webRoot/assets/img/demos/mi27@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 27</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo28.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi28.jpg" srcSet="@@webRoot/assets/img/demos/mi28@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 28</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo29.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi29.jpg" srcSet="@@webRoot/assets/img/demos/mi29@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 29</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo30.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi30.jpg" srcSet="@@webRoot/assets/img/demos/mi30@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 30</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo31.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi31.jpg" srcSet="@@webRoot/assets/img/demos/mi31@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 31</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo32.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi32.jpg" srcSet="@@webRoot/assets/img/demos/mi32@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 32</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo33.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi33.jpg" srcSet="@@webRoot/assets/img/demos/mi33@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 33</span>
                                        </a>
                                    </li>
                                    <li className="col">
                                        <a className="dropdown-item" href="@@webRoot/demo34.html">
                                            <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi34.jpg" srcSet="@@webRoot/assets/img/demos/mi34@2x.jpg 2x" alt="" /></figure>
                                            <span className="d-lg-none">Demo 34</span>
                                        </a>
                                    </li>
                                </ul>
                                <span className="d-none d-lg-flex"><i className="uil uil-direction"></i><strong>Scroll to view more</strong></span>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                        <ul className="dropdown-menu">
                            <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/services.html">Services I</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/services2.html">Services II</a></li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">About</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/about.html">About I</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/about2.html">About II</a></li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/shop.html">Shop I</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/shop2.html">Shop II</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/shop-product.html">Product Page</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/shop-cart.html">Shopping Cart</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/shop-checkout.html">Checkout</a></li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Contact</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/contact.html">Contact I</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/contact2.html">Contact II</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/contact3.html">Contact III</a></li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Career</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/career.html">Job Listing I</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/career2.html">Job Listing II</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/career-job.html">Job Description</a></li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Utility</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/404.html">404 Not Found</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/page-loader.html">Page Loader</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/signin.html">Sign In I</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/signin2.html">Sign In II</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/signup.html">Sign Up I</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/signup2.html">Sign Up II</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/terms.html">Terms</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="dropdown-item" href="@@webRoot/pricing.html">Pricing</a></li>
                            <li className="nav-item"><a className="dropdown-item" href="@@webRoot/onepage.html">One Page</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Projects</a>
                        <div className="dropdown-menu dropdown-lg">
                            <div className="dropdown-lg-content">
                                <div>
                                    <h6 className="dropdown-header">Project Pages</h6>
                                    <ul className="list-unstyled">
                                        <li><a className="dropdown-item" href="@@webRoot/projects.html">Projects I</a></li>
                                        <li><a className="dropdown-item" href="@@webRoot/projects2.html">Projects II</a></li>
                                        <li><a className="dropdown-item" href="@@webRoot/projects3.html">Projects III</a></li>
                                        <li><a className="dropdown-item" href="@@webRoot/projects4.html">Projects IV</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 className="dropdown-header">Single Projects</h6>
                                    <ul className="list-unstyled">
                                        <li><a className="dropdown-item" href="@@webRoot/single-project.html">Single Project I</a></li>
                                        <li><a className="dropdown-item" href="@@webRoot/single-project2.html">Single Project II</a></li>
                                        <li><a className="dropdown-item" href="@@webRoot/single-project3.html">Single Project III</a></li>
                                        <li><a className="dropdown-item" href="@@webRoot/single-project4.html">Single Project IV</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="w-100 order-3 order-lg-2 d-lg-flex offcanvas-body">
                <ul className="navbar-nav me-lg-auto">

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
                        <ul className="dropdown-menu">
                            <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog.html">Blog without Sidebar</a></li>
                            <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog2.html">Blog with Sidebar</a></li>
                            <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog3.html">Blog with Left Sidebar</a></li>
                            <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog Posts</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog-post.html">Post without Sidebar</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog-post2.html">Post with Sidebar</a></li>
                                    <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog-post3.html">Post with Left Sidebar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown dropdown-mega">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blocks</a>
                        <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                            <li className="mega-menu-content">
                                <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled">
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/about.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block1.svg" alt="" /></div>
                                        <span>About</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/blog.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block2.svg" alt="" /></div>
                                        <span>Blog</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/call-to-action.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block3.svg" alt="" /></div>
                                        <span>Call to Action</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/clients.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block4.svg" alt="" /></div>
                                        <span>Clients</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/contact.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block5.svg" alt="" /></div>
                                        <span>Contact</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/facts.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block6.svg" alt="" /></div>
                                        <span>Facts</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/faq.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block7.svg" alt="" /></div>
                                        <span>FAQ</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/features.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block8.svg" alt="" /></div>
                                        <span>Features</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/footer.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block9.svg" alt="" /></div>
                                        <span>Footer</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/hero.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block10.svg" alt="" /></div>
                                        <span>Hero</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/misc.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block17.svg" alt="" /></div>
                                        <span>Misc</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/navbar.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block11.svg" alt="" /></div>
                                        <span>Navbar</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/portfolio.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block12.svg" alt="" /></div>
                                        <span>Portfolio</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/pricing.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block13.svg" alt="" /></div>
                                        <span>Pricing</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/process.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block14.svg" alt="" /></div>
                                        <span>Process</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/team.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block15.svg" alt="" /></div>
                                        <span>Team</span></a>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/testimonials.html">
                                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block16.svg" alt="" /></div>
                                        <span>Testimonials</span></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown dropdown-mega">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Documentation</a>
                        <ul className="dropdown-menu mega-menu">
                            <li className="mega-menu-content">
                                <div className="row gx-0 gx-lg-3">
                                    <div className="col-lg-4">
                                        <h6 className="dropdown-header">Usage</h6>
                                        <ul className="list-unstyled cc-2 pb-lg-1">
                                            <li><a className="dropdown-item" href="@@webRoot/docs/index.html">Get Started</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/forms.html">Forms</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/faq.html">FAQ</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/changelog.html">Changelog</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/credits.html">Credits</a></li>
                                        </ul>
                                        <h6 className="dropdown-header mt-lg-6">Styleguide</h6>
                                        <ul className="list-unstyled cc-2">
                                            <li><a className="dropdown-item" href="@@webRoot/docs/styleguide/colors.html">Colors</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/styleguide/fonts.html">Fonts</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/styleguide/icons-svg.html">SVG Icons</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/styleguide/icons-font.html">Font Icons</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/styleguide/illustrations.html">Illustrations</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/styleguide/backgrounds.html">Backgrounds</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/styleguide/misc.html">Misc</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-8">
                                        <h6 className="dropdown-header">Elements</h6>
                                        <ul className="list-unstyled cc-3">
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/accordion.html">Accordion</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/alerts.html">Alerts</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/animations.html">Animations</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/avatars.html">Avatars</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/background.html">Background</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/badges.html">Badges</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/buttons.html">Buttons</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/card.html">Card</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/carousel.html">Carousel</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/dividers.html">Dividers</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/form-elements.html">Form Elements</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/image-hover.html">Image Hover</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/image-mask.html">Image Mask</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/lightbox.html">Lightbox</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/player.html">Media Player</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/modal.html">Modal</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/pagination.html">Pagination</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/progressbar.html">Progressbar</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/shadows.html">Shadows</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/shapes.html">Shapes</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/tables.html">Tables</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/tabs.html">Tabs</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/text-animations.html">Text Animations</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/text-highlight.html">Text Highlight</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/tiles.html">Tiles</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/tooltips-popovers.html">Tooltips & Popovers</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/docs/elements/typography.html">Typography</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        </ul>
        ) : (
            <>
                <div className="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
                    <ul className="navbar-nav ms-lg-auto">
                        <li className="nav-item dropdown dropdown-mega">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Demos</a>
                            <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                                <li className="mega-menu-content mega-menu-scroll">
                                    <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled">
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo1.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi1.jpg" srcSet="@@webRoot/assets/img/demos/mi1@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 1</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo2.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi2.jpg" srcSet="@@webRoot/assets/img/demos/mi2@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 2</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo3.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi3.jpg" srcSet="@@webRoot/assets/img/demos/mi3@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 3</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo4.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi4.jpg" srcSet="@@webRoot/assets/img/demos/mi4@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 4</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo5.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi5.jpg" srcSet="@@webRoot/assets/img/demos/mi5@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 5</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo6.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi6.jpg" srcSet="@@webRoot/assets/img/demos/mi6@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 6</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo7.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi7.jpg" srcSet="@@webRoot/assets/img/demos/mi7@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 7</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo8.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi8.jpg" srcSet="@@webRoot/assets/img/demos/mi8@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 8</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo9.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi9.jpg" srcSet="@@webRoot/assets/img/demos/mi9@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 9</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo10.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi10.jpg" srcSet="@@webRoot/assets/img/demos/mi10@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 10</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo11.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi11.jpg" srcSet="@@webRoot/assets/img/demos/mi11@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 11</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo12.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi12.jpg" srcSet="@@webRoot/assets/img/demos/mi12@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 12</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo13.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi13.jpg" srcSet="@@webRoot/assets/img/demos/mi13@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 13</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo14.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi14.jpg" srcSet="@@webRoot/assets/img/demos/mi14@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 14</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo15.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi15.jpg" srcSet="@@webRoot/assets/img/demos/mi15@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 15</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo16.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi16.jpg" srcSet="@@webRoot/assets/img/demos/mi16@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 16</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo17.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi17.jpg" srcSet="@@webRoot/assets/img/demos/mi17@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 17</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo18.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi18.jpg" srcSet="@@webRoot/assets/img/demos/mi18@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 18</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo19.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi19.jpg" srcSet="@@webRoot/assets/img/demos/mi19@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 19</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo20.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi20.jpg" srcSet="@@webRoot/assets/img/demos/mi20@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 20</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo21.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi21.jpg" srcSet="@@webRoot/assets/img/demos/mi21@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 21</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo22.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi22.jpg" srcSet="@@webRoot/assets/img/demos/mi22@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 22</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo23.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi23.jpg" srcSet="@@webRoot/assets/img/demos/mi23@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 23</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo24.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi24.jpg" srcSet="@@webRoot/assets/img/demos/mi24@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 24</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo25.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi25.jpg" srcSet="@@webRoot/assets/img/demos/mi25@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 25</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo26.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi26.jpg" srcSet="@@webRoot/assets/img/demos/mi26@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 26</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo27.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi27.jpg" srcSet="@@webRoot/assets/img/demos/mi27@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 27</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo28.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi28.jpg" srcSet="@@webRoot/assets/img/demos/mi28@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 28</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo29.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi29.jpg" srcSet="@@webRoot/assets/img/demos/mi29@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 29</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo30.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi30.jpg" srcSet="@@webRoot/assets/img/demos/mi30@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 30</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo31.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi31.jpg" srcSet="@@webRoot/assets/img/demos/mi31@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 31</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo32.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi32.jpg" srcSet="@@webRoot/assets/img/demos/mi32@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 32</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo33.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi33.jpg" srcSet="@@webRoot/assets/img/demos/mi33@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 33</span>
                                            </a>
                                        </li>
                                        <li className="col">
                                            <a className="dropdown-item" href="@@webRoot/demo34.html">
                                                <figure className="rounded lift d-none d-lg-block"><img src="@@webRoot/assets/img/demos/mi34.jpg" srcSet="@@webRoot/assets/img/demos/mi34@2x.jpg 2x" alt="" /></figure>
                                                <span className="d-lg-none">Demo 34</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <span className="d-none d-lg-flex"><i className="uil uil-direction"></i><strong>Scroll to view more</strong></span>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                            <ul className="dropdown-menu">
                                <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/services.html">Services I</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/services2.html">Services II</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">About</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/about.html">About I</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/about2.html">About II</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/shop.html">Shop I</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/shop2.html">Shop II</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/shop-product.html">Product Page</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/shop-cart.html">Shopping Cart</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/shop-checkout.html">Checkout</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Contact</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/contact.html">Contact I</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/contact2.html">Contact II</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/contact3.html">Contact III</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Career</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/career.html">Job Listing I</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/career2.html">Job Listing II</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/career-job.html">Job Description</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Utility</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/404.html">404 Not Found</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/page-loader.html">Page Loader</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/signin.html">Sign In I</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/signin2.html">Sign In II</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/signup.html">Sign Up I</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/signup2.html">Sign Up II</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/terms.html">Terms</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="dropdown-item" href="@@webRoot/pricing.html">Pricing</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="@@webRoot/onepage.html">One Page</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Projects</a>
                            <div className="dropdown-menu dropdown-lg">
                                <div className="dropdown-lg-content">
                                    <div>
                                        <h6 className="dropdown-header">Project Pages</h6>
                                        <ul className="list-unstyled">
                                            <li><a className="dropdown-item" href="@@webRoot/projects.html">Projects I</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/projects2.html">Projects II</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/projects3.html">Projects III</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/projects4.html">Projects IV</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="dropdown-header">Single Projects</h6>
                                        <ul className="list-unstyled">
                                            <li><a className="dropdown-item" href="@@webRoot/single-project.html">Single Project I</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/single-project2.html">Single Project II</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/single-project3.html">Single Project III</a></li>
                                            <li><a className="dropdown-item" href="@@webRoot/single-project4.html">Single Project IV</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="w-100 order-3 order-lg-2 d-lg-flex offcanvas-body">
                    <ul className="navbar-nav me-lg-auto">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog.html">Blog without Sidebar</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog2.html">Blog with Sidebar</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog3.html">Blog with Left Sidebar</a></li>
                                <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog Posts</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog-post.html">Post without Sidebar</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog-post2.html">Post with Sidebar</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog-post3.html">Post with Left Sidebar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown dropdown-mega">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blocks</a>
                            <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                                <li className="mega-menu-content">
                                    <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled">
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/about.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block1.svg" alt="" /></div>
                                            <span>About</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/blog.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block2.svg" alt="" /></div>
                                            <span>Blog</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/call-to-action.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block3.svg" alt="" /></div>
                                            <span>Call to Action</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/clients.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block4.svg" alt="" /></div>
                                            <span>Clients</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/contact.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block5.svg" alt="" /></div>
                                            <span>Contact</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/facts.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block6.svg" alt="" /></div>
                                            <span>Facts</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/faq.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block7.svg" alt="" /></div>
                                            <span>FAQ</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/features.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block8.svg" alt="" /></div>
                                            <span>Features</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/footer.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block9.svg" alt="" /></div>
                                            <span>Footer</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/hero.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block10.svg" alt="" /></div>
                                            <span>Hero</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/misc.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block17.svg" alt="" /></div>
                                            <span>Misc</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/navbar.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block11.svg" alt="" /></div>
                                            <span>Navbar</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/portfolio.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block12.svg" alt="" /></div>
                                            <span>Portfolio</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/pricing.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block13.svg" alt="" /></div>
                                            <span>Pricing</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/process.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block14.svg" alt="" /></div>
                                            <span>Process</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/team.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block15.svg" alt="" /></div>
                                            <span>Team</span></a>
                                        </li>
                                        <li className="col"><a className="dropdown-item" href="@@webRoot/docs/blocks/testimonials.html">
                                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src="@@webRoot/assets/img/demos/block16.svg" alt="" /></div>
                                            <span>Testimonials</span></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown dropdown-mega">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Documentation</a>
                            <ul className="dropdown-menu mega-menu">
                                <li className="mega-menu-content">
                                    <div className="row gx-0 gx-lg-3">
                                        <div className="col-lg-4">
                                            <h6 className="dropdown-header">Usage</h6>
                                            <ul className="list-unstyled cc-2 pb-lg-1">
                                                <li><a className="dropdown-item" href="@@webRoot/docs/index.html">Get Started</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/forms.html">Forms</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/faq.html">FAQ</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/changelog.html">Changelog</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/credits.html">Credits</a></li>
                                            </ul>
                                            <h6 className="dropdown-header mt-lg-6">Styleguide</h6>
                                            <ul className="list-unstyled cc-2">
                                                <li><a className="dropdown-item" href="@@webRoot/docs/styleguide/colors.html">Colors</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/styleguide/fonts.html">Fonts</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/styleguide/icons-svg.html">SVG Icons</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/styleguide/icons-font.html">Font Icons</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/styleguide/illustrations.html">Illustrations</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/styleguide/backgrounds.html">Backgrounds</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/styleguide/misc.html">Misc</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-8">
                                            <h6 className="dropdown-header">Elements</h6>
                                            <ul className="list-unstyled cc-3">
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/accordion.html">Accordion</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/alerts.html">Alerts</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/animations.html">Animations</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/avatars.html">Avatars</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/background.html">Background</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/badges.html">Badges</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/buttons.html">Buttons</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/card.html">Card</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/carousel.html">Carousel</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/dividers.html">Dividers</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/form-elements.html">Form Elements</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/image-hover.html">Image Hover</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/image-mask.html">Image Mask</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/lightbox.html">Lightbox</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/player.html">Media Player</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/modal.html">Modal</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/pagination.html">Pagination</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/progressbar.html">Progressbar</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/shadows.html">Shadows</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/shapes.html">Shapes</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/tables.html">Tables</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/tabs.html">Tabs</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/text-animations.html">Text Animations</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/text-highlight.html">Text Highlight</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/tiles.html">Tiles</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/tooltips-popovers.html">Tooltips & Popovers</a></li>
                                                <li><a className="dropdown-item" href="@@webRoot/docs/elements/typography.html">Typography</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </>
        )
        }
    </>
    );
};

export default MenuLink;