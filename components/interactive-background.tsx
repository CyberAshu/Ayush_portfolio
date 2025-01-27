"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const stars = 100
    const fragments = document.createDocumentFragment()

    for (let i = 0; i < stars; i++) {
      const star = document.createElement("div")
      star.classList.add("star")
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.animationDelay = `${Math.random() * 5}s`
      fragments.appendChild(star)
    }

    container.appendChild(fragments)

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = (clientX - window.innerWidth / 2) * 0.01
      const moveY = (clientY - window.innerHeight / 2) * 0.01
      container.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

