import ssl from './../assets/ssl.png'
import cloudflare from './../assets/cloudflare.png'

export default function Footer() {
    return (
        <div className="bg-dark-primary max-w-desktop mx-auto py-20 text-white">
            <div className="flex items-center md:items-start justify-between flex-col-reverse md:px-20 2xl:px-0 lg:flex-row mx-auto max-w-[1316px]">
                <div className="items-center lg:items-start flex flex-col-reverse lg:flex-col w-full lg:w-1/3">
                    <button className='text-[24px] hidden lg:block  font-normal text-white bg-accent py-[23px] px-[45px]'>LOGO</button>
                    <p className='hidden lg:block font-normal mt-[30px] text-sm mb-[25px]'>The information on this website is general in nature. Please consider the information in light of your objectives, financial situation and needs.
                        <br /><br />
                        No Name 1 is a trademark of No name 2
                    </p>
                    <div className='flex flex-col lg:flex-col'>
                        <h3 className="font-medium mb-4 text-[22px] text-white">Website secured with:</h3>
                        <div className="flex items-center">
                            <img src={ssl} alt="ssl" className='mr-6' />
                            <img src={cloudflare} alt="cloudflare" />
                        </div>
                    </div>
                    <button className="bg-accent py-6 px-5 md:px-[70px] mb-16 mt-8 md:text-2xl md:mt-16 hover:bg-white hover:text-accent">MARKETPLACE</button>
                </div>
                <div className="flex px-20 lg:px-0 items-center md:items-start text-center md:text-left justify-center sm:justify-between flex-col md:flex-row w-full lg:w-7/12 flex-wrap">
                    <ul className="uppercase text-xl my-12 md:my-0">
                        <li className="cursor-pointer">Services</li>
                        <li className="cursor-pointer mt-2">Solutions</li>
                        <li className='mt-2'>MarketPlace</li>
                        <li className='mt-2'>Tools</li>
                        <li className="cursor-pointer mt-2">About Us</li>
                    </ul>
                    <ul>
                        <li className="cursor-pointer text-xl">FAST LINKS</li>
                        <li className="cursor-pointer mt-2">
                            <a href="/automatic-trading" className='text-white text-base hover:text-white'> Automatic Trading</a></li>
                        <li className="cursor-pointer mt-2">
                            <a href="/crypto-signals" className='text-white text-base hover:text-white'> Crypto Signals</a></li>
                        <li className="cursor-pointer mt-2">
                            <a href="/copy-trading" className='text-white text-base hover:text-white'> Copy Trading</a></li>
                        <li className="cursor-pointer mt-2">
                            <a href="/web-trader" className='text-white text-base hover:text-white'> Web Trader</a></li>
                        <li className="cursor-pointer mt-2">
                            <a href="/exchanges" className='text-white text-base hover:text-white'> Exchanges</a></li>
                        <li className="cursor-pointer mt-2">
                            <a href="/pricing" className='text-white text-base hover:text-white'> Pricings</a></li>
                        <li className="cursor-pointer mt-2">
                            <a href="/about" className='text-white text-base hover:text-white'> HelpDesk</a></li>
                    </ul>
                    <ul className="uppercase text-lg mb-0 md:mb-12 mt-12 md:my-0">
                        <li className="cursor-pointer">Privacy Policy</li>
                        <li className="cursor-pointer mt-2">Terms and Conditions</li>
                    </ul>
                </div>
            </div>
            <p className="font-normal mx-auto text-center mt-6 w-56">Copyright Ⓒ 2022 No name 1 All Rights Reserved</p></div>
    )
}