import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Scene from "../components/scene"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    <Scene></Scene>


  
  </div>
)

export default IndexPage
