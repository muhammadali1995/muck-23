import telegraaf from '../assets/telegraaf.png';
import blockonomi from '../assets/blockonomi.png';
import rtl from '../assets/rtl.png';
import rt4 from '../assets/rt4.png';
import forbes from '../assets/forbes.png';
import coindesk from '../assets/coindesk.png';
import cointelegraph from '../assets/cointelegraph.png';

function HomeMedia() {
    return (
        <div className='bg-secondary mb-[68px] lg:mb-150px pt-[105px] pb-25 lg:pt-[115px] flex flex-col items-center justify-center px-5 sm:px-10'>
            <h1 className="font-bold text-28 lg:text-5xl text-uppercase mb-32 text-center uppercase">
                No name 1 <span className='font-normal'>in the</span> <br /> Media
            </h1>
            <div className="flex flex-col justify-center items-center lg:flex-row gap-x-[90px] w-full lg:mb-16 flex-wrap">
                <img src={telegraaf} alt="telegraaf" className="max-w-[264px] w-full h-15 mb-12 lg:mb-0" />
                <img src={blockonomi} alt="blockonomi" className="max-w-[363px] w-full h-15 mb-12 lg:mb-0" />
                <img src={rtl} alt="rtf" className="max-w-[307px] w-full h-15 mb-12 lg:mb-0" />
                <img src={rt4} alt="rt4" className="max-w-[114px] w-full h-15 mb-12 lg:mb-0" />
            </div>
            <div className="flex flex-col items-center justify-center lg:flex-row gap-x-[90px]">
                <img src={forbes} alt="forbes" className="max-w-[264px] w-full h-15 mb-12 lg:mb-0" />
                <img src={coindesk} alt="coindesk" className="max-w-[363px] w-full h-15 mb-12 lg:mb-0" />
                <img src={cointelegraph} alt="cointelegragh" className="max-w-[307px] w-full h-15 mb-12 lg:mb-0" />
            </div>
        </div>
    );
}

export default HomeMedia;
