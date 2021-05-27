import React, {useState, useRef} from 'react'
import "./player.css";
import Link from "gatsby-link"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./custom.css"

import track1 from "./audio/__0012.wav"
import track2 from "./audio/brek.wav"
import track3 from "./audio/COLEMAN.wav"

import track4 from "./audio/drums_dddd.wav"
import track5 from "./audio/gee_final.wav"
import track6 from "./audio/Limmytrax_1.wav"


import track7 from "./audio/mooore.wav"
import track8 from "./audio/MZK.wav"
import track9 from "./audio/New.wav"

import "./player.css";

const Accordion = () => {

 const accordionItems = [
    { id: 'Releases',
      items: [
      {item: 'Job type Numbers', data: track1}, 
      {item: 'Lydios', data: track2}, 
      {item: 'nearest@exomoon', data: track3} ]
    },
    
    { id: 'Radio',
      items: [
      {item: 'Kmah / Slump Sounds first show / 14/3/19', data: track4}, 
      {item: 'Kmah / Slump Sounds second show / 31/3/19', data: track5}, 
      {item: 'Kmah / Slump Sounds third show / 7/4/19', data: track6} ]
    },

    { id: 'Contact',
      items: [
      {item: 'Kmah / Slump Sounds first show / 14/3/19', data: track7}, 
      {item: 'Kmah / Slump Sounds second show / 31/3/19', data: track8}, 
      {item: 'Kmah / Slump Sounds third show / 7/4/19', data: track9} ]
    }
  ];

    const [activeItem, setActiveItem] = useState();
    const content = useRef(null);
    const [activeTrack, setActiveTrack] = useState(0);
    const [activeSet, setActiveSet] = useState(0);

    function ChangeData(trackIndex, index) {
        setActiveTrack(trackIndex);
        setActiveSet(index);
    }

    function ChangeSet(p) {
        setActiveSet(p);
    }

      return (
        <div class ="my_list"> 
          <h1>Player</h1>
          <AudioPlayer src={accordionItems[activeSet].items[activeTrack].data}/>
          {accordionItems.map((p, index) => {
            return (
              <div className="accordion__section">
              <button
              className={`accordion ` + (activeItem === p.id ? 'active' : '')}
              onClick={() => {
              setActiveItem(activeItem === p.id ? '' : p.id);
              }}>
              <p className="accordion__title">{p.id}</p>  
              </button>

              <div 
                ref={content}
                style={{ maxHeight: `${activeItem === p.id ? "100px" : "0px" }` }}
                className={"accordion__content "  + (activeItem === p.id ? 'active' : '')}
                >
                <div className="accordion__text">

                  <ul>
                    {p.items.map((trackElem, trackIndex) => (
                      <li onClick={()=> ChangeData(trackIndex, index)}>{trackElem.item}</li> ))}
                  </ul>

                </div>
              </div>
          </div>

          );
        })}
     </div>
    )
};

export default Accordion