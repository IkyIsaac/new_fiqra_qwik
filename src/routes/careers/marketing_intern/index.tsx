import ImgBreadcrumbShape1 from "~/media/assets/img/breadcrumb/breadcrumb-shape-1.png?jsx";
import ImgBreadcrumbShape2 from "~/media/assets/img/breadcrumb/breadcrumb-shape-2.png?jsx";
import ImgBreadcrumbSub1 from "~/media/assets/img/breadcrumb/breadcrumb-sub-1.png?jsx";
import ImgBreadcrumb3 from "~/media/assets/img/breadcrumb/breadcrumb-3.png?jsx";
import { component$ } from "@builder.io/qwik";
import Footer_ from "~/components/footer_";
import Try_service from "~/components/try_service";
import Career_form from "../career_form";
import Open_positions from "~/components/open_positions";

export default component$(() => {
  return (
    <>
      <style>
        {`
    strong {
      color: #15042C;
      margin-bottom: 10px;
    }
  `}
      </style>
      <main>
        <div class="breadcrumb__area breadcrumb-height p-relative blue-bg-2">
          <div class="breadcrumb__shape-1">
            <ImgBreadcrumbShape1 alt="" />
          </div>
          <div class="breadcrumb__shape-2">
            <ImgBreadcrumbShape2 alt="" />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xl-8 col-lg-7">
                <div class="breadcrumb__content z-index-3">
                  <h3 class="breadcrumb__title tp-char-animation">
                    Opportunity Snapshot
                  </h3>
                  <div
                    class="breadcrumb__list wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".4s"
                  >
                    <span class="child-one">
                      <a href="/">Home</a>
                    </span>
                    <span class="dvdr">
                      <i class="fal fa-angle-right"></i>
                    </span>
                    <span class="child-one">
                      <a href="/careers">Careers page</a>
                    </span>
                    <span class="dvdr">
                      <i class="fal fa-angle-right"></i>
                    </span>
                    <span>Role Overview</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-5 col-lg-4 text-center text-md-end">
                <div class="breadcrumb__img p-relative text-start z-index">
                  <ImgBreadcrumb3 class="z-index-3" alt="" />
                  <div
                    class="breadcrumb__sub-img wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".4s"
                  >
                    <ImgBreadcrumbSub1 alt="" />
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
                    <span>Marketing</span>
                    <h4 class="career-details-title">
                      Marketing <br />
                      <br />
                      Intern
                    </h4>
                  </div>
                  <div class="career-details-location-box">
                    <span>
                      <svg
                        width="15"
                        height="17"
                        viewBox="0 0 15 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7.10747C1 3.73441 3.93813 1 7.5625 1C11.1869 1 14.125 3.73441 14.125 7.10747C14.125 10.4541 12.0305 14.3593 8.76256 15.7558C8.00076 16.0814 7.12424 16.0814 6.36244 15.7558C3.09452 14.3593 1 10.4541 1 7.10747Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                        />
                        <path
                          d="M9.4375 7.56274C9.4375 8.59828 8.59803 9.43774 7.5625 9.43774C6.52697 9.43774 5.6875 8.59828 5.6875 7.56274C5.6875 6.52721 6.52697 5.68774 7.5625 5.68774C8.59803 5.68774 9.4375 6.52721 9.4375 7.56274Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                        />
                      </svg>
                      Tanzania - Dar es Salaam
                    </span>
                    <span>
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.5 15.75C12.5041 15.75 15.75 12.5041 15.75 8.5C15.75 4.49594 12.5041 1.25 8.5 1.25C4.49594 1.25 1.25 4.49594 1.25 8.5C1.25 12.5041 4.49594 15.75 8.5 15.75Z"
                          stroke="#5F6168"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.5 5.52838V9.42838L11.1 10.7284"
                          stroke="#5F6168"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Intern
                    </span>
                    <span>Junior</span>
                  </div>
                  <div class="career-details-job-responsiblity mb-45">
                    <h4 class="career-details-title-sm">Position Overview</h4>
                    <p>
                      Fiqra Technologies is seeking a creative, ambitious, and
                      tech-savvy <strong>Marketing Intern</strong>to join our team. This
                      role is ideal for individuals passionate about marketing,
                      technology, and education who want to gain hands-on
                      experience in a fast-paced, innovative environment. As a
                      Marketing Intern, you will support our marketing efforts
                      for both Fiqra Technologies and Fiqra Academy,
                      contributing to campaigns, managing content, and analyzing
                      marketing performance. You’ll work closely with our
                      marketing team to develop and execute strategies that
                      align with our mission to empower businesses and learners
                      through technology.
                    </p>
                  </div>
                  <div class="career-details-job-responsiblity mb-45">
                    <h4 class="career-details-title-sm">
                      Key Responsibilities
                    </h4>
                    <div class="career-details-job-list">
                      <ul>
                        {/* <!-- Strategic Planning --> */}
                        <li>
                          <strong>Content Creation and Management</strong>
                          <ul>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Develop engaging content for social media, blogs,
                              newsletters, and other digital platforms.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Assist in designing promotional materials such as
                              flyers, banners, and graphics.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Write and edit copy for campaigns, ensuring
                              consistency in tone and branding.
                            </li>
                          </ul>
                        </li>

                        {/* <!-- Relationship Management --> */}
                        <li>
                          <strong>Social Media Management</strong>
                          <ul>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Manage and grow Fiqra Technologies' and Fiqra
                              Academy's presence on social media platforms.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Plan and schedule posts, ensuring alignment with
                              the overall marketing strategy.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Monitor engagement and respond to comments and
                              inquiries.
                            </li>
                          </ul>
                        </li>

                        {/* <!-- Sales Growth --> */}
                        <li>
                          <strong>Campaign Support</strong>
                          <ul>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Assist in planning and executing marketing
                              campaigns to promote Fiqra Academy’s LMS and Fiqra
                              Technologies’ software solutions.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Conduct market research to identify trends and
                              insights that can improve campaign effectiveness.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Track and report on the performance of campaigns,
                              providing actionable recommendations.
                            </li>
                          </ul>
                        </li>

                        {/* <!-- Partnership Development --> */}
                        <li>
                          <strong>Event Coordination</strong>
                          <ul>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Support the planning and execution of events such
                              as university tours, exhibitions, and workshops.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Help create marketing materials and presentations
                              for events.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Represent Fiqra Technologies and Fiqra Academy at
                              local events when required.
                            </li>
                          </ul>
                        </li>

                        {/* <!-- Product Expertise and Promotion --> */}
                        <br />
                        <li>
                          <strong>Marketing Analytics</strong>
                          <ul>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Analyze website and social media analytics to measure campaign performance.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Prepare reports on key metrics, such as engagement rates, reach, and conversion rates.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Collaborate with the team to improve strategies based on data-driven insights.
                            </li>
                          </ul>
                        </li>

                        {/* <!-- Reporting and Collaboration --> */}
                        <li>
                          <strong>Partnership Development</strong>
                          <ul>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Assist in outreach efforts to establish partnerships with organizations, institutions, and influencers.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Support collaboration initiatives with instructors and educational bodies.
                            </li>
                            
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="career-details-job-responsiblity mb-45">
                    <h4 class="career-details-title-sm">
                      Qualifications & Skills:
                    </h4>
                    <div class="career-details-job-list">
                      <ul>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Currently pursuing or recently completed a degree in Marketing, Communications, Business, or a related field.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Strong interest in technology, digital marketing, and education.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>Excellent written and verbal communication skills.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Proficiency in social media platforms (e.g., Instagram, Facebook, LinkedIn, Twitter).
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Basic knowledge of graphic design tools (e.g., Canva, Adobe Creative Suite) is a plus.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Familiarity with analytics tools (e.g., Google Analytics, social media insights) is a bonus.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Ability to work collaboratively in a team environment.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Creativity, attention to detail, and a proactive attitude.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="career-details-job-responsiblity mb-20">
                    <h4 class="career-details-title-sm">
                      Why Join Fiqra Technologies?
                    </h4>
                    <div class="career-details-job-list">
                      <ul>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Gain hands-on experience in digital marketing for the tech and education sectors.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Be part of a team revolutionizing learning and technology in Tanzania and beyond.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Work in a collaborative, innovative, and supportive environment.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>Opportunity to learn from industry experts and build valuable connections.
                        </li>
                        <li>
                        <i class="fal fa-long-arrow-right"></i>Flexible working arrangements with opportunities to contribute to impactful projects.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="career-details-job-responsiblity">
                    <h4 class="career-details-title-sm">
                      Application Process:
                    </h4>
                    <p>Interested candidates should submit the following:</p>
                  </div>
                  <div class="career-details-job-list">
                    <ul>
                      <li>
                        <i class="fal fa-long-arrow-right"></i>A detailed resume
                        highlighting relevant experience and skills.
                      </li>
                      <li>
                        <i class="fal fa-long-arrow-right"></i>A cover letter explaining why you are interested in this internship and how your skills align with the role.
                      </li>
                      <li>
                        <i class="fal fa-long-arrow-right"></i>
                        A portfolio or examples of past work (optional but encouraged).
                      </li>
                    </ul>
                  </div>

                  <div class="career-details-job-responsiblity">
                    <h4 class="career-details-title-sm">Deadline:</h4>
                    <p>
                      Applications must be submitted by{" "}
                      <strong>20th January 2025</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5 career-details-pin">
                <div class="col-xxl-12">
                  <div class="postbox__apply-btn-border">
                    <div id="my-btn" class="postbox__apply-btn-box">
                      <a
                        class="submit-btn mb-50 w-100"
                        href="javascript:void(0)"
                      >
                        Apply For This Job
                      </a>
                    </div>
                  </div>
                </div>
                <Career_form />
                <div class="col-xxl-12">
                  <div class="career-details-social-box mb-20">
                    <a
                      class="facebook"
                      href="https://www.facebook.com/techfiqra"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="twitter" href="https://x.com/FiqraTech">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="black"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </a>
                    <a
                      class="instagram p-relative"
                      href="https://www.instagram.com/fiqra.tech/"
                    >
                      <div class="insta-bg"></div>
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a
                      class="linkedin"
                      href="https://www.linkedin.com/company/vijanatech/"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <div class="career-details-bottom-text text-center">
                    <a href="/careers">Employee at Fiqra?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Open_positions />
        <Try_service />
      </main>
      <Footer_ />
    </>
  );
});
