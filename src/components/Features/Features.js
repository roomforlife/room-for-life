import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <section className="section has-background-light">
    <div className="container">
      <div className="has-text-centered">
        <h2 className="has-text-weight-light is-size-2">Brief Details block</h2>
        <p className="has-text-weight-light">Secondary text</p>
      </div>
    </div>
  </section>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
