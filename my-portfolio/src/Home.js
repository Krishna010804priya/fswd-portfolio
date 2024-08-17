import React, { useEffect } from 'react';
import './code.css';

function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); 
    };
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm krishnapriya Saravanakumar</h1>
        <h3>Web Developer</h3>
        <p>IT student. I am a quick learner. I want to go through and experience all things in the computer world. Interested to do innovative things.</p>

        <div className="home-sci">
          <a href="#"><i className='bx bxl-facebook'></i></a>
          <a href="#"><i className='bx bxl-twitter'></i></a>
          <a href="#"><i className='bx bxl-instagram'></i></a>
          <a href="#"><i className='bx bxl-linkedin'></i></a>
        </div>

        <a href="#" className="btn">Download CV</a>
      </div>
    </section>
  );
}

export default Home;
