import React from 'react'
import PropTypes from 'prop-types'
import {EventsPageTemplate} from '../../templates/life-events';

const LifeEventsPagePreview = ({ entry, widgetFor }) => (
  <EventsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    heroImage={entry.getIn(['data', 'heroImage'])}
  />
)

LifeEventsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LifeEventsPagePreview
