import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {Link} from 'gatsby'

import bs from '../Bootstrap.module.scss'
import features from './Features.module.scss'

const FeatureGrid = ({ gridItems }) => (
  <section className={bs.my5}>
    <div className={bs.container}>
      <h2 className={cx(bs.my2, bs.h2, bs.textCenter)}>What we do</h2>
      <p className={bs.textCenter}>More description about what we do.</p>
      <div className={bs.row}>
        {gridItems && gridItems.map((item) => (
          <aside key={item.text} className={cx(bs.col12, bs.colMd4)}>
            <div className={features.featuresCard} style={{ background: `url(${
              !!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image
            })`}}>
              <div className={features.borderDiv}>
                <h3 className={cx(bs.h3, bs.textWhite)}>{item.title}</h3>
                <p className={cx(bs.my3, bs.textWhite)}>{item.text}</p>
                <Link className={cx(features.viewMoreButton, bs.my2)} to={item.url}>View more</Link>
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
