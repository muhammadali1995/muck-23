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
    return <>
        <div className="text-center mb-[52px]">
            <h1 className="text-color-text uppercase text-5xl leading-[55px]">
                <span className="font-bold">Manage all your exchange</span>
                <br />
                <span className="font-medium">accounts in one place</span>
            </h1>
        </div>
        <div className="grid grid-cols-3 gap-x-28">
            <div className="col-span-1 mb-5.5">
                <img src={exmo} alt="exmo" className="w-full" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={bitvavo} alt="exmo" className="w-full" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={hitbtc} alt="exmo" className="w-full" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={okex} alt="exmo" className="w-full" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={bitpanda} alt="exmo" className="w-full" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={huobi} alt="exmo" className="w-full" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={binance} alt="exmo" className="w-full" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={crypto} alt="exmo" className="w-full" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={binanceus} alt="exmo" className="w-full" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={bitfinex} alt="exmo" className="w-full" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={coinbase} alt="exmo" className="w-full" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={kraken} alt="exmo" className="w-full" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={bittrex} alt="exmo" className="w-full" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={kucoin} alt="exmo" className="w-full" />
            </div>
            <div className="col-span-1 mb-5.5">
                <img src={poloniex} alt="exmo" className="w-full" />
            </div>
        </div>
    </>;
};
