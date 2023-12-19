import React from 'react'

interface Footer6WidgetsProps {

}

const Footer6Widgets: React.FC<Footer6WidgetsProps> = ({ }) => {
    return (<>
        <div className="d-md-flex align-items-center justify-content-between">
            <p className="mb-2 mb-lg-0">© 2023 Sandbox. All rights reserved.</p>
            <nav className="nav social social-muted mb-0 text-md-end">
                <a href="#"><i className="uil uil-twitter"></i></a>
                <a href="#"><i className="uil uil-facebook-f"></i></a>
                <a href="#"><i className="uil uil-dribbble"></i></a>
                <a href="#"><i className="uil uil-instagram"></i></a>
                <a href="#"><i className="uil uil-youtube"></i></a>
            </nav>
        </div></>);
}

export default Footer6Widgets;