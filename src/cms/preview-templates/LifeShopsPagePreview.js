import React from 'react'
import PropTypes from 'prop-types'
import {ShopsPageTemplate} from '../../templates/life-shops';

const LifeShopsPagePreview = ({ entry, widgetFor }) => (
  <ShopsPageTemplate
    title={entry.getIn(['data', 'title'])}
    subtitle={entry.getIn(['data', 'subtitle'])}
    content={widgetFor('body')}
    heroImage={entry.getIn(['data', 'heroImage'])}
  />
)

LifeShopsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LifeShopsPagePreview
