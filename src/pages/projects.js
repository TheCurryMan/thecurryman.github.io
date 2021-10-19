export const allProjects = [
    {
        title: "VAAS",
        event: "SEP Project",
        subtitle: "Revolutionizing news consumption with automated video creation",
        logo: './static/images/vaas.png',
        description: "VaaS (Video as a Service) is a web platform where users can rapidly generate customizable, summarized videos of articles meant for social media consumption. The platform takes in a news article, parses the content, automatically summarizes it and grabs relevant background images from the most frequent topics in the article. Using FFMPEG, it generates a stop motion video with summarized text for every article uploaded.",
        awards: [],
        tools: ['Python', 'Flask', 'FFMPEG'],
        links: [
            {
                title: "Presentation",
                link: "https://www.hackerearth.com/challenges/hackathon/cal-hacks-50/dashboard/d933626/submission/syncup/",
            },
            {
                title: "Example Video",
                link: "https://youtu.be/sUcPHweMBMs",
            },
            {
                title: "Github",
                link: "https://github.com/TheCurryMan/VAAS"
            }
        ],
    },
    {
        title: "SyncUp",
        event: "Cal Hacks V",
        subtitle: "Improving dancing through side-by-side video analysis",
        logo: './static/images/syncup.jpg',
        description: "SyncUp is a web platform where users can get real-time analysis and feedback on their performance when compared to videos of an expert. We utilized a combination of 3 unique algorithms to perform frame-by-frame analysis on both videos and quantify differences in position between each frame. There is also an interactive front-end where users can quickly see a timeline of both videos with color-coordinated segments associating accuracy and specific body parts that were incorrect at certain frames.",
        awards: ['3rd Place Overall', 'Google Case Study Collaboration', 'SkyDeck HotDesk Cohort'],
        tools: ['React', 'Python', 'PoseNet', 'Firebase'],
        links: [
            {
                title: "HackerEarth",
                link: "https://www.hackerearth.com/challenges/hackathon/cal-hacks-50/dashboard/d933626/submission/syncup/",
            },
            {
                title: "Case Study",
                link: "https://edu.google.com/why-google/case-studies/sync-up/?modal_active=none",
            },
            {
                title: "Presentation",
                link: "https://docs.google.com/presentation/d/1-36JWnQFOfordQil98ow5swVq2fxVpigHedGFb1MwrM/edit"
            }
        ],
    },
    {
        title: "E.V.A.C",
        event: "UC Berkeley Data-X",
        subtitle: "Solving the issue of choosing a location for the next electric vehicle charging station",
        logo: './static/images/evac.png',
        description: "E.V.A.C (Electric Vehicle Assisted Charging) is a machine learning model that can accurately predict the best locations to implement electric vehicle charging stations in Columbus, Ohio. We partnered with Honda's R&D team to gather datasets on population density, points of interest, police cameras and natural disasters in Columbus. Logistic regression was our most accurate model which came out on top with 82.28% accuracy. E.V.A.C utilized Google's MyMap to plot all the chosen points to correctly identify possible locations in Columbus that would be appropriate charging locations.",
        awards: ['Honda Collaboration'],
        tools: ['Python', 'SciKit', 'Neural Nets', 'MatPlotLib'],
        links: [
            {
                title: "Presentation",
                link: "https://docs.google.com/presentation/d/1Fr2MnUwbLblFgNcuKgZjqjj364f2gSeF1i40wcLmpDk/edit",
            },
            {
                title: "GitHub",
                link: "https://github.com/data-x-sp19/EVAC",
            },
            {
                title: "Final Report",
                link: "https://docs.google.com/document/d/1jXsTJBmdjDkTkhMDF2-oV9uXikDpU8x_DHMN_w4IsAU/edit"
            }
        ]
    },
    {
        title: "Talky",
        event: "NWHacks",
        subtitle: "A personalized public speaking coach that analyzes and gives feedback on speeches",
        logo: './static/images/talky.png',
        description: "Talky is an iOS application that records the audio of speeches and gives feedback based on 4 key criteria. A python script hosted on a flask server analyzes the audio for pausing, loudness, accuracy and speed and returns the results for the user to understand and improve on. I developed a fun and interactive chat-based UI for the user to communicate with Talky as well as a community feature for sharing of speeches and results.",
        awards: ['Top 10 Overall', 'Most Popular Vote', 'Best Microsoft Hack'],
        tools: ['iOS', 'Swift', 'Python', 'Voice Analysis'],
        links: [
            {
                title: "Devpost",
                link: "https://devpost.com/software/talky",
            },
            {
                title: "App Store",
                link: "https://apps.apple.com/lt/app/talky-coach/id1347323175",
            },
            {
                title: "Final Report",
                link: "https://docs.google.com/document/d/1jXsTJBmdjDkTkhMDF2-oV9uXikDpU8x_DHMN_w4IsAU/edit"
            }
        ]
    },
    {
        title: "Iris",
        event: "Synopsys Science Fair",
        subtitle: "An intuitive and functional Braille Learning Device for the visually impaired",
        logo: './static/images/iris.jpg',
        description: "Iris is a device that helps the visually impaired learn Braille effectively and efficiently. Iris is composed of a cardboard frame with 2 3D-printed octagons that rotate to form any character in the braille language. They are controlled by rotational motors through an Arduino board. An accompanying iOS app, designed with a minimalistic UI serves as the controller for the device learning numbers and letters through Speech-to-text. A flask server hosted on Heroku communicates between the app and device to convert spoken characters to degrees of rotation on the device.",
        awards: ['2nd Place Overall'],
        tools: ['Arduino', 'Python', 'iOS', 'Voice Recognition'],
        links: [
            {
                title: "Detailed Report",
                link: "https://drive.google.com/file/d/1fSQiMn0E0itN6v1zF2_PRvEZDIKE_a2s/view",
            },
            {
                title: "Github",
                link: "https://github.com/TheCurryMan/Osiris"
            }
        ]
    },
    {
        title: "Guru",
        event: "PennApps XV",
        subtitle: "Bringing students high-class education and help through live-streaming technology",
        logo: './static/images/guru.png',
        description: "Guru is a native iOS application that utilizes live-streaming instructional technology to instantaneously connect students with “Gurus” in an effective learning environment. Students and the Guru are synced and placed in a live video call integrated through Twilio to discuss the problem. We developed a custom collaborative whiteboard, allowing both the student and Guru to draw and explain difficult concepts without having to leave the call.",
        awards: ['Top 10 Overall', '$1000 Grant from 1517', 'Best Education Hack'],
        tools: ['iOS', 'Swift', 'Twilio', 'Video Streaming'],
        links: [
            {
                title: "Devpost",
                link: "https://devpost.com/software/guru-0pzsr1",
            },
            {
                title: "YouTube",
                link: "https://www.youtube.com/watch?v=W0Xh0cAlSIA",
            }
        ]
    },
    {
        title: "MedicAI",
        event: "Synopsys Science Fair",
        subtitle: "The classification of medical problems through SMS and Machine Learning",
        logo: './static/images/medicai.png',
        description: "MedicAI is an SMS-based platform focused on bringing quick and accurate medical diagnoses to 3rd world countries. A user can either send an image of the disease or a text of the symptoms they face. I wrote a classification algorithm for common visible ailments and a custom NLP algorithm to that extracted symptoms based on value association and frequency. Once the disease had been classified, I utilized location analysis to build a heatmap of location-specific outbreaks and further improve my accuracy. After cross validation, the final service had an accuracy of 90% with images and 94% with text.",
        awards: ['Grand Prize Winner - $1000'],
        tools: ['Python', 'NLP', 'Twilio', 'Text Classification'],
        links: [
            {
                title: "Github",
                link: "https://github.com/TheCurryMan/MedicAI",
            },
        ]
    },
    {
        title: "PinPoint",
        event: "SM Hacks",
        subtitle: "Generating the fastest path in a grocery store to grab your items and get out",
        logo: './static/images/pinpoint.png',
        description: "PinPoint is an android application that generates the fastest path to grab all your items in a grocery store. My team and I created a mock bitmap of an actual store with 0’s representing free space and 1’s representing obstacles. Importing the user’s shopping list we figured out the items locations on the bitmap/2D array. We then utilized the A* algorithm on the bitmap matrix to find the best path between the individual points. The android application has an 8-Bit UI with animating lines, pulsating items and disappearing pathways as the user travels from item to item.",
        awards: ['Best Android App'],
        tools: ['Android', 'Java', 'A* Algorithm'],
        links: [
            {
                title: "Devpost",
                link: "https://devpost.com/software/pinpoint-o92qis",
            },
            {
                title: "Github",
                link: "https://github.com/TheCurryMan/PinPoint"
            }
        ]
    },
    {
        title: "ICON",
        event: "CruzHacks",
        subtitle: "A clothing classifier that helps identify other outfits and discover the latest fashion trends",
        logo: './static/images/icon.png',
        description: "ICON is an iOS application focused on making fashion accessible to everyone. Using a convolutional neural network, we wrote an image classifier with 10 different categories to document and record the user’s closet. The user selects and stores their outfit everyday; If someone sees their outfit and likes it, they can save that outfit and all nearby outfits with a tap of a button. The outfit discovery feature is based on a location proximity of 10 meters. We also utilized frequency analysis on user outfits in an area to predict current and future fashion trends.",
        awards: ['Project YX Fashion Prize'],
        tools: ['iOS', 'Firebase', 'CNNs', 'Image Classification'],
        links: [
            {
                title: "Devpost",
                link: "https://devpost.com/software/showstopper",
            },
            {
                title: 'Github',
                link: "https://github.com/TheCurryMan/Showstopper"
            }
        ]
    },
    {
        title: "60Seconds",
        event: "BASE Hacks",
        subtitle: "Storing daily memories through a simple phone call",
        logo: './static/images/60seconds.png',
        description: "60Seconds is an iOS Application that calls the user every day at 9 PM to record a 60-second description of what happened throughout the day. The application acts as an online journal for the user; We utilized Twilio to make the recurring call and stored the audio in Firebase. We designed a custom calendar for the iOS Application that stored both the audio of the recording and the transcribed version. By running sentiment analysis, we determined if the user was happy or not on that day and classified it accordingly. A Flask server hosted on Heroku was used to call the user and analyze the recording.",
        awards: ["First Place Overall"],
        tools: ['iOS', 'Firebase', 'Twilio'],
        links: [
            {
                title: "Devpost",
                link: "https://devpost.com/software/60seconds",
            },
        ]
    },
    {
        title: "Rhythm",
        event: "PennApps XVI",
        subtitle: "Bringing algorithmic stock trading to the masses",
        logo: './static/images/rhythm.png',
        description: "Rhythm is a web application that converts direct english sentences and commands into algorithms executable for the stock market. I utilized Natural Language Processing to analyze the command, remove stopwords and comprehend technical terms to generate the investment command. I then leveraged Quantopian and Zipline to fetch historical stock data and run the generated stock algorithm against it. Once the results came in, I build a data visualization dashboard with MatPlotLib to view and predict how their algorithm did in the past and learn how it would perform in the present. The entire website was built using React and Node.JS.",
        awards: [],
        tools: ['Python', 'Quantopian', 'React', 'Node'],
        links: [
            {
                title: "Devpost",
                link: "https://devpost.com/software/rhythm-fx0juw",
            },
            {
                title: "Github",
                link: "https://github.com/sean-hackett/Rhythm",
            }
        ]
    }
]

// Template
// ,
//     {
//         title: "",
//         event: "",
//         subtitle: "",
//         logo: '',
//         description: "",
//         awards: [],
//         links: [
//             {
//                 title: "",
//                 link: "",
//             },
//         ]
//     }
