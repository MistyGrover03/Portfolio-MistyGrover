import React from "react";
import "./Portfolio.css";
import photo from "./assets/MistyGrover_photograph.jpg";

export default function Portfolio() {
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div>
            <h1>Misty Grover</h1>
            <p>Aspiring Software Developer & ML Enthusiast</p>
          </div>
          <nav>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* HERO */}
        <section className="hero">
          <div className="hero-card">
            {/* Left: Image */}
            <div className="hero-card-left">
              <img src={photo} alt="Misty Grover" className="photo" />
            </div>

            {/* Right: Details */}
            <div className="hero-card-right">
              <h2>Hi, I'm Misty 👋</h2>
              <p>
                I'm a Computer Science undergraduate passionate about Machine
                Learning and Full-Stack Development. I enjoy building projects
                that combine real-time systems, data-driven insights, and ML
                models to solve practical problems. I constantly explore new
                technologies and frameworks to create innovative solutions.
              </p>

              <p className="name"><strong>Misty Grover</strong></p>
              <p className="degree">B.Tech CSE • Graphic Era University</p>
              <p className="contact-detail">
                Email: <a href="mailto:mistygrover03@gmail.com">mistygrover03@gmail.com</a>
              </p>
              <p className="contact-detail">
                Mobile: <a href="tel:+918708999451">+91-8708999451</a>
              </p>
              <div className="socials">
                <a href="https://www.linkedin.com/in/misty-grover-93bb43268/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/MistyGrover03" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>

              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#contact" className="btn btn-secondary">Contact Me</a>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <h3>Experience</h3>
          <div className="grid-2">
            <div className="card">
              <h4>Salesforce Developer Intern — Salesforce</h4>
              <p>May 2025 – Jul 2025</p>
              <ul>
                <li>Built Apex classes, triggers and Lightning Web Components (LWC).</li>
                <li>Designed a 4-object data model and completed Superbadges.</li>
              </ul>
            </div>
            <div className="card">
              <h4>Machine Learning Intern — Prodigy InfoTech</h4>
              <p>Jul 2024 – Aug 2024</p>
              <ul>
                <li>Built regression and clustering models; achieved high evaluation scores.</li>
                <li>Developed SVM classifier with 94% accuracy.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <h3>Selected Projects</h3>
          <div className="grid-3">
            <div className="card">
              <h5>Parallel File Encryptor & Decryptor</h5>
              <p>Mar 2025 – Apr 2025</p>
              <p>Multithreaded file encryptor using XOR operations and chunk-wise processing for performance.</p>
              <a href="https://github.com/MistyGrover03/Parallel-File-Encryptor-and-Decryptor" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="card">
              <h5>Chat App with Spam Detection</h5>
              <p>Jan 2025 – Feb 2025</p>
              <p>Real-time socket-based chat integrated with NLP-based spam classifier (Scikit-learn).</p>
              <a href="https://github.com/MistyGrover03/Chat-Application-With-Spam-Detection" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="card">
              <h5>Driver Drowsiness Detection</h5>
              <p>Oct 2024 – Nov 2024</p>
              <p>OpenCV + Dlib system for EAR-based blink detection and alerts.</p>
              <a href="https://github.com/MistyGrover03/Driver-Drowsiness-Detection" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <h3>Education</h3>
          <div className="card">
            <h4>Graphic Era University — B.Tech CSE</h4>
            <p>2022 – 2026</p>
            <p>CGPA: 8.84</p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h3>Skills</h3>
          <div className="skills-grid">
            <span className="skill">C</span>
            <span className="skill">C++</span>
            <span className="skill">Java & C#</span>
            <span className="skill">Python</span>
            <span className="skill">AI/ML</span>
            <span className="skill">SQL</span>
            <span className="skill">HTML & CSS</span>
            <span className="skill">Azure</span>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h3>Contact</h3>
          <div className="contact">
            <div>
              <p className="name">Misty Grover</p>
              <p>mistygrover03@gmail.com</p>
              <p>+91-8708999451</p>
            </div>
            <div className="contact-buttons">
              <a href="#" className="btn btn-primary">LinkedIn</a>
              <a href="#" className="btn btn-secondary">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Misty Grover. Built with ❤️.
      </footer>
    </div>
  );
}