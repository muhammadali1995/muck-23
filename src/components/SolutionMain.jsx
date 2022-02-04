import racket from './../assets/racket.png'
import arrow from './../assets/arrow.png'


export default function SolutionMain() {
    return (
        <div className="bg-secondary side-padding">
            <div className="pt-20 pb-40">
                <div className="mx-auto  w-full flex items-center flex-col p-8 md:p-0 md:flex-row justify-between">
                    <div className="w-full mr-6 m-4">
                        <h1 className="header-title"><span className='text-accent block'> Jumpstart </span>
                            your trading.</h1>
                        <div className="font-medium mt-10 text-base w-full flex items-center">
                            <p>Copy. Acticate </p>
                            <img src={arrow} alt="arrow" className='mx-4' />
                            <p>Jumpstart.</p>
                        </div>
                        <button className="header-btn-try mt-10">TRY IT NOW</button>
                    </div>
                    <div className="mt-16 lg:mt-0">
                        <img alt="robots" src={racket} />
                    </div>
                </div>
            </div>
        </div>

    )
}