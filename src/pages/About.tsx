import { FC } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HeroBg from "../components/About/HeroBg";
import OurValues from "../components/About/OurValues";
import Achievements from "../components/About/Achievements";
import Features from "../components/About/Features";
import Team from "../components/About/Team";
import Clients from "../components/About/Clients";
import CalltoAction from "../components/CalltoAction";
import Footer from "../components/Footer";


const About:FC = () => {
      return <>
            <header>
                  <Banner />
                  <Navbar isActive="about" />
                  <HeroBg />
            </header>
            <main className="about_main">
                  <OurValues />
                  <Achievements />
                  <Features />
                  <Team />
                  <Clients />
                  <CalltoAction />
            </main>
            <Footer />
      </>
}

export default About;