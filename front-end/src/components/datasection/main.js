
import style from "./main.module.css";
import {useState,useEffect} from "react";
import Header from "../header/header";

function Main(){
    const [width, setWidth] =useState("");
    const [height, setHeight] = useState("");

    useEffect(()=>{
        function widthDynamic(){
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize",widthDynamic)
        widthDynamic()
    },[width])

    useEffect(() => {
      function heightDynamic() {
        setHeight(window.innerHeight);
      }

      window.addEventListener("resize", heightDynamic);
      heightDynamic();
    }, [height]);

    console.log(width)
    console.log(height)
    return (
      <div className={style.MainContainer} style={{ width: `${width}px` }}>
        {/* header/navbar */}
        <div className={style.headerContainer}>
          <Header />
        </div>
        {/* End of header/navbar */}
        {/* main/container */}
        <div className={style.mainContentContainer}>
          {/* search result display */}
          <div className={style.contentSearchContainer}>
            <p className={style.contentSearchContainerHeading}>
              Search Result :
            </p>
            <div className={style.inputContainerDisplay}>
              <p className={style.contentSearchContainerPara}>Stansted</p>
              <p className={style.contentSearchContainerPara}>RyanAir</p>
            </div>
          </div>
          {/* end of search result display */}
          {/* data display  */}
          {width > 900 ? (
            // data display big screen
            <div className={style.mainContentDataContainer}>
              {/* data display lablels */}
              <div className={style.mainContentDataLabelContainer}>
                <p>Airlines</p>
                <p>Destination</p>
                <p>Flight.Num</p>
                <p>Departure</p>
                <p>Arrival</p>
                <p>Date</p>
              </div>
              {/* need to map here */}
              <div className={style.mainContentData}>
                <p>RyanAir</p>
                <p>Barcelona</p>
                <p>RY 1022</p>
                <p>0900</p>
                <p>1300</p>
                <p>12/7/2022</p>
              </div>

              <div className={style.mainContentData}>
                <p>MH</p>
                <p>KUL</p>
                <p>MH 0001</p>
                <p>0900</p>
                <p>2300</p>
                <p>12/7/2022</p>
              </div>
              {/* end of need to map here */}
              {/* end of data display lablels */}
            </div>
          ) : (
            // end data display big screen
            //data display small screen
            <div className={style.smallScreenmainContentDataContainer}>
              {/* map here */}
              <div className={style.smallScreenmainContentIndividualContainer}>
                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Airlines</p>
                  <p>RyanAir</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Destination</p>
                  <p>Barcelona</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Flight.Num</p>
                  <p>FR 2012</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Departure</p>
                  <p>0900</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Arrival</p>
                  <p>2300</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Date</p>
                  <p>12/7/2022</p>
                </div>
              </div>

              {/* end of map here */}
              {/* try out */}
              <div className={style.smallScreenmainContentIndividualContainer}>
                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Airlines</p>
                  <p>RyanAir</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Destination</p>
                  <p>Barcelona</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Flight.Num</p>
                  <p>FR 2012</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Departure</p>
                  <p>0900</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Arrival</p>
                  <p>2300</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Date</p>
                  <p>12/7/2022</p>
                </div>
              </div>

              <div className={style.smallScreenmainContentIndividualContainer}>
                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Airlines</p>
                  <p>RyanAir</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Destination</p>
                  <p>Barcelona</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Flight.Num</p>
                  <p>FR 2012</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Departure</p>
                  <p>0900</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Arrival</p>
                  <p>2300</p>
                </div>

                <div className={style.smallScreenmainAirlineContainer}>
                  <p>Date</p>
                  <p>12/7/2022</p>
                </div>
              </div>

              {/* try pout */}
            </div>
            //end data display small screen)
          )}
          {/* data display  */}

          {/* search again container */}

          {/* end of search again container */}
        </div>
        {/* End of main/contaienr */}
      </div>
    );
}

export default Main;