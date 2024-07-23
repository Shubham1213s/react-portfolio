/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shubham Saptasagare",
  title: "Hi all, I am Shubham",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Expressjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1BM4lc59M40sESatH0xlzK4pNXVbljSuE/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shubham1213s",
  linkedin: "https://www.linkedin.com/in/shubham-saptasagar/",
  gmail: "saptsagare2020@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/shubham.saptasagare.5",
  medium: "https://medium.com/@saptsagare2020",
  stackoverflow: "https://stackoverflow.com/users/26366286/shubham-saptasagare",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end - User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications using MERN Stacks"),
    emoji(
      "⚡ Secure authentication and user management in MERN stack applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "MIT Academy Of Engineering",
      logo: require("./assets/images/images.png"),
      subHeader: "Bachelor Of Technology in Electronics and Telecommunication",
      duration: "August 2020 - July 2024",
      desc: "Participated in the Technophilia Event",
      descBullets: [
        "Comprehensive knowledge in various subjects with a focus on IoT as an elective",
        "CGPA - 8.57"
      ]
    },
    {
      schoolName: "Maharashtra State Board Of Higher Secondary Education",
      logo: require("./assets/images/msbt.png"),
      subHeader: "HSC",
      duration: "June 2019 - April 2020",
      desc: "",
      descBullets: [
        "Learned subjects like Physics, Chemistry, Maths with Computer Science as elective",
        "Percentage - 71.23"
      ]
    },
    {
      schoolName: "Maharashtra State Board Of Secondary Education",
      logo: require("./assets/images/msbt.png"),
      subHeader: "SSC",
      duration: "June 2017 - March 2018",
      desc: "",
      descBullets: [
        "I studied various comprehensive subjects including Marathi, Hindi, English, Mathematics (Algebra and Geometry), History, and Geography",
        "Percentage - 89.20"
      ]
    }

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Caainos",
      companylogo: require("./assets/images/caainos.png"),
      date: "Sep 2023 – June 2024",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Worked on various automation projects",
        "Created and deployed an MQTT broker on AWS with SSL security",
        "Developed a Node.js server utilizing the HTTP protocol",
        "Implemented AT commands for device communication and control"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Zetpeak",
      companylogo: require("./assets/images/zet.png"),
      date: "June 2023 – Sep 2023",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Developed the frontend of the company website",
        "Worked on UI/UX development using Figma",
        "Translated UI/UX designs into functional frontend code"
      ]
    },
    {
      role: "SQL Intern",
      company: "Celebel",
      companylogo: require("./assets/images/celebal.png"),
      date: "May 2023 – July 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Developed and optimized SQL queries.",
        "Managed and maintained a student database"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Highlighting My Web Development Projects",
  projects: [
    {
      image: require("./assets/images/career.png"),
      projectName: "Job Portal Web App",
      projectDesc: "Job Portal Website Developed Using MERN Stack",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://career-connect-1.netlify.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/zetpeak.png"),
      projectName: "Zetpeak",
      projectDesc: "Designed and Developed Company Website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://zetpeak.onrender.com/"
        }
      ]
    },
    {
      image: require("./assets/images/weather.webp"),
      projectName: "Live Weather App",
      projectDesc: "Developed weather application using fetchAPI and expressJS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://live-weather-app-h3ld.onrender.com/"
        }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "NPTEL - Cloud Computing",
      subtitle:
        "Achieved 70% in NPTEL certification, gained valuable theoretical knowledge.",
      image: require("./assets/images/nptel.png"),
      imageAlt: "NPTEL",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1BM4lc59M40sESatH0xlzK4pNXVbljSuE/view"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Postman - API Fundamentals",
      subtitle:
        "Earned Postman API Fundamentals Student Expert certification",
      image: require("./assets/images/postman.png"),
      imageAlt: "Postman Certification",
      footerLink: [
        {
          name: "View Certification",
          url: "https://badgr.com/public/assertions/M6zaJflmSN2jM8zy6fq_MQ"
        }
      ]
    },

    {
      title: "Responsive Web Design",
      subtitle: "Completed frontend coding tasks with optimised code",
      image: require("./assets/images/freecode.png"),
      imageAlt: "freeCodeCamp",
      footerLink: [
        {name: "Certification", url: "https://www.freecodecamp.org/certification/shubham202/responsive-web-design"},
        {
          name: "Final Projects",
          url: "https://www.freecodecamp.org/certification/shubham202/responsive-web-design"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing websites, I love to write and share valuable knowledge from what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@saptsagare2020/how-to-build-a-smart-irrigation-system-with-lora-2bae4817a1eb",
      title: "How to Build a Smart Irrigation System with LoRa ",
      description:
        "A step-by-step guide to creating an efficient and remote-controlled irrigation system using LoRa technology for optimal plant watering and resource conservation."
    },
    {
      url: "https://medium.com/@saptsagare2020/why-mqtt-understanding-the-power-and-practicality-of-mqtt-in-iot-bd3e9341c5e3",
      title: "Why MQTT: Understanding the Power and Practicality of MQTT in IoT",
      description:
        "Explore the Essential Role of MQTT in IoT for efficient, scalable, and reliable device communication across diverse applications"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ShubSapt1", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  resumeSection,
  contactInfo,
  twitterDetails,
  isHireable
};
