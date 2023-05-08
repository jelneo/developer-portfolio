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
  name: 'Jelena: Welcome',
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
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
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
          fontAwesomeClassName: 'logos:file-type-mysql',
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
    // {
    //   title: 'Cloud Infra-Architecture',
    //   lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji('⚡ Experience of working on multiple cloud platforms'),
    //     emoji(
    //       '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
    //     ),
    //     emoji(
    //       '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
    //     ),
    //   ],
    //   softwareSkills: [
    //     // ? Check README To get icon details
    //     {
    //       skillName: 'AWS',
    //       fontAwesomeClassName: 'logos:aws',
    //     },
    //     {
    //       skillName: 'Azure',
    //       fontAwesomeClassName: 'logos:microsoft-azure',
    //     },
    //     {
    //       skillName: 'Heroku',
    //       fontAwesomeClassName: 'logos:heroku-icon',
    //     },
    //     {
    //       skillName: 'PostgreSQL',
    //       fontAwesomeClassName: 'logos:postgresql',
    //     },
    //     {
    //       skillName: 'Github',
    //       fontAwesomeClassName: 'akar-icons:github-fill',
    //     },
    //     {
    //       skillName: 'Docker',
    //       fontAwesomeClassName: 'logos:docker-icon',
    //     },
    //     {
    //       skillName: 'Github Actions',
    //       fontAwesomeClassName: 'logos:github-actions',
    //     },
    //     {
    //       skillName: 'Cloudinary',
    //       fontAwesomeClassName: 'logos:cloudinary',
    //     },
    //     {
    //       skillName: 'Nginx',
    //       fontAwesomeClassName: 'logos:nginx',
    //     },
    //     {
    //       skillName: 'Sentry',
    //       fontAwesomeClassName: 'logos:sentry-icon',
    //     },
    //   ],
    // },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       fontAwesomeClassName: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       fontAwesomeClassName: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       fontAwesomeClassName: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       fontAwesomeClassName: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       fontAwesomeClassName: 'logos:ganache-icon',
    //     },
    //   ],
    // },
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
    desc: '',
    grade: 'Honours',
    // descBullets: [
      
    // ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Engineer (Backend)',
    company: 'Shopee Singapore',
    companyLogo: '/img/icons/common/shopee.png',
    date: 'Jun 2020 – Current',
    desc: 'In my previous team, I worked as backend software developer to develop API services in Go to integrate with payment gateways. Currently, I am in the wallet services team that is in charge of shoeepay wallets.',
  },
  {
    role: 'Backend Software Engineer (Intern)',
    company: 'PayPal Singapore',
    companyLogo: '/img/icons/common/paypal.png',
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
    companyLogo: '/img/icons/common/nus.png',
    date: 'Aug 2018 - Nov 2018',
    desc: 'Worked as a teaching assistant in charge of supervising 2 teams of 5 students each in a software engineering module (CS2103 Software Engineering)',
  },
  {
    role: 'Summer Analyst',
    company: 'Bank of America Merill Lynch',
    companyLogo: '/img/icons/common/boaml.png',
    date: 'Jul 2018 - Aug 2018',
    desc: 'Worked to enhance efficiency of software deployment for the global EFX team by adding more functionalities to existing Jenkins Continuous Delivery (CD) pipeline.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Food Delivery Service Web App (2020)',
    desc: 'School project for CS2102 Database Systems. The task was to develop a database application for a food delivery service (FDS) which allows customers to order food from restaurants and have them delivered to their locations by delivery riders. Tech stack: avascript, VueJS, ExpressJS, PostgreSQL',
    github: 'https://github.com/whenzei/fds-frontend/commits?author=jelneo',
    github: 'https://github.com/whenzei/fds-backend/commits?author=jelneo',
  },
  {
    name: 'Interactive Visualizations for Chicago ‘L’ Station Ridership (2019)',
    desc: 'Won 2nd place in Global IoT Datathon October 2019. Visualize metro ridership through interactive Plotly charts (calendar heat maps, box plots, etc.). Breaks down ridership data into three granularity levels: year, month and day, and station levels to visualize trends at broader or finer levels',
    github: 'https://github.com/jelneo/Interactive-Visualizations-for-Chicago-L-Station-Ridership',
  },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
// ];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// // See object prototype on /types/section.ts page
// export const seoData: SEODataType = {
//   title: 'Hanzla Tauqeer',
//   description:
//     'A passionate Full Stack Web Developer and Blockchain Developer.',
//   author: 'Hanzla Tauqeer',
//   image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
//   url: 'https://developer-portfolio-1hanzla100.vercel.app',
//   keywords: [
//     'Hanzla',
//     'Hanzla Tauqeer',
//     '@1hanzla100',
//     '1hanzla100',
//     'Portfolio',
//     'Hanzla Portfolio ',
//     'Hanzla Tauqeer Portfolio',
//   ],
// };
