import swbotimg from "./assets/image.png"
import arcomixImg from './assets/arcomix.png'

const projects = [
    {
        title:"Matching Game",
        description:"This game was developed during my early stages of front-end developemnt learning. It is responsive, but the main goal was to exercise the logic behind the game, while learning jQuery. Play it on your desktop browser or any other device!",
        imgSrc: "https://user-images.githubusercontent.com/119897667/249859580-3cc2dbde-2759-4ac4-aad6-a4cb6cf925a6.png",
        stack: ["HTML", "CSS", "Bootstrap", "jQuery"],
        type: "Browser Game",
        live: "https://mclaramarinho.github.io/browser-matching-game/"
    },
    {
        title:"Verr Med",
        description:"Verr Med was created as a community outreach project, to help those who struggle with drug allergy. The user can search for a medicine and input their allergies to check if the medicine contains or not those allergens. The app calls an API to search the Anvisa (BR) database and is, currently, an ongoing project.",
        imgSrc: "https://user-images.githubusercontent.com/119897667/267396135-37271ae6-febc-4ef7-bfc2-348900b95dd5.png",
        stack: ["HTML", "CSS", "Bootstrap", "ReactJS"],
        type: "Web App",
        live:"https://verr-med.netlify.app/"
    },
    // {
    //     title:"Feel Fine",
    //     description:"",
    //     imgSrc: "https://user-images.githubusercontent.com/119897667/248408555-9d02c148-91b8-4dec-99a7-af98c6f89a40.png",
    //     stack: ["HTML", "CSS", "Bootstrap", "Javascript"],
    //     type: "Landing Page",
    //     live:"https://mclaramarinho.github.io/feel-fine-landing-page/"
    // }, IMPROVE MOBILE RESPONSIVITY AND DESIGN
    {
        title:"Snake Game",
        description:"My favorite game from when I was a child! It was a major programming logic challenge for me, who was still on the early stages of web-development studies. You can play it on your desktop browser or any other device.",
        imgSrc: "https://user-images.githubusercontent.com/119897667/252804889-961f0744-aa73-4465-9c61-f62820eecf16.png",
        stack: ["HTML", "CSS", "Javascript"],
        type: "Browser Game",
        live:"https://mclaramarinho.github.io/snake-game/"
    },
    // {
    //     title:"Where in the world",
    //     description:"",
    //     imgSrc: "https://user-images.githubusercontent.com/119897667/258516542-a864a562-d66e-4d10-820b-2c0e1bc9f15c.png",
    //     stack: ["HTML", "CSS", "ReactJS"],
    //     type: "Web App",
    //     live:"https://get-countries-info.netlify.app/"
    // }, MUST CHANGE RESPONSIVITY OF THE DARK THEME BTN
    {
        title:"To Do List",
        description:"A simple and effective To Do app, to track your To Do's. This app uses your local storage to store your tasks, so you do not lose them when the tab is closed or refreshed.",
        imgSrc: "https://user-images.githubusercontent.com/119897667/254635310-87bb9cc4-80d1-4ecd-88eb-1b46a8d0c881.png",
        stack: ["HTML", "CSS", "ReactJS"],
        type: "Web App",
        live:"https://todolist-react-challenge.netlify.app/"
    },
    {
        title:"Star Wars Bot",
        description:"A discord bot which uses the SWAPI - Star Wars API and GPT-3.5 for a fun experience. There are many commands that get info about Star Wars, some to get funny images of you and Jar Jar Binks, and some commands to receive AI-generated answers.",
        imgSrc: swbotimg,
        stack: ["Python", "Flask", "OpenAI API", "Discord.py"],
        type: "Discord Bot",
        live:"https://replit.com/@mclaramarinho/sw-bot?v=1"
    },
    {
        title:"Sistema de Agendamentos - Arcomix",
        description:"Front-end project of a delivery schedulling system for the Brazilian supermarket chain, Arcomix. It's designed to support 2 types of user (employee and supplier). The users can schedule and manage appointments, and also create and print PDF reports. ",
        imgSrc: arcomixImg,
        stack: ["HTML", "CSS", "Bootstrap", "ReactJS"],
        type: "Website",
        live:"https://replit.com/@mclaramarinho/sw-bot?v=1"
    },
    {
        title:"Utils Bot",
        description:"A bot with many useful commands, such as: QR code generator, URL shortener, OCR, translation, text sumup, and more.",
        imgSrc: "https://media.licdn.com/dms/image/D4D22AQHIG1l7xm__NA/feedshare-shrink_800/0/1699278987963?e=1701907200&v=beta&t=NXlWPb_3gv3fCnYCWvwFifl1aKuT0Z3k7YYNfTefkrE",
        stack: ["Python", "Flask", "OpenAI API", "Telegram Bot API"],
        type: "Telegram Bot",
        live:"https://replit.com/@mclaramarinho/tl-bot?v=1"
    },
]

export default projects