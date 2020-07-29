import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import CallRoundedIcon from '@material-ui/icons/CallRounded'
import EmailIcon from '@material-ui/icons/Email'

const handleClick = (e) => {
  console.log(e.target)
}

const Navbar = () => {
  return (
    <div className ="navbar">
      <div className="nav-top">
        <img id="sk-logo" src="https://static.wixstatic.com/media/1a0189_f6d00781a30642748a8c3de78937a259~mv2_d_2480_1265_s_2.png/v1/crop/x_0,y_244,w_2480,h_785/fill/w_600,h_190,al_c,q_85,usm_0.66_1.00_0.01/Sporting%20Kids%20logo%20PNG.webp" />

        <div className="contact">
          <div className="email">
            <EmailIcon fontSize="large"/>info@sportingkids.com 
          </div>
          <div className="phone-number">
            <CallRoundedIcon fontSize="large"/>07930972647

          </div>
        </div>
      </div>
      <div className="nav-bottom">
        <div className ="menu-port">
          <div className="links">
            <Link className="nav-link">Home</Link>
            <Link className="nav-link">About</Link>
            <Link className="nav-link">Multi-sport Services</Link>
            <Link className="nav-link">School Services</Link>
            <Link className="nav-link">Whats On</Link>
            <Link className="nav-link">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}




export default Navbar