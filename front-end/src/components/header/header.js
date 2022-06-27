import style from "./header.module.css"
import logoLarge from '../../Group 5.svg'
import {useState,useContext,useEffect} from 'react';
import { PersonContext } from "../../App";
import logoSmall from '../../Group 4.svg';

function Header(){
  const contextData = useContext(PersonContext);
  
  const [width,setWidth] =useState(500 || contextData.width);

  // const [height, setHeight] = useState(500 || contextData.height);
 

  useEffect(()=>{
    if(contextData !== undefined){
      setWidth(contextData.width)
      setHeight(contextData.height)
    }
  },[contextData])
  
    return (
      <div
        className={`${style.headerComponentHolder} ${
          width > 500 ? style.bigScreen : style.smallScreen
        }`}
        data-testid="headerComponentHolder"
      >
        <div
          className={style.imgContainer}
          data-testid="headerComponentLogoHolder"
        >
          {width > 500 ? (
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