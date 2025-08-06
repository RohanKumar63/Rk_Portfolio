import React from "react";
import { motion } from "framer-motion";
import "../styles/Works.css";
import { WorkData } from "../data/WorkData"; 

const Work = () => {
  const workEffect = {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  return (
    <div className="work" id="work">
      <div className="container">
        <motion.div
          whileInView={workEffect}
          initial={{ y: "-80px", opacity: 0 }}
          className="heading"
        >
          <p className="heading-sub-text">My Projects & Experience</p>
          <p className="heading-text">Work</p>
        </motion.div>
    
        <motion.div
          whileInView={workEffect}
          initial={{ y: "-80px", opacity: 0 }}
          className="work-grid"
        >
          {WorkData.map((item, index) => (
            <div className="work-card" key={index}>
              <div className="work-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="work-content">
                <h3 className="project-title">{item.title}</h3>
                <p className="tech-stack-label">Tech Stack:</p>
                <div className="tech-stack-icons">
                  {item.tech.map((icon, i) => (
                    <div key={i} className="icon-wrapper">
                      {icon}
                    </div>
                  ))}
                </div>
                 <div className="project-links">
      
          {item.githubLink && (
            <a href={item.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
              {item.giticon}
            </a>
          )}

          {item.liveLink && (
            <a href={item.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Preview Link">
              {item.linkIcon}
            </a>
          )}
        </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;