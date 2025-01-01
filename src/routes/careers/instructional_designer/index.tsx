
import ImgBreadcrumbShape1 from '~/media/assets/img/breadcrumb/breadcrumb-shape-1.png?jsx';
import ImgBreadcrumbShape2 from '~/media/assets/img/breadcrumb/breadcrumb-shape-2.png?jsx';
import ImgBreadcrumbSub1 from '~/media/assets/img/breadcrumb/breadcrumb-sub-1.png?jsx';
import ImgBreadcrumb3 from '~/media/assets/img/breadcrumb/breadcrumb-3.png?jsx';
import { component$ } from '@builder.io/qwik';
import Footer_ from '~/components/footer_';
import Try_service from '~/components/try_service';
import Career_form from '../career_form';
import Open_positions from '~/components/open_positions';

export default component$(() => {
  return (
    <>
<main>
<div class="breadcrumb__area breadcrumb-height p-relative blue-bg-2">
   <div class="breadcrumb__shape-1">
      <ImgBreadcrumbShape1 alt=""/>
   </div>
   <div class="breadcrumb__shape-2">
      <ImgBreadcrumbShape2 alt=""/>
   </div>
   <div class="container">
      <div class="row">
         <div class="col-xl-8 col-lg-7">
            <div class="breadcrumb__content z-index-3">
               <h3 class="breadcrumb__title tp-char-animation">Opportunity Snapshot</h3>
               <div class="breadcrumb__list wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".4s">
                  <span class="child-one"><a href="/">Home</a></span>
                  <span class="dvdr"><i class="fal fa-angle-right"></i></span>
                  <span class="child-one"><a href="/careers">Careers page</a></span>
                  <span class="dvdr"><i class="fal fa-angle-right"></i></span>
                  <span>Role Overview</span>
               </div>
            </div>
         </div>
         <div class="col-xl-4 col-lg-5 col-lg-4 text-center text-md-end">
            <div class="breadcrumb__img p-relative text-start z-index">
               <ImgBreadcrumb3 class="z-index-3" alt=""/>
               <div class="breadcrumb__sub-img wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".4s" >
                  <ImgBreadcrumbSub1 alt=""/>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

<div class="career-details-area career-border-bottom pt-110 pb-110">
   <div class="container">
      <div class="row align-content-start">
         <div class="col-xl-7 col-lg-7">
            <div class="career-details-wrapper">
               <div class="career-details-title-box">
                  <span>Designer</span>
                  <h4 class="career-details-title">E-Learning Developer and <br/><br/>Instructional Designer</h4>
               </div>
               <div class="career-details-location-box">
                  <span>
                     <svg width="15" height="17" viewBox="0 0 15 17" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M1 7.10747C1 3.73441 3.93813 1 7.5625 1C11.1869 1 14.125 3.73441 14.125 7.10747C14.125 10.4541 12.0305 14.3593 8.76256 15.7558C8.00076 16.0814 7.12424 16.0814 6.36244 15.7558C3.09452 14.3593 1 10.4541 1 7.10747Z"
                           stroke="#5F6168" stroke-width="1.5" />
                        <path
                           d="M9.4375 7.56274C9.4375 8.59828 8.59803 9.43774 7.5625 9.43774C6.52697 9.43774 5.6875 8.59828 5.6875 7.56274C5.6875 6.52721 6.52697 5.68774 7.5625 5.68774C8.59803 5.68774 9.4375 6.52721 9.4375 7.56274Z"
                           stroke="#5F6168" stroke-width="1.5" />
                     </svg>
                     Tanzania - Dar es Salaam
                  </span>
                  <span>
                     <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M8.5 15.75C12.5041 15.75 15.75 12.5041 15.75 8.5C15.75 4.49594 12.5041 1.25 8.5 1.25C4.49594 1.25 1.25 4.49594 1.25 8.5C1.25 12.5041 4.49594 15.75 8.5 15.75Z"
                           stroke="#5F6168" stroke-width="1.5" stroke-linecap="round"
                           stroke-linejoin="round" />
                        <path d="M8.5 5.52838V9.42838L11.1 10.7284" stroke="#5F6168" stroke-width="1.5"
                           stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                     Contract
                  </span>
                  <span>Senior</span>
               </div>
               <div class="career-details-job-responsiblity mb-45">
                  <h4 class="career-details-title-sm">Position Overview</h4>
                  <p>We are seeking a talented and experienced E-Learning Developer with Instructional Design expertise. In this role, you will collaborate with subject matter experts (SMEs), course creators, and our internal team to design and develop interactive and engaging e-learning experiences. You will be required to create instructional materials and content that cater to various learning styles. Additionally, you will work closely with subject matter experts (SMEs) to translate complex concepts into effective and visually appealing learning solutions.</p>
               </div>
               <div class="career-details-job-responsiblity mb-45">
                  <h4 class="career-details-title-sm">Key Responsibilities</h4>
                  <div class="career-details-job-list">
                     <ul>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Design, develop, and implement e-learning courses, using a blend of instructional design principles and modern e-learning technologies.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Collaborate with subject matter experts (SMEs) and stakeholders to analyze training needs, gather content and identify learning objectives.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Create storyboards, scripts, and prototypes for interactive e-learning courses.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Develop high-quality multimedia learning content (videos, quizzes, simulations, and other interactive elements).
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Conduct needs analysis and recommend effective instructional strategies to meet learner needs.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Continuously improve and update course content based on feedback, learning analytics, and industry trends.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Ensure accessibility, usability, and learner engagement through cutting-edge instructional techniques.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Test, troubleshoot, and resolve technical issues in developed e-learning content to ensure seamless content delivery.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Ensure all e-learning content adheres to SCORM or xAPI standards for integration into the Learning Management System (LMS).
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Design, develop, and implement e-learning courses, using a blend of instructional design principles and modern e-learning technologies.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Conduct post-launch evaluations of learning materials to identify areas of improvement based on learner feedback and performance data.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Stay updated on the latest e-learning trends and tools, continuously improving the design and development process.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Manage multiple projects, delivering high-quality e-learning solutions on time and within scope.
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="career-details-job-responsiblity mb-45">
                  <h4 class="career-details-title-sm">Qualifications & Skills:</h4>
                  <div class="career-details-job-list">
                     <ul>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Bachelor’s degree in Instructional Design, Educational Technology, or a related field. Master's degree or Accredited Certification is a plus.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           3+ years of experience in instructional design and e-learning development.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Proven experience in developing e-learning content and courses.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Expertise in using e-learning development tools (Articulate Storyline, Adobe Captivate, Elucidat, Camtasia, etc.).
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Strong understanding of instructional design models (e.g. ADDIE, SAM), e-learning best practices and adult learning principles.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Experience with Learning Management Systems (LMS) and SCORM/AICC compliance.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Practical knowledge of multimedia design and video editing tools.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Strong visual design skills, with the ability to create a user-friendly, engaging learning experience
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Familiarity with modern learning frameworks (microlearning, gamification, blended learning).
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Excellent communication and collaboration skills.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Strong attention to detail and ability to manage multiple projects.
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="career-details-job-responsiblity mb-20">
                  <h4 class="career-details-title-sm">Desired Experience:</h4>
                  <div class="career-details-job-list">
                     <ul>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Experience with multimedia tools (e.g., Adobe Creative Suite, video editing software) is a plus.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Basic knowledge of HTML5, CSS, or JavaScript for e-learning customization is advantageous.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Experience working in a fast-paced environment
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Experience working in an Agile development environment is a plus.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Proven track record of creating engaging and interactive course materials.
                        </li>
                        <li>
                           <i class="fal fa-long-arrow-right"></i>
                           Portfolio of e-learning projects, showcasing instructional design and development capabilities.
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="career-details-job-responsiblity">
                  <h4 class="career-details-title-sm">Application Process:</h4>
                  <p>Interested candidates should submit the following:</p>
               </div>
               <div class="career-details-job-list">
                  <ul>
                     <li>1. A resume detailing relevant experience and qualifications.</li>
                     <li>2. A One-page cover letter explaining why you are the right fit for this role.</li>
                     <li>3. A portfolio showcasing your e-learning projects, including storyboards, course designs, and multimedia elements.</li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="col-xl-5 col-lg-5 career-details-pin">
            <div class="col-xxl-12">
               <div class="postbox__apply-btn-border">
                  <div id="my-btn" class="postbox__apply-btn-box">
                     <a class="submit-btn mb-50 w-100" href="javascript:void(0)">Apply For This Job</a>
                  </div>
               </div>
            </div>
            <Career_form/>
            <div class="col-xxl-12">
               <div class="career-details-social-box mb-20">
                  <a class="facebook" href="https://www.facebook.com/techfiqra"><i class="fab fa-facebook-f"></i></a>
                  <a class="twitter" href="https://x.com/FiqraTech"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="black"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg></a>
                  <a class="instagram p-relative" href="https://www.instagram.com/fiqra.tech/">
                     <div class="insta-bg"></div>
                     <i class="fab fa-instagram"></i>
                  </a>
                  <a class="linkedin" href="https://www.linkedin.com/company/vijanatech/"><i class="fab fa-linkedin-in"></i></a>
               </div>
               <div class="career-details-bottom-text text-center">
                  <a href="/careers">Employee at Fiqra?</a>
               </div>
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