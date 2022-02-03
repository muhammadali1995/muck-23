import step1 from './../assets/STEP 1.png'
import step2 from './../assets/STEP 2.png'
import step3 from './../assets/STEP 3.png'
import step4 from './../assets/STEP 4.png'

export default function SolutionSteps() {
    const stepsdb = [
        { img: step1, title: `Trade like a pro. Skip the learning curve.`, text: 'TBecome a pro by copying pro traders on our marketplace. Download strategies from professionals and scan the markets, or download pre-configured bot templates. Or simply follow trading signals, which tell your bot exactly when to buy or sell.' },
        { order: 1, img: step2, title: 'Watch the markets. Simultaneously. 24/7.', text: 'Crypto trading is 24/7. So is your No name 1. Your Bot scans up to 75 markets, simultaneously. It does the work, so you don`t have to.' },
        {img: step3, title: 'The magic touch, only a bot can do.', text: 'Selling too early? Use the trailing stop-loss, which tracks the price up and only sells when it drops. Buying at the wrong moments? Use DCA to buy extra and lower your average buying price. All automatically.'},
        { order: 1, img: step4, title: 'We’ve got your back.', text: 'We understand that starting with No name 1 can be a lot to take in. That`s why our kind and knowledgeable support agents are ready to help you 24/7. See them as your private trading mentors, here to answer all your questions whenever you don`t understand something.' }
    ]
    return (
        <div className='mx-auto'>
            <div className='w-full p-8 md:w-[1200px] flex flex-col mx-auto'>
                <h1 className='text-[48px] font-light text-center  my-8'>Solutions for 
                    <span className='font-light md:font-bold inline md:block'>Individuals</span></h1>
                {stepsdb.map((element, index) => {
                    if (element.order === 1) {
                        return (
                            <div key={index} className='flex flex-col-reverse lg:flex-row items-center justify-between my-8'>
                                <div className='mr-0 lg:mr-6 w-full sm:w-2/3 '>
                                    <h2 className='font-bold text-3xl uppercase'>{element.title}</h2>
                                    <div className='h-4 mt-2 hidden sm:block' style={{ background: 'linear-gradient(90.13deg, #00AECC ,rgba(4, 93, 182, 0.5))', }}></div>
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
                                    <h2 className='font-bold text-3xl uppercase'>{element.title}</h2>
                                    <div className='h-4 hidden sm:block mt-2' style={{ background: 'linear-gradient(90.13deg, #00AECC 5.66%, rgba(4, 93, 182, 0.5) 106.16%)', }}></div>
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