import { FC, useState } from "react";


const Banner:FC = () => {
      const [showBanner, hideBanner] = useState(true);

      if (showBanner)
            return <div className="banner">
                  <span className="banner_text">✨Discover Your Dream Property with Estatez <a href="#">Learn More</a></span>
                  
                  <div className="close" onClick={() => hideBanner(!showBanner)}>
                        <span className="material-symbols-outlined">
                              close
                        </span>
                  </div>
            </div>
}

export default Banner;