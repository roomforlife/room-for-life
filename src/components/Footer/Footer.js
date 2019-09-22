import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'

import Facebook from '../../img/social/facebook.inline.svg'

import bs from '../Bootstrap.module.scss'
import footer from './footer.module.scss'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className={cx(bs.bgDark, bs.py5)}>
        <div className={cx(footer.row, bs.container)}>
          <div className={cx(footer.contact)}>
            <div><span>Email: </span>
              <Link to="mailto:joannawisbech@roomforlife.dk" className={footer.mail}>
                joannawisbech@roomforlife.dk
                </Link>
            </div>
            <span>Telefon: 52 48 22 15</span>
            <span>CVR-nr.: 38725548</span>
          </div>
          <div className={footer.socials}>
            <Link to="https://www.facebook.com/joannawisbech/" className={footer.socialIconWrapper}>
              <Facebook className={footer.socialIcon}/>
            </Link>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
