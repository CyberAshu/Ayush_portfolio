"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Aaradhya Aikyam",
    description: "A comprehensive wedding and event planning platform using Django and React.",
    image: "aaradhyaaikyam.png",
    link: "#",
    technologies: ["Django", "React", "PostgreSQL", "Redux"],
    features: [
      "User and admin dashboards",
      "Event management system",
      "Vendor management",
      "Payment processing integration",
    ],
  },
  {
    title: "Hackathon Game",
    description: "A FastAPI-based Hackathon game with dynamic prompt generation and real-time response matching.",
    image: "hackathon.png",
    link: "https://hack-a-thons-game.vercel.app/",
    technologies: ["FastAPI", "Python", "WebSockets", "NLP"],
    features: [
      "Real-time gameplay",
      "Dynamic prompt generation",
      "Integration with language models",
      "Leaderboard system",
    ],
  },
  {
    title: "AaradhyaDharma",
    description: "Aaradhya Dharma delivers innovative tech solutions, including web and mobile app development, and custom software to boost business efficiency.",
    image: "aaradhyadhrma.png",
    link: "https://aaradhyadhrma.life/",
    technologies: ["Django", "React", "PostgreSQL", "Redux"],
    features: [
      "Responsive web and mobile app designs",
      "Scalable and secure web applications",
      "Performance optimization for faster load times",
      "Custom software solutions tailored to business needs",
    ],
  },
  {
    title: "Animal Foundation Website",
    description: "A Django-based website with geolocation API, post creation, and responsive design.",
    image: "animalfoundation.png",
    link: "#",
    github: "https://github.com/Cyberashu/",
    technologies: ["Django", "GeoDjango", "Leaflet.js", "Bootstrap"],
    features: [
      "Interactive map for animal locations",
      "User-generated content system",
      "Donation management",
      "Responsive design for mobile and desktop",
    ],
  },
  
]

export default function Portfolio() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardContent className="flex justify-between">
                {project.link && project.link !== "#" && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}