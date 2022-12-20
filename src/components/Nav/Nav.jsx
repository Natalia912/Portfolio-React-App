import { useEffect, useState } from "react"

import GitHub from "../../assets/icons/github.svg"
import LinkedIn from "../../assets/icons/linkedin.svg"
import UpWork from "../../assets/icons/upwork-1.svg"
import Telegram from "../../assets/icons/telegram.svg"

import "./nav.css"

function Nav() {

  const [showNav, setShowNav] = useState(false)

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setShowNav(true)
    } else setShowNav(false)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  useEffect( () => {
    if (innerWidth >= 768) 
      {
        setShowNav(true)
      }
  }, [innerWidth, showNav])

  return (

    <nav className="navbar" id="home">
      <div className="container">
        <div className="navbar__layout">
          <div className="navbar__logo">
            <span className={`${!showNav ? "show" : "hide"}`} aria-label="Natalia Tretiakova">NT</span>
          </div>
          <button className="hamburger" aria-label={showNav ? 'Close menu' : 'Open menu'} type="button" onClick={() => setShowNav(prevState => !prevState)}>
              <span className={`line ${!showNav ? "" : "line1"}`}></span>
              <span className={`line ${!showNav ? "" : "line2"}`}></span>
              <span className={`line ${!showNav ? "" : "line3"}`}></span>
          </button>
          <div className={`navbar__menu ${showNav ? "" : "hide"}`}>
            <ul className="navbar__items">
              <li className="navbar__item"><a href="#about" onClick={() => setShowNav(prevState => !prevState)}>About</a></li>
              <li className="navbar__item"><a href="#projects" onClick={() => setShowNav(prevState => !prevState)}>Projects</a></li>
              <li className="navbar__item"><a href="#contacts" onClick={() => setShowNav(prevState => !prevState)}>Contact</a></li>
            </ul>
            <ul className="navbar__links">
              <li className="navbar__link">
                <a href="https://github.com/Natalia912" target="_blank" rel="noopener noreferrer">
                  <img src={GitHub} alt="GitHub link" title="GitHub" width="36" height="36"/>
                </a>
              </li>
              <li className="navbar__link">
                <a href="https://www.linkedin.com/in/natalia-tretiakova-91658523b/" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedIn} alt="LinkedIn link" title="LinkedIn" width="36" height="36"/>
                </a>
              </li>
              <li className="navbar__link">
                <a href="https://www.upwork.com/freelancers/~019fb92627a2b0d689" target="_blank" rel="noopener noreferrer">
                  <img src={UpWork} alt="UpWork link" title="UpWork" width="36" height="36"/>
                </a>
              </li>
              <li className="navbar__link">
                <a href="https://t.me/Marchtothesea21" target="_blank" rel="noopener noreferrer">
                  <img src={Telegram} alt="Telegram link" title="Telegram" width="36" height="36" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;