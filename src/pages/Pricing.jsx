import Marketplace from './../components/Marketplace'
import Footer from './../components/Footer'
import PricingMain from '../components/PricingMain'

export default function Pricing() {
    return (
        <>
            <div className='bg-[rgba(0, 137, 211, 0.1)]'>
                <PricingMain />
            </div>
            <Marketplace />
            <div className='mt-20'>
                <Footer />
            </div>
        </>
    )
}