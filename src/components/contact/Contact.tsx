import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact-section">
      <h1>Let's Connect</h1>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Connect with me</h2>
          <p>If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.</p>

          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          <a href="mailto:arthurpelegrino97@gmail.com" className="email-link">Send me email directly</a>
        </div>

        <div className="contact-info">
          <div className="email-info">
            <h3>Email</h3>
            <p>arthurpelegrino97@gmail.com</p>
          </div>
          <div className="address-info">
            <h3>Address</h3>
            <p>Belo Horizonte, Minas Gerais, Brasil</p>
          </div>
          <div className="social-info">
            <h3>Social</h3>
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
