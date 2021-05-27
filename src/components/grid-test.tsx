import React, {useCallback, useEffect} from 'react';
import Accordion from './finalPlayer.js';
import './custom.css'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import PlayerApp from './PlayerApp.js';
import bgIm from'./images/screenshot2.png';
import flame from'./images/400.gif';
import logo from'./images/myasset.svg';
import snake2 from'./images/coloursnake.gif';
import tape from'./images/tape.png';


import { Container, Row, Col } from 'react-bootstrap';

export function Grid() {

	return <div style={{}}>

    <div className="container">

      <div className="LT">
     {/* <img className="anime" src={anime} width="100%"/> */}
      </div>

      <div className="nested_content">  

        <div className="nested_header">
          {/* <img className="title" src={title} width="25%"/> */}
        <img className="flame" src={flame} width="40px"/>
        <img className="headerBg"   src={bgIm} width="90%" />
        <img className="center"   src={snake2} width="10%" />
         
         
        </div>

        <div className= "nested_app">
         
          <PlayerApp/>
        </div>
            
      </div>

      <div className="RT">
        <img className="tape"   src={tape} width="25%" />
      </div>       

      <div className="footer"> 
        <img className="logo" src={logo} width="100px"/>
        slump sounds 2021 : all rights reserved 
      </div>      

    </div>

	</div>;
}
