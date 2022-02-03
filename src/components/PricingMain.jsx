export default function PricingMain() {
    return (
        <div>
            <h1 className="font-extrabold text-5xl text-accent text-center">Pricing</h1>
            <p className="mt-4 mx-auto text-center w-full px-4 md:w-1/4">Become a member &amp; join many others who are happy to use our services.</p>
            <div className="w-100 overflow-auto">
                <div className="flex mx-auto items-center max-w-[1000px] w-[1000px] mt-[96px] justify-start md:justify-center">
                    <div className="mb-[47px]">
                        <h3 className="bg-[#F6F6F6] w-60 font-bold px-6 py-4">Positions</h3>
                        <h3 className="bg-[#DEDEDE] w-60 font-bold px-6 py-4">Portfolio</h3>
                        <h3 className="bg-[#F6F6F6] w-60 font-bold px-6 py-4">Trading</h3>
                        <h3 className="bg-[#DEDEDE] w-60 font-bold px-6 py-8">Exchanges</h3>
                        <h3 className="bg-[#F6F6F6] w-60 font-bold px-6 py-8">Bonuses</h3>
                    </div>
                    <div className="bg-[#045DB6] text-white rounded-2xl pb-[326px] text-center">
                        <div className="p-6"><h3 className="font-medium text-3xl text-center uppercase w-44">Pioneer</h3>
                            <p className="font-normal mt-2 mx-auto text-center w-1/2">Free Package</p>
                            <hr className="mt-11" />
                        </div>
                        <h3 className="bg-transparent w-full font-bold px-6 py-4 mt-1">Portfolio</h3>
                        <h3 className="bg-[#4e8dcb] w-full font-bold px-2 py-4">Portfolio Management</h3>
                        <h3 className="bg-transparent w-full font-bold px-6 py-4">Manual trading  </h3>
                        <h3 className="bg-[#4e8dcb] w-full font-bold px-6 py-5 text-center">On all available exchanges</h3>
                    </div>
                    <div className="bg-[#fff] text-dark-primary rounded-2xl pb-[240px]  text-center">
                        <div className="p-6"><h3 className="font-medium text-3xl text-center uppercase w-44">Explorer</h3>
                            <p className="font-normal mt-2 mx-auto text-center w-1/2">Starter Package</p>
                            <hr className="mt-11" />
                        </div>
                        <h3 className="bg-transparent w-full font-bold px-6 py-4 mt-1">80 positions</h3>
                        <h3 className="bg-[#0089D31A] w-full font-bold px-2 py-4">Max 15 selected coins</h3>
                        <h3 className="bg-transparent w-full font-bold px-6 py-4">Max 2 triggers</h3>
                        <h3 className="bg-[#0089D31A] w-full font-bold px-6 py-5 text-center">TA with 10 min <br /> interval</h3>
                        <h3 className="bg-transparent w-full font-bold px-6 py-5 text-center">1 Simulated <br /> Trading Bot</h3>
                    </div>
                    <div className="bg-[#045DB6] text-white rounded-2xl pb-[178px] text-center">
                        <div className="p-6"><h3 className="font-medium text-3xl text-center uppercase w-44">Adventure</h3>
                            <p className="font-normal mt-2 mx-auto text-center w-2/3">Trader Plus Package</p>
                            <hr className="mt-11" />
                        </div>
                        <h3 className="bg-transparent w-full  font-bold px-6 py-4 mt-1">200 positions</h3>
                        <h3 className="bg-[#4e8dcb] w-full  font-bold px-2 py-4">Max 50 selected coins</h3>
                        <h3 className="bg-transparent w-full font-bold px-6 py-4">Max 5 triggers</h3>
                        <h3 className="bg-[#4e8dcb] w-full  font-bold px-6 py-5 text-center">TA with 5 min <br /> interval</h3>
                        <h3 className="bg-transparent w-full font-bold px-6 text-center py-5">1 Simulated <br /> Trading Bot</h3>
                        <h3 className="bg-[#4e8dcb] w-full  font-bold px-6 py-5">Exchange arbitrage</h3>
                    </div>
                    <div className="bg-[#fff] text-dark-primary rounded-2xl pb-[50px] text-center">
                        <div className="p-6"><h3 className="font-medium text-3xl text-center uppercase w-44">Hero</h3>
                            <p className="font-normal mt-2 mx-auto text-center w-2/3">Pro Trader Package</p>
                            <hr className="mt-11" />
                        </div>
                        <h3 className="bg-transparent w-full font-bold px-6 py-4 mt-1">500 positions</h3>
                        <h3 className="bg-[#0089D31A] w-full font-bold px-1 py-4">Max 75 selected coins</h3>
                        <h3 className="bg-transparent w-full  font-bold px-6 py-4">Max 10 triggers</h3>
                        <h3 className="bg-[#0089D31A] w-full  font-bold px-6 py-5">TA with 2 min <br /> interval</h3>
                        <h3 className="bg-transparent w-full  font-bold px-6 py-5">All Coins For <br /> Signals</h3>
                        <h3 className="bg-[#0089D31A] w-full font-bold px-6 py-5">Market Arbitrage</h3>
                        <h3 className="bg-transparent w-full  font-bold px-6 py-5">Market Making</h3>
                        <h3 className="bg-[#0089D31A] w-full font-bold px-6 py-5">Algorithm Intelligence</h3>
                    </div>
                </div>
            </div> 
        </div>
    )
}