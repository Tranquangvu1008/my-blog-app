import React from 'react'

interface MenuLinkProps {
    centerLogo?: any;
}

const MenuLinkDocs: React.FC<MenuLinkProps> = ({ centerLogo, }) => {
    return (
        <>
            {centerLogo ? (
                <ul className="navbar-nav">
                    <div className="w-100 order-1 order-lg-0 d-lg-flex">
                        <ul className="navbar-nav ms-lg-auto">

                            <li className="nav-item"><a className="nav-link" href="/#">Link</a></li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">Dropdown</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="dropdown-item" href="/#">Action</a></li>
                                    <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="/#" data-bs-toggle="dropdown">Dropdown</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="/#" data-bs-toggle="dropdown">Dropdown</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item"><a className="dropdown-item" href="/#">Action</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="/#">Another Action</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item"><a className="dropdown-item" href="/#">Action</a></li>
                                            <li className="nav-item"><a className="dropdown-item" href="/#">Another Action</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a className="dropdown-item" href="/#">Another Action</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="w-100 order-3 order-lg-2 d-lg-flex">
                        <ul className="navbar-nav me-lg-auto">
                            <li className="nav-item dropdown dropdown-mega"><a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">Mega Menu</a>
                                <ul className="dropdown-menu mega-menu">
                                    <li className="mega-menu-content">
                                        <div className="row gx-0 gx-lg-3">
                                            <div className="col-lg-6">
                                                <h6 className="dropdown-header">One</h6>
                                                <div className="row gx-0">
                                                    <div className="col-lg-6">
                                                        <ul className="list-unstyled">
                                                            <li><a className="dropdown-item" href="/#">Link</a></li>
                                                            <li><a className="dropdown-item" href="/#">Link</a></li>
                                                            <li><a className="dropdown-item" href="/#">Link</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <ul className="list-unstyled">
                                                            <li><a className="dropdown-item" href="/#">Link</a></li>
                                                            <li><a className="dropdown-item" href="/#">Link</a></li>
                                                            <li><a className="dropdown-item" href="/#">Link</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <h6 className="dropdown-header">Two</h6>
                                                <ul className="list-unstyled">
                                                    <li><a className="dropdown-item" href="/#">Link</a></li>
                                                    <li><a className="dropdown-item" href="/#">Link</a></li>
                                                    <li><a className="dropdown-item" href="/#">Link</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <h6 className="dropdown-header">Three</h6>
                                                <ul className="list-unstyled">
                                                    <li><a className="dropdown-item" href="/#">Link</a></li>
                                                    <li><a className="dropdown-item" href="/#">Link</a></li>
                                                    <li><a className="dropdown-item" href="/#">Link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">Dropdown Large</a>
                                <div className="dropdown-menu dropdown-lg">
                                    <div className="dropdown-lg-content">
                                        <div>
                                            <h6 className="dropdown-header">One</h6>
                                            <ul className="list-unstyled">
                                                <li><a className="dropdown-item" href="/#">Link</a></li>
                                                <li><a className="dropdown-item" href="/#">Link</a></li>
                                                <li><a className="dropdown-item" href="/#">Another Link</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h6 className="dropdown-header">Two</h6>
                                            <ul className="list-unstyled">
                                                <li><a className="dropdown-item" href="/#">Link</a></li>
                                                <li><a className="dropdown-item" href="/#">Link</a></li>
                                                <li><a className="dropdown-item" href="/#">Another Link</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </ul>

            ) : (
                <>
                    <div className="w-100 order-1 order-lg-0 d-lg-flex">
                        <ul className="navbar-nav ms-lg-auto">

                            <li className="nav-item"><a className="nav-link" href="/#">Link</a></li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">Dropdown</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="dropdown-item" href="/#">Action</a></li>
                                    <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="/#" data-bs-toggle="dropdown">Dropdown</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="/#" data-bs-toggle="dropdown">Dropdown</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item"><a className="dropdown-item" href="/#">Action</a></li>
                                                    <li className="nav-item"><a className="dropdown-item" href="/#">Another Action</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item"><a className="dropdown-item" href="/#">Action</a></li>
                                            <li className="nav-item"><a className="dropdown-item" href="/#">Another Action</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a className="dropdown-item" href="/#">Another Action</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="w-100 order-3 order-lg-2 d-lg-flex">
                        <ul className="navbar-nav me-lg-auto">
                            <li className="nav-item dropdown dropdown-mega"><a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">Mega Menu</a>
                                <ul className="dropdown-menu mega-menu">
                                    <li className="mega-menu-content">
                                        <div className="row gx-0 gx-lg-3">
                                            <div className="col-lg-6">
                                                <h6 className="dropdown-header">One</h6>
                                                <div className="row gx-0">
                                                    <div className="col-lg-6">
                                                        <ul className="list-unstyled">
                                                            <li><a className="dropdown-item" href="/#">Link</a></li>
                                                            <li><a className="dropdown-item" href="/#">Link</a></li>
                                                            <li><a className="dropdown-item" href="/#">Link</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <ul className="list-unstyled">
                                                            <li><a className="dropdown-item" href="/#">Link</a></li>
                                                            <li><a className="dropdown-item" href="/#">Link</a></li>
                                                            <li><a className="dropdown-item" href="/#">Link</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <h6 className="dropdown-header">Two</h6>
                                                <ul className="list-unstyled">
                                                    <li><a className="dropdown-item" href="/#">Link</a></li>
                                                    <li><a className="dropdown-item" href="/#">Link</a></li>
                                                    <li><a className="dropdown-item" href="/#">Link</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <h6 className="dropdown-header">Three</h6>
                                                <ul className="list-unstyled">
                                                    <li><a className="dropdown-item" href="/#">Link</a></li>
                                                    <li><a className="dropdown-item" href="/#">Link</a></li>
                                                    <li><a className="dropdown-item" href="/#">Link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">Dropdown Large</a>
                                <div className="dropdown-menu dropdown-lg">
                                    <div className="dropdown-lg-content">
                                        <div>
                                            <h6 className="dropdown-header">One</h6>
                                            <ul className="list-unstyled">
                                                <li><a className="dropdown-item" href="/#">Link</a></li>
                                                <li><a className="dropdown-item" href="/#">Link</a></li>
                                                <li><a className="dropdown-item" href="/#">Another Link</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h6 className="dropdown-header">Two</h6>
                                            <ul className="list-unstyled">
                                                <li><a className="dropdown-item" href="/#">Link</a></li>
                                                <li><a className="dropdown-item" href="/#">Link</a></li>
                                                <li><a className="dropdown-item" href="/#">Another Link</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </>
            )
            }
        </>
    );
}

export default MenuLinkDocs;