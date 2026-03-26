import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contato">
      <div className="contact-container">
        <h2>Vamos Conversar?</h2>
        <p>Estou aberto a oportunidades em desenvolvimento de software e projetos de engenharia.</p>
        
        <div className="contact-methods">
          <div className="contact-card">
            <h3>E-mail</h3>
            <a href="mailto:edson.silva.dev@gmail.com">edson.silva.dev@gmail.com</a>
          </div>
          
          <div className="contact-card">
            <h3>Redes Sociais</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/edsons91/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/Edsonsilva-RJ" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          
          <div className="contact-card">
            <h3>Localização</h3>
            <p>Rio de Janeiro, RJ</p>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <p>© 2026 Edson Silva. Desenvolvido com React & Vite.</p>
      </footer>
    </section>
  );
};

export default Contact;