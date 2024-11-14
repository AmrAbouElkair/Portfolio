"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Innovators Inc.",
    period: "Jan 2021 - Present",
    description:
      "Lead development of cutting-edge web applications using React and Node.js. Mentored junior developers and implemented best practices for code quality and performance.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "Mar 2018 - Dec 2020",
    description:
      "Developed and maintained multiple client websites and web applications. Worked with a variety of technologies including Vue.js, Express, and MongoDB.",
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    period: "Jun 2016 - Feb 2018",
    description:
      "Started career as a junior developer, focusing on front-end technologies. Gained experience in HTML, CSS, JavaScript, and basic PHP.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="gradient-text mb-12 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Experience
        </motion.h2>
        <div className="relative">
          <div className="timeline-gradient absolute left-1/2 h-full w-1 -translate-x-1/2 transform rounded-full" />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center rounded-full bg-primary shadow-lg shadow-primary/20">
                <h1 className="mx-auto text-lg font-semibold text-primary-foreground">
                  {index + 1}
                </h1>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-[45%] rounded-xl bg-card px-6 py-4 shadow-lg ${
                  index % 2 === 0 ? "ml-auto pl-4" : "mr-auto pr-4"
                }`}
              >
                <h3 className="mb-1 text-lg font-bold">{exp.title}</h3>
                <div>
                  <p className="font-semibold text-primary">{exp.company}</p>
                  <p className="mb-2 text-sm text-muted-foreground">
                    {exp.period}
                  </p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
