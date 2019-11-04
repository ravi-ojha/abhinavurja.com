import React from "react"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script src={withPrefix('assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js')} type="text/javascript" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script src={withPrefix('assets/js/vendor/jquery-1.11.2.min.js')} type="text/javascript"> </script>
        <script src={withPrefix('assets/js/jquery.fancybox.pack.js')} type="text/javascript" />
        <script src={withPrefix('assets/js/vendor/bootstrap.min.js')} type="text/javascript" />
        <script src={withPrefix('assets/js/jquery.flexslider-min.js')} type="text/javascript" />
        <script src={withPrefix('assets/js/jquery.mb.YTPlayer.min.js')} type="text/javascript" />
        <script src={withPrefix('assets/js/jquery.waypoints.min.js')} type="text/javascript" />
        <script src={withPrefix('assets/js/vendor/ouical.js')} type="text/javascript" />
        <script src={withPrefix('assets/js/scripts.js')} type="text/javascript" />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
