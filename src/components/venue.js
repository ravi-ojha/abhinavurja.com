import React from "react"
import EmbeddedGoogleMap from "../components/gmap"


const Venue = () => (
  <div id="venue">
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="header">Wedding Venue</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 text-ceneter">
            <p style={{ textAlign: 'center' }}>
              Sanskar Kendra, College Campus, Tithal Road, <br></br>
              Valsad, Gujarat, India
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <EmbeddedGoogleMap
      address={{title: 'Sanskar Kendra', line1: 'College Campus, Tithal Road, Valsad, Gujarat, India' }} 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5039089451484!2d72.90820081600688!3d20.60830738622764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c2a801d48f1d%3A0xfb57c2e349d4186c!2sCollege%20Sanskar%20Hall%2C%20Valsad%20College%20Rd%2C%20Pali%20Hill%2C%20Valsad%2C%20Gujarat%20396001%2C%20India!5e0!3m2!1sen!2sus!4v1573402488908!5m2!1sen!2sus"
    />
    </section>
    
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="header">Reception Venue</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6  text-ceneter">
            <p style={{ textAlign: 'center' }}>
              Drive In 22, Ambala Chandigarh Expressway, <br></br>
              NH 22, Lalru, Punjab, India
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <EmbeddedGoogleMap
      address={{title: 'Drive In 22', line1: 'Ambala Chandigarh Expressway, NH 22, Lalru, Punjab, India' }} 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.972359122081!2d76.78177891612046!3d30.43688548174132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc7ad2a03cf9f%3A0x369990c35e35c43c!2sDrive%20In%2022!5e0!3m2!1sen!2sus!4v1573403849379!5m2!1sen!2sus"
    />
    </section>
  </div>
)
export default Venue
