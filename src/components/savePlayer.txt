import React, { useState, useRef } from "react";
import AudioPlayer from 'react-h5-audio-player';
import Accordion from "./Accordion";
import Chevron from "./Chevron";

import "./custom.css";
import 'react-h5-audio-player/lib/styles.css';
import "./player.css";

function PlayerApp(props) {

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() { 

    setActiveState(setActive === "" ? "active" : "");

    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate" 
    );
  }

  return (

  <div className="content"> 

    <div className="content-list">
      
       <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
       <div className="accordion__text"> Release text her </div>

       </div>
      </div>

      <div className="content-list">
        
        <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
        <div className="accordion__text"> Radio text her </div>

       </div>
      </div>

      <div className="content-list">

        <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
        <div className="accordion__text"> Contact text her </div>

       </div>

      </div>

        <div className="content-title">
          <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <p className="accordion__title">Releases:</p>
              <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>
        </div>

          <div className="content-title">
          <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <p className="accordion__title">Radio:</p>
              <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>
        </div>
           <div className="content-title">
          <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <p className="accordion__title">Contact:</p>
              <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>
        </div>

        <div className="content-title-bar">〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓</div>
        <div className="content-title-bar">〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓</div>
        <div className="content-title-bar">〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓</div>

        <div className="content-player">
          <AudioPlayer customAdditionalControls={[]} src="http://example.com/audio.mp3" onPlay={e => console.log("onPlay")} />
        </div>

        </div>
     

  );
}

export default PlayerApp;