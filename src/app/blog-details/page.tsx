import Link from "next/link";

export default function BlogDetails() {
  return (
    <main>
      <div className="breadcrumb__area breadcrumb-ptb-4 p-relative blue-bg-2">
        <div className="breadcrumb__shape-1">
          <img src="/img/breadcrumb/breadcrumb-shape-1.png" alt="" />
        </div>
        <div className="breadcrumb__shape-2">
          <img src="/img/breadcrumb/breadcrumb-shape-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-9 col-lg-9 col-md-9">
              <div className="blog-details-banner z-index-2">
                <div className="blog-details-title-box">
                  <span>Resources</span>
                  <h3 className="blog-details-banner-title">
                    Developing Privacy User Centric Apps
                  </h3>
                </div>
                <div className="tp-blog-author-info-box d-flex align-items-center">
                  <div className="tp-blog-avata">
                    <img src="/img/blog/blog-avata-1.png" alt="" />
                  </div>
                  <div className="tp-blog-author-info">
                    <h5>Rudra Ghosh</h5>
                    <span>CEO Dulalix • April 24, 2022</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="blog-details-social-box z-index-3 text-md-end text-start">
                <Link href="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-vimeo-v"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-details-img-area mb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="blog-details-big-img z-index-2">
                <img src="/img/blog/blog-details-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="postbox__area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__details-wrapper pr-20">
                <article>
                  <div className="postbox__details-title-box pb-30">
                    <h4 className="postbox__details-title">
                      The History Of Web Design
                    </h4>
                    <p>
                      While you want your sales team to be spending most of
                      their time prospecting and selling, making sure they have
                      the time and space to keep the CRM up to date is critical.
                      Remember to factor in time for these tasks when setting
                      goals and benchmarks for them. Provide sales support where
                      you can to ensure your sales team is spending.
                    </p>
                    <p>
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day going forward,
                      a new normal that has evolved.!
                    </p>
                  </div>
                  <div className="postbox__details-checkmark">
                    <ul>
                      <li>
                        <i className="fal fa-check"></i>Say goodbye to bank
                        fees.
                      </li>
                      <li>
                        <i className="fal fa-check"></i>Leverage agile
                        frameworks to provide
                      </li>
                      <li>
                        <i className="fal fa-check"></i>Capitalize on low
                        hanging fruit
                      </li>
                      <li>
                        <i className="fal fa-check"></i>Deposit funds easily,
                        securely.
                      </li>
                    </ul>
                  </div>
                  <div className="postbox__details-title-box pb-30">
                    <h4 className="postbox__details-title">
                      How to Update your Theme
                    </h4>
                    <p>
                      Felis morbi ut tristique pretium libero. Eget purus, enim,
                      orci, quis tempor sed. Sed nec eget nibh et Ut orci,
                      sagittis tellus dui congue. Blandit laoreet nullam amet
                      eget. Ut tincidunt diam tempor sed turpis odio vitae sem
                      lobortis.
                    </p>
                  </div>
                  <div className="postbox__details-img-box d-flex">
                    <div className="mr-20 text-center">
                      <img
                        className="mb-20"
                        src="/img/blog/blog-details-2.jpg"
                        alt=""
                      />
                      <h4 className="postbox__details-img-caption">
                        <span>Images by</span>@sample
                      </h4>
                    </div>
                    <div className="text-center">
                      <img
                        className="mb-20"
                        src="/img/blog/blog-details-3.jpg"
                        alt=""
                      />
                      <h5 className="postbox__details-img-caption">
                        <span>Images by</span>@sample
                      </h5>
                    </div>
                  </div>
                  <div className="postbox__details-title-box pb-15">
                    <p>
                      Felis morbi ut tristique pretium libero. Eget purus, enim,
                      orci, quis tempor sed. Sed nec eget nibh et Ut orci,
                      sagittis tellus dui congue. Blandit laoreet nullam amet
                      eget. Ut tincidunt diam tempor sed turpis odio vitae sem
                      lobortis. sed turpis odio vitae sem lobortis.
                    </p>
                  </div>
                  <div className="postbox__details-qoute mb-30">
                    <blockquote className="d-flex align-items-start">
                      <div className="postbox__details-qoute-icon">
                        <svg
                          width="37"
                          height="27"
                          viewBox="0 0 37 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M35.046 0.402002C32.4553 2.01 30.222 3.97534 28.346 6.298C26.5593 8.53133 25.3533 10.8093 24.728 13.132C25.3533 12.596 26.0233 12.194 26.738 11.926C27.542 11.5687 28.3013 11.39 29.016 11.39C31.16 11.39 32.9467 12.1493 34.376 13.668C35.8053 15.0973 36.52 16.884 36.52 19.028C36.52 21.172 35.7607 22.9587 34.242 24.388C32.8127 25.8173 31.026 26.532 28.882 26.532C26.6487 26.532 24.8173 25.7727 23.388 24.254C21.9587 22.7353 21.244 20.77 21.244 18.358C21.244 15.142 22.1373 11.7027 23.924 8.04C25.8 4.288 27.8993 1.608 30.222 0H35.046V0.402002ZM13.802 0.402002C11.2113 2.01 8.978 3.97534 7.102 6.298C5.31533 8.53133 4.10933 10.8093 3.484 13.132C4.10933 12.596 4.77933 12.194 5.494 11.926C6.298 11.5687 7.05733 11.39 7.772 11.39C9.916 11.39 11.7027 12.1493 13.132 13.668C14.5613 15.0973 15.276 16.884 15.276 19.028C15.276 21.172 14.5167 22.9587 12.998 24.388C11.5687 25.8173 9.782 26.532 7.638 26.532C5.40467 26.532 3.57333 25.7727 2.144 24.254C0.714667 22.7353 0 20.77 0 18.358C0 15.142 0.893333 11.7027 2.68 8.04C4.556 4.288 6.65533 1.608 8.978 0H13.802V0.402002Z"
                            fill="#CDCECF"
                          />
                        </svg>
                      </div>
                      <div className="postbox__details-qoute-text">
                        <p>
                          “The team at @Fiqraagency is incredibly dedicated,
                          knowledgeable, and helpful.
                        </p>
                        <span>Socrates</span>
                      </div>
                    </blockquote>
                  </div>
                  <div className="postbox__details-title-box pb-15">
                    <p>
                      Ex erat referrentur vis. Vim ad consul molestie, eu
                      malorum aliquando referrentur pro, erroribus gloriatur sed
                      at. Eu illud saepe impetus ius. Cum graece libris
                      abhorreant id, eu veri aeque ubique vel. Ut his malis
                      similique. Ei vim blandit nominavi, quo elaboraret
                      quaerendum et. At animal fabellas pericula est, ut cibo
                      lobortis delicatissimi vel, cum ex putant probatus
                      petentium. Elitr laboramus mel id. Admodum adolescens id
                      eam, omnes reformidans comprehensam no vim, ex omnes
                      alienum liberavisse usu. Mandamus tincidunt cu pro, vocent
                      corrumpit no per. Vis ad malorum tacimates adipiscing.
                      Elitr laboramus mel id.
                    </p>
                  </div>
                  <div className="postbox__details tagcloud mb-50">
                    <span>Tags:</span>
                    <Link href="#">Envato</Link>
                    <Link href="#">Development</Link>
                    <Link href="#">Technology</Link>
                    <Link href="#">Wordpress</Link>
                  </div>
                  <div className="postbox__navigation-more mb-70 d-flex justify-content-between">
                    <div className="postbox__navigation-left d-flex align-items-center">
                      <div className="postbox__navigation-img">
                        <Link href="#">
                          <img src="/img/blog/navigation-1.png" alt="" />
                        </Link>
                      </div>
                      <div className="postbox__navigation-content">
                        <Link href="#">
                          <span>
                            <i className="far fa-arrow-left"></i>
                            Previous post
                          </span>
                        </Link>
                        <h5>
                          <Link href="#">Leveraging Feedback...</Link>
                        </h5>
                      </div>
                    </div>
                    <div className="postbox__navigation-right d-flex align-items-center">
                      <div className="postbox__navigation-content">
                        <Link href="#">
                          <span>
                            Next post
                            <i className="far fa-arrow-right"></i>
                          </span>
                        </Link>
                        <h5>
                          <Link href="#">Typing Tutorials For...</Link>
                        </h5>
                      </div>
                      <div className="postbox__navigation-img">
                        <Link href="#">
                          <img src="/img/blog/navigation-2.png" alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="postbox__details-author-info-box mb-100 d-flex align-items-start">
                    <div className="postbox__details-author-avata">
                      <img src="/img/blog/blog-details-avata-1.jpg" alt="" />
                    </div>
                    <div className="postbox__details-author-content">
                      <h5 className="postbox__details-author-title">
                        Dianne Ameter
                      </h5>
                      <p>
                        Ex erat referrentur vis. Vim ad consul molestie, eu
                        malorum aliquando referrentur pro, erroribus gloriatur
                        sed at.!
                      </p>
                      <div className="postbox__details-author-social">
                        <Link href="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link href="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link href="#">
                          <i className="fab fa-vimeo-v"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="postbox__comment mb-65">
                    <h3 className="postbox__comment-title">3 Comments</h3>
                    <ul>
                      <li>
                        <div className="postbox__comment-box d-flex">
                          <div className="postbox__comment-info ">
                            <div className="postbox__comment-avater mr-20">
                              <img src="/img/blog/blog-avata-2.png" alt="" />
                            </div>
                          </div>
                          <div className="postbox__comment-text">
                            <div className="postbox__comment-name d-flex">
                              <h5>Justin Case</h5>
                              <span className="post-meta">
                                {" "}
                                April 8, 2022 at 7:38 am
                              </span>
                            </div>
                            <p>
                              Patient Comments are a collection of comments
                              submitted by viewers in <br /> response to a
                              question posed by a MedicineNet doctor.
                            </p>
                            <div className="postbox__comment-reply">
                              <Link href="#">
                                <svg
                                  width="12"
                                  height="10"
                                  viewBox="0 0 14 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 1L1 5L5 9"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1 5.00024L9 5.00024C10.3333 5.00024 13 5.80025 13 9.00025"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                                Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="children">
                        <div className="postbox__comment-box  d-flex">
                          <div className="postbox__comment-info">
                            <div className="postbox__comment-avater mr-20">
                              <img src="/img/blog/blog-avata-1.png" alt="" />
                            </div>
                          </div>
                          <div className="postbox__comment-text">
                            <div className="postbox__comment-name d-flex">
                              <h5>Farhan Firoz</h5>
                              <span className="post-meta"> July 14, 2022</span>
                            </div>
                            <p>
                              Include anecdotal examples of your experience, or
                              things you took notice of that you feel others
                              would find useful.
                            </p>
                            <div className="postbox__comment-reply">
                              <Link href="#">
                                <svg
                                  width="12"
                                  height="10"
                                  viewBox="0 0 14 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 1L1 5L5 9"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1 5.00024L9 5.00024C10.3333 5.00024 13 5.80025 13 9.00025"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                                Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="postbox__comment-box d-flex">
                          <div className="postbox__comment-info ">
                            <div className="postbox__comment-avater mr-20">
                              <img
                                src="/img/blog/blog-list-avata-1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="postbox__comment-text">
                            <div className="postbox__comment-name d-flex">
                              <h5>Justin Case</h5>
                              <span className="post-meta">
                                {" "}
                                April 8, 2022 at 7:38 am
                              </span>
                            </div>
                            <p>
                              Patient Comments are a collection of comments
                              submitted by viewers in <br /> response to a
                              question posed by a MedicineNet doctor.
                            </p>
                            <div className="postbox__comment-reply">
                              <Link href="#">
                                <svg
                                  width="12"
                                  height="10"
                                  viewBox="0 0 14 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 1L1 5L5 9"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1 5.00024L9 5.00024C10.3333 5.00024 13 5.80025 13 9.00025"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                                Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="postbox__comment-form">
                    <h3 className="postbox__comment-form-title">
                      Leave A Comment
                    </h3>
                    <form action="#" className="box">
                      <div className="row gx-20">
                        <div className="col-xxl-4 col-xl-6 col-lg-4">
                          <div className="postbox__comment-input mb-35">
                            <input type="text" className="inputText" required />
                            <span className="floating-label">Your Name</span>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-xl-6 col-lg-4">
                          <div className="postbox__comment-input mb-35">
                            <input type="text" className="inputText" required />
                            <span className="floating-label">Your Email</span>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-xl-6 col-lg-4">
                          <div className="postbox__comment-input mb-35">
                            <input type="text" className="inputText" required />
                            <span className="floating-label">Your Website</span>
                          </div>
                        </div>
                        <div className="col-xxl-12">
                          <div className="postbox__comment-input mb-20">
                            <textarea
                              className="textareaText"
                              required
                            ></textarea>
                            <span className="floating-label-2">
                              Your Comment
                            </span>
                          </div>
                        </div>
                        <div className="col-xxl-12">
                          <div className="postbox__comment-agree">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                I agree that my submitted data is being
                                collected and stored.
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-12">
                          <div className="postbox__comment-btn">
                            <button type="submit" className="tp-btn-inner">
                              Post comment
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <div className="sidebar__widget mb-40">
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Search</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__search">
                      <form action="#">
                        <div className="sidebar__search-input-2">
                          <input
                            type="text"
                            placeholder="Search your keyword..."
                          />
                          <button type="submit">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.01371 15.2219C11.9525 15.2219 15.1456 12.0382 15.1456 8.11096C15.1456 4.18368 11.9525 1 8.01371 1C4.07488 1 0.881836 4.18368 0.881836 8.11096C0.881836 12.0382 4.07488 15.2219 8.01371 15.2219Z"
                                stroke="#5F6168"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16.9287 16.9996L13.0508 13.1331"
                                stroke="#5F6168"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="sidebar__widget mb-40">
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Recent Post</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post rc__post">
                      <div className="rc__post mb-20 d-flex">
                        <div className="rc__post-thumb mr-20">
                          <Link href="/blog-details">
                            <img src="/img/blog/blog-list-avata-1.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <h3 className="rc__post-title">
                            <Link href="/blog-details">
                              Is slower team communication a bad thing?
                            </Link>
                          </h3>
                          <div className="rc__meta">
                            <span>4 March. 2022</span>
                          </div>
                        </div>
                      </div>
                      <div className="rc__post mb-20 d-flex">
                        <div className="rc__post-thumb mr-20">
                          <Link href="/blog-details">
                            <img src="/img/blog/blog-list-avata-2.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <h3 className="rc__post-title">
                            <Link href="/blog-details">
                              Is slower team communication a bad thing?
                            </Link>
                          </h3>
                          <div className="rc__meta">
                            <span>4 March. 2022</span>
                          </div>
                        </div>
                      </div>
                      <div className="rc__post d-flex">
                        <div className="rc__post-thumb mr-20">
                          <Link href="/blog-details">
                            <img src="/img/blog/blog-list-avata-3.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <h3 className="rc__post-title">
                            <Link href="/blog-details">
                              The Ultimate Marketing Design Handbook
                            </Link>
                          </h3>
                          <div className="rc__meta">
                            <span>4 March. 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__widget mb-40">
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Categories</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <ul>
                      <li>
                        <Link href="/blog">
                          <span>
                            <i className="fal fa-angle-right"></i>Technology
                          </span>
                          <span>01</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <span>
                            <i className="fal fa-angle-right"></i>Fiqra
                          </span>
                          <span>02</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <span>
                            <i className="fal fa-angle-right"></i>Development
                          </span>
                          <span>03</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <span>
                            <i className="fal fa-angle-right"></i>Tips & Tricks
                          </span>
                          <span>04</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <span>
                            <i className="fal fa-angle-right"></i>News
                          </span>
                          <span>05</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar__widget mb-40">
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Tag Cloud</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="tagcloud">
                      <Link href="#">Envato</Link>
                      <Link href="#">Development</Link>
                      <Link href="#">Technology</Link>
                      <Link href="#">Wordpress</Link>
                      <Link href="#">PHP</Link>
                      <Link href="#">Branding</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-grid-inner grey-bg pt-100 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="popular-blog-title mb-40 text-center">
                <h4>Related Posts</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="blog-details-slider-wrapper">
                <div className="swiper-container blog-slider-active pb-50">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide related-posts">
                      <div className="tp-blog-item">
                        <div className="tp-blog-thumb fix">
                          <Link href="#">
                            <img src="/img/blog/blog-grid-1.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="tp-blog-content">
                          <div className="tp-blog-meta d-flex align-items-center">
                            <div className="tp-blog-category category-color-1">
                              <span>Crm Software</span>
                            </div>
                            <div className="tp-blog-date">
                              <span>28 April, 2023</span>
                            </div>
                          </div>
                          <div className="tp-blog-title-box">
                            <Link className="tp-blog-title-sm" href="#">
                              2023 Professional Year <br /> In Review
                            </Link>
                          </div>
                          <div className="tp-blog-author-info-box d-flex align-items-center">
                            <div className="tp-blog-avata">
                              <img src="/img/blog/blog-avata-1.png" alt="" />
                            </div>
                            <div className="tp-blog-author-info">
                              <h5>Hilary Ouse</h5>
                              <span>Founder & CEO Dulalix</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide related-posts">
                      <div className="tp-blog-item">
                        <div className="tp-blog-thumb fix">
                          <Link href="#">
                            <img src="/img/blog/blog-grid-2.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="tp-blog-content">
                          <div className="tp-blog-meta d-flex align-items-center">
                            <div className="tp-blog-category category-color-1">
                              <span>Crm Software</span>
                            </div>
                            <div className="tp-blog-date">
                              <span>28 April, 2023</span>
                            </div>
                          </div>
                          <div className="tp-blog-title-box">
                            <Link className="tp-blog-title-sm" href="#">
                              Leveraging Feedback on <br /> Insights best.
                            </Link>
                          </div>
                          <div className="tp-blog-author-info-box d-flex align-items-center">
                            <div className="tp-blog-avata">
                              <img src="/img/blog/blog-avata-2.png" alt="" />
                            </div>
                            <div className="tp-blog-author-info">
                              <h5>Hilary Ouse</h5>
                              <span>Founder & CEO Dulalix</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide related-posts">
                      <div className="tp-blog-item">
                        <div className="tp-blog-thumb fix">
                          <Link href="#">
                            <img src="/img/blog/blog-grid-3.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="tp-blog-content">
                          <div className="tp-blog-meta d-flex align-items-center">
                            <div className="tp-blog-category category-color-1">
                              <span>Crm Software</span>
                            </div>
                            <div className="tp-blog-date">
                              <span>28 April, 2023</span>
                            </div>
                          </div>
                          <div className="tp-blog-title-box">
                            <Link className="tp-blog-title-sm" href="#">
                              Project Management at <br /> Your fingertips.
                            </Link>
                          </div>
                          <div className="tp-blog-author-info-box d-flex align-items-center">
                            <div className="tp-blog-avata">
                              <img src="/img/blog/blog-avata-3.png" alt="" />
                            </div>
                            <div className="tp-blog-author-info">
                              <h5>Hilary Ouse</h5>
                              <span>Founder & CEO Dulalix</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide related-posts">
                      <div className="tp-blog-item">
                        <div className="tp-blog-thumb fix">
                          <Link href="#">
                            <img src="/img/blog/blog-grid-2.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="tp-blog-content">
                          <div className="tp-blog-meta d-flex align-items-center">
                            <div className="tp-blog-category category-color-1">
                              <span>Crm Software</span>
                            </div>
                            <div className="tp-blog-date">
                              <span>28 April, 2023</span>
                            </div>
                          </div>
                          <div className="tp-blog-title-box">
                            <Link className="tp-blog-title-sm" href="#">
                              Leveraging Feedback on <br /> Insights best.
                            </Link>
                          </div>
                          <div className="tp-blog-author-info-box d-flex align-items-center">
                            <div className="tp-blog-avata">
                              <img src="/img/blog/blog-avata-1.png" alt="" />
                            </div>
                            <div className="tp-blog-author-info">
                              <h5>Hilary Ouse</h5>
                              <span>Founder & CEO Dulalix</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
