import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import './Swiper.scss';
import { useRef, useState } from 'react';

const Slider = ({ slides }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isShowBtn, setIsShowBtn] = useState(true);
    const ref = useRef(null);

    function handleClickBtn() {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);

        if (nextIsPlaying) {
            ref.current.play();
            setIsShowBtn(false);
        } else {
            ref.current.pause();
        }
    }
    
    return (
        <>
            <Swiper
                navigation={true}
                rewind={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {slides?.map((slide, i) => (
                    <SwiperSlide key={i}>
                        {slide.includes('.mp4') ? (
                            <div className="video">
                                <video
                                    ref={ref}
                                    className="video__video"
                                    src={slide}
                                    controls
                                    height={600}
                                    width={770}
                                    onPlay={() => setIsPlaying(true)}
                                ></video>
                                <button
                                    onClick={handleClickBtn}
                                    className={isShowBtn ? "video__btn" : "video__btn-hidden"}
                                >
                                    PLAY
                                </button>
                            </div>
                        ) : (
                            <img src={slide} alt="app screenshot" />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Slider;
