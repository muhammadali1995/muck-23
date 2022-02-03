import Footer from "../components/Footer";
import { HomeAutomateTrade } from "../components/HomeAutomateTrade";
import { HomeCopyTraders } from "../components/HomeCopyTraders";
import { HomeHeader } from "../components/HomeHeader";
import HomeMedia from "../components/HomeMedia";
import { HomeOpinion } from "../components/HomeOpinion";
import { Partners } from "../components/Partners";

export default function Home() {
    return (
        <>
            <HomeHeader />
            <HomeAutomateTrade />
            <Partners />
            <HomeCopyTraders />
            <HomeOpinion />
            <HomeMedia />
            <Footer />
        </>
    )
}