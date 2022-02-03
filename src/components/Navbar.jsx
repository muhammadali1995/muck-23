import { Link } from "react-router-dom";


export default function Navbar({ navColor }) {
    return (
        <div>
            <nav className=" px-2 sm:px-4 py-2.5">
                <div className="container w-full flex flex-wrap justify-end items-center">
                    <div className="flex justify-end lg:order-2 ml-auto w-full">
                        <button data-collapse-toggle="mobile-menu-2" type="button" className={`${navColor} p-2 ml-1 font-bold md:hidden text-lg`} aria-controls="mobile-menu-2" aria-expanded="false">
                            Menu
                        </button>
                    </div>
                    <div className="ml-auto">
                        <div className="hidden justify-items-end  items-center w-full lg:bg-transparent md:flex md:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className={`flex flex-col mt-4 md:flex-row space-y-3 md:space-y-0 md:space-x-8 md:mt-0 md:text-sm md:font-medium ml-auto ${navColor}`}>
                                <button
                                    id="serviceDropdownButton"
                                    data-dropdown-toggle="serviceDropdown"
                                    className="nav-link flex items-center gap-2"
                                    type="button">
                                    Services
                                </button>
                                <button
                                    id="solutionsDropdownButton"
                                    data-dropdown-toggle="solutionsDropdown"
                                    className="nav-link flex items-center gap-2"
                                    type="button">
                                    Solutions
                                </button>

                                <Link to='/exchanges' className="nav-link">Market Place</Link>
                                <button
                                    id="toolsDropdownButton"
                                    data-dropdown-toggle="toolsDropdown"
                                    className="nav-link flex items-center gap-2"
                                    type="button">
                                    Tools
                                </button>
                                <button
                                    id="aboutUsDropdownButton"
                                    data-dropdown-toggle="aboutUsDropdown"
                                    className="nav-link flex items-center gap-2"
                                    type="button">
                                    About Us
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>



            <div className="flex justify-end">
                <div className={`flex gap-x-12 ${navColor}`}>
                </div>
                <div
                    id="serviceDropdown"
                    className="hidden z-10 w-auto px-3.5 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="py-1" aria-labelledby="serviceDropdownButton">
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/automatic-trading'>
                                Automatic Trading
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/crypto-signals'>
                                Crypto Signals
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/copy-trading'>
                                Copy Trading
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/web-trader'>
                                Web Trader
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/exchanges'>
                                Exchanges
                            </Link>
                        </li>
                    </ul>
                </div>
                <div
                    id="solutionsDropdown"
                    className="hidden z-10 w-auto px-3.5 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="py-1" aria-labelledby="solutionsDropdownButton">
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/automatic-trading'>
                                Beginners
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/crypto-signals'>
                                Pro
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/copy-trading'>
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </div>
                <div
                    id="toolsDropdown"
                    className="hidden z-10 w-auto px-3.5 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="py-1" aria-labelledby="toolsDropdownButton">
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/automatic-trading'>
                                Get Started
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/crypto-signals'>
                                Tutorials
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/copy-trading'>
                                Academy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/web-trader'>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/exchanges'>
                                HelpDesk
                            </Link>
                        </li>
                    </ul>
                </div>
                <div
                    id="aboutUsDropdown"
                    className="hidden z-10 w-auto px-3.5 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="py-1" aria-labelledby="aboutUsDropdownButton">
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/automatic-trading'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/crypto-signals'>
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav-dropdown-link"
                                to='/copy-trading'>
                                Career
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div >

    )
}