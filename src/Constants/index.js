const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "=", label: "GPA in Masters" },
  { value: 50, suffix: "+", label: "DataSet Analyzed" },
  { value: 5, suffix: "+", label: "Leadership Roles Held" },

];



const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Analytical Mindset",
    desc: "Leveraging Python, SQL, and data visualization to uncover patterns, optimize decisions, and deliver measurable impact across projects.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Cross-Functional Collaboration",
    desc: "Working seamlessly with developers, researchers, and stakeholders to align technical solutions with strategic objectives and user needs.",
  },
  {
    imgPath: "/images/time.png",
    title: "Efficiency & Reliability",
    desc: "Executing complex tasks with precision—refactoring code, automating workflows, and ensuring every deliverable meets quality and timeline goals.",
  },
];


const techStackImgs = [
  {
    name: "Tableau Developer",
    imgPath: "/images/logos/Tableau3.png",
  },
  {
    name: "PowerBI Analyst",
    imgPath: "/images/logos/PowerBi3.png",
  },
  {
    name: "ML Algorithm",
    imgPath: "/images/logos/Machinelearning.png",
  },
  {
    name: "SQL Developer",
    imgPath: "/images/logos/Sqlf1.png",
  },
  {
    name: "Google Cloud",
    imgPath: "/images/logos/Gcl2.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];


const expCards = [
  {
    review:
      "Vikalp brought a rare mix of technical excellence and product understanding. His optimizations and automation efforts made a visible impact on the platform’s speed, reliability, and testing efficiency.",
    imgPath: "/images/expa.jpg",
    logoPath: "/images/logoaa.png",
    title: "Software Development Intern",
    company: "Elite Care Technologies",
    date: "January 2025 – April 2025",
    responsibilities: [
      "Refactored React components and deferred non-critical assets, improving page load speed by 20%.",
      "Built and maintained 120+ Playwright end-to-end tests in CI pipelines, cutting issue resolution time by 30%.",
      "Integrated third-party vendor APIs using REST endpoints with OAuth2 for seamless data exchange across healthcare systems serving 5,000+ users.",
      "Conducted competitive benchmarking of 50+ healthtech platforms to inform product roadmap decisions.",
    ],
  },
  {
    review:
      "Vikalp’s analytical precision and ability to translate large datasets into insights made him an invaluable member of our research team. His dashboards improved how we interpret consumer behavior trends.",
    imgPath: "/images/expb.png",
    logoPath: "/images/logobg.png",
    title: "Graduate Research Assistant – Consumer Market Analysis",
    company: "Lawrence Technological University",
    date: "January 2025 – Present",
    responsibilities: [
      "Processed 5,200+ consumer reviews with VADER sentiment analysis and a custom domain lexicon.",
      "Developed an interactive Streamlit dashboard uncovering purchase behavior and sentiment patterns.",
      "Cleaned and modeled datasets exceeding 50K rows using Pandas and SQL window functions for trend analysis.",
      "Supported the publication of two peer-reviewed papers derived from the project’s findings.",
    ],
  },
  {
    review:
      "Vikalp delivered exceptional academic rigor and leadership during his sustainability research. His systematic literature review and presentation skills set a benchmark for our department.",
    imgPath: "/images/expb.png",
    logoPath: "/images/logobg.png",
    title: "Graduate Research Assistant – Business Sustainability",
    company: "Lawrence Technological University",
    date: "January 2024 – May 2024",
    responsibilities: [
      "Authored and presented a peer-reviewed research article on Business Sustainability and Leadership at LTU Research Day (100+ attendees).",
      "Analyzed 20+ academic papers using systematic literature review methods to identify ESG and circular economy trends.",
      "Created a comprehensive literature map cited in subsequent departmental research on sustainability initiatives.",
      "Collaborated with faculty to align insights with LTU’s long-term sustainability goals.",
    ],
  },
  {
    review:
      "At Infosys, Vikalp demonstrated strong leadership, process optimization, and a proactive approach to problem-solving. His technical improvements directly reduced costs and enhanced compliance for enterprise clients.",
    imgPath: "/images/expcf.png",
    logoPath: "/images/logocg.png",
    title: "Senior System Engineer",
    company: "Infosys",
    date: "June 2021 – August 2023",
    responsibilities: [
      "Implemented ILM archiving for SAP IS-Utilities on HANA, reducing hot-tier storage by 25% and optimizing system performance.",
      "Led Agile sprint planning for an 8-member team, maintaining a 98% uptime SLA and resolving 40+ high-priority performance issues.",
      "Configured GDPR-compliant archiving workflows and authored runbooks for smooth operations hand-off.",
      "Mentored two junior engineers on SAP best practices and performance tuning techniques.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
  name: "Dr. Hany Othman",
  mentions: "Cybersecurity Professor @Lawrence Technological University",
  review:
    "Vikalp is an outstanding individual with a strong academic background, excellent organizational skills, and a genuine passion for Information Technology. His analytical and research abilities, combined with meticulous documentation, project management, and time management, consistently impressed me throughout his academic journey. He approaches every task with professionalism and precision, demonstrating exceptional problem-solving skills and teamwork. Vikalp’s dedication, reliability, and communication skills make him an ideal candidate for any role he undertakes. I am confident he will be an asset to any organization he joins.",
    imgPath: "/images/client1.png",
  },
  {
  name: "Dr. Kamel Rushaidat",
  mentions: "@College of Business and Information Technology, Lawrence Technological University",
  review:
    "I had the pleasure of teaching Vikalp in Machine Learning and Database Management System, where he demonstrated exceptional understanding of complex technical concepts and a strong analytical mindset. His assignments consistently reflected attention to detail, clarity of thought, and a deep engagement with the material. Vikalp’s work ethic, enthusiasm for learning, and passion for research make him a valuable contributor to any project. I am confident that his technical expertise and commitment will make him an outstanding asset to any academic or professional setting.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Diego Calvo",
    mentions: "CTO @Elite Care Technologies",
    review:
      "Vikalp was an outstanding engineering intern at our health-tech startup in Spring 2025. He demonstrated exceptional technical expertise and initiative, developing a clear website architecture map and comprehensive documentation that accelerated onboarding for new team members. He also led our QA process by designing automated testing workflows and training the team to ensure every feature was thoroughly validated before deployment, significantly improving product reliability. Beyond his technical skill, he confidently represented our company at an investor conference in Austin, supporting our pitches with professionalism and versatility. I wholeheartedly recommend Vikalp for his ability to multitask, deliver high-quality results, and adapt to diverse challenges.",
    imgPath: "/images/client3.png",
  },
  {
  name: "Dr. A. Hattat",
  mentions: "@Lawrence Technological University",
  review:
    "Vikalp demonstrated exceptional analytical and technical skills during his work on consumer market research. His ability to process thousands of data points using advanced sentiment analysis and machine learning techniques was remarkable. He developed a dynamic Streamlit dashboard that revealed deep insights into purchasing behavior and contributed to multiple published papers. His precision, curiosity, and data-driven thinking make him an outstanding researcher and collaborator.",
    imgPath: "/images/client5.png",
  },
  {
  name: "Shristy Kapoor",
  mentions: "@Infosys",
  review:
    "Vikalp was an integral part of our engineering team at Infosys, where he consistently delivered high-impact technical solutions. He optimized SAP IS-Utilities systems on HANA, reducing storage costs and improving efficiency while maintaining top-tier SLA performance. His leadership during Agile sprints and mentorship of junior engineers showcased his reliability and collaborative mindset. Vikalp brings both technical depth and strong communication to every project he undertakes.",
    imgPath: "/images/client4.png",
  },
  {
  name: "Dr. Paryani",
  mentions: "@Lawrence Technological University",
  review:
    "Vikalp’s research contributions to our Business Sustainability project were exemplary. He conducted an extensive literature review and synthesized emerging trends in ESG reporting and circular economy practices into a comprehensive research map that guided future departmental studies. His writing clarity, analytical rigor, and interdisciplinary collaboration made him a key contributor to our publication and presentation efforts.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "Github",
    url: "https://github.com/VIKALP-C",
    imgPath: "/images/github3.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/vikalp-chaubey/",
    imgPath: "/images/ld3.jpeg",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};