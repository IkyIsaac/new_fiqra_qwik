
import ImgAbout3 from '~/media/assets/img/about/about-3.jpeg?jsx';
import ImgAbout1 from '~/media/assets/img/about/about-1.png?jsx';
import ImgBreadcrumbShape1 from '~/media/assets/img/breadcrumb/breadcrumb-shape-1.png?jsx';
import ImgBrandInner8 from '~/media/assets/img/brand/brand-inner-8.png?jsx';
import ImgBrandInner3 from '~/media/assets/img/brand/brand-inner-3.png?jsx';
import ImgBrandInner2 from '~/media/assets/img/brand/brand-inner-2.png?jsx';
import ImgBrandInner7 from '~/media/assets/img/brand/brand-inner-7.png?jsx';
import ImgBrandInner6 from '~/media/assets/img/brand/brand-inner-6.png?jsx';
import ImgBrandInner9 from '~/media/assets/img/brand/brand-inner-9.png?jsx';
import ImgBrandInner11 from '~/media/assets/img/brand/brand-inner-11.png?jsx';
import ImgBrandInner4 from '~/media/assets/img/brand/brand-inner-4.png?jsx';
import ImgBrandInner1 from '~/media/assets/img/brand/brand-inner-1.png?jsx';
import ImgBrandInner5 from '~/media/assets/img/brand/brand-inner-5.png?jsx';
import ImgBrandInner0 from '~/media/assets/img/brand/brand-inner-0.png?jsx';
import ImgBrandInner10 from '~/media/assets/img/brand/brand-inner-10.png?jsx';
import ImgAboutBgShape from "~/media/assets/img/about/about-bg-shape.png?jsx";
import type { TeamMember } from "../team/teamLoader";
import { loadTeamMembers } from "../team/teamLoader";
import ImgBreadcrumbShape2 from "~/media/assets/img/breadcrumb/breadcrumb-shape-2.png?jsx";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Footer_ from "../../components/footer_";
import Try_service from "~/components/try_service";

