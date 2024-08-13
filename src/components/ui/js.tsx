import Script from "next/script";

export default function Js() {
  return (
    <>
      <Script src="/js/jquery.js" strategy="beforeInteractive"></Script>
      <Script src="/js/waypoints.js" strategy="beforeInteractive"></Script>
      <Script src="/js/bootstrap.bundle.min.js" strategy="lazyOnload"></Script>
      <Script src="/js/slick.min.js" strategy="lazyOnload"></Script>
      <Script src="/js/magnific-popup.js" strategy="lazyOnload"></Script>
      <Script src="/js/counterup.js" strategy="lazyOnload"></Script>
      <Script src="/js/wow.js" strategy="lazyOnload"></Script>
      <Script src="/js/nice-select.js" strategy="lazyOnload"></Script>
      <Script src="/js/swiper-bundle.js" strategy="lazyOnload"></Script>
      <Script src="/js/meanmenu.js" strategy="lazyOnload"></Script>
      <Script src="/js/tilt.jquery.js" strategy="lazyOnload"></Script>
      <Script src="/js/isotope-pkgd.js" strategy="lazyOnload"></Script>
      <Script src="/js/purecounter.js" strategy="lazyOnload"></Script>
      <Script src="/js/imagesloaded-pkgd.js" strategy="lazyOnload"></Script>
      <Script src="/js/ajax-form.js" strategy="lazyOnload"></Script>
      <Script src="/js/gsap.min.js" strategy="lazyOnload"></Script>
      <Script src="/js/split-text.min.js" strategy="lazyOnload"></Script>
      <Script src="/js/ScrollTrigger.min.js" strategy="lazyOnload"></Script>
      <Script src="/js/ScrollSmoother.min.js" strategy="lazyOnload"></Script>
      <Script src="/js/main.js" strategy="lazyOnload"></Script>
    </>
  );
}
// url("assets/img/service/sv-bg.jpg")