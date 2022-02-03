import teams from './../assets/teams.png';
import Navbar from './Navbar';

export default function Trading() {
    return (
        <div className="max-w-desktop mx-auto bg-dark-primary">
            {/* <div className='px-80 py-[90px]'>
                <Navbar navColor={'text-white'} />
            </div> */}
            <div className="mx-auto flex flex-col  lg:flex-row p-4 md:px-20 lg:p-0 items-start justify-center max-w-8/12">
                <div className="text-white md:py-20 xl:pt-[168px] xl:pb-[212px] w-full lg:w-1/3">
                    <h1 className="header-title text-5xl mb-[17px]">
                        Who is
                        <span className="text-accent"> No <br className='hidden xl:block' /> name 1</span>
                    </h1>
                    <p className="header-text text-lg mb-[42px] text-justify sm:text-left">
                        Our number one mission is centered on time. By valuing time and
                        understanding the importance of efficiency in the fluctuating,
                        lightning-fast world of financial markets, every decision we make
                        is designed to ensure that our clients and business partners,
                        as well as our team of professionals, invest their time wisely.
                    </p>
                    <button className='header-btn-try mt'>TRY IT NOW</button>
                </div>
                <div className='relative  justify-center w-full lg:w-auto hidden sm:flex'>
                    <img src="teams" style={{height:'480px'}} src={teams}  alt='teams'/>
                </div>
            </div>
        </div>
    )
}