import Navbar from "./Navbar";
import Registration from "./Registration";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
const white = {
    bg: '#022F5B',
    color: 'text-white'
}
const black = {
    bg: 'rgba(0, 137, 211, 0.1)',
    color: 'text-color-text'
}
const colorMaps = {
    '/': black,
    "/automatic-trading": white,
    '/crypto-signals': black,
    '/copy-trading': white,
    '/solution': black,
    '/pricing': black,
    '/exchanges': black,
    '/market-place-coming': black,
    '/about': white,
    '/web-trader': black
}

export default function NavWrapper() {
    let location = useLocation();
    const [path, setPath] = useState('/');

    useEffect(() => {
        setPath(location.pathname)
    }, [location])

    return (
        <>
            <div className="side-padding" style={{ background: colorMaps[path]?.bg }}>
                <div className="md:py-5 lg:py-7 2xl:py-10">
                    <Registration color={colorMaps[path]?.color} />
                </div>
                <div className="py-5 lg:py-0">
                    <Navbar navColor={colorMaps[path]?.color} />
                </div>
            </div>
        </>
    )
};
