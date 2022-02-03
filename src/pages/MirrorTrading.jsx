import MirrorTraderMain from './../components/MirrorTraderMain'
import Currencies from './../components/Currencies'
import Steps from './../components/Steps'
import Marketplace from './../components/Marketplace'
import Footer from './../components/Footer'

export default function MirrorTrading() {
    return (
        <>
            <MirrorTraderMain />
            <Currencies />
            <Steps/>
            <Marketplace />
            <div className='mt-20'>
                <Footer />
            </div>
        </>
    )
}