import { HomeAutomateTrade } from "../components/HomeAutomateTrade";
import Navbar from "../components/Navbar";
import { Partners } from "../components/Partners";
import Registration from "../components/Registration";
import headerImage from './../assets/home-header.png';

export default function Home() {
    return (
        <>
            <div className="home-header bg-secondary 3xl:pl-75 3xl:pr-[312px]">
                <div className="py-10">
                    <Registration />
                </div>
                <Navbar />
                <div className='grid grid-cols-2'>
                    <div className="pt-[128px] pb-[307px] col-span-1">
                        <h1 className="header-title text-color-text">
                            Easy
                            <br />
                            Efficient
                            <br />
                            <span className="text-accent"> Innovative</span>
                        </h1>
                        <p className="header-text text-black mt-[18px]">
                            Become a better trader. Powerfu l, AI-powered
                            <br />
                            crypto trading bot to help you save time, trade
                            <br />
                            24/7, and automate your trading.
                        </p>
                        <button className="header-btn-try mt-9">try it now</button>
                    </div>
                    <div className="col-span-1 pt-[67px] pb-75">
                        <img src={headerImage} alt="img-header" className="w-full max-h-[550px] h-full" />
                    </div>
                </div>
            </div>
            <div className="3xl:px-52 relative -top-32">
                <HomeAutomateTrade />
            </div>
            <div className="px-[486px]">
                <Partners />
            </div>
        </>
    )
}