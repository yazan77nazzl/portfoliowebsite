import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  "personal": {
    "name": "Yazan Nazzal",
    "title": "Software Developer",
    "location": "Ramallah, Palestine",
    "email": "Yazan98nazzal@gmail.com",
    "phone": "+972 566017708",
    "github": "https://github.com/YazanNazal",
    "linkedin": "https://www.linkedin.com/in/yazan-nazzal-124287239/",
    "summary": "Software Developer with experience in frontend and full-stack development using React, React Native, Angular, and .NET Core. Focused on building scalable, maintainable applications, writing clean code, and creating thoughtful user experiences through collaboration and continuous learning."
  },
  "experience": [
    {
      "id": "emicrolearn",
      "company": "eMicrolearn (Subsidiary of Pitman)",
      "position": "Front-End Developer",
      "location": "Remote",
      "startDate": "Dec 2022",
      "endDate": "Jul 2025",
      "current": false,
      "description": [
        "Handling front-end development of the innovative iBook digital learning platform, delivering responsive and user-friendly interfaces.",
        "Collaborate with cross-functional teams to build high-quality features, optimize performance, and improve user engagement globally.",
        "Maintain clean, scalable React code following best practices and modern development standards."
      ],
      "technologies": [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST APIs",
        "Agile"
      ],
      "highlights": [
        "Delivered responsive interfaces for a global digital learning platform",
        "Collaborated with cross-functional teams across multiple time zones",
        "Maintained high code quality standards through code reviews and best practices"
      ]
    },
    {
      "id": "hexasol",
      "company": "HexaSol",
      "position": "React Developer",
      "location": "Jenin",
      "startDate": "Nov 2022",
      "endDate": "Apr 2023",
      "current": false,
      "description": [
        "Developed and maintained ReactJS web applications with a focus on performance and responsiveness.",
        "Led front-end development for the \"Hakini\" React Native project.",
        "Built an MVP mobile app for AZEZA, ensuring timely delivery and high quality.",
        "Contributed actively to code reviews and team knowledge sharing."
      ],
      "technologies": [
        "React",
        "React Native",
        "JavaScript",
        "Mobile Development",
        "MVP Development"
      ],
      "highlights": [
        "Led front-end development for Hakini React Native project",
        "Delivered AZEZA MVP mobile app on schedule",
        "Active contributor to code reviews and team knowledge sharing"
      ]
    },
    {
      "id": "iconnect",
      "company": "IConnect Tech",
      "position": "Full-Stack Developer Trainee",
      "location": "Ramallah",
      "startDate": "Aug 2022",
      "endDate": "Oct 2022",
      "current": false,
      "description": [
        "Completed intensive training in Angular and .NET Core, building multiple projects to solidify full-stack development skills.",
        "Gained practical experience in API development, database design, and frontend-backend integration under expert mentorship."
      ],
      "technologies": [
        "Angular",
        ".NET Core",
        "C#",
        "SQL Server",
        "API Development",
        "Database Design"
      ],
      "highlights": [
        "Completed intensive full-stack training program",
        "Built multiple projects integrating Angular frontend with .NET Core backend",
        "Gained hands-on experience with API development and database design"
      ]
    }
  ],
  "education": [
    {
      "id": "bachelor",
      "degree": "Bachelor of Computer System Engineering",
      "institution": "Arab American University",
      "location": "Jenin, Palestine"
    },
    {
      "id": "highschool",
      "degree": "High School Certificate – Tawjihi (Scientific)",
      "institution": "Qabatiya Secondary School",
      "location": "Jenin, Palestine"
    }
  ],
  "skills": [
    {
      "category": "Frontend",
      "skills": [
        {
          "name": "React JS"
        },
        {
          "name": "React Native"
        },
        {
          "name": "Angular"
        },
        {
          "name": "HTML5"
        },
        {
          "name": "CSS3"
        }
      ]
    },
    {
      "category": "Backend",
      "skills": [
        {
          "name": ".NET Core"
        },
        {
          "name": "Firebase"
        },
        {
          "name": "MongoDB"
        },
        {
          "name": "SQL Server"
        }
      ]
    },
    {
      "category": "Mobile Development",
      "skills": [
        {
          "name": "Flutter"
        },
        {
          "name": "React Native"
        }
      ]
    },
    {
      "category": "Programming Languages",
      "skills": [
        {
          "name": "C++"
        },
        {
          "name": "C#"
        },
        {
          "name": "Dart"
        },
        {
          "name": "JavaScript"
        }
      ]
    },
    {
      "category": "Tools & Concepts",
      "skills": [
        {
          "name": "OOP"
        },
        {
          "name": "Data Structures"
        },
        {
          "name": "REST APIs"
        },
        {
          "name": "Agile Methodologies"
        }
      ]
    },
    {
      "category": "Soft Skills",
      "skills": [
        {
          "name": "Problem Solving"
        },
        {
          "name": "Collaboration"
        },
        {
          "name": "Communication"
        }
      ]
    }
  ],
  "projects": [
    {
      "id": "apartment-reservation",
      "title": "Apartment Reservation Mobile App",
      "description": "A Flutter mobile application featuring real-time apartment booking and a user-friendly interface.",
      "technologies": [
        "Flutter"
      ],
      "category": "mobile",
      "featured": true,
      "highlights": [
        "Real-time apartment booking",
        "User-friendly mobile interface"
      ]
    },
    {
      "id": "auth-modules",
      "title": "Login/Signup Authentication Modules",
      "description": "Secure login and signup authentication modules implemented using React Native.",
      "technologies": [
        "React Native"
      ],
      "category": "mobile",
      "featured": true,
      "highlights": [
        "Login and signup modules",
        "Secure authentication"
      ]
    },
    {
      "id": "online-store",
      "title": "Online Store (E-Commerce Platform)",
      "description": "A full-stack ASP.NET Core 6 web application with product management and payment integration.",
      "technologies": [
        "ASP.NET Core 6"
      ],
      "category": "fullstack",
      "featured": true,
      "highlights": [
        "Product management",
        "Payment integration"
      ]
    },
    {
      "id": "guessing-game",
      "title": "Guessing Game Mobile App",
      "description": "A React Native guessing game focused on interactive gameplay and smooth animations.",
      "technologies": [
        "React Native"
      ],
      "category": "mobile",
      "featured": false,
      "highlights": [
        "Interactive gameplay",
        "Smooth animations"
      ]
    },
    {
      "id": "poc-react",
      "title": "ReactJS Proof of Concept",
      "description": "A ReactJS proof of concept created to validate new design approaches and improve user engagement.",
      "technologies": [
        "React JS"
      ],
      "category": "web",
      "featured": false,
      "highlights": [
        "Validation of new design approaches",
        "Focus on user engagement"
      ]
    }
  ],
  "languages": [
    {
      "name": "Arabic",
      "proficiency": "Native"
    },
    {
      "name": "English",
      "proficiency": "Professional working"
    }
  ],
  "references": [
    {
      "name": "Tahani Sabihat",
      "title": "Manager at eMicrolearn (Pitman)",
      "email": "Tahani.sbeahat@pitman-training.com",
      "company": "eMicrolearn / Pitman Training"
    },
    {
      "name": "Mr. Nader",
      "title": "Development Manager",
      "email": "gridsapps@gmail.com"
    }
  ]
};
