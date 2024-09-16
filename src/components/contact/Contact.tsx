import './Contact.scss';
import { contactTexts } from '../../texts/contactTexts';
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

const Contact = () => {
  const { language } = useContext(GlobalContext)
  const { myTitle, subtitle, description, form, cardContact} = contactTexts;

  return (
    <section className="contact-section">
      <h1>{myTitle[language]}</h1>
      <div className="contact-container">
        <div className="contact-form">
          <h2>{subtitle[language]}</h2>
          <p>{description[language]}</p>

          <form>
            <div className="form-group">
              <label htmlFor="name">{form.name[language]}:</label>
              <input type="text" id="name" placeholder={form.placeHolder.name[language]}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">{form.email[language]}:</label>
              <input type="email" id="email" placeholder={form.placeHolder.email[language]} />
            </div>
            <div className="form-group">
              <label htmlFor="message">{form.message[language]}:</label>
              <textarea id="message" placeholder={form.placeHolder.message[language]}></textarea>
            </div>
            <button type="submit">{form.submitButton[language]}</button>
          </form>
          <a href="mailto:arthurpelegrino97@gmail.com" className="email-link">{form.directlyMail[language]}</a>
        </div>

        <div className="contact-info">
          <div className="email-info">
            <h3>{cardContact.email[language]}</h3>
            <p>arthurpelegrino97@gmail.com</p>
          </div>
          <div className="address-info">
            <h3>{cardContact.address[language]}</h3>
            <p>Belo Horizonte, Minas Gerais, Brasil</p>
          </div>
          <div className="social-info">
            <h3>{cardContact.socialMedia[language]}</h3>
            <div className="social-icons">
              <a href="#!"><i className="fab fa-stack-overflow"></i></a>
              <a href="#!"><i className="fab fa-instagram"></i></a>
              <a href="#!"><i className="fas fa-globe"></i></a>
              <a href="#!"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
