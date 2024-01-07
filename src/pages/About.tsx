import { FC } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";


const About:FC = () => {
      return <>
            <header>
                  <Banner />
                  <Navbar isActive="about" />
            </header>
            <main className="about-main"></main>
            <footer></footer>
      </>
}

export default About;