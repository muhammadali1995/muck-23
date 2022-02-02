import ExchangesTable from "../components/ExchangesTable";
import Marketplace from './../components/Marketplace'
import Footer from './../components/Footer'

export default function Exchanges() {
    return (
        <>
            <div className='bg-[#0089D31A] py-20'>
                <ExchangesTable />
            </div>
            <Marketplace />
            <div className='mt-20'>
                <Footer />
            </div>
        </>
    )
}