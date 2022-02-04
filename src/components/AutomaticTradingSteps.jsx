import step1 from './../assets/STEP 1.png';
import step2 from './../assets/STEP 2.png';
import step3 from './../assets/STEP 3.png';

export const AutomaticTradingSteps = () => {
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
    return (
        <div className='mx-auto'>
            <div className='w-full px-8 md:w-[1200px] flex flex-col mx-auto '>
                <h1 className='text-3xl md:text-[48px] md:leading-[55px] font-bold md:font-light text-center my-15  md:my-25 uppercase'>
                    How to start with
                    <span className='md:font-bold inline md:block ml-1'>
                        Automatic Trading?
                    </span>
                </h1>
                {stepsdb.map((element, index) => {
                    if (element.order === 1) {
                        return (
                            <div key={index} className='flex flex-col-reverse lg:flex-row items-center justify-between mb-10 sm:mb-20 lg:mb-40'>
                                <div className='mr-0 lg:mr-6 w-full sm:w-2/3 '>
                                    <h2 className='font-bold w-11/12 text-2xl md:text-3xl uppercase'>{element.title}</h2>
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
                            <div key={index} className='flex flex-col lg:flex-row items-center justify-between mb-10 sm:mb-20 lg:mb-40'>
                                <div className='my-4 lg:my-0'>
                                    <img alt={element.title} src={element.img} className='w-full h-full' />
                                </div>
                                <div className='ml-0 lg:ml-6 w-full sm:w-2/3'>
                                    <h2 className='font-bold w-11/12 uppercase text-2xl md:text-3xl'>{element.title}</h2>
                                    <div className='w-10/12 h-4 hidden sm:block mt-2' style={{ background: 'linear-gradient(90.13deg, #00AECC 5.66%, rgba(4, 93, 182, 0.5) 106.16%)', }}></div>
                                    <p className='font-medium text-base mt-4'>{element.text}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    );
};
