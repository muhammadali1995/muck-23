import background from './../assets/keyFeature.png'
import browser from './../assets/browser.png'
import translate from './../assets/translation.png'
import maskGroup from './../assets/Mask Group.png'
import chart from './../assets/chart.png'
import coding from './../assets/coding.png'
import unlock from './../assets/unlock.png'


export default function KeyFeatures() {
    const currenciesdb = [
        { image: browser, text: 'Works with any Browser' },
        { image: translate, text: 'Multi-language support' },
        { image: maskGroup, text: 'Fully synchronized with MT4' },
        { image: chart, text: 'Trade directly from the chart' },
        { image: coding, text: 'No downloads, Flash or Java required' },
        { image: unlock, text: 'Keep your MT4 login and password' }
    ]
    return (
        <div className='-mt-28 side-padding'>
            <div className='bg-cover py-20 text-center rounded-2xl w-full p-8 mx-auto bg-no-repeat' style={{ backgroundImage: `url(${background})` }}>
                <h3 className='text-3xl font-bold uppercase text-white m-2 sm:m-0'>Key Features Include</h3>
                <div className='flex flex-wrap mt-8 w-10/12 mx-auto'>
                    {currenciesdb.map((element, index) => {
                        return (
                            <div key={index} className='flex w-full md:w-1/3 sm:w-1/2 items-center flex-col my-4 md:my-10'>
                                <img alt={element.name} src={element.image} className='w-1/3' />
                                <h3 className='mt-6 font-medium text-xl text-white w-full md:w-4/5'>{element.text}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}