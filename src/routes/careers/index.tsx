
import ImgBreadcrumbShape2 from '~/media/assets/img/breadcrumb/breadcrumb-shape-2.png?jsx';
import ImgBreadcrumbShape1 from '~/media/assets/img/breadcrumb/breadcrumb-shape-1.png?jsx';
import { component$ } from '@builder.io/qwik';
import Footer_ from '~/components/footer_';
import Try_service from '~/components/try_service';
import type { DocumentHead } from '@builder.io/qwik-city';
import Open_positions from '~/components/open_positions';

export default component$(() => {
  return (
    <>
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
               <div class="breadcrumb__content text-center z-index-3 mb-60">
                  <h3 class="breadcrumb__title">Build Your Career With <br/> Fiqra Technologies</h3>
                  <div class="breadcrumb__text">
                     <p>Join a Team of Innovative Professionals </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

<div class="carrer-banner-area carrer-banner-space">
   <div class="container">
      <div class="row align-items-center">
         <div class="col-xl-3 col-lg-3 col-md-6">
            <div class="carrer-banner-img-item">
               <img src="/assets/img/career/image-1.png" alt=""/>
            </div>
         </div>
         <div class="col-xl-6 col-lg-6 col-md-6">
    <div class="carrer-banner-img-item parallax-main">
        <img src="/assets/img/career/image-234.png" class="parallax-img mobile-3-4-height" alt="" data-parallax='{"y": 300, "smoothness": 10}' />
    </div>
</div>

         <div class="col-xl-3 col-lg-3 d-none d-lg-block">
            <div class="carrer-banner-img-item mb-20">
               <img src="/assets/img/career/image-3.png" alt=""/>
            </div>
            <div class="carrer-banner-img-item">
               <img src="/assets/img/career/image-4.png" alt=""/>
            </div>
         </div>
      </div>
   </div>
</div>
<Open_positions/>
<Try_service/>
</main>
<Footer_/>
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