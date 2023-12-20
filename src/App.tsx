import React from "react";
import Navbar from "./components/Navbar";
import Footer6Widgets from "./components/Footer6Widgets";
import PageProgress from "./components/PageProgress";
import Scripts from "./components/Scripts";
import photoAbout17 from "./assets/img/photos/about17.jpg";
import photoAbout172x from "./assets/img/photos/about17@2x.jpg";
import checkSvg from "./assets/img/icons/lineal/check.svg";
import browserSvg from "./assets/img/icons/lineal/browser.svg";
import smartPhoneSvg from "./assets/img/icons/lineal/smartphone.svg";
import setting3Svg from "./assets/img/icons/lineal/settings-3.svg";
import search2Svg from "./assets/img/icons/lineal/search-2.svg";
import photoF1 from "./assets/img/photos/f1.png";
import photoF12x from "./assets/img/photos/f1@2x.png";
import photoF2 from "./assets/img/photos/f2.png";
import photoF22x from "./assets/img/photos/f2@2x.png";
import photoF3 from "./assets/img/photos/f3.png";
import photoF32x from "./assets/img/photos/f3@2x.png";
import photoF4 from "./assets/img/photos/f4.png";
import photoF42x from "./assets/img/photos/f4@2x.png";
import emailSvg from "./assets/img/icons/lineal/email.svg";


