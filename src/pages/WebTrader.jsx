import WebTraderMain from "../components/WebTraderMain";
import KeyFeatures from './../components/KeyFeatures'
import Marketplace from './../components/Marketplace'
import Footer from './../components/Footer'
import MoreFeatures from './../components/MoreFeatures'

export default function WebTrading() {
    return (
        <>
            <WebTraderMain />
            <KeyFeatures />
            <MoreFeatures/>
            <Marketplace />
            <div className='mt-20'>
                <Footer />
            </div>
        </>
    )
}