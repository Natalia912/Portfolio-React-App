import Email from "../../assets/icons/envelope.svg"
import GitHub from "../../assets/icons/github.svg"
import LinkedIn from "../../assets/icons/linkedin.svg"
import UpWork from "../../assets/icons/upwork-1.svg"
import Telegram from "../../assets/icons/telegram.svg"

import './contacts.css'

function Contacts() {
  return ( 
    <section className='contacts container' id="contacts">
      <h2 className="section__title">Contact</h2>
      <div className="contacts__container">
        <p className="text">I am open for hire and collaboration.</p>
        <ul className="contacts__list">
          <li className="contacts__item">
            <p className="contacts__name">Email:</p>
            <a
              className="contacts__link"
              href="mailto:tretiakowa2212@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Email} alt="Email link" title="Email" width="24" height="24" />
              <span>tretiakowa2212@gmail.com</span>
            </a>
          </li>
          <li className="contacts__item">
            <p className="contacts__name">GitHub:</p>
            <a 
              className="contacts__link" 
              href="https://github.com/Natalia912"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHub} alt="GitHub link" title="GitHub" width="24" height="24" />
              <span>Natalia912</span>
            </a>
          </li>
          <li className="contacts__item">
            <p className="contacts__name">LinkedIn:</p>
            <a 
              className="contacts__link"
              href="https://www.linkedin.com/in/tretiakovan/"
              target="_blank"
              rel="noopener noreferrer"
            >
                <img src={LinkedIn} alt="LinkedIn link" title="LinkedIn" width="24" height="24" />
                <span>tretiakovan</span>
            </a>
          </li>
          <li className="contacts__item">
            <p className="contacts__name">UpWork:</p>
            <a 
              className="contacts__link"
              href="https://www.upwork.com/freelancers/~019fb92627a2b0d689"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={UpWork} alt="UpWork link" title="UpWork" width="24" height="24" />
              <span>Natalia T.</span>
            </a>
          </li>
          <li className="contacts__item">
            <p className="contacts__name">Telegram:</p>
            <a
              className="contacts__link"
              href="https://t.me/natalia21t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Telegram} alt="Telegram link" title="Telegram" width="24" height="24" />
              <span>natalia21t</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
   );
}

export default Contacts;