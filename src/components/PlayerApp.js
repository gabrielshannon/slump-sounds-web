import React, { useState, useRef, ReactNode } from "react"
import "react-h5-audio-player/lib/styles.css"
import "./player.css"
import AudioPlayer from "react-h5-audio-player"
import "./custom.css"
import "./player.css"
import { ReactNode as playPause } from "./images/Asset1.svg"
import Modal from "./Modal"

import { graphql, useStaticQuery } from "gatsby"

const PlayerApp = () => {
  const slumpData = useStaticQuery(graphql`
    query slumpQuery {
      allWpMediaItem {
        edges {
          node {
            mediaItemUrl
            title
          }
        }
      }
    }
  `)

  const accordionItems = [
    {
      id: "Radio / Campaigns:",
      items: [
               {
          item: "SLUMP SOUNDS 23.11.21 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/Sei7gYCnHEQ?autoplay=0",
          audio: null,
        },
        {
          item: "SLUMP SOUNDS 12.10.21 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/MGVzGE_oYTI?autoplay=0",
          audio: null,
        },
        {
          item: "SLUMP SOUNDS 07.09.21 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/qW4CQNdpza0?autoplay=0",
        },
        {
          item: "SLUMP SOUNDS 03.08.21 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/iI9Zjg0i18M?autoplay=0",
        },
        {
          item: "SLUMP SOUNDS // LATITUDE FESTIVAL",
          data: "https://www.youtube.com/embed/zxBWis3Jixw?autoplay=0",
        },
        {
          item: "SLUMP SOUNDS 22.06.21 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/6jKAixyOUno?autoplay=0",
        },
        {
          item: "SLUMP SOUNDS 20.04.21 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/HWW8NQEV2fg?autoplay=0",
        },
        {
          item: "SLUMP SOUNDS 03.11.20 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/0IWsJWxv7Ok?autoplay=0",
        },
        {
          item: "SLUMP SOUNDS 29.09.20 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/9w61G-KfKWI?autoplay=0",
        },

        {
          item:
            "Rotation w Noah Tucker - Slump Sounds 19.08.20 // Vandelay Radio",
          data: null,
          audio: slumpData.allWpMediaItem.edges[3].node.mediaItemUrl,
        },

        {
          item: "SLUMP SOUNDS 04.08.20 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/8tClTQ_GWV8?autoplay=0",
        },

        {
          item:
            "Slump Sounds Presents... Valentines Special w_ Curbside 14.02.2019 // Kmah Radio",
          data: null,
          audio: slumpData.allWpMediaItem.edges[2].node.mediaItemUrl,
        },

        {
          item:
            "Slump Sounds Presents... 2 HOUR SPECIAL VOL.1 05.07.2019 // Kmah Radio",
          data: null,
          audio: slumpData.allWpMediaItem.edges[4].node.mediaItemUrl,
        },

        {
          item:
            "Slump Sounds Presents... Baccy Beard b2b Vesarchie 11.04.19 // Kmah Radio",
          data: null,
          audio: slumpData.allWpMediaItem.edges[5].node.mediaItemUrl,
        },

        {
          item: "Slump Sounds Presents... Holloway 05.06.2019 // Kmah Radio ",
          data: null,
          audio: slumpData.allWpMediaItem.edges[7].node.mediaItemUrl,
        },

        {
          item: "Slump Sounds Presents... FAE 14.03.2019 // Kmah Radio",
          data: null,
          audio: slumpData.allWpMediaItem.edges[6].node.mediaItemUrl,
        },

        {
          item: "Slump Sounds Presents... PROSPA 29_08_2019 // Kmah Radio",
          data: null,
          audio: slumpData.allWpMediaItem.edges[8].node.mediaItemUrl,
        },

        {
          item: "SLUMP SOUNDS PRESENTS: SUMMER SLAM PROMO MIX 18.08.2019 (JOB TYPE)",

          data: null,
          audio: slumpData.allWpMediaItem.edges[10].node.mediaItemUrl,
        },
      ],
    },

    {
      id: "Releases:",
      items: [
        {
          item: "baccy bear - 4head",
          data: slumpData.allWpMediaItem.edges[12].node.mediaItemUrl,
          audio: slumpData.allWpMediaItem.edges[14].node.mediaItemUrl,
        },

        {
          item: "baccy bear - Kov",
          data: slumpData.allWpMediaItem.edges[12].node.mediaItemUrl,
          audio: slumpData.allWpMediaItem.edges[13].node.mediaItemUrl,
        },

        {
          item: "baccy bear - Unfolded",
          data: slumpData.allWpMediaItem.edges[12].node.mediaItemUrl,
          audio: slumpData.allWpMediaItem.edges[11].node.mediaItemUrl,
        },

        {
          item: "Job Type - Numbers Vol.3",
          data: slumpData.allWpMediaItem.edges[25].node.mediaItemUrl,
          audio: slumpData.allWpMediaItem.edges[23].node.mediaItemUrl,
        },

        {
          item: "Job Type - Numbers Vol.2",
          data: slumpData.allWpMediaItem.edges[25].node.mediaItemUrl,
          audio: slumpData.allWpMediaItem.edges[26].node.mediaItemUrl,
        },

        {
          item: "baccy bear - nearest@exomoon",
          data: slumpData.allWpMediaItem.edges[15].node.mediaItemUrl,
          audio: slumpData.allWpMediaItem.edges[18].node.mediaItemUrl,
        },

        {
          item: "Lydios - LOCKDOWN IN ELLESS VOL. 1",
          data: null,
          audio: slumpData.allWpMediaItem.edges[19].node.mediaItemUrl,
        },

        {
          item: "Lydios - LOCKDOWN IN ELLESS VOL. 2",
          data: null,
          audio: slumpData.allWpMediaItem.edges[20].node.mediaItemUrl,
        },

        {
          item: "SLUMP - Production Tape 1",
          data: slumpData.allWpMediaItem.edges[16].node.mediaItemUrl,
          audio: slumpData.allWpMediaItem.edges[17].node.mediaItemUrl,
        },
        {
          item: "Lydios - LS17",
          data: null,
          audio: slumpData.allWpMediaItem.edges[20].node.mediaItemUrl,
        },

        {
          item: "Lydios - LS22",
          data: null,
          audio: slumpData.allWpMediaItem.edges[0].node.mediaItemUrl,
        },

        {
          item: "Lydios - SOLIDMIXTAPE1",
          data: slumpData.allWpMediaItem.edges[22].node.mediaItemUrl,
          audio: slumpData.allWpMediaItem.edges[24].node.mediaItemUrl,
        },
      ],
    },

    {
      id: "Links:",
      items: [{ item: "", data: "" }],
    },
  ]

  const [activeItem, setActiveItem] = useState()
  const content = useRef(null)
  const [activeTrack, setActiveTrack] = useState(0)
  const [activeSet, setActiveSet] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  function setIndex(p, index) {
    console.log(p.id)
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
      {/* {console.log(slumpData.allWpMediaItem.edges[3].node.mediaItemUrl)}; */}
      {accordionItems.map((p, index) => {
        return (
          <div className="content-list">
            <div
              ref={content}
              style={{ maxHeight: `${activeItem === p.id ? "60px" : "0px"}` }}
              className={
                "accordion__content " +
                { p } +
                (activeItem === p.id ? "active" : "")
              }
            >
              <div className="accordion__text">
                <ul>
                  {p.items.map((trackElem, trackIndex) => (
                    <li onClick={() => ChangeData(trackIndex, index)}>
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
                  {
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

//       <img
//   className={"bigImage"}
//   alt={``}
//   key={``}
//   src={slumpData.allContentfulSlumpContent.edges[1].node.visualSlump.file.url
//   }width="40px"
// />
