const juniorFrontendContent = {
  about:
    "At Apptriangle Limited, we build innovative digital products that make a difference. Our team values creativity, clean code, and collaboration. We're looking for a passionate Junior Frontend Developer who loves turning designs into functional, responsive, and user friendly web experiences.",
  responsibilities: [
    "Develop responsive and interactive user interfaces using HTML, CSS, and JavaScript (React, Next.js, or similar frameworks preferred).",
    "Work closely with designers and backend developers to implement new features and improve existing ones.",
    "Ensure cross browser compatibility and performance optimization.",
    "Participate in code reviews and contribute to maintaining code quality.",
    "Stay updated with modern frontend technologies and best practices.",
  ],
  requirements: [
    "Bachelor's degree in Computer Science, IT, or a related field (or equivalent experience).",
    "0-2 years of experience in frontend web development.",
    "Good understanding of HTML5, CSS3, JavaScript, and responsive design.",
    "Familiarity with React.js, Next.js, or similar frameworks is a plus.",
    "Basic understanding of Git and version control.",
    "Eagerness to learn and grow in a fast-paced environment.",
  ],
  preferredTitle: "Nice to Have",
  preferred: [
    "Experience with UI/UX tools like Figma or Adobe XD.",
    "Knowledge of RESTful APIs and JSON.",
    "Understanding of web performance optimization.",
  ],
  benefitsTitle: "What We Offer",
  benefits: [
    "Friendly and supportive learning environment.",
    "Opportunities for professional growth and mentorship.",
    "Flexible working hours and a collaborative culture.",
    "Competitive salary and performance-based incentives.",
  ],
}

const uiUxContent = {
  about:
    "At Apptriangle Limited, we create cutting-edge digital solutions that empower businesses and delight users. We're looking for a talented UI/UX Developer who's passionate about crafting intuitive, beautiful, and functional interfaces that make a real impact.",
  responsibilities: [
    "Design and develop responsive, user centered web and mobile interfaces.",
    "Collaborate with developers, product managers, and stakeholders to translate ideas into engaging designs.",
    "Create wireframes, prototypes, and visual mockups using Figma, Adobe XD, or similar tools.",
    "Ensure design consistency and usability across platforms.",
    "Conduct user research and usability testing to validate design decisions.",
    "Optimize UI for performance, accessibility, and responsiveness.",
  ],
  requirements: [
    "Bachelor's degree in Design, Computer Science, or a related field (or equivalent experience).",
    "2+ years of experience in UI/UX design and front-end development.",
    "Strong proficiency in HTML, CSS, and JavaScript (React, Next.js, or similar frameworks is a plus).",
    "Expertise in Figma, Adobe XD, Sketch, or other design tools.",
    "A strong portfolio showcasing UI/UX design projects.",
    "Excellent communication and problem-solving skills.",
    "Understanding of responsive design and accessibility best practices.",
  ],
  preferredTitle: "Bonus Skills",
  preferred: [
    "Experience with motion design, prototyping, or animation tools.",
    "Familiarity with design systems and component based design.",
    "Knowledge of backend technologies (optional but appreciated).",
  ],
  benefitsTitle: "Why Join Us",
  benefits: [
    "Work with a passionate and creative team.",
    "Opportunity to shape digital experiences seen by thousands of users.",
    "Flexible working hours and remote-friendly culture.",
    "Competitive salary and growth opportunities.",
  ],
}

const seniorPythonContent = {
  about:
    "Apptriangle is a fast growing IT solutions provider specializing in software development, automation, and digital transformation. We're looking for a passionate Senior Python Developer to join our dynamic team and help build scalable, high-performance applications for clients across industries.",
  responsibilities: [
    "Design, develop, and maintain efficient, reusable, and reliable Python code.",
    "Build APIs, backend systems, and integrations with third party services.",
    "Collaborate with front-end developers, DevOps, and product teams to deliver end-to-end solutions.",
    "Optimize applications for maximum speed and scalability.",
    "Conduct code reviews and mentor junior developers.",
    "Troubleshoot, debug, and upgrade existing systems.",
    "Contribute to architectural decisions and technology strategy.",
  ],
  requirements: [
    "Bachelor's degree in Computer Science, Engineering, or a related field.",
    "5+ years of hands-on experience with Python (Django, Flask, or FastAPI).",
    "Strong understanding of RESTful API design and development.",
    "Experience with relational databases (PostgreSQL, MySQL) and ORMs.",
    "Familiarity with Docker, Git, and CI/CD pipelines.",
    "Good understanding of cloud platforms (AWS, Azure, or GCP).",
    "Excellent problem-solving and communication skills.",
    "Ability to work independently and in a team environment.",
  ],
  preferredTitle: "Nice to Have",
  preferred: [
    "Experience with asynchronous frameworks (e.g., Celery, AsyncIO, RabbitMQ).",
    "Knowledge of microservices architecture.",
    "Familiarity with frontend technologies (React, Vue.js) for full-stack collaboration.",
    "Experience with testing frameworks (PyTest, UnitTest).",
  ],
  benefitsTitle: "Benefits",
  benefits: [
    "Competitive salary based on experience.",
    "Flexible working hours & remote work options.",
    "Career growth opportunities and continuous learning.",
    "Friendly, collaborative work culture.",
  ],
}

export const jobs = [
  {
    slug: "jr-frontend-developer-2",
    title: "Jr. Frontend Developer",
    location: "Niketan, Gulshan 1, Dhaka 1212.",
    type: "Full-time",
    level: "Entry to Mid Level",
    expired: false,
    ...juniorFrontendContent,
  },
  {
    slug: "react-developer",
    title: "React Developer",
    location: "Niketan, Gulshan 1, Dhaka 1212",
    type: "Full time / Contract",
    level: "Mid to Senior Level",
    expired: false,
    ...uiUxContent,
  },
  {
    slug: "next-js-developer",
    title: "Next Js Developer",
    location: "[Your City or Remote]",
    type: "Full time",
    level: "Senior (5+ years)",
    expired: true,
    ...seniorPythonContent,
  },
  {
    slug: "it-specialist",
    title: "IT Specialist",
    location: "Niketan, Gulshan 1, Dhaka 1212.",
    type: "Full-time",
    level: "Entry to Mid Level",
    expired: false,
    ...juniorFrontendContent,
  },
  {
    slug: "sqa-developer",
    title: "SQA Developer",
    location: "Niketan, Gulshan 1, Dhaka 1212",
    type: "Full time / Contract",
    level: "Mid to Senior Level",
    expired: false,
    ...uiUxContent,
  },
  {
    slug: "devops-developer",
    title: "DevOps Developer",
    location: "[Your City or Remote]",
    type: "Full time",
    level: "Senior (5+ years)",
    expired: true,
    ...seniorPythonContent,
  },
  {
    slug: "ui-ux-developer",
    title: "UI/UX Developer",
    location: "Niketan, Gulshan 1, Dhaka 1212",
    type: "Full time / Contract",
    level: "Mid to Senior Level",
    expired: false,
    ...uiUxContent,
  },
  {
    slug: "sr-python-developer",
    title: "Sr. Python Developer",
    location: "[Your City or Remote]",
    type: "Full time",
    level: "Senior (5+ years)",
    expired: true,
    ...seniorPythonContent,
  },
]

export type Job = (typeof jobs)[number]
