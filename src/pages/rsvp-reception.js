import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EmbeddedGoogleMap from "../components/gmap"
import RsvpReceptionForm from "../components/rsvp-reception-form"
import Instagram from "../components/instagram"

const SecondPage = () => (
  <Layout>
    <SEO title="RSVP for the reception" />
    <EmbeddedGoogleMap
      address={{title: 'Drive In 22', line1: 'Ambala Chandigarh Expressway, NH 22, Lalru, Punjab, India' }} 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.972359122081!2d76.78177891612046!3d30.43688548174132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc7ad2a03cf9f%3A0x369990c35e35c43c!2sDrive%20In%2022!5e0!3m2!1sen!2sus!4v1573403849379!5m2!1sen!2sus"    />
    <RsvpReceptionForm />
    <Instagram />
  </Layout>
)

export default SecondPage
