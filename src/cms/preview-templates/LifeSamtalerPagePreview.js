import React from 'react'
import PropTypes from 'prop-types'
import {SamtalerPageTemplate} from '../../templates/life-samtaler';

const LifeSamtalerPagePreview = ({ entry, widgetFor }) => (
  <SamtalerPageTemplate
    title={entry.getIn(['data', 'title'])}
    subtitle={entry.getIn(['data', 'subtitle'])}
    content={widgetFor('body')}
    heroImage={entry.getIn(['data', 'heroImage'])}
  />
)

LifeSamtalerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LifeSamtalerPagePreview
