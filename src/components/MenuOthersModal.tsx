import React from "react";

const MenuOthersModal = () => {
    return (
        <>
            <div className="modal fade" id="modal-signin" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content text-center">
                        <div className="modal-body">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                            <h2 className="mb-3 text-start">Welcome Back</h2>
                            <p className="lead mb-6 text-start">
                                Fill your email and password to sign in.
                            </p>
                            <form className="text-start mb-3">
                                <div className="form-floating mb-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        id="loginEmail"
                                    />
                                    <label htmlFor="loginEmail">Email</label>
                                </div>
                                <div className="form-floating password-field mb-4">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        id="loginPassword"
                                    />
                                    <span className="password-toggle">
                                        <i className="uil uil-eye"></i>
                                    </span>
                                    <label htmlFor="loginPassword">Password</label>
                                </div>
                                <a className="btn btn-primary rounded-pill btn-login w-100 mb-2" href="/#">
                                    Sign In
                                </a>
                            </form>
                            <p className="mb-1">
                                <a href="/#" className="hover">
                                    Forgot Password?
                                </a>
                            </p>
                            <p className="mb-0">
                                Don't have an account?{" "}
                                <a
                                    href="/#"
                                    data-bs-target="#modal-signup"
                                    data-bs-toggle="modal"
                                    data-bs-dismiss="modal"
                                    className="hover"
                                >
                                    Sign up
                                </a>
                            </p>
                            <div className="divider-icon my-4">or</div>
                            <nav className="nav social justify-content-center text-center">
                                <a href="/#" className="btn btn-circle btn-sm btn-google">
                                    <i className="uil uil-google"></i>
                                </a>
                                <a href="/#" className="btn btn-circle btn-sm btn-facebook-f">
                                    <i className="uil uil-facebook-f"></i>
                                </a>
                                <a href="/#" className="btn btn-circle btn-sm btn-twitter">
                                    <i className="uil uil-twitter"></i>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modal-signup" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content text-center">
                        <div className="modal-body">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                            <h2 className="mb-3 text-start">Sign up to Sandbox</h2>
                            <p className="lead mb-6 text-start">
                                Registration takes less than a minute.
                            </p>
                            <form className="text-start mb-3">
                                <div className="form-floating mb-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        id="loginName"
                                    />
                                    <label htmlFor="loginName">Name</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        id="loginEmail"
                                    />
                                    <label htmlFor="loginEmail">Email</label>
                                </div>
                                <div className="form-floating password-field mb-4">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        id="loginPassword"
                                    />
                                    <span className="password-toggle">
                                        <i className="uil uil-eye"></i>
                                    </span>
                                    <label htmlFor="loginPassword">Password</label>
                                </div>
                                <div className="form-floating password-field mb-4">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        id="loginPasswordConfirm"
                                    />
                                    <span className="password-toggle">
                                        <i className="uil uil-eye"></i>
                                    </span>
                                    <label htmlFor="loginPasswordConfirm">Confirm Password</label>
                                </div>
                                <a className="btn btn-primary rounded-pill btn-login w-100 mb-2" href="/#">
                                    Sign Up
                                </a>
                            </form>
                            <p className="mb-0">
                                Already have an account?{" "}
                                <a
                                    href="/#"
                                    data-bs-target="#modal-signin"
                                    data-bs-toggle="modal"
                                    data-bs-dismiss="modal"
                                    className="hover"
                                >
                                    Sign in
                                </a>
                            </p>
                            <div className="divider-icon my-4">or</div>
                            <nav className="nav social justify-content-center text-center">
                                <a href="/#" className="btn btn-circle btn-sm btn-google">
                                    <i className="uil uil-google"></i>
                                </a>
                                <a href="/#" className="btn btn-circle btn-sm btn-facebook-f">
                                    <i className="uil uil-facebook-f"></i>
                                </a>
                                <a href="/#" className="btn btn-circle btn-sm btn-twitter">
                                    <i className="uil uil-twitter"></i>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuOthersModal;
