import { Link } from "react-router-dom";
import { BsCaretDown } from 'react-icons/bs'

export default function Navbar() {

    return (

        <div className="flex justify-end items-end flex-col">
            <div className="flex gap-x-12">
                <button
                    id="serviceDropdownButton"
                    data-dropdown-toggle="serviceDropdown"
                    className="nav-link flex items-center gap-2"
                    type="button">
                    Services
                    <BsCaretDown className='py-0' />
                </button>
                <button
                    id="solutionsDropdownButton"
                    data-dropdown-toggle="solutionsDropdown"
                    className="nav-link flex items-center gap-2"
                    type="button">
                    Solutions
                    <BsCaretDown className='py-0' />
                </button>

                <Link to='/exchanges' className="nav-link">Market Place</Link>
                <button
                    id="toolsDropdownButton"
                    data-dropdown-toggle="toolsDropdown"
                    className="nav-link flex items-center gap-2"
                    type="button">
                    Tools
                    <BsCaretDown className='py-0' />
                </button>
                <button
                    id="aboutUsDropdownButton"
                    data-dropdown-toggle="aboutUsDropdown"
                    className="nav-link flex items-center gap-2"
                    type="button">
                    About Us
                    <BsCaretDown className='py-0' />
                </button>
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
    )
}