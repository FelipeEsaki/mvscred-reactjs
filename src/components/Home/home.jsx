import Header from "../header/header";
import Carousel from "./carousel";
import FirstSection from "../sections/firstSection";
import FourthSection from "../sections/fourthSection";
import SecondSection from "../sections/secondSection";
import ThirdSection from "../sections/thirdSection";
import FifthSection from "../sections/fifthSection";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";

export default

function Home () {
    return (
        <main>
          <Header/>
          <Carousel/>
          <FirstSection/>
          <FourthSection/>
          <SecondSection/>
          <ThirdSection/>
          <FifthSection/>
          <Footer/>
        </main>
    )
}