"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Calendar, Download } from "lucide-react"

const skills = [
  { name: "Python", level: 90 },
  { name: "Django", level: 85 },
  { name: "FastAPI", level: 80 },
  { name: "React", level: 75 },
  { name: "HTML/CSS", level: 85 },
  { name: "Git", level: 80 },
  { name: "MySQL/PostgreSQL", level: 75 },
  { name: "REST APIs", level: 85 },
]

const experiences = [
  {
    title: "Python Developer",
    company: "StevesAi Lab, Indore",
    period: "Dec 2024 - Present",
    description:
      "Currently working on developing Python-based solutions and contributing to projects involving generative AI. Collaborate with cross-functional teams to build innovative AI-powered applications, optimizing workflows and implementing state-of-the-art algorithms.",
  },
  {
    title: "Team Leader",
    company: "The Hiring Company",
    period: "Jan 2023 - Mar 2024",
    description:
      "Led a team of 5 developers, managed project timelines, and coordinated tasks to achieve company goals. Enhanced team performance through leadership and strategic planning, resulting in a 30% increase in project delivery efficiency.",
  },
  {
    title: "Python Developer Intern",
    company: "CyberGrow Programming & Computer Institute, Indore",
    period: "July 2024 - Dec 2024",
    description:
      "Developed and maintained Python applications, collaborated with senior developers on project implementations, and participated in code reviews. Implemented new features that improved application performance by 25%.",
  },
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    period: "Jan 2022 - May 2022",
    description:
      "Created responsive websites for small businesses, implemented SEO strategies, and provided ongoing maintenance and support. Increased client web traffic by an average of 40% through optimized designs and SEO techniques.",
  },
]

export default function About() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="md:col-span-1">
          <CardContent className="flex flex-col items-center p-6">
            <Image
              src="ayush.png?height=200&width=200"
              alt="Ayush Sen"
              width={200}
              height={200}
              className="rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Ayush Sen</h2>
            <p className="text-center text-muted-foreground mb-4">
              Python Developer | Full Stack Enthusiast | BCA Student
            </p>
            <div className="flex space-x-4 mb-4">
              <Button asChild variant="outline" size="icon">
                <a href="https://github.com/Cyberashu" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://www.linkedin.com/in/ayush-sen-b8a51b273/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="mailto:mr.ayushsen@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <ul className="text-sm space-y-2">
              <li>
                <strong>Location:</strong> Indore, India
              </li>
              <li>
                <strong>Email:</strong> mr.ayushsen@gmail.com
              </li>
              <li>
                <strong>Education:</strong> Bachelor of Computer Applications (BCA)
              </li>
              <li>
                <strong>Languages:</strong> English, Hindi
              </li>
            </ul>
            <Button className="mt-4" asChild>
              <Link href="https://calendly.com/mr-ayushsen/30min">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Meeting
              </Link>
            </Button>
            <Button className="mt-2" asChild>
              <a href="Ayush_Python_Developer.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              I am a passionate Python Developer and Full Stack Enthusiast with a strong foundation in web development
              and database management. Currently pursuing my Bachelor of Computer Applications, I combine academic
              knowledge with practical experience to deliver high-quality software solutions.
            </p>
            <p className="mb-4">
              My expertise lies in developing robust backend systems using Python frameworks like Django and FastAPI,
              coupled with frontend technologies such as React. I have a proven track record of leading development
              teams, managing projects efficiently, and implementing innovative solutions that drive business growth.
            </p>
            <p>
              I am constantly expanding my skill set and staying updated with the latest industry trends to provide
              cutting-edge solutions to complex problems. My goal is to create impactful, scalable, and user-friendly
              applications that make a difference in people's lives.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm font-medium">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {experiences.map((exp, index) => (
                <li key={index} className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {exp.period}
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.title} - {exp.company}
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{exp.description}</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-sm text-muted-foreground">Govt. Madhav Science Pg College</p>
            <p className="mt-2">Specialization in Python full-stack development</p>
            <p className="mt-4">
              Completed Python full-stack development course at Cybergrow Programming and Computer Training Institute,
              Indore.
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
              <li>Advanced Python Programming</li>
              <li>Web Development with Django and FastAPI</li>
              <li>Database Management Systems</li>
              <li>Frontend Development with React</li>
              <li>Software Engineering Principles</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

