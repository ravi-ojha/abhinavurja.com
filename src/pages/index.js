import React from "react"
import { withPrefix, Link } from "gatsby"

import Layout from "../components/layout"
import MainNews from "../components/main-news"
import HowWeMet from "../components/how-we-met"
import Timeline from "../components/timeline"
import Events from "../components/events"
import Instagram from "../components/instagram"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainNews />
    {/* <HowWeMet /> */}
    <Timeline />
    <Events />
    <Instagram />
  </Layout>
)

export default IndexPage
