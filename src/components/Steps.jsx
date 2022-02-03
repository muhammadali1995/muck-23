export default function Steps({ stepsdb }) {
    return (
        <div className='mx-auto'>
            {stepsdb?.map((element, index) => {
                if (element.order === 1) {
                    return (
                        <div key={index} className='flex flex-col-reverse lg:flex-row items-center justify-between mb-10 sm:mb-20 lg:mb-40'>
                            <div className='mr-0 lg:mr-6 w-full sm:w-2/3 '>
                                <h2 className='step-title'>{element.title}</h2>
                                <div className='h-4 w-full mt-2 hidden sm:block' style={{ background: 'linear-gradient(90.13deg, #00AECC ,rgba(4, 93, 182, 0.5))', }}></div>
                                <p className='step-desc'>{element.text}</p>
                            </div>
                            <div className='my-4 lg:my-0'>
                                <img alt={element.title} src={element.img} className='w-full h-full' />
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                        <div key={index} className='flex flex-col lg:flex-row items-center justify-between mb-10 sm:mb-20 lg:mb-40'>
                            <div className='my-4 lg:my-0'>
                                <img alt={element.title} src={element.img} className='w-full h-full' />
                            </div>
                            <div className='ml-0 lg:ml-6 w-full sm:w-2/3'>
                                <h2 className='step-title'>{element.title}</h2>
                                <div className='w-full h-4 hidden sm:block mt-2' style={{ background: 'linear-gradient(90.13deg, #00AECC 5.66%, rgba(4, 93, 182, 0.5) 106.16%)', }}></div>
                                <p className='step-desc'>{element.text}</p>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}