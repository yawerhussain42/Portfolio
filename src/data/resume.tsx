import { Icons } from "@/components/icons";
import { HomeIcon, Gamepad2, InstagramIcon } from "lucide-react";

export const DATA = {
  name: "Yawar Hussain",
  initials: "YH",
  url: "https://dillion.io",
  location: "Bangalore,  India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Senior Frontend Engineer | Expert in React, Angular, JavaScript, TypeScript, ElectronJS| Proven Team Leader | Web Development Specialist",
  summary:
    "I specialize in developing high-performing, scalable user interfaces with modern JavaScript frameworks like React. Driven by a passion for crafting seamless digital experiences, I collaborate closely with cross-functional teams to deliver robust, user-centric designs. Leveraging Agile methodologies, I ensure timely project completions while maintaining high code quality. As a mentor and leader, I conduct rigorous code reviews and foster a culture of continuous improvement, focusing on creating solutions that are both testable and scalable. My goal is to push the boundaries of technology and user experience, delivering innovative solutions that delight users and drive business success.",
  avatarUrl: "Portfolio/me.jpg",
  skills: [
    "React",
    "Javascript",
    "Typescript",
    "Angular",
    "Electron",
    "Nodejs",
    "Redux",
    "WebRTC",
    "Web Sockets",
    "Rest API",
    "GraphQL",
    "Docker",
    "Storybook",
    "Microfrontend",
    "Mantine.dev",
    "Material UI",
    "Angular Material",
    "Bootstrap",
    "Tailwind",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/tic-tac-toe", icon: Gamepad2, label: "Feeling Bored?" },
  ],
  contact: {
    email: "yawerhussain42@gmail.com",
    tel: "+919596273431",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yawerhussain42",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yawar-hussain-2811b456",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/yawer_hussain",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/iamyawarhussain/",
        icon: InstagramIcon,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Getafix Technologies",
      href: "https://getafixtechnologies.com/",
      badges: [],
      location: "Bangalore, India",
      title: "Senior Frontend Engineer",
      logoUrl: "/getafix.png",
      start: "Aug 2018",
      end: "Present",
      description:
        "As a Senior Frontend Engineer at Getafix, I have played a pivotal role in developing high-performing, scalable user-facing features using React and other modern JavaScript frameworks, ensuring optimal user experiences. I collaborated with cross-functional teams including Back-End Developers, Graphic Designers, and UX Designers to build and maintain frontend applications at scale. I have mentored engineers, ensured successful project deliveries through rigorous code reviews, and fostered a collaborative work environment. Implementing Agile methodologies was central to my approach, enabling timely project completions while maintaining high code quality standards. Additionally, I enhanced application and feature coding for testability and scalability, resolving complex bugs to deliver robust and high-quality frontend solutions.",
    },
  ],
  education: [
    {
      school: "University of Kashmir",
      href: "https://www.kashmiruniversity.net/",
      degree: "Bachelor's of Computer Applications (BCA)",
      logoUrl: "/universityOfKashmir.png",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Quantum Arc",
      dates: "2022 - Present",
      location: "Bangalore, India",
      description:
        "Developed QuantumArc as a hybrid desktop and web application using Electron.js, React.js, and TypeScript, integrating Mantine.dev for a modern and cohesive UI/UX. Real-Time Data Integration: Leveraged WebSockets for real-time ticker data streaming, enabling users to access up-to-the-second information crucial for informed trading decisions. User Authentication: Implemented secure user login via Kite Zerodha accounts, facilitating a seamless and efficient trading experience. Advanced Trading Features: Added features like basket protection, position management, and virtual trading to cater to diverse trading strategies and risk management needs. Component Design: Designed and developed reusable components with Storybook, adhering to Atomic design principles to ensure consistency and scalability across the platform. Performance Optimization: Optimized data handling and caching strategies, enhancing the platform's robustness and responsiveness.",
      image: "/quantumarc.png",
      mlh: "",
      links: [],
    },

    {
      title: "Larsen & Toubro Defence - Counter Drone System",
      dates: "2021 - 2023",
      location: "Bangalore, India",
      description:
        "Led the development of a sophisticated Counter Drone System, encompassing the detection, identification, and mitigation of drone activity to ensure secure airspace. Offline Mapping: Utilized mbtiles from OpenTiles for offline map generation, providing reliable and detailed mapping capabilities even without internet connectivity. Geospatial Visualization: Employed React Leaflet to visually represent and highlight key system components, including radar, jammers, drones, and RF detectors, enhancing situational awareness and operational efficiency. Detection Algorithms: Developed and implemented logic for complex calculations to accurately detect drone activity within a specified radius, ensuring precise and reliable identification. System Synchronization: Ensured seamless synchronization among various system components, facilitating coordinated responses and effective mitigation strategies. Performance Optimization: Focused on optimizing the system for real-time performance, enabling rapid detection and response to potential threats.",
      image: "/l&t.png",
      mlh: "",
      links: [],
    },

    {
      title: "Radian Finserv Gold Loan Platform",
      dates: "2021 - 2023",
      location: "Bangalore, India",
      description:
        "Engineered a comprehensive gold loan platform featuring a customer mobile app and a React-based CRM for seamless interaction between customers and bank officials. Streamlined Loan Application Process: Leveraged gold as collateral, ensuring secure transactions and efficient processing. Real-Time Tracking: Implemented live tracking functionalities using React Leaflet and Google Maps API to monitor the real-time location of gold collectors, enhancing operational visibility and security. Analytical Capabilities: Enhanced analytical insights with APEX charts, enabling the rendering of multiple dashboards for detailed performance monitoring and decision-making. Integration and Scalability: Ensured seamless integration of payment systems and scalable architecture to accommodate growing demands and ensure robust performance under varying loads.",
      image: "/radian.png",
      mlh: "",
      links: [],
    },

    {
      title: "Bot360 - Camsdata",
      dates: "2019 - 2021",
      location: "Bangalore, India",
      description:
        "Developed an advanced web-based application designed for conducting interviews with integrated features such as sentiment analysis, facial recognition, and automated resume parsing for streamlined candidate evaluation. Resume Parsing and Application Creation: Enabled recruiters to upload resumes, automatically parse them, and generate candidate applications within the platform, enhancing efficiency in the hiring process. Interview Features: Utilized Angular and Angular Material to facilitate real-time video interviews, integrating WebRTC and Socket.io for seamless communication. Facial Recognition and Sentiment Analysis: Implemented facial recognition APIs for real-time evaluation of candidate expressions and sentiment analysis during interviews, aiding in assessment. Collaborative Tools: Included interactive features like chat, canvas, and a code editor for technical assessments, fostering effective communication and evaluation. Automated Reporting: Automated the generation of PDF reports based on interviewer feedback and assessment data, simplifying decision-making for hiring managers. Scalability and Performance: Built with scalable architecture to handle multiple concurrent interviews and ensure high performance under varying workloads, accommodating growing recruitment needs. User Interface Design: Provided a modern and intuitive user interface with Angular Material, optimizing user experience across devices for recruiters and candidates alike.",
      image: "/bot360.jpeg",
      mlh: "",
      links: [],
    },
  ],
} as const;
