
import ImgBreadcrumbSub3 from '~/media/assets/img/breadcrumb/breadcrumb-sub-3.png?jsx';
import ImgShuuLogo from '~/media/assets/img/project/shuu_logo.png?jsx';
import ImgDebeLogo from '~/media/assets/img/project/debe_logo.png?jsx';
import ImgTeyaLogo from '~/media/assets/img/project/teya_logo.png?jsx';
import ImgFiqraLogo from '~/media/assets/img/project/fiqra_logo.png?jsx';import { component$ } from "@builder.io/qwik";
import Footer_ from "~/components/footer_";
import Try_service from "~/components/try_service";

export default component$(() => {
  return (
    <main>
      <div
        class="breadcrumb__area breadcrumb-height-2 breadcrumb-overlay p-relative fix"
        data-background="/assets/img/project/project-brdcrmb-bg.jpg"
      >
        <div class="breadcrumb__shape-2 z-index-4">
          <img src="/assets/img/breadcrumb/breadcrumb-shape-2-2.png" alt="" />
        </div>
        <div class="breadcrumb__shape-3 z-index-4">
          <img src="/assets/img/breadcrumb/breadcrumb-sub-2.png" alt="" />
        </div>
        <div class="breadcrumb__shape-4 z-index-4">
          <ImgBreadcrumbSub3 alt="" />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="breadcrumb__content z-index-3 text-center">
                <h3 class="breadcrumb__title tp-char-animation text-white">
                  Our Projects
                </h3>
                <div
                  class="breadcrumb__text wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".6s"
                >
                  <p>
                  We're passionate about creating user-friendly software that empowers businesses. Our dedicated team ensures exceptional quality and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-area pt-100 pb-90">
        <div class="container">
          {/* <div class="row">
             <div class="col-xl-12">
                <div class="portfolio-filter masonary-menu text-center mb-35">
                   <button data-filter="*" class="active"><span>All</span></button>
                   <button data-filter=".cat1"><span>Design Work</span></button>
                   <button data-filter=".cat2"><span>Branding</span></button>
                   <button data-filter=".cat3"><span>Development</span></button>
                   <button data-filter=".cat4"><span>Illusutration</span></button>
                   <button data-filter=".cat5"><span>App Design</span></button>
                </div>
             </div>
          </div> */}
          <div class="row grid">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid-item  cat1 cat4 cat3 cat5">
              <div class="inner-project-item mb-30">
                <div class="inner-project-img fix p-relative">
                  <img
                    class="w-100"
                    src="/assets/img/project/shuu_project.png"
                    alt=""
                    // style={{height:"370px", width:"323px"  }}
                  />
                  <div class="inner-project-brand">
                    <ImgShuuLogo
                      alt=""
                    />
                  </div>
                </div>
                <div class="inner-project-content">
                  <span class="inner-project-category-title">
                    Food and Logistics Delivery
                  </span>
                  <h4 class="inner-project-title">
                    <a href="/projects/shuu">Shuu Android App</a>
                  </h4>
                  <p>
                  A go-to app for hassle-free food delivery, offering real-time tracking, efficient routes, and seamless communication among clients,vendors and drivers.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid-item  cat4 cat2 cat1 ">
              <div class="inner-project-item  mb-30">
                <div class="inner-project-img fix p-relative">
                  < img src='/assets/img/project/fiqra_project.png' alt="" />
                  <div class="inner-project-brand">
                    <ImgFiqraLogo
                      class="w-100"
                      alt=""
                    />
                  </div>
                </div>
                <div class="inner-project-content">
                  <span class="inner-project-category-title">
                    Mobile And Web Application
                  </span>
                  <h4 class="inner-project-title">
                    <a href="/projects/fiqra_academy">Fiqra Academy</a>
                  </h4>
                  <p>
                   An e-learning platform for mastering in-demand tech skills, offering a wide range of online courses, a supportive community, and career-boosting opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid-item  cat3 cat4 cat5 ">
              <div class="inner-project-item mb-30">
                <div class="inner-project-img fix p-relative">
                  <img src='/assets/img/project/teya_project.png'
                    class="w-100"
                    alt=""
                  />
                  <div class="inner-project-brand">
                    <ImgTeyaLogo
                      alt=""
                    />
                  </div>
                </div>
                <div class="inner-project-content">
                  <span class="inner-project-category-title">
                    Website, Design
                  </span>
                  <h4 class="inner-project-title">
                    <a href="/projects/teya">TEYA Website And Voting System</a>
                  </h4>
                  <p>
                  A platform dedicated to empowering and celebrating the talents of Tanzania's youth developing an innovative, sustainable, and prosperous future
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid-item  cat4 cat2 cat1">
              <div class="inner-project-item mb-30">
                <div class="inner-project-img fix p-relative">
                  <img src='/assets/img/project/debe_project.png'
                    class="w-100"
                    alt=""
                  />
                  <div class="inner-project-brand">
                    <ImgDebeLogo
                      alt=""
                    />
                  </div>
                </div>
                <div class="inner-project-content">
                  <span class="inner-project-category-title">
                    Online Businesss Listing App
                  </span>
                  <h4 class="inner-project-title">
                    <a href="/projects/debe">Debe Application</a>
                  </h4>
                  <p>
                  Designed to help businesses enhance their online reputation
                  and connect with their customers through meaningful
                  feedback. Perfect for anyone looking to explore and connect with local businesses.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Try_service />
      <Footer_ />
    </main>
  );
});
