import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer - Apprenticeship",
    location: "Bengaluru, India",
    description:
      "Executed over 500 automated tests using Python frameworks, developed 40+ reusable Python scripts to automate SAN boot process, conducted knowledge transfer sessions, and handled multiple tasks.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 - Aug 2022",
  },
  {
    title: "Bachelor of Technology",
    location: "Pondicherry, India",
    description:
      "Completed Bachelor of Technology in Electronics and Communication Engineering with First-Class.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2016 - Oct 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Freelance",
    description:
      "Working as a freelance full-stack developer. Stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. Open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I Worked on full-stack projects based on the latest tech stacks",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
