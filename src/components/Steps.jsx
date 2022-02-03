import step1 from './../assets/STEP 1.png'
import step2 from './../assets/STEP 2.png'
import step3 from './../assets/STEP 3.png'

export default function Steps() {
    const stepsdb = [
        { img: step1, title: `You don't need to be an expert to trade like one.`, text: 'The marketplace is one of the most exciting things on No name 1. It is a place where strategies can be bought and sold at an instance and fed to your bot. There are three main categories in the marketplace: signals, strategies and templates.' },
        { order: 1, img: step2, title: 'You can follow an Expert', text: 'Crypto signals are sent by third party technical analysts working hard to pinpoint on-the-rise coins. Once they have spotted a promising investment, they share that knowledge with anyone subscribed to them. In the past, they would send these signals to exclusive pay-to-play crypto signal groups and users would manually buy a coin they recommend to buy. No name 1 was the first to automate this process, so that if a signaler sends out a trade signal, your bot will pick up on it instantaneously an execute a buy or sell order. 24/7.' },
        {
            img: step3, title: 'Coin selections, stop-losses and morE', text: 'Custom selections of coins, configuration settings and other specific features that your bot needs to trade. Usually offered by sellers to compliment strategies. Indicators are coin specific.Not all will be set up optimally for specific market conditions.So, the template marketplace usually offers a template that can be used along with the strategies you bought from the pro trader on the strategy marketplace.There are also various free starter templates offered by No name 1 to help you get started.'
        }
    ]
    return (
        <div className='mx-auto'>
            <div className='w-full p-8 md:w-[1200px] flex flex-col mx-auto'>
                <h1 className='text-[48px] font-light text-center  my-8'>How to start with
                    <span className='font-light md:font-bold inline md:block'>Mirror Trading?</span></h1>
                {stepsdb.map((element, index) => {
                    if (element.order === 1) {
                        return (
                            <div key={index} className='flex flex-col-reverse lg:flex-row items-center justify-between my-8'>
                                <div className='mr-0 lg:mr-6 w-full sm:w-2/3 '>
                                    <h2 className='font-bold w-11/12 text-3xl uppercase'>{element.title}</h2>
                                    <div className='h-4 w-10/12 mt-2 hidden sm:block' style={{ background: 'linear-gradient(90.13deg, #00AECC ,rgba(4, 93, 182, 0.5))', }}></div>
                                    <p className='font-medium text-base mt-4'>{element.text}</p>
                                </div>
                                <div className='my-4 lg:my-0'>
                                    <img alt={element.title} src={element.img} className='w-full h-full' />
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={index} className='flex flex-col lg:flex-row items-center justify-between my-8'>
                                <div className='my-4 lg:my-0'>
                                    <img alt={element.title} src={element.img} className='w-full h-full' />
                                </div>
                                <div className='ml-0 lg:ml-6 w-full sm:w-2/3'>
                                    <h2 className='font-bold w-11/12 text-3xl uppercase'>{element.title}</h2>
                                    <div className='w-10/12 h-4 hidden sm:block mt-2' style={{ background: 'linear-gradient(90.13deg, #00AECC 5.66%, rgba(4, 93, 182, 0.5) 106.16%)', }}></div>
                                    <p className='font-medium text-base mt-4'>{element.text}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}