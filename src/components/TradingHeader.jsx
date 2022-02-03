import teams from './../assets/teams.png'

export default function Trading() {
    return (
        <div className="max-w-desktop mx-auto bg-dark-primary">
            <div className="mx-auto flex flex-col  lg:flex-row p-4 items-start justify-center max-w-8/12">
                <div className="text-white py-16 w-full lg:w-1/3">
                    <h3 className="uppercase font-extrabold text-5xl w-full">
                        Who is
                        <span className="text-accent"> No name 1</span>
                    </h3>
                    <p className="font-normal mt-4 text-base">Our number one mission is centered on time. By valuing time and understanding the importance of efficiency in the fluctuating, lightning-fast world of financial markets, every decision we make is designed to ensure that our clients and business partners, as well as our team of professionals, invest their time wisely. </p>
                    <button className='bg-accent py-4 px-6 mt-8'>TRY IT NOW</button>
                </div>
                <div className='relative  justify-center w-full lg:w-auto hidden sm:flex'>
                    <img src="teams" style={{height:'480px'}} src={teams}  alt='teams'/>
                </div>
            </div>
        </div>
    )
}