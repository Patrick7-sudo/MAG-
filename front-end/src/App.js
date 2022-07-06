
import Header from './components/header/header.js'
import Body from './components/body/body.js';
import Footer from './components/footer/footer.js'
import style from "./App.module.css"
import React, {useState,useEffect} from 'react';

export const PersonContext = React.createContext();

function App() {
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
      <div className={style.websiteContainer} style={{width:`${width}px`,height:`${height}px`}}data-testid="mainProjectWrapper">
        <Header />
        <Body />
        <Footer />
      </div>
    </PersonContext.Provider>
  );
}

export default App;
