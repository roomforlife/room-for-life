import React from 'react'
import PropTypes from 'prop-types'
import { JoannaPageTemplate } from '../../templates/joanna-page'

const JoannaPagePreview = ({ entry, widgetFor }) => (
  <JoannaPageTemplate
    title={entry.getIn(['data', 'title'])}
    subtitle={entry.getIn(['data', 'subtitle'])}
    content={widgetFor('body')}
    heroImage={entry.getIn(['data', 'heroImage'])}
  />
)

JoannaPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default JoannaPagePreview
