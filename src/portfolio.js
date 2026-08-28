/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Domain-based identity switch — same deployment, different name/email
// depending on which custom domain the visitor is on.
const hostname =
  typeof window !== "undefined" ? window.location.hostname.toLowerCase() : "";
const isYadiguDomain = hostname.includes("yadigu");

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
  username: isYadiguDomain ? "Yadi Gu" : "Edith Gu",
  title: isYadiguDomain ? "Hi, I'm Yadi Gu" : "Hi, I'm Edith Gu",
  subTitle: emoji(
    "AI Engineer who designs and ships production LLM systems end to end — RAG pipelines, multi-agent workflows (LangGraph), and LLM-as-a-judge evaluation harnesses, deployed on AWS with React/FastAPI/Spring Boot backends. 🤖 Currently pursuing an MS in Data Science at UC San Diego; previously built agentic Q&A and document-AI systems as an AI Engineer Intern at AskTuring.ai, and shipped high-throughput distributed backends as a Software Engineer Intern."
  ),
  resumeLink: "resume.pdf", // this value just needs to be non-empty — it gates the button, the actual link always opens /resume.html (which embeds public/resume.pdf)
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/EdithGu",
  linkedin: "https://linkedin.com/in/edithGu/",
  // Email is intentionally not an icon here — mailto: links open a blank tab
  // with nothing useful for most visitors. The email address is shown as
  // plain, clickable text in the Contact section instead.
  gmail: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI ENGINEER FOCUSED ON AGENTIC SYSTEMS, RAG, AND SHIPPING ML PRODUCTS END-TO-END",
  skills: [
    emoji(
      "⚡ Design and ship tool-calling / agentic LLM systems — decision loops, structured tool schemas, and eval harnesses"
    ),
    emoji(
      "⚡ Build retrieval and document-AI pipelines (RAG, vector search, table extraction) that reduce hallucination and recover edge cases"
    ),
    emoji(
      "⚡ Full-stack delivery from FastAPI/Spring Boot backends to React frontends, containerized and deployed on AWS/GCP"
    ),
    emoji(
      "⚡ Instrument LLM systems with eval harnesses (LLM-as-a-judge) and production observability (Prometheus/Grafana)"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California San Diego",
      logo: require("./assets/images/ucsdLogo.png"),
      subHeader: "Master of Science, Data Science",
      duration: "September 2025 - Present",
      desc: "Coursework: Algorithm Analysis, Database Management, Machine Learning, Web Development, Distributed Systems.",
      descBullets: []
    },
    {
      schoolName: "Zhongnan University of Economics and Law",
      logo: require("./assets/images/zhongnanLogo.png"),
      subHeader: "Bachelor of Science, Data Science",
      duration: "September 2021 - June 2025",
      desc: "GPA: 3.9 / 4.0",
      descBullets: []
    }
  ]
};

