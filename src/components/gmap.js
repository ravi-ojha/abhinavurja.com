import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"


class EmbeddedGoogleMap extends React.Component {
  render() {
    return (
      <section id="map" className="section-padding">
        <div id="map-canvas">
          <div className="mapouter" style={{ textAlign: 'center' }}>
            <div className="gmap_canvas">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5039089451484!2d72.90820081600688!3d20.60830738622764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c2a801d48f1d%3A0xfb57c2e349d4186c!2sCollege%20Sanskar%20Hall%2C%20Valsad%20College%20Rd%2C%20Pali%20Hill%2C%20Valsad%2C%20Gujarat%20396001%2C%20India!5e0!3m2!1sen!2sus!4v1573402488908!5m2!1sen!2sus"
                width="100%"
                height="450"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                allowFullScreen=""
              >
              </iframe>
            </div>
          </div>
        </div>
        <div id="map-content-wrapper" className="container pointer-events-none">
          <div className="row">
            <div className="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6">
              <div className="text-center">
                <div id="btn-show-content" className="toggle-map-content pointer-events-auto">
                  <i className="fa fa-info-circle"></i>&nbsp;&nbsp; Show info
                </div>
              </div>
              <div id="map-content" className="pointer-events-auto">
                <div className="row">
                  <div className="col-md-6">
                    <h5 style={{ fontWeight: '700' }}>{this.props.address.title}</h5>
                    <p>{this.props.address.line1}</p>
                    <p>{this.props.address.line2}</p>
                  </div>
                  <div className="col-md-6">
                    <h5>Mr. Amit Roy</h5>
                    <p><i className="fa fa-mobile"></i> <a href="tel://+919412345678">+91 9412345678</a><br></br>
                      <i className="fa fa-mobile"></i> <a href="tel://+917123456789">+91 7123456789</a></p>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-6" style={{ padding: '5px' }}>
                    <a
                      className="btn btn-fill btn-small"
                      href="https://m.uber.com/ul/?action=setPickup&client_id=Yh7Dl6SjB56RY2JuuZF8ttVa6ryFV78W&pickup=my_location&dropoff[formatted_address]=Fortune%20Park%20Panchwati%20-%20Hotels%20in%20Kolkata%2C%20Howrah%2C%20West%20Bengal%2C%20India&dropoff[latitude]=22.593276&dropoff[longitude]=88.270277">
                        <i className="fa fa-taxi"></i>&nbsp;&nbsp;Book Uber</a>
                  </div>
                  <div className="col-md-6" style={{ padding: '5px' }}>
                    <a className="btn btn-accent btn-small" id="btn-show-map"><i className="fa fa-map-marker"></i>&nbsp;&nbsp;Show map</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EmbeddedGoogleMap;