function App() {
  return <div>
    <div className="content-wrapper">
      <header className="wrapper bg-gray">
        <Navbar classList={"fancy navbar-light navbar-bg-light"} fancy={true} logoAlt={"logo-dark"} otherClassList={"w-100 d-flex ms-auto"} otherSocial={true} />
      </header>
      <section className="wrapper bg-gray">
        <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
          <div className="row gy-10 gy-md-13 gy-lg-0 align-items-center">
            <div className="col-md-8 col-lg-5 d-flex position-relative mx-auto" data-cues="slideInDown" data-group="header">
              <div className="img-mask mask-1"><img src={photoAbout17} srcSet={`${photoAbout172x} 2x`} alt="" /></div>
              <div className="card shadow-lg position-absolute" style={{ bottom: '10%', right: '2%' }}>
                <div className="card-body py-4 px-5">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <img src={checkSvg} className="svg-inject icon-svg icon-svg-sm text-primary mx-auto me-3" alt="" />
                    </div>
                    <div>
                      <h3 className="counter mb-0 text-nowrap">250+</h3>
                      <p className="fs-14 lh-sm mb-0 text-nowrap">Projects Done</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-xxl-5 text-center text-lg-start" data-cues="slideInDown" data-group="page-title" data-delay="600">
              <h1 className="display-1 mb-5">I'm User Interface Designer & Developer.</h1>
              <p className="lead fs-25 lh-sm mb-7 px-md-10 px-lg-0">Hello! I'm Julia, a freelance user interface designer & developer based in London. I’m very passionate about the work that I do.</p>
              <div className="d-flex justify-content-center justify-content-lg-start" data-cues="slideInDown" data-group="page-title-buttons" data-delay="900">
                <span><a href="/#" className="btn btn-lg btn-primary rounded-pill me-2">See My Works</a></span>
                <span><a href="/#" className="btn btn-lg btn-outline-primary rounded-pill">Contact Me</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light wrapper-border">
        <div className="container py-14 py-md-18">
          <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10">
            <div className="col-lg-6 order-lg-2">
              <ul className="progress-list">
                <li>
                  <p>Web Design</p>
                  <div className="progressbar line soft-violet" data-value="100"></div>
                </li>
                <li>
                  <p>Mobile Design</p>
                  <div className="progressbar line soft-blue" data-value="80"></div>
                </li>
                <li>
                  <p>Development</p>
                  <div className="progressbar line soft-leaf" data-value="85"></div>
                </li>
                <li>
                  <p>SEO</p>
                  <div className="progressbar line soft-pink" data-value="90"></div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <h2 className="display-4 mb-3">What I Do?</h2>
              <p className="lead fs-20 mb-5">Duis mollis est commodo luctus nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl.</p>
            </div>
          </div>
          <div className="row gx-lg-8 gx-xl-12 gy-6 text-center">
            <div className="col-md-6 col-lg-3">
              <img src={browserSvg} className="svg-inject icon-svg icon-svg-md text-violet mb-3" alt="" />
              <h4>Web Design</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.</p>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={smartPhoneSvg} className="svg-inject icon-svg icon-svg-md text-blue mb-3" alt="" />
              <h4>Mobile Design</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.</p>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={setting3Svg} className="svg-inject icon-svg icon-svg-md text-leaf mb-3" alt="" />
              <h4>Development</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.</p>
            </div>
            <div className="col-md-6 col-lg-3">
              <img src={search2Svg} className="svg-inject icon-svg icon-svg-md text-pink mb-3" alt="" />
              <h4>SEO</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light wrapper-border">
        <div className="container py-14 pt-md-18 pb-md-16">
          <div className="row align-items-center mb-10">
            <div className="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
              <h2 className="display-4 mb-3">Latest Projects</h2>
              <p className="lead fs-20 mb-0">Check out some of my latest projects with creative ideas.</p>
            </div>
            <div className="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
              <a href="/#" className="btn btn-outline-primary rounded-pill mb-0">See All Projects</a>
            </div>
          </div>
          <div className="card bg-soft-violet mb-10">
            <div className="card-body p-12 pb-0">
              <div className="row">
                <div className="col-lg-4 pb-12 align-self-center">
                  <div className="post-category mb-3 text-violet">Web Design</div>
                  <h3 className="h1 post-title mb-3">Snowlake Theme</h3>
                  <p>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.</p>
                  <a href="/#" className="more hover link-violet">See Project</a>
                </div>
                <div className="col-lg-7 offset-lg-1 align-self-end">
                  <figure><img className="img-fluid" src={photoF1} srcSet={`${photoF12x} 2x`} alt="" /></figure>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-soft-blue mb-10">
            <div className="card-body p-12">
              <div className="row gy-10 align-items-center">
                <div className="col-lg-4 order-lg-2 offset-lg-1">
                  <div className="post-category mb-3 text-blue">Mobile Design</div>
                  <h3 className="h1 post-title mb-3">Budget App</h3>
                  <p>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.</p>
                  <a href="/#" className="more hover link-blue">See Project</a>
                </div>
                <div className="col-lg-7">
                  <figure><img className="img-fluid" src={photoF2} srcSet={`${photoF22x} 2x`} alt="" /></figure>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-md-8 gx-xl-10">
            <div className="col-lg-6">
              <div className="card bg-soft-leaf mb-10">
                <div className="card-body p-12 pb-0">
                  <div className="post-category mb-3 text-leaf">Web Design</div>
                  <h3 className="h1 post-title mb-3">Missio Theme</h3>
                  <p>Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque id ligula felis.</p>
                  <a href="/#" className="more hover link-leaf mb-8">See Project</a>
                </div>
                <img className="card-img-bottom" src={photoF3} srcSet={`${photoF32x} 2x`} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card bg-soft-pink">
                <div className="card-body p-12 pb-0">
                  <div className="post-category mb-3 text-pink">Mobile Design</div>
                  <h3 className="h1 post-title mb-3">Storage App</h3>
                  <p>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper.</p>
                  <a href="/#" className="more hover link-pink mb-8">See Project</a>
                </div>
                <img className="card-img-bottom" src={photoF4} srcSet={`${photoF42x} 2x`} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer>
      <div className="container pt-14 pt-md-18 pb-7">
        <div className="card bg-soft-primary mb-8">
          <div className="card-body p-12">
            <div className="row gx-md-8 gx-xl-12 gy-10">
              <div className="col-lg-6">
                <img src={emailSvg} className="svg-inject icon-svg icon-svg-sm mb-4" alt="" />
                <h2 className="display-4 mb-3 pe-lg-10">If you like what you see, let's work together.</h2>
                <p className="lead pe-lg-12 mb-0">I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me from this contact form and I will get back to you shortly.</p>
              </div>
              <div className="col-lg-6">
                <form className="contact-form needs-validation" method="post" action="@@webRoot/assets/php/contact.php" noValidate>
                  <div className="messages"></div>
                  <div className="row gx-4">
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input id="form_name" type="text" name="name" className="form-control border-0" placeholder="Jane" required={true} data-error="First Name is required." />
                        <label htmlFor="form_name">Name *</label>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          Please enter your name.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input id="form_email" type="email" name="email" className="form-control border-0" placeholder="jane.doe@example.com" required={true} data-error="Valid email is required." />
                        <label htmlFor="form_email">Email *</label>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          Please provide a valid email address.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <textarea id="form_message" name="message" className="form-control border-0" placeholder="Your message" style={{ height: "150px" }} required></textarea>
                        <label htmlFor="form_message">Message *</label>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          Please enter your messsage.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <input type="submit" className="btn btn-outline-primary rounded-pill btn-send mb-3" value="Send message" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer6Widgets />
      </div>
    </footer>
    <PageProgress />
    <Scripts />
  </div>;
}

export default App;
