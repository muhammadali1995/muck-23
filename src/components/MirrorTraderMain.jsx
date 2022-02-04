import robots from './../assets/robots.png'

export default function MirrorTraderMain() {
    return (
        <div className="bg-dark-primary side-padding">
            <div className="mx-auto w-full pt-20 pb-40 text-white flex items-center flex-col px-8 lg:px-0 lg:flex-row justify-between">
                <div className="w-full mr-6 text-center lg:text-left lg:w-1/2 m-4">
                    <h1 className="header-title text-white">Join the
                        Marketplace
                        <span className='text-accent'> and Mirror a
                            Pro trader.</span></h1>
                    <p className="font-medium mt-4 text-base">Mirror trading is completely free to use, and allows you to buy templates, strategies or signals and trade autonomously. </p>
                    <button className="mt-10 header-btn-try">TRY IT NOW</button>
                </div>
                <div className='mt-16 lg:mt-0'>
                    <img alt="robots" src={robots} />
                </div>
            </div>
        </div>
    )
}