import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <section className="hero">
    <section className="navigation">
      <header>
        <div className="header-content">
          <div className="logo">
            <Link to="/"><img src="./../assets/images/logo.png" alt="Logo"></img></Link>
          </div>
          <div className="header-nav">
            <nav>
              <ul className="primary-nav">
                <li><a className="parallax-link" href="#intro">How we met</a></li>
                <li><a className="parallax-link" href="#timeline">Timeline</a></li>
                <li><a className="parallax-link" href="#events">Events</a></li>
                <li><a className="parallax-link" href="#instagram">Tag Us</a></li>
              </ul>
              <ul className="member-actions">
                <li>
                  <div className="dropdown">
                    <a href="#" style={{ color: "#fff" }} className="btn-rsvp dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      RSVP
                      <span className="glyphicon glyphicon-menu-down" style={{ paddingLeft: "5px" }}></span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                      <li><Link to="/rsvp-wedding/#rsvp-wedding-form" className="parallax-link">Wedding in Valsad</Link></li>
                      <li><Link to="/rsvp-reception/#rsvp-reception-form" className="parallax-link">Post-wedding Reception</Link></li>
                    </ul>
                  </div>
                </li>
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
