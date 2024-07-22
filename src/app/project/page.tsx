export default function Project() {
  return (
    <main>
      <div
        className="breadcrumb__area breadcrumb-height-2 breadcrumb-overlay p-relative fix"
        data-background="/img/project/project-brdcrmb-bg.jpg"
      >
        <div className="breadcrumb__shape-2 z-index-4">
          <img src="/img/breadcrumb/breadcrumb-shape-2-2.png" alt="" />
        </div>
        <div className="breadcrumb__shape-3 z-index-4">
          <img src="/img/breadcrumb/breadcrumb-sub-2.png" alt="" />
        </div>
        <div className="breadcrumb__shape-4 z-index-4">
          <img src="/img/breadcrumb/breadcrumb-sub-3.png" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="breadcrumb__content z-index-3 text-center">
                <h3 className="breadcrumb__title tp-char-animation text-black">
                  Our Projects
                </h3>
                <div
                  className="breadcrumb__text wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".6s"
                >
                  <p>
                    We have an experienced team of production and inspection
                    personnel <br /> to ensure quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-area pt-100 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="portfolio-filter masonary-menu text-center mb-35">
                <button data-filter="*" className="active">
                  <span>All</span>
                </button>
                <button data-filter=".cat1">
                  <span>Design Work</span>
                </button>
                <button data-filter=".cat2">
                  <span>Branding</span>
                </button>
                <button data-filter=".cat3">
                  <span>Development</span>
                </button>
                <button data-filter=".cat4">
                  <span>Illusutration</span>
                </button>
                <button data-filter=".cat5">
                  <span>App Design</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row grid">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item  cat1 cat4 cat3 cat5">
              <div className="inner-project-item mb-30">
                <div className="inner-project-img fix p-relative">
                  <img
                    className="w-100"
                    src="/img/project/project-inner-1.jpg"
                    alt=""
                  />
                  <div className="inner-project-brand">
                    <img src="/img/project/project-inner-brand-1.png" alt="" />
                  </div>
                </div>
                <div className="inner-project-content">
                  <span className="inner-project-category-title">
                    Design Wok, Branding
                  </span>
                  <h4 className="inner-project-title">
                    <a href="project-details.html">Airbnb Upgrade</a>
                  </h4>
                  <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item  cat4 cat2 cat1 ">
              <div className="inner-project-item  mb-30">
                <div className="inner-project-img fix p-relative">
                  <img src="/img/project/project-inner-2.jpg" alt="" />
                  <div className="inner-project-brand">
                    <img
                      className="w-100"
                      src="/img/project/project-inner-brand-2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="inner-project-content">
                  <span className="inner-project-category-title">
                    Development, App Design
                  </span>
                  <h4 className="inner-project-title">
                    <a href="project-details.html">Mobile App Design</a>
                  </h4>
                  <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item  cat3 cat4 cat5 ">
              <div className="inner-project-item mb-30">
                <div className="inner-project-img fix p-relative">
                  <img
                    className="w-100"
                    src="/img/project/project-inner-3.jpg"
                    alt=""
                  />
                  <div className="inner-project-brand">
                    <img src="/img/project/project-inner-brand-3.png" alt="" />
                  </div>
                </div>
                <div className="inner-project-content">
                  <span className="inner-project-category-title">
                    Branding, Illusutration
                  </span>
                  <h4 className="inner-project-title">
                    <a href="project-details.html">Branding & Identity</a>
                  </h4>
                  <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item  cat4 cat2 cat1">
              <div className="inner-project-item mb-30">
                <div className="inner-project-img fix p-relative">
                  <img
                    className="w-100"
                    src="/img/project/project-inner-5.jpg"
                    alt=""
                  />
                  <div className="inner-project-brand">
                    <img src="/img/project/project-inner-brand-5.png" alt="" />
                  </div>
                </div>
                <div className="inner-project-content">
                  <span className="inner-project-category-title">
                    Design Wok, Illusutration
                  </span>
                  <h4 className="inner-project-title">
                    <a href="project-details.html">Muckup Design</a>
                  </h4>
                  <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item  cat1 cat2 cat3 cat5">
              <div className="portfolio__single">
                <div className="portfolio__img">
                  <div className="inner-project-item mb-30">
                    <div className="inner-project-img fix p-relative">
                      <img
                        className="w-100"
                        src="/img/project/project-inner-4.jpg"
                        alt=""
                      />
                      <div className="inner-project-brand">
                        <img
                          src="/img/project/project-inner-brand-4.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="inner-project-content">
                      <span className="inner-project-category-title">
                        Design Wok, Branding
                      </span>
                      <h4 className="inner-project-title">
                        <a href="project-details.html">Realistic Scenarios</a>
                      </h4>
                      <p>
                        Quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item  cat1 cat5 cat2 cat3 cat4">
              <div className="inner-project-item mb-30">
                <div className="inner-project-img fix p-relative">
                  <img src="/img/project/project-inner-6.jpg" alt="" />
                  <div className="inner-project-brand">
                    <img src="/img/project/project-inner-brand-6.png" alt="" />
                  </div>
                </div>
                <div className="inner-project-content">
                  <span className="inner-project-category-title">
                    Design Wok, App Design
                  </span>
                  <h4 className="inner-project-title">
                    <a href="project-details.html">Design System & Ul Kit</a>
                  </h4>
                  <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item  cat4 cat2 cat1">
              <div className="inner-project-item mb-30">
                <div className="inner-project-img fix p-relative">
                  <img
                    className="w-100"
                    src="/img/project/project-inner-7.jpg"
                    alt=""
                  />
                  <div className="inner-project-brand">
                    <img src="/img/project/project-inner-brand-5.png" alt="" />
                  </div>
                </div>
                <div className="inner-project-content">
                  <span className="inner-project-category-title">
                    Design Wok, Illusutration
                  </span>
                  <h4 className="inner-project-title">
                    <a href="project-details.html">Web Design</a>
                  </h4>
                  <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item  cat1 cat2 cat3 cat5">
              <div className="portfolio__single">
                <div className="portfolio__img">
                  <div className="inner-project-item mb-30">
                    <div className="inner-project-img fix p-relative">
                      <img
                        className="w-100"
                        src="/img/project/project-inner-8.jpg"
                        alt=""
                      />
                      <div className="inner-project-brand">
                        <img
                          src="/img/project/project-inner-brand-4.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="inner-project-content">
                      <span className="inner-project-category-title">
                        Design Wok, Branding
                      </span>
                      <h4 className="inner-project-title">
                        <a href="project-details.html">Landing Page Design</a>
                      </h4>
                      <p>
                        Quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item  cat1 cat5 cat2 cat3 cat4">
              <div className="inner-project-item mb-30">
                <div className="inner-project-img fix p-relative">
                  <img src="/img/project/project-inner-9.jpg" alt="" />
                  <div className="inner-project-brand">
                    <img src="/img/project/project-inner-brand-6.png" alt="" />
                  </div>
                </div>
                <div className="inner-project-content">
                  <span className="inner-project-category-title">
                    Design Wok, App Design
                  </span>
                  <h4 className="inner-project-title">
                    <a href="project-details.html">Mobile Design</a>
                  </h4>
                  <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo.
                  </p>
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
