import { FC } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";


const NotFound:FC = () => {
      return <>
            <header>
                  <Banner />
                  <Navbar isActive="404" />
            </header>
            <main className="404-main">
                  <h1>404</h1>
            </main>
            <footer></footer>
      </>
}

export default NotFound;