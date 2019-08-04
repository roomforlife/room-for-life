import React from 'react'
import cx from 'classnames'
import bs from '../../Bootstrap.module.scss'
import dpl from './DetailPageLayout.module.scss'

const DetailPageLayout = ({ children }) => {
  return (
    <div>
        <header className={cx(dpl.headerWrapper)}>
          <div className={cx(dpl.header, bs.container, bs.py5)}>
             <div className={cx(bs.p5, bs.mb5, dpl.titleWrapper,)}>
                <h1 className={cx(dpl.title, bs.h2, bs.px2)}>Life Samtaler</h1>
                <h2 className={cx(dpl.subtitle)}>Subtitle for life samtaler. Some text can be placed here.</h2>
              </div>
            <div className={dpl.mainImage} style={{backgroundImage: 'url("/img/hero-home.jpg")'}}></div>
          </div>
        </header>
        <main className={cx(bs.my5, bs.container)}>
          {children}
        </main>
    </div>
  )
}

export default DetailPageLayout
