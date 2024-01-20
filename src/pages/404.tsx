import { FC } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";


const NotFound:FC = () => {
      return <>
            <header>
                  <Banner />
                  <Navbar isActive="404" />
            </header>
            <main className="Not_main">
                  <div className="gif">
                        <h1>404 - Page Not Found</h1>
                  </div>
            </main>
            <footer></footer>
      </>
}

export default NotFound;