// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Testimonial } from '../util/PropTypes';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Autoplay, Navigation, Pagination } from 'swiper/modules';

const TestimonialsCarousel = (props: { testimonials: Testimonial[]}) => {
      
      return (
            <div className="carousel_container">
                  <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={true}
                        pagination={{
                              type: 'custom',
                              renderCustom: function (swiper, current, total) {
                                    return `<span>${current}</span><span style="color:#919191; margin:0 2px 0 4px;">of ${total}</span>`; 
                              }
                        }}
                        autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                        }}
                        breakpoints={{
                              0: {
                                    slidesPerView:1,
                                    spaceBetween: 10,
                              },
                              640: {
                                    slidesPerView:1,
                                    spaceBetween: 0,
                              },
                              768: {
                                    slidesPerView:2,
                                    spaceBetween: 10,
                              },
                              1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                              },
                        }}
                        modules={[FreeMode, Autoplay, Navigation, Pagination]}
                        className="mySwiper">
                        {
                              props.testimonials.map((item, index) => {
                                    return (
                                          <SwiperSlide key={index}>
                                                <div className="testimonial_item">
                                                      <div className="ratings">
                                                            <img src="/star.png" alt="" />
                                                            <img src="/star.png" alt="" />
                                                            <img src="/star.png" alt="" />
                                                            <img src="/star.png" alt="" />
                                                            <img src="/star.png" alt="" />
                                                      </div>
                                                      <h3>{item.title}</h3>
                                                      <p className="text">{item.description}</p>

                                                      <div className="profile_container">
                                                            <div className="img_container">
                                                                  <img src={item.profilePicUrl} alt="" />
                                                            </div>
                                                            <div className="text_content">
                                                                  <h4>{item.testimonialName}</h4>
                                                                  <p className="text">{item.location.city}, {item.location.country}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                    )
                              })
                        }
                        <hr />
                  </Swiper>
                  <a href="#" className="secondary_btn">View All Testimonials</a>
            </div>
      );
}

export default TestimonialsCarousel;