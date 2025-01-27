"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Mail, Menu, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useMediaQuery } from "@/hooks/use-media-query"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Services", href: "/services", icon: Settings },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true)
  const pathname = usePathname()
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <motion.aside
      className="bg-card text-card-foreground h-screen"
      initial={{ width: isExpanded && !isMobile ? 240 : 80 }}
      animate={{ width: isExpanded && !isMobile ? 240 : 80 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full p-4">
        {!isMobile && (
          <Button variant="ghost" size="icon" className="self-end mb-4" onClick={() => setIsExpanded(!isExpanded)}>
            <Menu />
          </Button>
        )}
        <nav className="space-y-2 flex-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button variant={pathname === item.href ? "default" : "ghost"} className="w-full justify-start">
                <item.icon className="mr-2 h-4 w-4" />
                {isExpanded && !isMobile && <span>{item.name}</span>}
              </Button>
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </motion.aside>
  )
}

