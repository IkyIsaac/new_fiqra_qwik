
import ImgBreadcrumbShape2 from '~/media/assets/img/breadcrumb/breadcrumb-shape-2.png?jsx';
import ImgBreadcrumbShape1 from '~/media/assets/img/breadcrumb/breadcrumb-shape-1.png?jsx';
// import ImgTeyaMain from '~/media/assets/img/project/teya_main.png?jsx';
import ImgTeyaImg2 from '~/media/assets/img/project/teya_img2.png?jsx';
import ImgTeyaImg3 from '~/media/assets/img/project/teya_img3.png?jsx';import { component$ } from '@builder.io/qwik';
import Footer_ from '~/components/footer_';
import RecentForm from '~/components/recent-form';
 
export default component$(() => {
  return (
    <main>

    <div class="breadcrumb__area breadcrumb-height-3 p-relative blue-bg-2 fix">
       <div class="breadcrumb__shape-1">
          <ImgBreadcrumbShape1 alt=""/>
       </div>
       <div class="breadcrumb__shape-2">
          <ImgBreadcrumbShape2 alt=""/>
       </div>
       <div class="container">
          <div class="breadcrumb__content-wrap">
             <div class="row justify-content-center">
                <div class="col-xl-12">
                   <div class="breadcrumb__content z-index-3 mb-60">
                      <div class="breadcrumb__text wow tpfadeIn" data-wow-duration=".9s" data-wow-delay=".6s">
                         <span>Web Design</span>
                      </div>
                      <h3 class="breadcrumb__title">Website Design</h3>
                   </div>
                </div>
             </div>
             <div class="row g-0 z-index-3">
                <div class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                   <div class="breadcrumb__client-info space-left-1">
                      <span>CLIENT</span>
                      <p>Emerging Generation <br/>
                         Initiative</p>
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
                      <p>15th June, 2024 <br/>
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
                   <img src="/assets/img/project/teya_main.png" alt=""/>
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
            <h4 class="pd-details-title">TEYA - Tanzania Emerging Youth Awards</h4>
            <p>TEYA is dedicated to raising outstanding youth profiles, building capacity, and highlighting the contributions of young people towards developing an innovative, sustainable, and prosperous future for the United Republic of Tanzania. The platform provides opportunities for youth to showcase their talents and achievements, fostering a culture of excellence and growth.</p>
        </div>
        <div class="pd-details-overview">
            <h4 class="pd-details-title">Overview</h4>
            <ul>
                <li>Recognizing and celebrating youth achievements</li>
                <li>Building capacity through training and mentorship</li>
                <li>Encouraging innovation and entrepreneurship</li>
                <li>Creating a platform for youth to connect and collaborate</li>
            </ul>
            <p>TEYA offers various programs and initiatives aimed at empowering young people and providing them with the resources they need to succeed. By fostering a supportive environment, TEYA helps to cultivate the next generation of leaders and change-makers in Tanzania.</p>
        </div>
        <div class="pd-details-solution">
            <div class="pd-details-solution-img-box d-flex align-items-center">
                <div class="pd-details-solution-img mr-30">
                    <ImgTeyaImg2 alt="TEYA Solution 1"/>
                </div>
                <div class="pd-details-solution-img">
                    <ImgTeyaImg3 alt="TEYA Solution 2"/>
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
                        <p>TEYA has successfully created a platform that empowers young people to achieve their full potential. Through its various programs, TEYA has recognized and celebrated the achievements of numerous young individuals, providing them with the support and resources they need to thrive. This has led to a more vibrant and dynamic youth community in Tanzania, contributing to the country's overall development and progress.</p>
                        <p>With ongoing initiatives and continuous support, TEYA continues to make a significant impact on the lives of young people, helping to shape a brighter future for Tanzania.</p>
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