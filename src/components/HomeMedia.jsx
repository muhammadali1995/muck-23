import telegraaf from '../assets/telegraaf.png';
import blockonomi from '../assets/blockonomi.png';
import rtl from '../assets/rtl.png';
import rt4 from '../assets/rt4.png';
import forbes from '../assets/forbes.png';
import coindesk from '../assets/coindesk.png';
import cointelegraph from '../assets/cointelegraph.png';

function HomeMedia() {
    return (
        <div className='bg-secondary mb-[68px] lg:mb-150px pt-[105px] pb-25 lg:pt-[115px] flex flex-col items-center justify-center'>
            <h1 className="font-bold text-28 lg:text-5xl text-uppercase mb-32 text-center uppercase">
                No name 1 <span className='font-normal'>in the</span> <br /> Media
            </h1>
            <div className="flex flex-col items-center lg:flex-row gap-x-[90px] lg:mb-16 flex-wrap">
                <img src={telegraaf} alt="telegraaf" className="w-[264px] h-15 mb-12 lg:mb-0" />
                <img src={blockonomi} alt="blockonomi" className="w-[363px] h-15 mb-12 lg:mb-0" />
                <img src={rtl} alt="rtf" className="w-[307px] h-15 mb-12 lg:mb-0" />
                <img src={rt4} alt="rt4" className="w-[114px] h-15 mb-12 lg:mb-0" />
            </div>
            <div className="flex flex-col items-center lg:flex-row gap-x-[90px]">
                <img src={forbes} alt="forbes" className="w-[264px] h-15 mb-12 lg:mb-0" />
                <img src={coindesk} alt="coindesk" className="w-[363px] h-15 mb-12 lg:mb-0" />
                <img src={cointelegraph} alt="cointelegragh" className="w-[307px] h-15 mb-12 lg:mb-0" />
            </div>
        </div>
    );
}

export default HomeMedia;
