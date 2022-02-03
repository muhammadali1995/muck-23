import { AutomaticTradingHeader } from "../components/AutomaticTradingHeader";
import { AutomaticTradingSteps } from "../components/AutomaticTradingSteps";
import Currencies from "../components/Currencies";
import Footer from "../components/Footer";
import MarketPlace from "../components/Marketplace";

export default function Trading() {
    return (
        <>
            <AutomaticTradingHeader />
            <div className="-mt-25 sm:-mt-32">
                <Currencies />
            </div>
            <AutomaticTradingSteps />
            <MarketPlace />
        </>
    )
}