import style from "./body.module.css"
import {useState} from 'react'
// import { PersonContext } from "../../App";
function Body(){
    const [showAirlines,setShowAirlines]=useState(false);
    const [showAirport, setShowAirport] = useState(true);
    const [showBoth, setShowBoth] =useState(false);


    //function for dynamic input field form
        function airlinesInput(){
          // radio to checked for airlines options
          if (showAirlines) {
            setShowAirlines(false);
            setShowAirport(false);
            setShowBoth(false);
          } else {
            setShowAirlines(true);
            setShowAirport(false);
            setShowBoth(false);
          }
          // end of radio to checked for airlines options 
       
        }

        function airportInput(){
          // radio to checked for airport options
          if (showAirport) {
            setShowAirport(false);
            setShowAirlines(false);
            setShowBoth(false);
          } else {
            setShowAirlines(false);
            setShowAirport(true);
            setShowBoth(false);
          }
          // end of radio to checked for airport options
        
        }

        function bothInput() {
          // radio to checked for airport options
          if (showBoth) {
            setShowAirport(false);
            setShowAirlines(false);
            setShowBoth(false);
          } else {
            setShowAirlines(false);
            setShowAirport(false);
            setShowBoth(true);
          }
          // end of radio to checked for airport options
        
        }
    
    return (
      <div className={style.bodyMainContainer}>
        <div className={style.mainContainer}>
          {/* the tagline */}
          <div className={style.tagLine}>
            <p>Discover The World Of Aviation</p>
          </div>
          {/* end of the tagline */}
          {/* the option of the tagline */}
          <div className={style.optionsHolder}>
            <div>
              <form action="" className={style.formContainer}>
                <div className={style.optionsMain}>
                  <input
                    type="radio"
                    id="airport"
                    name="lagradio"
                    value="airport"
                    checked={showAirport === true}
                    onChange={airportInput}
                  />
                  <label htmlFor="airport">Airport</label>

                  <input
                    type="radio"
                    id="airlines"
                    name="lagradio"
                    value="airlines"
                    onChange={airlinesInput}
                  />
                  <label htmlFor="airlines">Airlines</label>

                  <input
                    type="radio"
                    id="airportsairlines"
                    name="lagradio"
                    value="airportaairlines"
                    onChange={bothInput}
                  />

                  <label htmlFor="airportsairlines">Airport + Airlines</label>
                </div>

                {showAirlines || showBoth ? (
                  <input type="text" />
                ) : (
                  <h1>airlines</h1>
                )}

                {showAirport || showBoth ? (
                  <input type="text" />
                ) : (
                  <h1>airport</h1>
                )}

              </form>
            </div>
          </div>
          {/* end of the option of the tagline */}
        </div>
      </div>
    );
}

export default Body;