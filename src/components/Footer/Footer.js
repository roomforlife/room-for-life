import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'

import Facebook from '../../img/social/facebook.inline.svg'
import Instagram from '../../img/social/instagram.inline.svg'
import LinkedIn from '../../img/social/linkedin-in.inline.svg'

import bs from '../Bootstrap.module.scss'
import footer from './footer.module.scss'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className={cx(bs.bgDark, bs.py5)}>
        <div className={bs.container}>
          <div className={footer.socials}>
            <Link to="https://www.facebook.com/joanna.wojdylo.9" className={footer.socialIconWrapper}>
              <Facebook className={footer.socialIcon}/>
            </Link>
            <Link to="#" className={footer.socialIconWrapper}>
              <Instagram className={footer.socialIcon}/>
            </Link>
            <Link to="https://www.linkedin.com/in/joanna-wojdylo-741120a5/" className={footer.socialIconWrapper}>
              <LinkedIn className={footer.socialIcon}/>
            </Link>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
