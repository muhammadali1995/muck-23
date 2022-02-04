import bitcoin from './../assets/bitcoin.png'
import ethereum from './../assets/ethereum.png'
import litecoin from './../assets/litecoin.png'
import repl from './../assets/ripple.png'
import cardano from './../assets/cardano.png'
import dogecoin from './../assets/dogecoin.png'

export default function Currencies() {
    const currenciesdb = [
        { image: bitcoin, text: 'Bitcoin' },
        { image: ethereum, text: 'Ethereum' },
        { image: litecoin, text: 'Litecoin' },
        { image: repl, text: 'XRP(Ripple)' },
        { image: cardano, text: 'Cardano' },
        { image: dogecoin, text: 'Dogecoin' }
    ]
    return (
        <div className='py-8 px-4'>
            <div className='bg-cover text-center rounded-[20px] mx-auto g-no-repeat bg-currency bg-primary opacity-7'>
                <div className='pt-8 md:pt-25'>
                    <h3 className='text-xl md:text-3xl font-bold uppercase text-white m-2 sm:m-0'>Currencies you can find
                        <span className='inline-block sm:block font-normal'>on our Platform</span>
                    </h3>
                    <div className='flex flex-wrap mt-8 w-10/12 mx-auto'>
                        {currenciesdb.map((element, index) => {
                            return (
                                <div key={index} className='flex w-full md:w-1/3 sm:w-1/2 items-center flex-col my-4 md:my-10'>
                                    <img src={element.image} className='w-1/3' alt={element.text} />
                                    <h3 className='mt-2 md:mt-6 font-medium text-xl text-white'>{element.text}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <button className="w-full pr-0 md:pr-8 cursor-pointer font-bold pb-8 text-white text-center md:text-right text-xl">And more...</button>
            </div>
        </div>
    )
}