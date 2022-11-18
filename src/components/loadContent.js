const loadContent=[
    {
        site:true,
        git:'https://github.com/Kaushan-Dutta/Weather-App',
        site:'https://peaceful-cliffs-90872.herokuapp.com/',
        image:require('../images/P1.png'),
        name:'WEATHER-APP',
        components:'EJS, HTML, CSS',
    },
    {
        site:true,
        git:'https://github.com/Kaushan-Dutta/NETFLIX_CLONE',
        site:'https://netflix-clone-seven-rouge.vercel.app/',
        image:require('../images/P2.jpg'),
        name:'NETFLIX-CLONE',
        components:'React, HTML, CSS, JS',
    },
    {
        site:false,
        git:'https://github.com/Kaushan-Dutta/GREETING_HARDHAT_DAPP',
        site:'',
        image:require('../images/P3.png'),
        name:'FULL FLEDGED BLOCKCHAIN',
        components:'Hardhat, Web3.js, React, Solidity, Ganache',
    },
    {
        site:false,
        git:'https://github.com/Kaushan-Dutta/SOLIDITY_BLOCKCHAIN',
        site:'',
        image:require('../images/P4.png'),
        name:'SMART CONTRACTS',
        components:'Solidity',
    },
    {
        site:false,
        git:'https://github.com/Kaushan-Dutta/Python',
        site:'',
        image:require('../images/P5.jpg'),
        name:'SPACE WAR',
        components:'Pygame, Python',
    },
    {
        site:false,
        git:'https://github.com/Kaushan-Dutta/HACKATHON',
        site:'',
        image:require('../images/P6.png'),
        name:'FULL STACK DEVELOPMENT',
        components:'HTML, CSS, JS, NodeJs, MongoDB',
    },
    {
        site:true,
        git:'https://github.com/Kaushan-Dutta/IEM-HACK',
        site:'https://tmdb-movies-iota.vercel.app/',
        image:require('../images/P7.png'),
        name:'TMDB WEBSITE',
        components:'React, HTML, CSS, JS, Firebase',
    }
   
]
const loadAchieve=[
    {
       image:require('../images/A1.jfif'),
       url:'https://www.linkedin.com/company/vlogbook/',
       content:'Working as main web developer and building the frontend part of the website, along with having session with interns.',
       name:'VLOG-BOOK',
},
{
    image:require('../images/A2.jpeg'),
    url:require('../documents/iem.pdf'),

           content:'Became the winner in web development of DevSprint Hackathon organized by IEM',

    name:'IEM-HACK',
},
{
    image:require('../images/A3.jpg'),
    url:'https://github.com/Kaushan-Dutta',

           content:'Love to do problem solving, currently 5⭐ in Hackerank, 2⭐ in codechef and >30 days streak in leetcode',

    name:'CODING',
},
{
    image:require('../images/A4.jpg'),
    url:'https://devfolio.co/@Kaushan5409',

           content:'Hackathon is something where I really love to participate, previously participated in Hacktoberfest, Hack The Mountains, Hack Odisha and some college events.',

    name:'HACKATHON',
},
{
    image:require('../images/A5.jpg'),
    url:require('../documents/Digital.pdf'),

           content:'Pursued Digital Marketing certificate from Google Digital Garage, as a way to learn something new and grab some knowledge in digital marketing',

    name:'DIGITAL MARKETING',
}
]
    

   

export default loadContent;
export {loadAchieve};