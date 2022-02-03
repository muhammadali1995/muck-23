import Marketplace from './../components/Marketplace'
import Footer from './../components/Footer'
import PricingMain from '../components/PricingMain'

export default function Pricing() {
    return (
        <>
            <div className='bg-[#0089D31A]'>
                <PricingMain />
            </div>
            <Marketplace />
            <div className='mt-20'>
                <Footer />
            </div>
        </>
    )
}