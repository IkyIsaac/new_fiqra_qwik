import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <main>
        <div className="about-banner-area p-relative">
          <div className="about-shape-1 z-index-3">
            <img src="/img/breadcrumb/breadcrumb-shape-1.png" alt="" />
          </div>
          <div className="about-shape-2 z-index-3">
            <img src="/img/breadcrumb/breadcrumb-shape-2.png" alt="" />
          </div>
          <div className="about-banner p-relative z-index fix">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="about-banner-content z-index-5">
                    <h4
                      className="about-banner-title"
                      data-parallax='{"y": 1000, "smoothness": 10}'
                    >
                      <span>About</span> <br />
                      <span>Fiqra</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-img-area mb-100 z-index-3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="about-img about-img-height p-relative"
                  data-background="/img/breadcrumb/breadcrumb-2.jpg"
                >
                  <div className="about-img-content">
                    <h4
                      className="about-img-title"
                      data-parallax='{"y": 1000, "smoothness": 10}'
                    >
                      <span>About</span> <br />
                      <span>Fiqra</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tp-breadcrumb-header-area-end */}

        {/* {/*ab-brand-area-start */}
        <div className="ab-brand-area">
          <div className="container">
            <div className="ab-brand-border-bottom pb-90">
              <div className="row">
                <div className="col-12">
                  <div className="ab-brand-section-box text-center mb-50">
                    <h4 className="ab-brand-title">
                      Trusted by Thousands Business
                    </h4>
                    <p>More than 100,000+ teams are using Fiqra</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-center">
                    <div
                      className="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".2s"
                    >
                      <div className="ab-brand-item mb-25">
                        <img src="/img/brand/brand-inner-1.png" alt="" />
                      </div>
                    </div>
                    <div
                      className="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".4s"
                    >
                      <div className="ab-brand-item mb-25">
                        <img src="/img/brand/brand-inner-2.png" alt="" />
                      </div>
                    </div>
                    <div
                      className="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".6s"
                    >
                      <div className="ab-brand-item mb-25">
                        <img src="/img/brand/brand-inner-3.png" alt="" />
                      </div>
                    </div>
                    <div
                      className="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".8s"
                    >
                      <div className="ab-brand-item mb-25">
                        <img src="/img/brand/brand-inner-4.png" alt="" />
                      </div>
                    </div>
                    <div
                      className="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".9s"
                    >
                      <div className="ab-brand-item mb-25">
                        <img src="/img/brand/brand-inner-5.png" alt="" />
                      </div>
                    </div>
                    <div
                      className="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay="1s"
                    >
                      <div className="ab-brand-item mb-25">
                        <img src="/img/brand/brand-inner-6.png" alt="" />
                      </div>
                    </div>
                    <div
                      className="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay="1.1s"
                    >
                      <div className="ab-brand-item mb-25">
                        <img src="/img/brand/brand-inner-7.png" alt="" />
                      </div>
                    </div>
                    <div
                      className="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay="1.2s"
                    >
                      <div className="ab-brand-item mb-25">
                        <img src="/img/brand/brand-inner-8.png" alt="" />
                      </div>
                    </div>
                    <div
                      className="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay="1.3s"
                    >
                      <div className="ab-brand-item mb-25">
                        <img src="/img/brand/brand-inner-9.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*ab-brand-area-end */}

        {/*ab-company-area-start */}
        <div className="ab-company-area pt-105 pb-100">
          <div className="container">
            <div className="row ab-company-section-space">
              <div className="col-xl-6">
                <div className="ab-company-section-box">
                  <h4 className="inner-section-subtitle">ABOUT THE COMPANY</h4>
                  <h3 className="tp-section-title">
                    Softuch is Made <br />
                    For the Creator.
                  </h3>
                </div>
              </div>
              <div
                className="col-xl-6 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="ab-company-right">
                  <div className="ab-company-section-text">
                    <p className="pb-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Rutrum arcu sollicitudin viverra sit elit leo in. Vitae eu
                      tellus mattis quis. Eu, tempus donec nam mauris egestas.
                      Id aliquet ultricies ligula tellus arcu dolor. Massa arcu
                      pulvinar in mattis
                    </p>
                    <p className="pb-10">
                      Feugiat purus congue risus, blandit a sed. In aenean quam
                      aenean purus dictum pellentesque consequat.!
                    </p>
                    <p>
                      <span>
                        Our clean and simple APIs and transparent SaaS model
                        will give you complete peace of mind.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-4">
                <div className="ab-company-video">
                  <Link
                    className="popup-video"
                    href="https://www.youtube.com/watch?v=EW4ZYb3mCZk"
                  >
                    <i className="fas fa-play"></i>
                  </Link>
                  <span>Watch Demo</span>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="row">
                  <div className="col-md-4 col-sm-4 mb-40">
                    <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                      <div className="ab-company-fun-fact">
                        <span>USED BY</span>
                        <h4>
                          11,000<em>+</em>
                        </h4>
                        <p>Creators</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 mb-40">
                    <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                      <div className="ab-company-fun-fact">
                        <span>VALUE</span>
                        <h4>
                          46<em>m</em>
                        </h4>
                        <p>Revenue per Year</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 mb-40">
                    <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                      <div className="ab-company-fun-fact">
                        <span>IN</span>
                        <h4>
                          150<em>+</em>
                        </h4>
                        <p>Countries using</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*ab-company-area-end */}

        {/* tp-about-area-start */}
        <div className="tp-about__area tp-about__pt-pb pb-160">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".2s"
              >
                <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
                  <div className="tp-about__bg-shape">
                    <img src="/img/about/about-bg-shape.png" alt="" />
                  </div>
                  <div className="tp-about__main-img z-index">
                    <img src="/img/about/about-2.jpg" alt="" />
                  </div>
                  <div className="tp-about__sub-img-1 d-none d-sm-block z-index-3">
                    <img src="/img/about/about-1.jpg" alt="" />
                  </div>
                  <div className="tp-about__sub-img-2 d-none d-sm-block">
                    <img src="/img/about/about-3.jpg" alt="" />
                  </div>
                  <div className="tp-about__sub-img-3 d-none d-sm-block z-index-3">
                    <img src="/img/about/about-5.png" alt="" />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".6s"
              >
                <div className="tp-about__right">
                  <div className="tp-about__section-box">
                    <h4 className="tp-section-subtitle">OVER 150K+ CLIENT</h4>
                    <h3 className="tp-section-title mb-15">
                      We Offer Real Time Data Solutions
                    </h3>
                    <p>
                      Excepteur sint occaecat cupidatat officia non proident{" "}
                      <br />
                      sunt in culpa qui deserunt.!
                    </p>
                  </div>
                  <div className="tp-about__list">
                    <ul>
                      <li>
                        <i className="fal fa-check"></i>Various analysis
                        options.
                      </li>
                      <li>
                        <i className="fal fa-check"></i>Page Load (time, size,
                        number of requests).
                      </li>
                      <li>
                        <i className="fal fa-check"></i>Big data analysis.
                      </li>
                    </ul>
                  </div>
                  <div className="tp-about__btn">
                    <Link
                      className="tp-btn tp-btn-inner tp-btn-hover alt-color-black"
                      href="about"
                    >
                      <span>About Us</span>
                      <b></b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tp-about-area-end */}

        {/* tp-team-area-start */}
        <div className="tp-team-area grey-bg pt-120 pb-95">
          <div className="container">
            <div className="tp-team-section-wrapper tp-team-inner-section mb-70">
              <div className="row align-items-end">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-team-section-box text-center text-sm-start">
                    <h5 className="inner-section-subtitle pb-10">THE TEAM</h5>
                    <h3 className="tp-section-title mb-0 text-black">
                      Our Leaders
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-team-top-content text-center text-md-end">
                    <Link
                      className="tp-btn-inner tp-btn-hover alt-color-orange"
                      href="team"
                    >
                      <span>View All</span>
                      <b></b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-1 team-inner-border-right">
                <div className="tp-team-item text-center tp-team-inner-title-color z-index">
                  <div className="tp-team-img">
                    <img src="/img/team/team-4-1.png" alt="" />
                  </div>
                  <div className="tp-team-content">
                    <h4 className="tp-team-title-sm">
                      <Link href="team-details">Alexa Montes</Link>
                    </h4>
                    <span>Partner & COO</span>
                  </div>
                  <div className="tp-team-social">
                    <Link className="icon-color-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span></span>
                    </Link>
                    <Link className="icon-color-2" href="#">
                      <i className="fab fa-instagram"></i>
                      <span></span>
                    </Link>
                    <Link className="icon-color-3" href="#">
                      <i className="fab fa-twitter"></i>
                      <span></span>
                    </Link>
                    <Link className="icon-color-4" href="#">
                      <i className="fab fa-linkedin-in"></i>
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-2 team-inner-border-right">
                <div className="tp-team-item tp-team-inner-title-color text-center z-index">
                  <div className="tp-team-img">
                    <img src="/img/team/team-4-2.png" alt="" />
                  </div>
                  <div className="tp-team-content">
                    <h4 className="tp-team-title-sm">
                      <Link href="team-details">Ravi Ganatra</Link>
                    </h4>
                    <span>Designer</span>
                  </div>
                  <div className="tp-team-social">
                    <Link className="icon-color-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span></span>
                    </Link>
                    <Link className="icon-color-2" href="#">
                      <i className="fab fa-instagram"></i>
                      <span></span>
                    </Link>
                    <Link className="icon-color-3" href="#">
                      <i className="fab fa-twitter"></i>
                      <span></span>
                    </Link>
                    <Link className="icon-color-4" href="#">
                      <i className="fab fa-linkedin-in"></i>
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-3 team-inner-border-right">
                <div className="tp-team-item tp-team-inner-title-color text-center z-index">
                  <div className="tp-team-img">
                    <img src="/img/team/team-4-3.png" alt="" />
                  </div>
                  <div className="tp-team-content">
                    <h4 className="tp-team-title-sm">
                      <Link href="team-details">Imdat Cimsit</Link>
                    </h4>
                    <span>CEO & Founder</span>
                  </div>
                  <div className="tp-team-social">
                    <Link className="icon-color-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span></span>
                    </Link>
                    <Link className="icon-color-2" href="#">
                      <i className="fab fa-instagram"></i>
                      <span></span>
                    </Link>
                    <Link className="icon-color-3" href="#">
                      <i className="fab fa-twitter"></i>
                      <span></span>
                    </Link>
                    <Link className="icon-color-4" href="#">
                      <i className="fab fa-linkedin-in"></i>
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-4 team-inner-border-right">
                <div className="tp-team-item tp-team-inner-title-color text-center z-index">
                  <div className="tp-team-img">
                    <img src="/img/team/team-4-4.png" alt="" />
                  </div>
                  <div className="tp-team-content">
                    <h4 className="tp-team-title-sm">
                      <Link href="team-details">Imdat Cimsit</Link>
                    </h4>
                    <span>PHP Developer</span>
                  </div>
                  <div className="tp-team-social">
                    <Link className="icon-color-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span></span>
                    </Link>
                    <Link className="icon-color-2" href="#">
                      <i className="fab fa-instagram"></i>
                      <span></span>
                    </Link>
                    <Link className="icon-color-3" href="#">
                      <i className="fab fa-twitter"></i>
                      <span></span>
                    </Link>
                    <Link className="icon-color-4" href="#">
                      <i className="fab fa-linkedin-in"></i>
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tp-team-area-end */}

        {/* tp-journey-area-start */}
        <div className="journey-area p-relative fix">
          <div className="journey-grey-bg grey-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="journey-section-box">
                  <h5 className="inner-section-subtitle pb-10">TIMELINE</h5>
                  <h3 className="ab-brand-title pb-0 mb-0">
                    Journey Was Started
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid g-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <div className="journey-slider-wrapper">
                  <div className="swiper-container journey-slider-active">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide about-testimonies">
                        <div className="journey-slider-item p-relative">
                          <div className="journey-stroke-text">
                            <h2>01</h2>
                          </div>
                          <div className="journey-slider-meta">
                            <span>OCT 2019</span>
                          </div>
                          <div className="journey-slider-content">
                            <h4 className="journey-slider-title">
                              Our Vision <br />
                              Of a better Way
                            </h4>
                            <p>
                              We envision sales teams having the tools <br />
                              and talent they need to make remote <br /> work.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide about-testimonies">
                        <div className="journey-slider-item p-relative">
                          <div className="journey-stroke-text">
                            <h2>02</h2>
                          </div>
                          <div className="journey-slider-meta">
                            <span>OCT 2020</span>
                          </div>
                          <div className="journey-slider-content">
                            <h4 className="journey-slider-title">
                              Official <br />
                              Beta Launch
                            </h4>
                            <p>
                              We envision sales teams having the tools <br />
                              and talent they need to make remote <br /> work.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide about-testimonies">
                        <div className="journey-slider-item p-relative">
                          <div className="journey-stroke-text">
                            <h2>03</h2>
                          </div>
                          <div className="journey-slider-meta">
                            <span>OCT 2021</span>
                          </div>
                          <div className="journey-slider-content">
                            <h4 className="journey-slider-title">
                              Rolling <br /> Up Sleeves
                            </h4>
                            <p>
                              We envision sales teams having the tools <br />
                              and talent they need to make remote <br /> work.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide about-testimonies">
                        <div className="journey-slider-item p-relative">
                          <div className="journey-stroke-text">
                            <h2>04</h2>
                          </div>
                          <div className="journey-slider-meta">
                            <span>OCT 2022</span>
                          </div>
                          <div className="journey-slider-content">
                            <h4 className="journey-slider-title">
                              Design <br />
                              Rewards In NYC
                            </h4>
                            <p>
                              We envision sales teams having the tools <br />
                              and talent they need to make remote <br /> work.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide about-testimonies">
                        <div className="journey-slider-item p-relative">
                          <div className="journey-stroke-text">
                            <h2>05</h2>
                          </div>
                          <div className="journey-slider-meta">
                            <span>Present</span>
                          </div>
                          <div className="journey-slider-content">
                            <h4 className="journey-slider-title">
                              Featured On <br />
                              Envato
                            </h4>
                            <p>
                              We envision sales teams having the tools <br />
                              and talent they need to make remote <br /> work.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide about-testimonies">
                        <div className="journey-slider-item p-relative">
                          <div className="journey-stroke-text">
                            <h2>06</h2>
                          </div>
                          <div className="journey-slider-meta">
                            <span>OCT 2020</span>
                          </div>
                          <div className="journey-slider-content">
                            <h4 className="journey-slider-title">
                              Official <br />
                              Beta Launch
                            </h4>
                            <p>
                              We envision sales teams having the tools <br />
                              and talent they need to make remote <br /> work.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tp-scrollbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tp-journey-area-end */}

        {/* tp-job-area-start */}
        <div className="job-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="job-section-box text-center mb-40">
                  <h4 className="inner-section-subtitle">Current Positions</h4>
                  <h3 className="tp-section-title">
                    Join our Growing Team <br />
                    of Doers.
                  </h3>
                </div>
              </div>
            </div>
            <div className="job-post-box">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-4">
                  <div className="job-post-info d-flex justify-content-start align-items-center">
                    <div className="job-post-category">
                      <span>Product Designer</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5">
                  <div className="job-post-wrapper d-flex align-items-center">
                    <div className="job-post-time d-flex align-items-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 16.75C13.2802 16.75 16.75 13.2802 16.75 9C16.75 4.71979 13.2802 1.25 9 1.25C4.71979 1.25 1.25 4.71979 1.25 9C1.25 13.2802 4.71979 16.75 9 16.75Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 5.7998V9.9998L11.8 11.3998"
                          stroke="#5F6168"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>Full-time</span>
                    </div>
                    <div className="job-post-location d-flex align-items-center">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7.51463C1 3.9167 4.13401 1 8 1C11.866 1 15 3.9167 15 7.51463C15 11.0844 12.7658 15.2499 9.28007 16.7396C8.46748 17.0868 7.53252 17.0868 6.71993 16.7396C3.23416 15.2499 1 11.0844 1 7.51463Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                        />
                        <path
                          d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                        />
                      </svg>
                      <span>Newark, NJ</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="job-post-apply-btn text-start text-md-end">
                    <Link
                      className="tp-btn-inner tp-btn-hover alt-color-orange"
                      href="career-details"
                    >
                      <span>Apply</span> <b></b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-post-box">
              <div className="row align-items-center">
                <div className=" col-lg-5 col-md-4">
                  <div className="job-post-info d-flex justify-content-start align-items-center">
                    <div className="job-post-category">
                      <span>Software Engineer</span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-5">
                  <div className="job-post-wrapper d-flex align-items-center">
                    <div className="job-post-time d-flex align-items-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 16.75C13.2802 16.75 16.75 13.2802 16.75 9C16.75 4.71979 13.2802 1.25 9 1.25C4.71979 1.25 1.25 4.71979 1.25 9C1.25 13.2802 4.71979 16.75 9 16.75Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 5.7998V9.9998L11.8 11.3998"
                          stroke="#5F6168"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>Full-time</span>
                    </div>
                    <div className="job-post-location d-flex align-items-center">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7.51463C1 3.9167 4.13401 1 8 1C11.866 1 15 3.9167 15 7.51463C15 11.0844 12.7658 15.2499 9.28007 16.7396C8.46748 17.0868 7.53252 17.0868 6.71993 16.7396C3.23416 15.2499 1 11.0844 1 7.51463Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                        />
                        <path
                          d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                        />
                      </svg>
                      <span>London, UK</span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3 col-md-3">
                  <div className="job-post-apply-btn text-start text-md-end">
                    <Link
                      className="tp-btn-inner tp-btn-hover alt-color-orange"
                      href="career-details"
                    >
                      <span>Apply</span> <b></b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-post-box">
              <div className="row align-items-center">
                <div className=" col-lg-5 col-md-4">
                  <div className="job-post-info d-flex justify-content-start align-items-center">
                    <div className="job-post-category">
                      <span>Junior Frontend Developer</span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-5">
                  <div className="job-post-wrapper d-flex align-items-center">
                    <div className="job-post-time d-flex align-items-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 16.75C13.2802 16.75 16.75 13.2802 16.75 9C16.75 4.71979 13.2802 1.25 9 1.25C4.71979 1.25 1.25 4.71979 1.25 9C1.25 13.2802 4.71979 16.75 9 16.75Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 5.7998V9.9998L11.8 11.3998"
                          stroke="#5F6168"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>Full-time</span>
                    </div>
                    <div className="job-post-location d-flex align-items-center">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7.51463C1 3.9167 4.13401 1 8 1C11.866 1 15 3.9167 15 7.51463C15 11.0844 12.7658 15.2499 9.28007 16.7396C8.46748 17.0868 7.53252 17.0868 6.71993 16.7396C3.23416 15.2499 1 11.0844 1 7.51463Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                        />
                        <path
                          d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                        />
                      </svg>
                      <span>Brooklyn, NY</span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3 col-md-3">
                  <div className="job-post-apply-btn text-start text-md-end">
                    <Link
                      className="tp-btn-inner tp-btn-hover alt-color-orange"
                      href="career-details"
                    >
                      <span>Apply</span> <b></b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-post-box">
              <div className="row align-items-center">
                <div className=" col-lg-5 col-md-4">
                  <div className="job-post-info d-flex justify-content-start align-items-center">
                    <div className="job-post-category">
                      <span>Finance Executive</span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-5">
                  <div className="job-post-wrapper d-flex align-items-center">
                    <div className="job-post-time d-flex align-items-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 16.75C13.2802 16.75 16.75 13.2802 16.75 9C16.75 4.71979 13.2802 1.25 9 1.25C4.71979 1.25 1.25 4.71979 1.25 9C1.25 13.2802 4.71979 16.75 9 16.75Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 5.7998V9.9998L11.8 11.3998"
                          stroke="#5F6168"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>Full-time</span>
                    </div>
                    <div className="job-post-location d-flex align-items-center">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7.51463C1 3.9167 4.13401 1 8 1C11.866 1 15 3.9167 15 7.51463C15 11.0844 12.7658 15.2499 9.28007 16.7396C8.46748 17.0868 7.53252 17.0868 6.71993 16.7396C3.23416 15.2499 1 11.0844 1 7.51463Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                        />
                        <path
                          d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                        />
                      </svg>
                      <span>Newark, NJ</span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3 col-md-3">
                  <div className="job-post-apply-btn text-start text-md-end">
                    <Link
                      className="tp-btn-inner tp-btn-hover alt-color-orange"
                      href="career-details"
                    >
                      <span>Apply</span> <b></b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-post-box">
              <div className="row align-items-center">
                <div className=" col-lg-5 col-md-4">
                  <div className="job-post-info d-flex justify-content-start align-items-center">
                    <div className="job-post-category">
                      <span>Junior Copywriter</span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-5">
                  <div className="job-post-wrapper d-flex align-items-center">
                    <div className="job-post-time d-flex align-items-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 16.75C13.2802 16.75 16.75 13.2802 16.75 9C16.75 4.71979 13.2802 1.25 9 1.25C4.71979 1.25 1.25 4.71979 1.25 9C1.25 13.2802 4.71979 16.75 9 16.75Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 5.7998V9.9998L11.8 11.3998"
                          stroke="#5F6168"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>Full-time</span>
                    </div>
                    <div className="job-post-location d-flex align-items-center">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7.51463C1 3.9167 4.13401 1 8 1C11.866 1 15 3.9167 15 7.51463C15 11.0844 12.7658 15.2499 9.28007 16.7396C8.46748 17.0868 7.53252 17.0868 6.71993 16.7396C3.23416 15.2499 1 11.0844 1 7.51463Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                        />
                        <path
                          d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                        />
                      </svg>
                      <span>London, UK</span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3 col-md-3">
                  <div className="job-post-apply-btn text-start text-md-end">
                    <Link
                      className="tp-btn-inner tp-btn-hover alt-color-orange"
                      href="career-details"
                    >
                      <span>Apply</span> <b></b>
                    </Link>
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
                <div
                  className="tp-cta-bg"
                  data-background="/img/cta/cta-bg.jpg"
                >
                  <div className="tp-cta-content tp-inner-font text-center">
                    <h3 className="tp-section-title text-white">
                      Try our service now!
                    </h3>
                    <p>
                      Eyerything you need to accept cord payments and grow your
                      business <br />
                      anywhere on the planet.
                    </p>
                    <Link
                      className="tp-btn-inner white-bg text-black"
                      href="service-details.html"
                    >
                      Get Started Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
