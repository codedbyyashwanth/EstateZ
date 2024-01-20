// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { RealEstateProperty } from '../util/PropTypes';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Autoplay, Navigation, Pagination } from 'swiper/modules';

const PropertyCarousel = (props: { realEstateProperties: RealEstateProperty[]}) => {
      
      return (
            <div className="carousel_container">
                  <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={true}
                        pagination={{
                              type: 'custom',
                              renderCustom: function (_swiper, current, total) {
                                    return `<span>${current}</span><span style="color:#919191; margin:0 2px 0 4px;">of 0${total}</span>`; 
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
                              props.realEstateProperties.map((item, index) => {
                                    return (
                                          <SwiperSlide key={index}>
                                                <div className="img_container">
                                                      <img src={item.imageUrl} alt="" />
                                                </div>
                                                <div className="text_container">
                                                      <h4>{item.name}</h4>
                                                      <p className="text">
                                                            {item.description} 
                                                      </p>
                                                      <div className="tags_container">
                                                            <div className="tag">
                                                                  <span className="material-symbols-outlined">
                                                                  single_bed
                                                                  </span>
                                                                  <p>{item.bedrooms}-Bedroom</p>
                                                            </div>
                                                            <div className="tag">
                                                                  <span className="material-symbols-outlined">
                                                                  bathtub
                                                                  </span>
                                                                  <p>{item.bathrooms}-Bathroom</p>
                                                            </div>
                                                            <div className="tag">
                                                                  <span className="material-symbols-outlined">
                                                                  apartment
                                                                  </span>
                                                                  <p>Villa</p>
                                                            </div>
                                                      </div>
                                                      <div className="action_container">
                                                            <div className="price_action">
                                                                  <p className="text">Price</p>
                                                                  <h2 className="price">{item.priceUSD}</h2>
                                                            </div>
                                                            <a href="#" className="primary_btn">View Property Details</a>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                    )
                              })
                        }
                        <hr />
                  </Swiper>
                        <a href="#" className="secondary_btn">View All Properties</a>
            </div>
      );
}

export default PropertyCarousel;