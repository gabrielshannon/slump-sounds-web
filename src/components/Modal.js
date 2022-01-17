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
  // backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  zIndex: 9999,
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

        <div className="popUp" style={MODAL_STYLES}>
          <div className="outer-content">
            {/* <div className= "close" onClick={onClose}><span className="closing"><p>x</p></span></div> */}
            <div className="bar" onClick={onClose}>
              {" "}
            {children.item}
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
        <div className="popUp"  style={MODAL_STYLES}>
          <div className="outer-content-2">
            <div className="imagePlayer">
              <div className="bar-2" onClick={onClose}>
                {" "}
                {children.item}
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
        <div className ="info-modal" style={MODAL_STYLES}>
          <div className="outer-content" onClick={onClose}>
            {/* <div className="bar"></div> */}
            <div className="info-content">
            
         
              <div className="info-logo-box">
                  <img className="logo-overlay" src={logoOverlay} />

                  </div>
                
           <div className="info-paragraph-statement">
                  Slump Sounds is an electronic music collective that
                  began hosting raves in Leeds and South London 2017. Our
                  projects span a catalog of homemade production, showcasing new
                  media, live-streaming and online in addition to physical release, cassette
                  mixtapes, and USBs.
                  
      </div>

       <div className="info-paragraph-artits">
       <a href="https://www.instagram.com/algillyou/">DJ Fake-ID</a>,
       <a href="https://www.instagram.com/vesarchie/"> Versarchie</a>,
       <a href="https://www.instagram.com/job_type__/"> Job Type</a>,
       <a href="https://www.instagram.com/baccyb123/"> baccy beard</a>

               
          

        </div>
           <div className="info-paragraph-artits">
           <a href="https://www.instagram.com/slumpsoundslds/">instagram</a>,
           <a href="https://www.facebook.com/slumpsounds/"> facebook</a>,
           <a href="https://soundcloud.com/slumpsounds"> soundcloud</a>,
           <a href="https://slumpsounds.bandcamp.com/"> bandcamp</a>
          
                </div>

                <div className="info-paragraph-misc">

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
                     0113/SE 🛒 / <a href="https://slumpsounds.bandcamp.com/">https://linktr.ee/slumpsounds</a> 
                    </div>
             
            
             
            </div>
          </div>
        </div>
      </>
    )
  }
}
