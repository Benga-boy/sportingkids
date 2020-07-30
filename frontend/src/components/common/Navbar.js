import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className ="navbar">
      <div className="nav-top">
          <img id="sk-logo" src="https://static.wixstatic.com/media/1a0189_f6d00781a30642748a8c3de78937a259~mv2_d_2480_1265_s_2.png/v1/crop/x_0,y_244,w_2480,h_785/fill/w_600,h_190,al_c,q_85,usm_0.66_1.00_0.01/Sporting%20Kids%20logo%20PNG.webp" alt="Sporting Kids" />
        <div className="contact">
          <div className="email">
            <p><ion-icon name="mail-outline"></ion-icon>info@sportingkids.com</p>
          </div>
          <div className="phone-number">
            <p><ion-icon name="call-outline"></ion-icon>07904618138</p>
          </div>
        </div>
      </div>
      <div className="nav-bottom">
        <div className ="menu-port">
          <div className="links">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/about" className="nav-link">ABOUT</Link>
            <Link to="/multisports" className="nav-link">MULTI-SPORT SERVICES</Link>
            <Link to="/schoolservices" className="nav-link">SCHOOL SERVICES</Link>
            <Link to="whatson" className="nav-link">WHATS ON</Link>
            <Link to="/contact" className="nav-link">CONTACT US</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar