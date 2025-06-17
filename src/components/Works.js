import React from "react";
import { motion } from "framer-motion";
import "../styles/Works.css";
import { WorkData } from "../data/WorkData"; // Create a similar data file for your work projects

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
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
				{item.giticon}
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
