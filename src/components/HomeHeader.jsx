import headerImage from './../assets/home-header.png';

export const HomeHeader = () => {
    return <div className="side-padding">
        <div className='grid grid-cols-2'>
            <div className="py-10 lg:py-16 2xl:pt-[128px] 2xl:pb-[307px] col-span-2 lg:col-span-1 text-center md:text-left">
                <h1 className="header-title text-color-text">
                    Easy
                    <br />
                    Efficient
                    <br />
                    <span className="text-accent"> Innovative</span>
                </h1>
                <p className="header-text text-black mt-[18px]">
                    Become a better trader. Powerfu l, AI-powered
                    <br className='hidden lg:block' />
                    crypto trading bot to help you save time, trade
                    <br className='hidden lg:block' />
                    24/7, and automate your trading.
                </p>
                <button className="header-btn-try mt-5 xl:mt-9">try it now</button>
            </div>
            <div className="col-span-2 lg:col-span-1 pt-[67px] pb-20 lg:pb-48 xl:pb-75 ">
                <img src={headerImage} alt="img-header" className="w-full max-h-[550px] h-full" />
            </div>
        </div>
    </div>;
};
