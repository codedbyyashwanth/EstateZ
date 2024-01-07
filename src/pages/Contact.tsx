import { FC } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";


const Contact:FC = () => {
      return <>
            <header>
                  <Banner />
                  <Navbar isActive="contact" />
            </header>
            <main className="contact-main"></main>
            <footer></footer>
      </>
}

export default Contact;