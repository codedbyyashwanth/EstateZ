import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import Property from "./pages/Property";

const App:FC = () => {
      return (
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/properties">
                        <Route index element={<Properties />} />
                        <Route path=":id" element={<Property />} />
                  </Route>
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
            </Routes>
      );
}

export default App;