import laptop from './../assets/WebTrader_Laptop_design.png'

export default function WebTraderMain() {
    return (
        <div className="bg-dark-primary py-20">
            <div className="mx-auto max-w-[1000px] flex items-center flex-col p-4 md:flex-row justify-between">
                <div class="text-white w-full md:w-1/2">
                    <h1 class="font-bold text-5xl">Lorem ipsum dolor sit.</h1>
                    <p class="font-normal mt-4 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium deleniti officia praesentium saepe, accusamus officiis? Illum pariatur deserunt harum.</p>
                    <button class="mt-6">Lorem.</button>
                </div>
                <div>
                    <img alt="laptop" src={laptop} />
                </div>
            </div>
        </div>
    )
}