import style from "./header.module.css"
import logoLarge from '../../Group 5.svg'
import {useContext} from 'react';
import { PersonContext } from "../../App";
import logoSmall from '../../Group 4.svg';

function Header(){
  const contextData = useContext(PersonContext);
  const height = contextData.height;
  const width = contextData.width;

  console.log(height)
  console.log(width)

    return (
      <div
        className={`${style.headerComponentHolder} ${
          width > 500 ? style.bigScreen : style.smallScreen
        }`}
      >
        <div className={style.imgContainer}>
          {width > 500 ? (
            <img src={logoLarge} alt="what" />
          ) : (
            <img src={logoSmall} alt="what" />
          )}
        </div>
      </div>
    );
}

export default Header;