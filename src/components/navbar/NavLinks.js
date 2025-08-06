import React from 'react';
// No need to import Link from react-router-dom anymore
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const NavLinks = ({ handleNav }) => {
  return (
    <ul className='nav-links'>
      <li onClick={handleNav}>
        <a href="https://twitter.com/your-profile" target='_blank' rel="noreferrer" className='nav-link'><FaTwitter /></a>
      </li>
      <li onClick={handleNav}>
        <a href="https://www.linkedin.com/in/rohan-kumar-372332270/" target='_blank' rel="noreferrer" className='nav-link'><FaLinkedin /></a>
      </li>
      <li onClick={handleNav}>
        <a href="https://github.com/RohanKumar63" target='_blank' rel="noreferrer" className='nav-link'><BsGithub /></a>
      </li>
      <li onClick={handleNav}>
        <a href="mailto:rohankumar941536@gmail.com" target='_blank' rel="noreferrer" className='nav-link'><BiEnvelope /></a>
      </li>
    </ul>
  );
};

export default NavLinks;