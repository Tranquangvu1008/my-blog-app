import React from 'react'

interface FooterWidgetsProps {
    lightText?: any;
}

const FooterWidgets: React.FC<FooterWidgetsProps> = ({ lightText }) => {
    return (
        <>
            <div className="row gy-6 gy-lg-0">
                <div className="col-md-4 col-lg-3">
                    <div className="widget">
                        {!lightText ?
                            <img className="mb-4" src="@@webRoot/assets/img/logo-dark.png" srcSet="@@webRoot/assets/img/logo-dark@2x.png 2x" alt="" />
                            :
                            <img className="mb-4" src="@@webRoot/assets/img/logo-light.png" srcSet="@@webRoot/assets/img/logo-light@2x.png 2x" alt="" />

                        }
                        <p className="mb-4">© 2023 Sandbox. <br className="d-none d-lg-block" />All rights reserved.</p>
                        <nav className="nav social @@if (context.lightText) {social-white}">
                            <a href="/#"><i className="uil uil-twitter"></i></a>
                            <a href="/#"><i className="uil uil-facebook-f"></i></a>
                            <a href="/#"><i className="uil uil-dribbble"></i></a>
                            <a href="/#"><i className="uil uil-instagram"></i></a>
                            <a href="/#"><i className="uil uil-youtube"></i></a>
                        </nav>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3">
                    <div className="widget">
                        <h4 className="widget-title @@if (context.lightText) {text-white} mb-3">Get in Touch</h4>
                        <address className="pe-xl-15 pe-xxl-17">Moonshine St. 14/05 Light City, London, United Kingdom</address>
                        <a href="mailto:#" className={!lightText ? "link-body" : ""}>info@email.com</a><br /> 00 (123) 456 78 90
                    </div>
                </div>
                <div className="col-md-4 col-lg-3">
                    <div className="widget">
                        <h4 className="widget-title @@if (context.lightText) {text-white} mb-3">Learn More</h4>
                        <ul className="list-unstyled @@if (!context.lightText) {text-reset} mb-0">
                            <li><a href="/#">About Us</a></li>
                            <li><a href="/#">Our Story</a></li>
                            <li><a href="/#">Projects</a></li>
                            <li><a href="/#">Terms of Use</a></li>
                            <li><a href="/#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-12 col-lg-3">
                    <div className="widget">
                        <h4 className="widget-title @@if (context.lightText) {text-white} mb-3">Our Newsletter</h4>
                        <p className="mb-5">Subscribe to our newsletter to get our news & deals delivered to you.</p>
                        <div className="newsletter-wrapper">
                            <div id="mc_embed_signup2">
                                <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form2" name="mc-embedded-subscribe-form" className="validate @@if (context.lightText) {dark-fields}" target="_blank" noValidate>
                                    <div id="mc_embed_signup_scroll2">
                                        <div className="mc-field-group input-group form-floating">
                                            <input type="email" defaultValue="" name="EMAIL" className="required email form-control" placeholder="Email Address" id="mce-EMAIL2" />
                                            <label htmlFor="mce-EMAIL2">Email Address</label>
                                            <input type="submit" defaultValue="Join" name="subscribe" id="mc-embedded-subscribe2" className="btn btn-primary @@if(context.btnClassList){@@btnClassList}" />
                                        </div>
                                        <div id="mce-responses2" className="clear">
                                            <div className="response" id="mce-error-response2" style={{ display: "none" }}></div>
                                            <div className="response" id="mce-success-response2" style={{ display: "none" }}></div>
                                            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabIndex={-1} defaultValue="" /></div>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterWidgets;