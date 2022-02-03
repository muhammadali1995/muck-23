import { useState } from "react";
import email from './../assets/email.png'
import phone from './../assets/phone.png'
import clock from './../assets/clock.png'

export default function Contact() {
    const [openTab, setOpenTab] = useState(1);
    return (
        <div className="max-w-desktop mx-auto my-20 p-4  md:p-8">
            <h2 className="text-4xl font-bold text-[#045DB6] text-center mt-8 uppercase">CONTACT Us </h2>
            <div className="w-full md:w-8/12 mx-auto bg-white mt-12" style={{ filter: 'drop-shadow(6px 7px 14px rgba(0, 0, 0, 0.35))', }}>
                <form>
                    <div className="flex">
                        <button className={openTab === 1 ? 'w-1/2 py-4 px-2 text-xs md:text-xl truncate font-medium text-dark-primary border-b-2 border-[#022F5B]' : 'w-1/2 py-4 text-xs md:text-xl truncate font-medium text-[#15143966] border-b-2 border-[#EBEAED]'} onClick={(e) => { e.preventDefault(); setOpenTab(1) }}>LET US CALL YOU</button>
                        <button className={openTab === 2 ? 'w-1/2 py-4 text-xs md:text-xl truncate font-medium text-dark-primary border-b-2 border-[#022F5B]' : 'w-1/2 py-4 text-xs md:text-xl truncate font-medium text-[#15143966] border-b-2 border-[#EBEAED]'} onClick={(e) => { e.preventDefault(); setOpenTab(2) }}>WRITE US A MESSAGE</button>
                    </div>
                    <div className={openTab === 1 ? 'block p-2 md:p-6' : 'hidden'}>
                        <div className="flex justify-between flex-col md:flex-row">
                            <div className="flex flex-col w-full md:w-1/2">
                                <label className="text-dark-primary font-bold m-4">FIRST NAME</label>
                                <input type="text" className="border w-full md:w-11/12 py-3 px-5 border-[#EBEAED] outline-none" placeholder="First name" />
                            </div>
                            <div className="flex flex-col w-full md:w-1/2">
                                <label className="text-dark-primary font-bold m-4 ml-4 md:ml-12 uppercase">Last NAME</label>
                                <input type="text" className="border w-full md:w-11/12 py-3 px-5 ml-auto border-[#EBEAED] outline-none" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mt-4">
                            <label className="text-dark-primary font-bold m-4 uppercase">Email address</label>
                            <input type="email" className="border w-full py-3 px-5 border-[#EBEAED] outline-none" placeholder="Email Address" />
                        </div>
                        <div className="flex flex-col w-full mt-4">
                            <label className="text-dark-primary font-bold m-4 uppercase">Phone number</label>
                            <input type="number" className="border appearance-none w-full py-3 px-5 border-[#EBEAED] outline-none" placeholder="Phone Number" />
                        </div>
                        <div className="block">
                            <div className="mt-8 ml-4">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                                    <span className="ml-2 text-xs md:text-sm">I have read and accept the Client Agreement and Risk Disclosure of the Company</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#045DB6] mt-4 mx-auto py-4 text-center text-white w-1/2">SUBMIT</button>
                        </div>
                    </div>
                    <div className={openTab === 2 ? 'block p-6' : 'hidden'}>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="flex flex-col w-full md:w-1/2">
                                <label className="text-dark-primary font-bold m-4">FIRST NAME</label>
                                <input type="text" className="border w-full md:w-11/12 py-3 px-5 border-[#EBEAED] outline-none" placeholder="First name" />
                            </div>
                            <div className="flex flex-col w-full md:w-1/2">
                                <label className="text-dark-primary font-bold m-4 ml-4 md:ml-12 uppercase">Last NAME</label>
                                <input type="text" className="border w-full md:w-11/12 py-3 px-5 ml-auto border-[#EBEAED] outline-none" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mt-4">
                            <label className="text-dark-primary font-bold m-4 uppercase">Email address</label>
                            <input type="email" className="border w-full py-3 px-5 border-[#EBEAED] outline-none" placeholder="Email Address" />
                        </div>
                        <div className="flex flex-col w-full mt-4">
                            <label className="text-dark-primary font-bold m-4 uppercase">Phone number</label>
                            <input type="number" className="border appearance-none w-full py-3 px-5 border-[#EBEAED] outline-none" placeholder="Phone Number" />
                        </div>
                        <div className="flex flex-col w-full mt-4">
                            <label className="text-dark-primary font-bold m-4 uppercase">Message</label>
                            <textarea type="number" className="border appearance-none w-full py-3 px-5 border-[#EBEAED] outline-none h-48" placeholder="Write a Message" />
                        </div>
                        <div className="block">
                            <div className="mt-8 ml-4">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="w-5 h-5 rounded-full" />
                                    <span className="ml-2">I have read and accept the Client Agreement and Risk Disclosure of the Company</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button class="bg-[#045DB6] mt-4 mx-auto py-4 text-center text-white w-1/2">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex justify-center lg:justify-between flex-wrap w-full lg:w-8/12 p-4 mx-auto mt-20">
                <div className="flex items-center my-4">
                    <img src={email} alt="email" />
                    <div className="ml-4">
                        <h3 className="font-semibold">Support email:</h3>
                        <p className="text-sm font-normal">support@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center my-4">
                    <img src={phone} alt="phone" />
                    <div className="ml-4">
                        <h3 className="font-semibold">Telephone number:</h3>
                        <p className="text-sm font-normal">+357 00 000 000</p>
                    </div>
                </div>
                <div className="flex items-center my-4">
                    <img src={clock} alt="clock" />
                    <div className="ml-4">
                        <h3 className="font-semibold">Monday to Friday</h3>
                        <p className="text-sm font-normal">9.30-21.00 GMT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}