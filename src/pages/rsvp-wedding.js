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
    <EmbeddedGoogleMap
      address={{title: 'Sanskar Kendra', line1: 'College Campus, Tithal Road, Valsad, Gujarat, India' }} 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5039089451484!2d72.90820081600688!3d20.60830738622764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c2a801d48f1d%3A0xfb57c2e349d4186c!2sCollege%20Sanskar%20Hall%2C%20Valsad%20College%20Rd%2C%20Pali%20Hill%2C%20Valsad%2C%20Gujarat%20396001%2C%20India!5e0!3m2!1sen!2sus!4v1573402488908!5m2!1sen!2sus"
    />
    <RsvpWeddingForm />
    <Instagram />
  </Layout>
)

export default RsvpWeddingPage
