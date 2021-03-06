import futureImg from './../assets/future-artificial-intelligence.png'
import puzzleImg from './../assets/hands-holding-puzzle.png'
import analysics from './../assets/target-analysis.png'

export default function Offers() {
    const offersdb = [
        { img: futureImg, title: 'Create magic.', text: 'Mix a successful Daytrader with a brilliant Engineer and you get the real m.a.g.i.c. Cryptocurrency magic, to be exact. Pim did what every great Engineer would do: automate it. Unconsciously creating the ideal trader; unbeatable fast, reliable and - most importantly - always trading. The fan base grew from family, friends and friends of friends to people all over the world in no time. And then the realization came; this might be something big. By making No name 1 public we were able to help many traders create their own magic. Would you like to try it out? Sign up for a free trial. Have fun!' },
        { order: 1, img: puzzleImg, title: 'How we got this far.', text: 'No name 1 is an AI-driven bot that makes crypto trading accessible, fun, and worthwhile for everyone. We pursue perfection. Work hard. Learn every day. Join forces with our amazing team. And grow rapidly. Together we optimize and innovate a bot that hosts more than nine million transactions worth an estimated 2 billion USD each month. Would you like to join our team? Check out our current job opportunities.' },
        { img: analysics, title: 'This is the future.', text: 'zk-SNARKs, miners, nodes, bulls, bears, FOMO and FUD. Some of those terms may sound like Marvel villains or curse words ("I should FUD you upside the head for staring at my nodes!"). In our view – and yes, it`s a bold statement – crypto will be the currency your grandkids consider the norm. And for good reason, because however cryptic crypto may seem, the underlying Blockchain technology is as safe as possible. No wonder everyone that joins us is instantly hooked ;). Want to try the bot? Sign up for a free trial, have a look around, learn and most importantly, Have fun!' }
    ]
    return (
        <div className='max-w-desktop mx-auto'>
            <div className='w-full p-8 xl:w-[1200px] flex flex-col mx-auto'>
                {offersdb.map((element, index) => {
                    if (element.order === 1) {
                        return (
                            <div key={index} className='flex flex-col lg:flex-row items-center justify-between my-8 lg:my-12'>
                                <div className='mr-0 lg:mr-6 w-full sm:w-2/3 order-2 lg:order-1'>
                                    <div className="max-w-max">
                                        <h2 className='w-full font-bold text-3xl lg:text-[34px] lg:leading-[45px] uppercase'>{element.title}</h2>
                                        <div className='w-full h-4 hidden sm:block mt-2' style={{ background: 'linear-gradient(90.13deg, #00AECC 5.66%, rgba(4, 93, 182, 0.5) 106.16%)', }}></div>
                                    </div>
                                    <p className='font-medium text-base lg:text-lg lg:leading-7 mt-4 lg:mt-5'>{element.text}</p>
                                </div>
                                <div className='my-4 lg:my-0 order-1 lg:order-2'>
                                    <img alt={element.title} src={element.img} className='w-full h-full' />
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={index} className='flex flex-col lg:flex-row items-center justify-between my-8 lg:my-12'>
                                <div className='my-4 lg:my-0'>
                                    <img alt={element.title} src={element.img} className='w-full h-full' />
                                </div>
                                <div className='ml-0 lg:ml-6 w-full sm:w-2/3'>
                                    <div className="max-w-max">
                                        <h2 className='w-full font-bold text-3xl lg:text-[34px] lg:leading-[45px] uppercase'>{element.title}</h2>
                                        <div className='w-full h-4 hidden sm:block mt-2' style={{ background: 'linear-gradient(90.13deg, #00AECC 5.66%, rgba(4, 93, 182, 0.5) 106.16%)', }}></div>
                                    </div>
                                    <p className='font-medium text-base lg:text-lg lg:leading-7 mt-4 lg:mt-5 align-top'>{element.text}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}