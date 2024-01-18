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
                  <dotlottie-player src="https://lottie.host/ce0059f9-c934-4ee1-8c6f-48c3019d2ae5/e57VG23k7g.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
                  </div>
            </main>
            <footer></footer>
      </>
}

export default NotFound;