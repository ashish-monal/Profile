import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.jpg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Profile',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/profile',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Ashish',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Ranjan',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Patna Bihar',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+916206416452',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'aviashishranjan@gmail.com',
  },

  {
    id: 9,
    title: 'Linkedin : ',
    description: 'https://www.linkedin.com/in/ashish-ranjan-a78800173/',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English,Hindi',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '12+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '3+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '2+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - PRESENT',
    title: 'Software Trainee <span> Carnation Infotech Pvt Ltd. </span>',
    desc: 'I started working as an android developer but after sometime I started working as a React native developer.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2021',
    title: 'PHP Developer Intern <span> The Spark Foundation </span>',
    desc: 'I started as a PHP developer and worked on Banking Project as a frontend developer.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 - 2020',
    title: 'Human Resource Intern <span> CashYear </span>',
    desc: 'I worked as a human resource intern for 3 month and learn how to create form and handle data. ',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018 - 2022',
    title: 'Gaya College of Engineering,Gaya <span> Aryabhatta Knowledge University </span>',
    desc: 'I have completed B.Tech Degress in Computer Science and Engineering with 8.61 CGPA.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016 - 2018',
    title: 'Intermediate examination <span> Central Board of Secondary Education </span>',
    desc: 'I have completed intermediate exam in Science with 78% of Marks.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015 - 2016',
    title: 'Matriculation examination <span> Central Board of Secondary Examination.</span>',
    desc: 'I have completed 10th standard exam with 9.8 CGPA of marks.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '85',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '85',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '75',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '70',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '95',
  },

  {
    id: 6,
    title: 'React Js',
    percentage: '85',
  },

  {
    id: 7,
    title: 'React Native',
    percentage: '88',
  },

  {
    id: 8,
    title: 'Android',
    percentage: '75',
  },
  {
    id: 8,
    title: 'Java',
    percentage: '60',
  },
  {
    id: 8,
    title: 'C & C++',
    percentage: '75',
  },
  {
    id: 8,
    title: 'Python',
    percentage: '60',
  },
  {
    id: 8,
    title: 'Kotlin',
    percentage: '75',
  },
];

export const profile1 = [
  {
    id: 1,
    img: Work1,
    title: 'Android App Developer',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Music Player',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Open Source',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Kotlin',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/ashish-monal/Music_Player',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'MegaMat',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Open Source',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS + JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/ashish-monal/megamart',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'React Native Developer',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Cheif Food',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Open Source',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Native + Firebase',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/ashish-monal/Food-OrderApp-Using-React-Native-CLI-master',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Python',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Python_Assistant',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Open Source',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/ashish-monal/Python_Assistant',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'PHP Developer',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Library-Management-System',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Open Source',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'PHP,HTML,CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/ashish-monal/Library-Management-System',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'WordPress',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'E-commerce Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Factory Box',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'WordPress',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://factoryboxin.business.site/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
