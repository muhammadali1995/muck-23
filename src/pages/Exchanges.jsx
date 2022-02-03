import ExchangesTable from "../components/ExchangesTable";
import Marketplace from './../components/Marketplace'
import Footer from './../components/Footer'

export default function Exchanges() {
    return (
        <>
            <ExchangesTable />
            <Marketplace />
            <div className='mt-20'>
                <Footer />
            </div>
        </>
    )
}