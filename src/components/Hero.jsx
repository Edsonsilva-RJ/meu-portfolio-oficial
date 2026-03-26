import React from 'react';
import '../styles/Hero.css';

// Importamos a imagem que você salvou na pasta assets
import heroImage from '../assets/hero-bg.jpg'; 

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>EDSON SILVA</h1>
          <h2>Engenharia de Computação | 9º Semestre</h2>
          <p>
            Unindo o rigor técnico da engenharia com a experiência de 10 anos em 
            gestão e comunicação. Desenvolvedor Full Stack em formação.
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary" style={{ textDecoration: 'none' }}>
                Ver Projetos
            </a>
            <a href="/curriculo-edson-silva.pdf" 
                download="Curriculo_Edson_Silva.pdf" 
                className="btn-outline"
                style={{ textDecoration: 'none' }}>
                Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;