import React from 'react'

const MenuOthersOffcanvasInfo = () => {
    return (<>
        <div className="offcanvas offcanvas-end text-inverse" id="offcanvas-info" data-bs-scroll="true">
            <div className="offcanvas-header">
                <h3 className="text-white fs-30 mb-0">Sandbox</h3>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body pb-6">
                <div className="widget mb-8">
                    <p>Sandbox is a multipurpose HTML5 template with various layouts which will be a great solution for your business.</p>
                </div>
                <div className="widget mb-8">
                    <h4 className="widget-title text-white mb-3">Contact Info</h4>
                    <address> Moonshine St. 14/05 <br /> Light City, London </address>
                    <a href="mailto:first.last@email.com">info@email.com</a><br /> 00 (123) 456 78 90
                </div>

                <div className="widget mb-8">
                    <h4 className="widget-title text-white mb-3">Learn More</h4>
                    <ul className="list-unstyled">
                        <li><a href="/#">Our Story</a></li>
                        <li><a href="/#">Terms of Use</a></li>
                        <li><a href="/#">Privacy Policy</a></li>
                        <li><a href="/#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="widget">
                    <h4 className="widget-title text-white mb-3">Follow Us</h4>
                    <nav className="nav social social-white">
                        <a href="/#"><i className="uil uil-twitter"></i></a>
                        <a href="/#"><i className="uil uil-facebook-f"></i></a>
                        <a href="/#"><i className="uil uil-dribbble"></i></a>
                        <a href="/#"><i className="uil uil-instagram"></i></a>
                        <a href="/#"><i className="uil uil-youtube"></i></a>
                    </nav>
                </div>
            </div>
        </div>
    </>);
}

export default MenuOthersOffcanvasInfo;