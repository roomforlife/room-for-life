import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {Link} from 'gatsby'

import bs from '../Bootstrap.module.scss'
import features from './Features.module.scss'

const FeatureGrid = ({ gridItems }) => (
  <section className={bs.my5}>
    <div className={bs.container}>
      {/* <h2 className={cx(bs.my2, bs.h1, bs.textCenter, bs.fontFamilySerif)}>What we do</h2>
      <p className={cx(bs.textCenter, bs.my5)}>More description about what we do.</p> */}
      <div className={bs.row}>
        <div className={bs.offsetMd1}></div>
        {gridItems && gridItems.map((item, i) => (
          <aside key={i} className={cx(bs.col12, bs.colMd5)}>
            <div className={features.featuresCard}>
              <div className={features.cardImage} style={{ 'backgroundImage': `url(${
              !!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image
            })`}}></div>
              <div className={features.borderDiv}>
                <h3 className={cx(bs.h2, features.cardTitle)}>{item.title}</h3>
                <div className={features.divider}></div>
                <p className={cx(bs.my3)}>{item.text}</p>
                <Link className={cx(features.viewMoreButton, bs.my2)} to={item.url}>Læs mere</Link>
              </div>
            </div>
          </aside>
        ))}
      </div>
    </div>
  </section>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default FeatureGrid
