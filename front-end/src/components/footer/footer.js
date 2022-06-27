import city from "../../cityline.png"
import style from "./footer.module.css"
import { useState, useContext, useEffect } from "react";
import { PersonContext } from "../../App";

function Footer(){
   const contextData = useContext(PersonContext);

   const [width, setWidth] = useState(500 || contextData.width);

  //  const [height, setHeight] = useState(500 || contextData.height);

  useEffect(() => {
    if (contextData !== undefined) {
      setWidth(contextData.width);
      setHeight(contextData.height);
    }
  }, [contextData]);

    return (
      <div className={style.mainFooterContainer} style={{width:`${width}px`}} data-testid="footerMainContainerWrapper">
        <img src={city} alt="city-right-logo"></img>
        <img src={city} alt="city-right-logo" className={style.flipImg}></img>
      </div>
    );
}

export default Footer;