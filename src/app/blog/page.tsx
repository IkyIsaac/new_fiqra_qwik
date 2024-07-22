export default function Blog() {
  return (
    <main>
      <div className="breadcrumb__area breadcrumb-height p-relative blue-bg-2">
        <div className="breadcrumb__shape-1">
          <img src="/img/breadcrumb/breadcrumb-shape-1.png" alt="" />
        </div>
        <div className="breadcrumb__shape-2">
          <img src="/img/breadcrumb/breadcrumb-shape-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-7">
              <div className="breadcrumb__content">
                <h3 className="breadcrumb__title tp-char-animation">
                  Read our blogs
                </h3>
                <div
                  className="breadcrumb__list wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".4s"
                >
                  <span className="child-one">
                    <a href="#">Home</a>
                  </span>
                  <span className="dvdr">
                    <i className="fal fa-angle-right"></i>
                  </span>
                  <span>Blog Grid Classic</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-lg-4 text-center text-md-end">
              <div className="breadcrumb__img p-relative text-start z-index">
                <img
                  className="z-index-3"
                  src="/img/breadcrumb/breadcrumb-3.png"
                  alt=""
                />
                <div
                  className="breadcrumb__sub-img wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".4s"
                >
                  <img src="/img/breadcrumb/breadcrumb-sub-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-grid-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog-grid-arrow p-relative">
                <div className="grid-next d-none d-sm-block">
                  <button>
                    <i className="far fa-angle-left"></i>
                    <svg
                      width="36"
                      height="100"
                      viewBox="0 0 36 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99999 14C0 7.5 0.5 3.5 0 0L-0.000484467 99.5C-0.000415802 96.7234 1.00003 88 23 71.5C44.9999 55 32.5 37.1667 24 30.5C19.8333 27.1667 9.48375 19.8289 4.99999 14Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <div className="grid-prev d-none d-sm-block">
                  <button>
                    <i className="far fa-angle-right"></i>
                    <svg
                      width="36"
                      height="100"
                      viewBox="0 0 36 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.3164 14C35.3164 7.5 34.8164 3.5 35.3164 0L35.3169 99.5C35.3168 96.7234 34.3164 88 12.3164 71.5C-9.68354 55 2.81642 37.1667 11.3164 30.5C15.4831 27.1667 25.8327 19.8289 30.3164 14Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <div className="swiper-container blog-grid-slider-active">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div
                        className="blog-grid-slider blog-grid-slider-bg d-flex align-items-center blog-grid-slider-height"
                        data-background="/img/blog/inner-blog-1.png"
                      >
                        <div className="blog-grid-slider-wrapper">
                          <div className="blog-grid-slider-meta">
                            <span className="child-one">Resources</span>
                            <span className="child-two">October 20, 2023</span>
                          </div>
                          <div className="blog-grid-slider-title-box">
                            <h4 className="blog-grid-slider-title">
                              <a href="blog-details.html">
                                5 Companies doing Brand <br /> Marketing Right
                              </a>
                            </h4>
                            <p>
                              From publishing content and hoping to acquire
                              leads to <br />
                              gaining audience insights and making personalized{" "}
                              <br />
                              content, content marketing.
                            </p>
                          </div>
                          <div className="tp-blog-author-info-box blog-grid-avata-box d-flex align-items-center">
                            <div className="tp-blog-avata">
                              <img src="/img/blog/blog-avata-3.png" alt="" />
                            </div>
                            <div className="tp-blog-author-info">
                              <h5>Hilary Ouse</h5>
                              <span>Founder & CEO Dulalix</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div
                        className="blog-grid-slider blog-grid-slider-bg d-flex align-items-center blog-grid-slider-height"
                        data-background="/img/blog/inner-blog-2.png"
                      >
                        <div className="blog-grid-slider-wrapper">
                          <div className="blog-grid-slider-meta">
                            <span className="child-one">Resources</span>
                            <span className="child-two">October 20, 2023</span>
                          </div>
                          <div className="blog-grid-slider-title-box">
                            <h4 className="blog-grid-slider-title">
                              <a href="blog-details.html">
                                5 Companies doing Brand <br /> Marketing Right
                              </a>
                            </h4>
                            <p>
                              From publishing content and hoping to acquire
                              leads to <br />
                              gaining audience insights and making personalized{" "}
                              <br />
                              content, content marketing.
                            </p>
                          </div>
                          <div className="tp-blog-author-info-box blog-grid-avata-box d-flex align-items-center">
                            <div className="tp-blog-avata">
                              <img src="/img/blog/blog-avata-2.png" alt="" />
                            </div>
                            <div className="tp-blog-author-info">
                              <h5>Hilary Ouse</h5>
                              <span>Founder & CEO Dulalix</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div
                        className="blog-grid-slider blog-grid-slider-bg d-flex align-items-center blog-grid-slider-height"
                        data-background="/img/blog/inner-blog-3.png"
                      >
                        <div className="blog-grid-slider-wrapper">
                          <div className="blog-grid-slider-meta">
                            <span className="child-one">Resources</span>
                            <span className="child-two">October 20, 2023</span>
                          </div>
                          <div className="blog-grid-slider-title-box">
                            <h4 className="blog-grid-slider-title">
                              <a href="#">
                                5 Companies doing Brand <br /> Marketing Right
                              </a>
                            </h4>
                            <p>
                              From publishing content and hoping to acquire
                              leads to <br />
                              gaining audience insights and making personalized{" "}
                              <br />
                              content, content marketing.
                            </p>
                          </div>
                          <div className="tp-blog-author-info-box blog-grid-avata-box d-flex align-items-center">
                            <div className="tp-blog-avata">
                              <img src="/img/blog/blog-avata-1.png" alt="" />
                            </div>
                            <div className="tp-blog-author-info">
                              <h5>Hilary Ouse</h5>
                              <span>Founder & CEO Dulalix</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio blog-grid-inner mb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="tp-about__section-box text-center mb-40">
                <h4 className="inner-section-subtitle">OVER 150K+ CLIENT</h4>
                <h3 className="tp-section-title">Accomplish more, Together</h3>
                <p>
                  Softuch blog is your knowledge center for everything remote.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="portfolio-filter masonary-menu text-center mb-35">
                <button data-filter="*" className="active">
                  <span>All</span>
                </button>
                <button data-filter=".cat1">
                  <span>Business</span>
                </button>
                <button data-filter=".cat2">
                  <span>Marketing</span>
                </button>
                <button data-filter=".cat3">
                  <span>Designing</span>
                </button>
                <button data-filter=".cat4">
                  <span>Development</span>
                </button>
                <button data-filter=".cat5">
                  <span>Resources</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row grid blog-grid-inner">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-30 grid-item cat1 cat4 cat3 cat5">
              <div className="tp-blog-item">
                <div className="tp-blog-thumb fix">
                  <a href="blog-details.html">
                    <img src="/img/blog/blog-grid-1.jpg" alt="" />
                  </a>
                </div>
                <div className="tp-blog-content">
                  <div className="tp-blog-meta d-flex align-items-center">
                    <div className="tp-blog-category category-color-1">
                      <span>Marketing</span>
                    </div>
                    <div className="tp-blog-date">
                      <span>April 12, 2023</span>
                    </div>
                  </div>
                  <div className="tp-blog-title-box">
                    <a className="tp-blog-title-sm" href="blog-details.html">
                      2023 Professional Year In <br /> Review
                    </a>
                  </div>
                  <div className="tp-blog-author-info-box d-flex align-items-center">
                    <div className="tp-blog-avata">
                      <img src="/img/avata/avata-1.png" alt="" />
                    </div>
                    <div className="tp-blog-author-info">
                      <h5>Hilary Ouse</h5>
                      <span>Founder & CEO Dulalix</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-30 grid-item cat4 cat3 cat2 cat1">
              <div className="tp-blog-item">
                <div className="tp-blog-thumb fix">
                  <a href="blog-details.html">
                    <img src="/img/blog/blog-grid-2.jpg" alt="" />
                  </a>
                </div>
                <div className="tp-blog-content">
                  <div className="tp-blog-meta d-flex align-items-center">
                    <div className="tp-blog-category category-color-1">
                      <span>Resources</span>
                    </div>
                    <div className="tp-blog-date">
                      <span>July 12, 2023</span>
                    </div>
                  </div>
                  <div className="tp-blog-title-box">
                    <a className="tp-blog-title-sm" href="blog-details.html">
                      Leveraging Feedback on <br /> Insights best.
                    </a>
                  </div>
                  <div className="tp-blog-author-info-box d-flex align-items-center">
                    <div className="tp-blog-avata">
                      <img src="/img/avata/avata-2.png" alt="" />
                    </div>
                    <div className="tp-blog-author-info">
                      <h5>Rudra Ghosh</h5>
                      <span>Founder & CEO Dulalix</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-30 grid-item cat3 cat4 cat5">
              <div className="tp-blog-item">
                <div className="tp-blog-thumb fix">
                  <a href="blog-details.html">
                    <img src="/img/blog/blog-grid-3.jpg" alt="" />
                  </a>
                </div>
                <div className="tp-blog-content">
                  <div className="tp-blog-meta d-flex align-items-center">
                    <div className="tp-blog-category category-color-1">
                      <span>Crm Software</span>
                    </div>
                    <div className="tp-blog-date">
                      <span>28 April, 2023</span>
                    </div>
                  </div>
                  <div className="tp-blog-title-box">
                    <a className="tp-blog-title-sm" href="blog-details.html">
                      Typing Tutorials For Kids <br />
                      And Beginners
                    </a>
                  </div>
                  <div className="tp-blog-author-info-box d-flex align-items-center">
                    <div className="tp-blog-avata">
                      <img src="/img/avata/avata-3.png" alt="" />
                    </div>
                    <div className="tp-blog-author-info">
                      <h5>Geraldine</h5>
                      <span>Founder & CEO Dulalix</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-30 grid-item cat4 cat2 cat3 cat1">
              <div className="tp-blog-item">
                <div className="tp-blog-thumb fix">
                  <a href="blog-details.html">
                    <img src="/img/blog/blog-grid-4.jpg" alt="" />
                  </a>
                </div>
                <div className="tp-blog-content">
                  <div className="tp-blog-meta d-flex align-items-center">
                    <div className="tp-blog-category category-color-1">
                      <span>Business</span>
                    </div>
                    <div className="tp-blog-date">
                      <span>28 April, 2023</span>
                    </div>
                  </div>
                  <div className="tp-blog-title-box">
                    <a className="tp-blog-title-sm" href="blog-details.html">
                      Project Management at <br />
                      Your fingertips.
                    </a>
                  </div>
                  <div className="tp-blog-author-info-box d-flex align-items-center">
                    <div className="tp-blog-avata">
                      <img src="/img/avata/avata-4.png" alt="" />
                    </div>
                    <div className="tp-blog-author-info">
                      <h5>Helen M.</h5>
                      <span>Founder & CEO Dulalix</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-30 grid-item cat1 cat2 cat3 cat5">
              <div className="tp-blog-item">
                <div className="tp-blog-thumb fix">
                  <a href="blog-details.html">
                    <img src="/img/blog/blog-grid-5.jpg" alt="" />
                  </a>
                </div>
                <div className="tp-blog-content">
                  <div className="tp-blog-meta d-flex align-items-center">
                    <div className="tp-blog-category category-color-1">
                      <span>Development</span>
                    </div>
                    <div className="tp-blog-date">
                      <span>28 April, 2023</span>
                    </div>
                  </div>
                  <div className="tp-blog-title-box">
                    <a className="tp-blog-title-sm" href="blog-details.html">
                      Designing the Kids Space <br />
                      Universe
                    </a>
                  </div>
                  <div className="tp-blog-author-info-box d-flex align-items-center">
                    <div className="tp-blog-avata">
                      <img src="/img/avata/avata-5.png" alt="" />
                    </div>
                    <div className="tp-blog-author-info">
                      <h5>R. Jones</h5>
                      <span>Founder & CEO Dulalix</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-30 grid-item cat4 cat1 cat5 cat2">
              <div className="tp-blog-item">
                <div className="tp-blog-thumb fix">
                  <a href="blog-details.html">
                    <img src="/img/blog/blog-grid-6.jpg" alt="" />
                  </a>
                </div>
                <div className="tp-blog-content">
                  <div className="tp-blog-meta d-flex align-items-center">
                    <div className="tp-blog-category category-color-1">
                      <span>Designing</span>
                    </div>
                    <div className="tp-blog-date">
                      <span>28 April, 2023</span>
                    </div>
                  </div>
                  <div className="tp-blog-title-box">
                    <a className="tp-blog-title-sm" href="blog-details.html">
                      How Chatbots Can Help You <br /> Drive More Sales
                    </a>
                  </div>
                  <div className="tp-blog-author-info-box d-flex align-items-center">
                    <div className="tp-blog-avata">
                      <img src="/img/avata/avata-6.png" alt="" />
                    </div>
                    <div className="tp-blog-author-info">
                      <h5>Frank P. Miller</h5>
                      <span>Founder & CEO Dulalix</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-cta-area p-relative">
        <div className="tp-cta-grey-bg grey-bg-2"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-cta-bg" data-background="/img/cta/cta-bg.jpg">
                <div className="tp-cta-content tp-inner-font text-center">
                  <h3 className="tp-section-title text-white">
                    Try our service now!
                  </h3>
                  <p>
                    Eyerything you need to accept cord payments and grow your
                    business <br />
                    anywhere on the planet.
                  </p>
                  <a
                    className="tp-btn-inner white-bg text-black"
                    href="service-details.html"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
