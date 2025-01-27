"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Server, Palette, Rocket, CheckCircle2, Clock, Users, Zap } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { SkeletonCard } from "@/components/ui/skeleton-card"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications tailored to your needs using cutting-edge technologies.",
    details: [
      "Responsive design",
      "Frontend development with React",
      "Backend development with Python",
      "API integration",
    ],
    pricing: {
      basic: "₹25,000",
      standard: "₹50,000",
      premium: "₹100,000",
    },
    features: {
      basic: ["Single page website", "Mobile responsive", "Basic SEO", "Contact form"],
      standard: ["Up to 5 pages", "CMS integration", "Advanced SEO", "Analytics integration"],
      premium: ["Custom features", "E-commerce integration", "Performance optimization", "24/7 support"],
    },
  },
  {
    icon: Server,
    title: "Database Management",
    description: "Efficient and secure database solutions for your data-driven applications.",
    details: [
      "Database design and optimization",
      "Data migration and integration",
      "Performance tuning",
      "Backup and recovery solutions",
    ],
    pricing: {
      basic: "₹20,000",
      standard: "₹40,000",
      premium: "₹80,000",
    },
    features: {
      basic: ["Basic setup", "Single database", "Weekly backups", "Email support"],
      standard: ["Multiple databases", "Daily backups", "Performance monitoring", "Priority support"],
      premium: ["Custom architecture", "Real-time backups", "24/7 monitoring", "Dedicated support"],
    },
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces for enhanced user experience.",
    details: [
      "User-centered design approach",
      "Wireframing and prototyping",
      "Interaction design",
      "Usability testing",
    ],
    pricing: {
      basic: "₹15,000",
      standard: "₹30,000",
      premium: "₹60,000",
    },
    features: {
      basic: ["Basic wireframes", "2 design revisions", "Basic UI kit", "Source files"],
      standard: ["Interactive prototype", "5 design revisions", "Custom UI kit", "Design system"],
      premium: ["Full design system", "Unlimited revisions", "Animation library", "Team training"],
    },
  },
  {
    icon: Rocket,
    title: "Project Management",
    description: "Efficient project planning and execution to deliver results on time and within budget.",
    details: ["Agile methodologies", "Risk management", "Resource allocation", "Stakeholder communication"],
    pricing: {
      basic: "₹30,000",
      standard: "₹60,000",
      premium: "₹120,000",
    },
    features: {
      basic: ["Basic planning", "Weekly updates", "Basic reporting", "Email support"],
      standard: ["Detailed planning", "Daily updates", "Advanced reporting", "Priority support"],
      premium: ["Strategic planning", "Real-time updates", "Custom reporting", "24/7 support"],
    },
  },
]

export default function Services() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 space-y-8">
        <Skeleton className="h-10 w-48 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Services
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <service.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="basic">Basic</TabsTrigger>
                    <TabsTrigger value="standard">Standard</TabsTrigger>
                    <TabsTrigger value="premium">Premium</TabsTrigger>
                  </TabsList>
                  <TabsContent value="basic">
                    <div className="space-y-4">
                      <div className="text-2xl font-bold">{service.pricing.basic}</div>
                      <ul className="space-y-2">
                        {service.features.basic.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="standard">
                    <div className="space-y-4">
                      <div className="text-2xl font-bold">{service.pricing.standard}</div>
                      <ul className="space-y-2">
                        {service.features.standard.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="premium">
                    <div className="space-y-4">
                      <div className="text-2xl font-bold">{service.pricing.premium}</div>
                      <ul className="space-y-2">
                        {service.features.premium.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact">Request Service</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Why Choose My Services?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center p-4">
                <Clock className="h-8 w-8 mb-2 text-primary" />
                <h3 className="font-semibold mb-2">Quick Turnaround</h3>
                <p className="text-sm text-muted-foreground">
                  Fast and efficient delivery without compromising quality
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <Users className="h-8 w-8 mb-2 text-primary" />
                <h3 className="font-semibold mb-2">Client-Focused</h3>
                <p className="text-sm text-muted-foreground">Your success is my priority with personalized solutions</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <Zap className="h-8 w-8 mb-2 text-primary" />
                <h3 className="font-semibold mb-2">Modern Tech Stack</h3>
                <p className="text-sm text-muted-foreground">Using the latest technologies for optimal results</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <CheckCircle2 className="h-8 w-8 mb-2 text-primary" />
                <h3 className="font-semibold mb-2">Quality Assured</h3>
                <p className="text-sm text-muted-foreground">Rigorous testing and quality control processes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

