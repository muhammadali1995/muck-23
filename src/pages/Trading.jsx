import { AutomaticTradingHeader } from "../components/AutomaticTradingHeader";
import Currencies from "../components/Currencies";
import Footer from "../components/Footer";
import MarketPlace from "../components/Marketplace";
import Steps from "../components/Steps";

import step1 from './../assets/STEP 1.png';
import step2 from './../assets/STEP 2.png';
import step3 from './../assets/STEP 3.png';

const stepsdb = [
    {
        img: step1,
        title: `Trade like a pro. Without being one.`,
        text: `You don’t need to be a pro to trade like one. Level up your game - and your results - by copying pro traders on our marketplace. Subscribe to trading signals, which tell your bot when to buy or sell. Use strategies from professionals to scan the markets, and download pre-configured bot templates.`
    },
    {
        order: 1,
        img: step2,
        title: `Find your ideal trading opportunity. Automatically, 24/7.`,
        text: `Don’t let the fear of a market shift keep you up at night. With our A.I., your bot can automatically recognise trends and switch to a better strategy, so you can rest easy. Create or download strategies and let your bot watch the markets for you, and buy or sell based on your parameters.`
    },
    {
        img: step3,
        title: `Trade like a pro. Without being one.`,
        text: `You don’t need to be a pro to trade like one. Level up your game - and your results - by copying pro traders on our marketplace. Subscribe to trading signals, which tell your bot when to buy or sell. Use strategies from professionals to scan the markets, and download pre-configured bot templates.`
    }
]

export default function Trading() {
    return (
        <>
            <AutomaticTradingHeader />
            <div className="-mt-25 sm:-mt-32">
                <Currencies />
            </div>
            <div className='mx-auto'>
                <div className='w-full p-8 md:max-w-[1200px] flex flex-col mx-auto'>
                    <h1 className='text-3xl md:text-[48px] font-light text-center uppercase my-15  md:my-25 mb-[68px] '>
                        How to start with
                        <span className='font-light md:font-bold inline md:block mt-4'>Automatic Trading?</span>
                    </h1>
                    <Steps stepsdb={stepsdb} />
                </div>
            </div>
            <MarketPlace />
        </>
    )
}