const portfolioData = {
  personalInfo: {
    name: "KARTHIKEYAN E",
    title: "Freelancer | React.js • Node.js • JavaScript | Open to Full-Stack Roles | 50+ Certified",
    phone: "9600630469",
    whatsapp: "9600630469",
    instagram: "777__karthi",
    email: "karthikeyaneswaran2006@gmail.com",
    location: "Tirupur, Tamil Nadu",
    linkedin: "https://linkedin.com/in/karthikeyaneswaran",
    github: "https://github.com/Karthikeyaneswaran",
    portfolio: "https://karthikeyaneswaran.github.io/portfolio",
    summary: "I'm Karthikeyan E, an Information Technology undergraduate (2026) with a strong passion for building responsive, user-centric web applications. Over the past year, I've gained hands-on experience in Freelancing, React.js, TypeScript, and REST APIs, while also earning 50+ industry-recognized certifications from Meta, IBM, Google, Microsoft, and others."
  },
  skills: [
    { category: "Languages", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Python", "Java", "C", "C++"] },
    { category: "Frameworks & Library", items: ["React.js", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS", "MERN Stack"] },
    { category: "Databases", items: ["MongoDB", "MySQL"] },
    { category: "Cybersecurity & IoT", items: ["Zscaler Zero Trust Exchange", "Cybersecurity Tools", "Internet of Things (IoT)", "Industrial Internet of Things (IIoT)", "Privacy Protection"] },
    { category: "Tools & DevOps", items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Android Studio", "Blender", "Microsoft Power BI", "CI/CD basics"] },
    { category: "Methodologies", items: ["Agile / Scrum", "REST API Integration", "Debugging", "Responsive Design", "CRUD", "OOP", "Software Engineering Practices"] },
    { category: "Soft Skills & Leadership", items: ["Teamwork", "Active Listening", "Collaboration", "Time Management", "Problem-Solving", "Team Leadership", "Technical Support"] }
  ],
  experience: [
    {
      role: "Artificial Intelligence and Machine Development Intern",
      company: "Kodacy",
      location: "Remote",
      duration: "Dec 2024 - Jan 2025",
      highlights: [
        "Gained hands-on experience in Artificial Intelligence (AI) and intelligence systems concepts.",
        "Built and experimented with models, applying theoretical AI foundations to computational workflows.",
        "Collaborated on designing intelligent solutions and analyzing model behavior."
      ]
    },
    {
      role: "Web Development Intern",
      company: "Prodigy InfoTech",
      location: "Remote",
      duration: "May 2024",
      highlights: [
        "Developed 5+ responsive web pages using HTML5, CSS3, and JavaScript, improving cross-browser compatibility across Chrome, Firefox, and Safari.",
        "Utilized Git and GitHub for version control across a 4-member team, maintaining clean commit history and resolving 10+ merge conflicts.",
        "Built reusable interactive UI components that reduced average page load time by approximately 15% through optimized DOM manipulation.",
        "Collaborated in an agile workflow with daily check-ins, debugging tasks, and code reviews using VS Code and GitHub."
      ]
    },
    {
      role: "Human Resource Intern",
      company: "Marpu Foundation",
      location: "Remote",
      duration: "Jul 2024",
      highlights: [
        "Collaborated with cross-functional teams to align HR onboarding strategies with the organization's mission-driven culture.",
        "Coordinated communications and scheduling for a volunteer team of 15+, improving onboarding process efficiency."
      ]
    },
    {
      role: "Social Media Marketing Intern",
      company: "Kshitiksha Foundation",
      location: "Remote",
      duration: "Apr 2024 - May 2024",
      highlights: [
        "Designed 10+ graphics and short-form videos that highlighted the foundation's social impact stories, increasing engagement on posts.",
        "Contributed to a digital outreach campaign that expanded the foundation's online reach through consistent, targeted content delivery."
      ]
    }
  ],
  projects: [
    {
      title: "Sri Thulasibaba Mutt Website",
      tech: ["HTML5", "CSS3", "JavaScript", "Multi-language Support (i18n)", "Responsive Design", "Hosting & Deployment"],
      description: "Designed, developed, and deployed the official multi-language website for Sri Thulasibaba Mutt in Rameswaram, a historic 250-year-old spiritual centre.",
      highlights: [
        "Architected and implemented localization support enabling content delivery in 6 major Indian languages.",
        "Created an intuitive UI/UX navigation structure, optimizing access to historical records, cultural activities, and visitor info.",
        "Managed the complete freelance lifecycle: client communication, requirement design, custom implementation, and hosting deployment."
      ],
      links: {
        live: "https://thulasibaba.in"
      }
    },
    {
      title: "Pandit Anandam Siddha & Ayurveda Pharmacy Website",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Hosting & Deployment"],
      description: "Designed, developed, and deployed the official web platform for Pandit Anandam Siddha & Ayurveda Marunthagam, a trusted pharmacy in Rameswaram with over 15 years of community service.",
      highlights: [
        "Handled the entire end-to-end product lifecycle including planning, UI/UX design, development, and hosting.",
        "Translated the client's business vision into a production-ready, highly responsive website showcasing services and products.",
        "Managed professional client communication, requirements gathering, payment milestone scheduling, and final product delivery."
      ],
      links: {
        live: "https://www.anandhammarunthagam.in"
      }
    },
    {
      title: "Smart Attendance Monitoring System for Examinations Using Python",
      tech: ["Python", "Django", "HTML5", "CSS3", "JavaScript"],
      description: "Designed and developed a web-based system to digitize and automate exam attendance management for college exam cells, replacing manual paper-based tracking.",
      highlights: [
        "Features role-based logins for Admins, Teachers, and Students to access customized portals.",
        "Integrated Excel-based seating arrangement upload to automatically generate digital attendance records.",
        "Eliminated manual cross-checking, significantly reducing administrative workload and exam-day human errors.",
        "Successfully built, tested, and demonstrated as part of final semester project evaluation.",
        "Associated with Sri Krishna Adithya College of Arts and Science."
      ],
      links: {
        github: "https://github.com/Karthikeyaneswaran",
        live: "https://karthikeyanprojects.github.io/sampleprojectiterface/"
      }
    },
    {
      title: "Book Selling E-Commerce Website",
      tech: ["HTML5", "CSS3", "JavaScript"],
      description: "Designed and developed a fully responsive e-commerce platform featuring a catalog of 200+ book listings, shopping cart, user login/authentication, and search functionality.",
      highlights: [
        "Implemented intuitive UI/UX patterns that improved navigation flow, resulting in a simulated 25% boost in conversion rate during testing.",
        "Ensured cross-device compatibility across 3 breakpoints (mobile, tablet, desktop) using CSS Flexbox and media queries."
      ],
      links: {
        github: "https://github.com/Karthikeyaneswaran/bookify",
        live: "https://karthikeyaneswaran.github.io/bookify/"
      }
    },
    {
      title: "Code Editor",
      tech: ["HTML5", "CSS3", "JavaScript"],
      description: "Built a browser-based, interactive Code Editor that allows users to write and execute HTML, CSS, and JavaScript in real-time with an instant live preview panel.",
      highlights: [
        "Utilized native DOM manipulation and iframe rendering to execute code client-side, achieving zero-latency rendering.",
        "Designed a clean dual-pane editor interface optimizing workspace layout for mobile and desktop screens."
      ],
      links: {
        github: "https://github.com/Karthikeyaneswaran/Code-Editor",
        live: "https://karthikeyaneswaran.github.io/Code-Editor/"
      }
    },
    {
      title: "Income & Expense Tracker",
      tech: ["HTML5", "CSS3", "JavaScript"],
      description: "Developed a responsive dynamic income and expense tracking application enabling users to log transactions, filter by categories, and visualize real-time balance calculations.",
      highlights: [
        "Designed a sleek glassmorphic dashboard interface leveraging local storage to persist user transaction history across sessions.",
        "Integrated custom filters to analyze financial trends over weekly and monthly periods."
      ],
      links: {
        github: "https://github.com/Karthikeyaneswaran/Income-and-Expense-Tracker",
        live: "https://karthikeyaneswaran.github.io/Income-and-Expense-Tracker/"
      }
    },
    {
      title: "Notes Taking Application",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      description: "Collaborated in a 3-member team to build a full-stack Notes App with complete CRUD operations, user authentication, and real-time UI updates.",
      highlights: [
        "Contributed to REST API integration between the React.js frontend and Node.js/Express.js backend, handling 100+ API requests during testing.",
        "Implemented responsive React components with useState and useEffect hooks, reducing re-render cycles by 20% through memoization."
      ],
      links: {
        github: "https://github.com/Karthikeyaneswaran/MERN---Notes-Taking-App-Project-",
        live: "#"
      }
    },
    {
      title: "Personal Portfolio Website",
      tech: ["HTML5", "CSS3", "JavaScript"],
      description: "Built and deployed a responsive personal portfolio on GitHub Pages, showcasing 5+ projects, skills, and certifications with a clean professional design.",
      highlights: [
        "Achieved a Google Lighthouse performance score of 90+ through image optimization, lazy loading, and minified assets.",
        "Live at: karthikeyaneswaran.github.io/portfolio"
      ],
      links: {
        github: "https://github.com/Karthikeyaneswaran/portfolio",
        live: "https://karthikeyaneswaran.github.io/portfolio"
      }
    }
  ],
  education: [
    {
      degree: "Master's Degree — Information Technology",
      institution: "Hindusthan College Of Arts And Science",
      location: "Coimbatore, Tamil Nadu",
      duration: "2026 – Present",
      score: "Ongoing"
    },
    {
      degree: "Bachelor of Technology — Information Technology",
      institution: "Sri Krishna Adithya College of Arts and Science",
      location: "Coimbatore, Tamil Nadu",
      duration: "2023 – 2026",
      score: "CGPA: 8.63 / 10"
    },
    {
      degree: "HSC — Mathematics & Computer Science",
      institution: "Jayanthi Matric Higher Secondary School",
      location: "Tirupur, Tamil Nadu",
      duration: "2022 – 2023",
      score: "Score: 80%"
    }
  ],
  certifications: [
    {
      name: "Fundamentals of Cybersecurity (EDU-102)",
      issuer: "Zscaler",
      year: "2026",
      link: "https://verify.skilljar.com/c/4iszpj6u9sbq"
    },
    {
      name: "Cybersecurity Essentials",
      issuer: "NIIT Limited",
      year: "2026",
      link: "#"
    },
    {
      name: "Introduction to Internet of Things",
      issuer: "IIT Kharagpur — NPTEL",
      year: "2025",
      link: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS147S1070900172"
    },
    {
      name: "Junior Cybersecurity Analyst Career Path",
      issuer: "Cisco Networking Academy",
      year: "2025",
      link: "https://www.credly.com/badges/4898e72b-d57b-48e7-9006-eaaaf30c8200"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      year: "2025",
      link: "#"
    },
    {
      name: "Goldman Sachs - Software Engineering",
      issuer: "Forage",
      year: "2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/NPdeQ43o8P9HJmJzg_MBA4MnZTNFEoJZGnk_Hrzv5YgGpYEAYsCRP_1740891912898_completion_certificate.pdf"
    },
    {
      name: "Electronic Arts - Software Engineering",
      issuer: "Forage",
      year: "2024",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_Hrzv5YgGpYEAYsCRP_1733411595894_completion_certificate.pdf"
    },
    {
      name: "Cloud Computing",
      issuer: "IIT Kharagpur — NPTEL",
      year: "2024",
      link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS118S105910014903859699"
    },
    {
      name: "Google IT Support Professional Certificate",
      issuer: "Google / Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/H50IBBX7QJ8E"
    },
    {
      name: "Front-End Developer Certificate",
      issuer: "IBM / Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/DPKYQ6S2NEYC"
    },
    {
      name: "Front-End Developer Specialization",
      issuer: "Meta / Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/HPKMPNYAXDS8"
    },
    {
      name: "IBM Data Science - Specialization",
      issuer: "IBM",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/VCPXWZSXH7QA"
    },
    {
      name: "Cybersecurity and Privacy",
      issuer: "Microsoft / Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/QCQ9U1FRHFZV"
    },
    {
      name: "Getting Started with Git and GitHub",
      issuer: "IBM / Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/6MZ2FMLAFPYW"
    },
    {
      name: "Object Oriented Programming",
      issuer: "University of London / Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/FNGWHZE64XWH"
    },
    {
      name: "Strategic Leadership and Management",
      issuer: "Illinois Institute of Technology / Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/60BPM67PMWK6"
    },
    {
      name: "Microsoft IT Support Specialist",
      issuer: "Microsoft / Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/QF18NJRRB82J"
    },
    {
      name: "Applied Software Engineering Fundamentals",
      issuer: "IBM / Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/DPKYQ6S2NEYC"
    },
    {
      name: "Applied Data Science Capstone",
      issuer: "IBM / Coursera",
      year: "2024",
      link: "https://www.credly.com/badges/2cbd510d-35c6-4860-b50d-5a06499cca7e/print"
    },
    {
      name: "Introduction to Open Source",
      issuer: "IBM / Cognitive Class",
      year: "2024",
      link: "https://courses.cognitiveclass.ai/certificates/48f01b77afe14a869e452126d9f130c6"
    },
    {
      name: "Introduction to Software Engineering",
      issuer: "IBM / Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/2XE9T7DVC2KS"
    },
    {
      name: "JavaScript From Scratch",
      issuer: "Udemy",
      year: "2025",
      link: "https://www.udemy.com/certificate/UC-80905490-5898-4bde-8fef-50f5333fdf99"
    },
    {
      name: "Javascript For Beginners Complete Course",
      issuer: "Udemy",
      year: "2025",
      link: "https://www.udemy.com/certificate/UC-42da1518-03c7-4a0c-9131-2f2b3336c57f"
    },
    {
      name: "Core Java Specialization",
      issuer: "LearnQuest / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/specialization/F9M7Q05IKNE5"
    },
    {
      name: "Designing the Organization",
      issuer: "University of Illinois / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/0J8RZGLPY3FR"
    },
    {
      name: "Backend Development for .Net Full Stack",
      issuer: "Coursera",
      year: "2024",
      link: "https://coursera.org/verify/VV0KIOA66QI7"
    },
    {
      name: ".Net Full Stack Foundation",
      issuer: "Coursera",
      year: "2024",
      link: "https://coursera.org/verify/K4Z0H16KZVH6"
    },
    {
      name: "Data Visualization with Python",
      issuer: "IBM / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/DHVPWCH6B8K8"
    },
    {
      name: "IT Security - Defense against the digital dark arts",
      issuer: "Google / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/7LIFTQJKU1LF"
    },
    {
      name: "Being a researcher (in Information Science and Technology)",
      issuer: "Coursera",
      year: "2024",
      link: "https://coursera.org/verify/JNGNPCG08X3O"
    },
    {
      name: "Principles of UX-UI Design",
      issuer: "Meta / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/ZP7I79Y9Y1DW"
    },
    {
      name: "Databases and SQL for Data Science with Python",
      issuer: "IBM / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/VBVICHXKGV92"
    },
    {
      name: "Tools for Data Science",
      issuer: "IBM / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/ZIZEFFUAJQY6"
    },
    {
      name: "C++ Programming Classes and Data",
      issuer: "UC Santa Cruz / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/GA3GZLAETB4T"
    },
    {
      name: "Data Analysis with Python",
      issuer: "IBM / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/5WCM83C7UYNS"
    },
    {
      name: "The Bits and Bytes of Computer Networking",
      issuer: "Google / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/BYYTIFABQRM9"
    },
    {
      name: "System Administration and IT Infrastructure",
      issuer: "Google / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/84UETRLXP2D5"
    },
    {
      name: "Data Science Methodology",
      issuer: "IBM / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/OTA93OH79B6W"
    },
    {
      name: "Essential Aspects of Software, Hardware, and Data",
      issuer: "Coursera",
      year: "2024",
      link: "https://coursera.org/verify/4K9HME7T3W5U"
    },
    {
      name: "Process Groups and Processes in Project Management",
      issuer: "Coursera",
      year: "2024",
      link: "https://coursera.org/verify/IC8RR7LXUWR0"
    },
    {
      name: "Data Scientist Career Guide and Interview",
      issuer: "IBM / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/5TJK7K9B81YS"
    },
    {
      name: "Google AI Essentials",
      issuer: "Google / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/F0Y06076T34I"
    },
    {
      name: "Managing the Organization",
      issuer: "University of Illinois / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/R0RPA696HR2I"
    },
    {
      name: "Google SEO Fundamentals",
      issuer: "UC Davis / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/KC64TCLWZ2U2"
    },
    {
      name: "Python Project for Data Science",
      issuer: "IBM / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/BISPDTF1JEG0"
    },
    {
      name: "Operating Systems and You- Becoming a Power",
      issuer: "Google / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/ASTRKHXYXUTL"
    },
    {
      name: "Becoming an SAP Professional",
      issuer: "SAP / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/3VHR5ISKFQO4"
    },
    {
      name: "Version Control",
      issuer: "Meta / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/UH2D8KN687TB"
    },
    {
      name: "Designing User Interfaces and Experiences (UI-UX)",
      issuer: "Coursera",
      year: "2024",
      link: "https://coursera.org/verify/8WPHSPRCUG0L"
    },
    {
      name: "Harnessing the Power of Data with Power BI",
      issuer: "Microsoft / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/L07P7500YR9I"
    },
    {
      name: "Build Your Professional ePortfolio in English",
      issuer: "Georgia Tech / Coursera",
      year: "2024",
      link: "https://coursera.org/verify/6P0G1EVDV0JN"
    }
  ],
  codingProfiles: {
    leetcode: "https://leetcode.com/u/Karthikeyaneswaran2006",
    geeksforgeeks: "https://www.geeksforgeeks.org/user/karthikeyanek78y"
  }
};

// Export for simple browser usage
if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
