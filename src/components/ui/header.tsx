export default function Header() {
  return (
    <>
      <header className="tp-header-height">
        <div
          id="header-sticky"
          className="header-bottom__area header-blur header-bottom__transparent header-bottom__plr-4 z-index-3"
        >
          <div className="container-fluid p-0">
            <div className="row g-0 align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="header-bottom__logo">
                  <a className="white-logo" href="index.html">
                    <img src="/img/logo/logo-white.png" alt="" />
                  </a>
                  <a className="black-logo" href="index.html">
                    <img src="/img/logo/logo-black.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                <div className="header-bottom__main-menu header-bottom__main-menu-4">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                        <ul className="submenu">
                          <li>
                            <a href="index.html">Data analytics</a>
                          </li>
                          <li>
                            <a href="index-2.html">Payment Gateway</a>
                          </li>
                          <li>
                            <a href="index-3.html">CRM Software</a>
                          </li>
                          <li>
                            <a href="index-4.html">Security Software</a>
                          </li>
                          <li>
                            <a href="index-5.html">Saas</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Page</a>
                        <ul className="submenu">
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="service.html">Service</a>
                          </li>
                          <li>
                            <a href="service-details.html">Service Details</a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="career.html">Career</a>
                          </li>
                          <li>
                            <a href="career-details.html">Career Details</a>
                          </li>
                          <li>
                            <a href="integrations.html">Integrations</a>
                          </li>
                          <li>
                            <a href="register.html">Register</a>
                          </li>
                          <li>
                            <a href="sign-in.html">Signin</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="404.html">404</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="project-details.html">Portfoilo</a>
                        <ul className="submenu">
                          <li>
                            <a href="project.html">Project</a>
                          </li>
                          <li>
                            <a href="project-details.html">Project Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="price.html">Pricing</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog</a>
                        <ul className="submenu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-list.html">Blog List</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="blog-details-2.html">Blog Details 02</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                  <div className="header-bottom__action header-bottom__action-4">
                    <a
                      className="d-none d-lg-inline-block header-bottom__action-2 border-none"
                      href="register.html"
                    >
                      <span>Log In</span>
                    </a>
                  </div>
                  <div className="header-bottom__btn d-flex align-items-center">
                    <a
                      className="tp-btn-yellow tp-btn-hover alt-color-white d-none d-md-inline-block"
                      href="contact.html"
                    >
                      <span>Get in Touch</span>
                      <b></b>
                    </a>
                    <a
                      className="header-bottom__bar tp-menu-bar d-lg-none"
                      href="javascript:void(0)"
                    >
                      <i className="fal fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
