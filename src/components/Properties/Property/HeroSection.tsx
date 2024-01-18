/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../../../css/style.css';

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';

const HeroSection = () => {
      const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

      return (
            <section className="hero_section">
                  <div className="container">
                        <div className="head_container">
                              <div className="left_content">
                                    <h2>Seaside Serenity Villa</h2>
                                    <div className="location">
                                          <span className="material-symbols-outlined">
                                          location_on
                                          </span>
                                          <span>Malibu, California</span>
                                    </div>
                              </div>
                              <div className="right_content">
                                    <p className="text">Price</p>
                                    <span className="pricing">$1,250,000</span>
                              </div>
                        </div>

                        <div className="image_carousel_container">
                              <Swiper
                              onSwiper={setThumbsSwiper}
                              spaceBetween={10}
                              loop={true}
                              slidesPerView={8}
                              freeMode={true}
                              watchSlidesProgress={true}
                              modules={[FreeMode, Navigation, Thumbs]}
                              className="mySwiper thumbs"
                              >
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                    </SwiperSlide>
                              </Swiper>

                              <Swiper
                                    loop={true}
                                    slidesPerView={2}
                                    spaceBetween={10}
                                    navigation={true}
                                    pagination={{
                                          type: 'custom',
                                          renderCustom: function (swiper, current, total) {
                                                return `<span>${current}</span><span style="color:#919191; margin:0 2px 0 4px;">of ${total}</span>`; 
                                          }
                                    }}
                                    breakpoints={{
                                          0: {
                                                slidesPerView:1,
                                                spaceBetween: 10,
                                          },
                                          640: {
                                                slidesPerView:1,
                                                spaceBetween: 10,
                                          },
                                          768: {
                                                slidesPerView:2,
                                                spaceBetween: 10,
                                          },
                                          1024: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                          }
                                    }}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs, Pagination]}
                                    className="mySwiper2 main_swiper"
                                    >
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                    </SwiperSlide>
                              </Swiper>
                        </div>
                  </div>
            </section>
      )
}

export default HeroSection;