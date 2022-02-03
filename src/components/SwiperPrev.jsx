import { useSwiper } from 'swiper/react';
import ArrowLeft from '../assets/ArrowLeft.png';

export const SwiperPrev = () => {
    const swiper = useSwiper();
    return <>
        <button onClick={() => { swiper.slideNext() }}>
            <img src={ArrowLeft} alt="arrow-f" className="w-24" />
        </button>
    </>;
};
