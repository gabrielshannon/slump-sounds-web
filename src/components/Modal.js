import React, { useState } from "react"
import "./Modal.css"

const MODAL_STYLES = {
  position: "fixed",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
}

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
}

export default function Modal({ open, onClose, children, myActiveSet }) {
  if (!open) return null

  if (myActiveSet === 0) {
    return (
      <>
        {/* <div style={OVERLAY_STYLES} /> */}

        <div style={MODAL_STYLES}>
          <div className="outer-content">
            {/* <div className= "close" onClick={onClose}><span className="closing"><p>x</p></span></div> */}
            <div className="bar" onClick={onClose}></div>
            <div className="youtubePlayer">
              <iframe
                width="560"
                height="315"
                src={children}
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
    if(children === null) {
      return (<></>)
    }
    return (
      <>
        <div style={MODAL_STYLES}>
          <div className="outer-content-2">
            {/* <div className="bar-2" onClick={onClose}></div> */}

            <div className="imagePlayer">
              <img className="displayImage" src={children} width="40%" />
            </div>
          </div>
        </div>
      </>
    )
  } else if (myActiveSet === 2) {
    return (
      <>
        <div style={MODAL_STYLES}>
          <div className="outer-content" onClick={onClose}>
            {/* <div className="bar"></div> */}
            <div className="info-content">
              <div className="row1">
                <div className="contact-info">
                  Slump Sounds 0113/SE 🛒
                  <br></br>
                  <a href="https://www.instagram.com/slumpsoundslds/">instagram</a>
                  <br></br>
                  <a href="https://www.facebook.com/slumpsounds">instagram2</a>
                  <br></br>
                  <a href="https://www.instagram.com/algillyou/">Al Gill</a>
                  <br></br>
                  <a href="https://www.instagram.com/baccyb123/">baccy beard</a>
                  <br></br>
                  <a href="https://www.instagram.com/vesarchie/">Versarchie</a>
                  <br></br>
                  <a href="https://www.instagram.com/job_type__/">Job Type</a>
                  <br></br>
                  <a href="https://slumpsounds.bandcamp.com/">Bandcamp</a>
                  <br></br>
                  <a href="https://www.w3schools.com">Merch *COMING SOON*</a>
                  <br></br>
                  <a href="slumpsounds@outlook.com">CONTACT</a>
                  <br></br>
                  <br></br>
                  <br></br>
                  Website by{" "}
                  <a href="https://www.instagram.com/nice.amount/">Gabriel Shannon</a>
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
