import Offers from "../components/Offers";
import Trading from '../components/Trading'
import MarketPlace from '../components/Marketplace'
import Footer from '../components/Footer'
import Contact from "../components/Contact";

export default function About() {
    return (
        <>
            <Trading />
            <Offers />
            <MarketPlace/>
            <Contact/>
            <Footer/>
        </>
    )
}