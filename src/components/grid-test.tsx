import React, { useCallback, useEffect } from "react"
import Accordion from "./finalPlayer.js"
import "./custom.css"
import Marquee from "react-fast-marquee"

import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

import PlayerApp from "./PlayerApp.js"
import bgIm from "./images/screenshot2.png"
import flame from "./images/400.gif"
import snake2 from "./images/coloursnake.gif"
import tape from "./images/tape.png"
import logo from "./images/myasset.svg"

import tempLOGO from "./banner.svg"
import { Container, Row, Col } from "react-bootstrap"

export function Grid() {
  return (
    <div style={{}}>
      <div className="container">
        <div className="LT">
          {/* <img className="anime" src={anime} width="15%"/> */}
        </div>

        <div className="nested_content">
          <div className="nested_header">
          
            {" "}
            {/* <Marquee gradient={false}> */}
              <img className="banner" src={tempLOGO}/>
            {/* </Marquee> */}
          {/* </div> */}
          </div>

          <div className="nested_mid1">
          <div className="myMarque">
            <Marquee speed={50} gradient={false}>
              www.slumpsounds.co.uk &nbsp; &nbsp; &nbsp; &nbsp; 0113/SE &nbsp;
              &nbsp; &nbsp; &nbsp; contact/bookings: slumpsounds@outlook.com
              &nbsp; &nbsp; &nbsp; &nbsp; Leeds, UK &nbsp; &nbsp; &nbsp; &nbsp;
              www.slumpsounds.co.uk &nbsp; &nbsp; &nbsp; &nbsp; 0113/SE &nbsp;
              &nbsp; &nbsp; &nbsp; contact/bookings: slumpsounds@outlook.com
              &nbsp; &nbsp; &nbsp; &nbsp; Leeds, UK &nbsp; &nbsp; &nbsp; &nbsp;
              www.slumpsounds.co.uk &nbsp; &nbsp; &nbsp; &nbsp; 0113/SE &nbsp;
              &nbsp; &nbsp; &nbsp; contact/bookings: slumpsounds@outlook.com
              &nbsp; &nbsp; &nbsp; &nbsp; Leeds, UK &nbsp; &nbsp; &nbsp; &nbsp;
            </Marquee>

                </div>
            {/* <img className="title" src={tempLOGO} width="15%" /> */}
            {/* <img className="flame" src={flame} width="40px" />
            <img className="headerBg" src={bgIm} width="90%" />
            <img className="center" src={snake2} width="10%" /> */}
          </div>

          <div className="nested_app">
            <PlayerApp />
          </div>
        </div>

        <div className="RT">
          {/* <img className="tape" src={tape} width="25%" /> */}
        </div>

        <div className="footer">
          <img className="logo" src={logo} width="110px" />
          slump sounds 2021 : all rights reserved
        </div>
      </div>
    </div>
  )
}
