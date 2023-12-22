import React from 'react'

interface MenuOthersSearchProps {
    activeSearch?: any
    onClickDisableSearch?: (value: any) => void;
}

const MenuOthersSearch: React.FC<MenuOthersSearchProps> = ({ activeSearch, onClickDisableSearch }) => {

    const onClickInActiveSearch = () => {
        if (onClickDisableSearch) {
            onClickDisableSearch(false);
        }
    }
    return (<>
        <div className={activeSearch ? "offcanvas offcanvas-top bg-light show" : "offcanvas offcanvas-top bg-light"} id='offcanvas-search'>
            <div className="container d-flex flex-row py-6">
                <form className="search-form w-100">
                    <input id="search-form" type="text" className="form-control" placeholder="Type keyword and hit enter" />
                </form>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={onClickInActiveSearch}></button>
            </div>
        </div>
        {activeSearch && <div className="offcanvas-backdrop fade show"></div>}
    </>);
}

export default MenuOthersSearch;