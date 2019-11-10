import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"


class EmbeddedGoogleMap extends React.Component {
  render() {
    return (
      <section id="map">
        <div id="map-canvas">
          <div className="mapouter" style={{ textAlign: 'center' }}>
            <div className="gmap_canvas">
              <iframe
                src={this.props.src}
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
        {/* <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="header">Address</h3>
              <p>{this.props.address.title}, {this.props.address.line1}</p>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}

export default EmbeddedGoogleMap;
