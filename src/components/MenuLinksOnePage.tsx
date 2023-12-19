import React from 'react'

interface MenuLinksOnePageProps {
    centerLogo?: any;
}

const MenuLinksOnePage: React.FC<MenuLinksOnePageProps> = ({ centerLogo }) => {
    return (<>
        {centerLogo ? (
            <ul className="navbar-nav">
                <div className="w-100 order-1 order-lg-0 d-lg-flex">
                    <ul className="navbar-nav ms-lg-auto">
                        <li className="nav-item"><a className="nav-link scroll active" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link scroll" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link scroll" href="#process">Process</a></li>
                    </ul>
                </div>
                <div className="w-100 order-3 order-lg-2 d-lg-flex">
                    <ul className="navbar-nav me-lg-auto">
                        <li className="nav-item"><a className="nav-link scroll" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link scroll" href="#testimonials">Testimonials</a></li>
                        <li className="nav-item"><a className="nav-link scroll" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </ul>
        ) : (
            <>
                <div className="w-100 order-1 order-lg-0 d-lg-flex">
                    <ul className="navbar-nav ms-lg-auto">
                        <li className="nav-item"><a className="nav-link scroll active" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link scroll" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link scroll" href="#process">Process</a></li>
                    </ul>
                </div>
                <div className="w-100 order-3 order-lg-2 d-lg-flex">
                    <ul className="navbar-nav me-lg-auto">
                        <li className="nav-item"><a className="nav-link scroll" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link scroll" href="#testimonials">Testimonials</a></li>
                        <li className="nav-item"><a className="nav-link scroll" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </>
        )
        }
    </>);
}

export default MenuLinksOnePage;