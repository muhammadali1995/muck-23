import star from './../assets/star.png';
import openQuote from './../assets/open-quote.png';
import closeQuote from './../assets/closequote.png';
export const HomeReviewCard = ({ name, review, imageSrc }) => {
    return <div className='px-7.5 sm:px-14 md:px-0 lg:max-w-[560px]'>
        <div className="w-full sm:h-[683px] px-5 pt-15 md:px-10 rounded-t-[30px] text-white bg-gradient-to-br from-primary via-blue-500 to-yellow-100">
            <div className="flex justify-center gap-x-3 sm:gap-x-5 mb-3">
                <img src={star} alt="star-1" className="w-[30px] sm:w-10 h-[30px] sm:h-10" />
                <img src={star} alt="star-2" className="w-[30px] sm:w-10 h-[30px] sm:h-10" />
                <img src={star} alt="star-3" className="w-[30px] sm:w-10 h-[30px] sm:h-10" />
                <img src={star} alt="star-4" className="w-[30px] sm:w-10 h-[30px] sm:h-10" />
                <img src={star} alt="star-5" className="w-[30px] sm:w-10 h-[30px] sm:h-10" />
            </div>
            <p className="text-lg leading-7 text-center mb-2.5">5 out of 5 stars</p>
            <div className="flex justify-start items-start">
                <img src={openQuote} alt="open-quote" className="w-9 h-8" />
                <p className="text-lg font-bold text-white flex-grow text-center">{name}</p>
            </div>
            <p className="text-sm sm:text-base text-center font-medium my-9">{review}</p>
            <div className="flex justify-end">
                <img src={closeQuote} alt="" className="block w-9 h-8" />
            </div>
        </div>
        <div className="w-full h-[85px] flex justify-center bg-primary rounded-b-[30px]">
            <img src={imageSrc} className="relative -top-1/2 sm:-top-[70%] w-20 sm:w-[113px] h-20 sm:h-[113px] rounded-full" alt="user" />
        </div>
    </div>;
};
