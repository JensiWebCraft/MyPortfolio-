import React from "react";
import "./Projects.css";

const projectData = [
  {
    id: 1,
    title: "Mobile Selling",
    desc: "Mobile Selling Website Using HTML, CSS, Javascript",
    github: "https://mobile-selling-wheat.vercel.app/",
  },
  {
    id: 2,
    title: "Real Time Chat",
    desc: "A Real-Time Chat Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and WebSocket (Socket.IO) allows users to send and receive messages instantly without refreshing the page.",
    github: "https://real-time-chat-rho-one.vercel.app/login",
  },
  {
    id: 3,
    title: "Smart Kitchen",
    desc: "AI nad ML base on Smart Kitchen",
    github: "https://github.com/Jensi-44/Smart_Kitchen.git",
  },
  {
    id: 4,
    title: "My Portfolio",
    desc: "This personal portfolio built with React.",
    github: "https://my-portfolio-ashy-nine-44.vercel.app/",
  },
  {
    id: 5,
    title: "Cake",
    desc: "Cake Website Using HTML, CSS, Javascript",
    github: "https://cake-self.vercel.app/",
  },
  {
    id: 6,
    title: "Analysis Website",
    desc: "A Chart-Based Website is a web application that displays data visually using graphs and charts to make information easy to understand. Instead of showing raw numbers or tables, the system presents data using bar charts, trend charts, status charts, and dashboards.",
    github: "https://chart-website-one.vercel.app/dashboard",
  },
  {
    id: 7,
    title: "Notes App",
    desc: "This is a full-stack notes management app where users can manage notes and share them with others through email invitations using NestJS and Next.js.",
    github: "https://notes-f-maz5.vercel.app/login",
  },
  {
    id: 8,
    title: "Task Management",
    desc: "A Task Management System built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) helps users create, organize, update, and track daily tasks efficiently.",
    github: "https://task-management-six-ecru.vercel.app/",
  },

  {
    id: 10,
    title: "Twitter Clone",
    desc: "A Twitter Clone built using React is a social media web application where users can post tweets, like, comment, and interact with others in real time.",
    github: "https://twitterclone-jk.netlify.app/",
  },
  {
    id: 11,
    title: "Youtube Clone",
    desc: "A YouTube Clone is a video streaming web application built using React (frontend) and optionally MERN Stack (backend) that allows users to watch, upload, like, comment, and manage videos similar to YouTube.",
    github: "https://youtubeclonejk.netlify.app/",
  },
  {
    id: 12,
    title: "BookMyShow Clone",
    desc: "A BookMyShow Clone built using React is an online movie ticket booking web application where users can browse movies, check show timings, select seats, and book tickets easily.",
    github: "https://bookmyshow-44.netlify.app/login",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{String(project.id).padStart(2, "0")}</h3>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                <button className="github-btn">GitHub ↗</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
