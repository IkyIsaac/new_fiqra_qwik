"use client";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import TryService from "./try-service";
// import { useState, useEffect } from "react";

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
      </>
    );
  };

  const _Header = () => {
    return <Header />;
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <_Header />
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
