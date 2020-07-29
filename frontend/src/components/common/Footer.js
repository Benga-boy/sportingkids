import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
      <strong>&#169; 2018 Sporting Kids</strong> by Rene and Ola
        </p>
        <ul className="social-links">
          <li>
          <a className="instagram" href="https://www.instagram.com/sporting_kids/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a className="twitter" href="https://twitter.com/sportingkidsltd" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a className="facebook" href="https://www.facebook.com/Sportingkidsltd/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
        </ul>
        <div className="policy">
          <Link to="/childprotection"><p>Child Protection Policy</p></Link>
          <Link to="/privacypolicy"><p>Privacy Policy</p></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer