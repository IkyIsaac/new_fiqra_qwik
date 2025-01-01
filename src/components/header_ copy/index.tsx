
import { component$ } from '@builder.io/qwik';
 
export default component$(() => {
  return (
    <>
   <header>
         <div id="header-sticky" class="header-bottom__area header-bottom__transparent header-sticky-bg-2 inner-header-2 header-bottom__bdr z-index-5">
            <div class="container">
               <div class="row g-0 align-items-center">
                  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                     <div class="header-bottom__logo">
                        <a href="index.html"><img src="assets/img/logo/logo-black.png" alt=""/></a>
                     </div>
                  </div>
                  <div class="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                     <div class="header-bottom__main-menu header-bottom__main-menu-4 header-bottom__main-menu-inner">
                        <nav id="mobile-menu">
                        <ul>
                  <li>
                    <a href="/">Home Project</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                    <ul class="submenu">
                      <li>
                        <a href="/careers">Careers</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/projects">Our Work</a>
                  </li>
                </ul>
                        </nav>
                     </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                     <div class="header-bottom__right d-flex align-items-center justify-content-end">
                        <div class="header-bottom__action header-bottom__action-4 d-none d-xl-block">
                           <a class="d-none d-lg-inline-block header-bottom__action-2 border-none" href="register.html">
                              <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M7 8C8.92882 8 10.4924 6.433 10.4924 4.5C10.4924 2.567 8.92882 1 7 1C5.07118 1 3.50757 2.567 3.50757 4.5C3.50757 6.433 5.07118 8 7 8Z"
                                       stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13 15C13 12.291 10.3108 10.1 7 10.1C3.68917 10.1 1 12.291 1 15" stroke="currentColor"
                                       stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                              <span>Log In</span>
                           </a>
                        </div>
                        <div class="header-bottom__btn d-flex align-items-center">
                           <a class="tp-btn-inner tp-btn-hover alt-color-orange d-none d-md-inline-block" href="service-details.html">
                              <span class="white-text">Get Started</span>
                              <b></b>
                           </a>
                           <a class="header-bottom__bar tp-menu-bar d-lg-none" href="javascript:void(0)"><i class="fal fa-bars"></i></a>
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
          <a href="https://mastercardfdn.org/">
            <img src="/assets/img/project/mcard.png" alt="" />
          </a>
          <a href="https://consult.saharaventures.com/">
            <img src="/assets/img/project/sahara.png" alt="" />
          </a>
          <a href="https://dotrust.org/">
            <img src="/assets/img/project/dot.png" alt="" />
          </a>
          <a href="#">
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
                class="icon-color-1"
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
            <a href="https://www.instagram.com/fiqra.tech/">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/techfiqra">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/company/vijanatech/">
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