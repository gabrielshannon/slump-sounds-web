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
    return (
      <>
        <div style={MODAL_STYLES}>
          <div className="outer-content-2">
            <div className="bar-2" onClick={onClose}></div>

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
            <div className="bar"></div>
            <div className="info-content">
              <div className="row1">
                <div className="contact-title">
                  {" "}
                  <p> Slump Sounds 0113/SE 🛒 </p>
                </div>
                <div className="contact-info">
                  {" "}
                  <p>contact/bookings: slumpsounds@outlook.com </p>
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