import { FC } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";


const Services:FC = () => {
      return <>
            <header>
                  <Banner />
                  <Navbar isActive="services" />
            </header>
            <main className="services-main"></main>
            <footer></footer>
      </>
}

export default Services;