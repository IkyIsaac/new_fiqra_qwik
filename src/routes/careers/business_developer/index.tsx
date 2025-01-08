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
  const jobTitle = "Business Developer";

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
                    <span>Business</span>
                    <h4 class="career-details-title">
                    Business Development <br />
                      <br />
                      Manager
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
                      Contract
                    </span>
                    <span>Senior</span>
                  </div>
                  <div class="career-details-job-responsiblity mb-45">
                    <h4 class="career-details-title-sm">Position Overview</h4>
                    <p>
                      Fiqra Technologies is seeking a highly motivated and
                      results-driven{" "}
                      <strong>Business Development Manager</strong> to join our
                      dynamic team. This role is instrumental in driving
                      business growth by establishing and nurturing strategic
                      partnerships, managing client relationships, and
                      contributing to revenue generation. The ideal candidate
                      will have a strong background in business development,
                      sales, and relationship management, particularly within
                      the B2B and B2B2C sectors. They will be instrumental in
                      positioning Fiqra Academy as the premier LMS solution for
                      institutions, organizations, and corporate training teams.
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
                          <strong>Strategic Planning</strong>
                          <ul>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Develop and execute comprehensive business
                              development strategies to drive user acquisition,
                              revenue growth, and market penetration.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Identify and pursue new business opportunities,
                              partnerships, and collaborations across private,
                              public, and developmental sectors.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Conduct market research to understand client
                              needs, industry trends, and competitive
                              landscapes.
                            </li>
                          </ul>
                        </li>

                        {/* <!-- Relationship Management --> */}
                        <li>
                          <strong>Relationship Management</strong>
                          <ul>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Build and maintain strong relationships with
                              educators, training institutions, and corporate
                              training teams.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Engage proactively with potential clients to
                              present tailored solutions that meet their unique
                              needs.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Manage client onboarding processes and ensure
                              exceptional client satisfaction and retention.
                            </li>
                          </ul>
                        </li>

                        {/* <!-- Sales Growth --> */}
                        <li>
                          <strong>Sales Growth</strong>
                          <ul>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Manage the entire sales cycle, from lead
                              generation and prospecting to closing deals and
                              ensuring successful implementation.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Generate leads through networking, outreach,
                              attending industry events, and leveraging personal
                              networks.
                            </li>
                            <li>
                              <i class="fal fa-long-arrow-right"></i>
                              Drive sales targets and provide regular updates on
                              sales performance and revenue contributions.
                            </li>
                          </ul>
                        </li>

                        {/* <!-- Partnership Development --> */}
                        <li>
                          <strong>Partnership Development</strong>
                          <ul>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Establish strategic partnerships with key stakeholders
                          in the education and training sectors to enhance Fiqra
                          Academy’s reach and reputation.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Negotiate partnership agreements and maintain ongoing
                          collaborations to ensure mutual benefit.
                        </li>
                          </ul>
                        </li>

                        {/* <!-- Product Expertise and Promotion --> */}
                        <br />
                        <li>
                          <strong>Product Expertise and Promotion</strong>
                          <ul>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Develop a deep understanding of Fiqra Academy’s
                          platform, features, and benefits.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Conduct compelling product demonstrations and
                          presentations to showcase the value of Fiqra Academy.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Collaborate with the marketing team to design and
                          implement effective promotional campaigns.
                        </li>
                          </ul>
                        </li>

                        {/* <!-- Reporting and Collaboration --> */}
                        <li>
                          <strong>Reporting and Collaboration</strong>
                          <ul>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Provide detailed reports on sales performance, client
                          feedback, and market trends.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Collaborate with internal teams, including product
                          development, marketing, and support, to ensure
                          alignment on client needs and expectations.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Contribute insights to the strategic direction of the
                          business based on market data and client interactions.
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
                          Bachelor’s degree in Business Administration,
                          Marketing, or a related field. A Master’s degree is an
                          added advantage.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Over 5 years of proven experience in business
                          development, sales, and client relationship
                          management.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>A strong track
                          record in B2B sales and establishing strategic
                          partnerships.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Experience in software product or service sales is
                          highly desirable.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Strong existing relationships in private, public, and
                          developmental sectors are a significant advantage.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          High-level communication, negotiation, and
                          presentation skills.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Proven ability to analyze market trends, develop
                          strategic plans, and execute effectively.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Proficiency in CRM tools and sales software is an
                          advantage.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Self-motivated, goal-oriented, and capable of working
                          independently in a fast-paced environment.
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
                          Competitive salary with performance-based incentives.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Be part of a team revolutionizing online education in
                          Tanzania and beyond.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>
                          Opportunity to collaborate with forward-thinking
                          professionals in an innovative work environment.
                        </li>
                        <li>
                          <i class="fal fa-long-arrow-right"></i>A chance to
                          make a tangible impact on education and workforce
                          training through technology.
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
                        highlighting relevant experience and expertise.
                      </li>
                      <li>
                        <i class="fal fa-long-arrow-right"></i>A cover letter
                        explaining why you are a great fit for this role.
                      </li>
                      <li>
                        <i class="fal fa-long-arrow-right"></i>
                        Copies of degree certificates and academic transcripts.
                      </li>
                      <li>
                        <i class="fal fa-long-arrow-right"></i>
                        Highly encouraged: Share metrics or examples of previous
                        business development successes to showcase your impact.
                      </li>
                    </ul>
                  </div>

                  <div class="career-details-job-responsiblity">
                    <h4 class="career-details-title-sm">Deadline:</h4>
                    <p>Applications must be submitted by <strong>20th January 2025</strong></p>
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
                <Career_form jobTitle={jobTitle}
                />
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
        <Open_positions/>
        <Try_service />
      </main>
      <Footer_ />
    </>
  );
});
