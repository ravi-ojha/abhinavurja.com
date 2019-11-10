import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EmbeddedGoogleMap from "../components/gmap"
import RsvpWeddingForm from "../components/rsvp-wedding-form"
import Instagram from "../components/instagram"

const RsvpWeddingPage = () => (
  <Layout>
    <SEO title="RSVP for the wedding" />
    <EmbeddedGoogleMap address={{title: 'Sanskar Kendra', line1: 'College Campus, Tithal Road, Valsad, Gujarat, India' }} />
    <RsvpWeddingForm />
    <Instagram />
  </Layout>
)

export default RsvpWeddingPage
