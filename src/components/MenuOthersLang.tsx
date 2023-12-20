import React from 'react'

const MenuOthersLang = () => {
    return (<>
        <li className="nav-item dropdown language-select text-uppercase">
            <a className="nav-link dropdown-item dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">En</a>
            <ul className="dropdown-menu">
                <li className="nav-item"><a className="dropdown-item" href="/#">En</a></li>
                <li className="nav-item"><a className="dropdown-item" href="/#">De</a></li>
                <li className="nav-item"><a className="dropdown-item" href="/#">Es</a></li>
            </ul>
        </li>
    </>);
}

export default MenuOthersLang;