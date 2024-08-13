import Link from "next/link";

<>
  <Link rel="stylesheet" href="/css/bootstrap.min.css" />
  <Link rel="stylesheet" href="/css/animate.css" />
  <Link rel="stylesheet" href="/css/custom-animation.css" />
  <Link rel="stylesheet" href="/css/slick.css" />
  <Link rel="stylesheet" href="/css/nice-select.css" />
  <Link rel="stylesheet" href="/css/flaticon.css" />
  <Link rel="stylesheet" href="/css/swiper-bundle.css" />
  <Link rel="stylesheet" href="/css/meanmenu.css" />
  <Link rel="stylesheet" href="/css/font-awesome-pro.css" />
  <Link rel="stylesheet" href="/css/magnific-popup.css" />
  <Link rel="stylesheet" href="/css/spacing.css" />
  <Link rel="stylesheet" href="/css/style.css"></Link>
</>;

export default function Contact() {
  const backgroundUrl = "/img/contact/contact-banner.jpg";

  return (
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
                <div className="about-banner-content">
                  <h4
                    className="about-banner-title"
                    data-parallax='{"y": 1000, "smoothness": 10}'
                  >
                    <span>Get In</span> <br />
                    <span>Touch</span>
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
                data-background={backgroundUrl}
              >
                <div className="about-img-content">
                  <h4
                    className="about-img-title"
                    data-parallax='{"y": 1000, "smoothness": 10}'
                  >
                    <span>Get In</span> <br />
                    <span>Touch</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-info-area pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-30">
              <div className="contact-info-item">
                <div className="contact-info-img">
                  <img src="/img/contact/contact-icon-sm-5.png" alt="" />
                </div>
                <div className="contact-info-title-box">
                  <h5 className="contact-info-title-sm">
                    <Link href="#">Colombia</Link>
                  </h5>
                  <p>
                    Bogota D.C., Colombia, b. a 181 <br />C No. 930 Ap 202
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 mb-30">
              <div className="contact-info-item p-relative">
                <div className="contact-info-badge">
                  <span>Main Office</span>
                </div>
                <div className="contact-info-img">
                  <img src="/img/contact/contact-icon-sm-6.png" alt="" />
                </div>
                <div className="contact-info-title-box">
                  <h5 className="contact-info-title-sm">
                    <Link href="#">France</Link>
                  </h5>
                  <p>
                    9 Pearse Street, Kinsale,Cork, <br />
                    P17 AH66, Ireland
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 mb-30">
              <div className="contact-info-item">
                <div className="contact-info-img">
                  <img src="/img/contact/contact-icon-sm-7.png" alt="" />
                </div>
                <div className="contact-info-title-box">
                  <h5 className="contact-info-title-sm">
                    <Link href="#">Egypt</Link>
                  </h5>
                  <p>
                    Av. Cordoba 1309, 3'A, City of <br />
                    Buenos Aires, Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-area pb-120">
        <div className="container">
          <div className="row gx-0">
            <div className="col-xl-5 col-lg-6">
              <div className="contact-form-left">
                <div className="contact-form-section-box pb-80">
                  <h5 className="inner-section-subtitle">CONTACT US</h5>
                  <h4 className="tp-section-title pb-10">
                    We'd love to <br /> hear From
                    <span>
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect width="44" height="44" fill="url(#pattern0)" />
                        <defs>
                          <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_2106_35"
                              transform="translate(-0.425532 -0.170213) scale(0.0212766)"
                            />
                          </pattern>
                          <image
                            id="image0_2106_35"
                            width="83"
                            height="66"
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABCCAYAAAArOOo+AAADcklEQVR4nO2bP0wTURzHP5RqQhyMtyJNTCcTnKCLnVhs4sRmHRk10U0WFhcXiQskuDPhxirRQZMagn8WB1gatTqQiMV/qRBM6nB99oDe9Y7+3mvf8T5j03u/yyfv97vvK8dQs9ls4hAh0+8bSBNOpiBOpiBOpiBOpiBOpiBOpiBOpiCnWma1AmvzUK/JrJeVWcYeqhWovoKnDw9/fu1e72ufCplhAhUXLsrUSa3MbgKD5IsyNVMlM4nAIF5Opr71Mk8qUFEoy92LlTJ7FRgkf7X3NRRDtvyeKSkwyKOvcmsN9M6UEuiNQf3z8c8lWxwGUKbkDvTGoHAzfC3JFocBkamjhfNFKC/Ag4no70jSN5m6ZiBAadY/0SxNR39PKhIpjMrUKRD8ti4v+jtubd6vF4b0vAQDMnULVOSLcHu1XbNbPel5CZqiUb0Gb57oF6hQba1qR81JhWQkUmjZmY+nO0cRaYJtrVi52/06HS0OmmTeWm239+sVHRUOt7Wi25z8f62GFgcDJ6B6TV5ssK0V1Ur3p7di7q38kxwMHyd7FduprdW6ceakQse8BBg6OPjbzGaH9aweQVKxndpasTQdr73Bn5flxfj3mYTMyxfv9KzcBS/nH/XKi37blRfCHwyl2XCRceekQte8BBg+N3Lp/tRUgTNn+3eyHDkPo1dg/LovdHTc/2zvB8wsh0uuVmDlTrJaM8u9328Y2efPNtjc/MDE5GV9VRLg5dq7Nop6Lf4DR6ErEiky29vfWF9/r7eKBuLkyaPobHFo/d18a+sjjcae3kqCJJ2TCulfiY6SAah92rZGZpxzdxg6smWQDMDOznd2d3/qrSRE0jmp0D0voSXzT2OP/f0D/dUEKM2e7Drd8xJaMqvVL/z+1dBfTYDJGye7rls6kMC6F7e8XPKWNdHiYKFMSP6SlYkWB0tlerlkMUd3JFJYKROglGB36o5ECmtl5ovxdpypeQkWywQoxHiym5qXYLnMWDvTQCRSWC3Ty0WHeJMtDpbLhOgQb7LFIQUyo0K8qUiksF4mhId4U5FIkQqZnUK86XkJKZEJx0O86XkJKZJ5NMSbjESK1MiEdojvR4tDymTmi61Xr/skcyBew5bCy8Fcf96pAFK2M/uNkymINf9UZQNuZwriZAriZAriZAriZAriZAriZAriZAryD4xxER8vOFEDAAAAAElFTkSuQmCC"
                          />
                        </defs>
                      </svg>
                    </span>
                    you.
                  </h4>
                  <p>
                    While we're good with smoke signals, there <br /> are easier
                    ways to get in touch.
                  </p>
                </div>
                <div className="contact-form-social-box p-relative">
                  <div className="contact-form-social-item">
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                  <div className="contact-form-section-img">
                    <img src="/img/contact/contact-icon-sm-4.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="contact-form-right-warp">
                <div className="postbox__comment-form">
                  <form action="#" className="box">
                    <div className="row gx-20">
                      <div className="col-12">
                        <div className="postbox__comment-input mb-30">
                          <input type="text" className="inputText" required />
                          <span className="floating-label">Full Name</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="postbox__comment-input mb-30">
                          <input type="text" className="inputText" required />
                          <span className="floating-label">Your Email</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="postbox__comment-input mb-35">
                          <input type="text" className="inputText" required />
                          <span className="floating-label">Phone Number</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="postbox__select mb-30">
                          <select>
                            <option>Your Inquiry about</option>
                            <option>01 Year</option>
                            <option>02 Year</option>
                            <option>03 Year</option>
                            <option>04 Year</option>
                            <option>05 Year</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="postbox__comment-input mb-30">
                          <textarea
                            className="textareaText"
                            required
                          ></textarea>
                          <span className="floating-label-2">Message...</span>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="postbox__btn-box">
                          <button className="submit-btn w-100">
                            Send your Request
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-inner-area pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-inner-title-sm-wrap text-center mb-50">
                <h4 className="contact-inner-title-sm">Book a Demo!</h4>
                <p>We will contact again after receive your request in 24h</p>
              </div>
            </div>
          </div>
          <div className="contact-inner-wrapper">
            <div className="row gx-0">
              <div className="col-xl-4 col-lg-4">
                <div className="contact-inner-item d-flex align-items-center justify-content-center">
                  <div className="contact-inner-img contact-img-1">
                    <img src="/img/contact/contact-icon-sm-1.png" alt="" />
                  </div>
                  <div className="contact-inner-Link">
                    <Link href="mailto:contact@softuch.com">contact@softuch.com</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="contact-inner-item d-flex align-items-center justify-content-center">
                  <div className="contact-inner-img contact-img-2">
                    <img src="/img/contact/contact-icon-sm-2.png" alt="" />
                  </div>
                  <div className="contact-inner-Link">
                    <Link href="tel:12025550144">+1-202-555-0144</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="contact-inner-item d-flex align-items-center justify-content-center">
                  <div className="contact-inner-img contact-img-3">
                    <img src="/img/contact/contact-icon-sm-3.png" alt="" />
                  </div>
                  <div className="contact-inner-Link">
                    <Link
                      href="https://www.google.com.bd/maps/@23.7806365,90.4193257,12z"
                      target="_blank"
                    >
                      35Park Avenue, Uk
                    </Link>
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
                  <Link
                    className="tp-btn-inner white-bg text-black"
                    href="/service-details"
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
  );
}
