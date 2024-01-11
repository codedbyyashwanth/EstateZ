import HeadTitle from "../HeadTitle"
import { HeadingPropes } from "../../util/PropTypes"

const Team = () => {
      const headData:HeadingPropes = {
            heading: "Meet the Estatein Team",
            text: "At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.",
            buttonText: ""
      }
      return (
            <section className="team">
                  <div className="container">
                        <HeadTitle heading={headData.heading} text={headData.text} buttonText="" />

                        <div className="team_container">
                              <div className="items">
                                    <div className="img_container">
                                          <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                          <div className="icon_container">
                                                <img src="/icon.png" alt="" />
                                          </div>
                                    </div>
                                    <div className="text_content">
                                          <h3>Max Mitchell</h3>
                                          <p className="text">Founder</p>
                                          <div className="input_group">
                                                <input type="text" placeholder="Say Hello 👋" />
                                                <div className="icon_container">
                                                <span className="material-symbols-outlined">
                                                send
                                                </span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="items">
                                    <div className="img_container">
                                          <img src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=1741&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                          <div className="icon_container">
                                                <img src="/icon.png" alt="" />
                                          </div>
                                    </div>
                                    <div className="text_content">
                                          <h3>Sarah Johnson</h3>
                                          <p className="text">Chief Real Estate Officer</p>
                                          <div className="input_group">
                                                <input type="text"  placeholder="Say Hello 👋"/>
                                                <div className="icon_container">
                                                <span className="material-symbols-outlined">
                                                send
                                                </span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="items">
                                    <div className="img_container">
                                          <img src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                          <div className="icon_container">
                                                <img src="/icon.png" alt="" />
                                          </div>
                                    </div>
                                    <div className="text_content">
                                          <h3>David Brown</h3>
                                          <p className="text">Head of Property Management</p>
                                          <div className="input_group">
                                                <input type="text" placeholder="Say Hello 👋" />
                                                <div className="icon_container">
                                                <span className="material-symbols-outlined">
                                                send
                                                </span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="items">
                                    <div className="img_container">
                                          <img src="https://images.unsplash.com/photo-1621903570450-b6750dce9350?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                          <div className="icon_container">
                                                <img src="/icon.png" alt="" />
                                          </div>
                                    </div>
                                    <div className="text_content">
                                          <h3>Michael Turner</h3>
                                          <p className="text">Legal Counsel</p>
                                          <div className="input_group">
                                                <input type="text"  placeholder="Say Hello 👋"/>
                                                <div className="icon_container">
                                                <span className="material-symbols-outlined">
                                                send
                                                </span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Team;