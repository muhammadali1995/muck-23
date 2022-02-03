import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const HomeOpinion = () => {
    return (
        <div className='py-37.5'>
            <div className="mx-auto text-center">
                <h1 className="text-5xl leading-[55px] uppercase mb-7 lg:mb-2">
                    <span className="font-bold">
                        your opinion is
                    </span>
                    <span className='block'>important to us</span>
                </h1>
                <p className="text-lg font-medium mb-[71px]  lg:mb-[110px]">
                    Check what succesful cryptocurrency traders say about us
                </p>
            </div>
        </div>
    );
};
