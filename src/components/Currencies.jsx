import background from './../assets/technology-network-background-min.png'
import bitcoin from './../assets/bitcoin.png'
import crypto from './../assets/crypto.png'
import litecoin from './../assets/litecoin.png'
import repl from './../assets/ripple.png'
import cardano from './../assets/cardano.png'
import dogecoin from './../assets/dogecoin.png'

export default function Currencies() {
    const currenciesdb = [
        { image: bitcoin, text: 'Bitcoin' },
        { image: crypto, text: 'Ethereum' },
        { image: litecoin, text: 'Litecoin' },
        { image: repl, text: 'XRP(Ripple)' },
        { image: cardano, text: 'Cardano' },
        { image: dogecoin, text: 'Dogecoin' }
    ]
    return (
        <div className='p-4'>
            <div className='bg-cover py-20 text-center rounded-2xl w-full max-w-desktop md:w-8/12 mx-auto bg-no-repeat' style={{ backgroundImage: `url(${background})` }}>
                <h3 className='text-3xl font-bold uppercase text-white m-2 sm:m-0'>Currencies you can find
                    <span className='inline-block sm:block font-normal'>on our Platform</span>
                </h3>
                <div className='flex flex-wrap mt-8 w-10/12 mx-auto'>
                    {currenciesdb.map((element, index) => {
                        return (
                            <div key={index} className='flex w-full md:w-1/3 sm:w-1/2 items-center flex-col my-4'>
                                <img src={element.image} className='w-1/3' alt={element.text}/>
                                <h3 className='mt-6 font-medium text-xl text-white'>{element.text}</h3>
                            </div>
                        )
                    })}
                </div>
                <button className="w-full pr-8 cursor-pointer font-bold text-right text-white text-xl">And more...</button>
            </div>
        </div>
    )
}