import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import {logout} from '../store'

let _menuItems = ['info', 'posts', 'projects', 'interests', 'broken link', 'test'];

class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {hover: false};
    }

    toggleHover = evt => {
      if (!this.state.hover){
        this.setState({hover: evt.target.text})
      } else {
        this.setState({hover: null})
      }
    }

// isLoggedIn to keep track of who is logged in
// clicked to handle the click for logout
  render(){
    let _linkStyle = {};
    if (this.state.hover){
      _linkStyle[this.state.hover] = {backgroundColor: 'black', color: 'white'}
    } else {
      _linkStyle[this.state.hover] = {backgroundColor: 'white', color: 'black'}
    }
    return (<div className="navbar">
        <nav>
            {this.props.isLoggedIn ? (
                  <div>
                      {/* The navbar will show these links after you log in */}
                      <Link to="/home">Home</Link>
                      <a href="#" onClick={this.props.clicked}>
                          Logout
                      </a>
                  </div>
              ) : (
                  <div>

              <h1>Stanley Tiu</h1>
              {/* The navbar will show these links before you log in */}
              {/* <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>*/}
                  {_menuItems.map(menuitem => (
                  <NavLink
                      key={menuitem}
                      style={_linkStyle[menuitem]}
                      onMouseEnter={this.toggleHover}
                      onMouseLeave={this.toggleHover}
                      activeStyle={{color: 'green'}}
                      to={'/' + menuitem.replace(/\s+/g, '+')}>{menuitem}
                  </NavLink>))}
              </div>
              )}
          </nav>
      </div>)
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    clicked() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch, null, {pure: false})(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  clicked: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
