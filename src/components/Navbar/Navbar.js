import React from 'react'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main-navigation"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          height: '60px',
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" title="Logo">
              <PreviewCompatibleImage imageInfo={{image: "/img/RFL_FORM_WHITE.png", alt: "room for life", imageStyle: {height: '60px', padding: '10px 5px'}}} />
              <PreviewCompatibleImage imageInfo={{image: "/img/RFL_TYPE_WHITE.png", alt: "", imageStyle: {height: '50px'}}} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item has-text-white" to="/about">
                Om
              </Link>

              <div className="navbar-dropdown has-background-dark">
                <Link className="navbar-item has-text-white" to="/about">Om ROOM FOR LIFE</Link>
                <Link className="navbar-item has-text-white" to="/joanna">Om Joanna</Link>
              </div>
            </div>
              <Link className="navbar-item has-text-white" to="/life-samtaler">LifeSamtaler</Link>
              <Link className="navbar-item has-text-white" to="/life-events">LifeEvents</Link>
              <Link className="navbar-item has-text-white" to="/contact">Kontakt</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
