"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TypeAnimation } from "react-type-animation"
import { useState, useRef } from "react"
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Star,
  Users,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CoffeeCounter } from "@/components/coffee-counter"

const projects = [
  { name: "Aaradhya Aikyam", description: "Wedding planning platform", image: "aaradhyaaikyam.png" },
  { name: "Hackathon Game", description: "Real-time coding challenge", image: "hackathon.png" },
  { name: "Animal Foundation", description: "Non-profit website", image: "animalfoundation.png" },
]

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Co",
    text: "Ayush is an exceptional developer. His work on our project was outstanding.",
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    text: "Working with Ayush was a pleasure. He's professional, skilled, and always delivers on time.",
  },
  {
    name: "Alex Johnson",
    role: "Startup Founder",
    text: "Ayush's expertise in Python and web development was crucial to our project's success.",
  },
]

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div ref={scrollRef} className="min-h-screen">
      <motion.div
        className="h-screen flex flex-col items-center justify-center p-4 space-y-8"
        style={{ opacity, scale }}
      >
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Ayush Sen
          </h1>
          <TypeAnimation
            sequence={["Python Developer", 2000, "Full Stack Enthusiast", 2000, "BCA Student", 2000]}
            wrapper="h2"
            speed={50}
            className="text-xl md:text-2xl"
            repeat={Number.POSITIVE_INFINITY}
          />
        </motion.div>

        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
        </motion.div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Button size="lg" asChild className="relative">
            <Link href="/portfolio">Explore My Work</Link>
          </Button>
          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 transition duration-1000 -z-10"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>

      <section className="py-16 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What I Do
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Building responsive and dynamic web applications",
                link: "/services",
              },
              {
                icon: Briefcase,
                title: "Project Management",
                description: "Leading teams to deliver successful projects",
                link: "/services",
              },
              {
                icon: GraduationCap,
                title: "Continuous Learning",
                description: "Always expanding my skills and knowledge",
                link: "/about",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <Button variant="outline" asChild className="mt-auto">
                      <Link href={item.link}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Client Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <p className="mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              className="text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I'm always open to new opportunities and exciting projects. Whether you need a website, a custom
              application, or technical consultation, I'm here to help.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Star className="h-6 w-6 text-yellow-400 mr-2" />
              <span className="text-2xl font-bold">20+</span>
              <span className="ml-2">Projects Completed</span>
            </motion.div>
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Users className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">15+</span>
              <span className="ml-2">Happy Clients</span>
            </motion.div>
            <CoffeeCounter />
          </div>
        </div>
      </section>
    </div>
  )
}

