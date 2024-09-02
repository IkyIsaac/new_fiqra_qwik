"use client";
import ContactForm from "@/components/ui/contact_form";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);

  return (
    <>
      <main className="fix">
        {/* <!-- tp-hero-area-start --> */}
        <div className="tp-hero-area tp-hero-overlay blue-bg pt-200 pb-115 p-relative">
          <div
            className="tp-hero-4-shape-img  wow tpfadeLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <img src="/img/hero/hero-shape-4-1.png" alt="" />
          </div>
          <div className="tp-hero-glob-img">
            <img src="/img/hero/hero-4-3.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7">
                <div className="tp-hero-4-section-box pt-10 z-index-3">
                  <h5 className="tp-section-subtitle-4 tp-char-animation">
                    {" "}
                    Amplify Business Impact with our Innovative Software
                    Solutions
                  </h5>
                  <h3 className="tp-hero-title-4 pb-35 tp-char-animation ">
                    {" "}
                    Lead the Digital Revolution
                  </h3>
                  <a
                    className="tp-btn-yellow-border wow tpfadeRight"
                    data-wow-duration=".9s"
                    data-wow-delay=".7s"
                    href="#about_us"
                  >
                    <span>
                      <a href="#contact">Get in Touch</a>
                      <i className="far fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="tp-hero-4-img-wrapper p-relative">
                  <div className="tp-hero-4-main-img text-center z-index-3">
                    <img src="/img/hero/hero-4-5.png" alt="" />
                  </div>
                  <div className="tp-hero-4-sub-img z-index-3">
                    <img src="/img/hero/hero-4-2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-barnd-area tp-barnd-plr blue-bg z-index-3 fix">
          <div className="tp-barnd-main-wrapper p-relative">
            <div className="tp-barnd-shape-1">
              <img src="/img/brand/image_01.png" alt="" />
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4">
                  <div className="tp-barnd-left-item d-flex align-items-center">
                    <div className="tp-barnd-icon">
                      <img src="/img/hero/hero-slider-icon-1.png" alt="" />
                    </div>
                    <h5 className="tp-barnd-title-sm">Trusted by:</h5>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8">
                  <div className="tp-barnd-slider-wrapper">
                    <div className="tp-barnd-slider-active p-relative">
                      <div className="tp-brand-item">
                        <img src="/img/hero/mcard.png" alt="" />
                      </div>
                      <div className="tp-brand-item">
                        <img src="/img/hero/sc.png" alt="" />
                      </div>
                      <div className="tp-brand-item">
                        <img src="/img/hero/hero-slider-icon-2.png" alt="" />
                      </div>
                      <div className="tp-brand-item">
                        <img src="/img/hero/hero-slider-icon-3.png" alt="" />
                      </div>
                      <div className="tp-brand-item">
                        <img src="/img/hero/hero-slider-icon-4.png" alt="" />
                      </div>
                      <div className="tp-brand-item">
                        <img src="/img/hero/hero-slider-icon-5.png" alt="" />
                      </div>
                      <div className="tp-brand-item">
                        <img src="/img/hero/hero-slider-icon-6.png" alt="" />
                      </div>
                      <div className="tp-brand-item">
                        <img src="/img/hero/hero-slider-icon-7.png" alt="" />
                      </div>
                      <div className="tp-brand-item">
                        <img src="/img/hero/hero-slider-icon-8.png" alt="" />
                      </div>
                      <div className="tp-brand-item">
                        <img src="/img/hero/hero-slider-icon-9.png" alt="" />
                      </div>
                      <div className="tp-brand-item">
                        <img src="/img/hero/hero-slider-icon-10.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-service-area blue-bg p-relative pt-115 pb-105">
          <div className="tp-service-shape-right z-index">
            <img src="/img/service/service-shape-right.png" alt="" />
          </div>
          <div className="container">
            <div className="row align-items-end mb-60">
              <div className="col-xl-6 col-lg-6">
                <div className="tp-service-section-four">
                  <h5 className="tp-section-subtitle-4 pb-10">WHAT WE DO</h5>
                  <h3 className="tp-section-title-4">Our Services</h3>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6  wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="tp-service-sction-content pb-15 d-flex justify-content-md-start justify-content-end">
                  <p>
                    We engineer industry solutions that deliver tangible
                    business value and innovation. From strategy to execution,
                    your path to Software Engineering and Digital Transformation
                    starts here
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tp-service-4-border-top  wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-1">
                  <div className="tp-service-4-item z-index">
                    <div className="tp-service-4-icon">
                      <img src="/img/service/web.png" alt="" />
                    </div>
                    <div className="tp-service-4-content">
                      <span>Web Development</span>
                      <h4 className="tp-service-4-title">
                        <Link href="#">Custom Web Development</Link>
                      </h4>
                      {/* <Link className="tp-btn-service" href="/service-details">
                        Learn More
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-2">
                  <div className="tp-service-4-item z-index">
                    <div className="tp-service-4-icon">
                      <img src="/img/service/customers.png" alt="" />
                      {/* fiqra/public/img/service/customers.png */}
                    </div>
                    <div className="tp-service-4-content">
                      <span>Digital Marketing</span>
                      <h4 className="tp-service-4-title">
                        <Link href="#">Bringing Customers to You</Link>
                      </h4>
                      {/* <Link className="tp-btn-service" href="/service-details">
                        Learn More
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-3">
                  <div className="tp-service-4-item z-index">
                    <div className="tp-service-4-icon">
                      <img src="/img/service/edu.png" alt="" />
                    </div>
                    <div className="tp-service-4-content">
                      <span>Fiqra Academy LMS</span>
                      <h4 className="tp-service-4-title">
                        <Link href="#">Creating Digital Leaders</Link>
                      </h4>
                      {/* <Link
                        className="tp-btn-service"
                        href="service-details"
                      >
                        Learn More
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-">
                  <div className="tp-service-4-item z-index">
                    <div className="tp-service-4-icon">
                      <img src="/img/service/mobile.png" alt="" />
                    </div>
                    <div className="tp-service-4-content">
                      <span>Mobile App Development</span>
                      <h4 className="tp-service-4-title">
                        <Link href="#">Mobile Apps Development</Link>
                      </h4>
                      {/* <Link className="tp-btn-service" href="/service-details">
                        Learn More
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-about-area pb-135 blue-bg p-relative" id="about_us">
          <div className="tp-about-top-img-2">
            <img src="/img/about/about-4-3.png" alt="" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="tp-about-left-img text-md-center p-relative text-start z-index">
                  <img src="/img/about/about-4-1.png" alt="" />
                  <div className="tp-about-top-img">
                    <img src="/img/about/about-4-2.png" alt="" />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="tp-security-section-wrapper">
                  <div className="tp-security-section-box mb-45">
                    <h5 className="tp-section-subtitle-4 pb-10">Who we are</h5>
                    <h3 className="tp-section-title-4 pb-25">
                      What Fiqra's known for
                    </h3>
                    <p>
                      We are a pioneering IT solutions company focused on
                      creating digital leaders through our technology services
                      and innovative education. We offer comprehensive IT
                      solutions and personalized learning experiences to empower
                      individuals and organizations. With good years of industry
                      experience and a commitment to excellence, We serve our
                      people, clients, partners, and communities all over,
                      helping them achieve their digital transformation goals.
                    </p>
                  </div>
                  <div className="tp-security-feature">
                    <ul>
                      <li>
                        <i className="far fa-check"></i>High-Performance <br />{" "}
                        Solutions
                      </li>
                      <li>
                        <i className="far fa-check"></i>Award-Winning <br />{" "}
                        Company.
                      </li>
                      <li>
                        <i className="far fa-check"></i>Innovative <br />{" "}
                        Experience.
                      </li>
                    </ul>
                  </div>
                  <div className="tp-security-btn">
                    {/* <Link className="tp-btn-yellow-border" href="/about">
                      About Us <i className="far fa-angle-right"></i>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="tp-fun-fact-area pb-75 blue-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 mb-60 tp-counter-br">
                <div className="tp-fun-fact-item tp-fun-fact-space-1 d-flex align-items-center">
                  <h4>
                    <span
                      data-purecounter-duration="1"
                      data-purecounter-end="23"
                      className="purecounter"
                    >
                      0
                    </span>
                    +
                  </h4>
                  <p>
                    Years <br /> Of Experience
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mb-60 tp-counter-br">
                <div className="tp-fun-fact-item tp-fun-fact-space-2 d-flex align-items-center">
                  <h4>
                    <span
                      data-purecounter-duration="1"
                      data-purecounter-end="300"
                      className="purecounter"
                    >
                      0
                    </span>
                    %
                  </h4>
                  <p>
                    Year on <br /> year Growth
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mb-60 tp-counter-br">
                <div className="tp-fun-fact-item tp-fun-fact-space-3 d-flex align-items-center">
                  <h4>
                    <span
                      data-purecounter-duration="1"
                      data-purecounter-end="12"
                      className="purecounter"
                    >
                      0
                    </span>
                    +
                  </h4>
                  <p>
                    Countries <br /> Of Operation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="tp-platform-area border-tb blue-bg pt-115 pb-105 p-relative z-index">
          <div className="tp-platform-bg-shape">
            <img src="/img/Platform/p-bg.png" alt="" />
          </div>
          <div className="container">
            <div className="row align-items-end mb-40">
              <div className="col-xl-7 col-lg-6">
                <div className="tp-platform-section-box">
                  <h5 className="tp-section-subtitle-4 pb-10">What we offer</h5>
                  <h3 className="tp-section-title-4">Solutions for you.</h3>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-6  wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="tp-platform-text">
                  <p>
                    Explore how Avalance can help you toassess security controls
                    continuously.
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 d-none d-xl-block">
                <div className="tp-platform-img-box">
                  <img src="/img/payment/platform-1.png" alt="" />
                </div>
              </div>
              <div className="col-xl-10 col-lg-12">
                <div className="row-custom-wrapper">
                  <div className="row-custom">
                    <div className="col-custom active">
                      <div className="tp-panel-item">
                        <div className="tp-panel-content">
                          <span>01.</span>
                          <h4 className="tp-panel-title child-one">
                            Software Development
                          </h4>
                        </div>
                      </div>
                      <div className="tp-panel-item-2">
                        <div className="tp-panel-content-2">
                          <span>01.</span>
                          <h4 className="tp-panel-title-2">
                            Software Development
                          </h4>
                          <p>
                            Whether it is a consumer app or a disruptive
                            enterprise-className solution, we will manage the
                            full mobile app development process, from
                            inspiration and concept to delivery and continuous
                            maintenance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-custom">
                      <div className="tp-panel-item">
                        <div className="tp-panel-content">
                          <span>02.</span>
                          <h4 className="tp-panel-title child-two">
                            UI & UX Design
                          </h4>
                        </div>
                      </div>
                      <div className="tp-panel-item-2">
                        <div className="tp-panel-content-2">
                          <span>02.</span>
                          <h4 className="tp-panel-title-2">UI & UX Design</h4>
                          <p>
                            At Fiqra Technologies, we provide innovative UI/UX
                            design services, delivering an outstanding product
                            on time. Our creative unit functions as a dedicated
                            design studio within a comprehensive software
                            company.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-custom">
                      <div className="tp-panel-item">
                        <div className="tp-panel-content">
                          <span>03.</span>
                          <h4 className="tp-panel-title child-three">
                            Digital <br /> Marketing
                          </h4>
                        </div>
                      </div>
                      <div className="tp-panel-item-2">
                        <div className="tp-panel-content-2">
                          <span>03.</span>
                          <h4 className="tp-panel-title-2">
                            Digital Marketing
                          </h4>
                          <p>
                            Fiqra Technologies provides you with what is
                            important to you: "Growth". We deliver you paying
                            customers while also increasing the growth,
                            authenticity, and authority of your brand or
                            business.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-custom">
                      <div className="tp-panel-item">
                        <div className="tp-panel-content">
                          <span>04.</span>
                          <h4 className="tp-panel-title child-four">
                            Fiqra Academy
                          </h4>
                        </div>
                      </div>
                      <div className="tp-panel-item-2">
                        <div className="tp-panel-content-2">
                          <span>04.</span>
                          <h4 className="tp-panel-title-2">Fiqra Academy</h4>
                          <p>
                            Not the usual e-Learning platform. It's for
                            rebellious game changers and knowledge sharers.
                            Invest in your personal learning journey or upskill
                            your organization with future-ready technology
                            skills.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-team-area blue-bg pb-95">
          <div className="container">
            <div className="tp-team-section-wrapper mb-70">
              <div className="row align-items-end">
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-team-section-box">
                    <h5 className="tp-section-subtitle-4 pb-10">THE TEAM</h5>
                    <h3 className="tp-section-title-4">Our Leaders</h3>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6  wow tpfadeRight"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div className="tp-team-top-content d-flex justify-content-md-start justify-content-end">
                    <p>
                      Our clients are the companies and startups who <br /> make
                      the world go round,!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-1">
                <div className="tp-team-item text-center z-index">
                  <div className="tp-team-img tp-tilt-effect">
                    <img src="/img/team/team-4-1.png" alt="" />
                  </div>
                  <div className="tp-team-content">
                    <h4 className="tp-team-title-sm">
                      <a href="#">Gerald Revocatus</a>
                    </h4>
                    <span>Co-Founder & CEO</span>
                  </div>
                  <div className="tp-team-social">
                    <a className="icon-color-1 box" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span></span>
                    </a>
                    <a className="icon-color-2 box" href="#">
                      <i className="fab fa-instagram"></i>
                      <span></span>
                    </a>
                    <a
                      className="icon-color-3 box"
                      href="#"
                      style={{ color: "#ffffff" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>{" "}
                      {/* <i className="fab fa-twitter"></i> */}
                      <span></span>
                    </a>
                    <a className="icon-color-4 box" href="#">
                      <i className="fab fa-linkedin-in"></i>
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-2">
                <div className="tp-team-item text-center z-index">
                  <div className="tp-team-img">
                    <img src="/img/team/team-4-2.png" alt="" />
                  </div>
                  <div className="tp-team-content">
                    <h4 className="tp-team-title-sm">
                      <a href="#">Patricia Mhekwa</a>
                    </h4>
                    <span>COO</span>
                  </div>
                  <div className="tp-team-social">
                    <a className="icon-color-1 box" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span></span>
                    </a>
                    <a className="icon-color-2" href="#">
                      <i className="fab fa-instagram"></i>
                      <span></span>
                    </a>
                    <a className="icon-color-1" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>{" "}
                      <span></span>
                    </a>
                    <a className="icon-color-4" href="#">
                      <i className="fab fa-linkedin-in"></i>
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-3">
                <div className="tp-team-item text-center z-index">
                  <div className="tp-team-img">
                    <img src="/img/team/team-4-3.png" alt="" />
                  </div>
                  <div className="tp-team-content">
                    <h4 className="tp-team-title-sm">
                      <a href="#">Emmanuel Mtera</a>
                    </h4>
                    <span>CEO & Founder</span>
                  </div>
                  <div className="tp-team-social">
                    <a className="icon-color-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span></span>
                    </a>
                    <a className="icon-color-2" href="#">
                      <i className="fab fa-instagram"></i>
                      <span></span>
                    </a>
                    <a className="icon-color-3" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>{" "}
                      <span></span>
                    </a>
                    <a className="icon-color-4" href="#">
                      <i className="fab fa-linkedin-in"></i>
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-4">
                <div className="tp-team-item text-center z-index">
                  <div className="tp-team-img">
                    <img src="/img/team/team-4-4.png" alt="" />
                  </div>
                  <div className="tp-team-content">
                    <h4 className="tp-team-title-sm">
                      <a href="#">Lusekelo Mwakipiti</a>
                    </h4>
                    <span>Design Lead</span>
                  </div>
                  <div className="tp-team-social">
                    <a className="icon-color-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                      <span></span>
                    </a>
                    <a className="icon-color-2" href="#">
                      <i className="fab fa-instagram"></i>
                      <span></span>
                    </a>
                    <a className="icon-color-3" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                      <span></span>
                    </a>
                    <a className="icon-color-4" href="#">
                      <i className="fab fa-linkedin-in"></i>
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="tp-security-area blue-bg pb-180 fix z-index">
          <div className="container-fluid g-0">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="tp-security-section-box text-center pb-100">
                  <h5
                    className="tp-section-subtitle-4 both pb-10 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".3s"
                  >
                    Explore Our Level
                  </h5>
                  <h3 className="tp-section-title-4">Solutions by Industry</h3>
                </div>
              </div>
            </div>
            <div
              className="tp-security-slider-wrapper wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-security-slider-active">
                <div className="tp-security-main">
                  <div
                    id="slideshow"
                    className="tp-security-wrapper d-flex align-items-center justify-content-between"
                  >
                    <div className="tp-security-item d-flex align-items-center">
                      <div className="tp-security-img">
                        <img src="/img/security/security-1.png" alt="" />
                      </div>
                      <div className="tp-security-content">
                        <h4 className="tp-security-title-sm">
                          Business <br /> Security
                        </h4>
                      </div>
                    </div>
                    <div className="tp-security-link">
                      <a href="#">
                        <svg
                          width="10"
                          height="19"
                          viewBox="0 0 10 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 17.0112L9 9.01123L1 1.01123"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tp-security-main">
                  <div className="tp-security-wrapper d-flex align-items-center justify-content-between">
                    <div className="tp-security-item d-flex align-items-center">
                      <div className="tp-security-img">
                        <img src="/img/security/security-2.png" alt="" />
                      </div>
                      <div className="tp-security-content">
                        <h4 className="tp-security-title-sm">
                          Logistics <br /> Security
                        </h4>
                      </div>
                    </div>
                    <div className="tp-security-link">
                      <a href="#">
                        <svg
                          width="10"
                          height="19"
                          viewBox="0 0 10 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 17.0112L9 9.01123L1 1.01123"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tp-security-main">
                  <div className="tp-security-wrapper d-flex align-items-center justify-content-between">
                    <div className="tp-security-item d-flex align-items-center">
                      <div className="tp-security-img">
                        <img src="/img/security/security-3.png" alt="" />
                      </div>
                      <div className="tp-security-content">
                        <h4 className="tp-security-title-sm">
                          Education <br /> Security
                        </h4>
                      </div>
                    </div>
                    <div className="tp-security-link">
                      <a href="#">
                        <svg
                          width="10"
                          height="19"
                          viewBox="0 0 10 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 17.0112L9 9.01123L1 1.01123"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tp-security-main">
                  <div className="tp-security-wrapper d-flex align-items-center justify-content-between">
                    <div className="tp-security-item d-flex align-items-center">
                      <div className="tp-security-img">
                        <img src="/img/security/security-4.png" alt="" />
                      </div>
                      <div className="tp-security-content">
                        <h4 className="tp-security-title-sm">
                          Food <br /> & Beverage
                        </h4>
                      </div>
                    </div>
                    <div className="tp-security-link">
                      <a href="#">
                        <svg
                          width="10"
                          height="19"
                          viewBox="0 0 10 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 17.0112L9 9.01123L1 1.01123"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tp-security-main">
                  <div className="tp-security-wrapper d-flex align-items-center justify-content-between">
                    <div className="tp-security-item d-flex align-items-center">
                      <div className="tp-security-img">
                        <img src="/img/security/security-5.png" alt="" />
                      </div>
                      <div className="tp-security-content">
                        <h4 className="tp-security-title-sm">
                          Media & <br /> Entertainment
                        </h4>
                      </div>
                    </div>
                    <div className="tp-security-link">
                      <a href="#">
                        <svg
                          width="10"
                          height="19"
                          viewBox="0 0 10 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 17.0112L9 9.01123L1 1.01123"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tp-security-main">
                  <div className="tp-security-wrapper d-flex align-items-center justify-content-between">
                    <div className="tp-security-item d-flex align-items-center">
                      <div className="tp-security-img">
                        <img src="/img/security/security-3.png" alt="" />
                      </div>
                      <div className="tp-security-content">
                        <h4 className="tp-security-title-sm">
                          Business <br /> Security
                        </h4>
                      </div>
                    </div>
                    <div className="tp-security-link">
                      <a href="#">
                        <svg
                          width="10"
                          height="19"
                          viewBox="0 0 10 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 17.0112L9 9.01123L1 1.01123"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="tp-blog-area blue-bg pb-90">
          <div className="container">
            <div className="row align-items-end tp-blog-four-section-space">
              <div className="col-xl-6 col-lg-6">
                <div className="tp-blog-four-section-box">
                  <h5 className="tp-section-subtitle-4 pb-10">News Feeds</h5>
                  <h3 className="tp-section-title-4">Blog & Insights</h3>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="tp-blog-four-btn text-start text-lg-end">
                  <Link
                    className="tp-btn-yellow-border"
                    href="https://fiqra.academy/blog"
                  >
                    Show More <i className="far fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 col-md-6 mb-40 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="tp-blog-four-item p-relative fix">
                  <div className="tp-blog-four-img fix ">
                    <a href="https://fiqra.academy/blog/Reflecting-on-Our-Unforgettable-Experience-at-the-MasterCard-Edtech-Conference-in-Abuja-Nigeria">
                      <img
                        src="/img/blog/abuja1.png"
                        className="pic-size"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="tp-blog-four-content-wrapper">
                    <div className="tp-blog-four-meta">
                      <span className="child-1">Blog</span>
                      <span className="child-2">10 min</span>
                    </div>
                    <div className="tp-blog-four-info">
                      <h4 className="tp-blog-four-title-sm">
                        <a href="https://fiqra.academy/blog/Reflecting-on-Our-Unforgettable-Experience-at-the-MasterCard-Edtech-Conference-in-Abuja-Nigeria">
                          Our Unforgettable Experience at the MasterCard
                          Foundation Edtech Conference in Abuja, Nigeria{" "}
                        </a>
                      </h4>
                      <p>
                        Discover Fiqra Academy's incredible journey at the
                        MasterCard Edtech Conference in Abuja. From insightful
                        sessions to exploring the vibrant city, it was an ...
                      </p>
                    </div>
                    <div className="tp-blog-four-btn">
                      <a
                        className="tp-btn-service"
                        href="https://fiqra.academy/blog/Reflecting-on-Our-Unforgettable-Experience-at-the-MasterCard-Edtech-Conference-in-Abuja-Nigeria"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 mb-40 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="tp-blog-four-item fix">
                  <div className="tp-blog-four-img fix">
                    <a href="https://fiqra.academy/blog/Unleashing-Success-in-2024-Master-Your-Goals-with-7-ChatGPT-Powered-Prompts">
                      <img src="/img/blog/blog-image.png" alt="" />
                    </a>
                  </div>
                  <div className="tp-blog-four-content-wrapper">
                    <div className="tp-blog-four-meta">
                      <span className="child-1">Blog</span>
                      <span className="child-2">24 min</span>
                    </div>
                    <div className="tp-blog-four-info">
                      <h4 className="tp-blog-four-title-sm">
                        <a href="https://fiqra.academy/blog/Unleashing-Success-in-2024-Master-Your-Goals-with-7-ChatGPT-Powered-Prompts">
                          Unleashing Success in 2024: Master Your Goals with 7
                          ChatGPT-Powered Prompts
                        </a>
                      </h4>
                      <p>
                        Explore the transformative power of ChatGPT with "7
                        ChatGPT Prompts to Smash Your Goals in 2024." This
                        article unveils a strategic toolkit, guiding ...
                      </p>
                    </div>
                    <div className="tp-blog-four-btn">
                      <a
                        className="tp-btn-service"
                        href="https://fiqra.academy/blog/Unleashing-Success-in-2024-Master-Your-Goals-with-7-ChatGPT-Powered-Prompts"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
        {/* <div className="tp-contact-area tp-contact-overlay pt-120 pb-120 blue-bg z-index p-relative fix">
          <div className="tp-contact-glob-img">
            <img src="/img/hero/hero-4-3.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-12 z-index-3">
                <div className="tp-contact-section-box pb-25">
                  <h5 className="tp-section-subtitle-4 pb-10 ">CONTACT US</h5>
                  <h3 className="tp-section-title-4">
                    Request Free Consultancy
                  </h3>
                </div>
                <div className="tp-contact-info-box tp-title-anim">
                  <ul>
                    <li>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2227 1C13.2227 1 15.9115 1.24444 19.3336 4.66659C22.7558 8.08874 23.0002 10.7776 23.0002 10.7776"
                          stroke="#71c491"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13.4756 5.32031C13.4756 5.32031 14.6855 5.666 16.5004 7.48087C18.3152 9.29574 18.6609 10.5056 18.6609 10.5056"
                          stroke="#71c491"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1.00801 8.25232C0.919597 10.5844 1.50981 14.545 5.48265 18.5178C6.44111 19.4762 7.39885 20.2378 8.33317 20.8405M2.8795 4.59079C4.58196 2.88834 7.29819 3.11708 8.37912 5.05393L9.17234 6.47526C9.88818 7.75793 9.60081 9.44058 8.47337 10.568C8.47337 10.568 8.47337 10.568 8.47337 10.568C8.47325 10.5681 7.10592 11.9357 9.58533 14.4151C12.0641 16.8939 13.4316 15.5279 13.4324 15.5271C13.4324 15.527 13.4324 15.5271 13.4325 15.527C14.5599 14.3996 16.2425 14.1123 17.5252 14.8281L18.9465 15.6213C20.8834 16.7023 21.1121 19.4185 19.4097 21.1209C18.3867 22.1439 17.1335 22.9399 15.7481 22.9924C14.7532 23.0302 13.4619 22.9444 11.9998 22.5251"
                          stroke="#71c491"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <a href="tel:(+806)0008899">(+806) 000 88 99</a>
                    </li>
                    <li>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.6 8.99922C6.6 9.44105 6.24183 9.79922 5.8 9.79922C5.35817 9.79922 5 9.44105 5 8.99922C5 8.55739 5.35817 8.19922 5.8 8.19922C6.24183 8.19922 6.6 8.55739 6.6 8.99922Z"
                          fill="#71c491"
                        />
                        <path
                          d="M9.8 8.99922C9.8 9.44105 9.44183 9.79922 9 9.79922C8.55817 9.79922 8.2 9.44105 8.2 8.99922C8.2 8.55739 8.55817 8.19922 9 8.19922C9.44183 8.19922 9.8 8.55739 9.8 8.99922Z"
                          fill="#71c491"
                        />
                        <path
                          d="M13 8.99922C13 9.44105 12.6418 9.79922 12.2 9.79922C11.7582 9.79922 11.4 9.44105 11.4 8.99922C11.4 8.55739 11.7582 8.19922 12.2 8.19922C12.6418 8.19922 13 8.55739 13 8.99922Z"
                          fill="#71c491"
                        />
                        <path
                          d="M13 2.07026C11.8233 1.38958 10.4571 1 9 1C4.58172 1 1 4.58172 1 9C1 10.2797 1.30049 11.4893 1.83477 12.562C1.97675 12.847 2.02401 13.1729 1.94169 13.4805L1.46521 15.2613C1.25836 16.0344 1.96561 16.7416 2.73868 16.5348L4.51951 16.0583C4.82715 15.976 5.15297 16.0233 5.43802 16.1652C6.51069 16.6995 7.72025 17 9 17C13.4183 17 17 13.4183 17 9C17 7.54285 16.6104 6.17669 15.9297 5"
                          stroke="#71c491"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <a href="mailto:contact@info.com">contact@info.com</a>
                    </li>
                    <li>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.69922 6.86317C3.69922 3.62503 6.51983 1 9.99922 1C13.4786 1 16.2992 3.62503 16.2992 6.86317C16.2992 10.0759 14.2885 13.8249 11.1513 15.1656C10.4199 15.4781 9.57849 15.4781 8.84716 15.1656C5.70996 13.8249 3.69922 10.0759 3.69922 6.86317Z"
                          stroke="#71c491"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M11.7992 7.3C11.7992 8.29411 10.9933 9.1 9.99922 9.1C9.00511 9.1 8.19922 8.29411 8.19922 7.3C8.19922 6.30589 9.00511 5.5 9.99922 5.5C10.9933 5.5 11.7992 6.30589 11.7992 7.3Z"
                          stroke="#71c491"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M18.0645 13.1504C18.6633 13.6926 19 14.3038 19 14.9504C19 17.1871 14.9706 19.0004 10 19.0004C5.02944 19.0004 1 17.1871 1 14.9504C1 14.3038 1.33671 13.6926 1.93552 13.1504"
                          stroke="#71c491"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <a
                        href="https://www.google.com/maps/place/Argentina,+Santiago+del+Estero+Province,+Argentina/@-28.9465488,-65.3732971,7.53z/data=!4m5!3m4!1s0x9436ede70248f47b:0x3bdbc4e928700c2a!8m2!3d-29.5355289!4d-62.2664853"
                        target="_blank"
                      >
                        1811 Silverside Rd, Wilmington, <br /> DE 19810, USA
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-7 col-12 ">
                <div className="tp-contact-input-wrapperrr p-relative">
                  <div className="tp-contact-shape">
                    <img src="/img/contact/shape-4-1.png" alt="" />
                  </div>
                  <div className="tp-contact-input-wrapper p-relative">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="tp-contact-input mb-20">
                          <input type="text" placeholder="Full name" />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="tp-contact-input mb-20">
                          <input type="email" placeholder="Email address" />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="tp-contact-select">
                          <div className="tp-select-icon">
                            <select>
                              <option>Hack Protection</option>
                              <option>Online Support</option>
                              <option>Live Security</option>
                              <option>Hack Protection</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="tp-contact-input mb-20">
                          <textarea placeholder="Enter your message"></textarea>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="tp-contact-btn">
                          <button
                            type="submit"
                            className="tp-btn-yellow-lg yellow-bg w-100"
                          >
                            Get a free consultation
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
}
