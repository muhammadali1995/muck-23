import exmo from './../assets/exmo.png';
import bitvavo from './../assets/bitvavo.png';
import hitbtc from './../assets/HitBTC.png';
import okex from './../assets/okex.png';
import bitpanda from './../assets/bitpanda.png';
import huobi from './../assets/huobi.png';
import binance from './../assets/binance.png';
import crypto from './../assets/crypto.png';
import binanceus from './../assets/binanceus.png';
import bitfinex from './../assets/bitfinex.png';
import coinbase from './../assets/gdax.png';
import kraken from './../assets/kraken.png';
import bittrex from './../assets/bittrex.png';
import kucoin from './../assets/kucoin.png';
import poloniex from './../assets/poloniex.png';

export const Partners = () => {
    return <div className='md:px-44  xl:px-75 3xl:px-[468px] mt-16 lg:mt-0'>
        <div className="text-center mb-16 xl:mb-[52px]">
            <h1 className="text-color-text uppercase text-[28px] leading-9 lg:text-5xl lg:leading-[55px]">
                <span className="font-bold">Manage all your exchange</span>
                <br className='hidden lg:block' />
                <span className="font-medium"> accounts in one place</span>
            </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-28">
            <div className="col-span-1 mb-5.5">
                <img src={exmo} alt="exmo" className="partners-logo" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={bitvavo} alt="exmo" className="partners-logo" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={hitbtc} alt="exmo" className="partners-logo" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={okex} alt="exmo" className="partners-logo" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={bitpanda} alt="exmo" className="partners-logo" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={huobi} alt="exmo" className="partners-logo" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={binance} alt="exmo" className="partners-logo" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={crypto} alt="exmo" className="partners-logo" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={binanceus} alt="exmo" className="partners-logo" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={bitfinex} alt="exmo" className="partners-logo" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={coinbase} alt="exmo" className="partners-logo" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={kraken} alt="exmo" className="partners-logo" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={bittrex} alt="exmo" className="partners-logo" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={kucoin} alt="exmo" className="partners-logo" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={poloniex} alt="exmo" className="partners-logo" />
            </div>
        </div>
    </div>;
};