export default component$(() => {
  const teamMembers: TeamMember[] = loadTeamMembers();

  return (
    <>
      <main>
        <div class="about-banner-area p-relative">
          <div class="about-shape-1 z-index-3">
            <ImgBreadcrumbShape1 alt="" />
          </div>
          <div class="about-shape-2 z-index-3">
            <ImgBreadcrumbShape2 alt="" />
          </div>
          <div class="about-banner p-relative z-index fix">
            <div class="container">
              <div class="row">
                <div class="col-xl-12">
                  <div class="about-banner-content z-index-5">
                    <h4
                      class="about-banner-title"
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
        <div class="about-img-area mb-100 z-index-3">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div
                  class="about-img about-img-height p-relative background-dark-overlay"
                  data-background="/assets/img/fiqra_team/teamb.jpg"
                >
                  <div class="about-img-content">
                    <h4
                      class="about-img-title"
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

        <div class="ab-brand-area">
          <div class="container">
            <div class="ab-brand-border-bottom pb-90">
              <div class="row">
                <div class="col-12">
                  <div class="ab-brand-section-box text-center mb-50">
                    <h4 class="ab-brand-title">
                    Partners & Trustees
                    </h4>
                    <p>Collaborating to deliver cutting-edge solutions that transform industries and empower communities.</p>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-xl-10">
                  <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-center">
                    <div
                      class="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".2s"
                    >
                      <div class="ab-brand-item mb-25">
                        <ImgBrandInner10 alt="" />
                      </div>
                    </div>
                    <div
                      class="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".2s"
                    >
                      <div class="ab-brand-item mb-25">
                        <ImgBrandInner0 alt="" />
                      </div>
                    </div>
                    <div
                      class="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".2s"
                    >
                      <div class="ab-brand-item mb-25">
                        <ImgBrandInner1 alt="" />
                      </div>
                    </div>
                    <div
                      class="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".4s"
                    >
                      <div class="ab-brand-item mb-25">
                        <ImgBrandInner2 alt="" />
                      </div>
                    </div>
                    <div
                      class="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".6s"
                    >
                      <div class="ab-brand-item mb-25">
                        <ImgBrandInner3 alt="" />
                      </div>
                    </div>
                    <div
                      class="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".8s"
                    >
                      <div class="ab-brand-item mb-25">
                        <ImgBrandInner4 alt="" />
                      </div>
                    </div>
                    <div
                      class="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".9s"
                    >
                      <div class="ab-brand-item mb-25">
                        <ImgBrandInner5 alt="" />
                      </div>
                    </div>
                    <div
                      class="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay="1s"
                    >
                      <div class="ab-brand-item mb-25">
                        <ImgBrandInner6 alt="" />
                      </div>
                    </div>
                    <div
                      class="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay="1.1s"
                    >
                      <div class="ab-brand-item mb-25">
                        <ImgBrandInner7 alt="" />
                      </div>
                    </div>
                    <div
                      class="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay="1.2s"
                    >
                      <div class="ab-brand-item mb-25">
                        <ImgBrandInner8 alt="" />
                      </div>
                    </div>
                    <div
                      class="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay="1s"
                    >
                      <div class="ab-brand-item mb-25">
                        <ImgBrandInner11 alt="" />
                      </div>
                    </div>
                    <div
                      class="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".2s"
                    >
                      <div class="ab-brand-item mb-25">
                        <ImgBrandInner9 alt="" />
                      </div>
                    </div>
                    <div
                      class="col wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay="1.3s"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ab-company-area pt-105 pb-100">
          <div class="container">
            <div class="row ab-company-section-space">
              <div class="col-xl-6">
                <div class="ab-company-section-box">
                  <h4 class="inner-section-subtitle">FIQRA IS ABOUT</h4>
                  <h3 class="tp-section-title">
                    Innovative <br />
                    Experience
                  </h3>
                </div>
              </div>
              <div
                class="col-xl-6 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div class="ab-company-right">
                  <div class="ab-company-section-text">
                    <p class="pb-10">
                    Fiqra Technologies is a leading force in digital transformation, dedicated to empowering businesses and organizations across both private and public sectors. We specialize in innovative software solutions, custom-built to address the unique challenges of each client, helping them navigate the rapidly evolving digital landscape. With a focus on cutting-edge advancements in technology, we offer comprehensive services including custom software development, ICT research, and strategic consulting.
                    </p>
                    <p class="pb-10">
                    At Fiqra Technologies, we are committed to driving the future of technology by combining innovation with strategic insights, enabling businesses to thrive in a competitive digital world. Our expertise ensures that our clients stay ahead with the right tools and solutions, tailored to fuel growth and sustainability.
                    </p>
                    <p>
                      <span>
                        From concept to launch, we deliver custom web and mobile
                        app solutions tailored to your unique business needs.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="row align-items-center">
              <div class="col-xl-4">
                <div class="ab-company-video">
                  <a
                    class="popup-video"
                    href="#"
                  >
                    <i class="fas fa-play"></i>
                  </a>
                  <span>Watch Demo</span>
                </div>
              </div>
              <div class="col-xl-8">
                <div class="row">
                  <div class="col-md-4 col-sm-4 mb-40">
                    <div class="ab-company-fun-fact-wrap d-flex justify-content-start">
                      <div class="ab-company-fun-fact">
                        <span>USED BY</span>
                        <h4>
                          11,000<em>+</em>
                        </h4>
                        <p>Creators</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4 mb-40">
                    <div class="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                      <div class="ab-company-fun-fact">
                        <span>VALUE</span>
                        <h4>
                          46<em>m</em>
                        </h4>
                        <p>Revenue per Year</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4 mb-40">
                    <div class="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                      <div class="ab-company-fun-fact">
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
            </div> */}
          </div>
        </div>

        <div class="tp-about__area tp-about__pt-pb pb-160">
          <div class="container">
            <div class="row align-items-center">
              <div
                class="col-xl-6 col-lg-6 wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".2s"
              >
                <div class="tp-about__img-wrapper text-center text-lg-end p-relative">
                  <div class="tp-about__bg-shape">
                    <ImgAboutBgShape alt="" />
                  </div>
                  <div class="tp-about__main-img z-index">
                    < img width="365" height="265" src="/assets/img/about/about-2.jpeg" alt="" />
                  </div>
                  <div class="tp-about__sub-img-1 d-none d-sm-block z-index-3">
                    <ImgAbout1 alt="" />
                  </div>
                  <div class="tp-about__sub-img-2 d-none d-sm-block">
                    <ImgAbout3 alt="" />
                  </div>
                  <div class="tp-about__sub-img-3 d-none d-sm-block z-index-3">
                    <img src="/assets/img/about/about-5.png" alt="" />
                  </div>
                </div>
              </div>
              <div
                class="col-xl-6 col-lg-6 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".6s"
              >
                <div class="tp-about__right">
                  <div class="tp-about__section-box">
                    {/* <h4 class="tp-section-subtitle">OVER 1K+ CLIENTS</h4> */}
                    <h3 class="tp-section-title mb-15">We provide support</h3>
                    <p>
                      At Fiqra Technologies, we offer a comprehensive range of
                      services, each designed to meet the demands of today’s
                      fast-paced, digital-first economy. We focus on delivering
                      solutions that not only drive business growth but also
                      foster long-term success.
                    </p>
                  </div>
                  <div class="tp-about__list">
                    <ul>
                      <li>
                        <i class="fal fa-check"></i>Web Development
                      </li>
                      <li>
                        <i class="fal fa-check"></i>Mobile App Development
                      </li>
                      <li>
                        <i class="fal fa-check"></i>Social Media Marketing
                      </li>
                    </ul>
                  </div>
                  <div class="tp-about__btn">
                    <a
                      class="tp-btn tp-btn-inner tp-btn-hover alt-color-black"
                      href="/about"
                    >
                      <span>About Us</span>
                      <b></b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tp-team-area grey-bg pt-120 pb-95">
          <div class="container">
            <div class="tp-team-section-wrapper tp-team-inner-section mb-70">
              <div class="row align-items-end">
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="tp-team-section-box text-center text-sm-start">
                    <h5 class="inner-section-subtitle pb-10">THE TEAM</h5>
                    <h3 class="tp-section-title mb-0 text-black">
                      Our Leaders
                    </h3>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="tp-team-top-content text-center text-md-end">
                    <a
                      class="tp-btn-inner tp-btn-hover alt-color-orange"
                      href="/team"
                    >
                      <span>View All</span>
                      <b></b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              {teamMembers.slice(0, 4).map((member) => (
                <div
                  key={member.id}
                  class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-70 tp-border-after-4 team-inner-border-right"
                >
                  <div class="tp-team-item tp-team-inner-title-color text-center z-index">
                    <div class="tp-team-img">
                      <img
                        width="360"
                        height="190"
                        src={member.images || "assets/img/default.jpg"}
                        alt={member.name}
                      />
                    </div>
                    <div class="tp-team-content">
                      <h4 class="tp-team-title-sm">
                        <a href={`/team/${member.id}`}>{member.name}</a>
                      </h4>
                      <span>{member.nickname || "N/A"}</span>
                    </div>
                    <div class="tp-team-social">
                      <a
                        class="icon-color-1"
                        href={member.social_media.facebook || "#"}
                        aria-disabled={!member.social_media.facebook}
                        onClick$={(e) => {
                          if (!member.social_media.facebook) e.preventDefault();
                        }}
                      >
                        <i class="fab fa-facebook-f"></i>
                        <span></span>
                      </a>

                      <a
                        class="icon-color-2"
                        href={member.social_media.instagram || "#"}
                        aria-disabled={!member.social_media.instagram}
                        onClick$={(e) => {
                          if (!member.social_media.instagram)
                            e.preventDefault();
                        }}
                      >
                        <i class="fab fa-instagram"></i>
                        <span></span>
                      </a>

                      <a
                        class="icon-color-3"
                        href={member.social_media.x || "#"}
                        aria-disabled={!member.social_media.x}
                        onClick$={(e) => {
                          if (!member.social_media.x) e.preventDefault();
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          class="bi bi-twitter-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                        <span></span>
                      </a>

                      <a
                        class="icon-color-4"
                        href={member.social_media.linkedin || "#"}
                        aria-disabled={!member.social_media.linkedin}
                        onClick$={(e) => {
                          if (!member.social_media.linkedin) e.preventDefault();
                        }}
                      >
                        <i class="fab fa-linkedin-in"></i>
                        <span></span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div class="journey-area p-relative fix">
          <div class="journey-grey-bg grey-bg"></div>
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="journey-section-box">
                  <h5 class="inner-section-subtitle pb-10">WHY US</h5>
                  <h3 class="ab-brand-title pb-0 mb-0">
                    Why Fiqra Technologies
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* <JourneySlider/> */}
          <div class="container-fluid g-0">
            <div class="row g-0">
              <div class="col-xl-12">
                <div class="journey-slider-wrapper">
                  <div class="swiper-container journey-slider-active">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="journey-slider-item p-relative">
                          <div class="journey-stroke-text">
                            <h2>01</h2>
                          </div>
                          <div class="journey-slider-meta">
                            <span>Innovative</span>
                          </div>
                          <div class="journey-slider-content">
                            <h4 class="journey-slider-title">
                              Innovation <br />
                              at the Core
                            </h4>
                            <p>
                              We don’t just follow trends—we set them <br />
                              With our finger on the pulse of technological
                              advancement, we continually innovate to deliver{" "}
                              <br />
                              cutting-edge solutions.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="journey-slider-item p-relative">
                          <div class="journey-stroke-text">
                            <h2>02</h2>
                          </div>
                          <div class="journey-slider-meta">
                            <span>Flexible</span>
                          </div>
                          <div class="journey-slider-content">
                            <h4 class="journey-slider-title">
                              Tailored <br />
                              Solutions{" "}
                            </h4>
                            <p>
                              Every business is unique, and we ensure that each
                              solution we offeris customized to meet the
                              specific needs of our clients, delivering value
                              that aligns with their goals
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="journey-slider-item p-relative">
                          <div class="journey-stroke-text">
                            <h2>03</h2>
                          </div>
                          <div class="journey-slider-meta">
                            <span>Collaborative</span>
                          </div>
                          <div class="journey-slider-content">
                            <h4 class="journey-slider-title">
                              End-to-End <br />
                              Support
                            </h4>
                            <p>
                              From consultation up to develo-
                              <br />
                              pment and implementation, we provide continuous
                              support to our clients, ensuring they achieve
                              success and maintain a competitive edge in the
                              market
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="journey-slider-item p-relative">
                          <div class="journey-stroke-text">
                            <h2>04</h2>
                          </div>
                          <div class="journey-slider-meta">
                            <span>Quality</span>
                          </div>
                          <div class="journey-slider-content">
                            <h4 class="journey-slider-title">
                              Commitment <br />
                              to Excellence
                            </h4>
                            <p>
                            At Fiqra Technologies, quality isn’t just a goal; it’s a guarantee. We are committed to delivering exceptional results, driven by a passion for excellence in every project.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <div class="swiper-slide">
                        <div class="journey-slider-item p-relative">
                          <div class="journey-stroke-text">
                            <h2>05</h2>
                          </div>
                          <div class="journey-slider-meta">
                            <span>Present</span>
                          </div>
                          <div class="journey-slider-content">
                            <h4 class="journey-slider-title">
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
                      <div class="swiper-slide">
                        <div class="journey-slider-item p-relative">
                          <div class="journey-stroke-text">
                            <h2>06</h2>
                          </div>
                          <div class="journey-slider-meta">
                            <span>OCT 2020</span>
                          </div>
                          <div class="journey-slider-content">
                            <h4 class="journey-slider-title">
                              Official <br />
                              Beta Launch
                            </h4>
                            <p>
                              We envision sales teams having the tools <br />
                              and talent they need to make remote <br /> work.
                            </p>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div class="tp-scrollbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="job-area pt-120 pb-120">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="job-section-box text-center mb-40">
                  <h4 class="inner-section-subtitle">Current Positions</h4>
                  <h3 class="tp-section-title">
                    Join our Growing Team <br />
                    of Doers.
                  </h3>
                </div>
              </div>
            </div>
            <div class="job-post-box">
         <div class="row align-items-center">
            <div class="col-lg-5 col-md-4">
               <div class="job-post-info d-flex justify-content-start align-items-center">
                  <div class="job-post-category">
                     <span class="pb-5">E-Learning Developer and<br/>Instructional Designer</span>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-md-5">
               <div class="job-post-wrapper d-flex align-items-center">
                  <div class="job-post-time d-flex align-items-center">
                     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.75C13.2802 16.75 16.75 13.2802 16.75 9C16.75 4.71979 13.2802 1.25 9 1.25C4.71979 1.25 1.25 4.71979 1.25 9C1.25 13.2802 4.71979 16.75 9 16.75Z" stroke="#5F6168" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 5.7998V9.9998L11.8 11.3998" stroke="#5F6168" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                     <span>Contract</span>
                  </div>
                  <div class="job-post-location d-flex align-items-center">
                     <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7.51463C1 3.9167 4.13401 1 8 1C11.866 1 15 3.9167 15 7.51463C15 11.0844 12.7658 15.2499 9.28007 16.7396C8.46748 17.0868 7.53252 17.0868 6.71993 16.7396C3.23416 15.2499 1 11.0844 1 7.51463Z" stroke="#5F6168" stroke-width="1.5"/>
                        <path d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z" stroke="#5F6168" stroke-width="1.5"/>
                     </svg>
                     <span>Dar es Salaam, Tanzania</span>
                  </div>
               </div>
            </div>
            <div class="col-lg-3 col-md-3">
               <div class="job-post-apply-btn text-start text-md-end">
                  <a class="tp-btn-inner tp-btn-hover alt-color-orange" href="/career-details"><span>Apply</span> <b></b></a>
               </div>
            </div>
         </div>
      </div>
          </div>
        </div>
        <Try_service />
      </main>
      <Footer_ />
    </>
  );
});

export const head: DocumentHead = {
  title: "Fiqra Technologies",
  meta: [
    {
      name: "Fiqra Technologies",
      content: "Where Indispensable Talents Emerge",
    },
  ],
};
