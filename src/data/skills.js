import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaJava, 
  FaNodeJs, 
  FaGithub, 
  FaGitAlt, 
  FaCode, 
  FaCube, 
  FaDatabase, 
  FaServer, 
  FaNetworkWired, 
  FaUserShield, 
  FaMobileAlt, 
  FaCreditCard, 
  FaEnvelope 
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTailwindcss, 
  SiSpringboot, 
  SiSpring, 
  SiMysql, 
  SiFirebase, 
  SiVercel, 
  SiPostman, 
  SiNextdotjs, 
  SiVite, 
  SiReactrouter, 
  SiExpress, 
  SiFlutter, 
  SiSocketdotio, 
  SiJsonwebtokens, 
  SiFramer, 
  SiRender 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BiNetworkChart, BiCodeAlt, BiBrain, BiGitBranch } from "react-icons/bi";

export const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    category: "Backend & Mobile",
    items: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "JDBC / Servlet", icon: BiCodeAlt, color: "#ea580c" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    ],
  },
  {
    category: "Database & Cloud",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
      { name: "REST APIs", icon: TbApi, color: "#0052CC" },
    ],
  },
  {
    category: "Libraries & Integrations",
    items: [
      { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
      { name: "Razorpay", icon: FaCreditCard, color: "#0B72E7" },
      { name: "Nodemailer", icon: FaEnvelope, color: "#339933" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#000000" },
      { name: "Framer Motion", icon: SiFramer, color: "#F107A3" },
    ],
  },
  {
    category: "Core Concepts",
    items: [
      { name: "DSA", icon: FaCode, color: "#3b82f6" },
      { name: "OOP", icon: FaCube, color: "#10b981" },
      { name: "DBMS", icon: FaDatabase, color: "#f59e0b" },
      { name: "Operating Systems", icon: FaServer, color: "#ef4444" },
      { name: "Computer Networks", icon: FaNetworkWired, color: "#8b5cf6" },
      { name: "RBAC", icon: FaUserShield, color: "#6366f1" },
      { name: "Microservices", icon: BiNetworkChart, color: "#06b6d4" },
      { name: "System Design", icon: BiBrain, color: "#ec4899" },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem Solving", icon: BiNetworkChart, color: "#10b981" },
      { name: "Communication", icon: BiNetworkChart, color: "#3b82f6" },
      { name: "Team Collaboration", icon: BiNetworkChart, color: "#8b5cf6" },
      { name: "Adaptability", icon: BiNetworkChart, color: "#f59e0b" },
      { name: "Time Management", icon: BiNetworkChart, color: "#ec4899" },
    ],
  },
];

export const marqueeSkills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
  { name: "Flutter", icon: SiFlutter },
];

