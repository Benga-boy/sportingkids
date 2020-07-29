import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
      <strong>&#169; 2018 Sporting Kids</strong> by Rene and Ola
        </p>
        <ul className="social-links">
          <li>
          <a href="https://www.instagram.com/sporting_kids/" target="_blank" rel="noopener noreferrer">
            <ion-icon className="instagram" name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/sportingkidsltd" target="_blank" rel="noopener noreferrer">
            <ion-icon className="twitter" name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Sportingkidsltd/" target="_blank" rel="noopener noreferrer">
            <ion-icon className="facebook" name="logo-facebook"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer