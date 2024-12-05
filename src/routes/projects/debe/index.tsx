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
                      <h3 class="breadcrumb__title">Responsive Web App Design</h3>
                   </div>
                </div>
             </div>
             <div class="row g-0 z-index-3">
                <div class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                   <div class="breadcrumb__client-info space-left-1">
                      <span>CLIENT</span>
                      <p>DEBE, <br/>
                         Tanzania</p>
                   </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                   <div class="breadcrumb__client-info space-left-2">
                      <span>Services</span>
                      <p>Online Business Listing<br/>
                      Platform</p>
                   </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                   <div class="breadcrumb__client-info space-left-3">
                      <span>Project Date</span>
                      <p>02nd August, 2024 <br/>
                         Release Started</p>
                   </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                   <div class="breadcrumb__client-info space-left-4">
                      <span>Live View</span>
                      <div class="breadcrumb__live-btn">
                         <a class="tp-btn-inner-border" href="https://debeapp.com/">See live <i class="fal fa-arrow-up"></i></a>
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
                   <img src="/assets/img/project/debe_main.png" alt=""/>
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
            <h4 class="pd-details-title">Debe App</h4>
            <p>Debe App is a platform designed to help users discover the best services and products in their area. Users can browse, review, and connect with top-rated businesses, making it easier to find what they need. Whether you're looking for restaurants, entertainment, or professional services, Debe App has you covered.</p>
        </div>
        <div class="pd-details-overview">
            <h4 class="pd-details-title">Overview</h4>
            <ul>
                <li>Discover top-rated businesses near you</li>
                <li>Read and write reviews</li>
                <li>Connect with local services and products</li>
                <li>Explore various categories like food, entertainment, and professional services</li>
            </ul>
            <p>Debe App offers a user-friendly interface that allows users to easily navigate and find the best services and products in their area. It's perfect for anyone looking to explore and connect with local businesses.</p>
        </div>
        <div class="pd-details-solution">
            <div class="pd-details-solution-img-box d-flex align-items-center">
                <div class="pd-details-solution-img mr-30">
                    <img src="/assets/img/project/debe_img2.png" alt="Debe App Solution 1"/>
                </div>
                <div class="pd-details-solution-img">
                    <img src="/assets/img/project/debe_img3.png" alt="Debe App Solution 2"/>
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
                        <p>Debe App provides a comprehensive solution for discovering and connecting with local businesses. Our innovative approach and dedication to user experience have resulted in a versatile and easy-to-use platform. Users can now find and review top-rated businesses with ease, enhancing their local experience.</p>
                        <p>Our team of experienced developers is committed to delivering top-notch services and ensuring user satisfaction. We continuously strive to exceed expectations and provide a seamless discovery experience.</p>
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