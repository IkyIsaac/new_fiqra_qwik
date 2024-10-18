
import ImgBlogImage from '~/media/assets/img/blog/blog-image.png?jsx';import ImgHeroSliderIcon1 from "~/media/assets/img/hero/hero-slider-icon-1.png?jsx";
import ImgPlatform1 from "~/media/assets/img/payment/platform-1.png?jsx";
import ImgMobile from "~/media/assets/img/service/mobile.png?jsx";
import ImgEdu from "~/media/assets/img/service/edu.png?jsx";
import ImgWeb from "~/media/assets/img/service/web.png?jsx";
import ImgCustomers from "~/media/assets/img/service/customers.png?jsx";
import ImgServiceShapeRight from "~/media/assets/img/service/service-shape-right.png?jsx";
import ImgImage01 from "~/media/assets/img/brand/image_01.png?jsx";
import ImgAbout43 from "~/media/assets/img/about/about-4-3.png?jsx";
import ImgAbout41 from "~/media/assets/img/about/about-4-1.png?jsx";
import ImgHero42 from "~/media/assets/img/hero/hero-4-2.png?jsx";
import ImgHeroShape41 from "~/media/assets/img/hero/hero-shape-4-1.png?jsx";
import ImgAbout42 from "~/media/assets/img/about/about-4-2.png?jsx";
import ImgHero43 from "~/media/assets/img/hero/hero-4-3.png?jsx";
import ImgHero45 from "~/media//assets/img/hero/hero-4-5.png?jsx";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import  Header  from "../components/header"
import Footer from "../components/footer";
import ContactForm from "../components/contact-form"
export default component$(() => {
  return (
    <>
      {/* <Header/> */}
      <main class="fix">
        <div class="tp-hero-area tp-hero-overlay blue-bg pt-200 pb-115 p-relative">
          <div
            class="tp-hero-4-shape-img  wow tpfadeLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <ImgHeroShape41 alt="" />
          </div>
          <div class="tp-hero-glob-img">
            <ImgHero43 alt="" />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xl-7 col-lg-7">
                <div class="tp-hero-4-section-box pt-10 z-index-3">
                  <h5 class="tp-section-subtitle-4 tp-char-animation">
                    {" "}
                    Amplify Business Impact with our Innovative Software
                    Solutions
                  </h5>
                  <h3 class="tp-hero-title-4 pb-35 tp-char-animation ">
                    {" "}
                    Lead the Digital Revolution
                  </h3>
                  <a
                    class="tp-btn-yellow-border wow tpfadeRight"
                    data-wow-duration=".9s"
                    data-wow-delay=".7s"
                    href="#" >
                    <span>
                      Get in Touch<i class="far fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5">
                <div class="tp-hero-4-img-wrapper p-relative">
                  <div class="tp-hero-4-main-img text-center z-index-3">
                    <ImgHero45 alt="" />
                  </div>
                  <div class="tp-hero-4-sub-img z-index-3">
                    <ImgHero42 alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                   {/* Trusted By */}
        <div class="tp-barnd-area tp-barnd-plr blue-bg z-index-3 fix">
          <div class="tp-barnd-main-wrapper p-relative">
            <div class="tp-barnd-shape-1">
              <ImgImage01 alt="" />
            </div>
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xl-4 col-lg-4">
                  <div class="tp-barnd-left-item d-flex align-items-center">
                    <div class="tp-barnd-icon">
                      <ImgHeroSliderIcon1 alt="" />
                    </div>
                    <h5 class="tp-barnd-title-sm">Trusted by:</h5>
                  </div>
                </div>
                <div class="col-xl-8 col-lg-8">
                  <div class="tp-barnd-slider-wrapper">
                    <div class="tp-barnd-slider-active p-relative">
                      <div class="tp-brand-item">
                        <img width="160" height="80" src="/assets/img/hero/mcard.png" alt="" />
                      </div>
                      <div class="tp-brand-item">
                        <img width="160" height="80" src="/assets/img/hero/sc.png" alt="" />
                      </div>
                      <div class="tp-brand-item">
                        <img width="160" height="64"
                          src="/assets/img/hero/hero-slider-icon-2.png"
                          alt=""
                        />
                      </div>
                      <div class="tp-brand-item">
                        <img width="160" height="64"
                          src="/assets/img/hero/hero-slider-icon-3.png"
                          alt=""
                        />
                      </div>
                      <div class="tp-brand-item">
                        <img width="160" height="64"
                          src="/assets/img/hero/hero-slider-icon-4.png"
                          alt=""
                        />
                      </div>
                      <div class="tp-brand-item">
                        <img width="160" height="64"
                          src="/assets/img/hero/hero-slider-icon-5.png"
                          alt=""
                        />
                      </div>
                      <div class="tp-brand-item">
                        <img width="160" height="64"
                          src="/assets/img/hero/hero-slider-icon-6.png"
                          alt=""
                        />
                      </div>
                      <div class="tp-brand-item">
                        <img width="160" height="64"
                          src="/assets/img/hero/hero-slider-icon-7.png"
                          alt=""
                        />
                      </div>
                      <div class="tp-brand-item">
                        <img width="160" height="64"
                          src="/assets/img/hero/hero-slider-icon-8.png"
                          alt=""
                        />
                      </div>
                      <div class="tp-brand-item">
                        <img width="160" height="64"
                          src="/assets/img/hero/hero-slider-icon-9.png"
                          alt=""
                        />
                      </div>
                      <div class="tp-brand-item">
                        <img width="160" height="64"
                          src="/assets/img/hero/hero-slider-icon-10.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tp-service-area blue-bg p-relative pt-115 pb-105">
          <div class="tp-service-shape-right z-index">
            <ImgServiceShapeRight alt="" />
          </div>
          <div class="container">
            <div class="row align-items-end mb-60">
              <div class="col-xl-6 col-lg-6">
                <div class="tp-service-section-four">
                  <h5 class="tp-section-subtitle-4 pb-10">WHAT WE DO</h5>
                  <h3 class="tp-section-title-4">Our Services</h3>
                </div>
              </div>
              <div
                class="col-xl-6 col-lg-6  wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div class="tp-service-sction-content pb-15 d-flex justify-content-md-start justify-content-end">
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
              class="tp-service-4-border-top  wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-1">
                  <div class="tp-service-4-item z-index">
                    <div class="tp-service-4-icon">
                      <ImgWeb alt="" />
                    </div>
                    <div class="tp-service-4-content">
                      <span>Web Development</span>
                      <h4 class="tp-service-4-title">
                        <a href="#">Custom Web Development</a>
                      </h4>
                      {/* <a class="tp-btn-service" href="#">Learn More</a> */}
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-2">
                  <div class="tp-service-4-item z-index">
                    <div class="tp-service-4-icon">
                      <ImgCustomers alt="" />
                    </div>
                    <div class="tp-service-4-content">
                      <span>Digital Marketing</span>
                      <h4 class="tp-service-4-title">
                        <a href="#">Bringing Customers to You</a>
                      </h4>
                      {/* <a class="tp-btn-service" href="#">Learn More</a> */}
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-3">
                  <div class="tp-service-4-item z-index">
                    <div class="tp-service-4-icon">
                      <ImgEdu alt="" />
                    </div>
                    <div class="tp-service-4-content">
                      <span>Fiqra Academy LMS</span>
                      <h4 class="tp-service-4-title">
                        <a href="#">Creating Digital Leaders</a>
                      </h4>
                      {/* <a class="tp-btn-service" href="#">Learn More</a> */}
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-">
                  <div class="tp-service-4-item z-index">
                    <div class="tp-service-4-icon">
                      <ImgMobile alt="" />
                    </div>
                    <div class="tp-service-4-content">
                      <span>Mobile App Development</span>
                      <h4 class="tp-service-4-title">
                        <a href="#"> Mobile Apps Development</a>
                      </h4>
                      {/* <a class="tp-btn-service" href="#">Learn More</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tp-about-area pb-135 blue-bg p-relative">
          <div class="tp-about-top-img-2">
            <ImgAbout43 alt="" />
          </div>
          <div class="container">
            <div class="row align-items-center">
              <div
                class="col-xl-6 col-lg-6 wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div class="tp-about-left-img text-md-center p-relative text-start z-index">
                  <ImgAbout41 alt="" />
                  <div class="tp-about-top-img">
                    <ImgAbout42 alt="" />
                  </div>
                </div>
              </div>
              <div
                class="col-xl-6 col-lg-6 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div class="tp-security-section-wrapper">
                  <div class="tp-security-section-box mb-45">
                    <h5 class="tp-section-subtitle-4 pb-10">Who we are</h5>
                    <h3 class="tp-section-title-4 pb-25">
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
                  <div class="tp-security-feature">
                    <ul>
                      <li>
                        <i class="far fa-check"></i>High-Performance <br />{" "}
                        Solutions
                      </li>
                      <li>
                        <i class="far fa-check"></i>Award-Winning <br />{" "}
                        Company.
                      </li>
                      <li>
                        <i class="far fa-check"></i>Innovative <br />{" "}
                        Experience.
                      </li>
                    </ul>
                  </div>
                  {/* <div class="tp-security-btn">
                    <a class="tp-btn-yellow-border" href="#">
                      About Us <i class="far fa-angle-right"></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tp-platform-area border-tb blue-bg pt-115 pb-105 p-relative z-index">
          <div class="tp-platform-bg-shape">
            <img src="/assets/img/Platform/p-bg.png" alt="" />
          </div>
          <div class="container">
            <div class="row align-items-end mb-40">
              <div class="col-xl-7 col-lg-6">
                <div class="tp-platform-section-box">
                  <h5 class="tp-section-subtitle-4 pb-10">What we offer</h5>
                  <h3 class="tp-section-title-4">Solutions for you.</h3>
                </div>
              </div>
              <div
                class="col-xl-5 col-lg-6  wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div class="tp-platform-text">
                  <p>
                    Explore how Fiqra Technologies can help you to grow your
                    business continuously.
                  </p>
                </div>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-2 d-none d-xl-block">
                <div class="tp-platform-img-box">
                  <ImgPlatform1 alt="" />
                </div>
              </div>
              <div class="col-xl-10 col-lg-12">
                <div class="row-custom-wrapper">
                  <div class="row-custom">
                    <div class="col-custom active">
                      <div class="tp-panel-item">
                        <div class="tp-panel-content">
                          <span>01.</span>
                          <h4 class="tp-panel-title child-one">
                            Software Development
                          </h4>
                        </div>
                      </div>
                      <div class="tp-panel-item-2">
                        <div class="tp-panel-content-2">
                          <span>01.</span>
                          <h4 class="tp-panel-title-2">Software Development</h4>
                          <p>
                            Whether it is a consumer app or a disruptive
                            enterprise-class solution, we will manage the full
                            mobile app development process, from inspiration and
                            concept to delivery and continuous maintenance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-custom">
                      <div class="tp-panel-item">
                        <div class="tp-panel-content">
                          <span>02.</span>
                          <h4 class="tp-panel-title child-two">
                            UI & UX Design
                          </h4>
                        </div>
                      </div>
                      <div class="tp-panel-item-2">
                        <div class="tp-panel-content-2">
                          <span>02.</span>
                          <h4 class="tp-panel-title-2">UI & UX Design</h4>
                          <p>
                            At Fiqra Technologies, we provide innovative UI and
                            UX design services with the goal of delivering an
                            outstanding finished product on time. Through an
                            innovative design process, our in-house creative
                            unit functions as a dedicated design studio within a
                            comprehensive software company.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-custom">
                      <div class="tp-panel-item">
                        <div class="tp-panel-content">
                          <span>03.</span>
                          <h4 class="tp-panel-title child-three">
                            Digital <br /> Marketing
                          </h4>
                        </div>
                      </div>
                      <div class="tp-panel-item-2">
                        <div class="tp-panel-content-2">
                          <span>03.</span>
                          <h4 class="tp-panel-title-2">Digital Marketing</h4>
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
                    <div class="col-custom">
                      <div class="tp-panel-item">
                        <div class="tp-panel-content">
                          <span>04.</span>
                          <h4 class="tp-panel-title child-four">
                            Fiqra Academy
                          </h4>
                        </div>
                      </div>
                      <div class="tp-panel-item-2">
                        <div class="tp-panel-content-2">
                          <span>04.</span>
                          <h4 class="tp-panel-title-2">Fiqra Academy</h4>
                          <p>
                            It's not the usual e-Learning platform. It is a
                            platform for rebellious game changers and
                            professional knowledge sharers. Invest in your
                            personal learning journey or upskill your entire
                            organization by studying future-ready technology
                            skills and more.
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
        <div class="tp-team-area blue-bg pb-95 pt-115">
          <div class="container">
            <div class="tp-team-section-wrapper mb-70">
              <div class="row align-items-end">
                <div class="col-xl-6 col-lg-6">
                  <div class="tp-team-section-box">
                    <h5 class="tp-section-subtitle-4 pb-10">OUR TEAM</h5>
                    {/* <h3 class="tp-section-title-4">Our Leaders</h3> */}
                  </div>
                </div>
                <div
                  class="col-xl-6 col-lg-6  wow tpfadeRight"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div class="tp-team-top-content d-flex justify-content-md-start justify-content-end">
                    {/* <p>
                      Our clients are the companies and startups who <br /> make
                      the world go round,!
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="tp-cta-area p-relative">
                <div class="tp-cta-grey-bg grey-bg-2"></div>
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <div
                        class="tp-cta-bg background-container"
                        // data-background="/assets/img/fiqra_team/team-bg.png"
                      >
                        <div class="tp-cta-content tp-inner-font text-center">
                          <h3 class="tp-section-title text-white">
                            The Vanguard!
                          </h3>
                          <p class="opacity-1">
                            Experience and Dedication driving our mission
                          </p>
                          <a
                            class="tp-btn-yellow tp-btn-hover alt-color-white d-none d-md-inline-block"
                            href="/team"
                          >
                            <span>Meet the Team</span>
                            <b></b>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog */}
        <div class="tp-blog-area blue-bg pb-90">
          <div class="container">
            <div class="row align-items-end tp-blog-four-section-space">
              <div class="col-xl-6 col-lg-6">
                <div class="tp-blog-four-section-box">
                  <h5 class="tp-section-subtitle-4 pb-10">News Feeds</h5>
                  <h3 class="tp-section-title-4">Blog & Insights</h3>
                </div>
              </div>
              <div
                class="col-xl-6 col-lg-6 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div class="tp-blog-four-btn text-start text-lg-end">
                  <a
                    class="tp-btn-yellow-border"
                    href="https://fiqra.academy/blog"
                  >
                    Show More <i class="far fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col-xl-6 col-lg-6 col-md-6 mb-40 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div class="tp-blog-four-item p-relative fix">
                  <div class="tp-blog-four-img fix ">
                    <a href="https://fiqra.academy/blog/Reflecting-on-Our-Unforgettable-Experience-at-the-MasterCard-Edtech-Conference-in-Abuja-Nigeria">
                    <img
                        src="/assets/img/blog/abuja1.png"
                        class="pic-size"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="tp-blog-four-content-wrapper">
                    <div class="tp-blog-four-meta">
                      <span class="child-1">Blog</span>
                      <span class="child-2">10 min</span>
                    </div>
                    <div class="tp-blog-four-info">
                      <h4 class="tp-blog-four-title-sm">
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
                    <div class="tp-blog-four-btn">
                      <a
                        class="tp-btn-service"
                        href="https://fiqra.academy/blog/Reflecting-on-Our-Unforgettable-Experience-at-the-MasterCard-Edtech-Conference-in-Abuja-Nigeria"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-xl-6 col-lg-6 col-md-6 mb-40 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div class="tp-blog-four-item fix">
                  <div class="tp-blog-four-img fix">
                    <a href="https://fiqra.academy/blog/Unleashing-Success-in-2024-Master-Your-Goals-with-7-ChatGPT-Powered-Prompts">
                      <ImgBlogImage alt="" />
                    </a>
                  </div>
                  <div class="tp-blog-four-content-wrapper">
                    <div class="tp-blog-four-meta">
                      <span class="child-1">Blog</span>
                      <span class="child-2">24 min</span>
                    </div>
                    <div class="tp-blog-four-info">
                      <h4 class="tp-blog-four-title-sm">
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
                    <div class="tp-blog-four-btn">
                      <a
                        class="tp-btn-service"
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

      <ContactForm/>
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Fiqra Technologies",
  meta: [
    {
      name: "Fiqra Tecnologies",
      content: "Where Innovative Talents Emerge",
    },
  ],
};
