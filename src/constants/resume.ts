export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
  link?: string;
}

export interface AwardItem {
  name: string;
  organization: string;
  date: string;
}

export interface ProjectItem {
  name: string;
  award?: string;
  bullets: string[];
  link?: string;
}

export const experience: ExperienceItem[] = [
  {
    company: 'Quanta',
    role: 'Founding Engineer',
    duration: 'Spring 2024 - Spring 2026',
    link: 'https://www.usequanta.com/',
    bullets: [
      'Third hire at Quanta; built the core financial and accounting infrastructure (python, fastAPI, postgres, nextjs) powering bookkeeping for 80 venture-backed companies from Seed to Series D, processing 1M+ transactions and $1B+ in volume',
      'Architected atomic, idempotent workflows (temporal, redis) for real-time spend processing and reconciliation, enabling reliable, fault-tolerant financial operations at scale',
      'Designed and implemented accrual-based revenue recognition system (stripe) handling invoices, payments, and schedules tightly integrated with accounting logic',
      'Built AI-driven transaction extraction layer feeding into a configurable rules engine (openAI, terraform, s3), enabling 95% automated classification of vendors, departments, and categories',
      'Team lead of 3 for Prism, an AI-powered financial reporting agent capable of generating and executing SQL queries, reducing ad-hoc reporting time from days to seconds',
      'Implemented observability and reliability infrastructure (sentry, datadog) across services, scheduled cron jobs for automated reconciliations (render), monitoring via internal control panel',
    ],
  },
  {
    company: 'Cardinal Labs',
    role: 'Co-founder',
    duration: 'Spring 2022 - Summer 2023',
    link: 'https://www.cardinal.so/',
    bullets: [
      'Worked on the cutting-edge to scale Solana blockchain via smart-contracts (rust), app development (react, typescript) and related cloud infrastructure',
      'With a team of 5, built and launched 15+ smart contracts, SDKs, and products, reached 6m+ transactions, 150k+ unique users, and 40k MAU',
      'Led and built our core events product from idea to 20+ customers utilizing our application',
    ],
  },
  {
    company: 'TigerTalk',
    role: 'CTO, Co-founder',
    duration: 'Winter 2019 - Summer 2021',
    link: 'https://www.tigertalk.io/',
    bullets: [
      'Designed, developed, and scaled communications coaching software combining human feedback and AI',
      'Built a client management platform (react, typescript) with conversational intelligence and audio/video analysis (python, aws lambda) serverless architecture',
      'Deployed 10+ white-labeled instances, 30k in beta revenue from speech & debate programs and training firms',
    ],
  },
  {
    company: 'Amazon',
    role: 'Software Engineer (Intern)',
    duration: 'Summer 2020',
    bullets: [
      'Automatically extrapolated insights from large datasets through graph theory modeling (python) and clustering algorithms',
      'Deployed serverless architecture (aws lambda, aws s3), discovery of insights from large datasets became 90% more efficient',
    ],
  },
  {
    company: 'Apple',
    role: 'Software Engineer (Intern)',
    duration: 'Summer 2019',
    bullets: [
      'Increased efficiency of News Preview tool by 95% through updated backend integration (swift)',
      'Developed on-device preview that improved ease of access for hundreds of publishers and developers, effectively worked with a cross-functional team to upgrade News Preview',
    ],
  },
  {
    company: 'TheCodex',
    role: 'Founder',
    duration: 'Summer 2017 - Summer 2021',
    link: 'https://www.udemy.com/user/avinashjain5/',
    bullets: [
      'Built an ed-tech platform helping students learn Python through projects (react, gatsby), led platform growth to 400 weekly new users, 10K+ users worldwide',
      'Managed a team of 5 to create our project-based platform from idea to launch in 4 months',
      'Recorded over 300 hours of content for distribution, 1 million+ students on Udemy, 16 courses, 75K+ subs on YouTube',
    ],
  },
  {
    company: 'Cal Hacks',
    role: 'Executive Director',
    duration: 'Spring 2019 - Winter 2020',
    link: 'https://www.calhacks.io/',
    bullets: [
      'Led a 26-person director team to pivot and spearhead 2 new virtual initiatives during the height of the pandemic',
      'Launched a 2,000-person global hackathon (hack:now) in just 4 weeks',
      'Experimented with Hack Month, a month-long side project hackathon implementing high-touch interaction and cohorts',
    ],
  },
];

