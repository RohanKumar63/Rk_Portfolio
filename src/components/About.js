import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/my_pic.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Hi, I'm Rohan, a final-year Computer Science & Engineering student with a passion for web development, cybersecurity, and AI-driven solutions. I specialize in full-stack development, building scalable and secure web applications using React.js, Node.js, Express, and MongoDB.
Beyond web development, I have experience in cybersecurity and ethical hacking, working on web application security. My interest in AI and data analysis has led me to develop predictive models with a focus on explainability and real-world impact.
 </p>
                        <br />
                        <p>I thrive on solving challenging problems and continuously improving my technical skills. If you're looking for a developer who can build, secure, and optimize applications, let's connect!.</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
