
import ImgBreadcrumbShape1 from '~/media/assets/img/breadcrumb/breadcrumb-shape-1.png?jsx';
import ImgBreadcrumbShape2 from '~/media/assets/img/breadcrumb/breadcrumb-shape-2.png?jsx';
import ImgBreadcrumbSub1 from '~/media/assets/img/breadcrumb/breadcrumb-sub-1.png?jsx';
import ImgBreadcrumb3 from '~/media/assets/img/breadcrumb/breadcrumb-3.png?jsx';import { component$ } from "@builder.io/qwik";
import Footer_ from "~/components/footer_";
import type { TeamMember } from './teamLoader';
import { loadTeamMembers } from './teamLoader'; 
import Try_service from '~/components/try_service';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const teamMembers: TeamMember[] = loadTeamMembers();

  return (
    <>
      <main>
        {/* Breadcrumb Section */}
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
                <div class="breadcrumb__content">
                  <h3 class="breadcrumb__title tp-char-animation">
                    The Vanguard
                  </h3>
                  <div class="breadcrumb__list tp-title-anim">
                    <span class="child-one">
                      <a href="/">Home</a>
                    </span>
                    <span class="dvdr">
                      <i class="fal fa-angle-right"></i>
                    </span>
                    <span>Team Members</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-5 col-lg-4 text-center text-md-end">
                <div class="breadcrumb__img p-relative text-start z-index">
                  <ImgBreadcrumb3
                    class="z-index-3"
                    alt=""
                  />
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

        {/* Team Members Section */}
        <div class="tp-team-area tp-team-inner pt-100 pb-75">
          <div class="container">
            <div class="tp-team-section-wrapper tp-team-inner-section mb-70">
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12">
                  <div class="tp-team-section-box text-center">
                    <h5 class="inner-section-subtitle pb-10">
                      Talented Team
                    </h5>
                    <h3 class="tp-section-title mb-0 text-black">
                      Meet the Team
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
          {teamMembers.map((member) => (
    <div
      key={member.id}
      class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-70 tp-border-after-4 team-inner-border-right"
    >
      <div class="tp-team-item tp-team-inner-title-color text-center z-index">
        <div class="tp-team-img">
          <img width="360" height="190" src={member.images || "assets/img/default.jpg"} alt={member.name} />
        </div>
        <div class="tp-team-content">
          <h4 class="tp-team-title-sm">
            <a href={`/team/${member.id}`}>
              {member.name}
            </a>
          </h4>
          <span>{member.nickname || "N/A"}</span>
        </div>
        <div class="tp-team-social">
          <a
            class="icon-color-1"
            href={member.social_media.facebook || "#"}
            aria-disabled={!member.social_media.facebook}
            onClick$={(e) => {
              if (!member.social_media.facebook) e.preventDefault();
            }}
          >
            <i class="fab fa-facebook-f"></i>
            <span></span>
          </a>

          <a
            class="icon-color-2"
            href={member.social_media.instagram || "#"}
            aria-disabled={!member.social_media.instagram}
            onClick$={(e) => {
              if (!member.social_media.instagram) e.preventDefault();
            }}
          >
            <i class="fab fa-instagram"></i>
            <span></span>
          </a>
          <a
            class="icon-color-3"
            href={member.social_media.x || "#"}
            aria-disabled={!member.social_media.x}
            onClick$={(e) => {
              if (!member.social_media.x) e.preventDefault();
            }}
          >
<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                      <span></span>
          </a>
           <a
            class="icon-color-4"
            href={member.social_media.linkedin || "#"}
            aria-disabled={!member.social_media.linkedin}
            onClick$={(e) => {
              if (!member.social_media.linkedin) e.preventDefault();
            }}
          >
            <i class="fab fa-linkedin-in"></i>
            <span></span>
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
</div>
<Try_service/>
      </main>
      <Footer_/>
    </>
  );
});


export const head: DocumentHead = {
  title: "Fiqra-Team",
  meta: [
    {
      name: "Fiqra Technologies",
      content: "Where Innovative Talents Emerge",
    },
  ],
};
