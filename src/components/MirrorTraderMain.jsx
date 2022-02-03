import robots from './../assets/robots.png'
import Navbar from './../components/Navbar'
import Registration from './../components/Registration'

export default function MirrorTraderMain() {
    return (
        <div className="bg-[#022F5B]">
            <div className='max-w-[1200px] mx-auto'>
                <div className="py-[50px]">
                    <Registration color={'text-[#fff]'} />
                </div>
                <Navbar navColor={'text-[#fff]'} />
                <div className="mx-auto w-full pt-20 pb-40 text-white flex items-center flex-col px-8 lg:px-0 lg:flex-row justify-between">
                    <div className="w-full mr-6 lg:w-1/2 m-4">
                        <h1 className="font-extrabold text-2xl md:text-6xl">Join the
                            Marketplace
                            <span className='text-accent'> and Mirror a
                                Pro trader.</span></h1>
                        <p className="font-medium mt-4 text-base">Mirror trading is completely free to use, and allows you to buy templates, strategies or signals and trade autonomously. </p>
                        <button className="mt-6 py-4 px-8 text-white font-medium bg-accent">TRY IT NOW</button>
                    </div>
                    <div>
                        <img alt="robots" src={robots} />
                    </div>
                </div>
            </div>
        </div>
    )
}