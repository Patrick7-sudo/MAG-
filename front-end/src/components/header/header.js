import style from "./header.module.css"
import logoLarge from '../../Group 5.svg'
import {useState,useEffect} from 'react';

import logoSmall from '../../Group 4.svg';

function Header(){


  // const [height, setHeight] = useState(500 || contextData.height);
 const [width, setWidth] = useState(500);

   useEffect(() => {
     function width() {
       setWidth(window.innerWidth);
     }
     window.addEventListener("resize", width);
     width();
   }, [width]);
  
    return (
      <div
        className={`${style.headerComponentHolder} ${
          width > 900 ? style.bigScreen : style.smallScreen
        }`}
        data-testid="headerComponentHolder"
      >
        <div
          className={style.imgContainer}
          data-testid="headerComponentLogoHolder"
        >
          {width > 900 ? (
            <img
              className={style.logoLarge}
              src={logoLarge}
              alt="what"
              data-testid="logoBig"
            />
          ) : (
            <img
              className={style.logoSmall}
              src={logoSmall}
              alt="what"
              data-testid="logoSmall"
            />
          )}
        </div>
      </div>
    );
}

export default Header;