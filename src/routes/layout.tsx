import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import  Header  from "../components/header"


export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};
export default component$(() => {
  return (
<>
        {/* preloader */}
        <div id="preloader">
          <div class="preloader">
            <span></span>
            <span></span>
          </div>
        </div>

        {/* back-to-top button */}
        <button class="scroll-top scroll-to-target" data-target="html">
          <i class="far fa-angle-double-up"></i>
        </button>
        <Header/>
        {/* Main content wrapper */}
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {/* Add your content here */}
            <Slot />
          </div>
        </div>

        {/* Scripts for Bootstrap and other dependencies */}
        <script src="/assets/js/jquery.js" defer></script>
        <script src="/assets/js/waypoints.js" defer></script>
        <script src="/assets/js/bootstrap.bundle.min.js" defer></script>
        <script src="/assets/js/slick.min.js" defer></script>
        <script src="/assets/js/magnific-popup.js" defer></script>
        <script src="/assets/js/counterup.js" defer></script>
        <script src="/assets/js/wow.js" defer></script>
        <script src="/assets/js/nice-select.js" defer></script>
        <script src="/assets/js/swiper-bundle.js" defer></script>
        <script src="/assets/js/meanmenu.js" defer></script>
        <script src="/assets/js/tilt.jquery.js" defer></script>
        <script src="/assets/js/isotope-pkgd.js" defer></script>
        <script src="/assets/js/purecounter.js" defer></script>
        <script src="/assets/js/imagesloaded-pkgd.js" defer></script>
        <script src="/assets/js/ajax-form.js" defer></script>
        <script src="/assets/js/gsap.min.js" defer></script>
        <script src="/assets/js/split-text.min.js" defer></script>
        <script src="/assets/js/ScrollTrigger.min.js" defer></script>
        <script src="/assets/js/ScrollSmoother.min.js" defer></script>
        <script src="/assets/js/parallax-scroll.js" defer></script>
        <script src="/assets/js/main.js" defer></script>
</>
  );
});

