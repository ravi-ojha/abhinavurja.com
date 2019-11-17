import React from "react"
import Countdown from 'react-countdown-now'


const Completionist = () => <div className="timer-elem">
  <div className="timer-value">
    It's the big day!
  </div>
  <div className="timer-label" style={{ fontSize: "16px" }}>
    See ya there!
  </div>
</div>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div>
        <div className="timer-elem">
          <div className="timer-value">
            {days}
          </div>
          <div className="timer-label">
            DAYS
          </div>
        </div>
        <div className="timer-elem">
          <div className="timer-value" style={{ minWidth: "20px", fontWeight: "300" }}>
            :
          </div>
          <div className="timer-label" style={{ visibility: "hidden"}}>
            :
          </div>
        </div>
        <div className="timer-elem">
          <div className="timer-value">
            {hours}
          </div>
          <div className="timer-label">
            HOURS
          </div>
        </div>
        <div className="timer-elem">
          <div className="timer-value" style={{ minWidth: "20px", fontWeight: "300" }}>
            :
          </div>
          <div className="timer-label" style={{ visibility: "hidden"}}>
            :
          </div>
        </div>
        <div className="timer-elem">
          <div className="timer-value">
            {minutes}
          </div>
          <div className="timer-label">
            MINUTES
          </div>
        </div>
        <div className="timer-elem">
          <div className="timer-value" style={{ minWidth: "20px", fontWeight: "300" }}>
            :
          </div>
          <div className="timer-label" style={{ visibility: "hidden"}}>
            :
          </div>
        </div>
        <div className="timer-elem">
          <div className="timer-value">
            {seconds}
          </div>
          <div className="timer-label">
            SECONDS
          </div>
        </div>
      </div>)
    ;
  }
};


const MainNews = () => (
  <>
    <section id="invitation" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>We are getting married!</h3>
            <p>The wedding's on 20<sup>th</sup> January '20 and we would like you to be a part of it.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="invitation" className="events section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <Countdown
              date={new Date(2020, 0, 20)}
              renderer={renderer}
            />
          </div>
        </div>
      </div>
    </section>
  </>
)
export default MainNews
