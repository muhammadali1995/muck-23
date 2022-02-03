import SolutionMain from "../components/SolutionMain";
import Marketplace from './../components/Marketplace'
import Footer from './../components/Footer'
import SolutionSteps from "../components/SolutionSteps";

export default function Solution() {
    return (
        <>
            <div className="bg-[#0089D31A]">
                
            </div>
            <SolutionMain />
            <SolutionSteps />
            <Marketplace />
            <div className='mt-20'>
                <Footer />
            </div>
        </>
    )
}