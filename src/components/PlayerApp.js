import React, { useState, useRef, ReactNode } from "react"
import "react-h5-audio-player/lib/styles.css"
import "./player.css"
import Link from "gatsby-link"
import AudioPlayer from "react-h5-audio-player"
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

import numbers from "./images/jobtype-numbers.jpg"
import numbers2 from "./images/numbers2.mp4"

import lydios from "./images/lydios.jpg"

import "./player.css"
// import playPause from "./images/Asset1.svg"

import { ReactNode as playPause } from "./images/Asset1.svg"
import Modal from "./Modal"

const PlayerApp = () => {
  const accordionItems = [
    {
      id: "Releases:",
      items: [
        {
          item: "INDEX 0 KINDRED — SLUMP SOUNDS 3.8.21",
          data: "https://www.youtube.com/embed/HWW8NQEV2fg?autoplay=0",
          audio: ""
        },
        {
          item: "INDEX 1 KINDRED — SLUMP SOUNDS // LATITUDE FESTIVAL 22.7.21",
          data: "https://www.youtube.com/embed/zxBWis3Jixw?autoplay=0",
        },
        {
          item: "INDEX 2 KINDRED — SLUMP SOUNDS 22.6.21",
          data: "https://www.youtube.com/embed/qW4CQNdpza0?autoplay=0",
        },
              {
          item: "INDEX 2 KINDRED — SLUMP SOUNDS 22.6.21",
          data: "https://www.youtube.com/embed/qW4CQNdpza0?autoplay=0",
        },
      ],
    },

    {
      id: "Radio:",
      items: [
        { item: "JOB TYPE", data: numbers, audio: track6, },
        { item: "LYDIOS", data: lydios, audio: track1 },
        { item: "MORE", data: "", audio: track3},
      ],
    },

    {
      id: "Contact:",
      items: [
        { item: "", data: "" },
      ],
    },
  ]

  const [activeItem, setActiveItem] = useState()
  const content = useRef(null)
  const [activeTrack, setActiveTrack] = useState(0)
  const [activeSet, setActiveSet] = useState(0)
  const [isOpen, setIsOpen] = useState(false)


  // const BUTTON_WRAPPER_STYLES = {
  //   position: "relative",
  //   zIndex: 1,
  // }

  // const OTHER_CONTENT_STYLES = {
  //   position: "relative",
  //   zIndex: 2,
  //   backgroundColor: "red",
  //   padding: "10px",
  // }

  function setIndex(p, index) {
     console.log(p.id)
    // setActiveItem(activeItem === p.id ? "" : p.id)
    setActiveItem(activeItem === p.id ? "" : p.id)
    setActiveSet(index)
    setActiveTrack(0)
    setIsOpen(true)
  }

  function ChangeData(trackIndex, index) {
    setActiveTrack(trackIndex)
    setIsOpen(true)
  }


  return (
    <div className="content">
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        myActiveSet={activeSet}
      >
        {accordionItems[activeSet].items[activeTrack].data}
      </Modal>
      {/* {console.log(activeString)} */}
      {accordionItems.map((p, index) => {
        return (
          <div className="content-list">
            <div
              ref={content}
              style={{ maxHeight: `${activeItem === p.id ? "60px" : "0px"}` }}
              className={
                "accordion__content " + {p} + (activeItem === p.id ? "active" : "")
              }
            >
              <div className="accordion__text">
                <ul>
                  {p.items.map((trackElem, trackIndex) => (
                    <li onClick={() => ChangeData(trackIndex, index)}>
                      {/* {console.log(setIsOpen)} */}
                      {trackElem.item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      })}

      {accordionItems.map((p, index) => {
        return (
          <div className="mycontent">
            <div className="content-title">
              <button
                className={`accordion ` + (activeItem === p.id ? "active" : "")}
                onClick={() => {
                  setIndex(p, index)
                  // setActiveItem(activeItem === p.id ? "" : p.id)
                  {
                    // console.log(p.id)
                  }
                }}
              >
                <p className="accordion__title">{p.id}</p>
              </button>
            </div>
          </div>
        )
      })}

      <div className="content-player">
        <AudioPlayer
          src={accordionItems[activeSet].items[activeTrack].audio}
          CustomIcons={{
            play: playPause,
          }}
        />
        <div className="trackTitle">
          {accordionItems[activeSet].items[activeTrack].item}
        </div>
      </div>
    </div>
  )
}

export default PlayerApp

// <div className="content-list">
//   <div className="accordion__content">
//     <div className="accordion__text"> Release text her </div>
//   </div>
// </div>

// <div className="content-list">
//   <div className="accordion__content">
//     <div className="accordion__text"> Radio text her </div>
//   </div>
// </div>

// <div className="content-list">
//   <div className="accordion__content">
//     <div className="accordion__text"> Contact text her </div>
//   </div>
// </div>

// <div className="content-title">
//   <p className="accordion__title">Releases:</p>
// </div>

// <div className="content-title">
//   <p className="accordion__title">Radio:</p>
// </div>

// <div className="content-title">
//   <p className="accordion__title">Contact:</p>
// </div>
