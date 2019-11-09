import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <section className="hero">
    <section className="navigation">
      <header>
        <div className="header-content">
          <div className="logo"><a href="#"><img src="./../assets/images/logo.png" alt="Logo"></img></a></div>
          <div className="header-nav">
            <nav>
              <ul className="primary-nav">
                <li><a href="#intro">How we met</a></li>
                <li><a href="#timeline">Timeline</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#instagram">Tag Us</a></li>
              </ul>
              <ul className="member-actions">
                <li><a href="#rsvp" className="btn-white btn-small">RSVP</a></li>
              </ul>
            </nav>
          </div>
          <div className="navicon">
            <a className="nav-toggle" href="#"><span></span></a>
          </div>
        </div>
      </header>
    </section>
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="hero-content text-center">
            <img src="./../assets/images/logo-lg.png"></img>
            <p className="font-lobster">Our paths unite <a href="https://instagram.com/explore/tags/udjaawithsharma/" target="_blank" style={{ color: '#fff' }}>#udjaawithsharma</a> </p>
          </div>
        </div>
      </div>
    </div>
    <div className="down-arrow floating-arrow"><a href="#invitation"><i className="fa fa-angle-down"></i></a></div>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
