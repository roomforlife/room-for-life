import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

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
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
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
                About
              </Link>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/about">Foundation</Link>
                <Link className="navbar-item" to="/about#joanna">About me</Link>
                <Link className="navbar-item" to="/life-events">Mission</Link>
              </div>
            </div>
              {/* <Link className="navbar-item" to="/products">
                Products
              </Link> */}
              <Link className="navbar-item" to="/life-samtaler">
                Life Samtaler
              </Link>
              <Link className="navbar-item" to="/life-shops">
                Life Shops
              </Link>
              <Link className="navbar-item" to="/life-events">
                Life Events
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
