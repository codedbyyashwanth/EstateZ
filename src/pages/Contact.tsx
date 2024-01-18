import { FC } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HeroBg from "../components/Contact/HeroBg";
import Features from "../components/Home/Features";
import ReachOut from "../components/Properties/ReachOut";
import Clients from "../components/About/Clients";
import CalltoAction from "../components/CalltoAction";
import Footer from "../components/Footer";


const Contact:FC = () => {
      return <>
            <header>
                  <Banner />
                  <Navbar isActive="contact" />
                  <HeroBg />
            </header>
            <main className="contact_main">
                  <Features />
                  <ReachOut />
                  <Clients />
                  <CalltoAction />
            </main>
            <Footer />
      </>
}

export default Contact;