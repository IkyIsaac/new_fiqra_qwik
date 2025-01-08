/* eslint-disable qwik/valid-lexical-scope */
import {
  component$,
  useSignal,
  $,
} from "@builder.io/qwik";
import emailjs from "emailjs-com";

export default component$((props: { jobTitle: string }) => {
  const fullName = useSignal("");
  const email = useSignal("");
  const phoneNumber = useSignal("");
  const address = useSignal("");
  const linkedInProfile = useSignal("");
  const personalWebsite = useSignal("");
  const yearsOfExperience = useSignal("");
  const expectedSalary = useSignal("");
  const usWorkAuthorization = useSignal(false);
  const personalNote = useSignal("");
  const resumeFile = useSignal<string | null>(null);
  const coverLetter = useSignal<string | null>(null);
  const portfolio = useSignal<string | null>(null);
  const loading = useSignal(false);
  const message = useSignal("");

  const handleFormSubmit = $(async (e: Event) => {
    e.preventDefault();
    console.log("Form submission started");

    loading.value = true;

    const formData = {
      subject: "Career Job Application",
      email: email.value,
      fullName: fullName.value,
      phoneNumber: phoneNumber.value,
      address: address.value,
      linkedInProfile: linkedInProfile.value,
      personalWebsite: personalWebsite.value,
      yearsOfExperience: yearsOfExperience.value,
      expectedSalary: expectedSalary.value,
      usWorkAuthorization: usWorkAuthorization.value ? "Yes" : "No",
      personalNote: personalNote.value,
      resumeFile: resumeFile.value ?? "No file link",
      coverLetter: coverLetter.value ?? "No file link",
      portfolio: portfolio.value ?? "No file link",
      jobApplied: props.jobTitle,
    };

    console.log("Form Data:", formData);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_QWIK_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_QWIK_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_QWIK_EMAILJS_USER_ID
      );

      console.log("EmailJS Response:", response);
      if (response.status === 200) {
        message.value = "Application submitted successfully!";
        fullName.value = "";
        email.value = "";
        phoneNumber.value = "";
        address.value = "";
        linkedInProfile.value = "";
        personalWebsite.value = "";
        yearsOfExperience.value = "";
        expectedSalary.value = "";
        personalNote.value = "";
        resumeFile.value = null;
        coverLetter.value = null;
        portfolio.value = null;
      } else {
        message.value = "Failed to submit the application.";
      }
    } catch (err) {
      console.error("Error:", err);
      message.value = "An error occurred while submitting the application.";
    }

    loading.value = false;
    setTimeout(() => {
      message.value = "";
    }, 4000);
  });

  return (
    <div id="show" class="career-details-hide-wrapper" style="display: none;">
      <div class="career-details-apply-info-box pb-10">
        <div class="career-details-profile-box pb-20">
          <h4 class="career-details-title-xs">Profile</h4>
          <p>Basic information about you</p>
        </div>
        <div class="postbox__comment-form">
          <form
            enctype="multipart/form-data"
            preventdefault:submit
            onSubmit$={handleFormSubmit}
            method="POST"
            class="box"
          >
            <div class="row gx-20">
              <div class="col-12">
                <div class="postbox__comment-input mb-30">
                  <input
                    type="text"
                    class="inputText"
                    required
                    value={fullName.value}
                    onInput$={(e) =>
                      (fullName.value = (e.target as HTMLInputElement).value)
                    }
                  />
                  <span class="floating-label">Full Name</span>
                </div>
              </div>
              <div class="col-12">
                <div class="postbox__comment-input mb-30">
                  <input
                    type="email"
                    class="inputText"
                    required
                    value={email.value}
                    onInput$={(e) =>
                      (email.value = (e.target as HTMLInputElement).value)
                    }
                  />
                  <span class="floating-label">Your Email</span>
                </div>
              </div>
              <div class="col-12">
                <div class="postbox__comment-input mb-30">
                  <input
                    type="number"
                    class="inputText"
                    required
                    value={phoneNumber.value}
                    onInput$={(e) =>
                      (phoneNumber.value = (e.target as HTMLInputElement).value)
                    }
                  />
                  <span class="floating-label">Phone</span>
                </div>
              </div>
              <div class="col-12">
                <div class="postbox__comment-input mb-35">
                  <input
                    type="text"
                    class="inputText"
                    required
                    value={address.value}
                    onInput$={(e) =>
                      (address.value = (e.target as HTMLInputElement).value)
                    }
                  />
                  <span class="floating-label">Address</span>
                </div>
              </div>
            </div>

            <div class="career-details-apply-info-box">
              <div class="career-details-profile-box pb-20">
                <h4 class="career-details-title-xs">Application Details</h4>
                <p>Summarize your relevant experience</p>
              </div>
              <div class="postbox__comment-form">
                <div class="row gx-20">
                  <div class="col-12">
                    <div class="postbox__comment-input mb-30">
                      <input
                        type="url"
                        class="inputText"
                        value={linkedInProfile.value}
                        onInput$={(e) =>
                          (linkedInProfile.value = (
                            e.target as HTMLInputElement
                          ).value)
                        }
                      />
                      <span class="floating-label">LinkedIn Profile</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="postbox__comment-input mb-30">
                      <input
                        type="url"
                        class="inputText"
                        value={personalWebsite.value}
                        onInput$={(e) =>
                          (personalWebsite.value = (
                            e.target as HTMLInputElement
                          ).value)
                        }
                      />
                      <span class="floating-label">
                        Personal website(Optional)
                      </span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="postbox__comment-input mb-30">
                      <input
                        type="number"
                        class="inputText"
                        required
                        value={yearsOfExperience.value}
                        onInput$={(e) =>
                          (yearsOfExperience.value = (
                            e.target as HTMLInputElement
                          ).value)
                        }
                      />
                      <span class="floating-label">Years of experience</span>
                    </div>
                  </div>
                  
                  <div class="col-12">
                    <div class="postbox__comment-input mb-35">
                      <input
                        type="text"
                        class="inputText"
                        required
                        value={expectedSalary.value}
                        onInput$={(e) =>
                          (expectedSalary.value = (
                            e.target as HTMLInputElement
                          ).value)
                        }
                      />
                      <span class="floating-label">Expected salary(TZS)</span>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-12">
                  <div class="postbox__authorization-title-box">
                    <h5 class="career-details-title-xs pb-15">
                      Work authorization<span>*</span>
                    </h5>
                  </div>
                  <div class="postbox__authorization p-relative">
                    <div class="switcher mb-15">
                      <label for="toggle-0">
                        <small class="switcher-icon">
                          <svg
                            width="15"
                            height="11"
                            viewBox="0 0 15 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 5.5H13.0305"
                              stroke="#5F6168"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.0234 1.5L14.0336 5.5L10.0234 9.5"
                              stroke="#5F6168"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Are you legally authorized to work in the United
                          Republic Of Tanzania?
                        </small>
                        <input
                          type="checkbox"
                          id="toggle-0"
                          checked={usWorkAuthorization.value}
                          onChange$={(e) =>
                            (usWorkAuthorization.value = (
                              e.target as HTMLInputElement
                            ).checked)
                          }
                        />
                        <span>
                          <small></small>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-12">
                  <div class="postbox__comment-input mb-30">
                    <textarea
                      class="textareaText"
                      required
                      value={personalNote.value}
                      onInput$={(e) =>
                        (personalNote.value = (
                          e.target as HTMLTextAreaElement
                        ).value)
                      }
                    ></textarea>
                    <span class="floating-label-2">Personal note</span>
                  </div>
                </div>
                <div class="col-12">
                  <div class="postbox__comment-input mb-30">
                    <input
                      type="url"
                      class="inputText"
                      // placeholder="https://example.com/resume.pdf"
                      required
                      value={resumeFile.value}
                      onInput$={(e) =>
                        (resumeFile.value = (
                          e.target as HTMLInputElement
                        ).value)
                      }
                    />
                    <span class="floating-label">Resume/CV (Link)</span>
                  </div>
                </div>
                <div class="col-12">
                  <div class="postbox__comment-input mb-30">
                    <input
                      type="url"
                      class="inputText"
                      // placeholder="https://example.com/coverletter.pdf"
                      required
                      value={coverLetter.value}
                      onInput$={(e) =>
                        (coverLetter.value = (
                          e.target as HTMLInputElement
                        ).value)
                      }
                    />
                    <span class="floating-label">Cover Letter (Link)</span>
                  </div>
                </div>
                <div class="col-12">
                  <div class="postbox__comment-input mb-30">
                    <input
                      type="url"
                      class="inputText"
                      // placeholder="https://example.com/resume.pdf"
                      required
                      value={portfolio.value}
                      onInput$={(e) =>
                        (portfolio.value = (
                          e.target as HTMLInputElement
                        ).value)
                      }
                    />
                    <span class="floating-label">Portfolio (Link)</span>
                  </div>
                </div>

                <div class="col-xxl-12">
                  <div class="postbox__btn-box mb-50">
                    <button type="submit" class="submit-btn w-100">
                      {loading.value ? "Submitting..." : "Submit Application"}
                    </button>
                    {message.value && <p>{message.value}</p>}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});
