import CryptoMain from "../components/CryptoMain";
import Currencies from './../components/Currencies'
import Marketplace from './../components/Marketplace'
import Footer from './../components/Footer'

export default function Signals() {
    return (
    <div>
            <CryptoMain />
            <div className="-mt-28">
                <Currencies />
            </div>
            <div className="max-w-[1200px] mx-auto p-8 md:p-0 my-[100px]">
                <h3 className="text-xl md:text-4xl w-full md:w-[500px] uppercase">Get Latest trading
                    news about the
                    Cryptocurrency world </h3>
                <p className="mt-[12px] w-full md:w-[350px] font-normal text-[18px]">Be ahead of the game with our signals. Never miss a valuable trade again!</p>
                </div>
            <Marketplace />
            <div className='mt-20'>
                <Footer />
            </div>
      </div>
            )
}