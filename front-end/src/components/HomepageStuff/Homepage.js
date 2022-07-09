
import Header from '../header/header.js'
import Body from '../body/body.js';
import Footer from '../footer/footer.js'
import style from "./Homepage.module.css"
import React, {useState,useEffect} from 'react';

export const PersonContext = React.createContext();

function Homepage() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  // dynamic Width
  useEffect(() => {
    function width() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", width);
    width();
  }, [width]);

  // dynamic height
  useEffect(()=>{
    function height(){
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", height);
    height()
  },[height]);

  return (
    <PersonContext.Provider value={{ width, height }}>
      <div
        className={style.websiteContainer}
        style={{ width: `${width}px`, height: `${height}px` }}
        data-testid="mainProjectWrapper"
      >
        <div className={style.header}>
          <Header />
        </div>
        <Body />
        <Footer />
      </div>
    </PersonContext.Provider>
  );
}

export default Homepage;
