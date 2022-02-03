import Navbar from "./Navbar";
import Registration from "./Registration";
import headerImage from './../assets/automatictradingheader.png';

export const AutomaticTradingHeader = () => {
    return <div className='bg-dark-primary home-header px-10 md:px-16 lg:px-28 2xl:px-[200px] 3xl:pl-75 3xl:pr-80'>
        <div className="pt-16 pb-11">
            <Registration color={'text-white'} />
        </div>
        <Navbar navColor={'text-white'} />
        <div className='grid grid-cols-2'>
            <div className="py-10 lg:py-16 2xl:pt-[149px] 2xl:pb-[307px] col-span-2 lg:col-span-1 text-center lg:text-left">
                <h1 className="header-title text-white">
                    Bots don't
                    <br />
                    <span className="text-accent">
                        need sleep
                    </span>
                </h1>
                <p className="header-text text-white mt-[18px]">
                    Become a better trader. Powerfu l, AI-powered
                    <br className='hidden lg:block' />
                    crypto trading bot to help you save time, trade
                    <br className='hidden lg:block' />
                    24/7, and automate your trading.
                </p>
                <button className="header-btn-try mt-5 xl:mt-9">try it now</button>
            </div>
            <div className="col-span-2 lg:col-span-1 pt-20 lg:pt-32 xl:pt-[171px] pb-20 lg:pb-44 xl:pb-[235px]">
                <img src={headerImage} alt="img-header" className="w-full max-h-[550px] h-full" />
            </div>
        </div>
    </div>;
};
