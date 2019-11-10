import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RsvpReceptionForm from "../components/rsvp-reception-form"
import Instagram from "../components/instagram"

const SecondPage = () => (
  <Layout>
    <SEO title="RSVP for the reception" />
    <RsvpReceptionForm />
    <Instagram />
  </Layout>
)

export default SecondPage
