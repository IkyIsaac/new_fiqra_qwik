"use client";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import Script from "next/script";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const Loader = () => {
    return (
      <>
        <div id="preloader">
          <div className="preloader">
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="mouseCursor cursor-outer"></div>
        <div className="mouseCursor cursor-inner">
          <a href="#">
            <i className="fas fa-play"></i>
          </a>
        </div>
      </>
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
              <div className="tpoffcanvas-area">
                <div className="tpoffcanvas">
                  <div className="tpoffcanvas__close-btn">
                    <button className="close-btn">
                      <i className="fal fa-times"></i>
                    </button>
                  </div>
                  <div className="tpoffcanvas__logo text-center">
                    <a href="index.html">
                      <img src="/img/logo/logo-white.png" alt="" />
                    </a>
                  </div>
                  <div className="mobile-menu"></div>
                  <div className="tpoffcanvas__instagram text-center">
                    <div className="tpoffcanvas__instagram-title">
                      <h4>instagram</h4>
                    </div>
                    <a href="#">
                      <img src="/img/project/project-inner-4.jpg" alt="" />
                    </a>
                    <a href="#">
                      <img src="/img/project/project-inner-5.jpg" alt="" />
                    </a>
                    <a href="#">
                      <img src="/img/project/project-inner-6.jpg" alt="" />
                    </a>
                    <a href="#">
                      <img src="/img/project/project-inner-7.jpg" alt="" />
                    </a>
                  </div>
                  <div className="tpoffcanvas__info text-center">
                    <h4 className="offcanva-title">We are here</h4>
                    <a
                      href="https://maps.app.goo.gl/6m7Z6ZANoPKJdNuq5"
                      target="_blank"
                    >
                      6th floor Mwanga Tower <br />
                      Makumbusho, DSM
                    </a>
                  </div>
                  <div className="tpoffcanvas__social">
                    <div className="social-icon text-center">
                      <a href="#">
                        <a className="icon-color-1" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-twitter-x"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                          </svg>{" "}
                          <span></span>
                        </a>{" "}
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="body-overlay"></div>
              <div id="smooth-wrapper">
                <div id="smooth-content">{children}</div>
              </div>
            </div>
            {/* <Footer /> */}
          </main>
          <Script src="/js/jquery.js" />
          <Script src="/js/waypoints.js" />
          <Script src="/js/bootstrap.bundle.min.js" />
          <Script src="/js/slick.min.js" />
          <Script src="/js/magnific-popup.js" />
          <Script src="/js/counterup.js" />
          <Script src="/js/wow.js" />
          <Script src="/js/nice-select.js" />
          <Script src="/js/swiper-bundle.js" />
          <Script src="/js/meanmenu.js" />
          <Script src="/js/tilt.jquery.js" />
          <Script src="/js/isotope-pkgd.js" />
          <Script src="/js/purecounter.js" />
          <Script src="/js/imagesloaded-pkgd.js" />
          <Script src="/js/ajax-form.js" />
          <Script src="/js/gsap.min.js" />
          <Script src="/js/split-text.min.js" />
          <Script src="/js/ScrollTrigger.min.js" />
          <Script src="/js/ScrollSmoother.min.js" />
          <Script src="/js/main.js" />
          <Script src="/js/slick.min.js" />
        </>
      )}
    </>
  );
}
