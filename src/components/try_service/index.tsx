import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="tp-cta-area p-relative">
        <div class="tp-cta-grey-bg grey-bg-2"></div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
               class=" tp-cta-bg background-dark-overlay"
                data-background="/assets/img/cta/cta-bg.png"
              >
                <div class="tp-cta-content tp-inner-font text-center">
                  <h3 class="tp-section-title text-white">
                    Try Fiqra Academy!
                  </h3>
                  <p class="text-white">
                    {/* Learn through engaging videos, interactive quizzes, expert
                    mentorship,forums & articles
                    <br />
                    and hands-on projects */}
                    Get the skills that make you thrive. Fiqra Academy—real-world learning, real-world results. 
                  </p>

                  <a
                    class="tp-btn-yellow tp-btn-hover alt-color-white d-none d-md-inline-block px-5"
                    href="https://fiqra.academy/"
                  >
                    <span>Start Now</span>
                    <b></b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
