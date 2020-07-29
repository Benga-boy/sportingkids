import React from 'react'
import { Link, withRouter } from 'react-router-dom'
// import Breadcrumbs from '@material-ui/core/Breadcrumbs'
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
        {/* <Breadcrumbs separator='' aria-label="breadcrumb"> */}
        <ul className="menu-port">
          <li className="nav-link" id="home">
            <Link 
              color="inherit" href="/" onClick={handleClick}>
            Home
            </Link>
          </li>
          
          <li className="nav-link" id="about">
            <Link
              color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            About
            </Link>
          </li>
          <li className="nav-link" id="multi-sport-services">
            <Link
              color="textPrimary"
              href="/components/breadcrumbs/"
              onClick={handleClick}
              aria-current="page"
            >
          Multi-sport Services
            </Link>
          </li>
          <li className="nav-link" id="school-services">
            <Link
              color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            School Services
            </Link>
          </li>
          <li className="nav-link" id="whats-on">
            <Link
              color="textPrimary"
              href="/components/breadcrumbs/"
              onClick={handleClick}
              aria-current="page"
            >
          Whats On
            </Link>
          </li>
          <li className="nav-link" id="contact-us">
            <Link
              color="textPrimary"
              href="/components/breadcrumbs/"
              onClick={handleClick}
              aria-current="page"
            >
          Contact Us
            </Link>
          </li>
        </ul>
        
          
          
          
          
          
          
        {/* </Breadcrumbs> */}
      </div>
      
    </div>
  )
}




export default Navbar