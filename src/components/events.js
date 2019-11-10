import React from "react"

const Events = () => (
  <section className="events section-padding" id="events">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="header">Events</h3>
        </div>
      </div>
      <div className="row">

        <div id="timeline">

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content right">
              <h4>11:00 AM, 18 Jan 2020</h4>
              <p style={{ fontWeight: "700", paddingBottom: "0", paddingTop: "10px", marginBottom: "0" }}>
                Mehendi
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content left">
              <h4>9:00 AM, 19 Jan 2020</h4>
              <p style={{ fontWeight: "700", paddingBottom: "0", paddingTop: "10px", marginBottom: "0" }}>
                Ganpati-Matruka Sthapna
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content left">
              <h4>10:30 AM, 19 Jan 2020</h4>
              <p style={{ fontWeight: "700", paddingBottom: "0", paddingTop: "10px", marginBottom: "0" }}>
                Haldi
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content left">
              <h4>6:00 PM, 19 Jan 2020</h4>
              <p style={{ fontWeight: "700", paddingBottom: "0", paddingTop: "10px", marginBottom: "0" }}>
                Shagun
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content right">
              <h4>8:00 AM, 20 Jan 2020</h4>
              <p style={{ fontWeight: "700", paddingBottom: "0", paddingTop: "10px", marginBottom: "0" }}>
                Grah Shanti
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content right">
              <h4>6:00 PM, 20 Jan 2020</h4>
              <p style={{ fontWeight: "700", paddingBottom: "0", paddingTop: "10px", marginBottom: "0" }}>
                Wedding
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
)
export default Events
