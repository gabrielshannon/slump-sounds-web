import React, { useState } from "react"
import "./Modal.css"
import logoOverlay from "./images/thicklogo.svg"
import logoOverlay2 from "./images/denselogo.svg"
import logoOverlay3 from "./images/key2.svg"

const MODAL_STYLES = {
  position: "fixed",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
}

const MODAL_STYLES2 = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backdropFilter: "blur(5px)",
  display: "flex",
  justifyContent: "center",
  zIndex: 9999,
}

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
}

const TEXT_STYLES = {
  textAlign: "center",
}

export default function Modal({ open, onClose, children, myActiveSet }) {
  if (!open) return null

  if (myActiveSet === 0) {
        if (children.data === null) {
      return <></>
    }
    return (
      <>
  
        {/* <div style={OVERLAY_STYLES} /> */}

        <div style={MODAL_STYLES}>
          <div className="outer-content">
            {/* <div className= "close" onClick={onClose}><span className="closing"><p>x</p></span></div> */}
            <div className="bar" onClick={onClose}>
              {" "}
              <p>{children.item}</p>
            </div>
                {/* {console.log("The child is" + children)} */}
            <div className="youtubePlayer">
              <iframe
                className="mediaWindow"
                src={children.data}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </>
    )
  } else if (myActiveSet === 1) {
    if (children === null) {
      return <></>
    }
    return (
      <>
        <div style={MODAL_STYLES}>
          <div className="outer-content-2">
            <div className="imagePlayer">
              <div className="bar-2" onClick={onClose}>
                {" "}
                <p>{children.item}</p>
              </div>
              <img className="displayImage" src={children.data} width="100%" />
            </div>
          </div>
        </div>
      </>
    )
  } else if (myActiveSet === 2) {
    return (
      <>
        <div style={MODAL_STYLES2}>
          <div className="outer-content" onClick={onClose}>
            {/* <div className="bar"></div> */}
            <div className="info-content">
              <div className="row1">
                <div className="col-1">
                  <img className="logo-overlay" src={logoOverlay} />
                  <br></br>
                  &nbsp;Slump Sounds is an electronic music collective that
                  began hosting raves in Leeds and South London in 2017. Our
                  projects span a catalog of homemade production showcasing new
                  media, live-streaming and online to physical release, cassette
                  mixtapes, and USBs.
                  <br></br>
                  <br></br>
                  Below the radar, our commitment to unhinged dance-floor
                  mechanics and hardcore breaks our production catalogue
                  presents the best of left-field sounds, in addition to our our
                  monthly show on Kindred Radio. &nbsp;
                  <br></br>
                  <br></br>
                  all rights reserved: 2017 — 2022
                </div>

                <div className="col-2">
                  <div className="paragraph1">
                    >>>>>>>>>>>>>>>>>>>>>
                    
                    <br></br>
                    al gill, versarchie, job type, baccy beard, <br></br>
                    ---------------------------- <br></br>instagram, bandcamp, facebook,
                    soundcloud <br></br>
                    <img
                      className="logo-overlay2"
                      width="50px"
                      src={logoOverlay2}
                    />
                    <img
                      className="logo-overlay2"
                      width="50px"
                      src={logoOverlay3}
                    />
                  </div>
                     </div>

                  <div className="col-3">
                    website by gabriel shannon 0113/SE 🛒
                  </div>
             
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </>
    )
  }
}
