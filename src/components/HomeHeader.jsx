import Navbar from "./Navbar";

import Registration from "../components/Registration";
import headerImage from './../assets/home-header.png';

export const HomeHeader = () => {
    return <>
        <div className="home-header bg-secondary px-10 md:px-16 lg:px-28 2xl:px-[200px] 3xl:pl-75 3xl:pr-[312px]">
            <div className="md:py-5 lg:py-7 2xl:py-10">
                <Registration color={'text-color-text'} />
            </div>
            <div className="py-5 lg:py-0">
                <Navbar navColor={'text-color-text'} />
            </div>
            <div className='grid grid-cols-2'>
                <div className="py-10 lg:py-16 2xl:pt-[128px] 2xl:pb-[307px] col-span-2 lg:col-span-1 text-center lg:text-left">
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
        </div>
    </>;
};
