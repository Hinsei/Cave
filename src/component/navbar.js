import React from 'react'
import NavbarToggle from './navbar/navbar_toggle'

export default class Navbar extends React.Component {
  render(){
    return(
      <div>
        <NavbarToggle />
        <div id="logo">
          <span>
            LOGO
          </span>
        </div>
      </div>
    )
  }
}
