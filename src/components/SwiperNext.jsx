import { useSwiper } from 'swiper/react';
import rarrow from '../assets/ArrowRight.png';

export const SwiperNext = () => {
    const swiper = useSwiper();
    return <>
        <button onClick={() => { swiper.slideNext() }}>
            <img src={rarrow} alt="arrow-r" className="w-24" />
        </button>
    </>;
};
