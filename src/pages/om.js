import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Om" keywords={[`blog`, `om`, `ulla hamilton`, `ullas blogg`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="om-mig">
          Om Mig
          </h2>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Ulla på styggt humör ;-)</figcaption>
          </figure>
          <h3 id="ulla-hamilton">Ulla Hamilton</h3>
          <p>
           Denna blogg är tänkt att handla om mina största intressen; Hantverk, design, renoveringsprojekt av oliks slag, konst, mm. :) 
          </p>
          <p>
           Jag älskar också att resa, umgås med min härliga famil och min hund. Ja, som ni hör kommer måånga ämnen tas upp. Även politik kommer det raljeras om till höger och vänster. Journalistik.
            
          </p>
          <p>  Så luta er tillbaka, gärna med ett glas uppfriskande dryck i närheten och börja kolla in mina inlägg :)<br></br>
           XO XO - Ulla
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "ullah.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 634) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
