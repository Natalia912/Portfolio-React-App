import Arrow from "../../assets/icons/arrow-up-solid.svg"

import "./footer.css"

function Footer() {
  return ( 
    <footer className="footer container">
      <span className="footer_copyrights">
        © 2022 Natalia Tretiakova
      </span>
      <button onClick={ () => 
        window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
        })}
        className="footer__arrow"
      >
        <img src={Arrow} alt="arrow up" width="36" height="36" />
      </button>
    </footer>
  );
}

export default Footer;