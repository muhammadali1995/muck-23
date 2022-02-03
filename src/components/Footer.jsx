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
                        <h3 className="font-medium mb-4 text-[22px]">Website secured with:</h3>
                        <div className="flex items-center">
                            <img src={ssl} alt="ssl" className='mr-6' />
                            <img src={cloudflare} alt="cloudflare" />
                        </div>
                    </div>
                    <button className="bg-accent py-4 px-6 mb-16 mt-8 md:mt-16 w-64 md:w-56">MARKETPLACE</button>
                </div>
                <div className="flex px-20 lg:px-0 items-center md:items-start text-center md:text-left justify-center sm:justify-between flex-col md:flex-row w-full lg:w-7/12 flex-wrap">
                    <ul className="uppercase text-xl my-12 md:my-0">
                        <li className="cursor-pointer">Services</li>
                        <li className="cursor-pointer mt-2">Solutions</li><li>MarketPlace</li>
                        <li className="cursor-pointer mt-2">Services</li><li>Tools</li>
                        <li className="cursor-pointer mt-2">About Us</li>
                    </ul>
                    <ul>
                        <li className="cursor-pointer text-xl">FAST LINKS</li>
                        <li className="cursor-pointer mt-2">Automatic Trading</li>
                        <li className="cursor-pointer mt-2">Crypto Signals</li>
                        <li className="cursor-pointer mt-2">Copy Trading</li>
                        <li className="cursor-pointer mt-2">Web Trader</li>
                        <li className="cursor-pointer mt-2">Exchanges</li>
                        <li className="cursor-pointer mt-2">Pricings</li>
                        <li className="cursor-pointer mt-2">HelpDesk</li>
                    </ul>
                    <ul className="uppercase text-lg mb-0 md:mb-12 mt-12 md:my-0">
                        <li className="cursor-pointer">Privacy Policy</li>
                        <li className="cursor-pointer mt-2">Terms and Conditions</li>
                        <li className="cursor-pointer mt-2">Support</li>
                    </ul>
                </div>
            </div>
            <p className="font-normal mx-auto text-center mt-6 w-56">Copyright Ⓒ 2022 No name 1 All Rights Reserved</p></div>
    )
}