import ssl from './../assets/ssl.png'
import cloudflare from './../assets/cloudflare.png'

export default function Footer() {
    return (
        <div className="bg-dark-primary max-w-desktop mx-auto py-8 text-white">
            <div className="flex items-start justify-between flex-col lg:flex-row mx-auto w-8/12">
                <div className="py-20 w-full lg:w-1/3">
                    <h3 className="font-medium mb-4 text-xl">Website secured with:</h3>
                    <div className="flex items-center justify-between">
                        <img src={ssl} />
                        <img src={cloudflare} />
                    </div>
                    <button className="bg-accent py-4 px-6 mt-8">MARKETPLACE</button>
                </div>
                <div className="flex items-start justify-center sm:justify-between flex-col md:flex-row w-full md:w-7/12 flex-wrap">
                    <ul className="uppercase my-4 md:my-0">
                        <li className="cursor-pointer">Services</li>
                        <li  className="cursor-pointer mt-2">Solutions</li><li>MarketPlace</li>
                        <li  className="cursor-pointer mt-2">Services</li><li>Tools</li>
                        <li  className="cursor-pointer mt-2">About Us</li>
                    </ul>
                    <ul>
                        <li  className="cursor-pointer">FAST LINKS</li>
                        <li  className="cursor-pointer mt-2">Automatic Trading</li>
                        <li  className="cursor-pointer mt-2">Crypto Signals</li>
                        <li  className="cursor-pointer mt-2">Copy Trading</li>
                        <li  className="cursor-pointer mt-2">Web Trader</li>
                        <li  className="cursor-pointer mt-2">Exchanges</li>
                        <li  className="cursor-pointer mt-2">Pricings</li>
                        <li  className="cursor-pointer mt-2">HelpDesk</li>
                    </ul>
                    <ul className="uppercase my-4 md:my-0">
                        <li  className="cursor-pointer">Privacy Policy</li>
                        <li  className="cursor-pointer mt-2">Terms and Conditions</li>
                        <li  className="cursor-pointer mt-2">Support</li>
                    </ul>
                </div>
            </div>
            <p className="font-normal mx-auto text-center mt-6 w-56">Copyright Ⓒ 2022 No name 1 All Rights Reserved</p></div>
    )
}