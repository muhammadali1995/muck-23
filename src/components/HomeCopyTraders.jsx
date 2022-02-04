export const HomeCopyTraders = () => {
    return <div className='lg:pr-[140px] my-24 lg:mt-32 lg:mb-[150px]'>
        <div className="rounded-r-[30px] bg-home-copy-trade bg-no-repeat bg-cover bg-left">
            <div
                className="bg-gradient-to-r from-black 
            text-white px-10 sm:px-16 lg:pr-0 lg:pl-40 xl:pl-[200px] 2xl:pl-75 py-20 sm:pt-[114px] sm:pb-[189px] lg:py-25 text-center lg:text-left">
                <p className="text-accent font-bold mb-2.5 hidden lg:block">SIGNALS. TEMPLATES. STRATEGIES</p>
                <h1 className="text-[28px] lg:text-5xl uppercase mb-6">
                    <span className="font-bold">Copy other</span>
                    <br />
                    <span className="font-medium">traders</span>
                </h1>
                <p className="text-lg leading-6 underline mb-2 hidden lg:block">
                    Check out the MarketPlace!
                </p>
                <p className="font-medium text-lg leading-7 mb-7 lg:w-[486px]">
                    Join the Social Trading revolution. Subscribe to trading signals,
                    discuss trading strategies on our internal chat, and buy strategies
                    and bot templates from our marketplace. You don't need to be an expert
                    to trade like one.
                </p>
                <button className="font-medium sm:text-2xl py-6 px-[51px] uppercase bg-accent text-white">
                    marketplace
                </button>
            </div>
        </div>
    </div>;
};
