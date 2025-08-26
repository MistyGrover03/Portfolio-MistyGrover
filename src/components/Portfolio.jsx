import React from "react";
import "./Portfolio.css"; // Make sure to create this CSS file

export default function Portfolio() {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="header-inner">
          <div>
            <h1>Misty Grover</h1>
            <p>Aspiring Software Developer • ML & Salesforce Enthusiast</p>
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
          <div className="hero-text">
            <h2>Hi, I'm Misty 👋</h2>
            <p>
              I'm a Computer Science undergraduate passionate about <strong>Machine Learning</strong>, <strong>Full-Stack Development</strong>, and <strong>Salesforce</strong>. I build projects that combine real-time systems and ML to solve practical problems.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="photo">Photo</div>
            <p className="name">Misty Grover</p>
            <p className="degree">B.Tech CSE • Graphic Era University</p>
            <div className="contacts">
              <a href="mailto:mistygrover03@gmail.com">mistygrover03@gmail.com</a>
              <span>•</span>
              <a href="tel:+918708999451">+91-8708999451</a>
            </div>
            <div className="socials">
             <div className="socials">
                <a href="https://www.linkedin.com/in/misty-grover-93bb43268/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/MistyGrover03" target="_blank" rel="noopener noreferrer">GitHub</a>
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
            <p>2022 – 2026 • CGPA: 8.84</p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h3>Skills</h3>
          <div className="skills-grid">
            <span className="skill">C++</span>
            <span className="skill">Python</span>
            <span className="skill">Java</span>
            <span className="skill">JavaScript</span>
            <span className="skill">OpenCV</span>
            <span className="skill">TensorFlow</span>
            <span className="skill">Scikit-learn</span>
            <span className="skill">React</span>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h3>Contact</h3>
          <div className="contact">
            <div>
              <p className="name">Misty Grover</p>
              <p>mistygrover03@gmail.com • +91-8708999451</p>
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
