import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Jelena Neo',
  title: "Hi everyone, I'm Jelena",
  description:
    "I'm a software engineer having experience developing the backend for applications using Go, Python, MySQL. For web applications, I've worked with Django, JavaScript, VueJS.",
  resumeLink:
    '',
};

export const openSource = {
  githubUserName: 'jelneo',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://jelneo.github.io/',
  linkedin: 'https://www.linkedin.com/in/1hanzla100/',
  github: 'https://github.com/jelena-neo',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'BACKEND DEVELOPER WHO LIKES TO EXPLORE BUILDING DIFFERENT PRODUCTS',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: 'https://jelneo.github.io/developer-portfolio/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building responsive and scalable microservices using Go, MySQL, caches and queueing mechanisms'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
        emoji('⚡ Building responsive static websites using Vue.js and Express.js'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'VueJS',
          fontAwesomeClassName: 'vscode-icons:file-type-vue',
        },
        {
          skillName: 'Go',
          fontAwesomeClassName: 'vscode-icons:file-type-go',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'MySQL',
          fontAwesomeClassName: 'vscode-icons:file-type-mysql',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Node',
          fontAwesomeClassName: 'vscode-icons:file-type-node',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Frontend', //Insert stack or technology you have experience in
    progressPercentage: '70', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Programming',
    progressPercentage: '90',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'National University of Singapore (NUS)',
    subHeader: 'Bachelor of Engineering (Computer Engineering)',
    duration: 'August 2016 - July 2020',
    desc: 'Relevant coursework: Data Structures and Algorithms, Software Engineering, Programming for Computer Interfaces, Computer Networks, Real-time Operating Systems, Data Science for the Internet of Things, Internet Architecture, Database Systems',
    grade: 'Honours',
    descBullets: [
      'CAP: 4.45 out of 5',
      'National University of Singapore ECE scholarship',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Engineer (Backend)',
    company: 'Shopee Singapore',
    companyLogo: 'https://jelneo.github.io/developer-portfolio/img/icons/common/shopee1.png',
    date: 'Jun 2020 – Current',
    desc: 'In my previous team, I worked as backend software developer to develop API services in Go to integrate with payment gateways. Currently, I am in the wallet services team that is in charge of shoeepay wallets.',
  },
  {
    role: 'Backend Software Engineer (Intern)',
    company: 'PayPal Singapore',
    companyLogo: 'https://jelneo.github.io/developer-portfolio/img/icons/common/paypal.png',
    date: 'Jan 2019 – Jun 2019',
    desc: 'I worked to enhance REST API orchestration layer for card servicing component written in Java and extedned card services to support tokens e.g. Google pay, Samsung pay.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Teaching Assistant',
    company: 'NUS',
    companyLogo: 'https://jelneo.github.io/developer-portfolio/img/icons/common/nus.png',
    date: 'Aug 2018 - Nov 2018',
    desc: 'Worked as a teaching assistant in charge of supervising 2 teams of 5 students each in a software engineering module (CS2103 Software Engineering)',
  },
  {
    role: 'Summer Analyst',
    company: 'Bank of America Merill Lynch',
    companyLogo: 'https://jelneo.github.io/developer-portfolio/img/icons/common/boaml.jpeg',
    date: 'Jul 2018 - Aug 2018',
    desc: 'Worked to enhance efficiency of software deployment for the global EFX team by adding more functionalities to existing Jenkins Continuous Delivery (CD) pipeline.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Food Delivery Service Web App (2020)',
    desc: 'School project for CS2102 Database Systems. The task was to develop a database application for a food delivery service (FDS) which allows customers to order food from restaurants and have them delivered to their locations by delivery riders. Tech stack: avascript, VueJS, ExpressJS, PostgreSQL',
    imgPath: 'https://jelneo.github.io/developer-portfolio/img/icons/common/fds.jpeg',
    githubFirst: {
      link: 'https://github.com/whenzei/fds-frontend/commits?author=jelneo',
      label: 'frontend'
    },
    githubSecond: {
      link: 'https://github.com/whenzei/fds-backend/commits?author=jelneo',
      label: 'backend'
    }
  },
  {
    name: 'Interactive Visualizations for Chicago ‘L’ Station Ridership (2019)',
    desc: 'Won 2nd place in Global IoT Datathon October 2019. Visualize metro ridership through interactive Plotly charts (calendar heat maps, box plots, etc.). Breaks down ridership data into three granularity levels: year, month and day, and station levels to visualize trends at broader or finer levels',
    githubFirst: {
      link: 'https://github.com/jelneo/Interactive-Visualizations-for-Chicago-L-Station-Ridership',
      label: '',
    }
  },
];

export const feedbacks: FeedbackType[] = [];

// export const feedbacks: FeedbackType[] = [
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
// ];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Jelena Neo',
  description:
    'I am a software engineer having experience developing the backend for applications using Go, Python, MySQL.',
  author: 'Jelena Neo',
  image: 'https://avatars.githubusercontent.com/u/28497440?v=4',
  url: 'https://jelneo.github.io/developer-portfolio',
  keywords: [
    'Jelena',
    'Jelena Neo',
    'jelneo',
  ],
};
