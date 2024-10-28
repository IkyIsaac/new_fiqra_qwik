// src/components/SwiperComponent.tsx
import { component$ } from '@builder.io/qwik';
import { useStore } from '@builder.io/qwik';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export const SwiperComponent = component$(() => {
  // Store to hold the swiper instance
  const state = useStore({ swiperInstance: null });

  // Function to initialize Swiper
  const initializeSwiper = () => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!state.swiperInstance) {
      state.swiperInstance = new Swiper('.swiper-container', {
        modules: [Autoplay],
        autoplay: {
          delay: 5000, // 5 seconds
          disableOnInteraction: false,
        },
        loop: true, // Enable looping
      });
    }
  };

  // Call initializeSwiper when the component mounts
  initializeSwiper();

  return (
    <div class="container-fluid g-0">
      <div class="row g-0">
        <div class="col-xl-12">
          <div class="journey-slider-wrapper">
            <div class="swiper-container journey-slider-active">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="journey-slider-item p-relative">
                    <div class="journey-stroke-text">
                      <h2>01</h2>
                    </div>
                    <div class="journey-slider-meta">
                      <span>OCT 2019</span>
                    </div>
                    <div class="journey-slider-content">
                      <h4 class="journey-slider-title">
                        Our Vision <br />
                        Of a better Way
                      </h4>
                      <p>
                        We envision sales teams having the tools <br />
                        and talent they need to make remote <br /> work.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Add more slides here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
