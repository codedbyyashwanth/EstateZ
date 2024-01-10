import { FC } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HeroBg from "../components/About/HeroBg";


const About:FC = () => {
      return <>
            <header>
                  <Banner />
                  <Navbar isActive="about" />
                  <HeroBg />
            </header>
            <main className="about-main"></main>
            <footer></footer>
      </>
}

export default About;