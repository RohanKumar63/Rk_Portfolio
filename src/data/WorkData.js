// Add FiExternalLink for the live preview button
import { FiExternalLink } from "react-icons/fi"; 
// ... other imports
import { 
  SiMongodb, 
  SiNodedotjs, 
  SiExpress,
   SiPostman,
   SiMysql,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { FaGithub, FaReact } from "react-icons/fa";

// image imports
import project1 from "../images/project1.png";
import project2 from "../images/Project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

export const WorkData = [
  {
    title: "Duckhunt Tour & Travell",
    tech: [ <DiJavascript1 />, <FaReact />],
    image: project1,
    githubLink: "",
    liveLink: "https://duckhunttravels.com/", 
    giticon: <FaGithub />,
    linkIcon: <FiExternalLink /> // Add the external link icon
  },
    {
    title: "Encryvia",
    tech: [ <DiJavascript1 />, <FaReact />, <SiMongodb />, <SiNodedotjs />, <SiExpress />, <SiPostman />],
    image: project2,
    githubLink: "",
    liveLink: "https://encryvia.com/", 
    giticon: <FaGithub />,
    linkIcon: <FiExternalLink /> // Add the external link icon
  },
  {
    title: "MystrickWrap",
    tech: [ <DiJavascript1 />, <FaReact />, <SiMysql />, <SiNodedotjs />, <SiExpress />, <SiPostman />],
    image: project3,
    githubLink: "",
    liveLink: "https://mystrickwrap.com/", 
    giticon: <FaGithub />,
    linkIcon: <FiExternalLink /> // Add the external link icon
  },
  
  {
    title: "SecurePass",
    tech: [ <DiJavascript1 />, <FaReact />],
    image: project4,
    githubLink: "https://github.com/RohanKumar63/SecurePass",
    liveLink: "", 
    giticon: <FaGithub />,
    linkIcon: <FiExternalLink /> // Add the external link icon
  },
  
];