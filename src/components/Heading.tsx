import { HeadingPropes } from "../util/PropTypes";

const Heading = ({heading, text, buttonText}:HeadingPropes) => {
      return (
            <div className="heading_container">
                  <div className="left_container">
                        <h1 className="h2">{heading}</h1>
                        <p className="text">{text}</p>
                  </div>
                  <div className="right_container">
                        <a href="#" className="secondary_btn">{buttonText}</a>
                  </div>

                  <div className="pattern_content">
                        <img src="/pattern-star.png" alt="" />
                  </div>
            </div>
      );
}

export default Heading;