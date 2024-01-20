import HeadTitle from "../HeadTitle"
import { HeadingPropes } from "../../util/PropTypes";
import ClientsCarousel from "../ClientsCarousel";
import { valuedClients } from "../../util/data";

const Clients = () => {
      const headData:HeadingPropes = {
            heading: "Our Valued Clients",
            text: "At EstateZ, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving",
            buttonText: ""
      }

      return (
            <section className="clients_section">
                  <div className="container">
                        <HeadTitle heading={headData.heading} text={headData.text} buttonText="" />
                        <div className="clients_container">
                              <ClientsCarousel valuedClients={valuedClients} />
                        </div>
                  </div>
            </section>
      )
}

export default Clients;