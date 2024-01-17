import { FC } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HeroBg from "../components/Services/HeroBg";
import Features from "../components/Home/Features";
import PropertyValue from "../components/Services/PropertyValue";
import OurValues from "../components/Services/OurValues";
import CalltoAction from "../components/CalltoAction";
import Footer from "../components/Footer";


const Services:FC = () => {
      return <>
            <header>
                  <Banner />
                  <Navbar isActive="services" />
                  <HeroBg />
            </header>
            <main className="services_main">
                  <Features />
                  <PropertyValue />
                  <OurValues />
                  <CalltoAction />
            </main>
            <Footer />
      </>
}

export default Services;