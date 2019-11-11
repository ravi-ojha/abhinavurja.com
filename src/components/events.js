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
            <div className="timeline-content right" style={{ background: '#fff' }}>
              <h4>11:00 AM, 18 Jan 2020</h4>

              <div className="icon-content">
                <img style={{ paddingTop: "10px" }} src="./../assets/images/mehdi.png" alt="Mehendi"></img>
                <p style={{ fontWeight: "700", paddingBottom: "0", paddingTop: "28px", margin: "0 10px" }}>
                  Mehendi
                </p>
              </div>

            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content left" style={{ background: '#fff' }}>
              <h4>9:00 AM, 19 Jan 2020</h4>

              <div className="icon-content">
                <img style={{ paddingTop: "10px" }} src="./../assets/images/ganpati-sthapna.png" alt="Ganpati-Matruka Sthapna"></img>
                <p style={{ fontWeight: "700", paddingBottom: "0", paddingTop: "28px", margin: "0 10px" }}>
                  Ganpati-Matruka Sthapna
                </p>
              </div>

            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content left" style={{ background: '#fff' }}>
              <h4>10:30 AM, 19 Jan 2020</h4>

              <div className="icon-content">
                <img style={{ paddingTop: "10px" }} src="./../assets/images/haldi.png" alt="Haldi"></img>
                <p style={{ fontWeight: "700", paddingBottom: "0", paddingTop: "28px", margin: "0 10px" }}>
                  Haldi
                </p>
              </div>

            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content left" style={{ background: '#fff' }}>
              <h4>6:00 PM, 19 Jan 2020</h4>

              <div className="icon-content">
                <img style={{ paddingTop: "10px" }} src="./../assets/images/shagun.png" alt="Shagun"></img>
                <p style={{ fontWeight: "700", paddingBottom: "0", paddingTop: "28px", margin: "0 10px" }}>
                  Shagun
                </p>
              </div>

            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content right" style={{ background: '#fff' }}>
              <h4>8:00 AM, 20 Jan 2020</h4>

              <div className="icon-content">
                <img style={{ paddingTop: "10px" }} src="./../assets/images/shanti.png" alt="Grah Shanti"></img>
                <p style={{ fontWeight: "700", paddingBottom: "0", paddingTop: "28px", margin: "0 10px" }}>
                  Grah Shanti
                </p>
              </div>

            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content right" style={{ background: '#fff' }}>
              <h4>6:00 PM, 20 Jan 2020</h4>

              <div className="icon-content">
                <img style={{ paddingTop: "10px" }} src="./../assets/images/wedding.png" alt="Wedding"></img>
                <p style={{ fontWeight: "700", paddingBottom: "0", paddingTop: "28px", margin: "0 10px" }}>
                  Wedding
                </p>
              </div>

            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"></div>
            <div className="timeline-content left" style={{ background: '#fff' }}>
              <h4>7:00 PM, 25 Jan 2020</h4>

              <div className="icon-content">
                <img style={{ paddingTop: "10px" }} src="./../assets/images/reception.png" alt="Reception"></img>
                <p style={{ fontWeight: "700", paddingBottom: "0", paddingTop: "28px", margin: "0 10px" }}>
                  Reception
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
)
export default Events
