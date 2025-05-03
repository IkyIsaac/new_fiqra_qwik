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
                      <h3 class="breadcrumb__title">Mobile App Design</h3>
                   </div>
                </div>
             </div>
             <div class="row g-0 z-index-3">
                <div class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                   <div class="breadcrumb__client-info space-left-1">
                      <span>CLIENT</span>
                      <p>Shuu Company Ltd, <br/>
                         Tanzania</p>
                   </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                   <div class="breadcrumb__client-info space-left-2">
                      <span>Services</span>
                      <p>Food Delivery, <br/>
                         Logistics</p>
                   </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                   <div class="breadcrumb__client-info space-left-3">
                      <span>Project Date</span>
                      <p>25th August, 2024 <br/>
                         Release Started</p>
                   </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                   <div class="breadcrumb__client-info space-left-4">
                      <span>Project </span>
                      <div class="breadcrumb__live-btn">
                         <a class="tp-btn-inner-border" href="">See live <i class="fal fa-arrow-up"></i></a>
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
                   <img src="/assets/img/project/Shu_Display_Banner.png" alt=""/>
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
            <h4 class="pd-details-title">Shu Vendor, Shu Driver, and Shu User</h4>
            <p>The Shu suite consists of three interconnected apps designed to enhance logistics and user experience within a delivery system. Shu Vendor enables vendors to manage their inventory and orders efficiently. Shu Driver assists drivers in tracking routes, managing deliveries, and optimizing their schedules. Shu User provides a seamless experience for customers to place orders, track deliveries, and communicate with vendors and drivers.</p>
        </div>
        <div class="pd-details-overview">
            <h4 class="pd-details-title">Overview</h4>
            <ul>
                <li>Real-time order management</li>
                <li>Efficient route tracking for drivers</li>
                <li>Seamless communication between users, drivers, and vendors</li>
                <li>Enhanced user experience with intuitive interfaces</li>
            </ul>
            <p>Shu Vendor, Shu Driver, and Shu User apps are designed to work in harmony, ensuring that orders are processed smoothly from placement to delivery. The apps provide real-time updates and facilitate effective communication, making the delivery process efficient and transparent.</p>
        </div>
        <div class="pd-details-solution">
            <div class="pd-details-solution-img-box d-flex align-items-center">
                <div class="pd-details-solution-img mr-30">
                    <img src="/assets/img/project/shu_img2.png" alt="Shu App Solution 1"/>
                </div>
                <div class="pd-details-solution-img">
                    <img src="/assets/img/project/shuu_img33.png" alt="Shu App Solution 2"/>
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
                        <p>The Shu suite has revolutionized the delivery process for vendors, drivers, and customers. Vendors can now manage their inventory and orders in real-time, drivers can optimize their delivery routes and schedules, and customers enjoy a seamless ordering and delivery experience. This integrated system has significantly improved efficiency, customer satisfaction, and operational transparency.</p>
                        <p>With ongoing updates and enhancements, the Shu apps continue to evolve, providing even more features and improvements to ensure the best possible user experience for all parties involved.</p>
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