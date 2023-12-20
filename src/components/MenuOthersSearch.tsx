import React from 'react'

const MenuOthersSearch = () => {
    return (<>
        <div className="offcanvas offcanvas-top bg-light" id="offcanvas-search" data-bs-scroll="true">
            <div className="container d-flex flex-row py-6">
                <form className="search-form w-100">
                    <input id="search-form" type="text" className="form-control" placeholder="Type keyword and hit enter" />
                </form>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        </div>
    </>);
}

export default MenuOthersSearch;