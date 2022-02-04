import laptop from './../assets/WebTrader_Laptop_design.png'

export default function WebTraderMain() {
    return (
        <div className="bg-[rgba(0,137,211,0.1)] pb-[105px] side-padding">
            <div className="w-full pt-20 pb-20 flex items-center flex-col lg:flex-row justify-between">
                <div className="w-full text-center lg:text-left mr-6 lg:w-1/2">
                    <h1 className="font-extrabold text-xl md:text-6xl">Our
                        Webtrader <span className='text-accent'> Platform</span></h1>
                    <p className="font-medium mt-4 text-base">No name 1 is providing a new web based trading platform that runs on both PC and Mac. This platform, broadens our reach and addresses some ongoing needs of our clients who require a stable and flexible trading solution to access global forex markets. Our webtrader has been built with one purpose in mind and that's to improve the trading experience of our
                        clients. </p>
                    <button className="mt-10 header-btn-try">TRY IT NOW</button>
                </div>
                <div className='mt-8 lg:mt-0'>
                    <img alt="laptop" className='mt-4' src={laptop} />
                </div>
            </div>
        </div>
    )
}