import { component$, useResource$, Resource } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import Footer_ from "~/components/footer_";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  images?: string;
  social_media: {
    facebook?: string;
    instagram?: string;
    x?: string;
    linkedin?: string;
  };
}

export default component$(() => {
  const location = useLocation();

  // UseResource$ to fetch data
  const teamResource = useResource$<TeamMember[]>(async () => {
    const response = await fetch("http://localhost:3005/members");
    const data = await response.json();
    return data;
  });

  return (
    <>
    <main>
      {/* Breadcrumb Section */}
      <div class="breadcrumb__area breadcrumb-height p-relative blue-bg-2">
        <div class="breadcrumb__shape-1">
          <img src="/assets/img/breadcrumb/breadcrumb-shape-1.png" alt="" />
        </div>
        <div class="breadcrumb__shape-2">
          <img src="/assets/img/breadcrumb/breadcrumb-shape-2.png" alt="" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-xl-8 col-lg-7">
              <div class="breadcrumb__content">
                <h3 class="breadcrumb__title tp-char-animation">
                  Team Member
                </h3>
                <div class="breadcrumb__list tp-title-anim">
                  <span class="child-one">
                    <a href="#">Home</a>
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
                <img
                  class="z-index-3"
                  src="/assets/img/breadcrumb/breadcrumb-3.png"
                  alt=""
                />
                <div
                  class="breadcrumb__sub-img wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".4s"
                >
                  <img src="/assets/img/breadcrumb/breadcrumb-sub-1.png" alt="" />
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
                    Meet our Team Members
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <Resource
              value={teamResource}
              onPending={() => <p>Loading...</p>}
              onResolved={(data) => (
                <>
                  {data.map((member) => (
                    <div
                      key={member.id}
                      class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-70 tp-border-after-1 team-inner-border-right"
                    >
                      <div class="tp-team-item text-center tp-team-inner-title-color z-index">
                        <div class="tp-team-img">
                          <img
                            src={member.images || "/assets/img/default.jpg"}
                            alt={member.name}
                          />
                        </div>
                        <div class="tp-team-content">
                          <h4 class="tp-team-title-sm">
                            <a href={`/team-details/${member.id}`}>
                              {member.name}
                            </a>
                          </h4>
                          <span>{member.title || "N/A"}</span>
                        </div>
                        <div class="tp-team-social">
                          {member.social_media.facebook && (
                            <a
                              class="icon-color-1"
                              href={member.social_media.facebook}
                            >
                              <i class="fab fa-facebook-f"></i>
                            </a>
                          )}
                          {member.social_media.instagram && (
                            <a
                              class="icon-color-2"
                              href={member.social_media.instagram}
                            >
                              <i class="fab fa-instagram"></i>
                            </a>
                          )}
                          {member.social_media.x && (
                            <a
                              class="icon-color-3"
                              href={member.social_media.x}
                            >
                              <i class="fab fa-twitter"></i>
                            </a>
                          )}
                          {member.social_media.linkedin && (
                            <a
                              class="icon-color-4"
                              href={member.social_media.linkedin}
                            >
                              <i class="fab fa-linkedin-in"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            />
          </div>
        </div>
      </div>
    </main>
    <Footer_/>
    </>
  );
});
