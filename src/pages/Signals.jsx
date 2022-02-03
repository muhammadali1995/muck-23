import CryptoMain from "../components/CryptoMain";
import Currencies from './../components/Currencies'
import Marketplace from './../components/Marketplace'

export default function Signals() {
    return (
        <div>
            <CryptoMain />
            <div className="-mt-28 side-padding">
                <Currencies />
                <div className="py-8 my-[100px] px-4">
                    <h3 className="text-xl font-bold md:text-4xl w-full md:w-[500px] uppercase">Get Latest trading
                        news about the
                        Cryptocurrency world </h3>
                    <p className="mt-[12px] w-full md:w-[350px] font-normal text-[18px]">Be ahead of the game with our signals. Never miss a valuable trade again!</p>
                </div>
            </div>
            <Marketplace />
        </div>
    )
}