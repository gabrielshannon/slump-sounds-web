import React from "react"
import Link from "gatsby-link"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./custom.css"

import track1 from "./audio/01.mp3"
import track2 from "./audio/02.mp3"
import track3 from "./audio/03.mp3"

import { Container, Row, Col } from 'react-bootstrap';

class Player extends React.Component {

    constructor(){
    super()

    this.state = {
        tracks: [
          {title: "first track", data: track1},
          {title: "second track", data: track2},
          {title: "third track", data: track3},
        ],
        currentTrack: 0,
    }

    }

     changeData(trackIndex){
      this.setState({currentTrack: trackIndex})
    }
  
    render(){
        return <div style={{color: this.props.color}}>
            {/* <Layout> */}
            <h1>Player</h1>
           <AudioPlayer
            src= {this.state.tracks[this.state.currentTrack].data}
            onPlay={e => console.log("onPlay")}
            // other props here
            />
            <div style={{color: "green"}}>
                <ul>
                    {this.state.tracks.map((trackElem, index) => (
                       <li onClick={()=> this.changeData(index)}>{trackElem.title}</li>
                    ))}
                </ul>
            </div>
            {/* </Layout> */}
        </div>
    }
}

export default Player



    // this.state ={ 
    //     myTitle: "track 1",
    //     myUrl: track1
    //     }


    // state = tracks 