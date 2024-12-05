import ImgBreadcrumbShape1 from '~/media/assets/img/breadcrumb/breadcrumb-shape-1.png?jsx';
import ImgBreadcrumbShape2 from '~/media/assets/img/breadcrumb/breadcrumb-shape-2.png?jsx';
import ImgBreadcrumbSub1 from '~/media/assets/img/breadcrumb/breadcrumb-sub-1.png?jsx';
import ImgBreadcrumb3 from '~/media/assets/img/breadcrumb/breadcrumb-3.png?jsx';import { component$, useStore, useTask$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { getMemberById } from '../teamLoader'; 
import Footer_ from '~/components/footer_';
import Try_service from '~/components/try_service';

export const useMemberData = routeLoader$((request) => {
  const id = request.params.teamid; 
  console.log('Captured ID:', id); 
  
  const member = getMemberById(id); 
  return member; 
});

export default component$(() => {
  const memberStore = useStore<{ data: any | null }>({ data: null });

  const memberDataSignal = useMemberData();

  useTask$(() => {
    memberStore.data = memberDataSignal.value;
  });

  if (!memberStore.data) {
    return <div>Member not found</div>;
  }

  return (
    <>
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
                {memberStore.data.main_title}
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
                    <a href="/team">Team Members</a>
                  </span>
                  <span class="dvdr">
                    <i class="fal fa-angle-right"></i>
                  </span>
                  <span>{memberStore.data.name}</span>
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

      <div class="team-details-area pt-100 pb-100">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="team-details-wrapper">
                <div class="row">
                  <div class="col-xl-4 col-lg-4 col-md-4">
                    <div class="team-details-img-box text-center">
                      <div class="team-details-img">
                        <img width="200" height="200" src={memberStore.data.images} alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-8 col-lg-8 col-md-8">
                    <div class="team-details-info-box">
                      <h3 class="team-details-client-title">
                      {memberStore.data.name}
                      </h3>
                      <div class="team-details-contact-box d-flex align-items-center">
                        <div class="team-details-social-info">
                          <a href={memberStore.data.social_media.facebook}>
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a href={memberStore.data.social_media.x}>
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href={memberStore.data.social_media.linkedin}>
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href={memberStore.data.social_media.instagram}>
                            <i class="fab fa-instagram"></i>
                          </a>
                        </div>
                        
                        <div class="team-details-personal-info flex">
                          <a href={`mailto:${memberStore.data.email}`} class="flex items-center">
                            <svg
                              width="17"
                              height="13"
                              viewBox="0 0 17 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.4668 6.6C1.4668 3.96013 1.4668 2.6402 2.2889 1.8201C3.111 1 4.43415 1 7.08046 1H9.88728C12.5336 1 13.8567 1 14.6788 1.8201C15.5009 2.6402 15.5009 3.96013 15.5009 6.6C15.5009 9.23987 15.5009 10.5598 14.6788 11.3799C13.8567 12.2 12.5336 12.2 9.88728 12.2H7.08045C4.43415 12.2 3.111 12.2 2.2889 11.3799C1.4668 10.5598 1.4668 9.23987 1.4668 6.6Z"
                                stroke="#5F6168"
                                stroke-width="1.5"
                              />
                              <path
                                d="M4.27344 3.79999L5.78835 5.05934C7.07713 6.13071 7.72152 6.6664 8.48368 6.6664C9.24584 6.6664 9.89023 6.13071 11.179 5.05934L12.6939 3.79999"
                                stroke="#5F6168"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                            <span>Message</span>
                          </a>
                          <a href="#" class="flex items-center">
                            <svg
                              width="13"
                              height="15"
                              viewBox="0 0 13 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.1 4.90001C11.1281 4.90001 11.9616 4.02696 11.9616 2.95001C11.9616 1.87305 11.1281 1 10.1 1C9.07178 1 8.23828 1.87305 8.23828 2.95001C8.23828 4.02696 9.07178 4.90001 10.1 4.90001Z"
                                stroke="#5F6168"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M2.65465 9.45012C3.68282 9.45012 4.51632 8.57707 4.51632 7.50012C4.51632 6.42316 3.68282 5.55011 2.65465 5.55011C1.62647 5.55011 0.792969 6.42316 0.792969 7.50012C0.792969 8.57707 1.62647 9.45012 2.65465 9.45012Z"
                                stroke="#5F6168"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M10.1 14C11.1281 14 11.9616 13.1269 11.9616 12.05C11.9616 10.973 11.1281 10.1 10.1 10.1C9.07178 10.1 8.23828 10.973 8.23828 12.05C8.23828 13.1269 9.07178 14 10.1 14Z"
                                stroke="#5F6168"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4.26172 8.48151L8.50014 11.0685"
                                stroke="#5F6168"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.49393 3.93152L4.26172 6.51853"
                                stroke="#5F6168"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span>Share</span>
                          </a>
                        </div>
                      </div>
                      <div class="team-details-expricence-box d-flex align-items-center">
                        <div class="team-details-expricence-box-1">
                          <span>Role:</span> <br />
                          <em>{memberStore.data.title}</em>
                        </div>
                        <div class="team-details-expricence-box-1">
                          <span>Experience:</span> <br />
                          <em>{memberStore.data.experience}</em>
                        </div>
                      </div>
                      <div class="team-details-skill">
                        <h5>Superpower Skills:</h5>
                        <span>{memberStore.data.skills.skill1}</span>
                        <span>{memberStore.data.skills.skill2}</span>
                        <span>{memberStore.data.skills.skill3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-10">
              <div class="team-details-text-wrapper pt-80">
                <div class="team-details-text">
                  <h4 class="team-details-title">About {memberStore.data.name}</h4>
                  <p>
                    {memberStore.data.description}
                  </p>
                </div>
                <div class="team-details-feature-list">
                </div>
              </div>
            </div>
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
  title: `Fiqra Team`,
  meta: [
    {
      name: "Fiqra Technologies",
      content: "Where Innovative Talents Emerge",
    },
  ],
};
