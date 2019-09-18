import React from 'react'
import Layout from '../../components/Layout'

import cx from 'classnames'
import bs from '../../components/Bootstrap.module.scss'

export default () => (
  <Layout>
    <section>
      <div className={cx(bs.container, bs.textCenter, bs.my5, bs.py5)}>
        <div className={cx(bs.bgSuccess, bs.py5)}>
          <h1 className={cx(bs.h2, bs.textWhite)}>Tak for din henvendelse.</h1>
          <p className={cx(bs.textWhite, bs.py3)}>Jeg vender tilbage hurtigst muligt. De bedste hilsner Joanna</p>
        </div>
      </div>
    </section>
  </Layout>
)
