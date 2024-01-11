import { HeadingPropes } from "../util/PropTypes";

const HeadTitle = ({heading, text}:HeadingPropes) => {
      return (
            <div className="heading_container">
                  <div className="left_container">
                        <h1 className="h2">{heading}</h1>
                        <p className="text">{text}</p>
                  </div>

                  <div className="pattern_content">
                        <img src="/pattern-star.png" alt="" />
                  </div>
            </div>
      );
}

export default HeadTitle;