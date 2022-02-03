import message from './../assets/message.png'
import Registration from './../components/Registration'
import Navbar from './../components/Navbar'

export default function CryptoMain() {
    return (
        <div className="bg-[#0089D31A]">
            <div className='mx-auto max-w-[1200px]'>
                <div className="py-[50px]">
                    <Registration color={'text-[text-color-text]'} />
                </div>
                <Navbar navColor={'text-[text-color-text]'} />
                <div className="w-full  pt-20 pb-40 flex items-center flex-col px-8 lg:px-0 lg:flex-row justify-between">
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
        </div>
    )
}