import html_icon from "./html.png";
import css_icon from "./css.png";
import javascript_icon from "./javascript.png";
import nodejs_icon from "./nodejs.png";
import express_icon from "./expressjs.png";
import react_icon from "./react.png";
import tailwind_css_icon from "./tailwindcss.png";
import mongodb_icon from "./mongodb.png";
import investment_portfolio_manager from "./InvestmentPortfolioManager.png";
import crowdfunding_platform from "./CrowdFundingApp.png";
import home_gardening_assistant_app from "./HomeGardeningApp.png";

export const skills = [
  {
    name: "HTML",
    category: "frontend",
    image: html_icon,
  },
  {
    name: "CSS",
    category: "frontend",
    image: css_icon,
  },
  {
    name: "React.js",
    category: "frontend",
    image: react_icon,
  },
  {
    name: "Tailwind",
    category: "frontend",
    image: tailwind_css_icon,
  },
  {
    name: "JavaScript",
    category: "frontend",
    image: javascript_icon,
  },
  {
    name: "Node.js",
    category: "backend",
    image: nodejs_icon,
  },
  {
    name: "Express.js",
    category: "backend",
    image: express_icon,
  },
  {
    name: "MongoDB",
    category: "backend",
    image: mongodb_icon,
  },
];

export const projects = [
  {
    title: "Investment Portfolio Manager",
    description: "A crowdfunding platform built using React and Firebase.",
    image: investment_portfolio_manager,
    tech: ["React", "Firebase", "CSS"],
    live: "https://app.netlify.com/projects/investviewww/overview",
    github: "https://github.com/Mohiturkade/investment-portfolio-tracker",
  },

  {
    title: "Kindraiser",
    description: "A crowdfunding platform built using React and Firebase.",
    image: crowdfunding_platform,
    tech: ["React", "Firebase", "CSS"],
    live: "https://kindraiser.netlify.app/",
    github: "https://github.com/Mohiturkade/CrowdfundingPlatform",
  },
  {
    title: "Home Gardening App",
    description: "A plant care assistant with reminders and tracking system.",
    image: home_gardening_assistant_app,
    tech: ["JavaScript", "Firebase"],
    live: "https://gardernly.netlify.app/",
    github: "https://github.com/Mohiturkade/HomeGardeningAssistant_App",
  },
];
