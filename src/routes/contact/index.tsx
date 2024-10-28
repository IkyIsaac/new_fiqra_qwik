import ImgBreadcrumbShape1 from "~/media/assets/img/breadcrumb/breadcrumb-shape-1.png?jsx";
import ImgBreadcrumbShape2 from "~/media/assets/img/breadcrumb/breadcrumb-shape-2.png?jsx";
import ImgContactIconSm4 from "~/media/assets/img/contact/contact-icon-sm-4.png?jsx";
import ImgContactIconSm1 from "~/media/assets/img/contact/contact-icon-sm-1.png?jsx";
import ImgContactIconSm2 from "~/media/assets/img/contact/contact-icon-sm-2.png?jsx";
import ImgContactIconSm3 from "~/media/assets/img/contact/contact-icon-sm-3.png?jsx";
import { $, component$, useSignal } from "@builder.io/qwik";
import emailjs from "emailjs-com";
import Try_service from "~/components/try_service";
import Footer_ from "~/components/footer_";

export default component$(() => {
  const userName = useSignal("");
  const email = useSignal("");
  const phoneNumber = useSignal("");
  const subject = useSignal("");
  const userMessage = useSignal("");
  const loading = useSignal(false);
  const message = useSignal("");

  const handleFormSubmit = $(async (e: Event) => {
    e.preventDefault();
    console.log("Form submission started"); 

    loading.value = true;

    const formData = {
      userName: userName.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      subject: subject.value,
      message: `

      Phone: ${phoneNumber.value}
      Message:${userMessage.value}
      Subject:${subject.value}
      `

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
        message.value = "Message sent successfully!";

        userName.value = "";
        email.value = "";
        phoneNumber.value = "";
        subject.value = "";
        userMessage.value = "";
      } else {
        message.value = "Failed to send message.";
      }
    } catch (err) {
      console.error("Error:", err);
      message.value = "An error occurred while sending the message.";
    }

    loading.value = false;
    setTimeout(() => {
      message.value = "";
    }, 4000);
  });

  return (
    <main>
      <div class="about-banner-area p-relative">
        <div class="about-shape-1 z-index-3">
          <ImgBreadcrumbShape1 alt="" />
        </div>
        <div class="about-shape-2 z-index-3">
          <ImgBreadcrumbShape2 alt="" />
        </div>
        <div class="about-banner p-relative z-index fix">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="about-banner-content">
                  <h4
                    class="about-banner-title"
                    data-parallax='{"y": 1000, "smoothness": 10}'
                  >
                    <span>Get In</span> <br />
                    <span>Touch</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-img-area mb-100 z-index-3">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="about-img about-img-height p-relative background-dark-overlay"
                data-background="/assets/img/about/124243.jpg"
              >
                <div class="about-img-content">
                  <h4
                    class="about-img-title"
                    data-parallax='{"y": 1000, "smoothness": 10}'
                  >
                    <span>Get In</span> <br />
                    <span>Touch</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-info-area pb-90">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-30">
              <div class="contact-info-item card-bg" style="background-image: url('/assets/img/contact/office_a.png');">
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 mb-30">
              <div class="contact-info-item p-relative">
                <div class="contact-info-badge">
                  <span>Main Office</span>
                </div>
                <div class="contact-info-img">
                  <img
                    width="180"
                    height="180"
                    // eslint-disable-next-line qwik/jsx-img
                    src="/assets/img/contact/office.png"
                    alt=""
                  />
                </div>
                <div class="contact-info-title-box">
                  <h5 class="contact-info-title-sm">
                    <a href="#">Dar es Salaam</a>
                  </h5>
                  <p>
                    6th Floor Mwanga Tower
                    <br />
                    Makumbusho, Dar es Salaam
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 mb-30">
            <div class="contact-info-item card-bg" style="background-image: url('/assets/img/contact/office_c.jpeg'); background-size: contain; background-position: center; background-repeat: no-repeat; height:100%;">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-form-area pb-120">
        <div class="container">
          <div class="row gx-0">
            <div class="col-xl-5 col-lg-6">
              <div class="contact-form-left">
                <div class="contact-form-section-box pb-80">
                  <h5 class="inner-section-subtitle">CONTACT US</h5>
                  <h4 class="tp-section-title pb-10">
                    We'd love to <br /> hear From
                    <span>
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <rect width="44" height="44" fill="url(#pattern0)" />
                        <defs>
                          <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlink:href="#image0_2106_35"
                              transform="translate(-0.425532 -0.170213) scale(0.0212766)"
                            />
                          </pattern>
                          <image
                            id="image0_2106_35"
                            width="83"
                            height="66"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABCCAYAAAArOOo+AAADcklEQVR4nO2bP0wTURzHP5RqQhyMtyJNTCcTnKCLnVhs4sRmHRk10U0WFhcXiQskuDPhxirRQZMagn8WB1gatTqQiMV/qRBM6nB99oDe9Y7+3mvf8T5j03u/yyfv97vvK8dQs9ls4hAh0+8bSBNOpiBOpiBOpiBOpiBOpiBOpiBOpiCnWma1AmvzUK/JrJeVWcYeqhWovoKnDw9/fu1e72ufCplhAhUXLsrUSa3MbgKD5IsyNVMlM4nAIF5Opr71Mk8qUFEoy92LlTJ7FRgkf7X3NRRDtvyeKSkwyKOvcmsN9M6UEuiNQf3z8c8lWxwGUKbkDvTGoHAzfC3JFocBkamjhfNFKC/Ag4no70jSN5m6ZiBAadY/0SxNR39PKhIpjMrUKRD8ti4v+jtubd6vF4b0vAQDMnULVOSLcHu1XbNbPel5CZqiUb0Gb57oF6hQba1qR81JhWQkUmjZmY+nO0cRaYJtrVi52/06HS0OmmTeWm239+sVHRUOt7Wi25z8f62GFgcDJ6B6TV5ssK0V1Ur3p7di7q38kxwMHyd7FduprdW6ceakQse8BBg6OPjbzGaH9aweQVKxndpasTQdr73Bn5flxfj3mYTMyxfv9KzcBS/nH/XKi37blRfCHwyl2XCRceekQte8BBg+N3Lp/tRUgTNn+3eyHDkPo1dg/LovdHTc/2zvB8wsh0uuVmDlTrJaM8u9328Y2efPNtjc/MDE5GV9VRLg5dq7Nop6Lf4DR6ErEiky29vfWF9/r7eKBuLkyaPobHFo/d18a+sjjcae3kqCJJ2TCulfiY6SAah92rZGZpxzdxg6smWQDMDOznd2d3/qrSRE0jmp0D0voSXzT2OP/f0D/dUEKM2e7Drd8xJaMqvVL/z+1dBfTYDJGye7rls6kMC6F7e8XPKWNdHiYKFMSP6SlYkWB0tlerlkMUd3JFJYKROglGB36o5ECmtl5ovxdpypeQkWywQoxHiym5qXYLnMWDvTQCRSWC3Ty0WHeJMtDpbLhOgQb7LFIQUyo0K8qUiksF4mhId4U5FIkQqZnUK86XkJKZEJx0O86XkJKZJ5NMSbjESK1MiEdojvR4tDymTmi61Xr/skcyBew5bCy8Fcf96pAFK2M/uNkymINf9UZQNuZwriZAriZAriZAriZAriZAriZAriZAryD4xxER8vOFEDAAAAAElFTkSuQmCC"
                          />
                        </defs>
                      </svg>
                    </span>
                    you.
                  </h4>
                  <p>
                    While we're good with smoke signals, there <br /> are easier
                    ways to get in touch.
                  </p>
                </div>
                <div class="contact-form-social-box p-relative">
                  <div class="contact-form-social-item">
                    <a href="https://www.facebook.com/techfiqra">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://x.com/FiqraTech">
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
                    </a>
                    <a href="https://www.linkedin.com/company/vijanatech/">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/fiqra.tech/">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div class="contact-form-section-img">
                    <ImgContactIconSm4 alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-7 col-lg-6">
              <div class="contact-form-right-warp">
                <div class="postbox__comment-form">
                  <form
                    preventdefault:submit
                    onSubmit$={handleFormSubmit}
                    method="POST"
                    class="box"
                  >
                    <div class="row gx-20">
                      {/* Full Name Input */}
                      <div class="col-12">
                        <div class="postbox__comment-input mb-30">
                          <input
                            type="text"
                            class="inputText"
                            value={userName.value}
                            required
                            onInput$={(e) =>
                              (userName.value = (
                                e.target as HTMLInputElement
                              ).value)
                            }
                          />
                          <span class="floating-label">Full Name</span>
                        </div>
                      </div>

                      {/* Email Input */}
                      <div class="col-12">
                        <div class="postbox__comment-input mb-30">
                          <input
                            type="email"
                            class="inputText"
                            value={email.value}
                            required
                            onInput$={(e) =>
                              (email.value = (
                                e.target as HTMLInputElement
                              ).value)
                            }
                          />
                          <span class="floating-label">Your Email</span>
                        </div>
                      </div>

                      {/* Phone Number Input */}
                      <div class="col-12">
                        <div class="postbox__comment-input mb-35">
                          <input
                            type="text"
                            class="inputText"
                            value={phoneNumber.value}
                            required
                            onInput$={(e) =>
                              (phoneNumber.value = (
                                e.target as HTMLInputElement
                              ).value)
                            }
                          />
                          <span class="floating-label">Phone Number</span>
                        </div>
                      </div>

                      {/* Inquiry Select Box */}
                      <div class="col-12">
                        <div class="postbox__select mb-30">
                          <select
                            value={subject.value}
                            onChange$={(e) =>
                              (subject.value = (
                                e.target as HTMLSelectElement
                              ).value)
                            }
                          >
                            <option>Your Inquiry about</option>
                            <option>Website Design & Development</option>
                            <option>Mobile Apps Development</option>
                            <option>Social Media Marketing</option>
                            <option>Digital Literacy Training</option>
                          </select>
                        </div>
                      </div>

                      {/* Message Textarea */}
                      <div class="col-xxl-12">
                        <div class="postbox__comment-input mb-30">
                          <textarea
                            class="textareaText"
                            value={userMessage.value}
                            required
                            onInput$={(e) =>
                              (userMessage.value = (
                                e.target as HTMLTextAreaElement
                              ).value)
                            }
                          ></textarea>
                          <span class="floating-label-2">Message...</span>
                        </div>
                      </div>

                      {/* Submit Button + Success/Failure Message */}
                      <div class="col-xl-12">
                        <div class="flex justify-center items-center w-100">
                          {message.value && (
                            <p class="text-white text-center">
                              {message.value}
                            </p>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={loading.value}
                          class="submit-btn w-100 rounded-4"
                        >
                          {loading.value ? "Sending..." : "Send your Request"}
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* Success/Failure Message */}
                  {message.value && (
                    <div class="message">
                      <p>{message.value}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-inner-area pb-130">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="contact-inner-title-sm-wrap text-center mb-50">
                <h4 class="contact-inner-title-sm">Book a Demo!</h4>
                <p>We will contact again after receive your request in 24h</p>
              </div>
            </div>
          </div>
          <div class="contact-inner-wrapper">
            <div class="row gx-0">
              <div class="col-xl-4 col-lg-4">
                <div class="contact-inner-item d-flex align-items-center justify-content-center">
                  <div class="contact-inner-img contact-img-1">
                    <ImgContactIconSm1 alt="" />
                  </div>
                  <div class="contact-inner-Link">
                    <a href="mailto:info@fiqra.io">info@fiqra.io</a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4">
                <div class="contact-inner-item d-flex align-items-center justify-content-center">
                  <div class="contact-inner-img contact-img-2">
                    <ImgContactIconSm2 alt="" />
                  </div>
                  <div class="contact-inner-Link">
                    <a href="tel:+255753525629">+255 753 525 629</a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4">
                <div class="contact-inner-item d-flex align-items-center justify-content-center">
                  <div class="contact-inner-img contact-img-3">
                    <ImgContactIconSm3 alt="" />
                  </div>
                  <div class="contact-inner-Link">
                    <a
                      href="https://www.google.com.bd/maps/@23.7806365,90.4193257,12z"
                      target="_blank"
                    >
                      Makumbusho DSM
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Try_service />
      <Footer_ />
    </main>
  );
});
