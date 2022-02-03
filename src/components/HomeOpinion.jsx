import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';

import cardImage from './../assets/card-image.png';
import { HomeReviewCard } from './HomeReviewCard';
import { SwiperPrev } from './SwiperPrev';
import { SwiperNext } from './SwiperNext';

const cardData = [
    {
        id: 1,
        name: 'gnomad',
        review: `"Good service,
         powerful features, 
         effective, affordable. 
         Highly recommend. 👌"`,
        imageSrc: cardImage,
    },
    {
        id: 2,
        name: 'Soflow Will',
        review: `"Very easy to use and incredibly affordable. Get the free trail to test it and learn the ropes, then upgrade. I upgraded twice after one week and i still use both subscriptions. Awesome selection of options. Unlimited strategies, lots of free built-ins. Spend time to learn the fundamentals of Technical Analysis - you'll be glad you did. Crypto Bot will soon become your best friend... and weapon of choice!"`,
        imageSrc: cardImage,
    },
    {
        id: 3,
        name: 'Chika Moronu',
        review: `"Took a while to get used to the settings, but once I got the hang of it, the app has been great"`,
        imageSrc: cardImage,
    },
    {
        id: 4,
        name: 'Damion La Bagh',
        review: `"The Cryptobot experience is simply amazing. Great instructions to help you on your way and s great community. The website is beautifully designed with full functionality. The app on the other hand is nice but it's not as full featured. It has the things you need to monitor your Bots and basically interact but doesn't have the nice graphs, charts or settings to create new strategies like the website does. so one is still dependant on a laptop or computer to get everything set up 1st before"`,
        imageSrc: cardImage,
    },
    {
        id: 5,
        name: 'Mitchell Kemp',
        review: `"Excellent!"`,
        imageSrc: cardImage,
    },
    {
        id: 6,
        name: 'Galen Grassi',
        review: `"So far for a begginer I'm enjoying this, got a lot to learn but it's a good platform with useful tutorials to assist you along.. I would recommend cryptobot."`,
        imageSrc: cardImage,
    }
]


export const HomeOpinion = () => {
    const ref = useRef(null);
    const goNext = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slidePrev();
        }
    };
    return (
        <div className='pb-25 lg:pb-37.5'>
            <div className="mx-auto text-center">
                <h1 className="text-[28px] lg:text-5xl lg:leading-[55px] uppercase mb-7 lg:mb-2">
                    <span className="font-bold">
                        your opinion is
                    </span>
                    <span className='block'>important to us</span>
                </h1>
                <p className="text-base lg:text-lg font-medium mb-[71px]  lg:mb-[110px]">
                    Check what succesful cryptocurrency traders say about us
                </p>
            </div>
            <div className="max-w-[1260px] mx-auto hidden lg:flex items-center gap-5 ">
                <SwiperPrev goPrev={goPrev} />
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={40}
                    slidesPerView={2}
                    ref={ref}
                >
                    {cardData.map(
                        (item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <HomeReviewCard name={item.name} review={item.review} imageSrc={item.imageSrc} />
                                </SwiperSlide>
                            );
                        }
                    )}
                </Swiper>
                <SwiperNext goNext={goNext} />
            </div>
            <div className="lg:hidden">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={40}
                    slidesPerView={1}
                >
                    {cardData.map(
                        (item, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <HomeReviewCard name={item.name} review={item.review} imageSrc={item.imageSrc} />
                                </SwiperSlide>
                            )
                        }
                    )}
                </Swiper>
            </div>
        </div>

    );
};