export const awards: AwardItem[] = [
  {
    name: 'Accel Scholar',
    organization: 'Accel',
    date: '',
  },
  {
    name: 'Contrary Fellow',
    organization: 'Contrary Capital',
    date: '',
  },
  {
    name: '3rd Place Overall',
    organization: 'Cal Hacks 8.0',
    date: '',
  },
  {
    name: 'Best Microsoft Hack / Most Popular Hack / Top 30',
    organization: 'NWHacks',
    date: '',
  },
  {
    name: 'Top 10 Overall / Best Educational Hack',
    organization: 'PennApps XV',
    date: '',
  },
];

export const education = {
  school: 'University of California, Berkeley',
  duration: 'Fall 2018 - Spring 2022',
  major: 'Majored in Electrical Engineering and Computer Science',
  honors: 'Top <1% of all UC Berkeley students (Regents Scholar)',
  gpa: 'GPA: 3.78',
};

export const skills = {
  softwareDevelopment: [
    'Python',
    'Swift',
    'Objective-C',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'NextJS',
    'SQL',
    'C/C++',
    'Java',
    'Full Stack Development',
    'iOS Development',
    'Machine Learning',
  ],
  platforms: [
    'FastAPI',
    'PostgreSQL',
    'Redis',
    'Temporal',
    'Stripe',
    'OpenAI',
    'Firebase',
    'Supabase',
    'Flask',
    'Django',
    'AWS S3',
    'AWS Lambda',
    'AWS EC2',
    'LangChain',
    'Terraform',
    'HeyAPI',
  ],
  tools: ['Figma', 'Sentry', 'Datadog', 'Render', 'Blacksmith', 'Amplitude', 'Google Analytics'],
};

export const projects: ProjectItem[] = [
  {
    name: 'Cascade',
    link: 'https://x.com/avinashj_/status/2023161422901821466?s=20',
    bullets: [
      'Built a local-first desktop IDE (electron, react, typescript) rethinking Git as a visual, branch-native development canvas',
      'Engineered a Git orchestration layer over worktrees and private refs to support parallel experimentation and stacked branches without history pollution',
      'Designed a multi-process architecture with secure IPC, background Git execution, and live dev-server previews',
      'Embedded AI agents (claude code) directly into the branch graph for context-aware code generation and commit synthesis',
    ],
  },
  {
    name: 'Melt Labs',
    bullets: [
      'Built an AI dubbing tool (nextJS, typescript, python) for creators and instructors to launch content in different languages',
      'Developed a dubbing pipeline that used state-of-the-art transcription, custom translations with GPT prompting, and voice-cloned audio generation (openAI, whisper, wav2lip)',
      'Created tools to offer both white-gloved and self-service dubbing, wrote scripts for Udemy uploading (python)',
      'Launched over 30 dubbed courses and processed hundreds of hours of content for customers, worked with Phil Ebiner, Diego Davila and FreeCodeCamp',
    ],
  },
  {
    name: 'Gumball',
    bullets: [
      'Built an interactive Python coding exercise platform with fully generated content',
      'Created a generative pipeline of exercises (openAI, langchain) to produce the question text, solutions, test cases and hints',
      'Built an integrated editor and chatbot (nextJS, firebase) to solve exercises, provide real-time help, and track progress',
    ],
  },
  {
    name: 'SyncUp',
    award: 'Won 3rd Place at Cal Hacks',
    bullets: [
      'Built a web platform that performed real-time analysis on dance videos and gave feedback when compared to videos of an expert',
      'Utilized a combination of 3 comparison algorithms to quantify differences between videos and give critical feedback',
    ],
  },
];

export const contactInfo = {
  email: 'avinashj@berkeley.edu',
  website: 'avinashj.com',
  linkedin: 'linkedin.com/in/avinashj1',
};
