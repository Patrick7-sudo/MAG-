import style from "./body.module.css"
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
// import { PersonContext } from "../../App";
// , useEffect, useContext
function Body(){
  const [showAirlines, setShowAirlines] = useState(false);
  const [showAirport, setShowAirport] = useState(true);
  const [showBoth, setShowBoth] = useState(false);
  const [airlineInputField, setAirlineInputField] = useState("");
  const [airportInputField, setAirportInputField] = useState("");

  const navigate = useNavigate();

  // function link delay
  function linkDelayed() {
    setTimeout(() => {
      navigate("/main");
    }, 500);
    console.log("link clicked");
  }
  // end of function delay

  //function for dynamic input field form
  function airlinesInput() {
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

  function airportInput() {
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

  // function
  // function dataInput(){
  //   console.log()
  // }

  function handleSubmit(e) {
    e.preventDefault();

    const dataToUse = [];
    if (airlineInputField !== "" || airportInputField !== "") {
      dataToUse.push({
        airline: airlineInputField,
        airport: airportInputField,
      });
    }
    console.log(dataToUse);
    setAirlineInputField("");
    setAirportInputField("");
    console.log(airlineInputField);
    console.log(airportInputField);
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
          <div className={style.optionsHolderContainer}>
            <form
              action=""
              className={style.formContainer}
              onSubmit={handleSubmit}
            >
              <div className={style.optionsMain}>
                {/* first option */}
                <div className={style.optionsMainIndividual}>
                  <label htmlFor="airport">
                    <input
                      type="radio"
                      id="airport"
                      name="lagradio"
                      value="airport"
                      checked={showAirport === true}
                      onChange={airportInput}
                    />
                    <div className={style.customButton}>
                      <div className={style.round}></div>
                    </div>
                    <div className={style.labelText}>Airport</div>
                  </label>
                </div>
                {/* end first option */}

                {/* second options */}
                <div className={style.optionsMainIndividual}>
                  <label htmlFor="airlines">
                    <input
                      type="radio"
                      id="airlines"
                      name="lagradio"
                      value="airlines"
                      onChange={airlinesInput}
                    />
                    <div className={style.customButton}>
                      <div className={style.round}></div>
                    </div>
                    <div className={style.labelText}>Airlines</div>
                  </label>
                </div>
                {/* end of second options */}

                {/* third options */}
                <div className={style.optionsMainIndividual}>
                  <label htmlFor="airportsairlines">
                    <input
                      type="radio"
                      id="airportsairlines"
                      name="lagradio"
                      value="airportaairlines"
                      onChange={bothInput}
                    />
                    <div className={style.customButton}>
                      <div className={style.round}></div>
                    </div>
                    <div className={style.labelText}>Airport + Airlines</div>
                  </label>
                </div>
                {/* End of third options */}
              </div>

              <div className={style.inputHolders}>
                {showAirlines || showBoth ? (
                  <label>
                    <p>Airlines :</p>
                    <input
                      type="text"
                      placeholder="E.g BA"
                      onChange={(event) =>
                        setAirlineInputField(event.target.value)
                      }
                      value={airlineInputField}
                    ></input>
                  </label>
                ) : null}

                {showAirport || showBoth ? (
                  <label>
                    <p>Airport :</p>
                    <input
                      type="text"
                      placeholder="E.g LHR"
                      onChange={(event) =>
                        setAirportInputField(event.target.value)
                      }
                      value={airportInputField}
                    ></input>
                  </label>
                ) : null}
              </div>
              <div className={style.submitBtnHolder}>
            
                  <input
                    type="submit"
                    value="submit"
                    className={style.buttonSubmitForm}
                    onClick={()=>linkDelayed()}
                  />
              
              </div>
            </form>
          </div>
        </div>
        {/* end of the option of the tagline */}
      </div>
    </div>
  );
}

export default Body;