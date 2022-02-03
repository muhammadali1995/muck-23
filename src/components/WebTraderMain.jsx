import laptop from './../assets/WebTrader_Laptop_design.png'
import Registration from './../components/Registration'
import Navbar from './../components/Navbar'

export default function WebTraderMain() {
    return (
        <div className="bg-[#0089D31A] pb-[105px] px-8">
            <div className='mx-auto max-w-[1200px] '>
                <div className="py-[50px]">
                    <Registration color={'text-color-text'} />
                </div>
                <Navbar navColor={'text-color-text'} />

                <div className="w-full pt-20 pb-20 flex items-center flex-col lg:flex-row justify-between">
                    <div className="w-full mr-6 lg:w-1/2">
                        <h1 className="font-extrabold text-xl md:text-6xl">Our
                            Webtrader <span className='text-accent'> Platform</span></h1>
                        <p className="font-medium mt-4 text-base">No name 1 is providing a new web based trading platform that runs on both PC and Mac. This platform, broadens our reach and addresses some ongoing needs of our clients who require a stable and flexible trading solution to access global forex markets. Our webtrader has been built with one purpose in mind and that's to improve the trading experience of our
                            clients. </p>
                        <button className="mt-6 py-4 px-8 text-white font-medium bg-accent">TRY IT NOW</button>
                    </div>
                    <div>
                        <img alt="laptop" className='mt-4' src={laptop} />
                    </div>
                </div>
            </div>
        </div>
    )
}