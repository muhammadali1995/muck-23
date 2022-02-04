import SolutionMain from "../components/SolutionMain";
import Marketplace from './../components/Marketplace'
import step1 from './../assets/STEP 1.png';
import step2 from './../assets/STEP 2.png';
import step3 from './../assets/STEP 3.png';
import step4 from './../assets/STEP 4.png';
import Steps from "../components/Steps";

const stepsdb = [
    { img: step1, title: `Trade like a pro. Skip the learning curve.`, text: 'Become a pro by copying pro traders on our marketplace. Download strategies from professionals and scan the markets, or download pre-configured bot templates. Or simply follow trading signals, which tell your bot exactly when to buy or sell.' },
    { order: 1, img: step2, title: 'Watch the markets. Simultaneously. 24/7.', text: 'Crypto trading is 24/7. So is your No name 1. Your Bot scans up to 75 markets, simultaneously. It does the work, so you don`t have to.' },
    { img: step3, title: 'The magic touch, only a bot can do.', text: 'Selling too early? Use the trailing stop-loss, which tracks the price up and only sells when it drops. Buying at the wrong moments? Use DCA to buy extra and lower your average buying price. All automatically.' },
    { order: 1, img: step4, title: 'We’ve got your back.', text: 'We understand that starting with No name 1 can be a lot to take in. That`s why our kind and knowledgeable support agents are ready to help you 24/7. See them as your private trading mentors, here to answer all your questions whenever you don`t understand something.' }
]


export default function Solution() {
    return (
        <>
            <SolutionMain />
            <div className='mx-auto'>
                <div className='w-full p-8 md:max-w-[1200px] flex flex-col mx-auto'>
                    <h1 className='text-3xl md:text-[48px] font-light text-center uppercase my-15  md:my-25 mb-[68px] '>
                        Solution for
                        <span className='font-light md:font-bold inline md:block mt-4'>
                            Individuals
                        </span>
                    </h1>
                    <Steps stepsdb={stepsdb} />
                </div>
            </div>
            <Marketplace />
        </>
    )
}