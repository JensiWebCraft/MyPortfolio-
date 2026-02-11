import React from "react";
import "./About.css";
import profileImg from "../assets/myimage.png"; // Replace with your image

const About = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">
        About <span>me</span>
      </h2>
      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="Jensi Kachhadiya" />
        </div>

        <div className="about-content">
          <p>
            I’m a Computer Engineering student and Full-Stack Web Developer
            specializing in the MERN Stack. I have hands-on experience building
            responsive and scalable web applications using React.js, Node.js,
            Express.js, MongoDB, Next.js, and NestJS through internships and
            real-world projects like real-time chat, recipe sharing, notes
            management, and AI-based smart kitchen systems.
          </p>
          <p>
            I enjoy solving problems, creating clean user interfaces, and
            developing practical solutions that improve user experience.
          </p>

          <div className="skills">
            <div className="skill">
              <span>HTML & CSS</span>
              <div className="bar html"></div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="bar react"></div>
            </div>
            <div className="skill">
              <span>MERN STACK</span>
              <div className="bar js"></div>
            </div>
            <div className="skill">
              <span>Flutter</span>
              <div className="bar flutter"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat">
          <h3>4</h3>
          <p>Months of Experience</p>
        </div>
        <div className="stat">
          <h3>10+</h3>
          <p>Projects Completed</p>
        </div>
      </div>
    </section>
  );
};

export default About;
