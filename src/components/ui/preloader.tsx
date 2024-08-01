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
      <div id="preloader">
        <div className="preloader">
          <span></span>
          <span></span>
        </div>
      </div>
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
                    <h4 className="offcanva-title">we are here</h4>
                    <a
                      href="https://www.google.com/maps/@23.506657,90.3443647,7z"
                      target="_blank"
                    >
                      27 Division St, New York, <br />
                      NY 10002, USA
                    </a>
                  </div>
                  <div className="tpoffcanvas__social">
                    <div className="social-icon text-center">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
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
