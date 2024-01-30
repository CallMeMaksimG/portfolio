import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import './Swiper.scss';

const Slider = ({ slides }) => {
    return (
        <>
            <Swiper
                navigation={true}
                rewind={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide>
                        <img src={slide} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Slider;
