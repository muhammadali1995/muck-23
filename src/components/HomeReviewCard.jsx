import start from './../assets/star.png';
import openQuote from './../assets/open-quote.png';
import closeQuote from './../assets/closequote.png';
export const HomeReviewCard = ({ name, review, imageSrc }) => {
    return <div className='rounded-[30px] md:w-[561px]'>
        <div className="w-full h-[683px] px-5 md:px-10">
            <div className="flex justify-center gap-x-5">
                <img src={start} alt="start" className="w-10 h-10" />
                <img src={start} alt="start" className="w-10 h-10" />
                <img src={start} alt="start" className="w-10 h-10" />
                <img src={start} alt="start" className="w-10 h-10" />
                <img src={start} alt="start" className="w-10 h-10" />
            </div>
            <div className="flex justify-start items-baseline">
                <img src={openQuote} alt="open-quote" className="w-9 h-8" />
                <p className="text-lg font-bold">{name}</p>
            </div>
            <p className="text-center font-medium my-9">{review}</p>
            <img src={closeQuote} alt="" className="text-end w-9 h-8" />
        </div>
        <div className="w-full h-[85px]">
            <img src={imageSrc} alt="user-image" className="relative -top-[50%] w-[113px] h-[113px] rounded-full" />
        </div>
    </div>;
};
