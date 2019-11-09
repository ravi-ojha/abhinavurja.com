import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RsvpWeddingForm from "../components/rsvp-wedding-form"
import Instagram from "../components/instagram"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <RsvpWeddingForm />
    <Instagram />
  </Layout>
)

export default SecondPage
