import { FC } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HeroBg from "../components/Properties/HeroBg";
import FeaturedProperties from "../components/Properties/FeaturedProperties";
import CalltoAction from "../components/CalltoAction";
import Footer from "../components/Footer";
import Search from "../components/Properties/Search";
import ReachOut from "../components/Properties/ReachOut";


const Properties:FC = () => {
      return <>
            <header>
                  <Banner />
                  <Navbar isActive="properties" />
                  <HeroBg />
            </header>
            <main className="properties_main">
                  <Search />
                  <FeaturedProperties />
                  <ReachOut />
                  <CalltoAction />
            </main>
            <Footer />
      </>
}

export default Properties;