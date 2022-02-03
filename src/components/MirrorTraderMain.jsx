import robots from './../assets/robots.png'
import Navbar from './Navbar'
import Registration from './Registration'

export default function MirrorTraderMain() {
    return (
        <div className="bg-[#022F5B] pb-40">
            <div className="max-w-[1200px] mx-auto">
                <div className="lg:py-12">
                    <Registration color={'text-white'} />
                </div>
                <Navbar navColor={'text-white'} />
                <div className="  w-full text-white flex items-center flex-col p-8 lg:pt-25 lg:flex-row justify-between">
                    <div className="w-full mr-6 lg:w-1/2 m-4">
                        <h1 className="font-extrabold text-2xl md:text-6xl">Join the
                            Marketplace
                            <span className='text-accent'> and Mirror a
                                Pro trader.</span>
                        </h1>
                        <p className="header-text mt-4">Mirror trading is completely free to use, and allows you to buy templates, strategies or signals and trade autonomously. </p>
                        <button className="header-btn-try mt-10">TRY IT NOW</button>
                    </div>
                    <div>
                        <img alt="robots" src={robots} />
                    </div>
                </div>
            </div>
        </div>
    )
}