import React, { useState, useRef, ReactNode } from "react"
import "react-h5-audio-player/lib/styles.css"
import "./player.css"
import AudioPlayer from "react-h5-audio-player"
import "./custom.css"
import "./player.css"
import { ReactNode as playPause } from "./images/Asset1.svg"
import Modal from "./Modal"
import LoadingOverlay from 'react-loading-overlay'
import styled from 'styled-components'


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

  const StyledLoader = styled(LoadingOverlay)`
  width: 250px;
  height: 400px;
  overflow: scroll;
  .MyLoader_overlay {
    background: rgba(255, 0, 0, 0.5);
  }
  &.MyLoader_wrapper--active {
    overflow: hidden;
  }
`

  const accordionItems = [
    {
      id: "Radio:",
      items: [
        {
          item: "SLUMP SOUNDS 01.02.22 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/dGJZMzn8Lvs?autoplay=0",
          audio: 0,
        },

        {
          item: "SLUMP SOUNDS 23.11.21 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/Sei7gYCnHEQ?autoplay=0",
          audio: 0,
        },
        {
          item: "SLUMP SOUNDS 12.10.21 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/MGVzGE_oYTI?autoplay=0",
         audio: 0,
        },
        {
          item: "SLUMP SOUNDS 07.09.21 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/qW4CQNdpza0?autoplay=0",
          audio: 0,
        },
        {
          item: "SLUMP SOUNDS 03.08.21 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/iI9Zjg0i18M?autoplay=0",
          audio: 0,
        },
        {
          item: "SLUMP SOUNDS // LATITUDE FESTIVAL",
          data: "https://www.youtube.com/embed/zxBWis3Jixw?autoplay=0",
          audio: 0,
        },
        {
          item: "SLUMP SOUNDS 22.06.21 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/6jKAixyOUno?autoplay=0",
          audio: 0,
        },
        {
          item: "SLUMP SOUNDS 20.04.21 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/HWW8NQEV2fg?autoplay=0",
          audio: 0,
        },
        {
          item: "SLUMP SOUNDS 03.11.20 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/0IWsJWxv7Ok?autoplay=0",
         audio: 0,
        },
        {
          item: "SLUMP SOUNDS 29.09.20 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/9w61G-KfKWI?autoplay=0",
          audio: 0,
        },

        {
          item:
            "Rotation w Noah Tucker - Slump Sounds 19.08.20 // Vandelay Radio",
          data: null,
          audio:
            "https://slmpbackend8080.online/wp-content/uploads/2021/11/Rotation-w-Noah-Tucker-Slump-Sounds-Vandelay-Radio.mp3",
        },

        {
          item: "SLUMP SOUNDS 04.08.20 // KINDRED RADIO",
          data: "https://www.youtube.com/embed/8tClTQ_GWV8?autoplay=0",
          audio: 0,
        },

        {
          item:
            "Slump Sounds Presents... Valentines Special w_ Curbside 14.02.2019 // Kmah Radio",
          data: null,
          audio:
            "http://slmpbackend8080.online/wp-content/uploads/2021/11/Slump-Sounds-Presents...-Valentines-Special-w_-Curbside-Kmah-Radio-14.02.2019.mp3",
        },

        {
          item:
            "Slump Sounds Presents... 2 HOUR SPECIAL VOL.1 05.07.2019 // Kmah Radio",
          data: null,
          audio:
            "https://slmpbackend8080.online/wp-content/uploads/2021/11/Slump-Sounds-Presents...-2-HOUR-SPECIAL-VOL.1-Kmah-Radio-05.07.2019.mp3",
        },

        {
          item:
            "Slump Sounds Presents... Baccy Beard b2b Vesarchie 11.04.19 // Kmah Radio",
          data: null,
          audio:
            "https://slmpbackend8080.online/wp-content/uploads/2021/11/Slump-Sounds-Presents...-Baccy-Beard-b2b-Vesarchie-Kmah-Radio-11.04.19.mp3",
        },

        {
          item: "Slump Sounds Presents... Holloway 05.06.2019 // Kmah Radio ",
          data: null,
          audio:
            "https://slmpbackend8080.online/wp-content/uploads/2021/11/Slump-Sounds-Presents...-Holloway-Kmah-Radio-05.06.2019.mp3",
        },

        {
          item: "Slump Sounds Presents... FAE 14.03.2019 // Kmah Radio",
          data: null,
          audio:
            "https://slmpbackend8080.online/wp-content/uploads/2021/11/Slump-Sounds-Presents...-FAE-Kmah-Radio-14.03.2019.mp3",
        },

        {
          item: "Slump Sounds Presents... PROSPA 29_08_2019 // Kmah Radio",
          data: null,
          audio:
            "https://slmpbackend8080.online/wp-content/uploads/2021/11/Slump-Sounds-Presents...-PROSPA-Kmah-Radio-29_08_2019-1.mp3",
        },

        {
          item:
            "SLUMP SOUNDS PRESENTS: SUMMER SLAM PROMO MIX 18.08.2019 (JOB TYPE)",

          data: null,
          audio:
            "https://slmpbackend8080.online/wp-content/uploads/2021/11/Job-Type-Summer-Slam-tape-1.mp3",
        },

        {
          item:
            "SLUMP SOUNDS PRESENTS... DOWN2EARTH 01_08_2019 // Kmah Radio",

          data: null,
          audio:
            "https://slmpbackend8080.online/wp-content/uploads/2022/03/Slump-Sounds-Presents...-DOWN2EARTH-Kmah-Radio-01_08_2019-1.mp3",
        },

        {
          item:
            "BACCY-BEARD-MINIMIX-2018",

          data: null,
          audio:
            "https://slmpbackend8080.online/wp-content/uploads/2022/03/BACCY-BEARD-MINIMIX-2018.mp3",
        },

      ],
    },

    {
      id: "Releases:",
      items: [
        {
          item: "baccy beard - 4head",
          data:
            "https://slmpbackend8080.online/wp-content/uploads/2021/12/key-1024x1024.png",
          audio:
            "https://slmpbackend8080.online/wp-content/uploads/2021/11/4head-320kbs-MP3-1.mp3",
        },

        {
          item: "baccy beard - Kov",
          data:
            "https://slmpbackend8080.online/wp-content/uploads/2021/12/key-1024x1024.png",
          audio: "https://slmpbackend8080.online/wp-content/uploads/2021/11/Kov-320kbs-MP3.mp3",
        },

        {
          item: "baccy beard - Unfolded",
          data:
           "https://slmpbackend8080.online/wp-content/uploads/2021/12/key-1024x1024.png",
          audio:
            "https://slmpbackend8080.online/wp-content/uploads/2021/11/Unfolded-320kbs-MP3.mp3",
        },

        {
          item: "Job Type - Numbers Vol.3",
          data: "https://slmpbackend8080.online/wp-content/uploads/2021/11/a2448293808_10.png",
          audio: "https://slmpbackend8080.online/wp-content/uploads/2021/11/Job-Type-Numbers-Vol.3-1.mp3",
        },

        {
          item: "Job Type - Numbers Vol.2",
          data: "https://slmpbackend8080.online/wp-content/uploads/2021/11/Job-Type-Numbers-Vol.2.png",
          audio: "https://slmpbackend8080.online/wp-content/uploads/2021/11/Job-Type-Numbers-Vol.2.mp3",
        },

        {
          item: "baccy beard - nearest@exomoon",
          data: "https://slmpbackend8080.online/wp-content/uploads/2021/12/SLMP_D001_-baccy-beard-nearest@exomoon-mp3-image-2048x2048-1.png",
          audio: "https://slmpbackend8080.online/wp-content/uploads/2021/11/SLMP_D001_-baccy-beard-nearest@exomoon.mp3",
        },

        {
          item: "Lydios - LOCKDOWN IN ELLESS VOL. 1",
          data: "https://slmpbackend8080.online/wp-content/uploads/2021/12/saveme-1024x1024.png",
          audio: "https://slmpbackend8080.online/wp-content/uploads/2021/11/Lockdown-in-ELLESS-Vol.1.mp3",
        },

        {
          item: "Lydios - LOCKDOWN IN ELLESS VOL. 2",
          data: "https://slmpbackend8080.online/wp-content/uploads/2021/12/Lockdown-in-Elless-Vol.2-edited.jpg",
          audio: "https://slmpbackend8080.online/wp-content/uploads/2021/11/Lockdown-in-ELLESS-Vol.2.mp3",
        },

        {
          item: "SLUMP - Production Tape 1",
          data: "https://slmpbackend8080.online/wp-content/uploads/2021/11/a2448293808_102.png",
          audio: "https://slmpbackend8080.online/wp-content/uploads/2021/11/SLMP001_-LUMP-TAPE-1.mp3",
        },
        {
          item: "Lydios - LS17",
          data: "https://slmpbackend8080.online/wp-content/uploads/2021/11/LS17.png",
          audio: "https://slmpbackend8080.online/wp-content/uploads/2021/11/LS17.mp3",
        },

        {
          item: "Lydios - LS22",
          data:
            "https://slmpbackend8080.online/wp-content/uploads/2021/11/LS22.png",
          audio:
            "https://slmpbackend8080.online/wp-content/uploads/2021/11/LS22.mp3",
        },

        {
          item: "Lydios - SOLIDMIXTAPE1",
          data: "https://slmpbackend8080.online/wp-content/uploads/2021/11/a2448293808_101.png",
          audio: "https://slmpbackend8080.online/wp-content/uploads/2021/11/LYDIOS-SOLIDMIXTAPE1.mp3",
        },
      ],
    },

    {
      id: "Info:",
      items: [{ item: null, data: null, audio: 0 }],
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
        children={accordionItems[activeSet].items[activeTrack].data}
      >
        {accordionItems[activeSet].items[activeTrack]}
      </Modal>
      {console.log("my child is" + accordionItems[activeSet].items[activeTrack].data)}
      
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
