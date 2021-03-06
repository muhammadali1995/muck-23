import React from 'react';
import comingSoon from './../assets/Market.jpeg'

export default function MarketPlaceComing() {
    return <>
        <div>
            <div className="w-full p-10 lg:p-0 bg-primary lg:bg-transparent mb-25 md:mb-[150px] bg-left lg:bg-center bg-no-repeat bg-cover">
                <img src={comingSoon} alt="coming soon" className="m-0 w-full hidden lg:block" />
                <div className="border-[3px] border-dashed border-white lg:hidden">

                    <div className="py-25 md:pt-40  md:pb-[200px] lg:w-[305px] mx-auto text-center lg:text-left">
                        <h1 className="text-white header-title font-extrabold">
                            Market Place
                        </h1>
                        <p className="text-2xl sm:text-3xl lg:text-[34px] lg:leading-[45px] text-accent uppercase sm:mt-[26px]">coming soon</p>
                    </div>
                </div>
            </div>
        </div>
    </>;
};
