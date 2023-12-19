import React from 'react'
import MenuLink from './MenuLink';
import MenuLinkDocs from './docs/MenuLink';
import MenuLinksOnePage from './MenuLinksOnePage';
import MenuLinksOnePageDemo from './MenuLinksOnePageDemo';
import MenuOffcanvasFooter from './MenuOffcanvasFooter';
import MenuOthers from './MenuOthers';

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
    otherLinkModal, otherShop, otherSearch }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg @@classList">
                {!fancy ?
                    <div className="container flex-lg-row flex-nowrap align-items-center" >
                        <div className="navbar-brand w-100">
                            <a href="./index.html">
                                {!logoBoth &&
                                    !logoLight ?
                                    (<img src="@@webRoot/assets/img/@@if(context.logoAlt){@@logoAlt}@@if(!context.logoAlt){logo}.png"
                                        srcSet="@@webRoot/assets/img/@@if(context.logoAlt){@@logoAlt}@@if(!context.logoAlt){logo}@2x.png 2x"
                                        alt="" />)
                                    : (<img src="@@webRoot/assets/img/logo-light.png" srcSet="@@webRoot/assets/img/logo-light@2x.png 2x" alt="" />)

                                }
                                {logoBoth &&
                                    <>
                                        <img className="logo-dark" src="@@webRoot/assets/img/@@if(context.logoAlt){@@logoAlt}@@if(!context.logoAlt){logo}.png"
                                            srcSet="@@webRoot/assets/img/@@if(context.logoAlt){@@logoAlt}@@if(!context.logoAlt){logo}@2x.png 2x" alt="" />
                                        <img className="logo-light" src="@@webRoot/assets/img/logo-light.png" srcSet="@@webRoot/assets/img/logo-light@2x.png 2x" alt="" />
                                    </>
                                }
                            </a>
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
                        {/* @@include('_menu-others.html', {
                                "classList": "@@otherClassList",
                                "btn": "@@otherBtn",
                                "btnClassList": "@@otherBtnClassList",
                                "btnText": "@@otherBtnText",
                                "btnLink": "@@otherBtnLink",
                                "btnModal": "@@otherBtnModal",
                                "link": "@@otherLink",
                                "linkText": "@@otherLinkText",
                                "linkLink": "@@otherLinkLink",
                                "linkModal": "@@otherLinkModal",
                                "linksNewTab": "@@otherLinksNewTab",
                                "languageSelect": "@@otherLanguageSelect",
                                "social": "@@otherSocial",
                                "search": "@@otherSearch",
                                "shop": "@@otherShop",
                                "info": "@@otherInfo"
                                }) */}
                    </div>
                    :
                    <div className="container" >
                        <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center" >
                            <div className="navbar-brand w-100">
                                <a href="@@webRoot/index.html">
                                    {!logoBoth &&
                                        !logoLight ?
                                        (<img src="@@webRoot/assets/img/@@if(context.logoAlt){@@logoAlt}@@if(!context.logoAlt){logo}.png"
                                            srcSet="@@webRoot/assets/img/@@if(context.logoAlt){@@logoAlt}@@if(!context.logoAlt){logo}@2x.png 2x"
                                            alt="" />)
                                        : (<img src="@@webRoot/assets/img/logo-light.png" srcSet="@@webRoot/assets/img/logo-light@2x.png 2x" alt="" />)

                                    }
                                    {logoBoth &&
                                        <>
                                            <img className="logo-dark" src="@@webRoot/assets/img/@@if(context.logoAlt){@@logoAlt}@@if(!context.logoAlt){logo}.png"
                                                srcSet="@@webRoot/assets/img/@@if(context.logoAlt){@@logoAlt}@@if(!context.logoAlt){logo}@2x.png 2x" alt="" />
                                            <img className="logo-light" src="@@webRoot/assets/img/logo-light.png" srcSet="@@webRoot/assets/img/logo-light@2x.png 2x" alt="" />
                                        </>
                                    }
                                </a>
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
                            {/* @@include('_menu-others.html', {
                                "classList": "@@otherClassList",
                                "btn": "@@otherBtn",
                                "btnClassList": "@@otherBtnClassList",
                                "btnText": "@@otherBtnText",
                                "btnLink": "@@otherBtnLink",
                                "btnModal": "@@otherBtnModal",
                                "link": "@@otherLink",
                                "linkText": "@@otherLinkText",
                                "linkLink": "@@otherLinkLink",
                                "linkModal": "@@otherLinkModal",
                                "linksNewTab": "@@otherLinksNewTab",
                                "languageSelect": "@@otherLanguageSelect",
                                "social": "@@otherSocial",
                                "search": "@@otherSearch",
                                "shop": "@@otherShop",
                                "info": "@@otherInfo"
                                }) */}
                        </div></div>}

            </nav >
        </>
    );
}


export default Navbar;