import { AutomaticTradingHeader } from "../components/AutomaticTradingHeader";
import Currencies from "../components/Currencies";
import Footer from "../components/Footer";
import MarketPlace from "../components/Marketplace";

export default function Trading() {
    return (
        <>
            <AutomaticTradingHeader />
            <Currencies />
            <MarketPlace />
            <Footer />
        </>
    )
}