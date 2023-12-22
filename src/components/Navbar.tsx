import React, { useEffect, useState } from 'react'

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
    classList?: string;
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
    otherLanguageSelect?: any;
    otherBtn?: any;
    otherBtnClassList?: any;
    otherBtnText?: any;
    otherBtnLink?: any;
    otherLink?: any;
    otherLinkText?: any;
    otherLinkLink?: any;
    otherLinksNewTab?: any;
}

const Navbar: React.FC<NavbarProps> = ({ classList, fancy, logoAlt, otherClassList, otherSocial, logoBoth, logoLight, onePage, onePageDemo, docs, otherBtnModal,
    otherLinkModal, otherInfo, otherShop, otherSearch, otherLanguageSelect, otherBtn, otherBtnClassList, otherBtnText, otherBtnLink,
    otherLink, otherLinkText, otherLinkLink, otherLinksNewTab }) => {
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e: any) => {
        const header = document.querySelector('.navbar');
        if (header) {

            if (window.scrollY >= 150) {
                header.classList.add('navbar-clone')
                header.classList.add('fixed')
                header.classList.add('navbar-stick')
                header.classList.remove('navbar-unstick');
            } else {
                header.classList.remove('navbar-clone')
                header.classList.remove('fixed')
                header.classList.remove('navbar-stick');
                header.classList.add('navbar-unstick')
            }

            if (classList?.includes("navbar-dark")) {
                if (window.scrollY >= 150) {
                    header.classList.add('navbar-light')
                    header.classList.remove('navbar-dark');
                } else {
                    header.classList.add('navbar-dark')
                    header.classList.remove('navbar-light');
                }
            }
        }
    };

    const [activeSearch, setActiveSearch] = useState(false);

    const onClickSearch = (value: any) => {
        setActiveSearch((prevActiveSearch) => value);
    }
    const onClickDisableSearch = (value: any) => {
        setActiveSearch((prevActiveSearch) => value);
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${classList}`}>
                {!fancy ?
                    <div className="container flex-lg-row flex-nowrap align-items-center" >

                        <div className="navbar-brand w-100">
                            {/* Chuyen ve trang home */}
                            <Link to="/">
                                {!logoBoth ?
                                    (!logoLight ?
                                        (<img src={logoAlt ? logoAltSrc : logoSrc} srcSet={logoAlt ? `${logoAlt2xSrc} 2x` : `${logo2xSrc} 2x`} alt='' />)
                                        : (<img src={logoLightSrc} srcSet={`${logoLight2xSrc} 2x`} alt='' />))
                                    :
                                    <>
                                        <img className='logo-dark' src={logoAlt ? logoAltSrc : logoSrc} srcSet={logoAlt ? `${logoAlt2xSrc} 2x` : `${logo2xSrc} 2x`} alt="" />
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
                        <MenuOthers classList={otherClassList} social={otherSocial} languageSelect={otherLanguageSelect}
                            btn={otherBtn} btnClassList={otherBtnClassList} btnText={otherBtnText} btnLink={otherBtnLink}
                            btnModal={otherBtnModal} link={otherLink} linkText={otherLinkText} linkLink={otherLinkLink}
                            linkModal={otherLinkModal} linksNewTab={otherLinksNewTab} search={otherSearch} shop={otherShop}
                            info={otherInfo} onClickSearch={onClickSearch} />

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
                            <MenuOthers classList={otherClassList} social={otherSocial} languageSelect={otherLanguageSelect}
                                btn={otherBtn} btnClassList={otherBtnClassList} btnText={otherBtnText} btnLink={otherBtnLink}
                                btnModal={otherBtnModal} link={otherLink} linkText={otherLinkText} linkLink={otherLinkLink}
                                linkModal={otherLinkModal} linksNewTab={otherLinksNewTab} search={otherSearch} shop={otherShop}
                                info={otherInfo} onClickSearch={onClickSearch} />
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
                <MenuOthersSearch activeSearch={activeSearch} onClickDisableSearch={onClickDisableSearch} />
            }
        </>
    );
}


export default Navbar;