import PROJECTSYNK from '../../assets/PROJECT SYNK.png';
import VIRTUALTHEATER from '../../assets/VITUAL THEATER.png';
import GAMEZ from '../../assets/GAMEZ.png'
import WHATZAPP from '../../assets/WHATZAPP.png'
import VIBRATE from '../../assets/VIBRATE.jpeg'
import REEL_TIMES from '../../assets/REEL TIMES.png'

// Virtual Theater
import VIRTUALTHEATER1 from "../../assets/VIRTUAL THEATER/01.png"
import VIRTUALTHEATER2 from "../../assets/VIRTUAL THEATER/02.png"
import VIRTUALTHEATER3 from "../../assets/VIRTUAL THEATER/03.png"
import VIRTUALTHEATER4 from "../../assets/VIRTUAL THEATER/04.png"
import VIRTUALTHEATER5 from "../../assets/VIRTUAL THEATER/05.png"
import VIRTUALTHEATER6 from "../../assets/VIRTUAL THEATER/06.png"
import VIRTUALTHEATER7 from "../../assets/VIRTUAL THEATER/07.png"
import VIRTUALTHEATER8 from "../../assets/VIRTUAL THEATER/08.png"

// project synk
import PROJECTSYNK1 from "../../assets/PROJECT SYNK/01.png"
import PROJECTSYNK2 from "../../assets/PROJECT SYNK/02.png"
import PROJECTSYNK3 from "../../assets/PROJECT SYNK/03.png"
import PROJECTSYNK4 from "../../assets/PROJECT SYNK/04.png"
import PROJECTSYNK5 from "../../assets/PROJECT SYNK/05.png"
import PROJECTSYNK6 from "../../assets/PROJECT SYNK/06.png"

// GAMEZ
import GAMEZ1 from "../../assets/GAMEZ/01.jpg"
import GAMEZ2 from "../../assets/GAMEZ/02.jpg"
import GAMEZ3 from "../../assets/GAMEZ/03.jpg"
import GAMEZ4 from "../../assets/GAMEZ/04.jpg"
import GAMEZ5 from "../../assets/GAMEZ/05.jpg"

// WHATZAPP
import WHATZAPP1 from "../../assets/WHATZAPP/01.jpg"
import WHATZAPP2 from "../../assets/WHATZAPP/02.jpg"
import WHATZAPP3 from "../../assets/WHATZAPP/03.jpg"
import WHATZAPP4 from "../../assets/WHATZAPP/04.jpg"
import WHATZAPP5 from "../../assets/WHATZAPP/05.jpg"
import WHATZAPP6 from "../../assets/WHATZAPP/06.jpg"

// VIBRATE
import VIBRATE1 from "../../assets/VIBRATE/01.jpg"
import VIBRATE2 from "../../assets/VIBRATE/02.jpg"
import VIBRATE3 from "../../assets/VIBRATE/03.jpg"
import VIBRATE4 from "../../assets/VIBRATE/04.jpg"
import VIBRATE5 from "../../assets/VIBRATE/05.jpg"
import VIBRATE6 from "../../assets/VIBRATE/06.jpg"

// STANDIFY
import STANDIFY1 from "../../assets/STANDIFY/01.jpg"
import STANDIFY2 from "../../assets/STANDIFY/02.jpg"

//REEL TIMES
import REEL_TIMES1 from "../../assets/REEL TIMES/01.png"
import REEL_TIMES2 from "../../assets/REEL TIMES/02.png"
import REEL_TIMES3 from "../../assets/REEL TIMES/03.png"

