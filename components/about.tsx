"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After graduating in{" "}
  <span className="font-medium">Accounting</span>, I pursued my passion for programming through a coding bootcamp, mastering{" "}
  <span className="font-medium">full-stack web development</span>.{" "}
  <span className="italic">Problem-solving</span> is my favorite part of programming. My core stack includes{" "}
  <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. Currently seeking a{" "}
  <span className="font-medium">full-time software developer position</span>.
</p>

<p>
  <span className="italic">Outside coding</span>, I enjoy gaming, movies, and time with my dog. I love{" "}
  <span className="font-medium">learning new things</span> like{" "}
  <span className="font-medium">history, philosophy,</span> and playing the guitar.
</p>
    </motion.section>
  );
}
