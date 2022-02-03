import message from './../assets/message.png'

export default function CryptoMain() {
    return (
        <div className="bg-[#0089D31A] pt-20 pb-40">
            <div className="mx-auto max-w-[1200px] w-full flex items-center flex-col p-8 lg:p-0 lg:flex-row justify-between">
                <div className="w-full mr-6 lg:w-1/2 m-4">
                    <h1 className="font-extrabold text-2xl md:text-6xl">Get your
                        <span className='text-accent'> Crypto 
signals </span></h1>
                    <p className="font-medium mt-4 text-base w-full lg:w-64">Get Latest trading news about the
Cryptocurrency world . </p>
                    <button className="mt-6 py-4 px-8 text-white font-medium bg-accent">TRY IT NOW</button>
                </div>
                <div>
                    <img alt="robots" src={message} />
                </div>
            </div>
        </div>
    )
}