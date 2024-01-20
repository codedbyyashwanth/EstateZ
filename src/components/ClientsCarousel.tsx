// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ValuedClient } from '../util/PropTypes';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Autoplay, Navigation, Pagination } from 'swiper/modules';

const ClientsCarousel = (props: { valuedClients: ValuedClient[]}) => {
      
      return (
            <div className="carousel_container">
                  <Swiper
                        slidesPerView={2}
                        spaceBetween={50}
                        navigation={true}
                        pagination={{
                              type: 'custom',
                              renderCustom: function (_swiper, current, total) {
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
                                    spaceBetween: 10,
                              },
                              768: {
                                    slidesPerView:2,
                                    spaceBetween: 10,
                              },
                              1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                              },
                        }}
                        modules={[FreeMode, Autoplay, Navigation, Pagination]}
                        className="mySwiper">
                        {
                              props.valuedClients.map((item, index) => {
                                    return (
                                          <SwiperSlide key={index}>
                                                <div className="clients_item">
                                                      <div className="head_text">
                                                            <div className="left_content">
                                                                  <p className="text">Since {item.year}</p>
                                                                  <h2>{item.domain}</h2>
                                                            </div>

                                                            <a href="#" className="secondary_btn">Visit Website</a>
                                                      </div>

                                                      <div className="info_content">
                                                            <div className="info">
                                                                  <p className="text">
                                                                        <span className="material-symbols-outlined">
                                                                        dashboard
                                                                        </span>
                                                                        <span>Domain</span>
                                                                  </p>
                                                                  <h4>{item.domain}</h4>
                                                            </div>
                                                            <div className="info">
                                                                  <p className="text">
                                                                        <span className="material-symbols-outlined">
                                                                        category
                                                                        </span>
                                                                        <span>Category</span>
                                                                  </p>
                                                                  <h4>{item.category}</h4>
                                                            </div>
                                                      </div>

                                                      <div className="comment">
                                                            <p className="text">What They Said 🤗</p>
                                                            <p>
                                                                  {item.testimonial}
                                                            </p>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                    )
                              })
                        }
                        <hr />
                  </Swiper>
                  <a href="#" className="secondary_btn" style={{marginTop: "1rem"}}>View All Client's</a>
            </div>
      );
}

export default ClientsCarousel;