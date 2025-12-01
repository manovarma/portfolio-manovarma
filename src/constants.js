// =======================
//    PERSONAL DETAILS
// =======================

export const name = "Manovarma Krishnasamy";

// =======================
//       SERVICES
// =======================

export const services = [
  {
    title: "Data Science Student",
    icon: "https://csgeeek.github.io/web.png",
  },
  {
    title: "Data Analyst",
    icon: "https://csgeeek.github.io/web.png",
  },
  {
    title: "GIS & Analytics Enthusiast",
    icon: "https://csgeeek.github.io/web.png",
  },
];

// =======================
//       EXPERIENCE
// =======================

export const experiences = [
  // 2024
  {
    company: "Prodigy InfoTech",
    role: "Data Science Intern",
    duration: "October 2024",
    logo: "https://csgeeek.github.io/web.png",
    points: [
      "Worked on hands-on data science tasks including analysis and model building.",
      "Implemented data preprocessing, exploratory analysis, and basic ML workflows."
    ],
    url: "https://prodigyinfotech.dev"
  },
  {
    company: "Afame Technologies",
    role: "Data Science Intern",
    duration: "May 2024 - June 2024",
    logo: "https://csgeeek.github.io/web.png",
    points: [
      "Developed a machine learning model to predict sales based on advertisement spend.",
      "Performed feature engineering, model evaluation, and business insight generation.",
      "Supported analytical reporting and dashboard development for business decisions."
    ],
    url: "https://afame.in"
  },

  // 2023
  {
    company: "CGI",
    role: "DevOps Trainee",
    duration: "Sep 2023 - Dec 2023 (Training Program)",
    logo: "https://csgeeek.github.io/web.png",
    points: [
      "Hands-on training in cloud deployment, automation, CI/CD, and monitoring.",
      "Strengthened understanding of scalable cloud-based infrastructure."
    ],
    url: "https://www.cgi.com"
  },
  {
    company: "Lakshmi Engineering Industries",
    role: "Project Trainee – Cloud Based Software Sharing",
    duration: "Dec 2022 - May 2023",
    logo: "https://csgeeek.github.io/web.png",
    points: [
      "Worked on the project 'Cloud based software sharing with license validation'.",
      "Designed and validated a secure access and license management system.",
      "Gained practical exposure to real-world software development workflows."
    ],
    url: "https://www.indiamart.com/lakshmiengineeringindustries/"
  },

  // 2022
  {
    company: "SVS Foods",
    role: "Database Administrator Intern – Accounts & Sales",
    duration: "Jul 2022 - Sep 2022",
    logo: "https://csgeeek.github.io/web.png",
    points: [
      "Managed and updated daily Accounts and Sales data in the internal database.",
      "Ensured accuracy of customer, sales, and financial records through regular validation.",
      "Generated sales summaries and supported internal reporting for management.",
      "Collaborated with the Accounts team to streamline data entry and reduce record errors."
    ],
    url: "https://www.svsfoods.org"
  }
];

// =======================
//        CONTACT
// =======================

export const contact = {
  email: "manovarma2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/manovarma-krishnasamy-182023291",
  github: "https://github.com/manovarma2003",
  hackerrank: "https://www.hackerrank.com", // update with your username link
};

// =======================
//     EmailJS CONFIG
// =======================

export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
