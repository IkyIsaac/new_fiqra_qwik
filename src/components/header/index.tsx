/* eslint-disable qwik/jsx-img */

import ImgLogoWhite from '~/media/assets/img/logo/logo-white.png?jsx';import { component$ } from '@builder.io/qwik';
 
export default component$(() => {
  return (
    <>
      <header class="tp-header-height">
    <div
      id="header-sticky"
      class="header-bottom__area header-blur header-bottom__transparent header-bottom__plr-4 z-index-3"
    >
      <div class="container-fluid p-0">
        <div class="row g-0 align-items-center">
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
            <div class="header-bottom__logo">
              <a class="white-logo" href="/">
              <ImgLogoWhite alt=""/>
              </a>
              <a class="black-logo" href="/">
                <img src="/assets/img/logo/logo-black.png" alt="" />
              </a>
            </div>
          </div>
          <div class="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
            <div class="header-bottom__main-menu header-bottom__main-menu-4">
              <nav id="mobile-menu">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                        <a href="/career">Careers</a>
                  </li>
                  {/* <li>
                    <a href="#">Features</a>
                    <ul class="submenu">
                      <li>
                        <a href="/career">Career</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <a href="/projects">Portfolio</a>
                    {/* <ul class="submenu">
                      <li>
                        <a href="/project">Project</a>
                      </li>
                      <li>
                        <a href="#">Project Details</a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <a href="/team">Our Team</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
            <div class="header-bottom__right d-flex align-items-center justify-content-end">
              <div class="header-bottom__btn d-flex align-items-center">
                <a
                  class="tp-btn-yellow tp-btn-hover alt-color-white d-none d-md-inline-block" 
                  href="/contact">
                  <span>Get in Touch</span>
                  <b></b>
                </a>
                <a
                  class="header-bottom__bar tp-menu-bar d-lg-none"
                  href="javascript:void(0)"
                >
                  <i class="fal fa-bars"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="flex-grow">
    <div class="tpoffcanvas-area">
      <div class="tpoffcanvas">
        <div class="tpoffcanvas__close-btn">
          <button class="close-btn">
            <i class="fal fa-times"></i>
          </button>
        </div>
        <div class="tpoffcanvas__logo text-center">
          <a href="#">
            <img src="/assets/img/logo/logo-white.png" alt="" />
          </a>
        </div>
        <div class="mobile-menu"></div>
        <div class="tpoffcanvas__instagram text-center">
          <div class="tpoffcanvas__instagram-title">
            <h4>trustees</h4>
          </div>
          <a target="_blank" href="https://mastercardfdn.org/">
            <img src="/assets/img/project/mcard.png" alt="" />
          </a>
          <a target="_blank" href="https://consult.saharaventures.com/">
            <img src="/assets/img/project/sahara.png" alt="" />
          </a>
          <a target="_blank" href="https://dotrust.org/">
            <img src="/assets/img/project/dot.png" alt="" />
          </a>
          <a target="_blank" href="#">
            <img src="/assets/img/project/qct.png" alt="" />
          </a>
        </div>
        <div class="tpoffcanvas__info text-center">
          <h4 class="offcanva-title">We are here</h4>
          <a
            href="https://maps.app.goo.gl/6m7Z6ZANoPKJdNuq5"
            target="_blank"
          >
            Mwanga Tower, 6th floor <br />
            Makumbusho, DSM
          </a>
        </div>
        <div class="tpoffcanvas__social">
          <div class="social-icon text-center">
              <a
                class="icon-color-1" target="_blank"
                href="https://x.com/FiqraTech"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>{" "}
                <span></span>
              </a>{" "}
            <a target="_blank" href="https://www.instagram.com/fiqra.tech/">
              <i class="fab fa-instagram"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/techfiqra">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/vijanatech/">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
});