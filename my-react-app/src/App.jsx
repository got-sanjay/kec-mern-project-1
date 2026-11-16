// import { useState } from 'react'
import heroImg from "./assets/hero.png";
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome to My World</h1>
      <h5>This is a simple React app.</h5>
      <p>Feel free to explore and modify this app!</p>
      <section className="about">
        <h2>About</h2>
        <p>This app is built using React and Vite.</p>
      </section>
      <div className="hero">
        <img src={heroImg} alt="Hero" />
      </div>
      <a
        href="http://got-sanjay.github.io/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit My Portfolio
      </a>
    </>
  );
}

export default App;
