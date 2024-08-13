import Link from "next/link";

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
                  <Link className="white-logo" href="index.html">
                    <img src="/img/logo/logo-white.png" alt="" />
                  </Link>
                  <Link className="black-logo" href="index.html">
                    <img src="/img/logo/logo-black.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                <div className="header-bottom__main-menu header-bottom__main-menu-4">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="#about_us">About</Link>
                      </li>
                      <li>
                        <Link href="#">Services</Link>
                      </li>
                      <li>
                        <Link href="#">Features</Link>
                        <ul className="submenu">
                          <li>
                            <Link href="#">Career</Link>
                          </li>
                          <li>
                            <Link href="#">Blog</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="#">Portfolio</Link>
                        <ul className="submenu">
                          <li>
                            <Link href="#">Project</Link>
                          </li>
                          <li>
                            <Link href="#">Project Details</Link>
                          </li>
                        </ul>
                      </li>

                      {/* <li>
                        <Link href="blog-details.html">Blog</Link>
                        <ul className="submenu">
                          <li>
                            <Link href="blog.html">Blog</Link>
                          </li>
                          <li>
                            <Link href="blog-list.html">Blog List</Link>
                          </li>
                          <li>
                            <Link href="blog-details.html">Blog Details</Link>
                          </li>
                          <li>
                            <Link href="blog-details-2.html">Blog Details 02</Link>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li>
                        <Link href="#">Contact</Link>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                  <div className="header-bottom__btn d-flex align-items-center">
                    <Link
                      className="tp-btn-yellow tp-btn-hover alt-color-white d-none d-md-inline-block"
                      href="#about_us"
                    >
                      <span>Get in Touch</span>
                      <b></b>
                    </Link>
                    <Link
                      className="header-bottom__bar tp-menu-bar d-lg-none"
                      href="javascript:void(0)"
                    >
                      <i className="fal fa-bars"></i>
                    </Link>
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
