import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-section" id="sobre">
      <div className="about-container">
        <div className="about-text">
          <h2>Sobre Minha Trajetória</h2>
          <p>
            Atualmente no <strong>9º semestre de Engenharia de Computação</strong> pela Uninter e cursando Programação no SENAI Jacarepaguá, 
            minha jornada é marcada pela transição da gestão operacional para o desenvolvimento tecnológico.
          </p>
          <p>
            Com mais de 10 anos de experiência em ambientes de alta pressão, desenvolvi 
            uma comunicação assertiva e resiliência — <em>soft skills</em> que hoje aplico 
            na arquitetura de sistemas e na resolução de problemas complexos de software e hardware.
          </p>
          <div className="skills-container">
                <h3>Software & Stack</h3>
                <div className="tech-pills">
                    <span>React</span> <span>Vite</span> <span>Python</span> 
                    <span>JavaScript</span> <span>CSS3</span> <span>HTML5</span>
                </div>

                <h3>Engenharia & Hardware</h3>
                <div className="tech-pills">
                    <span>Eletricista Residencial (Certificado)</span> 
                    <span>Arquitetura de Computadores</span> 
                    <span>Sistemas Embarcados</span>
                    <span>Circuitos Elétricos</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;