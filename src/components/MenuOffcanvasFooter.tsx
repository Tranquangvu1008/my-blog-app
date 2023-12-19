import React from 'react'

interface MenuOffcanvasFooterProps {

}

const MenuOffcanvasFooter: React.FC<MenuOffcanvasFooterProps> = ({ }) => {
    return (
        <div>
            <a href="mailto:first.last@email.com" className="link-inverse">info@email.com</a>
            <br />
            00 (123) 456 78 90
            <br />
            <nav className="nav social social-white mt-4">
                <a href="#"><i className="uil uil-twitter"></i></a>
                <a href="#"><i className="uil uil-facebook-f"></i></a>
                <a href="#"><i className="uil uil-dribbble"></i></a>
                <a href="#"><i className="uil uil-instagram"></i></a>
                <a href="#"><i className="uil uil-youtube"></i></a>
            </nav>
        </div>
    );
}

export default MenuOffcanvasFooter;