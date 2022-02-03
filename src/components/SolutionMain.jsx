import racket from './../assets/racket.png'
import arrow from './../assets/arrow.png'
import Navbar from './Navbar'

export default function SolutionMain() {
    return (
        <div className="bg-[#0089D31A] pt-20 pb-40">
            <div className="mx-auto max-w-[1200px] w-full flex items-center flex-col p-8 lg:p-0 lg:flex-row justify-between">
                <Navbar navColor={'text-white'} />
                <div className="w-full mr-6 m-4">
                    <h1 className="header-title"><span className='text-accent block'> Jumpstart </span>
                        your trading.</h1>
                    <div className="font-medium mt-10 text-base w-full flex items-center">
                        <p>Copy. Acticate </p>
                        <img src={arrow} alt="arrow" className='mx-4' />
                        <p>Jumpstart.</p>
                    </div>
                    <button className="header-btn-try">TRY IT NOW</button>
                </div>
                <div>
                    <img alt="robots" src={racket} />
                </div>
            </div>
        </div>
    )
}