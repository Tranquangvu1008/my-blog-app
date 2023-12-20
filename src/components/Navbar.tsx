import React from 'react'

import MenuLink from './MenuLink';
import MenuLinkDocs from './docs/MenuLink';
import MenuLinksOnePage from './MenuLinksOnePage';
import MenuLinksOnePageDemo from './MenuLinksOnePageDemo';
import MenuOffcanvasFooter from './MenuOffcanvasFooter';
import MenuOthers from './MenuOthers';
import logoAltSrc from '../assets/img/logo-dark.png';
import logoAlt2xSrc from '../assets/img/logo-dark@2x.png';
import logoSrc from '../assets/img/logo.png';
import logo2xSrc from '../assets/img/logo@2x.png';
import logoLightSrc from '../assets/img/logo-light.png';
import logoLight2xSrc from '../assets/img/logo-light@2x.png';
import MenuOthersModal from './MenuOthersModal';
import MenuOthersOffcanvasInfo from './MenuOthersOffcanvasInfo';
import MenuOthersCart from './MenuOthersCart';
import MenuOthersSearch from './MenuOthersSearch';
import { Link } from 'react-router-dom';

interface NavbarProps {
    classList?: any;
    fancy?: boolean;
    logoAlt?: any;
    otherClassList?: any;
    otherSocial?: boolean;
    logoBoth?: any;
    logoLight?: any;
    onePage?: any;
    onePageDemo?: any;
    docs?: any;
    otherBtnModal?: any;
    otherLinkModal?: any;
    otherInfo?: any;
    otherShop?: any;
    otherSearch?: any;
}

const Navbar: React.FC<NavbarProps> = ({ classList, fancy, logoAlt, otherClassList, otherSocial, logoBoth, logoLight, onePage, onePageDemo, docs, otherBtnModal,
    otherLinkModal, otherInfo, otherShop, otherSearch }) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${classList}`}>
                {!fancy ?
                    <div className="container flex-lg-row flex-nowrap align-items-center" >

                        <div className="navbar-brand w-100">
                            {/* Chuyen ve trang home */}
                            <Link to="/">
                                {!logoBoth &&
                                    !logoLight ?
                                    (<img src={logoAltSrc ? logoAltSrc : logoSrc} srcSet={logoAltSrc ? `${logoAlt2xSrc} 2x` : `${logo2xSrc} 2x`} alt='' />)
                                    : (<img src={logoLightSrc} srcSet={`${logoLight2xSrc} 2x`} alt='' />)

                                }
                                {logoBoth &&
                                    <>
                                        <img className='logo-dark' src={logoAltSrc ? logoAltSrc : logoSrc} srcSet={logoAltSrc ? `${logoAlt2xSrc} 2x` : `${logo2xSrc} 2x`} alt="" />
                                        <img className='logo-light' src={logoLightSrc} srcSet={`${logoLight2xSrc} 2x`} alt='' />
                                    </>
                                }
                            </Link>
                        </div>
                        <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                            <div className="offcanvas-header d-lg-none">
                                <h3 className="text-white fs-30 mb-0">Sandbox</h3>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                                {!onePage && !onePageDemo &&
                                    !docs ? (
                                    <MenuLink />
                                ) : (
                                    <MenuLinkDocs />
                                )
                                }

                                {onePage &&
                                    <MenuLinksOnePage />
                                }
                                {onePageDemo &&
                                    <MenuLinksOnePageDemo />
                                }
                                <div className="offcanvas-footer d-lg-none">
                                    <MenuOffcanvasFooter />
                                </div>
                            </div>
                        </div>
                        <MenuOthers classList={otherClassList} />
                    </div>
                    :
                    <div className="container" >
                        <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center" >
                            <div className="navbar-brand w-100">
                                {/* Chuyen ve trang index */}
                                <Link to="/">
                                    {!logoBoth &&
                                        !logoLight ?
                                        (<img src={logoAltSrc ? logoAltSrc : logoSrc} srcSet={logoAltSrc ? `${logoAlt2xSrc} 2x` : `${logo2xSrc} 2x`} alt='' />)
                                        : (<img src={logoLightSrc} srcSet={`${logoLight2xSrc} 2x`} alt='' />)

                                    }
                                    {logoBoth &&
                                        <>
                                            <img className='logo-dark' src={logoAltSrc ? logoAltSrc : logoSrc} srcSet={logoAltSrc ? `${logoAlt2xSrc} 2x` : `${logo2xSrc} 2x`} alt="" />
                                            <img className='logo-light' src={logoLightSrc} srcSet={`${logoLight2xSrc} 2x`} alt='' />
                                        </>
                                    }
                                </Link>
                            </div>
                            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                                <div className="offcanvas-header d-lg-none">
                                    <h3 className="text-white fs-30 mb-0">Sandbox</h3>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                                    {!onePage && !onePageDemo &&
                                        !docs ? (
                                        <MenuLink />
                                    ) : (
                                        <MenuLinkDocs />
                                    )
                                    }
                                    {onePage &&
                                        <MenuLinksOnePage />
                                    }
                                    {onePageDemo &&
                                        <MenuLinksOnePageDemo />
                                    }
                                    <div className="offcanvas-footer d-lg-none">
                                        <MenuOffcanvasFooter />
                                    </div>
                                </div>
                            </div>
                            <MenuOthers classList={otherClassList} social={otherSocial} />
                        </div>
                    </div>
                }
            </nav >
            {otherBtnModal && otherLinkModal &&
                <MenuOthersModal />
            }
            {otherInfo &&
                <MenuOthersOffcanvasInfo />
            }
            {otherShop &&
                <MenuOthersCart />
            }
            {otherSearch &&
                <MenuOthersSearch />
            }
        </>
    );
}


export default Navbar;