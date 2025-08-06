// Add FiExternalLink for the live preview button
import { FiExternalLink } from "react-icons/fi"; 
// ... other imports
import { 
  SiMongodb, 
  SiNodedotjs, 
  SiExpress,
   SiPostman,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { FaGithub, FaReact } from "react-icons/fa";

// image imports
import project1 from "../images/project1.png";
import project2 from "../images/Project2.png";
import project3 from "../images/backend-image.png";

export const WorkData = [
  {
    title: "SecurePass",
    tech: [ <DiJavascript1 />, <FaReact />],
    image: project1,
    githubLink: "https://github.com/RohanKumar63/SecurePass",
    liveLink: "", 
    giticon: <FaGithub />,
    linkIcon: <FiExternalLink /> // Add the external link icon
  },
   {
    title: "Doc Mate",
    tech: [ <DiJavascript1 />, <SiExpress />, <SiMongodb />, <SiNodedotjs />],
    image: project2, 
	liveLink: "", 
    githubLink: "https://github.com/RohanKumar63/SecurePass",
    giticon: <FaGithub />,
  },
   {
    title: "SecurePass",
    tech: [ <DiJavascript1 />, <SiExpress />, <SiMongodb />, <SiNodedotjs />, <SiPostman />],
    image: project3, 
	liveLink: "", 
    githubLink: "https://github.com/RohanKumar63/",
    giticon: <FaGithub />,
  },
  
];