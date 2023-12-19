import React from 'react'

interface MenuOthersProps {
    classList?: any
    btn?: any
    btnClassList?: any
    btnText?: any
    btnLink?: any
    btnModal?: any
    link?: any
    linkText?: any
    linkLink?: any
    linkModal?: any
    linksNewTab?: any
    languageSelect?: any
    social?: any
    search?: any
    shop?: any
    info?: any
}

const MenuOthers: React.FC<MenuOthersProps> = ({ classList,
    btn,
    btnClassList,
    btnText,
    btnLink,
    btnModal,
    link,
    linkText,
    linkLink,
    linkModal,
    linksNewTab,
    languageSelect,
    social,
    search,
    shop,
    info, }) => {
    return (<>
        <div className="navbar-other @@classList">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
                {languageSelect &&
                    //   @@include('_menu-others-lang.html')
                    <></>
                }
                {info &&
                    <li className="nav-item"><a href="/#" className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info"><i className="uil uil-info-circle"></i></a></li>
                }
                {search &&
                    <li className="nav-item"><a href="/#" className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search"><i className="uil uil-search"></i></a></li>
                }
                {shop &&
                    <li className="nav-item">
                        <a href="/#" className="nav-link position-relative d-flex flex-row align-items-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-cart">
                            <i className="uil uil-shopping-cart"></i>
                            <span className="badge badge-cart bg-primary">3</span>
                        </a>
                    </li>
                }
                {link &&
                    <li className="nav-item">
                        <a
                            href={linkModal ? '/#' : linkLink}
                            className="nav-link"
                            target={linksNewTab && '_blank'}
                            data-bs-toggle={linkModal && 'modal'}
                            data-bs-target={linkModal && linkLink}
                        >
                            {linkText}
                        </a>
                    </li>
                }
                {btn &&
                    <li className="nav-item d-none d-md-block">
                        <a
                            href={btnModal ? '/#' : btnLink}
                            className={`btn ${btnClassList}`}
                            target={linksNewTab && '_blank'}
                            data-bs-toggle={btnModal && 'modal'}
                            data-bs-target={btnModal && btnLink}
                        >
                            {btnText}
                        </a>    </li>
                }
                {social &&
                    <li className="nav-item">
                        <nav className="nav social social-muted justify-content-end text-end">
                            <a href="/#"><i className="uil uil-twitter"></i></a>
                            <a href="/#"><i className="uil uil-facebook-f"></i></a>
                            <a href="/#"><i className="uil uil-dribbble"></i></a>
                            <a href="/#"><i className="uil uil-instagram"></i></a>
                        </nav>
                    </li>
                }
                <li className="nav-item d-lg-none">
                    <button className="hamburger offcanvas-nav-btn"><span></span></button>
                </li>
            </ul >
        </div >
    </>);
}

export default MenuOthers;