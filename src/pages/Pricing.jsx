import Marketplace from './../components/Marketplace'
import PricingMain from '../components/PricingMain'

export default function Pricing() {
    return (
        <>
            <div className='bg-[rgba(0, 137, 211, 0.1)]'>
                <PricingMain />
            </div>
            <Marketplace />
        </>
    )
}