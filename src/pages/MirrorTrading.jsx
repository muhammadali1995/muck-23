import MirrorTraderMain from './../components/MirrorTraderMain'
import Currencies from './../components/Currencies'
import Steps from './../components/Steps'
import Marketplace from './../components/Marketplace'
import Footer from './../components/Footer';

import step1 from './../assets/STEP 1.png';
import step2 from './../assets/STEP 2.png';
import step3 from './../assets/STEP 3.png';

const stepsdb = [
    { img: step1, title: `You don't need to be an expert to trade like one.`, text: 'The marketplace is one of the most exciting things on No name 1. It is a place where strategies can be bought and sold at an instance and fed to your bot. There are three main categories in the marketplace: signals, strategies and templates.' },
    { order: 1, img: step2, title: 'You can follow an Expert', text: 'Crypto signals are sent by third party technical analysts working hard to pinpoint on-the-rise coins. Once they have spotted a promising investment, they share that knowledge with anyone subscribed to them. In the past, they would send these signals to exclusive pay-to-play crypto signal groups and users would manually buy a coin they recommend to buy. No name 1 was the first to automate this process, so that if a signaler sends out a trade signal, your bot will pick up on it instantaneously an execute a buy or sell order. 24/7.' },
    { img: step3, title: 'Coin selections, stop-losses and morE', text: 'Custom selections of coins, configuration settings and other specific features that your bot needs to trade. Usually offered by sellers to compliment strategies. Indicators are coin specific.Not all will be set up optimally for specific market conditions.So, the template marketplace usually offers a template that can be used along with the strategies you bought from the pro trader on the strategy marketplace.There are also various free starter templates offered by No name 1 to help you get started.' }
]

export default function MirrorTrading() {
    return (
        <>
            <MirrorTraderMain stepsdb={stepsdb} />
            <div className='-mt-28'>
                <Currencies />
            </div>
            <div className='mx-auto'>
                <div className='w-full p-8 md:max-w-[1200px] flex flex-col mx-auto'>
                    <h1 className='text-3xl md:text-[48px] font-light text-center uppercase my-15  md:my-25 mb-[68px] '>
                        How to start with
                        <span className='font-light md:font-bold inline md:block mt-4'>Mirror Trading?</span>
                    </h1>
                    <Steps stepsdb={stepsdb} />
                </div>
            </div>
            <Marketplace />
            <div className='mt-20'>
                <Footer />
            </div>
        </>
    )
}