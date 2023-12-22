import React from 'react'
import { Link } from 'react-router-dom';

interface MenuLinkProps {
    centerLogo?: any;
}

const MenuLink: React.FC<MenuLinkProps> = ({ centerLogo, }) => {
    return (<>
        {centerLogo ? (
            <>
                <div className="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
                    <ul className="navbar-nav ms-lg-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/festival" data-bs-toggle="dropdown">Festival</Link>                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">Projects</a>
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
                            <a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">Blog</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog.html">Blog without Sidebar</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog2.html">Blog with Sidebar</a></li>
                                <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog3.html">Blog with Left Sidebar</a></li>
                                <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="/#" data-bs-toggle="dropdown">Blog Posts</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog-post.html">Post without Sidebar</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog-post2.html">Post with Sidebar</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="@@webRoot/blog-post3.html">Post with Left Sidebar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown dropdown-mega">
                            <a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">Blocks</a>
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
                            <a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">Documentation</a>
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
        ) : (
            <>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/festival" data-bs-toggle="dropdown">Festival</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog" data-bs-toggle="dropdown">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact" data-bs-toggle="dropdown">Contact</Link>
                    </li>
                </ul>
            </>
        )
        }
    </>
    );
};

export default MenuLink;