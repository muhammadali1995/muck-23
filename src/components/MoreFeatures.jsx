export default function Paragraphs() {
    const moreInformationdb = [
        { text: 'View aggregated positions' },
        { text: ' Advanced "Close All" functionality' },
        { text: 'Real-time quotes and execution' },
        { text: 'Dynamic order routing' },
        { text: 'You can filter instruments using keyword or securities group or set your own asset classes' },
        { text: 'By just optimizing the smart one-click trading mode, traders can set size, TP/SL, and also open orders with exceptional speed.' },
        { text: 'By just optimizing the smart one-click trading mode, traders can set size, TP/SL, and also open orders with exceptional speed.' },
        { text: 'ChartDock gives traders the ability to analyze up to 10 charts simultaneously. Charts can either be manually arranged or automatically arranged at the click of a button.' },
        { text: 'Excellent HTML5 charting which includes five chart types, vector drawings, and 100+ studies.' },
        { text: 'The summary tab shows traders aggregated positions grouped by symbol, allowing users to clearly see total P/L recorded for a particular instrument.' },
        { text: 'Keep your eyes on the market trend and your open positions at the same time! Open and close trades directly from the chart.' },
        { text: 'With advanced ‘Close All’ control, traders can close any transaction: profitable, losing, buy, sell and open positions with just one click.' }
    ]
    return (
        <div className="side-padding mx-auto">
            <h1 className="font-bold text-[48px] my-[60px]">More Features Included</h1>
            {moreInformationdb.map((element,index) => {
                return (
                    <div key={index} className="flex items-center my-[12px]">
                        <div className="flex items-start">
                            <div className="w-[13px] h-[13px] bg-[#045DB6] rounded-full mr-2"></div>
                        </div>
                        <p className="font-medium">{element.text}</p>
                    </div>
                )
            })}
            <button className='header-btn-try mt-[60px] mb-[137px]'>TRY IT NOW</button>
        </div>
    )
}