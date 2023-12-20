import React from 'react'

const MenuOthersCart = () => {
    return (<>
        <div className="offcanvas offcanvas-end bg-light" id="offcanvas-cart" data-bs-scroll="true">
            <div className="offcanvas-header">
                <h3 className="mb-0">Your Cart</h3>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-column">
                <div className="shopping-cart">
                    <div className="shopping-cart-item d-flex justify-content-between mb-4">
                        <div className="d-flex flex-row">
                            <figure className="rounded w-17"><a href="@@webRoot/shop-product.html"><img src="@@webRoot/assets/img/photos/sth1.jpg" srcSet="@@webRoot/assets/img/photos/sth1@2x.jpg 2x" alt="" /></a></figure>
                            <div className="w-100 ms-4">
                                <h3 className="post-title fs-16 lh-xs mb-1"><a href="@@webRoot/shop-product.html" className="link-dark">Nike Air Sneakers</a></h3>
                                <p className="price fs-sm"><del><span className="amount">$55.00</span></del> <ins><span className="amount">$45.99</span></ins></p>
                                <div className="form-select-wrapper">
                                    <select className="form-select form-select-sm">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="ms-2"><a href="/#" className="link-dark"><i className="uil uil-trash-alt"></i></a></div>
                    </div>
                    <div className="shopping-cart-item d-flex justify-content-between mb-4">
                        <div className="d-flex flex-row">
                            <figure className="rounded w-17"><a href="@@webRoot/shop-product.html"><img src="@@webRoot/assets/img/photos/sth2.jpg" srcSet="@@webRoot/assets/img/photos/sth2@2x.jpg 2x" alt="" /></a></figure>
                            <div className="w-100 ms-4">
                                <h3 className="post-title fs-16 lh-xs mb-1"><a href="@@webRoot/shop-product.html" className="link-dark">Colorful Sneakers</a></h3>
                                <p className="price fs-sm"><span className="amount">$45.00</span></p>
                                <div className="form-select-wrapper">
                                    <select className="form-select form-select-sm">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="ms-2"><a href="/#" className="link-dark"><i className="uil uil-trash-alt"></i></a></div>
                    </div>
                    <div className="shopping-cart-item d-flex justify-content-between mb-4">
                        <div className="d-flex flex-row">
                            <figure className="rounded w-17"><a href="@@webRoot/shop-product.html"><img src="@@webRoot/assets/img/photos/sth3.jpg" srcSet="@@webRoot/assets/img/photos/sth3@2x.jpg 2x" alt="" /></a></figure>
                            <div className="w-100 ms-4">
                                <h3 className="post-title fs-16 lh-xs mb-1"><a href="@@webRoot/shop-product.html" className="link-dark">Polaroid Camera</a></h3>
                                <p className="price fs-sm"><span className="amount">$45.00</span></p>
                                <div className="form-select-wrapper">
                                    <select className="form-select form-select-sm">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="ms-2"><a href="/#" className="link-dark"><i className="uil uil-trash-alt"></i></a></div>
                    </div>
                </div>
                <div className="offcanvas-footer flex-column text-center">
                    <div className="d-flex w-100 justify-content-between mb-4">
                        <span>Subtotal:</span>
                        <span className="h6 mb-0">$135.99</span>
                    </div>
                    <a href="/#" className="btn btn-primary btn-icon btn-icon-start rounded w-100 mb-4"><i className="uil uil-credit-card fs-18"></i> Checkout</a>
                    <p className="fs-14 mb-0">Free shipping on all orders over $50</p>
                </div>
            </div>
        </div>
    </>);
}

export default MenuOthersCart;