// Work experience section
// Kept intentionally brief (one-line summary + tech stack per role) — the
// full bullet-level detail lives on the resume, not duplicated here.

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Engineer Intern",
      company: "AskTuring.ai",
      date: "Mar 2026 – May 2026",
      desc: "Built a RAG + agentic Q&A platform (6-role LangGraph workflow, AWS Bedrock/Claude) for 50 financial-industry clients, with an LLM-as-a-judge eval framework that drove accuracy from 68 to 89 out of 100.",
      techStack: ["LangGraph", "AWS Bedrock", "Claude", "Pydantic", "LangSmith", "Prometheus/Grafana"]
    },
    {
      role: "Software Engineer Intern",
      company: "Hubei Ronghai Investment Co., Ltd.",
      date: "Jun 2025 – Aug 2025",
      desc: "Cut p99 latency of a supply-chain financing platform from 2.1s to 300ms and eliminated duplicate disbursements across 4,000+ transactions, then containerized services on Kubernetes with a CI/CD load-test gate.",
      techStack: ["Spring Boot", "RocketMQ", "Redis", "MySQL", "Docker", "Kubernetes", "GitHub Actions"]
    },
    {
      role: "Software Engineer Intern",
      company: "Wuhan FraserGen Co., Ltd.",
      date: "Feb 2024 – Mar 2024",
      desc: "Built a RAG-powered genomics research assistant with real-time voice interaction, cutting hallucinated answers by 35 points via recursive/semantic chunking and Qdrant retrieval tuning.",
      techStack: ["LangChain", "FastAPI", "Qdrant", "WebSockets", "GPT-4-Turbo", "Coqui TTS"]
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
// Card face stays to a one-line tagline; techStack + highlights only show in
// the detail modal on click — keeps the grid compact, detail concise.

const bigProjects = {
  title: "Projects",
  subtitle: "A MIX OF SOLO BUILDS AND TEAM PROJECTS SPANNING ASR/SPEECH, FULL-STACK APPS, AND AI-FOR-RESEARCH TOOLS",
  projects: [
    {
      projectName: "MedScribe",
      tagline: "On-premise clinical dictation assistant",
      techStack: [
        "Python",
        "PyTorch",
        "FastAPI",
        "WebSocket",
        "Qwen2.5-7B (vLLM)",
        "Qdrant",
        "LoRA / PEFT"
      ],
      highlights: [
        "Streams Whisper-large-v3 transcription over WebSocket, corrected via a local Qdrant medical-term index and Qwen2.5-7B — fully on-device, no cloud calls.",
        "Fine-tuned Whisper with LoRA on 65h of medical dialogue + accented speech, cutting medical-term error rate 18% → 11% and accented-speech error rate 15% → 9%."
      ],
      githubUrl: "https://github.com/EdithGu/medscribe-whisper-lora"
    },
    {
      projectName: "Twitch Explorer",
      tagline: "Full-stack Twitch content discovery app",
      techStack: ["React", "Spring Boot", "MySQL", "Spring Security", "OpenFeign"],
      highlights: [
        "Content-based recommendation engine seeded from favorite history, with Caffeine-cached results invalidated on every favorite/unfavorite.",
        "Integrated Twitch's Helix API via OAuth2 client-credentials, kept fully decoupled from user-facing session auth."
      ],
      githubUrl: "https://github.com/EdithGu/twitch-explorer"
    },
    {
      projectName: "SocialSphere",
      tagline: "AI-powered social network",
      techStack: ["Go", "React", "Elasticsearch", "GCS", "OpenAI DALL-E 3", "JWT"],
      highlights: [
        "Generates images from text prompts via a server-side DALL-E 3 proxy — the OpenAI key never reaches the browser.",
        "Elasticsearch doubles as primary datastore and search engine, with users/posts indexed on write."
      ],
      githubUrl: "https://github.com/EdithGu/socialsphere"
    },
    {
      projectName: "PeerMind",
      tagline: "AI meta-review generator for academic papers",
      techStack: ["PyTorch", "HuggingFace", "PEFT / LoRA", "FLAN-T5", "BART", "PEGASUS-X"],
      highlights: [
        "Fine-tuned seq2seq models with LoRA on 8,614 real ICLR 2025 papers scraped from the OpenReview API.",
        "Turns a paper's reviews into an Area-Chair-style meta-review + accept/reject decision. Team project — contributed the LoRA fine-tuning pipeline."
      ],
      githubUrl:
        "https://github.com/hannahmypham/PeerMind-AI-Powered-Academic-Paper-Review"
    },
    {
      projectName: "TrailKarma",
      tagline: "Offline-first hiking app with community rewards",
      techStack: ["Kotlin/Compose", "FastAPI", "Databricks", "Solana/Anchor", "React/Vite", "BLE"],
      highlights: [
        "BLE phone-to-phone relay lets hikers share hazard/trail reports with zero signal; Solana-based karma points reward verified contributions.",
        "On-device audio ML detects wildlife species from environmental sounds. Team project — built the FastAPI backend + Databricks sync and the web demo."
      ],
      githubUrl: "https://github.com/ACMCMC/trailkarma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
// TODO: fill in once you have real certifications/awards to show — left empty on purpose, no placeholder content

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, certifications, and other things worth highlighting.",
  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "", // Intentionally left blank — a public site shouldn't list a phone number; add one only if you're comfortable with that being public
  email_address: isYadiguDomain ? "xxx" : "edithg3120@gmail.com" // TODO: replace "xxx" with the real inbox for the yadigu domain
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
