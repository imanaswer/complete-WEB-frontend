import images from './images';

const Menu = [
    {
        text: 'About us',
        link: '/About',
        // Adding the white text class to "About us"
        className: 'white-text'
    },
    {
        text: 'Services',
        link: '/services',
        // Adding the white text class to "Services"
        className: 'white-text'
    },

    {
        text: 'Process',
        link: '/process',
        className: 'white-text'
    },
    {
        text: 'Testimonials',
        link: '/testimonials',
        className: 'white-text'
    },
  
];

const ServicesData = [
    {
        titleone: 'App Development  ',
        titletwo: 'Services',
        link: '/Appdev',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'Web Development',
        titletwo: 'Services',
        link: '/Webdev',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'Cyber security',
        titletwo: 'Services',
        link: '/Cyber',
        itemclass: 'bdark',
        imgURL: images.services03,
    },
    {
        titleone: 'Cloud',
        titletwo: 'Services',
        link: '/Cloud',
        itemclass: 'blight',
        imgURL: images.services04,
    },
    {
        titleone: 'AI and Machine Learning',
        titletwo: 'Solutions',
        link: '/Aiml',
        itemclass: 'bgreen',
        imgURL: images.services05,
    },
    {
        titleone: 'Blockchain Development',
        titletwo: 'Solutions',
        link: '/Blockchain',
        itemclass: 'bdark',
        imgURL: images.services06,
    },
]
const CaseStudies = [
    {
        text: "Background: Lisa, a passionate entrepreneur in Silicon Valley, faced doubts and challenges while pursuing her health-tech startup dream.The Challenge: Struggling with technical hurdles and fierce competition, Lisa felt overwhelmed and discouraged, needing guidance to navigate entrepreneurship.",
        link: '#',
    },
    {
        text: "The Solution:Code 69, known for comprehensive startup support, provided Lisa with tailored solutions and empathetic guidance.",
        link: '#',
    },
    {
        text: "The Impact:Under Code 69's mentorship, Lisa regained confidence and clarity, turning her startup dream into a flourishing reality. Conclusion:Lisa's journey highlights Code 69's transformative role in reigniting startup dreams, emphasizing the power of empathy and support.",
        link: '#',
    },
];

const WorkingProcess = [
    {
        title: 'Consultation',
        description: 'Code 69 initiates the process with comprehensive consultations, meticulously assessing client requirements and objectives.',
    },
    {
        title: 'Research and Strategy Development',
        description: 'Employing rigorous research methodologies, Code 69 formulates bespoke strategies meticulously aligned with client goals.',
    },
    {
        title: 'Implementation',
        description: 'With a focus on precision and expertise, Code 69 executes strategies with meticulous attention to detail, translating concepts into tangible results.',
    },
    {
        title: 'Monitoring and Optimization',
        description: 'Code 69 adopts a proactive approach to monitoring progress, continuously refining strategies to ensure optimal performance and effectiveness.',
    },
    {
        title: 'Reporting and Communication',
        description: 'Transparent reporting mechanisms and clear communication channels are prioritized, fostering a collaborative environment and ensuring clients remain informed and engaged throughout the process.',
    },
    {
        title: 'Continual Improvement',
        description: 'Emphasizing a commitment to excellence, Code 69 prioritizes continual improvement, adapting strategies in response to evolving market dynamics and client feedback.',
    },

];


const Team = [
    {
        name: 'Ms. Harshitha Challa',
        position: 'Founder',
        info: "Ms. Harshitha Challa, the visionary founder of Code 69, leads our team with a passion for innovation and excellence. Under her leadership, we strive to pave the way for startup success.",
        foto: images.team01,
        linkedin: 'http://linkedin.com/in/harshitha-challa-255b482a1',
    },
    {
        name: 'Mr. Bibin S',
        position: 'CEO',
        info: "Mr. Bibin S, our esteemed CEO, guides Code 69 with visionary direction, fostering excellence and collaboration for industry-leading innovation and client satisfaction in every way.",
        foto: images.team02,
        linkedin: 'http://www.linkedin.com/in/bibin-s-a658a3207',
    },
    {
        name: 'Mr. Anaswer Ajay',
        position: 'COO',
        info: "Mr. Anaswer Ajay, spearheads operational excellence and strategic growth initiatives at Code 69. With his astute leadership and integrative approach, driving the company towards continued success.",
        foto: images.team03,
        linkedin: 'https://www.linkedin.com/in/anaswerajay/',
    },
    {
        name: 'Aadarsh T R',
        position: 'CSO',
        info: "Mr. Aadarsh T R, our visionary CSO, leads Code 69's technological innovation and development efforts with unparalleled expertise. Through his strategic guidance and inventive prowess, he drives our team to push the boundaries of technology.",
        foto: images.team04,
        linkedin: 'https://www.linkedin.com/in/aadarsh-t-r/',
    },
    {
        name: 'David',
        position: 'CPO',
        info: "David, an integral part of our technical team, brings a wealth of expertise and dedication to Code 69. With his passion for innovation and meticulous attention to detail, he plays a pivotal role in ensuring the seamless execution of our projects.",
        foto: images.team05,
        linkedin: 'https://www.linkedin.com/in/david-tony-veliath/',
    },
    {
        name: 'Vyshnav ',
        position: 'CTO',
        info: "Vyshnav, a valued member of our technical team, contributes his expertise and enthusiasm to Code 69. With a keen eye for detail and a commitment to excellence, he plays a crucial role in the successful implementation of our projects.",
        foto: images.team06,
        linkedin: 'https://www.linkedin.com/in/vyshnav-unnikrishnan-0a301a263/',
    },

];

const Testimonials = [
    {
        name: 'Rahul KS',
        position: 'Technical lead  at linx',
        testimonial: 'Code 69’s tailored solutions and hands-on support gave our startup the boost we needed. With them, we’re confident in our ability to innovate and succeed.',
    },
    {
        name: 'Smrithi Raj',
        position: 'Marketing Director at Dino Corp',
        testimonial: 'Code 69 understands startup challenges firsthand. Their industry expertise and personalized approach have been instrumental in our growth journey.',
    },
    {
        name: 'Bhuvan Shankar',
        position: 'Managing director at The big trillion',
        testimonial: 'Partnering with Code 69 was a game-changer. Their deep understanding of our needs made all the difference. With their expertise, we’re ready to take on any challenge.',
    },
    {
        name: 'Isha kaphar',
        position: 'Tech team',
        testimonial: 'Code 69’s industry expertise and personalized support have been invaluable to our startup’s success. Their tailored solutions have helped us navigate challenges and achieve milestones with confidence',
    },
];
// eslint-disable-next-line import/no-anonymous-default-export
export default { Menu, CaseStudies, WorkingProcess, Team, Testimonials, ServicesData };