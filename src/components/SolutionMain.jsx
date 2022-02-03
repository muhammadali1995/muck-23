import racket from './../assets/racket.png'
import arrow from './../assets/arrow.png'
import Navbar from './../components/Navbar'
import Registration from './../components/Registration'


export default function SolutionMain() {
    return (
        <div className="bg-secondary">
            <div className=" max-w-[1200px] mx-auto">
                <div className="py-[50px]">
                    <Registration color={'text-color-text'} />
                </div>
                <Navbar navColor={'text-color-text'} />
                <div className="pt-20 pb-40">
                    <div className="mx-auto  w-full flex items-center flex-col p-8 lg:p-0 lg:flex-row justify-between">
                        <div className="w-full mr-6 m-4">
                            <h1 className="font-extrabold text-2xl md:text-6xl"><span className='text-accent block'> Jumpstart </span>
                                your trading.</h1>
                            <div className="font-medium mt-10 text-base w-full flex items-center">
                                <p>Copy. Acticate </p>
                                <img src={arrow} alt="arrow" className='mx-4' />
                                <p>Jumpstart.</p>
                            </div>
                            <button className="mt-6 py-4 px-8 text-white font-medium bg-accent">TRY IT NOW</button>
                        </div>
                        <div>
                            <img alt="robots" src={racket} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}