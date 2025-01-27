"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CoffeeCounter() {
  const [coffeeCount, setCoffeeCount] = useState(1000)

  const incrementCoffee = () => {
    setCoffeeCount((prevCount) => prevCount + 1)
    // Open Buy Me a Coffee in a new tab
    window.open("https://buymeacoffee.com/cyberashu", "_blank")
  }

  return (
    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <Coffee className="h-6 w-6 text-amber-600 mr-2" />
        <span className="text-2xl font-bold">{coffeeCount}+</span>
        <span className="ml-2">Cups of Coffee</span>
      </div>
      <Button
        variant="outline"
        onClick={incrementCoffee}
        className="flex items-center gap-2 hover:bg-amber-50 dark:hover:bg-amber-900/20"
      >
        <Coffee className="h-4 w-4" />
        <span>Buy me a coffee</span>
      </Button>
    </motion.div>
  )
}

