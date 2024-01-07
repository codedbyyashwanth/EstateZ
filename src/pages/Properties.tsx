import { FC } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";


const Properties:FC = () => {
      return <>
            <header>
                  <Banner />
                  <Navbar isActive="properties" />
            </header>
            <main className="properties-main"></main>
            <footer></footer>
      </>
}

export default Properties;