import Navbar from "./Navbar";
import Registration from "./Registration";

export const AutomaticTradingHeader = () => {
    return <div className='bg-dark-primary home-header px-10 md:px-16 lg:px-28 2xl:px-[200px] 3xl:pl-75 3xl:pr-80'>
        <div className="pt-16 pb-11">
            <Registration color={'text-white'} />
        </div>
        <Navbar navColor={'text-white'} />
    </div>;
};