export const ProjectsData = [
   {
                title: "Virtual Theater",
                premalink: "virtual-theater",
                timeline: "Ongoing",
                description: "A WEB Application built using react to help connect friends together online to watch a movie ",
                link: "https://github.com/nigeljacob/virtual_theater",
                image: VIRTUALTHEATER,
                images: [VIRTUALTHEATER1, VIRTUALTHEATER2, VIRTUALTHEATER3, VIRTUALTHEATER4, VIRTUALTHEATER5, VIRTUALTHEATER6, VIRTUALTHEATER7, VIRTUALTHEATER8],
                video: "",
                tech: ["React", "Express.js", "Socket.io", "WebRTC", "Firebase", "Node.js", "CSS", "Tailwind"]
            },
   {
                title: "Spotify Clone",
                premalink: "spotify-clone",
                timeline: "Ongoing",
                description: "A Desktop and Web Application clone of the original Spotify providing features to listen to music and create playlists.", 
                link: "https://github.com/nigeljacob/spotify",
                image: "https://i.pinimg.com/originals/4b/ee/0a/4bee0a9f477906eb86399c83945deb47.jpg",
                images: [PROJECTSYNK1, PROJECTSYNK2, PROJECTSYNK3, PROJECTSYNK4, PROJECTSYNK5, PROJECTSYNK6],
                video: "",
                tech: ["React", "Electron Framework", "Firebase", "Node.js", "CSS", "Tailwind"]
            },
            {
                title: "PROJECT SYNK",
                premalink: "project-synk",
                timeline: "2024",
                description: "A desktop application built using react combined with electron framework that would help team leaders and project managers to keep their team on track. Advanced progress tracking, file version tracking and real time progress provided by the application would enable a team leader to always know what the member is working on.",
                link: "https://sites.google.com/view/synk/home?authuser=0",
                image: PROJECTSYNK,
                images: [PROJECTSYNK1, PROJECTSYNK2, PROJECTSYNK3, PROJECTSYNK4, PROJECTSYNK5, PROJECTSYNK6],
                video: "https://www.youtube.com/embeded/JF-MRp2CAXY",
                tech: ["React", "Electron Framework", "Firebase", "Node.js", "CSS", "Tailwind"]
            },
            {
                title: "GAMEZ",
                premalink: "gamez",
                timeline: "2024",
                description: "An android Quiz application where you guess countries from their flags. Test your knowledge, learn new flags, and challenge your friends!",
                link: "https://github.com/nigeljacob/GAMEZ",
                image: GAMEZ,
                images: [GAMEZ1, GAMEZ2, GAMEZ3, GAMEZ4, GAMEZ5],
                video: "",
                tech: ["Kotlin", "Jetpack Compose"]

            },
            {
                title: "WHATZAPP",
                premalink: "whatzapp",
                timeline: "2023",
                description: "An android application clone of the original WhatsApp providing features to chat with any user who have joined the platform.",
                link: "https://github.com/nigeljacob/WhatzApp",
                image: WHATZAPP,
                images: [WHATZAPP1, WHATZAPP2, WHATZAPP3, WHATZAPP4, WHATZAPP5, WHATZAPP6],
                video: "",
                tech: ["Java", "Android Views", "Firebase"]
            },
             {
                title: "VIBRATE",
                premalink: "vibrate",
                timeline: "2023",
                description: "An Android application to manage the income and expense of the user providing them with a clear understanding on how much they can save every month",
                link: "https://github.com/nigeljacob/VibrateExpenseManager",
                image: VIBRATE,
                images: [VIBRATE1, VIBRATE2, VIBRATE3, VIBRATE4, VIBRATE5, VIBRATE6],
                video: "",
                tech: ["Java", "Android Views", "Firebase"]
             }, 
             {
                title: "STANDIFY",
                premalink: "standify",
                timeline: "2023",
                description: "An android application built to show real time updates on currently playing Spotify music and a virtual stream desk allowing users to open application on a Mac with just a click.",
                link: "https://github.com/nigeljacob/Standify",
                image: "https://wpguru.co.uk/wp-content/uploads/2019/04/Elgato-Logo.jpg",
                images: [STANDIFY1, STANDIFY2],
                video: "",
                tech: ["Java", "Android Views", "Firebase", "Javascript", "Spotify API"]
             }, 
             {
                title: "REEL TIMES",
                premalink: "reel-times",
                timeline: "2023",
                description: "A web application platform build to allow customers to book tickets for movie shows.",
                link: "https://github.com/nigeljacob/ReelTimesCW",
                image: REEL_TIMES,
                images: [REEL_TIMES1, REEL_TIMES2, REEL_TIMES3],
                video: "",
                tech: ["HTML", "Javascript","CSS"]
             }, 
             {
                title: "DR.24/7 - RESEARCH AND DESIGN PROJECT",
                premalink: "dr-24-7-research-and-design-project",
                timeline: "2022",
                description: "A medical research project to identify various challenges in medical industry focusing on key areas such as medical appointments, medicine distribution, genetic factors in health and healthy food consumptions by providing a design solution to streamline process, enhance patient experience and contribute overall health care efficiency",
                image: "https://cdn0.iconfinder.com/data/icons/medical-health-care-blue-series-set-1/64/a-37-512.png",
                images: [],
                video: "",
                tech: ["Figma"]
             }
]