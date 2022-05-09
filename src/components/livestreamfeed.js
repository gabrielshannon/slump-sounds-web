// import * as React from "react"
import "./live.css"
import React, { useEffect, useState } from "react"
import logo from "./images/myasset.svg"
import topLogo from "./images/gifkindred2.gif"
import kindredLogo from "./images/kindred-logo.png"

import AudioPlayer from "react-h5-audio-player"

// import topLogo2 from "./images/logo-vid.mov"

import ReactAudioPlayer from "react-audio-player"

function useForceRender() {
  const [state, setState] = useState({})
  return () => setState({})
}

function useRenderInterval(ms) {
  const forceRender = useForceRender()
  useEffect(() => {
    const intervalID = setInterval(forceRender, ms)
    return () => clearInterval(intervalID)
  }, [])
}

function Livestream() {
  useRenderInterval(1000)
  var d = new Date()
  var nhour = d.getHours(),
    nmin = d.getMinutes(),
    nsec = d.getSeconds()

  // Note that nhour can theoretically be 0 at midnight which you
  // don't account for.
  // nhour = nhour > 12 ? nhour + 12 : nhour

  nhour = nhour > 12 ? nhour - 12 : nhour

  // contains <li> elements for the hours 12pm up to and including 9pm
  const liHours = Array.from({ length: 10 }, (_, hour) => {
    hour ||= 12 // use 12 instead of 0 (replaces falsy values with 12)

    const isNow = hour == nhour
    const htmlClass = isNow ? `hour-${hour} now` : `hour-${hour}`
    const style = isNow
      ? {
          textShadow:
            "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black ",
          color: "rgba(255, 240, 0, 1)",
        }
      : {}

    return (
      <div key={hour} class={htmlClass} style={style}>
        <div className="myHours">{hour}:00</div>
      </div>
    )
  })

  // contains <li> elements for the minutes 00 up to and including 59
  const liMins = Array.from({ length: 60 }, (_, min) => {
    const formattedMin = min.toString().padStart(2, "0")

    const isNow = min == nmin
    const htmlClass = isNow ? `min-${min} now` : `min-${min}`
    const style = isNow
      ? {
          textShadow:
            " 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black ",
          color: "rgba(255, 240, 0, 1)",
        }
      : {}

    return (
      <li key={min} class={htmlClass} style={style}>
        {formattedMin}
      </li>
      // <li key={min} class={htmlClass} style={style}>
      //   {formattedMin}
      // </li>
    )
  })

  return (
    <>
      <div className="page">
        <div className="kindred-everything">
          <div className="kindred-now">
            <div className="kindred-stream">
              <div className="streaming-now">LIVE ON</div>
            </div>
            <a href="https://kindredeverything.com/">
              <img className="logo-kindred" src={kindredLogo} width="70px" />
            </a>
          </div>
          <div className="kindred-player">
            <AudioPlayer src="https://s3.radio.co/sb983610a2/listen" />
            {/* <ReactAudioPlayer
            src="https://s3.radio.co/sb983610a2/listen"
            autoPlay
            controls
          /> */}
          </div>
        </div>
        <img className="logo-top" src={topLogo} width="170px" />
        {/* <video controls autoPlay loop muted>
          <source src={topLogo2} type="video/mp4"></source>
        </video> */}
        <div className="topBar">
          <div className="timeline-bar">
            <div class="datetime">
              <div class="clock-band">
                {liHours[0]} <div className="myDjs">Slump Sounds</div>
              </div>
              <div class="clock-band">
                {liHours[1]} <div className="myDjs">Baccy Beard</div>
              </div>
              <div class="clock-band">
                {liHours[2]} <div className="myDjs">Ross Ross</div>
              </div>
              <div class="clock-band">
                {liHours[3]} <div className="myDjs">Jabes</div>
              </div>
              <div class="clock-band">
                {liHours[4]} <div className="myDjs">LC</div>
              </div>
              <div class="clock-band">
                {liHours[5]} <div className="myDjs">Poundshop</div>
              </div>
              <div class="clock-band">
                {liHours[6]} <div className="myDjs">Cold</div>
              </div>
              <div class="clock-band">
                {liHours[7]} <div className="myDjs">Jenny Sparks</div>
              </div>
              <div class="clock-band">
                {liHours[8]} <div className="myDjs">Reo</div>
              </div>
            </div>
          </div>
        </div>
        2
        <div className="midBar">
          <div className="videos">
            <div className="vid-container-live">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/zcHc0d6Faa8? &autoplay=1&mute=1"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="timeline-bits">
          <div
            class="second-hand"
            style={{
              width: (nsec / 60) * 100 + "%",
              borderStyle: "solid",
              borderColor: "rgba(0,0,0,0.5)",
              borderWidth: "1px",
              backgroundColor: "rgba(0, 245, 255, 1)",
            }}
          />
          <div class="clock-band-mins">
            <ul class="timeblock-mins minutes">{liMins}</ul>
          </div>
        </div>
        <div className="footer2">
          <img className="footer-logo" src={logo} width="110px" />
          slump sounds 2022 : all rights reserved
        </div>
        <div className="vid-container">
          <iframe
            className="background-vid"
            src="https://www.youtube.com/embed/cyzgJBEnLNE? &autoplay=1&mute=1"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Livestream
