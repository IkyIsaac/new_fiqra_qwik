import { component$ } from '@builder.io/qwik';
 
export default component$(() => {
  return (
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
            <a href="#">
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
            </a>
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
    <div class="body-overlay"></div>
    <div id="smooth-wrapper">
      <div id="smooth-content"></div>
    </div>
  </div>
  )
});