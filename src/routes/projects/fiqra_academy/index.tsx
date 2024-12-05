import { component$ } from '@builder.io/qwik';
import Footer_ from '~/components/footer_';
import RecentForm from '~/components/recent-form';
 
export default component$(() => {
  return (
    <main>

    <div class="breadcrumb__area breadcrumb-height-3 p-relative blue-bg-2 fix">
       <div class="breadcrumb__shape-1">
          <img src="/assets/img/breadcrumb/breadcrumb-shape-1.png" alt=""/>
       </div>
       <div class="breadcrumb__shape-2">
          <img src="/assets/img/breadcrumb/breadcrumb-shape-2.png" alt=""/>
       </div>
       <div class="container">
          <div class="breadcrumb__content-wrap">
             <div class="row justify-content-center">
                <div class="col-xl-12">
                   <div class="breadcrumb__content z-index-3 mb-60">
                      <div class="breadcrumb__text wow tpfadeIn" data-wow-duration=".9s" data-wow-delay=".6s">
                         <span>Development,  App Design</span>
                      </div>
                      <h3 class="breadcrumb__title">Web & Mobile App</h3>
                   </div>
                </div>
             </div>
             <div class="row g-0 z-index-3">
                <div class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                   <div class="breadcrumb__client-info space-left-1">
                      <span>CLIENT</span>
                      <p>Fiqra Technologies, <br/>
                         Tanzania</p>
                   </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                   <div class="breadcrumb__client-info space-left-2">
                      <span>Services</span>
                      <p>Web Development, Mobile <br/>
                         Development</p>
                   </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                   <div class="breadcrumb__client-info space-left-3">
                      <span>Project Date</span>
                      <p>15th July, 2024 <br/>
                         Release Started</p>
                   </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                   <div class="breadcrumb__client-info space-left-4">
                      <span>Project Date</span>
                      <div class="breadcrumb__live-btn">
                         <a class="tp-btn-inner-border" href="https://fiqra.io/">See live <i class="fal fa-arrow-up"></i></a>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>

    <div class="pd-thumb-area">
       <div class="container">
          <div class="row">
             <div class="col-12">
                <div class="pd-thumb">
                   <img src="/assets/img/project/fiqra_img1.png" alt=""/>
                </div>
             </div>
          </div>
       </div>
    </div>

    <div class="pd-details-area pt-100 pb-100">
       <div class="container">
          <div class="row g-0">
             <div class="col-xl-2 col-lg-2 social-box-pin">
                <div class="pd-details-social-box text-lg-center text-start p-relative">
                   <div class="pd-details-social-title">
                      <span>Share This <br/>Story</span>
                   </div>
                   <div class="pd-details-social">
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                      <a href="#"><i class="fab fa-vimeo-v"></i></a>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                      <a href="#"><i class="fab fa-linkedin-in"></i></a>
                   </div>
                </div>
             </div>
             <div class="col-xl-10 col-lg-10">
    <div class="pd-details-wrapper">
        <div class="pd-details-info">
            <h4 class="pd-details-title">Fiqra Academy</h4>
            <p>Fiqra Academy is a comprehensive digital skills edtech platform designed to empower individuals with future-ready technology skills. The platform offers a wide range of online courses, a vibrant community for peer interaction, and access to digital job opportunities, coaching, and mentorship. Fiqra Academy is available in three versions: web, Android, and iOS, ensuring accessibility and convenience for learners everywhere. The web version can be accessed at <a href="https://fiqra.academy/">https://fiqra.academy/</a>.</p>
        </div>
        <div class="pd-details-overview">
            <h4 class="pd-details-title">Overview</h4>
            <ul>
                <li>Comprehensive online learning video library</li>
                <li>Vibrant online community for peer interaction</li>
                <li>Access to digital job opportunities</li>
                <li>Coaching and mentorship opportunities</li>
                <li>Available on web, Android, and iOS</li>
            </ul>
            <p>Fiqra Academy aims to unlock the potential of young Africans by providing them with the necessary digital skills to build a brighter future. With its multi-platform availability, learners can access the platform from anywhere, at any time, making learning more flexible and accessible.</p>
        </div>
        <div class="pd-details-solution">
            <div class="pd-details-solution-img-box d-flex align-items-center">
                <div class="pd-details-solution-img mr-30">
                    <img src="/assets/img/project/fiqra_img2.png" alt="Fiqra Academy Solution 1"/>
                </div>
                <div class="pd-details-solution-img">
                    <img src="/assets/img/project/fiqra_img3.png" alt="Fiqra Academy Solution 2"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="pd-solution-title-box">
                        <h4 class="pd-details-title">Solution & Result</h4>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="pd-solution-paragraph">
                        <p>Fiqra Academy has successfully created a platform that empowers young people to achieve their full potential. Through its various programs, Fiqra Academy has recognized and celebrated the achievements of numerous young individuals, providing them with the support and resources they need to thrive. This has led to a more vibrant and dynamic youth community, contributing to the overall development and progress of the continent.</p>
                        <p>With ongoing initiatives and continuous support, Fiqra Academy continues to make a significant impact on the lives of young people, helping to shape a brighter future for Africa.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

          </div>
       </div>
    </div>
    <RecentForm/>
    <Footer_/>
 </main>
  );
});