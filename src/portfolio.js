/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";

// Splash Screen (optional, can be disabled)
const splashScreen = {
  enabled: false, // Disabled splash screen
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const greeting = {
  username: "Li Yuanshuai",  // Your name
  title: "Hi, I'm Li Yuanshuai",
  subTitle: emoji(
    "A passionate Computer Science undergraduate student exploring AI and machine learning."
  ),
  resumeLink: "",  // You can add a link to your resume or leave empty
  displayGreeting: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "The Chinese University of Hong Kong, Shenzhen",
      logo: "",  // Optional: add logo image path if you have one
      subHeader: "B.Sc. in Computer Science",
      duration: "2022 – 2026",
      desc: "Currently pursuing my undergraduate degree, focusing on AI, Machine Learning, and Data Science.",
      descBullets: [
        "Studying foundational courses in Computer Science, Mathematics, and Engineering.",
        "Participating in research projects involving machine learning and natural language processing."
      ]
    }
  ]
};

// Research Interests Section
const researchInterests = {
  display: true,
  interests: [
    emoji("🔍 Large Language Models (LLMs)"),
    emoji("🤖 Reinforcement Learning"),
    emoji("📊 Machine Learning and Artificial Intelligence")
  ]
};

// Publications Section (optional)
const publications = {
  display: true, // Set to false if you don't want to show this section
  papers: [
    {
      title: "Illuminating LLM Pathways to Solve User SQL Issues in Real-World Applications"
    }
  ]
};

// Social Media Links (Optional)
const socialMediaLinks = {
  github: "https://github.com/Xu-Jinyan",
  gmail: "lys122090293@gmail.com",
  display: true
};

// Export the settings for use in your portfolio
export {
  greeting,
  educationInfo,
  researchInterests,
  publications,
  socialMediaLinks
};
