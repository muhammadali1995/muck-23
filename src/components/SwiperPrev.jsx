import ArrowLeft from '../assets/ArrowLeft.png';

export const SwiperPrev = ({goPrev}) => {
    return <>
        <button onClick={goPrev}>
            <img src={ArrowLeft} alt="arrow-f" className="w-[21vw]" />
        </button>
    </>;
};
