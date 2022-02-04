import teams from './../assets/teams.svg';

export default function Trading() {
    return (
        <div className="bg-[#022F5B] mx-auto flex flex-col  lg:flex-row items-start justify-center side-padding pt-8 lg-pt-0">
            <div className="text-white md:py-12 xl:pt-[168px] w-full lg:w-1/2">
                <h1 className="header-title text-xl md:header-title mb-[17px]">
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
                <button className='header-btn-try mt-6'>TRY IT NOW</button>
            </div>
            <div className='relative justify-center lg:w-auto sm:flex'>
                <img className="h-full my-8 lg:my-0" src={teams} alt='teams' />
            </div>
        </div>
    )
}