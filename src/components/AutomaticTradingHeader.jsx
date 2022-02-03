import headerImage from './../assets/automatictradingheader.png';

export const AutomaticTradingHeader = () => {
    return <div className='bg-dark-primary home-header side-padding'>
        <div className="mx-auto w-full pt-20 pb-40 text-white flex items-center flex-col px-8 lg:px-0 lg:flex-row justify-between">
            <div className="w-full mr-6 lg:w-1/2 m-4">
                <h1 className="header-title text-white">
                    Bots don't
                    <br />
                    <span className="text-accent">
                        need sleep
                    </span>
                </h1>
                <p className="header-text text-white mt-[18px]">
                    Become a better trader. Powerfu l, AI-powered
                    <br className='hidden lg:block' />
                    crypto trading bot to help you save time, trade
                    <br className='hidden lg:block' />
                    24/7, and automate your trading.
                </p>
                <button className="header-btn-try mt-5 xl:mt-9">try it now</button>
            </div>
            <div>
                <img alt="robots" src={headerImage} />
            </div>
        </div>
    </div>
};
