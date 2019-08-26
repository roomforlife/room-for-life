import React from 'react'
import PropTypes from 'prop-types'
import {SamtalerPageTemplate} from '../../templates/life-samtaler';

const AboutPagePreview = ({ entry, widgetFor }) => (
  <SamtalerPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    heroImage={entry.getIn(['data', 'heroImage'])}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
