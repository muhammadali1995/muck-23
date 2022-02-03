import { AutomaticTradingHeader } from "../components/AutomaticTradingHeader";
import Currencies from "../components/Currencies";
import Footer from "../components/Footer";
import MarketPlace from "../components/Marketplace";
import Steps from "../components/Steps";

export default function Trading() {
    return (
        <>
            <AutomaticTradingHeader />
            <div className="-mt-32">
                <Currencies />
            </div>
            <Steps />
            <div className="mb-10 md:mb-15 lg:mb-37.5">
                <MarketPlace />
            </div>
            <Footer />
        </>
    )
}