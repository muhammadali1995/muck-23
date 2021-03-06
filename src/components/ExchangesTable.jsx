import exmo from './../assets/exmo_logo.png'
import okex from './../assets/logo_okex.png'
import bitvavo from './../assets/bitvavo_logo.png'
import bitpanda from './../assets/bitpanda_logo.png'
import huobi from './../assets/huobi_logo.png'
import hitbtc from './../assets/hitbtc_logo.png'
import bittrex from './../assets/bittrex_logo.png'
import poloniex from './../assets/poloniex_logo.png'
import gdax from './../assets/gdax_logo.png'
import binance from './../assets/binance_logo.png'
import binancius from './../assets/binanceus_logo.png'
import bitfinex from './../assets/bitfinex_logo.png'
import kucoin from './../assets/kucoin_logo.png'
import kraken from './../assets/kraken_logo.png'
import crypto from './../assets/crypto_logo.png'

export default function ExchangesTable() {

    const exchangedb = [
        { order: '1', name: exmo, button: 1, markets: '183', },
        { order: '2', name: okex, button: 1, markets: '512', },
        { order: '3', name: bitvavo, button: 1, markets: '163', },
        { order: '4', name: bitpanda, button: 1, markets: '26', },
        { order: '5', name: huobi, button: 1, markets: '1076', },
        { order: '6', name: hitbtc, button: 1, markets: '1204', },
        { order: '7', name: bittrex, brand: 'Bittrex', button: 1, markets: '1103', },
        { order: '8', name: poloniex, brand: 'Poloniex', button: 1, markets: '491', },
        { order: '9', name: gdax, brand: 'Coinbase Pro', button: 1, markets: '425', },
        { order: '10', name: binance, brand: 'Binance', button: 1, markets: '1427', },
        { order: '11', name: binancius, brand: 'Binance.us', button: 1, markets: '155', },
        { order: '12', name: bitfinex, brand: 'Bitfinex', button: 1, markets: '433', },
        { order: '13', name: kucoin, brand: 'Binance', button: 1, markets: '1133', },
        { order: '14', name: kraken, brand: 'Binance.us', button: 1, markets: '431', },
        { order: '15', name: crypto, brand: 'Bitfinex', button: 1, markets: '276', }

    ]

    return (
        <div className='bg-[#0089D31A]'>
            <div className='py-20 lg:pt-48'>
                <h1 className="font-extrabold text-xl md:header-title text-accent text-center">Exchanges</h1>
                <p className="mt-4 mx-auto text-center w-full lg:w-1/4 px-4">The following crypto exchanges are officially supported
                    by No name 1</p>
                <div className='w-100 p-0 md:side-padding overflow-auto py-25'>
                    <div className="border-[#00000033] bg-[#F6F6F64D] mt-12 border mx-0 md:mx-auto w-[1200px]" style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                        <div className="flex border-b border-[#000] items-center justify-between py-5 px-8 text-[#333333] opacity-80 font-medium">
                            <h3 className='-mr-[25px] flex-grow'>#</h3>
                            <h3 className="flex-grow">Name</h3>
                            <h3 className='ml-[35px] flex-grow text-right'>#markets</h3>
                            <h3 className="flex-grow text-right">Status</h3>
                            <h3 className="flex-grow text-right">Uptime - month</h3>
                        </div>
                        <div>
                            {exchangedb.map((e, index) => {
                                if (e.brand) {
                                    return (
                                        <div key={index} className="flex items-center justify-between border-b border-[#000] py-5 px-8 text-[#333333] opacity-80 font-medium">
                                            <h3 className='-mr-10'>{e.order}</h3>
                                            <h3><img alt={e.name} className='w-[100px]' src={e.name} /></h3>
                                            <h3 className="text-sm w-32 text-center font-semibold -ml-10">{e.brand}</h3>
                                            <h3 className='font-medium'>{e.markets}</h3>
                                            <h3 className="text-sm bg-[#30CEC7] px-2 py-1 rounded text-white cursor-pointer"> Exchange available</h3>
                                            <h3 className='text-[#30CEC7] font-bold mr-[30px]'>100%</h3>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div key={index} className="flex items-center justify-between border-b border-[#000] py-5 px-8 text-[#333333] opacity-80 font-medium">
                                            <h3 className='-mr-10'>{e.order}</h3>
                                            <h3><img alt={e.name} className='w-[100px]' src={e.name} /></h3>
                                            <h3 className="text-sm bg-[#045DB6] px-2 -ml-10 text-white py-1 rounded cursor-pointer">Official Partner</h3>
                                            <h3 className='font-medium'>{e.markets}</h3>
                                            <h3 className="text-sm bg-[#30CEC7] px-2 text-white py-1 rounded cursor-pointer"> Exchange available</h3>
                                            <h3 className='text-[#30CEC7] font-bold mr-[30px]'>100%</h3>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}