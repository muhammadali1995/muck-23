import rarrow from '../assets/ArrowRight.png';

export const SwiperNext = ({goNext}) => {
    return <>
        <button onClick={goNext}>
            <img src={rarrow} alt="arrow-r" className="w-24" />
        </button>
    </>;
};
