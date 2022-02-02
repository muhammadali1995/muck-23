import Offers from "../components/Offers";
import TradingHeader from '../components/TradingHeader'
import MarketPlace from '../components/Marketplace'
import Footer from '../components/Footer'
import Contact from "../components/Contact";

export default function About() {
    return (
        <>
            <TradingHeader />
            <Offers />
            <MarketPlace/>
            <Contact/>
            <Footer/>
        </>
    )
}